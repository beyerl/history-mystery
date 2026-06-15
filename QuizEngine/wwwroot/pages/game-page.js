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
  // Set once the game has ended for this client, so the win/redirect flow runs
  // exactly once whether it is triggered by the winning move or by polling.
  gameOver = false;

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
        <span id="slow-timer" hidden style="margin-left: 12px; padding: 4px 10px; border-radius: 12px; background: var(--color-popover-bg, #333); color: var(--color-popover-text, #fff);"></span>
      </footer>
      <drag-drop-list id="dragDropList"></drag-drop-list>

    `;
  }

  async initialize() {
    import('../components/drag-drop-list.js');
    import('../components/win-overlay.js');
    import('../components/toast-component.js');

    // Opt-in card presentation modes (audio/picture) switch the list into the
    // matching CSS mode (unlabeled cards revealed on placement).
    const cardMode = configService.cardMode;
    if (cardMode) {
      this.shadowRoot.getElementById('dragDropList')?.classList.add(`${cardMode}-mode`);
    }
    // The audio variant also mounts a hidden YouTube player. Awaited so it is
    // listening before the first question-presented event fires.
    if (configService.audioConfig?.enabled) {
      await import('../components/youtube-audio-player.js');
      this.shadowRoot.appendChild(document.createElement('youtube-audio-player'));
      // Ask the list to run the opening song preview (play each reference song
      // before unlocking the board). Set before the `events` attribute below so
      // it is present when the list initializes. Only the game page opts in, so
      // the tutorial — which has no hidden player — is unaffected.
      this.shadowRoot.getElementById('dragDropList')?.setAttribute('audio-intro', '');
    }

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
          await this.handleWin();
          return;
        } else if (playersWithMaxScore.length > 0 && !currentPlayerIsWinner) {
          this.gameStateService.EndGame(this.gameId);
          this.endGameAndGoToScores();
          return;
        }
      }

      if (gameState && gameState.state === GameStateEnum.ENDED) {
        this.endGameAndGoToScores();
        return;
      }

      this.previousPlayerScores = gameState.playerScores.reduce((acc, player) => {
        acc[player.playerId] = player.score;
        return acc;
      }, {});
    }, 1000);
  }

  // Shows the win overlay for the local winner and then redirects to the scores
  // screen. Runs at most once (guarded by gameOver) whether it is triggered by
  // the winning move (checkLocalPlayerWon) or by the poll.
  async handleWin() {
    if (this.gameOver) return;
    this.stopGame();

    this.gameStateService.EndGame(this.gameId);
    audioService.play(SoundEnum.WIN);

    const winOverlay = document.createElement('win-overlay');
    winOverlay.setAttribute('message', translationService.t('game.youWin'));
    document.body.appendChild(winOverlay);

    // Keep the overlay up for the length of the win sound; quizzes without a
    // configured win sound (e.g. the audio variants) fall back to a short delay
    // so the redirect to the scores screen still happens.
    const winSoundDuration = await audioService.getSoundLength(SoundEnum.WIN).catch(() => 4000);
    setTimeout(() => {
      winOverlay.remove();
      window.location.hash = `/scores?gameId=${this.gameId}`;
    }, winSoundDuration);
  }

  // A non-winning end (another player won, or the game was ended elsewhere):
  // stop and go straight to the scores screen.
  endGameAndGoToScores() {
    if (this.gameOver) return;
    this.stopGame();
    window.location.hash = `/scores?gameId=${this.gameId}`;
  }

  // Stops all game activity: marks the game over, halts polling, and tells the
  // hidden audio player (if any) to stop and not start another track, so no new
  // song plays once the game is decided.
  stopGame() {
    this.gameOver = true;
    clearInterval(this.toastGameStateId);
    clearInterval(this.pollGameStateId);
    document.dispatchEvent(new CustomEvent('game-over'));
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
    // Slow-mode countdown is shown in the toolbar (emitted by the drag-drop list).
    this.shadowRoot.addEventListener('slow-timer', (event) => {
      const timerEl = this.shadowRoot.getElementById('slow-timer');
      if (!timerEl) return;
      if (event.detail.active) {
        timerEl.hidden = false;
        timerEl.textContent = translationService.t('game.timeLeft', { seconds: event.detail.seconds });
      } else {
        timerEl.hidden = true;
      }
    });

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