// Interface-like class for GameStateService
export class IGameStateService {
    CreateGameAsync(gameId) { throw new Error('Not implemented'); }
    GetGameAsync(gameId) { throw new Error('Not implemented'); }
    AddPlayerAsync(gameId, playerId) { throw new Error('Not implemented'); }
    RemovePlayerAsync(gameId, playerId) { throw new Error('Not implemented'); }
    IncrementPlayerScoreAsync(gameId, playerId) { throw new Error('Not implemented'); }
    ResetScoresAsync(gameId) { throw new Error('Not implemented'); }
    StartGameAsync(gameId) { throw new Error('Not implemented'); }
    EndGameAsync(gameId) { throw new Error('Not implemented'); }
}
