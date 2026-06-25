// links.js — the quizzes listed on the overview page, where they live, and the
// look that matches each one. Kept separate from the page so deployment can
// rewrite the URLs (e.g. to per-quiz subdomains) without touching the markup —
// the same pattern the quiz apps use for config.js. Defaults are relative
// sub-paths so the overview works when the quizzes are published alongside it
// (e.g. GitHub Pages sub-folders).
//
// Each entry also carries its pixel-art app icon and a small theme lifted from
// the quiz's own quiz.config.js, so every card on the overview reads in that
// quiz's vibe. `theme` fields: accent (primary), accent2 (secondary glow),
// top/bottom (card background gradient stops), titleFont.
export const quizzes = [
    {
        name: 'History Mystery',
        tagline: 'Order 300 events from across all of human history.',
        url: './history/',
        icon: './assets/history.png',
        theme: {
            accent: '#d8b367',
            accent2: '#8a6d3b',
            top: '#3a2c1b',
            bottom: '#211810',
            titleFont: "Georgia, 'Times New Roman', serif",
        },
    },
    {
        name: 'Herstory Mystery',
        tagline: 'Place the women who shaped history on the timeline.',
        url: './herstory/',
        icon: './assets/herstory.png',
        theme: {
            accent: '#f0a868',
            accent2: '#b1cbc5',
            top: '#3c2c1d',
            bottom: '#241a12',
            titleFont: "Georgia, 'Times New Roman', serif",
        },
    },
    {
        name: 'Metal Mystery',
        tagline: 'Hear a track and guess where it falls in metal history.',
        url: './metal/',
        icon: './assets/metal.png',
        theme: {
            accent: '#ff3b3b',
            accent2: '#8b0000',
            top: '#240808',
            bottom: '#0c0404',
            titleFont: "'Impact', 'Haettenschweiler', system-ui, sans-serif",
        },
    },
    {
        name: 'Art Mystery',
        tagline: 'Date 200 masterpieces from across art history.',
        url: './art/',
        icon: './assets/art.png',
        theme: {
            accent: '#c5a463',
            accent2: '#9b7d3f',
            top: '#26222a',
            bottom: '#151318',
            titleFont: "Georgia, 'Times New Roman', serif",
        },
    },
    {
        name: 'Art Music Mystery',
        tagline: 'Hear a piece and place it on the timeline of classical music.',
        url: './artmusic/',
        icon: './assets/artmusic.png',
        theme: {
            accent: '#d4af6a',
            accent2: '#6b7fa3',
            top: '#1a2236',
            bottom: '#0e1422',
            titleFont: "'Playfair Display', Georgia, 'Times New Roman', serif",
        },
    },
];
