import { audioService } from '../business-logic/audio-service.js';

export class MuteButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        @import './styles.css';
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
    this.updateButton();
  }

  updateButton() {
    const muted = audioService.muted;
    this.button.textContent = muted ? '\u{1F507}' : '\u{1F50A}';
    this.button.title = muted ? 'Unmute audio' : 'Mute audio';
    this.button.setAttribute('aria-label', muted ? 'Unmute audio' : 'Mute audio');
  }
}

customElements.define('mute-button', MuteButton);
