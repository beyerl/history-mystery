class ToastComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .toast {
          position: fixed;
          top: 5px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--color-toast-bg);
          color: var(--color-toast-text);
          padding: 10px 20px;
          border-radius: 5px;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          z-index: 1000;
          width: 80%;
          text-align: center;
        }
        .toast.show {
          opacity: 1;
        }
      </style>
      <div id="toast" class="toast"></div>
    `;
  }

  show(message) {
    const toast = this.shadowRoot.getElementById('toast');
    if (toast) {
      toast.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 1000);
    }
  }
}

customElements.define('toast-component', ToastComponent);
