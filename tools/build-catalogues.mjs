// build-catalogues.mjs — builds the "Catalogue" QA pages (#58, #59), migrated and
// generalized from gitlab.com/lenzbeyer/art-mystery-test.
//
//   node tools/build-catalogues.mjs [outDir]        (defaults to dist/catalogue)
//
// Each catalogue is a single static page (the shared template) that fetches its
// quiz's question file LIVE from GitHub raw, so it never goes stale, and offers
// a "Check Wikipedia links" button that verifies every entry's wiki_title. Used
// for the picture quizzes (art, game) and the text quizzes whose links we want
// to test (history, herstory, literature). A landing page links them all.
//
// Like the video-check pages, these can't be deployed by an independent workflow
// (a repo has a single GitHub Pages site), so they're built as a separate step
// in .github/workflows/pages.yml and published under /catalogue/<quiz>/.

import { mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..');
const RAW = 'https://raw.githubusercontent.com/beyerl/history-mystery/refs/heads/main';

// Quizzes that get a catalogue. `file` is the content path on main.
// Picture quizzes (#58) show the artwork/screenshot; text quizzes (#59) show the
// entry + description. All offer the live Wikipedia link checker.
const QUIZZES = [
  { key: 'art',        name: 'Art Mystery',        file: 'ArtMystery/wwwroot/content/questions.js' },
  { key: 'game',       name: 'Game Mystery',       file: 'GameMystery/wwwroot/content/questions.js' },
  { key: 'history',    name: 'History Mystery',    file: 'HistoryMystery/wwwroot/content/questions.js' },
  { key: 'herstory',   name: 'Herstory Mystery',   file: 'HerstoryMystery/wwwroot/content/historic-events.js' },
  { key: 'literature', name: 'Literature Mystery', file: 'LiteratureMystery/wwwroot/content/works.js' },
];

const out = resolve(repoRoot, process.argv[2] ?? resolve('dist', 'catalogue'));
const template = readFileSync(resolve(repoRoot, 'tests', 'catalogue.template.html'), 'utf8');

const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

for (const q of QUIZZES) {
  const html = template
    .split('{{QUIZ_NAME}}').join(escapeHtml(q.name))
    .split('{{DATA_URL}}').join(`${RAW}/${q.file}`)
    .split('{{DATA_LABEL}}').join(`beyerl/history-mystery — ${q.file}`);
  const dir = resolve(out, q.key);
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, 'index.html'), html);
  console.log(`Built ${q.name} catalogue -> ${dir}`);
}

const cards = QUIZZES.map(q => `      <li><a href="./${q.key}/">${escapeHtml(q.name)} — Catalogue →</a></li>`).join('\n');
const index = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Catalogues — Mystery Quizzes</title>
<style>
  body{margin:0;min-height:100vh;background:#EFEAE0;color:#2A2521;
    font-family:system-ui,"Segoe UI",sans-serif;display:flex;flex-direction:column;
    align-items:center;justify-content:center;padding:48px 20px;}
  h1{font-size:clamp(28px,6vw,44px);margin:0 0 6px;}
  p{color:#8A8275;margin:0 0 28px;text-align:center;max-width:48ch;line-height:1.5;}
  ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:14px;width:100%;max-width:440px;}
  a{display:block;padding:16px 20px;border:1px solid #D8CFC0;border-radius:8px;
    background:#fff;color:#9C7A3C;text-decoration:none;font-size:18px;transition:border-color .15s;}
  a:hover{border-color:#9C7A3C;}
</style>
</head>
<body>
  <h1>Catalogues</h1>
  <p>QA views of each quiz's question set — browse every entry and verify its Wikipedia links.</p>
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
