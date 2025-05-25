class StartPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style="height: 100vh; display: flex; flex-direction: column; justify-content: end; align-items: center;">
            <div style="text-align:center;background-color: rgba(122, 73, 24, 0.7); padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); width: 80%;margin-bottom: 20px;">
                <h1 style="font-family: 'CrimsonPro', Times;color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);margin-top:0px">Herstory Mystery</h1>
                <div style="text-align: center; margin-top: 20px; display: flex; flex-direction: column; align-items: stretch;width:100%">
                <button id="start-game-button" class="btn btn-primary btn-block">Start Game</button>
                <button id="join-game-button" class="btn btn-primary btn-block">Join Game</button>
                </div>
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
