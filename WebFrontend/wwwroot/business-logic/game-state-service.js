import { GameState, GameStateEnum } from '../models/game-state.js';
import { IGameStateService } from './i-game-state-service.js';
import { API_BASE_ADDRESS } from '../config.js'; // <--- hinzugefügt

class GameStateService extends IGameStateService {
    constructor() {
        super();
        this.baseAddress = API_BASE_ADDRESS; // <--- geändert
    }

    async CreateGameAsync(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}`, {
            method: 'POST',
            contenttype: 'application/json',
        });
        var responseJson = await response.json()

        this.validateGameState(responseJson);
        return new GameState(responseJson.gameId, responseJson.playerScores, responseJson.state);
    }

    async GetGameAsync(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}`);
        var responseJson = await response.json()
        this.validateGameState(responseJson);
        return new GameState(responseJson.gameId, responseJson.playerScores, responseJson.state);
    }

    async AddPlayer(gameId, playerId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async RemovePlayer(gameId, playerId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}`, {
            method: 'DELETE',
        });
        return response.status === 200;
    }

    async IncrementPlayerScore(gameId, playerId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/players/${playerId}/increment`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async ResetScores(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/restart`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async StartGame(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/start`, {
            method: 'POST',
        });
        return response.status === 200;
    }

    async EndGame(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}/end`, {
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
