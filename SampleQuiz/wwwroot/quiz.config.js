// quiz.config.js — Sample "Space Exploration" quiz for the QuizEngine.
// Demonstrates that a completely different topic, theme and asset set drives the
// same engine, with no engine code changes. English-only, no custom fonts/audio.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Space Race',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 5,
    valueSuffix: '',
    questions,

    // No translations supplied -> engine falls back to the English question text.
    infoProvider: { type: 'wikipedia' },

    theme: {
        // A dark "space" palette overriding the engine defaults.
        colors: {
            'color-yellow': '#3a506b',   // button background
            'color-brown': '#e0e6f0',    // button text / borders (light)
            'color-gold': '#5bc0be',     // hover background
            'color-beige': '#1c2541',    // pill background
            'color-mint': '#5bc0be',     // accents / hover rows
            'color-green': '#6fffe9',    // correct answer
            'color-card-bg': 'rgba(11, 19, 43, 0.78)',
            'color-black': '#0b132b',
        },
        // No custom fonts -> engine default system font.
        bodyFont: 'system-ui, sans-serif',
        titleFont: 'Georgia, serif',
        background: '', // solid colour from --color-black via the engine default page styles
    },

    // No sounds supplied -> audio is a graceful no-op.
    assets: { sounds: {} },

    credits: {
        dedication: 'A QuizEngine demo',
        rows: [
            { label: 'Engine', value: 'QuizEngine' },
            { label: 'Content', value: 'Space exploration milestones' },
        ],
    },
};
