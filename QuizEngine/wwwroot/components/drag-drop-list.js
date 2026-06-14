import Sortable from '../3rdparty/sortable.js'; // Import Sortable.js
import { AnswerResultEnum } from '../models/answer-result.js';
import { QuestionService } from '../business-logic/question-service.js';
import { InfoModal } from './info-modal.js';
import { translationService } from '../business-logic/translation-service.js';
import { configService } from '../business-logic/config-service.js';

const DEFAULT_SLOW_MODE_SECONDS = 15;

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
    style.href = new URL('./drag-drop-list.css', import.meta.url).href; // engine-relative, mount-agnostic
    this.shadowRoot.appendChild(style);
  }

  render() {
    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
        <div class="slow-timer" hidden></div>
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
    if (!this.events) {
      return;
    }
    if (this.events.length === 0 && this.hasAttribute('events')) {
      const events = this.getAttribute('events')
      this.events = JSON.parse(events);
    }
    this.initializeEvents();
  }

  static get observedAttributes() {
    return ['events'];
  }

  disconnectedCallback() {
    this.clearSlowModeTimer();
  }

  initializeEvents() {
    // Slow mode (a per-question answer timer) is opt-in via attribute and set
    // by the game page from the shared game state.
    this.slowMode = this.hasAttribute('slow-mode');
    this.slowModeSeconds = Number(this.getAttribute('slow-mode-seconds')) || DEFAULT_SLOW_MODE_SECONDS;
    this._eventService = new QuestionService(this.events, !this.hasAttribute('no-shuffle'));
    const events = [this._eventService.get(), this._eventService.get(), this._eventService.get()];
    this.populateSlots(events.slice(1).sort((a, b) => a.year - b.year));
    this.populateTopSlot(events[0]);
    this.shadowRoot.addEventListener('click', (e) => {
      if (e.target.classList.contains('more')) {
        const eventData = JSON.parse(e.target.getAttribute('data-event'));
        this.openEventModal(eventData);
      }
    });
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
    this.currentTopEvent = event;
    if (event && event.title && event.year) {
      topSlot.innerHTML = `<div class="top-slot" data-year="${event.year}">
      <div class="drag-element">${this.createPillContent(event)}</div></div>`;
      Sortable.create(topSlot, {
        group: 'dragDropList'
      });
      if (this.slowMode) {
        this.startSlowModeTimer();
      }
    } else {
      console.warn('Invalid event object or missing title:', event);
      topSlot.innerHTML = ''; // Clear the top slot if event is invalid
      this.clearSlowModeTimer();
    }
  }

  // Slow mode: each question gets a fixed time window. The placement stays
  // editable for the whole window and is only judged when time runs out.
  startSlowModeTimer() {
    this.clearSlowModeTimer();
    this._placedElement = null;
    let remaining = this.slowModeSeconds;
    const timerEl = this.shadowRoot.querySelector('.slow-timer');
    const renderRemaining = () => {
      if (timerEl) {
        timerEl.hidden = false;
        timerEl.textContent = translationService.t('game.timeLeft', { seconds: Math.max(0, remaining) });
      }
    };
    renderRemaining();
    this._slowModeIntervalId = setInterval(() => {
      remaining -= 1;
      renderRemaining();
      if (remaining <= 0) {
        this.finalizeSlowAnswer();
      }
    }, 1000);
  }

  clearSlowModeTimer() {
    if (this._slowModeIntervalId) {
      clearInterval(this._slowModeIntervalId);
      this._slowModeIntervalId = null;
    }
    const timerEl = this.shadowRoot?.querySelector('.slow-timer');
    if (timerEl) {
      timerEl.hidden = true;
    }
  }

  // Called when the slow-mode window closes: judge the final position of the
  // card the player placed (or count it as a mistake if none was placed).
  finalizeSlowAnswer() {
    this.clearSlowModeTimer();
    const dropList = this.shadowRoot.querySelector('.drop-list');
    const placed = this._placedElement;
    this._placedElement = null;

    if (!placed || !dropList.contains(placed)) {
      // No answer placed in time -> counts as a mistake; move on.
      this.dispatchMessage(AnswerResultEnum.INCORRECT, this.currentTopEvent);
      this.populateTopSlot(this._eventService.get());
      return;
    }

    const siblings = Array.from(dropList.children);
    const index = siblings.indexOf(placed);
    const draggedYear = Number(placed.getAttribute('data-year'));
    const previousYear = index > 0 ? Number(siblings[index - 1].getAttribute('data-year')) : -999999999;
    const nextYear = index < siblings.length - 1 ? Number(siblings[index + 1].getAttribute('data-year')) : 999999999;

    if (draggedYear < previousYear || draggedYear > nextYear) {
      this.markIncorrect(placed, draggedYear);
    } else {
      this.markCorrect(placed);
    }
  }

  createPillContent(event) {
    const moreButton = configService.infoProvider
      ? `<button class="btn btn-primary btn-sm more" data-event='${this.escapeHtml(JSON.stringify(event))}'>${translationService.t('common.more')}</button>`
      : '';
    return `
      <div class="year">${event.year}${configService.valueSuffix}</div>
      <div class="title">${this.escapeHtml(event.title)}</div>
      ${moreButton}`
  }

  escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  openEventModal(eventData) {
    // Check if the modal is already open
    const existingModal = document.querySelector('info-modal');
    if (existingModal) {
      existingModal.remove();
    }
    // Create a new modal instance and set the event data
    const modal = new InfoModal();
    modal.setAttribute('data-event', JSON.stringify(eventData));
    document.body.appendChild(modal);
    this.dispatchEvent(new CustomEvent('info-modal-opened', {
      bubbles: true,
      composed: true
    }));
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
    // In slow mode the placement is not judged on drop; remember it and let
    // the player keep reordering until the timer closes the window.
    if (this.slowMode) {
      this._placedElement = evt.item;
      return;
    }

    const draggedElement = evt.item;
    const draggedYear = Number(draggedElement.getAttribute('data-year'));
    const previousElement = evt.to.children[evt.newIndex - 1];
    const previousYear = previousElement ? Number(previousElement.getAttribute('data-year')) : -999999999;
    const nextElement = evt.to.children[evt.newIndex + 1];
    const nextYear = nextElement ? Number(nextElement.getAttribute('data-year')) : 999999999;

    if (draggedYear < previousYear || draggedYear > nextYear) {
      this.markIncorrect(draggedElement, draggedYear);
    } else {
      this.markCorrect(draggedElement);
    }
  }

  markIncorrect(draggedElement, draggedYear) {
    this.dispatchMessage(AnswerResultEnum.INCORRECT, this.currentTopEvent);
    draggedElement.classList.add('ignore-elements');
    draggedElement.classList.add('incorrect-answer');
    draggedElement.classList.add('incorrect-answer-animation');

    // Show correct year in a popover
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.textContent = `${draggedYear}`;

    draggedElement.style.position = 'relative';
    draggedElement.appendChild(popover);

    setTimeout(() => {
      draggedElement.classList.remove('incorrect-answer-animation');
      popover.remove();
      draggedElement.remove();
      this.populateTopSlot(this._eventService.get());
    }, 800);
  }

  markCorrect(draggedElement) {
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
    }, 800);
  }

  dispatchMessage(answerResult, eventData = null) {
    this.dispatchEvent(new CustomEvent('answer-result', {
      detail: { answerResult, eventData },
      bubbles: true,
      composed: true
    }));
  }
}

customElements.define('drag-drop-list', DragDropList);
