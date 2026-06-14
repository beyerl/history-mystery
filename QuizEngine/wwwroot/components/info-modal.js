import { WikipediaInfoProvider } from '../business-logic/wikipedia-info-provider.js';
import { GenreInfoProvider } from '../business-logic/genre-info-provider.js';
import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';

// Maps a quiz config infoProvider descriptor to a provider implementation.
function resolveInfoProvider() {
  const descriptor = configService.infoProvider;
  if (!descriptor) return null;
  if (descriptor.type === 'wikipedia') return new WikipediaInfoProvider();
  if (descriptor.type === 'genre') return new GenreInfoProvider(descriptor);
  return null;
}

export class InfoModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.infoProvider = resolveInfoProvider();
    this.render();
  }

  static get observedAttributes() {
    return ['data-event'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-event') {
      this.eventData = JSON.parse(newValue);
      this.updateContent();
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import '${new URL('../styles.css', import.meta.url).href}';
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-modal-bg);
          padding: 20px;
          box-shadow: var(--color-modal-shadow);
          z-index: 1000;
          width: 90vw;
          box-sizing: border-box;
          max-height: calc(100vh - 40px);
          overflow-y: auto;
          border-radius: 0.75rem;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--color-modal-overlay);
          z-index: 999;
        }
        .close-btn-row {
          position: sticky;
          top: 0;
          display: flex;
          justify-content: flex-end;
          z-index: 1;
        }
        .close-btn {
          background: none;
          border: none;
          cursor: pointer;
        }
        .wiki-summary {
            padding: 10px;
            border: 1px solid var(--color-gray-400);
            background-color: var(--color-gray-100);
        }
        h3 {
          margin-top: 0;
        }
      </style>
      <div class="overlay"></div>
      <div class="modal">
        <div class="close-btn-row">
          <button class="close-btn btn btn-primary" title="${translationService.t('modal.close')}" aria-label="${translationService.t('modal.close')}">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;">
              <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        <div class="content"></div>
      </div>
    `;

    this.shadowRoot.querySelector('.overlay').addEventListener('click', () => this.close());
    this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => this.close());
  }

  async updateContent() {
    const content = this.shadowRoot.querySelector('.content');
    if (this.eventData) {
      content.innerHTML = `
        <h2>${this.eventData.year} - ${this.eventData.title}</h2>
        <p>${this.eventData.description || translationService.t('modal.noDescription')}</p>
      `;

      if (this.infoProvider && this.infoProvider.appliesTo(this.eventData)) {
        try {
          const summary = await this.infoProvider.getSummary(this.eventData);
          const heading = summary.heading ?? translationService.t('modal.wikipediaSummary');
          const linkLabel = summary.linkLabel ?? translationService.t('modal.readMore');
          const summaryCard = `
          <div class="wiki-summary">
            <i>${heading}</i>
            <h3>${summary.title}</h3>
            ${summary.thumbnail ? `<img src="${summary.thumbnail.source}" max-height="${summary.thumbnail.height}" max-width="${summary.thumbnail.width}" alt="${summary.title}" >` : ''}
            <div>${summary.extract_html}</div>
            ${summary.page ? `<a class="link" href="${summary.page}" target="_blank" rel="noopener">${linkLabel}</a>` : ''}
          </div>
        `;
          content.innerHTML += summaryCard;
        } catch (error) {
          console.error('Error fetching info summary:', error);
          content.innerHTML += `<p>${translationService.t('modal.wikipediaFailed')}</p>`;
        }
      }
    }
  }

  close() {
    this.remove();
  }
}

customElements.define('info-modal', InfoModal);
