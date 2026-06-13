export const GameStateEnum = {
    SETUP: 0,
    RUNNING: 1,
    ENDED: 2
};

// GameState class
export class GameState {
    constructor(gameId, playerScores, state) {
        this.gameId = gameId;
        this.playerScores = playerScores; // Array of objects with playerId and score
        this.state = state;
    }
}
