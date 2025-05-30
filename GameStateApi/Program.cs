using GameStateApi.Services;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddSingleton<GameStateService>();
builder.Services.AddHostedService<GameStateCleanupService>(); // Register the background service
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS
var allowedOrigin = builder.Configuration["BaseUrl"];
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigin)
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();

app.Run();

public class GameStateCleanupService : BackgroundService
{
    private readonly IServiceProvider _serviceProvider;

    public GameStateCleanupService(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            using (var scope = _serviceProvider.CreateScope())
            {
                var gameStateService = scope.ServiceProvider.GetRequiredService<GameStateService>();
                gameStateService.CleanupOldGameStates();
            }

            await Task.Delay(TimeSpan.FromHours(1), stoppingToken);
        }
    }
}
