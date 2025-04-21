import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';

class GameSetupPage extends HTMLElement {
    connectedCallback() {
        const gameHash = HashHelper.generateGameHash();
        const game = gameStateService.CreateGame(gameHash); // Create a new game

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
                <div>
                    <label>Player Name:</label>
                    <input type="text" id="player-name" placeholder="Enter your name" />
                    <button id="update-player-button">Accept</button>
                    <br>
                    <div id="player-name-error" style="color: red;height: 20px;"></div>
                </div>

                <table id="player-table" style="margin: 0 auto; border-collapse: collapse; border: 1px solid black; width: 100%;">
                    <thead>
                        <tr>
                            <th style="border: 1px solid black;">Player Names</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div id="player-table-error" style="color: red;height: 20px;"></div>
                <button id="start-game-button">Begin</button>
            </div>
        `;

        this.initializePlayerNameFromLocalStorage();

        // Add event listeners
        this.addEventListeners(gameStateService, gameHash);

        this.pollGameState(gameStateService, gameHash);
    }

    addEventListeners(gameStateService, gameHash) {
        this.querySelector('#player-name').addEventListener('input', (event) => {
            const playerName = event.target.value;
            if (!playerName) { return }
            var isValid = /^[a-zA-Z0-9]+$/.test(playerName); // Check if the player name is valid (alphanumeric only)
            if (!isValid) {
                this.querySelector('#player-name-error').textContent = 'Player name can only contain letters and numbers.';
            } else {
                this.querySelector('#player-name-error').textContent = ''; // Clear the error message
            }
        });

        this.querySelector('#update-player-button').addEventListener('click', () => {
            // Get the player name from the input field
            const playerName = this.querySelector('#player-name').value;
            if (!playerName) {
                this.querySelector('#player-name-error').textContent = 'Please enter a player name.';
                return;
            }

            // Get playername from local storage
            const playerNameFromStorage = localStorage.getItem('playerName');
            if (playerNameFromStorage && playerNameFromStorage !== playerName) {
                gameStateService.RemovePlayer(gameHash, playerNameFromStorage); // Remove the old player name from the game               
            }

            gameStateService.AddPlayer(gameHash, playerName); // Add the player name to the game
            localStorage.setItem('playerName', playerName); // Store the player name in local storage
            this.updatePlayerTable(gameStateService, gameHash); // Update the player table
        });

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

        this.querySelector('#start-game-button').addEventListener('click', () => {
            const gameId = document.getElementById('game-id').textContent;
            const game = gameStateService.GetGame(gameId);
            if (!game || game.playerScores.length == 0) {
                this.querySelector('#player-table-error').textContent = 'No players have joined the game. Please add players before starting the game.';
                return;
            }
            if (gameStateService.StartGame(gameId)) { // Start the game
                window.location.hash = `/game?gameId=${gameId}`;
            } else {
                alert('Failed to start the game. Please try again.');
            }
        });
    }

    initializePlayerNameFromLocalStorage() {
        //initialize playername input field with the player name from local storage if it exists
        const playerNameFromStorage = localStorage.getItem('playerName');
        if (playerNameFromStorage) {
            this.querySelector('#player-name').value = playerNameFromStorage; // Set the input field value to the stored player name
        }
    }

    pollGameState(gameStateService, gameHash) {
        setInterval(() => {
            this.updatePlayerTable(gameStateService, gameHash);
        }, 1000); // Poll every second
    }

    updatePlayerTable(gameStateService, gameHash) {
        const game = gameStateService.GetGame(gameHash);
        if (game) {
            const playerTableBody = this.querySelector('#player-table tbody');
            playerTableBody.innerHTML = game.playerScores
                .map(playerScore => `<tr><td style="border: 1px solid black;">${playerScore.playerId}</td></tr>`)
                .join('');
        }
    }
}

customElements.define('game-setup-page', GameSetupPage);
