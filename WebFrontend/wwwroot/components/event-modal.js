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
        .close-btn {
          margin-top: 10px;
          float: right;
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
        <button class="close-btn btn btn-primary">X</button>
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
