using GameStateApi.Services;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddSingleton<GameStateService>();
builder.Services.AddHostedService<GameStateCleanupService>(); // Register the background service
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// CORS — the API is deployed once and shared by several frontends (the combined
// Azure app plus frontends deployed separately, e.g. to GitHub Pages and their
// own subdomains), so it must allow more than one origin. Origins come from the
// "AllowedOrigins" config array, with the legacy single "BaseUrl" and a
// comma-separated "AllowedOriginsCsv" (handy for env vars) folded in.
var origins = new List<string>();
var configuredOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();
if (configuredOrigins is { Length: > 0 })
    origins.AddRange(configuredOrigins);
var baseUrl = builder.Configuration["BaseUrl"];
if (!string.IsNullOrWhiteSpace(baseUrl))
    origins.Add(baseUrl);
var originsCsv = builder.Configuration["AllowedOriginsCsv"];
if (!string.IsNullOrWhiteSpace(originsCsv))
    origins.AddRange(originsCsv.Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries));
if (origins.Count == 0)
    origins.Add("http://localhost:3000");
// CORS origins must not carry a trailing slash.
var allowedOrigins = origins.Select(o => o.TrimEnd('/')).Distinct().ToArray();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(allowedOrigins)
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
