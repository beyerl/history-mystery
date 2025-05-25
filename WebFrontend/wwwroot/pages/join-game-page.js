import { gameStateService } from '../business-logic/game-state-service.js';
import './player-registration.js'; // Import the PlayerRegistration component

class JoinGamePage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <h1>Join Game</h1>
                <div>
                    <label>Game Id:</label>
                    <input type="text" id="game-id-input" placeholder="Enter Game ID" />
                    <button class="btn btn-primary" id="join-game-button">Join</button>
                    <br>
                    <div id="game-id-message" style="height: 20px;"></div>
                </div>
                <div id="player-registration-container"></div
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        this.querySelector('#join-game-button').addEventListener('click', async () => {
            const gameHash = this.querySelector('#game-id-input').value.trim();
            if (!gameHash) {
                this.querySelector('#game-id-message').textContent = 'Please enter a valid Game ID.';
                return;
            }

            const game = await gameStateService.GetGameAsync(gameHash);
            if (!game) {
                this.querySelector('#game-id-message').textContent = 'Game not found. Please check the Game ID.';
                return;
            }

            this.querySelector('#game-id-message').textContent = '';

            const playerRegistrationContainer = this.querySelector('#player-registration-container');
            playerRegistrationContainer.innerHTML = `<player-registration id="player-registration" game-hash=${gameHash}></player-registration>`;
        });
    }
}

customElements.define('join-game-page', JoinGamePage);
