import Sortable from '../3rdparty/sortable.js'; // Import Sortable.js
import { AnswerResultEnum } from '../models/answer-result.js';

class DragDropList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --top-slot-margin: 5px;
        --container-height: 100vh;
        --border-color-blue: blue;
        --border-color-grey: grey;
        --border-color-black: black;
        --bg-color-lightblue: lightblue;
        --bg-color-lightgrey: lightgrey;
        --bg-color-whitesmoke: WhiteSmoke;
        --bg-color-red: red;
        --bg-color-green: green;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
      .container {
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .drag-element {
        box-sizing: border-box;
        border: 1px solid var(--border-color-blue);
        border-radius: 12px;
        height: 100%;
        width: 100%;
        background-color: var(--bg-color-lightblue);
        padding: 5px 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pill {
        box-sizing: border-box;
        border: 1px solid var(--border-color-grey);
        border-radius: 12px;
        background-color: var(--bg-color-lightgrey);
        text-align: center;
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .slot {
        box-sizing: border-box;
        border: 1px solid var(--border-color-black);
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        padding: 5px;
      }
      .top-slot-container {
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        margin-bottom: var(--top-slot-margin);
        background-color: var(--bg-color-whitesmoke);
      }
      .top-slot {
        box-sizing: border-box;
        border: 1px solid var(--border-color-black);
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        padding: 5px;
      }
      .drop-list-wrapper {
        height: calc((100% - var(--top-slot-margin)) * 12 / 13);
        background-color: var(--bg-color-whitesmoke);
      }
      .drop-list {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%; //calc((100% - var(--top-slot-margin)) * 12 / 13);
        width: 100%;
      }
      .incorrect-answer .drag-element {
        background-color: var(--bg-color-red);
      }       

      .incorrect-answer-animation {
        animation: shake 0.5s ease-in-out;
      }

      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
      }

      .correct-answer .drag-element {
        background-color: var(--bg-color-green);
      }
      .correct-answer-animation {
        animation: fadeIn 0.5s ease-in-out;
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `;

    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
        <div class="top-slot-container"></div>
        <div class="drop-list-wrapper"><div class="drop-list"></div></div>
      </div>
    `;

    this.shadowRoot.append(style, template.content.cloneNode(true));

    this.initSortable();
  }

  static get observedAttributes() {
    return ['event-service'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'event-service' && newValue) {
      this.eventService = JSON.parse(newValue);
      this.initializeEvents();
    }
  }

  set eventService(service) {
    if (!service || typeof service.get !== 'function') {
      console.error('Invalid or missing EventService:', service);
      return;
    }
    this._eventService = service;
    this.initializeEvents();
  }

  initializeEvents() {
    if (!this._eventService) {
      console.error('EventService is not set.');
      return;
    }
    const events = [this._eventService.get(), this._eventService.get(), this._eventService.get()];
    this.populateSlots(events.slice(1).sort((a, b) => a.year - b.year));
    this.populateTopSlot(events[0]);
  }

  populateSlots(events) {
    const dropList = this.shadowRoot.querySelector('.drop-list');
    dropList.innerHTML = events.map(event => `
      <div class="slot ignore-elements" data-year="${event.year}">
      <div class="pill">${event.title}</div>
      </div>
    `).join('');
  }

  populateTopSlot(event) {
    const topSlot = this.shadowRoot.querySelector('.top-slot-container');
    if (event && event.title && event.year) {
      topSlot.innerHTML = `<div class="top-slot" data-year="${event.year}"><div class="drag-element">${event.title}</div></div>`;
      Sortable.create(topSlot, {
        group: 'dragDropList'
      });

    } else {
      console.warn('Invalid event object or missing title:', event);
      topSlot.innerHTML = ''; // Clear the top slot if event is invalid
    }
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
      draggedElement.classList.add('ignore-elements');
      draggedElement.classList.add('correct-answer');
      draggedElement.classList.add('correct-answer-animation');

      setTimeout(() => {
        draggedElement.classList.remove('correct-answer');
        draggedElement.classList.remove('correct-answer-animation');
        // style drag element like a regular slot
        draggedElement.children[0].classList.remove('drag-element');
        draggedElement.children[0].classList.add('pill');
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
