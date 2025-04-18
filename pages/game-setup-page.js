import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';

class GameSetupPage extends HTMLElement {
    connectedCallback() {
        const gameHash = HashHelper.generateGameHash();
        const game = gameStateService.CreateGame(gameHash); // Create a new game
        gameStateService.AddPlayer(gameHash, 'Player 1'); // Add a player to the game

        this.innerHTML = `
            <div>
                <h1>Game Setup</h1>
                <div>
                    <label>Game Id:</label>
                    <span id="game-id">${gameHash}</span>
                    <button id="share-button">Share</button>
                </div>
                <table id="player-table" style="margin: 0 auto; border-collapse: collapse; border: 1px solid black; width: 100%;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid black;">Player Names</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid black;">Player 1</td>
                        </tr>
                    </tbody>
                </table>
                <button id="start-game-button">Begin</button>
            </div>
        `;

        this.querySelector('#share-button').addEventListener('click', () => {
            const email = prompt('Enter email address:');
            if (email) {
                const hash = document.getElementById('game-id').textContent;
                window.location.href = `mailto:${email}?subject=History Mystery Game Id&body=Your game id is: ${hash}`;
            }
        });

        this.querySelector('#start-game-button').addEventListener('click', () => {
            const gameId = document.getElementById('game-id').textContent;
            if (gameStateService.StartGame(gameId)) { // Start the game
                window.location.hash = `/game?gameId=${gameId}`;
            } else {
                alert('Failed to start the game. Please try again.');
            }
        });

        this.pollGameState(gameStateService, gameHash);
    }

    pollGameState(gameStateService, gameHash) {
        setInterval(() => {
            const game = gameStateService.GetGame(gameHash);
            if (game) {
                const playerTableBody = this.querySelector('#player-table tbody');
                playerTableBody.innerHTML = game.playerScores
                    .map(player => `<tr><td style="border: 1px solid black;">${player.playerId}</td></tr>`)
                    .join('');
            }
        }, 1000); // Poll every second
    }
}

customElements.define('game-setup-page', GameSetupPage);
