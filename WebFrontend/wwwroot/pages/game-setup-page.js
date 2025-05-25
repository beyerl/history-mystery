import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';
import './player-registration.js'; // Import the new PlayerRegistration component

class GameSetupPage extends HTMLElement {
    async connectedCallback() {
        const gameHash = HashHelper.generateGameHash();
        await gameStateService.CreateGameAsync(gameHash); // Create a new game

        this.innerHTML = `
            <div style="padding:20px;background-color: rgba(122, 73, 24, 0.9); border-radius: 10px; box-shadow: 0 4px 8px var(--color-modal-shadow);margin: 20px;">
                <h1 style="margin-top: 0px">Game Setup</h1>
                <div>
                        <label style="font-weight:bold">Game Id: <span id="game-id">${gameHash}</span></label>                        
                        <button id="share-button" style="background-color:var(--color-yellow);border:0; border-radius:5px; margin-left:10px;">Share</button>
                    <br>
                    <div id="game-id-message" style="height: 20px;padding-top:10px;padding-bottom:10px"></div>
                </div>
                <player-registration game-hash="${gameHash}"></player-registration>
                <button id="start-game-button" class="primary-button w-100">Begin</button>
            </div>
        `;

        // add 10 empty rows to the player table
        const playerTableBody = this.querySelector('player-registration tbody');
        for (let i = 0; i < 10; i++) {
            playerTableBody.innerHTML += '<tr><td style="border: 1px solid var(--color-table-border);height: 20px;"> </td></tr>';
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
