# QuizEngine

A content-agnostic "sort the cards along a timeline" quiz engine, shipped as a
.NET Razor Class Library that exposes static **ES module** assets. A consuming
web app references this project and supplies all topic-specific content through a
single `quiz.config.js`. The engine contains no questions, themes, or assets of
its own.

The engine's static files are served to the consuming app under
`/_content/QuizEngine/...` (standard RCL static web assets).

## Using the engine in a new quiz app

1. Create an ASP.NET `Microsoft.NET.Sdk.Web` project and reference this library:

   ```xml
   <ProjectReference Include="..\QuizEngine\QuizEngine.csproj" />
   ```

2. Add a `wwwroot/index.html` that bootstraps the engine with your config:

   ```html
   <link rel="stylesheet" href="/_content/QuizEngine/styles.css">
   ...
   <mute-button></mute-button>
   <div class="container"><router-view style="flex-grow:1;"></router-view></div>
   <script type="module">
     import { startQuizApp } from '/_content/QuizEngine/main.js';
     import { quizConfig } from './quiz.config.js';
     startQuizApp(quizConfig);
   </script>
   ```

3. Add a `wwwroot/quiz.config.js`, a `wwwroot/content/` folder (questions and
   optional per-language translations) and a `wwwroot/assets/` folder (favicon,
   background, fonts, sounds). No engine code is touched.

See `../HerstoryMystery` (full-featured) and `../MetalMystery` (audio variant)
for working examples.

## Config schema (`quiz.config.js`)

```js
export const quizConfig = {
  title: 'My Quiz',                 // app/brand title (shown on the menu, page title)
  apiBaseAddress: 'https://.../',   // GameState API base URL (multiplayer)
  maxScore: 10,                     // points needed to win
  valueSuffix: '',                  // appended after the numeric value on cards, e.g. ' m'

  // Questions. Contract: { title, year, description, wiki_title? }
  //   title       – item label (also the translation key)
  //   year        – numeric value the items are sorted by
  //   description – shown in the info modal
  //   wiki_title  – optional reference passed to the info provider
  questions: [ /* ... at least 5 ... */ ],

  // Optional. Per-language question translations keyed by English title:
  //   (lang) => Promise<{ [title]: { title, description } }>
  loadQuestionTranslations: (lang) =>
    import(`./content/translations/${lang}.js`).then(m => m.events).catch(() => ({})),

  // Optional "more info" provider. { type: 'wikipedia' } | null (hides the button).
  infoProvider: { type: 'wikipedia' },

  theme: {
    colors: { 'color-yellow': '#...', 'color-card-bg': '#...', /* any --color-* */ },
    fonts: [ { family: 'X', url: '/assets/fonts/x.ttf', weight: 400 } ], // optional
    bodyFont: "'X', sans-serif",     // optional, sets --font-body
    titleFont: "'Y', serif",         // optional, sets --font-title
    favicon: '/assets/favicon.ico',  // optional
    background: '/assets/bg.webp',   // optional page background image
  },

  assets: { sounds: { FAILURE: '/assets/...', MENU: '...', SUCCESS: '...', WIN: '...' } }, // each optional

  credits: {                          // shown on the Credits page
    dedication: 'For ...',
    rows: [ { label: 'Role', value: 'Name' } ],
  },
};
```

### Theming

`startQuizApp` applies `theme.colors` as `--color-*` CSS custom properties on
`:root`, injects `@font-face` rules from `theme.fonts`, sets `--font-body` /
`--font-title`, the favicon and the page background. The engine ships sensible
default colours in `styles.css`; anything a consumer omits falls back to those.

### UI strings vs. content

Engine **UI strings** (buttons, tutorial copy, etc.) live in
`i18n/translations.js` and are translated into 45 languages. **Question** text is
content and comes from `questions` + `loadQuestionTranslations`. The tutorial copy
interpolates `{title}` from the config so it is never quiz-specific.

## Maintaining content

- **Add/edit questions**: edit your app's `content/` files only.
- **Translate questions**: add a `content/<lang>.js` exporting `events` keyed by
  English title; wire it through `loadQuestionTranslations`.
- **Re-theme / re-brand**: edit `quiz.config.js` `theme`, `title`, `credits` and
  the files under `assets/`.
- **Engine changes** (new mechanics, fixes, more UI languages) live here and are
  inherited by every consumer on rebuild.
