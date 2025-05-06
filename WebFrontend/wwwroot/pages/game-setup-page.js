import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';
import './player-registration.js'; // Import the new PlayerRegistration component

class GameSetupPage extends HTMLElement {
    async connectedCallback() {
        const gameHash = HashHelper.generateGameHash();
        await gameStateService.CreateGameAsync(gameHash); // Create a new game

        this.innerHTML = `
            <div>
                <h1>Game Setup</h1>
                <div>
                    <label>Game Id:</label>
                    <span id="game-id">${gameHash}</span>
                    <button id="share-button">Share</button>
                    <br>
                    <div id="game-id-message" style="height: 20px;"></div>
                </div>
                <player-registration game-hash="${gameHash}"></player-registration>
                <button id="start-game-button">Begin</button>
            </div>
        `;

        // add 10 empty rows to the player table
        const playerTableBody = this.querySelector('player-registration tbody');
        for (let i = 0; i < 10; i++) {
            playerTableBody.innerHTML += '<tr><td style="border: 1px solid black;height: 20px;"> </td></tr>';
        }

        this.addEventListeners(gameStateService, gameHash);
    }

    addEventListeners(gameStateService, gameHash) {
        this.querySelector('#share-button').addEventListener('click', () => {
            // Copy the game ID to the clipboard
            const gameId = document.getElementById('game-id').textContent;
            navigator.clipboard.writeText(gameId).then(() => {
                const messageDiv = this.querySelector('#game-id-message');
                messageDiv.textContent = 'Game ID copied to clipboard!'; // Show a success message
                setTimeout(() => {
                    messageDiv.textContent = ''; // Clear the message after 2 seconds
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy game ID: ', err); // Log any errors
                const messageDiv = this.querySelector('#game-id-message');
                messageDiv.textContent = 'Failed to copy game ID.'; // Show an error message
                setTimeout(() => {
                    messageDiv.textContent = ''; // Clear the message after 2 seconds
                }, 2000);
            });
        });

        this.querySelector('#start-game-button').addEventListener('click', async () => {
            const gameId = document.getElementById('game-id').textContent;
            const game = await gameStateService.GetGameAsync(gameId);
            if (!game || game.playerScores.length == 0) {
                this.querySelector('player-registration').setError('No players have joined the game. Please add players before starting the game.');
                return;
            }
            if (gameStateService.StartGame(gameId)) { // Start the game
                window.location.hash = `/game?gameId=${gameId}`;
            } else {
                alert('Failed to start the game. Please try again.');
            }
        });
    }
}

customElements.define('game-setup-page', GameSetupPage);
