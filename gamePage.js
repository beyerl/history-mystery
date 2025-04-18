class GamePage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.initialize();
        this.addEventListeners();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        @import './styles.css';
      </style>
      <accordion-component id="eventAccordion"></accordion-component>
      <button id="checkButton" class="button">Check</button>
      <div id="messageBox" class="message-box"></div>
    `;
    }

    initialize() {
        import('./historicEvents.js').then(({ historicEvents }) => {
            const eventAccordion = this.shadowRoot.getElementById('eventAccordion');
            if (eventAccordion) {
                eventAccordion.setAttribute('events', JSON.stringify(historicEvents));
            }
        });

        import('./accordionSectionComponent.js');
        import('./accordionComponent.js');

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
