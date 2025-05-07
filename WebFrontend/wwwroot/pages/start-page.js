class StartPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <h1 style="color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); margin-bottom: 65vh;">Herstory Mystery</h1>
                <div style="text-align: center; margin-top: 20px; display: flex; flex-direction: column; align-items: stretch;">
                    <button id="start-game-button" style="padding: 10px 20px; font-size: 16px; background-color: var(--color-mint); color: var(--color-brown); border: none; border-radius: 5px;">Start Game</button>
                    <button id="join-game-button" style="padding: 10px 20px; font-size: 16px; background-color: var(--color-yellow); color: var(--color-brown); border: none; border-radius: 5px; margin-top: 10px;">Join Game</button>
                </div>
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
