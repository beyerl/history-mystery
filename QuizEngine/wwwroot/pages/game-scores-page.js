import { gameStateService } from '../business-logic/game-state-service.js';
import { GameStateEnum } from '../models/game-state.js';
import { audioService } from '../business-logic/audio-service.js';
import { SoundEnum } from '../models/sound-enum.js';
import { mistakeService } from '../business-logic/mistake-service.js';
import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';
import { QuestionService } from '../business-logic/question-service.js';
import { InfoModal } from '../components/info-modal.js';

class GameScoresPage extends HTMLElement {
    gameId;
    gameStateIntervalId = null;

    async connectedCallback() {
        audioService.play(SoundEnum.MENU);

        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        this.gameId = urlParams.get('gameId');
        const game = await gameStateService.GetGameAsync(this.gameId);

        if (!game) {
            this.innerHTML = `<h1>${translationService.t('scores.gameNotFound')}</h1>`;
            return;
        }

        const sortedScores = [...game.playerScores].sort((a, b) => b.score - a.score);
        const mistakes = mistakeService.getAll(this.gameId);
        const t = (key) => translationService.t(key);

        this.innerHTML = `
        <style>
            /* same look as .drag-element in drag-drop-list.css */
            .mistake-element {
                box-sizing: border-box;
                border: 1px solid var(--color-mint);
                border-radius: 12px;
                width: 100%;
                background-color: var(--color-mint);
                /* themed foreground for the --color-mint surface (dark in
                   Metal/Art) so the year/title stay readable */
                color: var(--color-brown);
                padding: 5px 10px;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;
                margin-bottom: 5px;
            }
        </style>
        <div class="padding-x-5">
            <div class="card w-100">
                <h1>${t('scores.title')}</h1>
                <table id="scores-table" class="table" style="width: 100%;">
                    <thead>
                        <tr>
                            <th>${t('scores.player')}</th>
                            <th>${t('scores.score')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedScores.map(player => `
                            <tr>
                                <td>${player.playerId}</td>
                                <td>${player.score}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 20px;display: flex; flex-direction: column; align-items: center;">
                    <button id="back-button" class="btn btn-primary btn-block">${t('common.backToMainMenu')}</button>
                    <button id="rematch-button" class="btn btn-primary btn-block">${t('scores.rematch')}</button>
                </div>
                ${mistakes.length > 0 ? `
                <div id="mistakes" style="margin-top: 20px;">
                    <h1>${t('scores.mistakes')}</h1>
                    ${mistakes.map(event => `
                        <div class="mistake-element">
                            <div class="year">${event.year}${configService.valueSuffix}</div>
                            <div class="title">${this.escapeHtml(event.title)}</div>
                            ${configService.infoProvider ? `<button class="btn btn-primary btn-sm more" data-event='${this.escapeHtml(JSON.stringify(event))}'>${t('common.more')}</button>` : ''}
                        </div>
                    `).join('')}
                </div>` : ''}
            </div>
        </div>
        `;

        this.querySelector('#back-button').addEventListener('click', () => {
            // Go back to start page
            clearInterval(this.gameStateIntervalId);
            window.location.hash = '#/';
        });

        this.querySelector('#rematch-button').addEventListener('click', async () => {
            // Start a new game with the same players
            clearInterval(this.gameStateIntervalId);
            // Reshuffle the questions for the rematch and persist the new order
            // (while the game is still Ended, before the restart flips it to
            // Running) so every player gets the same fresh sequence — mirroring
            // what the setup page does for the first game.
            const questionOrder = QuestionService.createShuffledOrder(configService.questions.length);
            await gameStateService.SetQuestionOrderAsync(this.gameId, questionOrder);
            await gameStateService.ResetScores(this.gameId);
            window.location.hash = '#/game?gameId=' + this.gameId;
        });
        this.querySelectorAll('.more').forEach(button => {
            button.addEventListener('click', () => {
                const eventData = JSON.parse(button.getAttribute('data-event'));
                this.openEventModal(eventData);
            });
        });

        this.pollGameState();
    }

    openEventModal(eventData) {
        const existingModal = document.querySelector('info-modal');
        if (existingModal) {
            existingModal.remove();
        }
        const modal = new InfoModal();
        modal.setAttribute('data-event', JSON.stringify(eventData));
        document.body.appendChild(modal);
    }

    escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    pollGameState() {
        this.gameStateIntervalId = setInterval(async () => {
            const gameState = await gameStateService.GetGameAsync(this.gameId);
            if (!gameState) {
                return;
            }

            if (gameState && gameState.state === GameStateEnum.RUNNING) {
                window.location.hash = `/game?gameId=${this.gameId}`;
            }

        }, 1000);
    }
}

customElements.define('game-scores-page', GameScoresPage);
