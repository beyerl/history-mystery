import { gameStateService } from '../business-logic/game-state-service.js';

class GameScoresPage extends HTMLElement {
    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        const gameId = urlParams.get('gameId');
        const game = gameStateService.GetGame(gameId);

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
            window.location.hash = '#/';
        });

        this.querySelector('#rematch-button').addEventListener('click', () => {
            // Start a new game with the same players
            const playerNames = game.playerScores.map(player => player.playerId);
            gameStateService.ResetScores(gameId);
            window.location.hash = '#/game?gameId=' + gameId;
        });

    }
}

customElements.define('game-scores-page', GameScoresPage);
