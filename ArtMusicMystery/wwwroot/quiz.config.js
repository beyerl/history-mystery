// quiz.config.js — Art Music Mystery content for the QuizEngine.
// The audio variant: question boxes are unlabeled and a piece streams (hidden
// YouTube player) while the card is in play; composer/title/year are revealed
// once it is placed. Content is 300 landmark works of Western art (classical)
// music spanning the medieval era to the present day, ordered by year.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Art Music Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract + audio extras: { title, year, description, artist, videos[], genre{title,description} }.
    questions,

    // Audio variant: a hidden YouTube player streams the question's videos[] ids.
    // previewSeconds: how long each of the two opening reference pieces is played
    // (highlighted) before the board unlocks for the first guess.
    audio: { enabled: true, videoField: 'videos', previewSeconds: 10 },

    // "More" shows the era/form info carried on each question and a source link,
    // instead of a Wikipedia summary.
    infoProvider: { type: 'genre', sourceUrl: 'https://en.wikipedia.org/wiki/Classical_music', sourceName: 'Wikipedia' },

    // Override the engine's generic (history-flavoured) tutorial copy so it
    // describes this quiz: placing pieces on a timeline by ear, not historic
    // events. English and German are provided; other languages fall back to the
    // engine defaults.
    translations: {
        en: {
            'tutorial.welcome': "Welcome to {title}! Listen to each piece and place it on the timeline by the year it was composed.",
            'tutorial.topCard': "The card at the top plays a piece. The timeline below already holds works sorted by the year they were written.",
            'tutorial.dragCorrect': "Drag the playing piece onto the timeline where it belongs, guessing when it was composed by ear and comparing it with the works already placed.",
            'tutorial.dragRetry': "Not quite — a new piece is now playing at the top. Compare it with the timeline and try again.",
            'tutorial.dragWrong': "Mistakes are part of the game, though. This time, drop the piece somewhere it does NOT belong.",
            'tutorial.feedback': "A wrongly placed piece shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!",
            'tutorial.wikipedia': "Want to learn more about a piece? Tap the 'more' button on any card in the timeline to read about its era and form.",
            'tutorial.finished': "That's it — you're ready to play. Sit back and listen!",
        },
        de: {
            'tutorial.welcome': "Willkommen bei {title}! Höre dir jedes Stück an und ordne es nach seinem Entstehungsjahr auf der Zeitleiste ein.",
            'tutorial.topCard': "Die Karte oben spielt ein Stück ab. Die Zeitleiste darunter enthält bereits nach Entstehungsjahr sortierte Werke.",
            'tutorial.dragCorrect': "Ziehe das laufende Stück an die richtige Stelle auf der Zeitleiste, schätze sein Entstehungsjahr nach Gehör und vergleiche es mit den bereits platzierten Werken.",
            'tutorial.dragRetry': "Nicht ganz — oben läuft jetzt ein neues Stück. Vergleiche es mit der Zeitleiste und versuche es erneut.",
            'tutorial.dragWrong': "Fehler gehören aber zum Spiel. Lege das Stück diesmal an eine Stelle, an die es NICHT gehört.",
            'tutorial.feedback': "Ein falsch platziertes Stück wackelt, wird rot und zeigt sein richtiges Jahr — und bringt keinen Punkt. Richtige Platzierungen werden grün und bringen einen Punkt. Wer zuerst 10 Punkte erreicht, gewinnt!",
            'tutorial.wikipedia': "Möchtest du mehr über ein Stück erfahren? Tippe auf einer Karte in der Zeitleiste auf 'mehr', um etwas über seine Epoche und Form zu lesen.",
            'tutorial.finished': "Das war's — du bist bereit zu spielen. Lehn dich zurück und hör zu!",
        },
    },

    theme: {
        // A concert-hall palette: deep midnight blue with antique gold and ivory.
        colors: {
            'color-black': '#0e1422',                  // page background
            'color-card-bg': 'rgba(20, 26, 44, 0.85)', // deep blue cards/footer
            'color-card-text': '#f3ecd9',              // ivory card text
            'color-yellow': '#b08d4f',                 // button background (antique gold)
            'color-gold': '#d4af6a',                   // hover background (brighter gold)
            'color-brown': '#f3ecd9',                  // button + card text / borders (ivory)
            'color-beige': '#1a2236',                  // pill background (deep slate)
            'color-mint': '#6b7fa3',                   // accents / borders / hover rows (slate blue)
            'color-green': '#3f9d6b',                  // correct-answer flash
            'color-popover-bg': '#b08d4f',             // "correct year" popover
            'color-popover-text': '#15171c',
        },
        bodyFont: "system-ui, 'Segoe UI', sans-serif",
        titleFont: "'Playfair Display', Georgia, 'Times New Roman', serif",
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
            { label: 'Menu Music', value: 'Suno' },
            { label: 'Menu Art, Content, Programming', value: 'ChatGPT, Claude Code' },
        ],
    },
};
