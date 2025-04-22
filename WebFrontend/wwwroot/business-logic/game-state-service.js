import { GameState, GameStateEnum } from '../models/game-state.js';
import { IGameStateService } from './i-game-state-service.js';

class GameStateService extends IGameStateService {
    constructor() {
        if (GameStateService.instance) {
            return GameStateService.instance;
        }
        this.games = new Map();
        GameStateService.instance = this;
    }

    // Create a new game
    CreateGame(gameId) {
        const newGame = new GameState(gameId, [], GameStateEnum.SETUP);
        this.games.set(gameId, newGame);
        return newGame;
    }

    // Retrieve a game by its ID
    GetGame(gameId) {
        return this.games.get(gameId);
    }

    // Add a player to a game
    AddPlayer(gameId, playerId) {
        const game = this.games.get(gameId);
        if (!game || game.state !== GameStateEnum.SETUP) return false;

        const playerExists = game.playerScores.some(player => player.playerId === playerId);
        if (playerExists) return false; // Player already exists

        game.playerScores.push({ playerId, score: 0 });
        return true;
    }

    // Remove a player from a game
    RemovePlayer(gameId, playerId) {
        const game = this.games.get(gameId);
        if (!game || game.state !== GameStateEnum.SETUP) return false;

        const playerIndex = game.playerScores.findIndex(player => player.playerId === playerId);
        if (playerIndex === -1) return false; // Player not found

        game.playerScores.splice(playerIndex, 1);
        return true;
    }

    // Increment the score of a player by their ID
    IncrementPlayerScore(gameId, playerId) {
        const game = this.games.get(gameId);
        if (!game) return false;

        const player = game.playerScores.find(p => p.playerId === playerId);
        if (!player) return false;

        player.score += 1;
        return true;
    }

    // Reset the score of all players in a game
    ResetScores(gameId) {
        const game = this.games.get(gameId);
        if (!game) return false;

        game.playerScores.forEach(player => player.score = 0);
        game.state = GameStateEnum.RUNNING;
        return true;
    }

    // Start a game by its ID
    StartGame(gameId) {
        const game = this.games.get(gameId);
        if (!game || game.state !== GameStateEnum.SETUP) return false;

        game.state = GameStateEnum.RUNNING;
        return true;
    }

    // End a game by its ID
    EndGame(gameId) {
        const game = this.games.get(gameId);
        if (!game || game.state !== GameStateEnum.RUNNING) return false;

        game.state = GameStateEnum.ENDED;
        return true;
    }
}

// Ensure GameStateService implements IGameStateService
Object.getOwnPropertyNames(IGameStateService.prototype).forEach(method => {
    if (method !== 'constructor' && typeof GameStateService.prototype[method] !== 'function') {
        throw new Error(`GameStateService must implement method: ${method}`);
    }
});

export const gameStateService = new GameStateService();
