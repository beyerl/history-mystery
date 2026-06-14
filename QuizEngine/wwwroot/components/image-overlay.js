import { translationService } from '../business-logic/translation-service.js';

// Full-screen image viewer used by the picture quiz variant. Shows the artwork
// large with a dark backdrop; closes on backdrop or close-button click.
export class ImageOverlay extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['data-image', 'data-title'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const src = this.getAttribute('data-image');
    const title = this.getAttribute('data-title') || '';
    if (!src) return;
    this.shadowRoot.innerHTML = `
      <style>
        .overlay {
          position: fixed; inset: 0;
          background: rgba(0, 0, 0, 0.9);
          z-index: 2000;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 20px; box-sizing: border-box;
        }
        img {
          max-width: 100%; max-height: calc(100% - 40px);
          object-fit: contain;
        }
        .close-btn {
          position: absolute; top: 12px; right: 12px;
          background: none; border: none; color: #fff;
          font-size: 28px; cursor: pointer; line-height: 1;
        }
        .caption { color: #fff; margin-top: 10px; text-align: center; }
      </style>
      <div class="overlay">
        <button class="close-btn" title="${translationService.t('modal.close')}" aria-label="${translationService.t('modal.close')}">&times;</button>
        <img src="${src}" alt="${title}">
        ${title ? `<div class="caption">${title}</div>` : ''}
      </div>
    `;
    this.shadowRoot.querySelector('.overlay').addEventListener('click', (e) => {
      // Close when clicking the backdrop or the close button, but not the image.
      if (e.target.tagName !== 'IMG') this.close();
    });
  }

  close() {
    this.remove();
  }
}

customElements.define('image-overlay', ImageOverlay);
