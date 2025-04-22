// Interface-like class for GameStateService
export class IGameStateService {
    CreateGame(gameId) { throw new Error('Not implemented'); }
    GetGame(gameId) { throw new Error('Not implemented'); }
    AddPlayer(gameId, playerId) { throw new Error('Not implemented'); }
    RemovePlayer(gameId, playerId) { throw new Error('Not implemented'); }
    IncrementPlayerScore(gameId, playerId) { throw new Error('Not implemented'); }
    ResetScores(gameId) { throw new Error('Not implemented'); }
    StartGame(gameId) { throw new Error('Not implemented'); }
    EndGame(gameId) { throw new Error('Not implemented'); }
}
