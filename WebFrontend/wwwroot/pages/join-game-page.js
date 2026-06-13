import { gameStateService } from '../business-logic/game-state-service.js';
import { translationService } from '../business-logic/translation-service.js';
import './player-registration.js'; // Import the PlayerRegistration component

class JoinGamePage extends HTMLElement {
    connectedCallback() {
        const t = (key) => translationService.t(key);
        this.innerHTML = `
        <div class="padding-x-5">
            <div id="join-game-container" class="card">
                <h1>${t('join.title')}</h1>
                <div>
                    <label>${t('common.gameId')}</label>
                    <div class="input-group">
                        <input class="input" type="text" id="game-id-input" placeholder="${t('join.enterGameId')}" />
                        <button class="btn btn-primary" id="join-game-button">${t('join.join')}</button>
                    </div>
                </div>
                <div id="game-id-message" style="height: 20px;"></div>
                <div id="player-registration-container"></div>
                <button class="btn btn-primary btn-block" id="back-to-menu-button">${t('common.backToMainMenu')}</button>
            </div>
        </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        this.querySelector('#back-to-menu-button').addEventListener('click', () => {
            // Navigate back to the main menu
            window.location.hash = '#/';
        });

        this.querySelector('#join-game-button').addEventListener('click', async () => {
            const gameHash = this.querySelector('#game-id-input').value.trim();
            if (!gameHash) {
                this.querySelector('#game-id-message').textContent = translationService.t('join.invalidGameId');
                return;
            }

            const game = await gameStateService.GetGameAsync(gameHash);
            if (!game) {
                this.querySelector('#game-id-message').textContent = translationService.t('join.gameNotFound');
                return;
            }

            this.querySelector('#game-id-message').textContent = '';

            const playerRegistrationContainer = this.querySelector('#player-registration-container');
            playerRegistrationContainer.innerHTML = `<player-registration id="player-registration" game-hash=${gameHash}></player-registration>`;
        });


    }
}

customElements.define('join-game-page', JoinGamePage);
