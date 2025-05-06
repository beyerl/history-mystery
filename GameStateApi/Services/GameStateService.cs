using System.Collections.Generic;
using System.Linq;

namespace GameStateApi.Services
{
    public class GameStateService
    {
        private readonly Dictionary<string, GameState> _gameStates = new();

        public GameStateDto CreateGame(string gameId)
        {
            var newGame = new GameState
            {
                GameId = gameId,
                PlayerScores = new Dictionary<string, int>(),
                State = GameStateEnum.Setup
            };
            _gameStates[gameId] = newGame;
            return newGame.ToDto();
        }

        public GameStateDto GetGame(string gameId)
        {
            return _gameStates.TryGetValue(gameId, out var gameState) ? gameState.ToDto() : null;
        }

        public bool AddPlayer(string gameId, string playerId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            if (game.PlayerScores.ContainsKey(playerId))
                return false;

            game.PlayerScores[playerId] = 0;
            return true;
        }

        public bool RemovePlayer(string gameId, string playerId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            return game.PlayerScores.Remove(playerId);
        }

        public bool IncrementPlayerScore(string gameId, string playerId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game))
                return false;

            if (!game.PlayerScores.ContainsKey(playerId))
                return false;

            game.PlayerScores[playerId]++;
            return true;
        }

        public bool StartGame(string gameId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            game.State = GameStateEnum.Running;
            return true;
        }

        public bool EndGame(string gameId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Running)
                return false;

            game.State = GameStateEnum.Ended;
            return true;
        }

        public bool RestartGame(string gameId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game))
                return false;

            foreach (var playerId in game.PlayerScores.Keys.ToList())
            {
                game.PlayerScores[playerId] = 0;
            }

            game.State = GameStateEnum.Running;
            return true;
        }
    }

    public class GameState
    {
        public string GameId { get; set; }
        public Dictionary<string, int> PlayerScores { get; set; }
        public GameStateEnum State { get; set; }

        public GameStateDto ToDto()
        {
            return new GameStateDto
            {
                GameId = GameId,
                PlayerScores = PlayerScores.Select(ps => new PlayerScoreDto { PlayerId = ps.Key, Score = ps.Value }).ToList(),
                State = State
            };
        }
    }


    public enum GameStateEnum
    {
        Setup,
        Running,
        Ended
    }

    public class GameStateDto
    {
        public string GameId { get; set; }

        public List<PlayerScoreDto> PlayerScores { get; set; }

        public GameStateEnum State { get; set; }


    }

    public class PlayerScoreDto
    {
        public string PlayerId { get; set; }
        public int Score { get; set; }
    }
}
