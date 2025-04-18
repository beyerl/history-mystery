import { GameStateService } from '../business-logic/game-state-service.js';

class GamePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.gameStateService = new GameStateService();
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        this.gameId = urlParams.get('gameId');
        this.render();
        this.initialize();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        @import './styles.css';
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #f1f1f1;
          text-align: center;
          padding: 10px 0;
          border-top: 1px solid #ccc;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f9f9f9;
        }
      </style>
      <accordion-component id="eventAccordion"></accordion-component>
      <button id="checkButton" class="button">Check</button>
      <div id="messageBox" class="message-box"></div>
      <footer id="footer">
        <div>Game ID: ${this.gameId || 'N/A'}</div>
        <table id="playerScoresTable">
          <thead>
            <tr>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td colspan="2">Loading scores...</td></tr>
          </tbody>
        </table>
      </footer>
    `;
    }

    initialize() {
        import('../data/historic-events.js').then(({ historicEvents }) => {
            const eventAccordion = this.shadowRoot.getElementById('eventAccordion');
            if (eventAccordion) {
                eventAccordion.setAttribute('events', JSON.stringify(historicEvents));
            }
        });

        import('../components/accordion-section-component.js');
        import('../components/accordion-component.js');

        this.shadowRoot.getElementById('checkButton').addEventListener('click', () => {
            const eventAccordion = this.shadowRoot.getElementById('eventAccordion');
            if (eventAccordion) {
                eventAccordion.checkEventOrderAndCreateEvent();
            }
        });

        this.updatePlayerScores();
    }

    addEventListeners() {
        this.shadowRoot.addEventListener('message-update', (event) => {
            const messageBox = this.shadowRoot.getElementById('messageBox');
            if (messageBox) {
                messageBox.textContent = event.detail.message;
            }
        });
    }

    updatePlayerScores() {
        const game = this.gameStateService.GetGame(this.gameId);
        const playerScoresTable = this.shadowRoot.getElementById('playerScoresTable').querySelector('tbody');

        if (game && game.playerScores.length > 0) {
            playerScoresTable.innerHTML = game.playerScores
                .map(player => `<tr><td>${player.playerId}</td><td>${player.score}</td></tr>`)
                .join('');
        } else {
            playerScoresTable.innerHTML = `<tr><td colspan="2">No scores available</td></tr>`;
        }
    }
}

customElements.define('game-page', GamePage);