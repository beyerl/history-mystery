import { audioService } from '../business-logic/audio-service.js';
import { SoundEnum } from '../models/sound-enum.js';
import { gameStateService } from '../business-logic/game-state-service.js';
import { mistakeService } from '../business-logic/mistake-service.js';
import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';
import { AnswerResultEnum } from '../models/answer-result.js';
import { GameStateEnum } from '../models/game-state.js';

class GamePage extends HTMLElement {
  previousPlayerScores = {};
  changedScores = [];
  toastGameStateId = null;
  pollGameStateId = null;
  maxScore = configService.maxScore;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.gameStateService = gameStateService;
  }

  connectedCallback() {
    audioService.stop(SoundEnum.MENU);
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    this.gameId = urlParams.get('gameId');
    mistakeService.clear(this.gameId);
    this.render();
    this.initialize();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import '${new URL('../styles.css', import.meta.url).href}';
        :host {
          display: flex;
          flex-direction: column;
          height: 100%; /* Ensure the game-page takes full height */
        }
        footer {
          width: 100%;
          background-color: var(--color-card-bg, rgba(122, 73, 24, 0.7));
          text-align: center;
          padding: 10px 0;
          box-sizing: border-box;
          border-top: 1px solid #ccc;
          height: 8vh;
          display: flex; 
          justify-content: center; 
          align-items: center;
        }
        #dragDropList {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
        }
        .btn {
          /* Ensures .btn styles are available in shadow DOM */
        }
      </style>      
      <toast-component id="toast"></toast-component>
      <footer id="footer">
        <button id="back-to-menu" class="btn btn-primary" style="margin-left: 10px;">${translationService.t('game.backToMenu')}</button>
      </footer>
      <drag-drop-list id="dragDropList"></drag-drop-list>

    `;
  }

  initialize() {
    import('../components/drag-drop-list.js');
    import('../components/win-overlay.js');
    import('../components/toast-component.js');

    Promise.all([
      translationService.localizeEvents(configService.questions),
      this.gameStateService.GetGameAsync(this.gameId),
    ]).then(([localizedQuestions, game]) => {
      const dragDropList = this.shadowRoot.getElementById('dragDropList');
      if (!dragDropList) {
        return;
      }
      // Apply the order the creating client persisted so all players see the
      // same sequence. Reordering by valid indexes only; fall back to local
      // shuffle when no order was stored (e.g. legacy games).
      // Slow mode gives each player a per-question timer; set it before the
      // events attribute so the list picks it up when it initializes.
      if (game?.slowMode) {
        dragDropList.setAttribute('slow-mode', '');
      }
      const order = game?.questionOrder;
      if (Array.isArray(order) && order.length === localizedQuestions.length) {
        const ordered = order.map(index => localizedQuestions[index]);
        dragDropList.setAttribute('no-shuffle', '');
        dragDropList.setAttribute('events', JSON.stringify(ordered));
      } else {
        dragDropList.setAttribute('events', JSON.stringify(localizedQuestions));
      }
    });

    this.pollGameState();
    this.toastGameStateChanges();
  }

  pollGameState() {
    this.pollGameStateId = setInterval(async () => {
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
        const playersWithMaxScore = gameState.playerScores.filter(player => player.score >= this.maxScore);

        let currentPlayerIsWinner = playersWithMaxScore.find(player => player.playerId === localStorage.getItem('playerName'))

        if (currentPlayerIsWinner) {
          clearInterval(this.toastGameStateId);
          clearInterval(this.pollGameStateId);
          this.gameStateService.EndGame(this.gameId);

          // Create the win overlay
          audioService.play(SoundEnum.WIN);
          const winOverlay = document.createElement('win-overlay');
          winOverlay.setAttribute('message', translationService.t('game.youWin'));
          document.body.appendChild(winOverlay);

          // Remove the overlay after sound has finished playing
          const winSoundDuration = await audioService.getSoundLength(SoundEnum.WIN);
          setTimeout(() => {
            document.body.removeChild(winOverlay);
            window.location.hash = `/scores?gameId=${this.gameId}`;
          }, winSoundDuration);
        } else if (playersWithMaxScore.length > 0 && !currentPlayerIsWinner) {
          this.gameStateService.EndGame(this.gameId);
          clearInterval(this.toastGameStateId);
          clearInterval(this.pollGameStateId);
          window.location.hash = `/scores?gameId=${this.gameId}`;
        }
      }

      if (gameState && gameState.state === GameStateEnum.ENDED) {
        clearInterval(this.toastGameStateId);
        clearInterval(this.pollGameStateId);
        window.location.hash = `/scores?gameId=${this.gameId}`;
      }

      this.previousPlayerScores = gameState.playerScores.reduce((acc, player) => {
        acc[player.playerId] = player.score;
        return acc;
      }, {});
    }, 1000);
  }

  toastGameStateChanges() {
    this.toastGameStateId = setInterval(() => {
      if (this.changedScores.length > 0) {
        var oldestChangedScore = this.changedScores.shift()
        if (!oldestChangedScore || oldestChangedScore.score === 0) return;
        this.showToast(translationService.t('game.playerPoints', { player: oldestChangedScore.playerId, points: oldestChangedScore.score }));
      }
    }, 100);
  }

  addEventListeners() {
    this.shadowRoot.addEventListener('answer-result', async (event) => {
      switch (event.detail.answerResult) {
        case AnswerResultEnum.CORRECT:
          audioService.play(SoundEnum.SUCCESS);
          await this.gameStateService.IncrementPlayerScore(this.gameId, localStorage.getItem('playerName'));
          break;
        case AnswerResultEnum.INCORRECT:
          audioService.play(SoundEnum.FAILURE);
          mistakeService.add(this.gameId, event.detail.eventData);
          break;
        default:
          console.error('Unknown answer result:', event.detail.answerResult);
          break;
      }
    });
    // Add back to menu button event
    const backBtn = this.shadowRoot.getElementById('back-to-menu');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.location.hash = '/';
        clearInterval(this.toastGameStateId);
        clearInterval(this.pollGameStateId);
      });
    }
  }

  showToast(message) {
    const toast = this.shadowRoot.getElementById('toast');
    if (toast) {
      toast.show(message);
    }
  }
}

customElements.define('game-page', GamePage);