import { WikipediaApiService } from '../business-logic/wikipedia-api-service.js';

export class EventModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.wikipediaApiService = new WikipediaApiService();
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
        @import '../styles.css';
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-modal-bg);
          padding: 20px;
          box-shadow: var(--color-modal-shadow);
          z-index: 1000;
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
          <button class="close-btn btn btn-primary" title="Close" aria-label="Close">
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
        <p>${this.eventData.description || 'No description available.'}</p>
      `;

      if (this.eventData.wiki_title) {
        try {
          const summary = await this.wikipediaApiService.getSummary(this.eventData.wiki_title);
          const summaryCard = `
          <div class="wiki-summary">
            <i>Wikipedia Summary</i>
            <h3>${summary.title}</h3>
            ${summary.thumbnail ? `<img src="${summary.thumbnail.source}" max-height="${summary.thumbnail.height}" max-width="${summary.thumbnail.width}" alt="${summary.title}" >` : ''}
            <div>${summary.extract_html}</div>
            <a class="link" href="${summary.page}" target="_blank">Read more on Wikipedia</a>
          </div>
        `;
          content.innerHTML += summaryCard;
        } catch (error) {
          console.error('Error fetching Wikipedia summary:', error);
          content.innerHTML += `<p>Failed to load Wikipedia summary.</p>`;
        }
      }
    }
  }

  close() {
    this.remove();
  }
}

customElements.define('event-modal', EventModal);
