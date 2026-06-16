// quiz.config.js — Art Mystery content for the QuizEngine (picture variant).
// The unplaced card shows the artwork with a button to view it full screen and
// no caption; placed cards reveal year/artist/title and keep a thumbnail for
// reference. "More" links to Wikipedia. Localized in English and German.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Art Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract + picture extras: { title, year, description, artist, image, wiki_title }.
    questions,

    // Picture variant: image cards with a full-screen button instead of a caption.
    picture: { enabled: true },

    // Per-language question titles (English is the source; German supplied).
    loadQuestionTranslations: (lang) =>
        import(`./content/translations/${lang}.js`).then(m => m.events).catch(() => ({})),

    // "More" still opens the Wikipedia summary for the artwork.
    infoProvider: { type: 'wikipedia' },

    theme: {
        // Elegant "gallery at night" palette: charcoal, gold accents, light text.
        colors: {
            'color-black': '#1a1a1a',                  // page background
            'color-card-bg': 'rgba(28, 26, 24, 0.85)', // cards / footer
            'color-yellow': '#9b7d3f',                 // button background (gold)
            'color-gold': '#b8975a',                   // hover background (light gold)
            'color-brown': '#f2efe9',                  // button + card text / borders (light)
            'color-beige': '#2a2826',                  // pill background (dark)
            'color-mint': '#9b7d3f',                   // accents / borders / hover rows
            'color-green': '#5a8f5a',                  // correct-answer flash
            'color-popover-bg': '#9b7d3f',             // "correct year" popover
            'color-popover-text': '#1a1a1a',
        },
        bodyFont: "Georgia, 'Times New Roman', serif",
        titleFont: "Georgia, 'Times New Roman', serif",
        background: '/assets/menu-background.webp',
    },

    assets: { 
        sounds: {
            FAILURE: '/assets/sound/Failure.mp3',
            MENU: '/assets/sound/Menu-short.mp3',
            SUCCESS: '/assets/sound/Success.mp3',
            WIN: '/assets/sound/Win.mp3',
        },  
    },

    credits: {
        dedication: '',
        rows: [
            { label: 'Concept', value: 'Lorenz' },
            { label: 'Menu Music', value: '' },
            { label: 'Menu Art, Content, Programming', value: 'ChatGPT, Claude Code' },
        ],
    },
};
