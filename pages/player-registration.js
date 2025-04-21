import { gameStateService } from '../business-logic/game-state-service.js';

class PlayerRegistration extends HTMLElement {
    connectedCallback() {
        const gameHash = this.getAttribute('game-hash');

        this.innerHTML = `
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
        `;

        this.initializePlayerNameFromLocalStorage();
        this.addEventListeners(gameStateService, gameHash);
        this.pollGameState(gameStateService, gameHash);
    }

    addEventListeners(gameStateService, gameHash) {
        this.querySelector('#player-name').addEventListener('input', (event) => {
            const playerName = event.target.value;
            if (!playerName) { return; }
            const isValid = /^[a-zA-Z0-9]+$/.test(playerName); // Check if the player name is valid (alphanumeric only)
            this.querySelector('#player-name-error').textContent = isValid ? '' : 'Player name can only contain letters and numbers.';
        });

        this.querySelector('#update-player-button').addEventListener('click', () => {
            const playerName = this.querySelector('#player-name').value;
            if (!playerName) {
                this.querySelector('#player-name-error').textContent = 'Please enter a player name.';
                return;
            }

            const playerNameFromStorage = localStorage.getItem('playerName');
            if (playerNameFromStorage && playerNameFromStorage !== playerName) {
                gameStateService.RemovePlayer(gameHash, playerNameFromStorage);
            }

            gameStateService.AddPlayer(gameHash, playerName);
            localStorage.setItem('playerName', playerName);
            this.updatePlayerTable(gameStateService, gameHash);
        });
    }

    initializePlayerNameFromLocalStorage() {
        const playerNameFromStorage = localStorage.getItem('playerName');
        if (playerNameFromStorage) {
            this.querySelector('#player-name').value = playerNameFromStorage;
        }
    }

    pollGameState(gameStateService, gameHash) {
        setInterval(() => {
            this.updatePlayerTable(gameStateService, gameHash);
        }, 1000);
    }

    updatePlayerTable(gameStateService, gameHash) {
        const game = gameStateService.GetGame(gameHash);
        if (game) {
            const playerTableBody = this.querySelector('#player-table tbody');
            playerTableBody.innerHTML = game.playerScores
                .map(playerScore => `<tr><td style="border: 1px solid black;">${playerScore.playerId}</td></tr>`)
                .join('');

            const emptyRows = 10 - game.playerScores.length;
            for (let i = 0; i < emptyRows; i++) {
                playerTableBody.innerHTML += `<tr><td style="border: 1px solid black;height:20px;"> </td></tr>`;
            }

            const errorDiv = this.querySelector('#player-table-error');
            if (emptyRows === 0) {
                errorDiv.textContent = 'Maximum number of players reached.';
            } else if (emptyRows < 0) {
                errorDiv.textContent = 'Too many players. Please remove some players.';
            } else {
                errorDiv.textContent = '';
            }
        }
    }

    setError(message) {
        this.querySelector('#player-table-error').textContent = message;
    }
}

customElements.define('player-registration', PlayerRegistration);
