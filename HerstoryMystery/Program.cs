var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles(); // Enables serving static files from wwwroot
app.UseRouting();
app.MapFallbackToFile("index.html");

app.Run();
