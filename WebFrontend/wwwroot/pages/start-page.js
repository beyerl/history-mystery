import { audioService } from '../business-logic/audio-service.js';
import { SoundEnum } from '../models/sound-enum.js';

class StartPage extends HTMLElement {
    connectedCallback() {
        audioService.play(SoundEnum.MENU, true);

        this.innerHTML = `
            <div class="padding-x-5" style="height: 100vh; display: flex; flex-direction: column; justify-content: end; align-items: center;">
                <div class="card w-100" style="text-align:center;">
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
