// build-tests.mjs — builds the "Video Check" QA pages for the audio quizzes
// (migrated from gitlab.com/lenzbeyer/metal-mystery-test, #53) and deploys them
// to GitHub Pages alongside the quizzes.
//
//   node tools/build-tests.mjs [outDir]            (defaults to dist/video-check)
//
// For each audio quiz it generates a self-contained static page from the shared
// template (tests/video-check.template.html) plus a data.js derived live from
// the quiz's own content/questions.js — so the QA tool that verifies the video
// ids never drifts from the data it checks. A small index links the three.
//
// Note on "separate pipeline" (#53): a GitHub repo serves a single Pages site,
// so these can't be deployed by an independent workflow without fighting the
// quizzes' Pages deployment. They are instead built here as a separate, grouped
// section of the site under /video-check/<quiz>/ and uploaded with the same
// Pages artifact (see .github/workflows/pages.yml).

import { existsSync, mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');

// Audio quizzes whose questions carry videos[] + genre{title,description}.
const QUIZZES = [
  { key: 'metal',    dir: 'MetalMystery',     name: 'Metal Mystery',     sourceLabel: 'MAP OF METAL',
    footer: 'Data: <a href="https://github.com/beyerl/history-mystery" target="_blank" rel="noopener">beyerl/history-mystery</a>, derived from the open-source <a href="https://github.com/patrickgalbraith/mapofmetal" target="_blank" rel="noopener">Map of Metal</a> dataset (CC BY-SA 4.0).' },
  { key: 'artmusic', dir: 'ArtMusicMystery',  name: 'Art Music Mystery', sourceLabel: 'ART MUSIC MYSTERY',
    footer: 'Data: <a href="https://github.com/beyerl/history-mystery" target="_blank" rel="noopener">beyerl/history-mystery</a> — a timeline of art (classical) music.' },
  { key: 'techno',   dir: 'TechnoMystery',    name: 'Techno Mystery',    sourceLabel: 'TECHNO MYSTERY',
    footer: 'Data: <a href="https://github.com/beyerl/history-mystery" target="_blank" rel="noopener">beyerl/history-mystery</a> — a timeline of techno.' },
];

const out = resolve(repoRoot, process.argv[2] ?? resolve('dist', 'video-check'));
const template = readFileSync(resolve(repoRoot, 'tests', 'video-check.template.html'), 'utf8');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

for (const q of QUIZZES) {
  const qpath = resolve(repoRoot, q.dir, 'wwwroot', 'content', 'questions.js');
  if (!existsSync(qpath)) { console.error(`SKIP ${q.key}: ${qpath} not found`); continue; }

  // Turn the quiz's ES module (`export const questions = [...]`) into a plain
  // script global the page can read via a <script src="data.js"> tag.
  const src = readFileSync(qpath, 'utf8');
  const dataJs = src.replace(/export\s+const\s+questions\s*=/, 'const questions =');

  const html = template
    .split('{{QUIZ_NAME}}').join(escapeHtml(q.name))
    .split('{{SOURCE_LABEL}}').join(q.sourceLabel)
    .split('{{FOOTER_HTML}}').join(q.footer);

  const dir = resolve(out, q.key);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html);
  writeFileSync(resolve(dir, 'data.js'), dataJs);
  console.log(`Built ${q.name} video-check -> ${dir}`);
}

// Simple landing page linking the three test pages.
const cards = QUIZZES.map(q => `      <li><a href="./${q.key}/">${escapeHtml(q.name)} — Video Check →</a></li>`).join('\n');
const index = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Video Check — Mystery Quizzes</title>
<style>
  body{margin:0;min-height:100vh;background:#0a0a0b;color:#ece6da;
    font-family:system-ui,"Segoe UI",sans-serif;display:flex;flex-direction:column;
    align-items:center;justify-content:center;padding:48px 20px;}
  h1{font-size:clamp(28px,6vw,44px);margin:0 0 6px;letter-spacing:0.02em;}
  p{color:#b9b2a4;margin:0 0 28px;text-align:center;max-width:46ch;line-height:1.5;}
  ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:420px;}
  a{display:block;padding:16px 20px;border:1px solid #272524;border-radius:6px;
    background:#131314;color:#d8432f;text-decoration:none;font-size:18px;transition:border-color .15s;}
  a:hover{border-color:#a98a4a;}
</style>
</head>
<body>
  <h1>Video Check</h1>
  <p>QA pages for the audio quizzes — confirm each track's YouTube clips play and match.</p>
  <main>
    <ul>
${cards}
    </ul>
  </main>
</body>
</html>
`;
writeFileSync(resolve(out, 'index.html'), index);
console.log(`Wrote landing page -> ${resolve(out, 'index.html')}`);
console.log('Done.');
