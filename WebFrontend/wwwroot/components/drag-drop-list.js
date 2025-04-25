class DragDropList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.initDragAndDrop();
  }

  static get observedAttributes() {
    return ['events'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'events' && newValue) {
      this.populateSlots(JSON.parse(newValue));
    }
  }

  populateSlots(events) {
    const slots = this.shadowRoot.querySelectorAll('.slot');
    slots.forEach((slot, index) => {
      slot.innerHTML = ''; // Clear existing content
      if (events[index]) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.textContent = events[index].title;
        slot.appendChild(pill);
      }
    });
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        --top-slot-margin: 5px;
        display: flex;
        flex-direction: column;
        width: 100%; /* Ensure the host element takes full width */
        height: 100%; /* Ensure the host element takes full height */
        max-width: 480px; /* Typical big phone width */
      }
      .container {
        box-sizing: border-box; 
        height: 100%; /* Ensure the wrapper div takes full height */
        width: 100%; /* Ensure the wrapper div takes full width */
        display: flex;
        flex-direction: column;
      }
      .drag-element {
        box-sizing: border-box; 
        border: 1px solid blue;
        border-radius: 12px;
        height: 100%; /* Fixed height for the top slot */
        width: 100%; /* Ensure the top slot takes full width */
        background-color: lightblue; /* Background color for visibility */
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
        height: calc((100% - var(--top-slot-margin)) / 12); /* Fixed height for each slot */
        width: 100%; /* Ensure each slot takes full width */
        box-sizing: border-box;
        padding: 5px;
      }
      .drop-list {
        box-sizing: border-box; 
        display: flex;
        flex-direction: column;
        height: calc((100% - var(--top-slot-margin)) * 12 / 13);
        width: 100%; /* Ensure the drop list takes full width */
      }
      .top-slot {
        box-sizing: border-box;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        height: calc((100% - var(--top-slot-margin)) * 1 / 13);
        width: 100%; /* Ensure the top slot takes full width */
        margin-bottom: var(--top-slot-margin);
        padding: 5px;
        box-sizing: border-box;
      }
    `;

    const template = document.createElement('template');
    template.innerHTML = `
      <div class="container">
      <div class="top-slot">
        <div class="drag-element"></div>
      </div>
      <div class="drop-list">
        ${'<div class="slot"></div>'.repeat(12)}
      </div>
      </div>
    `;

    this.shadowRoot.append(style, template.content.cloneNode(true));
  }

  initDragAndDrop() {
    const dragElement = this.shadowRoot.querySelector('.drag-element');
    let offsetX = 0, offsetY = 0;

    const onDragStart = (event) => {
      if (event.type === 'touchstart') {
        const touch = event.touches[0];
        offsetX = touch.clientX - dragElement.getBoundingClientRect().left;
        offsetY = touch.clientY - dragElement.getBoundingClientRect().top;
      } else {
        offsetX = event.clientX - dragElement.getBoundingClientRect().left;
        offsetY = event.clientY - dragElement.getBoundingClientRect().top;
      }
      dragElement.style.position = 'relative';
      dragElement.style.zIndex = '1000';
    };

    const onDragMove = (event) => {
      let clientY;
      if (event.type === 'touchmove') {
        const touch = event.touches[0];
        clientY = touch.clientY;
      } else {
        clientY = event.clientY;
      }
      dragElement.style.top = `${clientY - offsetY}px`;
    };

    const onDragEnd = () => {
      dragElement.style.zIndex = '';
      dragElement.style.position = '';
      dragElement.style.left = '';
      dragElement.style.top = '';
    };

    dragElement.addEventListener('mousedown', onDragStart);
    dragElement.addEventListener('touchstart', onDragStart, { passive: false });

    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('touchmove', onDragMove, { passive: false });

    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchend', onDragEnd);
  }
}

customElements.define('drag-drop-list', DragDropList);
