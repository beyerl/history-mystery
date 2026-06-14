// build-web.mjs — produces a self-contained static export of one quiz frontend
// for deployment to GitHub Pages (or any static host / subdomain).
//
//   node tools/build-web.mjs <appKey> [outDir]
//
// Like the mobile assemble step it combines the app's wwwroot with the shared
// QuizEngine assets (mounted at _content/QuizEngine/). It additionally rewrites
// the few absolute ("/...") references to relative ("./...") so the site works
// both under a GitHub Pages sub-path (user.github.io/repo/<app>/) and at a
// subdomain root. Set API_BASE_ADDRESS to point the build at the deployed API.

import { existsSync, mkdirSync, rmSync, cpSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');

const appKey = process.argv[2];
const outArg = process.argv[3];
if (!appKey) {
  console.error('Usage: node tools/build-web.mjs <appKey> [outDir]  (see mobile/apps.json)');
  process.exit(1);
}

const apps = JSON.parse(readFileSync(resolve(repoRoot, 'mobile', 'apps.json'), 'utf8'));
const app = apps.find(a => a.key === appKey);
if (!app) {
  console.error(`Unknown app "${appKey}". Known: ${apps.map(a => a.key).join(', ')}`);
  process.exit(1);
}

const out = resolve(repoRoot, outArg ?? resolve('dist', appKey));
const appWwwroot = resolve(repoRoot, app.dir, 'wwwroot');
const engineWwwroot = resolve(repoRoot, 'QuizEngine', 'wwwroot');

console.log(`Building "${app.appName}" -> ${out}`);
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(appWwwroot, out, { recursive: true });
cpSync(engineWwwroot, resolve(out, '_content', 'QuizEngine'), { recursive: true });

// Make the absolute asset/engine references relative so the site is base-path
// independent. The engine's own module imports are already relative.
function relativize(file) {
  if (!existsSync(file)) return;
  let s = readFileSync(file, 'utf8');
  for (const p of ['_content/', 'assets/', 'config.js']) {
    s = s.split(`"/${p}`).join(`"./${p}`).split(`'/${p}`).join(`'./${p}`);
  }
  writeFileSync(file, s);
}
relativize(resolve(out, 'index.html'));
relativize(resolve(out, 'quiz.config.js'));

// Point the build at the deployed GameState API when provided.
const apiBase = process.env.API_BASE_ADDRESS;
if (apiBase) {
  writeFileSync(resolve(out, 'config.js'), `export const API_BASE_ADDRESS = '${apiBase.replace(/\/?$/, '/')}';\n`);
  console.log(`Set API_BASE_ADDRESS = ${apiBase}`);
} else {
  console.warn('WARNING: API_BASE_ADDRESS is not set — keeping the source default in config.js (localhost). A deployed build MUST set it, or multiplayer will fail with a cross-origin error.');
}

console.log('Done.');
