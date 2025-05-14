import { gameStateService } from '../business-logic/game-state-service.js';
import { GameStateEnum } from '../models/game-state.js';

class GameScoresPage extends HTMLElement {
    gameId;
    gameStateIntervalId = null;

    async connectedCallback() {
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        this.gameId = urlParams.get('gameId');
        const game = await gameStateService.GetGameAsync(this.gameId);

        if (!game) {
            this.innerHTML = `<h1>Game not found</h1>`;
            return;
        }

        const sortedScores = [...game.playerScores].sort((a, b) => b.score - a.score);

        this.innerHTML = `
            <div>
                <h1>Game Scores</h1>
                <table style="width: 100%; border-collapse: collapse; border: 1px solid black;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid black;">Player</th>
                            <th style="border: 1px solid black;">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedScores.map(player => `
                            <tr>
                                <td style="border: 1px solid black;">${player.playerId}</td>
                                <td style="border: 1px solid black;">${player.score}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                <div style="margin-top: 20px;display: flex; flex-direction: column; align-items: center;">
                    <button id="back-button" style="margin-top: 20px;">Back to Main Menu</button>
                    <button id="rematch-button" style="margin-top: 20px;">Rematch</button>
                </div>
            </div>
        `;

        this.querySelector('#back-button').addEventListener('click', () => {
            // Go back to start page
            clearInterval(this.gameStateIntervalId);
            window.location.hash = '#/';
        });

        this.querySelector('#rematch-button').addEventListener('click', () => {
            // Start a new game with the same players
            clearInterval(this.gameStateIntervalId);
            gameStateService.ResetScores(this.gameId);
            window.location.hash = '#/game?gameId=' + this.gameId;
        });
        this.pollGameState();
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
