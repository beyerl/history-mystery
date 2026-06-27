# Video Check — audio-quiz QA pages

Standalone QA pages for the **audio** quizzes (Metal, Art Music, Techno Mystery).
Each is a chronological timeline of every track in the quiz, with a dropdown of
that track's candidate YouTube clip ids and an inline player, so the video ids
in each quiz's `content/questions.js` can be confirmed by ear and the right clip
picked.

Migrated from the original GitLab project
[`lenzbeyer/metal-mystery-test`](https://gitlab.com/lenzbeyer/metal-mystery-test)
(issue #53), which deployed a single static `public/` page (`index.html` +
`data.js`) to GitLab Pages.

## How it's built

- [`video-check.template.html`](./video-check.template.html) — the migrated
  page, parameterized with `{{QUIZ_NAME}}`, `{{SOURCE_LABEL}}` and
  `{{FOOTER_HTML}}` tokens.
- [`../tools/build-tests.mjs`](../tools/build-tests.mjs) — for each audio quiz it
  fills the template and derives `data.js` **live** from the quiz's own
  `content/questions.js` (so the checker never drifts from the data it verifies),
  writing `dist/video-check/<quiz>/`. A landing page at `dist/video-check/`
  links the three.

```sh
node tools/build-tests.mjs            # -> dist/video-check/{metal,artmusic,techno}/
```

## Deployment

GitHub serves a single Pages site per repo, so these can't be deployed by an
independent workflow without fighting the quizzes' Pages deploy. They are built
as a separate step in [`.github/workflows/pages.yml`](../.github/workflows/pages.yml)
and published under `…/video-check/` alongside the quizzes.
