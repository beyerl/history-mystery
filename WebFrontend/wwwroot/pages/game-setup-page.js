import { HashHelper } from '../helpers/hash-helper.js';
import { gameStateService } from '../business-logic/game-state-service.js';
import './player-registration.js'; // Import the new PlayerRegistration component

class GameSetupPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    async connectedCallback() {
        import('../components/toast-component.js');

        const gameHash = HashHelper.generateGameHash();
        await gameStateService.CreateGameAsync(gameHash); // Create a new game

        this.shadowRoot.innerHTML = `
            <style>
                @import '../styles.css';
            </style>
            <toast-component id="toast"></toast-component>
            <div class="padding-x-5">
                <div class="card">
                    <h1 style="margin-top: 0px">Game Setup</h1>
                    <div>
                        <label>Game Id:</label>
                        <div class="input-group" style="justify-content: space-between; align-items: center;">
                            <input class="input" type="text" id="game-id" value="${gameHash}" disabled/>                     
                            <button id="share-button" class="btn btn-primary">Share</button>
                        </div>
                        <br>
                    </div>
                    <player-registration game-hash="${gameHash}"></player-registration>
                    <button id="start-game-button" class="btn btn-primary btn-block">Begin</button>
                    <button id="back-to-menu-button" class="btn btn-primary btn-block">Back to Main Menu</button>
                </div>
            </div>
        `;
        this.addEventListeners(gameStateService, gameHash);
    }

    addEventListeners(gameStateService, gameHash) {
        this.shadowRoot.querySelector('#share-button').addEventListener('click', () => {
            // Copy the game ID to the clipboard
            const gameId = this.shadowRoot.getElementById('game-id').value;
            navigator.clipboard.writeText(gameId).then(() => {
                this.showToast(`Game ID ${gameId} copied to clipboard!`); // Show a toast notification
            }).catch(err => {
                console.error('Failed to copy game ID: ', err); // Log any errors
                this.showToast('Failed to copy game ID.'); // Show a toast notification
            });
        });

        this.shadowRoot.querySelector('#start-game-button').addEventListener('click', async () => {
            const gameId = this.shadowRoot.getElementById('game-id').value;
            const game = await gameStateService.GetGameAsync(gameId);
            if (!game || game.playerScores.length == 0) {
                this.shadowRoot.querySelector('player-registration').setError('No players have joined the game. Please add players before starting the game.');
                return;
            }
            if (gameStateService.StartGame(gameId)) { // Start the game
                window.location.hash = `/game?gameId=${gameId}`;
            } else {
                alert('Failed to start the game. Please try again.');
            }
        });

        this.shadowRoot.querySelector('#back-to-menu-button').addEventListener('click', () => {
            // Call disconnect on player-registration to clear interval
            const playerRegistration = this.shadowRoot.querySelector('player-registration');
            if (playerRegistration && typeof playerRegistration.disconnect === 'function') {
                playerRegistration.disconnect();
            }
            window.location.hash = '#/';
        });
    }

    showToast(message) {
        const toast = this.shadowRoot.getElementById('toast');
        if (toast) {
            toast.show(message);
        }
    }
}

customElements.define('game-setup-page', GameSetupPage);
