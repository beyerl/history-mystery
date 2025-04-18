
export class GameStateService {
    constructor() {
        this.games = new Map();
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

    // Increment the score of a player by their ID
    IncrementPlayerScore(gameId, playerId) {
        const game = this.games.get(gameId);
        if (!game) return false;

        const player = game.playerScores.find(p => p.playerId === playerId);
        if (!player) return false;

        player.score += 1;
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
