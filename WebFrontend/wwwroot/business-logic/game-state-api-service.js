import { IGameStateService } from './i-game-state-service.js';

export class GameStateApiService extends IGameStateService {
    constructor() {
        super();
        this.baseAddress = 'https://localhost:7227/';
    }

    async CreateGame(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}`, {
            method: 'POST',
        });
        return response.json();
    }

    async GetGame(gameId) {
        const response = await fetch(`${this.baseAddress}api/GameState/${gameId}`);
        return response.json();
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
        throw new Error('ResetScores is not implemented in the API');
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
}

// Ensure GameStateService implements IGameStateService
Object.getOwnPropertyNames(IGameStateService.prototype).forEach(method => {
    if (method !== 'constructor' && typeof GameStateApiService.prototype[method] !== 'function') {
        throw new Error(`GameStateApiService must implement method: ${method}`);
    }
});

export const gameStateApiService = new GameStateApiService();
