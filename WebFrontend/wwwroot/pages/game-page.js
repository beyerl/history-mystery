import { gameStateService } from '../business-logic/game-state-service.js';
import { AnswerResultEnum } from '../models/answer-result.js';
import { GameStateEnum } from '../models/game-state.js';

class GamePage extends HTMLElement {
  previousPlayerScores = {};
  changedScores = [];

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
        #dragDropList {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 10px;
          box-sizing: border-box;
        }
      </style>
      <toast-component id="toast"></toast-component>
      <footer id="footer">
        <div>Game ID: ${this.gameId || 'N/A'}</div>
      </footer>
      <drag-drop-list id="dragDropList"></drag-drop-list>

    `;
  }

  initialize() {
    import('../components/drag-drop-list.js');
    import('../components/win-overlay.js');
    import('../components/toast-component.js'); // Import the new toast component

    import('../data/historic-events.js').then(({ historicEvents }) => {
      const dragDropList = this.shadowRoot.getElementById('dragDropList');
      if (dragDropList) {
        dragDropList.setAttribute('events', JSON.stringify(historicEvents));
      }
    });

    this.pollGameState();
    this.toastGameStateChanges();
  }

  pollGameState() {
    setInterval(async () => {
      const gameState = await this.gameStateService.GetGameAsync(this.gameId);
      if (!gameState) {
        return;
      }

      var changedScores = gameState.playerScores.filter(
        player => player.score !== 0 && this.previousPlayerScores[player.playerId] !== player.score
      )

      if (changedScores.length > 0)
        this.changedScores = this.changedScores.concat(changedScores);

      if (gameState && gameState.state === GameStateEnum.RUNNING) {
        const playersWithMaxScore = gameState.playerScores.filter(player => player.score >= 10);

        let currentPlayerIsWinner = playersWithMaxScore.find(player => player.playerId === localStorage.getItem('playerName'))

        if (currentPlayerIsWinner) {
          this.gameStateService.EndGame(this.gameId);

          // Create the win overlay
          const winOverlay = document.createElement('win-overlay');
          winOverlay.setAttribute('message', 'You win!');
          document.body.appendChild(winOverlay);

          // Remove the overlay after 3 seconds
          setTimeout(() => {
            document.body.removeChild(winOverlay);
            window.location.hash = `/scores?gameId=${this.gameId}`;
          }, 2000);
        } else if (playersWithMaxScore.length > 0 && !currentPlayerIsWinner) {
          this.gameStateService.EndGame(this.gameId);
          window.location.hash = `/scores?gameId=${this.gameId}`;
        }
      }

      if (gameState && gameState.state === GameStateEnum.ENDED) {
        window.location.hash = `/scores?gameId=${this.gameId}`;
      }

      this.previousPlayerScores = gameState.playerScores.reduce((acc, player) => {
        acc[player.playerId] = player.score;
        return acc;
      }, {});
    }, 1000);
  }

  toastGameStateChanges() {
    setInterval(() => {
      if (this.changedScores.length > 0) {
        var oldestChangedScore = this.changedScores.shift()
        if (!oldestChangedScore || oldestChangedScore.score === 0) return;
        this.showToast(`${oldestChangedScore.playerId}'s score is now ${oldestChangedScore.score}`);
      }
    }, 100);
  }

  addEventListeners() {
    this.shadowRoot.addEventListener('answer-result', (event) => {
      switch (event.detail.answerResult) {
        case AnswerResultEnum.CORRECT:
          this.gameStateService.IncrementPlayerScore(this.gameId, localStorage.getItem('playerName'));
          break;
        case AnswerResultEnum.INCORRECT:
          break;
        default:
          console.error('Unknown answer result:', event.detail.answerResult);
          break;
      }
    });
  }

  showToast(message) {
    const toast = this.shadowRoot.getElementById('toast');
    if (toast) {
      toast.show(message);
    }
  }
}

customElements.define('game-page', GamePage);