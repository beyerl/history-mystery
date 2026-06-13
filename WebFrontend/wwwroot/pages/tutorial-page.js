import { audioService } from '../business-logic/audio-service.js';
import { SoundEnum } from '../models/sound-enum.js';
import { AnswerResultEnum } from '../models/answer-result.js';
import { historicEvents } from '../data/historic-events.js';
import { translationService } from '../business-logic/translation-service.js';
import '../components/drag-drop-list.js';

// A fake single-player game (unshuffled events, no API calls) that walks the
// player through the gameplay elements one step at a time.
class TutorialPage extends HTMLElement {
  currentStep = 0;

  steps = [
    { textKey: 'tutorial.welcome', buttonKey: 'tutorial.next' },
    { textKey: 'tutorial.topCard', buttonKey: 'tutorial.next' },
    { textKey: 'tutorial.dragCorrect', advanceOn: 'correct', retryTextKey: 'tutorial.dragRetry' },
    { textKey: 'tutorial.dragWrong', advanceOn: 'answer' },
    { textKey: 'tutorial.feedback', buttonKey: 'tutorial.next' },
    { textKey: 'tutorial.wikipedia', advanceOn: 'modal' },
    { textKey: 'tutorial.finished', buttonKey: 'tutorial.finish' },
  ];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    audioService.stop(SoundEnum.MENU);
    // Opening the tutorial counts as completing it, so quitting half-way
    // does not lock the player out of multiplayer games.
    localStorage.setItem('tutorialCompleted', 'true');
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    this.returnTo = urlParams.get('returnTo') || '/';
    this.render();
    this.addEventListeners();
    this.showStep();
    const localizedEvents = await translationService.localizeEvents(historicEvents);
    this.shadowRoot.getElementById('dragDropList').setAttribute('events', JSON.stringify(localizedEvents));
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import './styles.css';
        :host {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .instruction-panel {
          position: fixed;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: min(500px, calc(100vw - 20px));
          box-sizing: border-box;
          background-color: var(--color-beige);
          border: 1px solid var(--color-brown);
          border-radius: 0.75rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          padding: 15px;
          z-index: 500;
        }
        .instruction-text {
          color: var(--color-brown);
          margin: 0 0 10px 0;
        }
        .instruction-buttons {
          display: flex;
          justify-content: space-between;
          gap: 10px;
        }
      </style>
      <drag-drop-list id="dragDropList" no-shuffle></drag-drop-list>
      <div class="instruction-panel">
        <p class="instruction-text" id="instruction-text"></p>
        <div class="instruction-buttons">
          <button id="exit-button" class="btn btn-primary btn-sm">${translationService.t('tutorial.exit')}</button>
          <button id="next-button" class="btn btn-primary">${translationService.t('tutorial.next')}</button>
        </div>
      </div>
    `;
  }

  addEventListeners() {
    this.shadowRoot.getElementById('next-button').addEventListener('click', () => this.advance());
    this.shadowRoot.getElementById('exit-button').addEventListener('click', () => this.finish());

    this.shadowRoot.addEventListener('answer-result', (event) => {
      const step = this.steps[this.currentStep];
      const result = event.detail.answerResult;
      audioService.play(result === AnswerResultEnum.CORRECT ? SoundEnum.SUCCESS : SoundEnum.FAILURE);

      if (step.advanceOn === 'correct') {
        if (result === AnswerResultEnum.CORRECT) {
          this.advance();
        } else {
          this.showStep(step.retryTextKey);
        }
      } else if (step.advanceOn === 'answer') {
        this.advance();
      }
    });

    this.shadowRoot.addEventListener('event-modal-opened', () => {
      if (this.steps[this.currentStep].advanceOn === 'modal') {
        this.advance();
      }
    });
  }

  showStep(textKeyOverride = null) {
    const step = this.steps[this.currentStep];
    this.shadowRoot.getElementById('instruction-text').textContent = translationService.t(textKeyOverride || step.textKey);
    const nextButton = this.shadowRoot.getElementById('next-button');
    nextButton.style.display = step.buttonKey ? 'inline-block' : 'none';
    nextButton.textContent = translationService.t(step.buttonKey || 'tutorial.next');
  }

  advance() {
    if (this.currentStep >= this.steps.length - 1) {
      this.finish();
      return;
    }
    this.currentStep++;
    this.showStep();
  }

  finish() {
    window.location.hash = this.returnTo;
  }
}

customElements.define('tutorial-page', TutorialPage);
