import { GameState, GameStateEnum } from '../models/game-state.js';
import { IGameStateService } from './i-game-state-service.js';
import { configService } from './config-service.js';

class GameStateService extends IGameStateService {
    // Read lazily: the config is set at bootstrap, after this singleton is constructed.
    get baseAddress() {
        return configService.apiBaseAddress;
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
        try {
            const response = await fetch(`${this.baseAddress}api/GameState/${gameId}`);
            var responseJson = await response.json()
            this.validateGameState(responseJson);
            return new GameState(responseJson.gameId, responseJson.playerScores, responseJson.state);
        } catch (error) {
            console.error('Error fetching game state:', error);
            return null; // Return null if the game is not found or an error occurs
        }
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
