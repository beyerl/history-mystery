import { gameStateService } from '../business-logic/game-state-service.js';
import { GameStateEnum } from '../models/game-state.js';

class PlayerRegistration extends HTMLElement {
    gameStateIntervalId = null;

    async connectedCallback() {
        const gameHash = this.getAttribute('game-hash');

        this.innerHTML = `
            <div style="display: flex; align-items: center;">
                <label>Player Name:</label>
                <input class="input" type="text" id="player-name" placeholder="Enter your name" />
                <button id="update-player-button" class="btn btn-primary" >Accept</button>
            </div>
            <div id="player-name-error" style="color: red;height: 20px;"></div>
            <table id="player-table" class="table" style="margin: 0 auto; width: 100%;">
                <thead>
                    <tr>
                        <th>Player Names</th>                         
                    </tr>                 
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="player-table-error" style="color: red;height: 20px;"></div>
        `;

        this.initializePlayerNameFromLocalStorage(gameHash);
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

    initializePlayerNameFromLocalStorage(gameHash) {
        const playerNameFromStorage = localStorage.getItem('playerName');
        if (playerNameFromStorage) {
            this.querySelector('#player-name').value = playerNameFromStorage;
            gameStateService.AddPlayer(gameHash, playerNameFromStorage);
        }
    }

    pollGameState(gameStateService, gameHash) {
        this.gameStateIntervalId = setInterval(async () => {
            var game = await gameStateService.GetGameAsync(gameHash);
            this.updatePlayerTable(game);
            if (game && game.state === GameStateEnum.RUNNING) {
                clearInterval(this.gameStateIntervalId);
                window.location.hash = `/game?gameId=${gameHash}`;
            }
        }, 1000);
    }

    updatePlayerTable(game) {
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
