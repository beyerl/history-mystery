# Deployment

The GameState API and the quiz frontends are deployed **separately** so the
frontends are no longer bundled into the API's DLL.

## Architecture

```
                      ┌──────────────────────────────┐
   main domain  ─────▶│ MysteryQuizzes overview (#12) │  (static landing)
                      └──────────────────────────────┘
                                   │ links to
        ┌──────────────┬───────────┴───────────┬──────────────┐
        ▼              ▼                         ▼              ▼
  herstory.<dom>   spacerace.<dom>          metal.<dom>     art.<dom>     (subdomains)
   (frontends — static, GitHub Pages; relative asset paths)
        └──────────────┴───────────┬───────────┴──────────────┘
                                   │ fetch (CORS)
                                   ▼
                      ┌──────────────────────────────┐
                      │  GameState API  (Azure)       │  deployed once, shared
                      └──────────────────────────────┘
```

- **GameState API** — deployed once to Azure (existing workflow
  `main_herstorymystery.yml`). It may keep serving the combined Herstory
  frontend for now; all other frontends call it cross-origin.
- **Frontends** — built as base-path-independent static sites by
  `tools/build-web.mjs` and published to **GitHub Pages** by
  `.github/workflows/pages.yml` (a sub-folder per app, plus a fallback landing
  page). The same output also works served from a subdomain root.

## CORS

The API allows multiple origins (see `GameStateApi/Program.cs`), sourced from:

- `AllowedOrigins` (array) in `appsettings*.json` — local dev ports are listed
  in `appsettings.json`.
- `BaseUrl` (legacy single origin — still honoured; set by the Azure workflow).
- `AllowedOriginsCsv` — a comma-separated list, convenient for env vars.

### Manual: add the production frontend origins

On the Azure App Service (Configuration → Application settings), add the
deployed frontend origins, e.g.:

- `AllowedOriginsCsv = https://<user>.github.io,https://herstory.<domain>,https://spacerace.<domain>,https://metal.<domain>,https://art.<domain>`

or individually as `AllowedOrigins__0`, `AllowedOrigins__1`, … Restart the app.
Origins must have **no trailing slash** and **no path** (scheme + host + port only;
`https://<user>.github.io`, not `…/repo/art/`).

## GitHub Pages (frontends) — manual setup

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Add a repository **secret `API_BASE_ADDRESS`** = the deployed API URL
   (e.g. `https://herstorymystery.azurewebsites.net`). The Pages and Android
   builds inject it into each frontend's `config.js`.
3. Push to `main` (or run the *Deploy frontends to GitHub Pages* workflow). Apps
   appear at `https://<user>.github.io/<repo>/<app>/`.

## Subdomains (#12) — manual DNS

GitHub Pages serves one site per repo, so true per-app subdomains
(`art.<domain>`, …) require DNS you control:

- Point each subdomain (CNAME) at its host. Options: host each frontend folder
  on a static host/CDN per subdomain, or use one Pages custom domain for the
  overview and host the quiz frontends elsewhere. Because the frontends use
  relative paths, the exact same build artifact works at any subdomain root.
- The overview (`MysteryQuizzes`) is served on the **main domain** and links to
  the quiz **subdomains**.

These DNS/host bindings are credentials/registrar operations left to the project
owner; the code and CI build artifacts are ready for them.

## Local development

Run the API and any frontend(s); the API's dev CORS already allows the
frontends' local ports (`appsettings.json` `AllowedOrigins`). The combined
Azure deployment of API + Herstory remains available as before.
