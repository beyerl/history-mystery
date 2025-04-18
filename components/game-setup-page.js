import { HashHelper } from '../helpers/hash-helper.js';

class GameSetupPage extends HTMLElement {
    connectedCallback() {
        const gameHash = HashHelper.generateGameHash();
        this.innerHTML = `
            <div>
                <h1>Game Setup</h1>
                <div>
                    <label>Game Id:</label>
                    <span id="game-id">${gameHash}</span>
                    <button id="share-button">Share</button>
                </div>
                <table style="margin: 0 auto; border-collapse: collapse; border: 1px solid black; width: 100%;">
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
                <button id="start-game-button">Start Game</button>
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
            window.location.hash = `/game?gameId=${gameId}`;
        });
    }
}

customElements.define('game-setup-page', GameSetupPage);
