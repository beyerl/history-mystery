import Sortable from '../3rdparty/sortable.js'; // Import Sortable.js
import { AnswerResultEnum } from '../models/answer-result.js';
import { QuestionService } from '../business-logic/question-service.js';
import { InfoModal } from './info-modal.js';
import { ImageOverlay } from './image-overlay.js';
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
    this.clearIntroTimer();
  }

  initializeEvents() {
    // Guard against double initialization. On element upgrade both
    // attributeChangedCallback (for a pre-set `events` attribute) and
    // connectedCallback can fire; without this guard the list would build two
    // QuestionService instances and two slow-mode timers, so a second question
    // sequence runs out of step with the visible timer.
    if (this._initialized) {
      return;
    }
    this._initialized = true;
    // Slow mode (a per-question answer timer) is opt-in via attribute and set
    // by the game page from the shared game state.
    this.slowMode = this.hasAttribute('slow-mode');
    this.slowModeSeconds = Number(this.getAttribute('slow-mode-seconds')) || DEFAULT_SLOW_MODE_SECONDS;
    this._eventService = new QuestionService(this.events, !this.hasAttribute('no-shuffle'));
    const events = [this._eventService.get(), this._eventService.get(), this._eventService.get()];
    const initialPlaced = events.slice(1).sort((a, b) => a.year - b.year);
    this.populateSlots(initialPlaced);
    // Audio variant: before unlocking the board, play a short snippet of each
    // pre-placed reference song so players can anchor by ear. The card to guess
    // is only presented — and dragging only possible — once that opening
    // preview finishes. The game page opts in via the `audio-intro` attribute
    // (it is the place that also mounts the hidden player); every other quiz
    // and the tutorial start immediately.
    if (this.hasAttribute('audio-intro')) {
      this.runIntroPreview(initialPlaced, events[0]);
    } else {
      this.populateTopSlot(events[0]);
    }
    this.shadowRoot.addEventListener('click', (e) => {
      const moreBtn = e.target.closest('.more');
      if (moreBtn) {
        this.openEventModal(JSON.parse(moreBtn.getAttribute('data-event')));
        return;
      }
      const fullscreenBtn = e.target.closest('.fullscreen-btn');
      if (fullscreenBtn) {
        this.openImageOverlay(fullscreenBtn.getAttribute('data-image'), fullscreenBtn.getAttribute('data-title'));
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
      // Generic lifecycle signal: a new question is now active. Optional
      // behaviours (e.g. the audio variant's hidden player) subscribe to this;
      // the core engine itself does nothing else with it.
      this.dispatchEvent(new CustomEvent('question-presented', {
        detail: { question: event },
        bubbles: true,
        composed: true,
      }));
    } else {
      console.warn('Invalid event object or missing title:', event);
      topSlot.innerHTML = ''; // Clear the top slot if event is invalid
      this.clearSlowModeTimer();
    }
  }

  // Audio intro: walk through the pre-placed reference songs one by one,
  // highlighting each and streaming a short snippet, before the first card to
  // guess is shown. Audio is decoupled: we emit the same generic
  // `question-presented` event the hidden player already listens for, so it
  // simply switches tracks as each song (and finally the real question) is
  // presented; no `answer-result` is dispatched, so nothing is judged.
  async runIntroPreview(placedEvents, topEvent) {
    const seconds = Number(configService.audioConfig?.previewSeconds) || 10;
    const slots = Array.from(this.shadowRoot.querySelectorAll('.drop-list .slot'));
    for (let i = 0; i < placedEvents.length; i++) {
      if (!this.isConnected) return; // player navigated away mid-preview
      const slot = slots[i];
      slot?.classList.add('intro-active');
      this.dispatchEvent(new CustomEvent('question-presented', {
        detail: { question: placedEvents[i] },
        bubbles: true,
        composed: true,
      }));
      await this.waitIntro(seconds * 1000);
      slot?.classList.remove('intro-active');
    }
    if (!this.isConnected) return;
    // Unlock the board: present the card to guess (this also starts the
    // slow-mode timer and streams the question's own song).
    this.populateTopSlot(topEvent);
  }

  waitIntro(ms) {
    return new Promise(resolve => {
      this._introTimeoutId = setTimeout(resolve, ms);
    });
  }

  clearIntroTimer() {
    if (this._introTimeoutId) {
      clearTimeout(this._introTimeoutId);
      this._introTimeoutId = null;
    }
  }

  // Slow mode: each question gets a fixed time window. The placement stays
  // editable for the whole window and is only judged when time runs out.
  startSlowModeTimer() {
    this.clearSlowModeTimer();
    this._placedElement = null;
    let remaining = this.slowModeSeconds;
    // The countdown is rendered by the host (game page) in the top toolbar via
    // this event, so it no longer overlaps the question card.
    const emit = () => this.emitSlowTimer(Math.max(0, remaining), true);
    emit();
    this._slowModeIntervalId = setInterval(() => {
      remaining -= 1;
      emit();
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
    this.emitSlowTimer(0, false);
  }

  emitSlowTimer(seconds, active) {
    this.dispatchEvent(new CustomEvent('slow-timer', {
      detail: { seconds, active },
      bubbles: true,
      composed: true,
    }));
  }

  // Called when the slow-mode window closes: judge the final position of the
  // card the player placed (or count it as a mistake if none was placed).
  finalizeSlowAnswer() {
    this.clearSlowModeTimer();
    const dropList = this.shadowRoot.querySelector('.drop-list');
    const placed = this._placedElement;
    this._placedElement = null;

    if (!placed || !dropList.contains(placed)) {
      // Time ran out before an answer was locked in (nothing placed, or the card
      // was still being dragged) -> count it as a mistake and move on. If a drag
      // is still in progress, remember its element so the late drop is discarded
      // instead of being left in the list unevaluated.
      this.dispatchMessage(AnswerResultEnum.INCORRECT, this.currentTopEvent);
      this._voidElement = this.shadowRoot.querySelector('.top-slot');
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
    // `artist` is an optional, content-supplied field (used by the audio and
    // picture quizzes); quizzes without it simply render nothing here.
    const artist = event.artist
      ? `<div class="artist">${this.escapeHtml(event.artist)}</div>`
      : '';
    // `image` is optional (picture quiz): a reference thumbnail plus a button to
    // view it full-screen, shown instead of a text caption on the active card.
    const picture = event.image
      ? `<img class="card-thumb" src="${this.escapeHtml(event.image)}" alt="" loading="lazy">
         <button class="btn btn-primary btn-sm fullscreen-btn" data-image="${this.escapeHtml(event.image)}" data-title="${this.escapeHtml(event.title)}" title="${translationService.t('common.fullscreen')}" aria-label="${translationService.t('common.fullscreen')}">&#9974;</button>`
      : '';
    return `
      <div class="audio-icon" aria-hidden="true">🎵</div>
      ${picture}
      <div class="year">${event.year}${configService.valueSuffix}</div>
      ${artist}
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

  openImageOverlay(imageUrl, title) {
    document.querySelector('image-overlay')?.remove();
    const overlay = new ImageOverlay();
    overlay.setAttribute('data-image', imageUrl);
    if (title) overlay.setAttribute('data-title', title);
    document.body.appendChild(overlay);
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
    // A card whose slow-mode window already closed while it was still being
    // dragged: the timer already counted it as wrong and moved on, so discard
    // this late drop instead of leaving an unevaluated card in the list.
    if (this._voidElement && evt.item === this._voidElement) {
      this._voidElement = null;
      evt.item.remove();
      return;
    }

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
