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
                </div>
                <div>
                    <label>Player Name:</label>
                    <input type="text" id="player-name" placeholder="Enter your name" />
                    <button id="update-player-button">Accept</button>
                    <br>
                    <div id="player-name-error" style="color: red;"></div>
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
                <button id="start-game-button">Begin</button>
            </div>
        `;

        //initialize playername input field with the player name from local storage if it exists
        const playerNameFromStorage = localStorage.getItem('playerName');
        if (playerNameFromStorage) {
            this.querySelector('#player-name').value = playerNameFromStorage; // Set the input field value to the stored player name
        }

        // Add event listeners
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
