import { audioService } from '../business-logic/audio-service.js';
import { translationService } from '../business-logic/translation-service.js';

export class MuteButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import '${new URL('../styles.css', import.meta.url).href}';
        .mute-btn {
          position: fixed;
          top: 10px;
          right: 10px;
          z-index: 100;
        }
      </style>
      <button class="mute-btn btn btn-primary" aria-label="Mute audio"></button>
    `;

    this.button = this.shadowRoot.querySelector('.mute-btn');
    this.button.addEventListener('click', () => {
      audioService.toggleMute();
      this.updateButton();
    });
    window.addEventListener('language-changed', () => this.updateButton());
    this.updateButton();
  }

  updateButton() {
    const muted = audioService.muted;
    const label = translationService.t(muted ? 'mute.unmute' : 'mute.mute');
    this.button.textContent = muted ? '\u{1F507}' : '\u{1F50A}';
    this.button.title = label;
    this.button.setAttribute('aria-label', label);
  }
}

customElements.define('mute-button', MuteButton);
