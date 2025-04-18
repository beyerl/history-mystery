class StartPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="text-align: center; margin-top: 20%;">
                <button id="start-game-button" style="padding: 10px 20px; font-size: 16px;">Start Game</button>
            </div>
        `;

        this.querySelector('#start-game-button').addEventListener('click', () => {
            window.location.hash = '/setup';
        });
    }
}

customElements.define('start-page', StartPage);
