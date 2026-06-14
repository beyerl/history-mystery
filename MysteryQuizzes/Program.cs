var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles(); // serves the static overview page from wwwroot
app.UseRouting();
app.MapFallbackToFile("index.html");

app.Run();
