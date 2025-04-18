class AccordionSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const event = JSON.parse(this.getAttribute('data-event'));
    const isActive = this.hasAttribute('is-active') && this.getAttribute('is-active') === 'true';
    const isCorrect = this.hasAttribute('is-correct') && this.getAttribute('is-correct') === 'true';
    const isIncorrect = this.hasAttribute('is-incorrect') && this.getAttribute('is-incorrect') === 'true';
    this.render(event, isActive, isCorrect, isIncorrect);
  }

  render(event, isActive, isCorrect, isIncorrect) {
    this.shadowRoot.innerHTML = `
      <style>
      .display-none{
        display: none; 
      }
      .accordion-section {
        border: 1px solid #ccc;
        margin-bottom: 10px;
      }

      .accordion-title {
        cursor: pointer;
        padding: 10px;        
        background-color: ${isActive ? 'lightblue' : '#f0f0f0'};
        animation: ${isActive ? 'pulse 1s infinite' : 'none'};
      }

      .accordion-title.is-correct {
        background-color: green;
      }

      .accordion-title.is-incorrect {
        background-color: red;
      }

      @keyframes pulse {
        0% {
        box-shadow: 0 0 5px blue;
        }
        50% {
        box-shadow: 0 0 15px blue;
        }
        100% {
        box-shadow: 0 0 5px blue;
        }
      }
      .accordion-content {
        padding: 10px;
      }
      .arrow-button {
        margin-left: 10px;
        cursor: pointer;
        display: ${isActive ? 'inline-block' : 'none'};
      }
      </style>
      <details class="accordion-section">
        <summary class="accordion-title ${isCorrect ? 'is-correct' : ''} ${isIncorrect ? 'is-incorrect' : ''}">
          <strong>${event.title}</strong>
          <span class="${isActive ? 'display-none' : ''}"> - ${event.year}</span>
          <button class="arrow-button up-button">🔼 Up</button>
          <button class="arrow-button down-button">🔽 Down</button>
        </summary>
        <div class="accordion-content">
          <p><strong>Description:</strong> ${event.description}</p>
        </div>
      </details>
    `;

    if (isActive) {
      this.addEventListeners();
    }
  }

  addEventListeners() {
    const upButton = this.shadowRoot.querySelector('.up-button');
    const downButton = this.shadowRoot.querySelector('.down-button');

    upButton.addEventListener('click', () => this.moveAccordionItem('up'));
    downButton.addEventListener('click', () => this.moveAccordionItem('down'));
  }

  moveAccordionItem(direction) {
    const eventAccordion = this.parentElement;
    const sibling =
      direction === 'up'
        ? this.previousElementSibling
        : this.nextElementSibling;

    if (sibling) {
      if (direction === 'up') {
        eventAccordion.insertBefore(this, sibling);
      } else {
        eventAccordion.insertBefore(sibling, this);
      }
    }
  }

  requestUpdate() {
    const event = JSON.parse(this.getAttribute('data-event'));
    const isActive = this.hasAttribute('is-active') && this.getAttribute('is-active') === 'true';
    const isCorrect = this.hasAttribute('is-correct') && this.getAttribute('is-correct') === 'true';
    const isIncorrect = this.hasAttribute('is-incorrect') && this.getAttribute('is-incorrect') === 'true';
    this.render(event, isActive, isCorrect, isIncorrect);
  }
}

customElements.define('accordion-section', AccordionSection);

// Usage example:
// const eventAccordion = document.getElementById('eventAccordion');
// const event = { title: 'Event Title', year: '2023', description: 'Event Description' };
// const accordion = document.createElement('accordion-section');
// accordion.setAttribute('data-event', JSON.stringify(event));
// eventAccordion.appendChild(accordion);
