import { audioService } from '../business-logic/audio-service.js';
import { SoundEnum } from '../models/sound-enum.js';
import { AnswerResultEnum } from '../models/answer-result.js';
import { historicEvents } from '../data/historic-events.js';
import '../components/drag-drop-list.js';

// A fake single-player game (unshuffled events, no API calls) that walks the
// player through the gameplay elements one step at a time.
class TutorialPage extends HTMLElement {
  currentStep = 0;

  steps = [
    {
      text: 'Welcome to Herstory Mystery! Your goal is to place historic events at the right spot on a timeline.',
      button: 'Next'
    },
    {
      text: 'The card at the top is the event you have to place. The timeline below already contains events sorted by year.',
      button: 'Next'
    },
    {
      text: 'Drag the top card onto the timeline where it belongs. Hint: Ada Blackjack survived her Arctic expedition in 1923.',
      advanceOn: 'correct',
      retryText: 'Not quite — a new event appeared at the top. Compare the years on the timeline and try again.'
    },
    {
      text: 'Mistakes are part of the game, though. This time, drop the card somewhere it does NOT belong.',
      advanceOn: 'answer'
    },
    {
      text: 'An incorrectly placed card shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!',
      button: 'Next'
    },
    {
      text: "Want to learn more about an event? Tap the 'more' button on any card in the timeline to read its Wikipedia summary.",
      advanceOn: 'modal'
    },
    {
      text: "That's it — you are ready to play. Have fun!",
      button: 'Finish'
    },
  ];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    audioService.stop(SoundEnum.MENU);
    // Opening the tutorial counts as completing it, so quitting half-way
    // does not lock the player out of multiplayer games.
    localStorage.setItem('tutorialCompleted', 'true');
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    this.returnTo = urlParams.get('returnTo') || '/';
    this.render();
    this.addEventListeners();
    this.showStep();
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
          <button id="exit-button" class="btn btn-primary btn-sm">Exit Tutorial</button>
          <button id="next-button" class="btn btn-primary">Next</button>
        </div>
      </div>
    `;
    this.shadowRoot.getElementById('dragDropList').setAttribute('events', JSON.stringify(historicEvents));
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
          this.showStep(step.retryText);
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

  showStep(textOverride = null) {
    const step = this.steps[this.currentStep];
    this.shadowRoot.getElementById('instruction-text').textContent = textOverride || step.text;
    const nextButton = this.shadowRoot.getElementById('next-button');
    nextButton.style.display = step.button ? 'inline-block' : 'none';
    nextButton.textContent = step.button || 'Next';
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
