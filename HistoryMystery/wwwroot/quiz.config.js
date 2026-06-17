// quiz.config.js — History Mystery content for the QuizEngine.
// A general world-history timeline quiz: 300 events spanning all of human
// history, from prehistory (negative years = BCE) to the present day. This is
// the single place that supplies topic-specific content; the engine (served at
// /_content/QuizEngine/) reads everything from here.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'History Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract: { title, year (numeric sort value; negative = BCE),
    // description, wiki_title? }.
    questions,

    // English-only content; the engine falls back to the English question text
    // when no per-language translations are supplied.

    // Built-in Wikipedia "more info" provider; set to null to hide the info button.
    infoProvider: { type: 'wikipedia' },

    theme: {
        // A warm sepia / parchment palette, distinct from the other quizzes.
        // Light accent surfaces paired with dark text (--color-brown), matching
        // the engine's foreground conventions.
        colors: {
            'color-yellow': '#c9a25e',   // button background (aged gold)
            'color-gold': '#8a6d3b',     // hover background (darker gold)
            'color-mint': '#cdd6c2',     // accents / hover rows (sage)
            'color-beige': '#e7dcc3',    // pill background (parchment)
            'color-brown': '#4a3b28',    // button + card/pill text (dark sepia)
            'color-green': '#4CAF50',    // correct-answer flash
            'color-card-bg': 'rgba(43, 33, 23, 0.72)',
            'color-card-text': '#f3ead6',
            'color-black': '#2b2117',    // page background
            'color-popover-bg': '#8a6d3b',
            'color-popover-text': '#fff',
        },
        bodyFont: "system-ui, 'Segoe UI', sans-serif",
        titleFont: "Georgia, 'Times New Roman', serif",
        favicon: '/assets/favicon.ico',
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
            { label: 'Content, Programming', value: 'Claude Code' },
        ],
    },
};
