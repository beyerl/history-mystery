// quiz.config.js — Literature Mystery content for the QuizEngine.
// A text-only quiz modelled on Herstory Mystery: place 300 definitive literary
// works on the timeline by the year they were written/published. No pictures
// yet (#57). "More" opens each work's Wikipedia article. Sounds are reused from
// Herstory Mystery.

import { API_BASE_ADDRESS } from './config.js';
import { works } from './content/works.js';

export const quizConfig = {
    title: 'Literature Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract: { title, year (numeric sort value), description, wiki_title }.
    questions: works,

    // Built-in Wikipedia "more info" provider.
    infoProvider: { type: 'wikipedia' },

    // Override the engine's generic (history-flavoured) tutorial copy so it
    // describes this quiz: placing literary works on a timeline by the year they
    // were written or first published. English and German provided; other
    // languages fall back to the engine defaults.
    translations: {
        en: {
            'tutorial.welcome': "Welcome to {title}! Read each literary work and place it on the timeline by the year it was written or first published.",
            'tutorial.topCard': "The card at the top names a work. The timeline below already holds works sorted by year.",
            'tutorial.dragCorrect': "Drag the work onto the timeline where it belongs, guessing its year and comparing it with the works already placed.",
            'tutorial.dragRetry': "Not quite — a new work is now shown at the top. Compare it with the timeline and try again.",
            'tutorial.dragWrong': "Mistakes are part of the game, though. This time, drop the work somewhere it does NOT belong.",
            'tutorial.feedback': "A wrongly placed work shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!",
            'tutorial.wikipedia': "Want to learn more about a work? Tap the 'more' button on any card in the timeline to open its Wikipedia article.",
            'tutorial.finished': "That's it — you're ready to play. Press start and have fun!",
        },
        de: {
            'tutorial.welcome': "Willkommen bei {title}! Sieh dir jedes literarische Werk an und ordne es nach dem Jahr ein, in dem es geschrieben oder erstmals veröffentlicht wurde.",
            'tutorial.topCard': "Die Karte oben nennt ein Werk. Die Zeitleiste darunter enthält bereits nach Jahr sortierte Werke.",
            'tutorial.dragCorrect': "Ziehe das Werk an die richtige Stelle auf der Zeitleiste, schätze sein Jahr und vergleiche es mit den bereits platzierten Werken.",
            'tutorial.dragRetry': "Nicht ganz — oben wird jetzt ein neues Werk gezeigt. Vergleiche es mit der Zeitleiste und versuche es erneut.",
            'tutorial.dragWrong': "Fehler gehören aber zum Spiel. Lege das Werk diesmal an eine Stelle, an die es NICHT gehört.",
            'tutorial.feedback': "Ein falsch platziertes Werk wackelt, wird rot und zeigt sein richtiges Jahr — und bringt keinen Punkt. Richtige Platzierungen werden grün und bringen einen Punkt. Wer zuerst 10 Punkte erreicht, gewinnt!",
            'tutorial.wikipedia': "Möchtest du mehr über ein Werk erfahren? Tippe auf einer Karte in der Zeitleiste auf 'mehr', um den Wikipedia-Artikel zu öffnen.",
            'tutorial.finished': "Das war's — du bist bereit zu spielen. Drücke auf Start und viel Spaß!",
        },
    },

    theme: {
        // "Old library" palette: parchment, ink and a deep burgundy accent.
        colors: {
            'color-gold': '#7b3f2f',                   // primary accent (burgundy/oxblood)
            'color-mint': '#9c6b4a',                   // secondary accent (leather brown)
            'color-yellow': '#7b3f2f',                 // button background
            'color-brown': '#3a2c1b',                  // dark text on light cards
            'color-beige': '#efe6d2',                  // pill / parchment background
            'color-green': '#4CAF50',
            'color-white': '#fbf6ea',
            'color-black': '#211a12',
            'color-modal-bg': '#fbf6ea',
            'color-modal-overlay': 'rgba(20, 14, 8, 0.55)',
            'color-modal-shadow': '0 2px 10px rgba(0, 0, 0, 0.2)',
            'color-modal-close': '#7b3f2f',
            'color-toast-bg': '#3a2c1b',
            'color-toast-text': '#fbf6ea',
            'color-popover-bg': '#7b3f2f',
            'color-popover-text': '#fbf6ea',
            'color-table-border': '#3a2c1b',
        },
        fonts: [
            { family: 'Comfortaa', url: '/assets/fonts/Comfortaa-Regular.ttf', weight: 400 },
            { family: 'CrimsonPro', url: '/assets/fonts/CrimsonPro-Bold.ttf', weight: 700 },
        ],
        bodyFont: "'Comfortaa', cursive",
        titleFont: "'CrimsonPro', Georgia, 'Times New Roman', serif",
        favicon: '/assets/favicon.ico',
        background: '/assets/menu-background.webp',
    },

    assets: {
        // Sounds reused from Herstory Mystery (#57).
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
