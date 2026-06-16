// quiz.config.js — Herstory Mystery content for the QuizEngine.
// This is the single place that supplies topic-specific content; the engine
// (served at /_content/QuizEngine/) reads everything from here.

import { API_BASE_ADDRESS } from './config.js';
import { historicEvents } from './content/historic-events.js';

export const quizConfig = {
    title: 'Herstory Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract: { title, year (numeric sort value), description, wiki_title? }.
    // The historic events already match this shape.
    questions: historicEvents,

    // Per-language question translations, keyed by English title. Loaded lazily.
    loadQuestionTranslations: (lang) =>
        import(`./content/event-translations/${lang}.js`).then(m => m.events).catch(() => ({})),

    // Built-in Wikipedia "more info" provider; set to null to hide the info button.
    infoProvider: { type: 'wikipedia' },

    theme: {
        colors: {
            'color-gold': '#997229',
            'color-mint': '#B1CBC5',
            'color-yellow': '#F1C064',
            'color-brown': '#7A4918',
            'color-beige': '#D6D8B1',
            'color-gray-100': '#f8f9fa',
            'color-gray-200': '#e9ecef',
            'color-gray-300': '#dee2e6',
            'color-gray-400': '#ced4da',
            'color-gray-500': '#adb5bd',
            'color-gray-600': '#6c757d',
            'color-gray-700': '#495057',
            'color-gray-800': '#343a40',
            'color-gray-900': '#212529',
            'color-gray-1000': '#000000',
            'color-green': '#4CAF50',
            'color-white': '#fff',
            'color-black': '#000',
            'color-modal-bg': '#fff',
            'color-modal-overlay': 'rgba(0, 0, 0, 0.5)',
            'color-modal-shadow': '0 2px 10px rgba(0, 0, 0, 0.1)',
            'color-modal-close': '#e53935',
            'color-toast-bg': '#212529',
            'color-toast-text': '#fff',
            'color-popover-bg': '#e86a3c',
            'color-popover-text': '#fff',
            'color-table-border': '#000',
        },
        fonts: [
            { family: 'Comfortaa', url: '/assets/fonts/Comfortaa-Regular.ttf', weight: 400 },
            { family: 'CrimsonPro', url: '/assets/fonts/CrimsonPro-Bold.ttf', weight: 700 },
        ],
        bodyFont: "'Comfortaa', cursive",
        titleFont: "'CrimsonPro', Times",
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
        dedication: 'Dedicated to Sonja',
        rows: [
            { label: 'Concept, Programming, Music Production', value: 'Lorenz' },
            { label: 'Menu Music', value: 'John Dowland - The Frog Galliard' },
            { label: 'Menu Art, Content, Programming', value: 'ChatGPT 4o & 4.1, Copilot, Claude Code' },
        ],
    },
};
