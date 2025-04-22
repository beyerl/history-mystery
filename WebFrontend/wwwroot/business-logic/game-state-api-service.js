import { IGameStateService } from './i-game-state-service.js';

export class GameStateService extends IGameStateService {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient; // Assume httpClient is an instance of a library like Axios or Fetch wrapper
    }

    async CreateGame(gameId) {
        const response = await this.httpClient.post(`/api/GameState/${gameId}`);
        return response.data;
    }

    async GetGame(gameId) {
        const response = await this.httpClient.get(`/api/GameState/${gameId}`);
        return response.data;
    }

    async AddPlayer(gameId, playerId) {
        const response = await this.httpClient.post(`/api/GameState/${gameId}/players/${playerId}`);
        return response.status === 200;
    }

    async RemovePlayer(gameId, playerId) {
        const response = await this.httpClient.delete(`/api/GameState/${gameId}/players/${playerId}`);
        return response.status === 200;
    }

    async IncrementPlayerScore(gameId, playerId) {
        const response = await this.httpClient.post(`/api/GameState/${gameId}/players/${playerId}/increment`);
        return response.status === 200;
    }

    async ResetScores(gameId) {
        throw new Error('ResetScores is not implemented in the API');
    }

    async StartGame(gameId) {
        const response = await this.httpClient.post(`/api/GameState/${gameId}/start`);
        return response.status === 200;
    }

    async EndGame(gameId) {
        const response = await this.httpClient.post(`/api/GameState/${gameId}/end`);
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
