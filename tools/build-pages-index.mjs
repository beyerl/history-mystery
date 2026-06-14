// build-pages-index.mjs — writes a minimal landing page at <distDir>/index.html
// linking to each frontend deployed under its own sub-folder. This is just a
// fallback so the Pages site root is not empty; the production landing is the
// standalone MysteryQuizzes overview project (issue #12), served on the main
// domain with quizzes on subdomains.
//
//   node tools/build-pages-index.mjs <distDir>

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const distDir = resolve(repoRoot, process.argv[2] ?? 'dist');

const apps = JSON.parse(readFileSync(resolve(repoRoot, 'mobile', 'apps.json'), 'utf8'));
const links = apps
  .map(a => `      <li><a href="./${a.key}/">${a.appName}</a></li>`)
  .join('\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mystery Quizzes</title>
  <style>
    body { font-family: system-ui, sans-serif; background:#111; color:#eee; display:flex; min-height:100vh; margin:0; align-items:center; justify-content:center; }
    .card { text-align:center; }
    h1 { font-weight:300; letter-spacing:2px; }
    ul { list-style:none; padding:0; }
    li { margin:12px 0; }
    a { color:#9b7d3f; font-size:1.3rem; text-decoration:none; }
    a:hover { text-decoration:underline; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Mystery Quizzes</h1>
    <ul>
${links}
    </ul>
  </div>
</body>
</html>
`;

writeFileSync(resolve(distDir, 'index.html'), html);
console.log(`Wrote ${resolve(distDir, 'index.html')}`);
