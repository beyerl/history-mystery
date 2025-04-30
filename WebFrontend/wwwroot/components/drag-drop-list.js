import Sortable from '../3rdparty/sortable.js'; // Import Sortable.js

class DragDropList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get observedAttributes() {
    return ['events', 'selected-event'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'events' && newValue) {
      this.populateSlots(JSON.parse(newValue));
    }
    if (name === 'selected-event' && newValue) {
      this.populateTopSlot(JSON.parse(newValue));
    }
  }

  populateSlots(events) {
    const dropList = this.shadowRoot.querySelector('.drop-list');
    dropList.innerHTML = ''; // Clear existing content
    events.forEach((event, index) => {
      const slot = document.createElement('div');
      slot.className = 'slot ignore-elements';
      const pill = document.createElement('div');
      pill.className = 'pill';
      pill.textContent = event.title;
      slot.appendChild(pill);
      dropList.appendChild(slot);
    });
  }

  populateTopSlot(event) {
    const topSlot = this.shadowRoot.querySelector('.top-slot-container');
    if (event && event.title) {
      topSlot.innerHTML = `<div class="top-slot"><div class="drag-element">${event.title}</div></div>`;
      Sortable.create(topSlot, {  
        group: 'dragDropList',

      });
    } else {
      console.warn('Invalid event object or missing title:', event);
      topSlot.innerHTML = ''; // Clear the top slot if event is invalid
    }
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --top-slot-margin: 5px;
        --container-height: 100vh;
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
        border: 1px solid blue;
        border-radius: 12px;
        height: 100%;
        width: 100%;
        background-color: lightblue;
        padding: 5px 10px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .pill {
        box-sizing: border-box;
        border: 1px solid grey;
        border-radius: 12px;
        background-color: lightgrey;
        text-align: center;
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .slot {
        box-sizing: border-box;
        border: 1px solid black;
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        padding: 5px;
      }
      .top-slot-container {
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        margin-bottom: var(--top-slot-margin);
        background-color: WhiteSmoke;
      }
      .top-slot {
        box-sizing: border-box;
        border: 1px solid black;
        height: calc((var(--container-height) - var(--top-slot-margin)) / 13);
        width: 100%;
        padding: 5px;
      }
      .drop-list-wrapper {
        height: calc((100% - var(--top-slot-margin)) * 12 / 13);
        background-color: WhiteSmoke;
      }
      .drop-list {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        height: 100%; //calc((100% - var(--top-slot-margin)) * 12 / 13);
        width: 100%;
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

  initSortable() { 
    if (typeof Sortable === 'undefined') {
      console.error('Sortable.js is not loaded. Please include it in your project.');
      return;
    }
    const dropList = this.shadowRoot.querySelector('.drop-list');
    Sortable.create(dropList, {
      group: 'dragDropList',
      filter: ".ignore-elements"
    });
  }
}

customElements.define('drag-drop-list', DragDropList);
