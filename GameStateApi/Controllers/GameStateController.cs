using Microsoft.AspNetCore.Mvc;
using GameStateApi.Services;

namespace GameStateApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameStateController : ControllerBase
    {
        private readonly GameStateService _gameStateService;

        public GameStateController(GameStateService gameStateService)
        {
            _gameStateService = gameStateService;
        }

        [HttpPost("{gameId}")]
        public IActionResult CreateGame(string gameId)
        {
            var game = _gameStateService.CreateGame(gameId);
            return Ok(game);
        }

        [HttpGet("{gameId}")]
        public IActionResult GetGame(string gameId)
        {
            var game = _gameStateService.GetGame(gameId);
            return game != null ? Ok(game) : NotFound();
        }

        [HttpPost("{gameId}/players/{playerId}")]
        public IActionResult AddPlayer(string gameId, string playerId)
        {
            return _gameStateService.AddPlayer(gameId, playerId) ? Ok() : BadRequest();
        }

        [HttpDelete("{gameId}/players/{playerId}")]
        public IActionResult RemovePlayer(string gameId, string playerId)
        {
            return _gameStateService.RemovePlayer(gameId, playerId) ? Ok() : BadRequest();
        }

        [HttpPost("{gameId}/start")]
        public IActionResult StartGame(string gameId)
        {
            return _gameStateService.StartGame(gameId) ? Ok() : BadRequest();
        }

        [HttpPost("{gameId}/end")]
        public IActionResult EndGame(string gameId)
        {
            return _gameStateService.EndGame(gameId) ? Ok() : BadRequest();
        }

        [HttpPost("{gameId}/restart")]
        public IActionResult RestartGame(string gameId)
        {
            return _gameStateService.RestartGame(gameId) ? Ok() : BadRequest();
        }

        [HttpPost("{gameId}/players/{playerId}/increment")]
        public IActionResult IncrementPlayerScore(string gameId, string playerId)
        {
            return _gameStateService.IncrementPlayerScore(gameId, playerId) ? Ok() : BadRequest();
        }

        // Stores the question order (integer indexes) chosen by the creating
        // client so every player in the game sees the same sequence.
        [HttpPost("{gameId}/question-order")]
        public IActionResult SetQuestionOrder(string gameId, [FromBody] List<int> questionOrder)
        {
            return _gameStateService.SetQuestionOrder(gameId, questionOrder) ? Ok() : BadRequest();
        }


    }
}
