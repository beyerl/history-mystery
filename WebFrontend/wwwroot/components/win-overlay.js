class WinOverlay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const message = this.getAttribute('message') || 'You win!';
        this.render(message);
    }

    render(message) {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 1s ease-in-out;
        }
        .message {
          color: white;
          font-size: 4rem;
          font-weight: bold;
          text-align: center;
          animation: zoomIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.5); }
          to { transform: scale(1); }
        }
      </style>
      <div class="message">${message}</div>
    `;
    }
}

customElements.define('win-overlay', WinOverlay);
