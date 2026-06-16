using System;
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
                State = GameStateEnum.Setup,
                QuestionOrder = new List<int>(),
                SlowMode = false,
                LastUpdated = DateTime.UtcNow
            };
            _gameStates[gameId] = newGame;
            return newGame.ToDto();
        }

        // Enables/disables slow mode (a per-question answer timer) for a game.
        // Decided by the creating client and shared with everyone who joins.
        public bool SetSlowMode(string gameId, bool slowMode)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            game.SlowMode = slowMode;
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        // Persists the order in which questions are presented for a game, as a
        // list of integer indexes. The order is decided by the creating client
        // and shared with everyone who joins, so all clients see the same
        // sequence. The API stays agnostic of what the indexes refer to.
        public bool SetQuestionOrder(string gameId, List<int> questionOrder)
        {
            // Allowed while the game is not running: in Setup (the initial order)
            // and once it has Ended (reshuffling for a rematch). Rejected while
            // Running so the sequence can't change underneath players mid-game.
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State == GameStateEnum.Running)
                return false;

            game.QuestionOrder = questionOrder ?? new List<int>();
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        public GameStateDto? GetGame(string gameId)
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
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        public bool RemovePlayer(string gameId, string playerId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            var result = game.PlayerScores.Remove(playerId);
            if (result)
            {
                game.LastUpdated = DateTime.UtcNow;
            }
            return result;
        }

        public bool IncrementPlayerScore(string gameId, string playerId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game))
                return false;

            if (!game.PlayerScores.ContainsKey(playerId))
                return false;

            game.PlayerScores[playerId]++;
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        public bool StartGame(string gameId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Setup)
                return false;

            game.State = GameStateEnum.Running;
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        public bool EndGame(string gameId)
        {
            if (!_gameStates.TryGetValue(gameId, out var game) || game.State != GameStateEnum.Running)
                return false;

            game.State = GameStateEnum.Ended;
            game.LastUpdated = DateTime.UtcNow;
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
            game.LastUpdated = DateTime.UtcNow;
            return true;
        }

        public void CleanupOldGameStates()
        {
            var oneHourAgo = DateTime.UtcNow.AddHours(-1);
            var keysToRemove = _gameStates.Where(kvp => kvp.Value.LastUpdated < oneHourAgo).Select(kvp => kvp.Key).ToList();

            foreach (var key in keysToRemove)
            {
                _gameStates.Remove(key);
            }
        }
    }

    public class GameState
    {
        public string GameId { get; set; } = null!;
        public Dictionary<string, int> PlayerScores { get; set; } = null!;
        public GameStateEnum State { get; set; }
        public List<int> QuestionOrder { get; set; } = new();
        public bool SlowMode { get; set; }
        public DateTime LastUpdated { get; set; } // New property to track last update time

        public GameStateDto ToDto()
        {
            return new GameStateDto
            {
                GameId = GameId,
                PlayerScores = PlayerScores.Select(ps => new PlayerScoreDto { PlayerId = ps.Key, Score = ps.Value }).ToList(),
                State = State,
                QuestionOrder = QuestionOrder,
                SlowMode = SlowMode
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
        public string GameId { get; set; } = null!;

        public List<PlayerScoreDto> PlayerScores { get; set; } = null!;

        public GameStateEnum State { get; set; }

        public List<int> QuestionOrder { get; set; } = new();

        public bool SlowMode { get; set; }
    }

    public class PlayerScoreDto
    {
        public string PlayerId { get; set; } = null!;
        public int Score { get; set; }
    }
}
