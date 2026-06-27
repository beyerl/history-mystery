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

## Catalogue pages (link tests)

[`catalogue.template.html`](./catalogue.template.html) is a second QA page,
migrated and generalized from
[`lenzbeyer/art-mystery-test`](https://gitlab.com/lenzbeyer/art-mystery-test)
(issues #58, #59). It fetches a quiz's question file **live from GitHub raw**,
renders every entry (artwork/screenshot for picture quizzes; title + description
for text quizzes), and offers a **"Check Wikipedia links"** button that verifies
each entry's `wiki_title` resolves to a real article.

[`../tools/build-catalogues.mjs`](../tools/build-catalogues.mjs) builds one per
quiz into `dist/catalogue/<quiz>/`:

- **Picture quizzes** (#58): Art, Game
- **Text quizzes** (#59, Wikipedia-link tests): History, Herstory, Literature

```sh
node tools/build-catalogues.mjs       # -> dist/catalogue/{art,game,history,herstory,literature}/
```

## Deployment

GitHub serves a single Pages site per repo, so these can't be deployed by an
independent workflow without fighting the quizzes' Pages deploy. They are built
as separate steps in [`.github/workflows/pages.yml`](../.github/workflows/pages.yml)
and published under `…/video-check/` and `…/catalogue/` alongside the quizzes.
