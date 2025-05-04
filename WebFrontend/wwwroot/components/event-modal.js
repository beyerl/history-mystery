export class EventModal extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
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
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        .close-btn {
          margin-top: 10px;
          padding: 5px 10px;
          background: red;
          color: white;
          border: none;
          cursor: pointer;
        }
      </style>
      <div class="overlay"></div>
      <div class="modal">
        <div class="content"></div>
        <button class="close-btn">Close</button>
      </div>
    `;

        this.shadowRoot.querySelector('.overlay').addEventListener('click', () => this.close());
        this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => this.close());
    }

    updateContent() {
        const content = this.shadowRoot.querySelector('.content');
        if (this.eventData) {
            content.innerHTML = `
        <h2>${this.eventData.year} - ${this.eventData.title}</h2>
        <p>${this.eventData.description || 'No description available.'}</p>
      `;
        }
    }

    close() {
        this.remove();
    }
}

customElements.define('event-modal', EventModal);
