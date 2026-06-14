// assemble.mjs — prepares the Capacitor web directory for one quiz app.
//
//   node assemble.mjs <appKey>
//
// Each web frontend is an SPA whose assets are split between its own wwwroot and
// the shared QuizEngine (served at /_content/QuizEngine/ by the .NET host). For a
// native wrapper we need them combined into one static folder, so this script:
//   1. copies <app>/wwwroot/*           -> mobile/www/
//   2. copies QuizEngine/wwwroot/*      -> mobile/www/_content/QuizEngine/
//   3. optionally rewrites the API base address (env API_BASE_ADDRESS)
//   4. writes capacitor.config.json with the app's id/name
//
// The result (mobile/www) is what `npx cap sync android` bundles into the APK.

import { existsSync, mkdirSync, rmSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');

const appKey = process.argv[2];
if (!appKey) {
  console.error('Usage: node assemble.mjs <appKey>  (see apps.json)');
  process.exit(1);
}

const apps = JSON.parse(readFileSync(resolve(here, 'apps.json'), 'utf8'));
const app = apps.find(a => a.key === appKey);
if (!app) {
  console.error(`Unknown app "${appKey}". Known: ${apps.map(a => a.key).join(', ')}`);
  process.exit(1);
}

const www = resolve(here, 'www');
const appWwwroot = resolve(repoRoot, app.dir, 'wwwroot');
const engineWwwroot = resolve(repoRoot, 'QuizEngine', 'wwwroot');

if (!existsSync(appWwwroot)) {
  console.error(`Missing ${appWwwroot}`);
  process.exit(1);
}

console.log(`Assembling "${app.appName}" (${app.appId}) into ${www}`);
rmSync(www, { recursive: true, force: true });
mkdirSync(www, { recursive: true });

// 1. App's own static assets (index.html, config.js, quiz.config.js, content/, assets/).
cpSync(appWwwroot, www, { recursive: true });

// 2. The shared engine, mounted where the app expects it (/_content/QuizEngine/).
cpSync(engineWwwroot, resolve(www, '_content', 'QuizEngine'), { recursive: true });

// 3. Point the bundled app at the deployed GameState API when provided.
const apiBase = process.env.API_BASE_ADDRESS;
if (apiBase) {
  const configPath = resolve(www, 'config.js');
  writeFileSync(configPath, `export const API_BASE_ADDRESS = '${apiBase.replace(/\/?$/, '/')}';\n`);
  console.log(`Set API_BASE_ADDRESS = ${apiBase}`);
} else {
  console.warn('WARNING: API_BASE_ADDRESS is not set — the bundled config.js keeps the localhost default. A packaged app MUST set it, or multiplayer will fail.');
}

// 4. Capacitor config for this app.
const capConfig = {
  appId: app.appId,
  appName: app.appName,
  webDir: 'www',
};
writeFileSync(resolve(here, 'capacitor.config.json'), JSON.stringify(capConfig, null, 2) + '\n');
console.log('Wrote capacitor.config.json');
console.log('Done.');
