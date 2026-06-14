import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';
import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';
import { QuestionService } from '../business-logic/question-service.js';
import './player-registration.js'; // Import the new PlayerRegistration component

class GameSetupPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        import('../components/toast-component.js');

        const gameHash = HashHelper.generateGameHash();
        await gameStateService.CreateGameAsync(gameHash); // Create a new game

        // Decide the question order once, here on the creating client, and
        // persist it so every player who joins sees the same sequence. The
        // backend only stores the integer indexes; it stays agnostic of the
        // question content.
        const questionOrder = QuestionService.createShuffledOrder(configService.questions.length);
        await gameStateService.SetQuestionOrderAsync(gameHash, questionOrder);

        const t = (key) => translationService.t(key);
        this.shadowRoot.innerHTML = `
            <style>
                @import '${new URL('../styles.css', import.meta.url).href}';
            </style>
            <toast-component id="toast"></toast-component>
            <div class="padding-x-5">
                <div class="card">
                    <h1 style="margin-top: 0px">${t('setup.title')}</h1>
                    <div>
                        <label>${t('common.gameId')}</label>
                        <div class="input-group" style="justify-content: space-between; align-items: center;">
                            <input class="input" type="text" id="game-id" value="${gameHash}" disabled/>
                            <button id="share-button" class="btn btn-primary">${t('setup.share')}</button>
                        </div>
                        <br>
                    </div>
                    <player-registration game-hash="${gameHash}"></player-registration>
                    <label class="input-group" style="align-items: center; gap: 8px; margin: 8px 0;">
                        <input type="checkbox" id="slow-mode-toggle" />
                        <span>${t('setup.slowMode')}</span>
                    </label>
                    <p style="font-size: 0.85em; margin: 0 0 12px;">${t('setup.slowModeDescription')}</p>
                    <button id="start-game-button" class="btn btn-primary btn-block">${t('setup.begin')}</button>
                    <button id="back-to-menu-button" class="btn btn-primary btn-block">${t('common.backToMainMenu')}</button>
                </div>
            </div>
        `;
        this.addEventListeners(gameStateService, gameHash);
    }

    addEventListeners(gameStateService, gameHash) {
        this.shadowRoot.querySelector('#share-button').addEventListener('click', () => {
            // Copy the game ID to the clipboard
            const gameId = this.shadowRoot.getElementById('game-id').value;
            navigator.clipboard.writeText(gameId).then(() => {
                this.showToast(translationService.t('setup.gameIdCopied', { gameId }));
            }).catch(err => {
                console.error('Failed to copy game ID: ', err); // Log any errors
                this.showToast(translationService.t('setup.copyFailed'));
            });
        });

        this.shadowRoot.querySelector('#start-game-button').addEventListener('click', async () => {
            const gameId = this.shadowRoot.getElementById('game-id').value;
            const game = await gameStateService.GetGameAsync(gameId);
            if (!game || game.playerScores.length == 0) {
                this.shadowRoot.querySelector('player-registration').setError(translationService.t('setup.noPlayers'));
                return;
            }
            // Persist the slow-mode choice while still in Setup so every player
            // gets the same mode once the game starts.
            const slowMode = this.shadowRoot.getElementById('slow-mode-toggle').checked;
            await gameStateService.SetSlowModeAsync(gameId, slowMode);
            if (gameStateService.StartGame(gameId)) { // Start the game
                window.location.hash = `/game?gameId=${gameId}`;
            } else {
                alert(translationService.t('setup.startFailed'));
            }
        });

        this.shadowRoot.querySelector('#back-to-menu-button').addEventListener('click', () => {
            // Call disconnect on player-registration to clear interval
            const playerRegistration = this.shadowRoot.querySelector('player-registration');
            if (playerRegistration && typeof playerRegistration.disconnect === 'function') {
                playerRegistration.disconnect();
            }
            window.location.hash = '#/';
        });
    }

    showToast(message) {
        const toast = this.shadowRoot.getElementById('toast');
        if (toast) {
            toast.show(message);
        }
    }
}

customElements.define('game-setup-page', GameSetupPage);
