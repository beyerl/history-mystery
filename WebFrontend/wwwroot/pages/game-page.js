import { gameStateService } from '../business-logic/game-state-service.js';
import { AnswerResultEnum } from '../models/answer-result.js';
import { GameStateEnum } from '../models/game-state.js';
import { EventService } from '../business-logic/event-service.js';

class GamePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.gameStateService = gameStateService;
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
        :host {
          display: flex;
          flex-direction: column;
          height: 100%; /* Ensure the game-page takes full height */
        }
        footer {
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
        #dragDropList {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
        }
      </style>
      <drag-drop-list id="dragDropList"></drag-drop-list>
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
      const dragDropList = this.shadowRoot.getElementById('dragDropList');
      if (dragDropList) {
        dragDropList.setAttribute('events', JSON.stringify(historicEvents));
      }
    });

    import('../components/drag-drop-list.js');

    this.updatePlayerScores();
    this.pollGameState();
  }

  pollGameState() {
    setInterval(() => {
      const game = this.gameStateService.GetGame(this.gameId);
      const footer = this.shadowRoot.getElementById('footer');
      if (game && footer) {
        //update the tbody with the game state
        const playerScoresTable = footer.querySelector('tbody');
        playerScoresTable.innerHTML = game.playerScores
          .map(player => `<tr><td>${player.playerId}</td><td>${player.score}</td></tr>`)
          .join('');
      }

      if (game && game.state === GameStateEnum.RUNNING) {
        const playersWithMaxScore = game.playerScores.filter(player => player.score >= 10);

        if (playersWithMaxScore.length > 0) {
          this.gameStateService.EndGame(this.gameId);
        }

        if (playersWithMaxScore.find(player => player.playerId === localStorage.getItem('playerName'))) {
          const winOverlay = document.createElement('div');
          winOverlay.style.position = 'fixed';
          winOverlay.style.top = '0';
          winOverlay.style.left = '0';
          winOverlay.style.width = '100%';
          winOverlay.style.height = '100%';
          winOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
          winOverlay.style.display = 'flex';
          winOverlay.style.justifyContent = 'center';
          winOverlay.style.alignItems = 'center';
          winOverlay.style.zIndex = '1000';
          winOverlay.style.animation = 'fadeIn 1s ease-in-out';

          const winMessage = document.createElement('div');
          winMessage.textContent = 'You win!';
          winMessage.style.color = 'white';
          winMessage.style.fontSize = '4rem';
          winMessage.style.fontWeight = 'bold';
          winMessage.style.textAlign = 'center';
          winMessage.style.animation = 'zoomIn 1s ease-in-out';

          winOverlay.appendChild(winMessage);
          document.body.appendChild(winOverlay);

          // Add keyframes for animations
          const styleSheet = document.createElement('style');
          styleSheet.textContent = `
        @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
        }
        @keyframes zoomIn {
              from { transform: scale(0.5); }
              to { transform: scale(1); }
        }
        `;
          document.head.appendChild(styleSheet);

          // Remove the overlay after 3 seconds
          setTimeout(() => {
            document.body.removeChild(winOverlay);
            document.head.removeChild(styleSheet);
            window.location.hash = `/scores?gameId=${this.gameId}`;
          }, 3000);
        }
      }
    }, 1000);
  }

  addEventListeners() {
    this.shadowRoot.addEventListener('answer-result', (event) => {
      const messageBox = this.shadowRoot.getElementById('messageBox');
      switch (event.detail.answerResult) {
        case AnswerResultEnum.CORRECT:
          messageBox.textContent = 'Correct!';
          this.gameStateService.IncrementPlayerScore(this.gameId, localStorage.getItem('playerName'));
          break;
        case AnswerResultEnum.INCORRECT:
          messageBox.textContent = 'Incorrect!';
          break;
        default:
          console.error('Unknown answer result:', event.detail.answerResult);
          break
      }
    });
  }

  updatePlayerScores() {
    const game = this.gameStateService.GetGame(this.gameId);
    const playerScoresTable = this.shadowRoot.getElementById('playerScoresTable').querySelector('tbody');

    if (game && game.playerScores.length > 0) {
      playerScoresTable.innerHTML = game.playerScores
        .map(player => `<tr><td>${player.playerId}</td><td>${player.score}</td></tr > `)
        .join('');
    } else {
      playerScoresTable.innerHTML = `<tr><td colspan="2">No scores available</td></tr > `;
    }
  }
}

customElements.define('game-page', GamePage);