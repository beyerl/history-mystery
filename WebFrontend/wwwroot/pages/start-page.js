class StartPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1>History Mystery</h1>
            <div style="text-align: center; margin-top: 20%; display: flex; flex-direction: column; align-items: stretch;">
                <button id="start-game-button" style="padding: 10px 20px; font-size: 16px;">Start Game</button>
                <button id="join-game-button" style="padding: 10px 20px; font-size: 16px;">Join Game</button>
            </div>
        `;

        this.querySelector('#start-game-button').addEventListener('click', () => {
            window.location.hash = '/setup';
        });

        this.querySelector('#join-game-button').addEventListener('click', () => {
            window.location.hash = '/join';
        });
    }
}

customElements.define('start-page', StartPage);
