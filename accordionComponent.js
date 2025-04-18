class AccordionComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
      <style>
        .accordion {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      </style>
      <div class="accordion">
        <slot></slot>
      </div>
    `;
        this.historicEvents = [];
    }

    static get observedAttributes() {
        return ['events'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'events') {
            this.historicEvents = JSON.parse(newValue);
            this.initializeAccordion();
        }
    }

    connectedCallback() {
        if (this.historicEvents.length === 0 && this.hasAttribute('events')) {
            const events = this.getAttribute('events')
            this.historicEvents = JSON.parse(events);
        }
        this.initializeAccordion();
    }

    initializeAccordion() {
        this.innerHTML = ''; // Clear existing content

        // Pick two random events and create accordion sections for them
        const shuffledEvents = [...this.historicEvents].sort(() => 0.5 - Math.random());
        const selectedEvents = shuffledEvents.slice(0, 2);
        selectedEvents.sort((a, b) => a.year - b.year); // Sort by year
        selectedEvents.forEach(event => {
            const accordionSection = document.createElement('accordion-section');
            accordionSection.setAttribute('data-event', JSON.stringify(event));
            this.appendChild(accordionSection);
        });

        // Display an initial event
        this.createEvent();
    }

    async checkEventOrderAndCreateEvent() {
        await this.checkEventOrder();
        setTimeout(() => {
            this.createEvent();
        }, 1000);
    }

    checkEventOrder() {
        return new Promise(resolve => {
            const accordionItems = Array.from(this.children);

            // Remove highlighting from all existing accordion sections
            accordionItems.forEach(section => {
                if (section.hasAttribute('is-correct')) section.removeAttribute('is-correct');
                if (section.hasAttribute('is-incorrect')) section.removeAttribute('is-incorrect');
                if (typeof section.requestUpdate === 'function') {
                    section.requestUpdate(); // Trigger a rerender on the component
                }
            });

            const sortedItems = [...accordionItems].sort((a, b) => {
                const yearA = parseInt(JSON.parse(a.getAttribute('data-event')).year);
                const yearB = parseInt(JSON.parse(b.getAttribute('data-event')).year);
                return yearA - yearB;
            });

            const isCorrectOrder = accordionItems.every((item, index) => item === sortedItems[index]);

            const messageBox = document.getElementById('messageBox');
            const activeItem = accordionItems.find(item => item.hasAttribute('is-active'));
            if (activeItem) activeItem.removeAttribute('is-active');

            if (isCorrectOrder) {
                messageBox.textContent = 'Correct!';
                if (activeItem) {
                    activeItem.setAttribute('is-correct', 'true');
                    if (typeof activeItem.requestUpdate === 'function') {
                        activeItem.requestUpdate(); // Trigger a rerender on the component
                    }
                }
                resolve();
            } else {
                messageBox.textContent = 'Wrong!';
                if (activeItem) {
                    activeItem.setAttribute('is-incorrect', 'true');
                    if (typeof activeItem.requestUpdate === 'function') {
                        activeItem.requestUpdate(); // Trigger a rerender on the component
                    }
                }

                sortedItems.forEach(item => this.appendChild(item));

                // Wait and remove wrongly placed item
                setTimeout(() => {
                    if (activeItem) this.removeChild(activeItem);
                    resolve();
                }, 1000);
            }
        });
    }

    createEvent() {
        if (this.historicEvents.length == 0) return;
        const displayedEvents = Array.from(this.querySelectorAll('accordion-section')).map(section => {
            return JSON.parse(section.getAttribute('data-event')).title;
        });
        const availableEvents = this.historicEvents.filter(event => !displayedEvents.includes(event.title));
        if (availableEvents.length === 0) {
            alert('All events have been displayed!');
            return;
        }
        const randomIndex = Math.floor(Math.random() * availableEvents.length);
        const event = availableEvents[randomIndex];

        // Create a new accordion section for the new event
        const accordionSection = document.createElement('accordion-section');
        accordionSection.setAttribute('data-event', JSON.stringify(event));
        accordionSection.setAttribute('is-active', 'true'); // Set is-active only on the new section
        this.insertBefore(accordionSection, this.firstChild);
    }
}

customElements.define('accordion-component', AccordionComponent);
