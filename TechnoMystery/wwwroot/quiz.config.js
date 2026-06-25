// quiz.config.js — Techno Mystery content for the QuizEngine.
// The audio variant: question boxes are unlabeled and a track streams (hidden
// YouTube player) while the card is in play; artist/title/year are revealed once
// it is placed. Content is 300 definitive techno tracks spanning the genre's
// roots to today, ordered by release year.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Techno Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract + audio extras: { title, year, description, artist, videos[], genre{title,description} }.
    questions,

    // Audio variant: a hidden YouTube player streams the question's videos[] ids.
    // previewSeconds: how long each of the two opening reference tracks is played
    // (highlighted) before the board unlocks for the first guess.
    audio: { enabled: true, videoField: 'videos', previewSeconds: 10 },

    // "More" shows the subgenre info carried on each question and a source link,
    // instead of a Wikipedia summary.
    infoProvider: { type: 'genre', sourceUrl: 'https://music.ishkur.com', sourceName: "Ishkur's Guide to Electronic Music" },

    // Override the engine's generic (history-flavoured) tutorial copy so it
    // describes this quiz: placing tracks on a timeline by ear, not historic
    // events. English and German are provided; other languages fall back to the
    // engine defaults.
    translations: {
        en: {
            'tutorial.welcome': "Welcome to {title}! Listen to each track and place it on the timeline by the year it was released.",
            'tutorial.topCard': "The card at the top plays a track. The timeline below already holds tracks sorted by release year.",
            'tutorial.dragCorrect': "Drag the playing track onto the timeline where it belongs, guessing its release year by ear and comparing it with the tracks already placed.",
            'tutorial.dragRetry': "Not quite — a new track is now playing at the top. Compare it with the timeline and try again.",
            'tutorial.dragWrong': "Mistakes are part of the game, though. This time, drop the track somewhere it does NOT belong.",
            'tutorial.feedback': "A wrongly placed track shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!",
            'tutorial.wikipedia': "Want to learn more about a track? Tap the 'more' button on any card in the timeline to read about its techno subgenre.",
            'tutorial.finished': "That's it — you're ready to play. Turn it up and lose yourself!",
        },
        de: {
            'tutorial.welcome': "Willkommen bei {title}! Höre dir jeden Track an und ordne ihn nach seinem Erscheinungsjahr auf der Zeitleiste ein.",
            'tutorial.topCard': "Die Karte oben spielt einen Track ab. Die Zeitleiste darunter enthält bereits nach Erscheinungsjahr sortierte Tracks.",
            'tutorial.dragCorrect': "Ziehe den laufenden Track an die richtige Stelle auf der Zeitleiste, schätze sein Erscheinungsjahr nach Gehör und vergleiche es mit den bereits platzierten Tracks.",
            'tutorial.dragRetry': "Nicht ganz — oben läuft jetzt ein neuer Track. Vergleiche ihn mit der Zeitleiste und versuche es erneut.",
            'tutorial.dragWrong': "Fehler gehören aber zum Spiel. Lege den Track diesmal an eine Stelle, an die er NICHT gehört.",
            'tutorial.feedback': "Ein falsch platzierter Track wackelt, wird rot und zeigt sein richtiges Jahr — und bringt keinen Punkt. Richtige Platzierungen werden grün und bringen einen Punkt. Wer zuerst 10 Punkte erreicht, gewinnt!",
            'tutorial.wikipedia': "Möchtest du mehr über einen Track erfahren? Tippe auf einer Karte in der Zeitleiste auf 'mehr', um etwas über sein Techno-Subgenre zu lesen.",
            'tutorial.finished': "Das war's — du bist bereit zu spielen. Dreh auf und verlier dich im Beat!",
        },
    },

    theme: {
        // A dark warehouse-rave palette: near-black with neon cyan and magenta.
        colors: {
            'color-black': '#050507',                  // page background
            'color-card-bg': 'rgba(10, 12, 20, 0.85)', // near-black cards/footer
            'color-card-text': '#eafdff',              // cool white card text
            'color-yellow': '#12b5b0',                 // button background (teal)
            'color-gold': '#21e6dd',                   // hover background (bright cyan)
            'color-brown': '#eafdff',                  // button + card text / borders (cool white)
            'color-beige': '#10131c',                  // pill background (deep blue-black)
            'color-mint': '#ff2bd6',                    // accents / borders / hover rows (magenta)
            'color-green': '#00e676',                  // correct-answer flash
            'color-popover-bg': '#ff2bd6',             // "correct year" popover (magenta)
            'color-popover-text': '#07070a',
        },
        bodyFont: "system-ui, 'Segoe UI', sans-serif",
        titleFont: "'Bahnschrift', 'Eurostile', 'Segoe UI', system-ui, sans-serif",
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
