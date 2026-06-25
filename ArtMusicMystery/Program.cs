var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles(); // serves this app's wwwroot and the engine at /_content/QuizEngine/
app.UseRouting();
app.MapFallbackToFile("index.html");

app.Run();
