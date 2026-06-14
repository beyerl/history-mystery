// quiz.config.js — Metal Mystery content for the QuizEngine.
// Demonstrates the audio variant: question boxes are unlabeled and a song
// streams (hidden YouTube player) while the card is in play; artist/title/year
// are revealed once it is placed. Content comes from the open-source Map of
// Metal dataset.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Metal Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract + audio extras: { title, year, description, artist, videos[], genre{title,description} }.
    questions,

    // Audio variant: a hidden YouTube player streams the question's videos[] ids.
    audio: { enabled: true, videoField: 'videos' },

    // "More" shows the genre info carried on each question (Map of Metal) and a
    // source/attribution link, instead of a Wikipedia summary.
    infoProvider: { type: 'genre', sourceUrl: 'https://mapofmetal.com', sourceName: 'Map of Metal' },

    theme: {
        // Black / red / white metal palette over the engine defaults.
        colors: {
            'color-black': '#0a0a0a',                  // page background
            'color-card-bg': 'rgba(25, 5, 5, 0.85)',   // dark blood-red cards/footer
            'color-yellow': '#b30000',                 // button background (red)
            'color-gold': '#ff2a2a',                   // hover background (bright red)
            'color-brown': '#ffffff',                  // button + card text / borders (white)
            'color-beige': '#1c1c1c',                  // pill background (near-black)
            'color-mint': '#8b0000',                   // accents / borders / hover rows
            'color-green': '#2e7d32',                  // correct-answer flash
            'color-popover-bg': '#cc0000',             // "correct year" popover
            'color-popover-text': '#ffffff',
        },
        bodyFont: "system-ui, 'Segoe UI', sans-serif",
        titleFont: "'Impact', 'Haettenschweiler', system-ui, sans-serif",
        background: '', // solid near-black from --color-black
    },

    // No bundled sound effects; the streamed song is the audio.
    assets: { sounds: {} },

    credits: {
        dedication: 'For everyone who headbangs',
        rows: [
            { label: 'Engine', value: 'QuizEngine' },
            { label: 'Content & genre info', value: 'Map of Metal (CC BY-SA 4.0)' },
            { label: 'Data source', value: 'github.com/patrickgalbraith/mapofmetal' },
        ],
    },
};
