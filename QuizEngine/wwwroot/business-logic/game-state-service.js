import { GameState, GameStateEnum } from '../models/game-state.js';
import { IGameStateService } from './i-game-state-service.js';
import { configService } from './config-service.js';

// The game page polls the backend every second, so a hard-down server would
// otherwise fire a toast per second. Coalesce notifications to at most one
// every few seconds.
const ERROR_NOTIFY_THROTTLE_MS = 4000;
let lastErrorNotifiedAt = 0;

function notifyBackendError() {
    const now = Date.now();
    if (now - lastErrorNotifiedAt < ERROR_NOTIFY_THROTTLE_MS) {
        return;
    }
    lastErrorNotifiedAt = now;
    window.dispatchEvent(new CustomEvent('backend-error'));
}

class GameStateService extends IGameStateService {
    // Read lazily: the config is set at bootstrap, after this singleton is constructed.
    get baseAddress() {
        return configService.apiBaseAddress;
    }

    // Wraps fetch so the user is told (via a toast) when the backend is
    // unreachable or erroring. Notifies on network failures and on server
    // errors (5xx); 4xx responses are treated as normal application answers
    // (e.g. a 404 for a game that does not exist) and are left to the callers.
    async request(url, options) {
        try {
            const response = await fetch(url, options);
            if (response.status >= 500) {
                notifyBackendError();
            }
            return response;
        } catch (error) {
            notifyBackendError();
            throw error;
        }
    }

    async CreateGameAsync(gameId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}`, {
            method: 'POST',
            contenttype: 'application/json',
        });
        var responseJson = await response.json()

        this.validateGameState(responseJson);
        return new GameState(responseJson.gameId, responseJson.playerScores, responseJson.state, responseJson.questionOrder, responseJson.slowMode);
    }

    async GetGameAsync(gameId) {
        try {
            const response = await this.request(`${this.baseAddress}api/GameState/${gameId}`);
            var responseJson = await response.json()
            this.validateGameState(responseJson);
            return new GameState(responseJson.gameId, responseJson.playerScores, responseJson.state, responseJson.questionOrder, responseJson.slowMode);
        } catch (error) {
            console.error('Error fetching game state:', error);
            return null; // Return null if the game is not found or an error occurs
        }
    }

    async AddPlayer(gameId, playerId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async RemovePlayer(gameId, playerId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}`, {
            method: 'DELETE',
        });
        return response.status === 200;
    }

    async IncrementPlayerScore(gameId, playerId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}/increment`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async ResetScores(gameId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/restart`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async SetQuestionOrderAsync(gameId, questionOrder) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/question-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(questionOrder),
        });
        return response.status === 200;
    }

    async SetSlowModeAsync(gameId, slowMode) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/slow-mode`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(slowMode),
        });
        return response.status === 200;
    }

    async StartGame(gameId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/start`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async EndGame(gameId) {
        const response = await this.request(`${this.baseAddress}api/GameState/${gameId}/end`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    validateGameState(responseJson) {
        if (typeof responseJson.gameId !== 'string') {
            throw new Error('Invalid gameId in response from server');
        }
        if (!Object.values(GameStateEnum).includes(responseJson.state)) {
            throw new Error('Invalid game state in response from server');
        }
        if (!Array.isArray(responseJson.playerScores)) {
            throw new Error('Invalid playerScores in response from server');
        }
    }
}

// Ensure GameStateService implements IGameStateService
Object.getOwnPropertyNames(IGameStateService.prototype).forEach(method => {
    if (method !== 'constructor' && typeof GameStateService.prototype[method] !== 'function') {
        throw new Error(`GameStateService must implement method: ${method}`);
    }
});

export const gameStateService = new GameStateService();
