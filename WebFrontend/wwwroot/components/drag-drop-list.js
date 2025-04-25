class DragDropList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
    this.initDragAndDrop();
  }

  render() {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        flex-direction: column;
        width: 100%; /* Ensure the host element takes full width */
        height: 100%; /* Ensure the host element takes full height */
        max-width: 480px; /* Typical big phone width */
      }
      .container {
        height: 100%; /* Ensure the wrapper div takes full height */
        width: 100%; /* Ensure the wrapper div takes full width */
        display: flex;
        flex-direction: column;
      }
      .drag-element {
        border: 1px solid blue;
        height: 100%; /* Fixed height for the top slot */
        width: 100%; /* Ensure the top slot takes full width */
        background-color: lightblue; /* Background color for visibility */
      }
      .slot {
        border: 1px solid black;
        flex-grow: 1; /* Distribute height equally among slots */
        width: 100%; /* Ensure each slot takes full width */
        box-sizing: border-box;
        padding: 5px; /* Add some padding for aesthetics */
      }
      .drop-list {
        display: flex;
        flex-direction: column;
        flex-grow: 12; /* Allow the drop list to grow and fill available space */
        width: 100%; /* Ensure the drop list takes full width */
      }
      .top-slot {
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        flex-grow: 1; /* Allow the top slot to grow and fill available space */
        width: 100%; /* Ensure the top slot takes full width */
        padding: 5px; /* Add some padding for aesthetics */
        margin-bottom: 5px; 
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
