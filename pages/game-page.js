class GamePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
        this.gameId = urlParams.get('gameId');
        this.render();
        this.initialize();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        @import './styles.css';
        footer {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #f1f1f1;
          text-align: center;
          padding: 10px 0;
          border-top: 1px solid #ccc;
        }
      </style>
      <accordion-component id="eventAccordion"></accordion-component>
      <button id="checkButton" class="button">Check</button>
      <div id="messageBox" class="message-box"></div>
      <footer id="footer">Game ID: ${this.gameId || 'N/A'}</footer>
    `;
    }

    initialize() {
        import('../data/historic-events.js').then(({ historicEvents }) => {
            const eventAccordion = this.shadowRoot.getElementById('eventAccordion');
            if (eventAccordion) {
                eventAccordion.setAttribute('events', JSON.stringify(historicEvents));
            }
        });

        import('../components/accordion-section-component.js');
        import('../components/accordion-component.js');

        this.shadowRoot.getElementById('checkButton').addEventListener('click', () => {
            const eventAccordion = this.shadowRoot.getElementById('eventAccordion');
            if (eventAccordion) {
                eventAccordion.checkEventOrderAndCreateEvent();
            }
        });
    }

    addEventListeners() {
        this.shadowRoot.addEventListener('message-update', (event) => {
            const messageBox = this.shadowRoot.getElementById('messageBox');
            if (messageBox) {
                messageBox.textContent = event.detail.message;
            }
        });
    }
}

customElements.define('game-page', GamePage);