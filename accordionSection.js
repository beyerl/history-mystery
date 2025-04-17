class AccordionSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const event = JSON.parse(this.getAttribute('data-event'));
    this.render(event);
  }

  render(event) {
    this.shadowRoot.innerHTML = `
      <style>
        .accordion-section {
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }
        .accordion-title {
          cursor: pointer;
          padding: 10px;
          background: #f0f0f0;
        }
        .accordion-content {
          padding: 10px;
          /* Removed display: none to allow native <details> behavior */
        }
        .arrow-button {
          margin-left: 10px;
          cursor: pointer;
        }
      </style>
      <details class="accordion-section">
        <summary class="accordion-title">
          <strong>${event.title}</strong>
          <span class="display-none"> - ${event.year}</span>
          <button class="arrow-button up-button">🔼 Up</button>
          <button class="arrow-button down-button">🔽 Down</button>
        </summary>
        <div class="accordion-content">
          <p><strong>Description:</strong> ${event.description}</p>
        </div>
      </details>
    `;

    this.addEventListeners();
  }

  addEventListeners() {
    const upButton = this.shadowRoot.querySelector('.up-button');
    const downButton = this.shadowRoot.querySelector('.down-button');
    const accordionSection = this;

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
}

customElements.define('accordion-section', AccordionSection);

// Usage example:
// const eventAccordion = document.getElementById('eventAccordion');
// const event = { title: 'Event Title', year: '2023', description: 'Event Description' };
// const accordion = document.createElement('accordion-section');
// accordion.setAttribute('data-event', JSON.stringify(event));
// eventAccordion.appendChild(accordion);
