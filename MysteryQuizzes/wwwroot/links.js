// links.js — the quizzes listed on the overview page and where they live.
// Kept separate from the page so deployment can rewrite the URLs (e.g. to
// per-quiz subdomains) without touching the markup — the same pattern the quiz
// apps use for config.js. Defaults are relative sub-paths so the overview works
// when the quizzes are published alongside it (e.g. GitHub Pages sub-folders).
export const quizzes = [
    {
        name: 'History Mystery',
        tagline: 'Order 300 events from across all of human history.',
        url: './history/',
    },
    {
        name: 'Herstory Mystery',
        tagline: 'Place the women who shaped history on the timeline.',
        url: './herstory/',
    },
    {
        name: 'Metal Mystery',
        tagline: 'Hear a track and guess where it falls in metal history.',
        url: './metal/',
    },
    {
        name: 'Art Mystery',
        tagline: 'Date 200 masterpieces from across art history.',
        url: './art/',
    },
];
