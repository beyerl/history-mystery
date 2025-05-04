import Sortable from '../3rdparty/sortable.js'; // Import Sortable.js
import { AnswerResultEnum } from '../models/answer-result.js';
import { EventService } from '../business-logic/event-service.js';

class DragDropList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.loadStyles();
    this.render();
  }

  async loadStyles() {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = './components/drag-drop-list.css'; // Corrected path
    this.shadowRoot.appendChild(style);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
        <div class="top-slot-container"></div>
        <div class="drop-list-wrapper"><div class="drop-list"></div></div>
      </div>
    `;

    this.shadowRoot.append(template.content.cloneNode(true));
    this.initSortable();
  }

  static get observedAttributes() {
    return ['events'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'events') {
      this.events = JSON.parse(newValue);
      this.initializeEvents();
    }
  }

  connectedCallback() {
    if (this.events.length === 0 && this.hasAttribute('events')) {
      const events = this.getAttribute('events')
      this.events = JSON.parse(events);
    }
    this.initializeEvents();
  }

  static get observedAttributes() {
    return ['events'];
  }

  initializeEvents() {
    this._eventService = new EventService(this.events);
    const events = [this._eventService.get(), this._eventService.get(), this._eventService.get()];
    this.populateSlots(events.slice(1).sort((a, b) => a.year - b.year));
    this.populateTopSlot(events[0]);
  }

  populateSlots(events) {
    const dropList = this.shadowRoot.querySelector('.drop-list');
    dropList.innerHTML = events.map(event => `
      <div class="slot ignore-elements" data-year="${event.year}">
        <div class="pill">${this.createPillContent(event)}</div>
      </div>
    `).join('');
  }

  populateTopSlot(event) {
    const topSlot = this.shadowRoot.querySelector('.top-slot-container');
    if (event && event.title && event.year) {
      topSlot.innerHTML = `<div class="top-slot" data-year="${event.year}">
      <div class="drag-element">${this.createPillContent(event)}</div></div>`;
      Sortable.create(topSlot, {
        group: 'dragDropList'
      });

    } else {
      console.warn('Invalid event object or missing title:', event);
      topSlot.innerHTML = ''; // Clear the top slot if event is invalid
    }
  }

  createPillContent(event) {
    return `   
      <div class="year">${event.year}</div>
      <div class="title">${event.title}</div>
      <button class="more">more</button>`
  }


  initSortable() {
    if (typeof Sortable === 'undefined') {
      console.error('Sortable.js is not loaded. Please include it in your project.');
      return;
    }
    const dropList = this.shadowRoot.querySelector('.drop-list');
    Sortable.create(dropList, {
      group: 'dragDropList',
      filter: ".ignore-elements",
      onAdd: (evt) => this.onAdd(evt),
    });
  }

  onAdd(evt) {
    const draggedElement = evt.item;
    const draggedYear = draggedElement.getAttribute('data-year');
    const previousElement = evt.to.children[evt.newIndex - 1];
    const previousYear = previousElement ? previousElement.getAttribute('data-year') : -999999999;
    const nextElement = evt.to.children[evt.newIndex + 1];
    const nextYear = nextElement ? nextElement.getAttribute('data-year') : 999999999;
    if (draggedYear < previousYear || draggedYear > nextYear) {
      this.dispatchMessage(AnswerResultEnum.INCORRECT);
      draggedElement.classList.add('incorrect-answer');
      draggedElement.classList.add('incorrect-answer-animation');
      setTimeout(() => {
        draggedElement.classList.remove('incorrect-answer-animation');
        draggedElement.remove();
        this.populateTopSlot(this._eventService.get());
      }, 500); // Adjust the duration as needed
    } else {
      this.dispatchMessage(AnswerResultEnum.CORRECT);
      // style drag element like a regular slot
      draggedElement.children[0].classList.remove('drag-element');
      draggedElement.children[0].classList.add('pill');

      draggedElement.classList.add('ignore-elements');
      draggedElement.classList.add('correct-answer');
      draggedElement.classList.add('correct-answer-animation');

      setTimeout(() => {
        draggedElement.classList.remove('correct-answer');
        draggedElement.classList.remove('correct-answer-animation');

        this.populateTopSlot(this._eventService.get());
      }, 500); // Adjust the duration as needed
    }
  }

  dispatchMessage(answerResult) {
    this.dispatchEvent(new CustomEvent('answer-result', {
      detail: { answerResult },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('drag-drop-list', DragDropList);
