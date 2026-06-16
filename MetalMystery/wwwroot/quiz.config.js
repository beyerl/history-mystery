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
    // previewSeconds: how long each of the two opening reference songs is played
    // (highlighted) before the board unlocks for the first guess.
    audio: { enabled: true, videoField: 'videos', previewSeconds: 10 },

    // "More" shows the genre info carried on each question (Map of Metal) and a
    // source/attribution link, instead of a Wikipedia summary.
    infoProvider: { type: 'genre', sourceUrl: 'https://mapofmetal.com', sourceName: 'Map of Metal' },

    // Override the engine's generic (history-flavoured) tutorial copy so it
    // describes this quiz: placing songs on a timeline by ear, not historic
    // events. English and German are provided; other languages fall back to the
    // engine defaults.
    translations: {
        en: {
            'tutorial.welcome': "Welcome to {title}! Listen to each track and place it on the timeline by the year it was released.",
            'tutorial.topCard': "The card at the top plays a song. The timeline below already holds tracks sorted by release year.",
            'tutorial.dragCorrect': "Drag the playing track onto the timeline where it belongs, guessing its release year by ear and comparing it with the tracks already placed.",
            'tutorial.dragRetry': "Not quite — a new track is now playing at the top. Compare it with the timeline and try again.",
            'tutorial.dragWrong': "Mistakes are part of the game, though. This time, drop the track somewhere it does NOT belong.",
            'tutorial.feedback': "A wrongly placed track shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!",
            'tutorial.wikipedia': "Want to learn more about a track's genre? Tap the 'more' button on any card in the timeline to read about its metal subgenre.",
            'tutorial.finished': "That's it — you're ready to play. Crank it up and have fun!",
        },
        de: {
            'tutorial.welcome': "Willkommen bei {title}! Höre dir jeden Song an und ordne ihn nach seinem Erscheinungsjahr auf der Zeitleiste ein.",
            'tutorial.topCard': "Die Karte oben spielt einen Song ab. Die Zeitleiste darunter enthält bereits nach Erscheinungsjahr sortierte Songs.",
            'tutorial.dragCorrect': "Ziehe den laufenden Song an die richtige Stelle auf der Zeitleiste, schätze sein Erscheinungsjahr nach Gehör und vergleiche es mit den bereits platzierten Songs.",
            'tutorial.dragRetry': "Nicht ganz — oben läuft jetzt ein neuer Song. Vergleiche ihn mit der Zeitleiste und versuche es erneut.",
            'tutorial.dragWrong': "Fehler gehören aber zum Spiel. Lege den Song diesmal an eine Stelle, an die er NICHT gehört.",
            'tutorial.feedback': "Ein falsch platzierter Song wackelt, wird rot und zeigt sein richtiges Jahr — und bringt keinen Punkt. Richtige Platzierungen werden grün und bringen einen Punkt. Wer zuerst 10 Punkte erreicht, gewinnt!",
            'tutorial.wikipedia': "Möchtest du mehr über das Genre eines Songs erfahren? Tippe auf einer Karte in der Zeitleiste auf 'mehr', um etwas über sein Metal-Subgenre zu lesen.",
            'tutorial.finished': "Das war's — du bist bereit zu spielen. Dreh auf und viel Spaß!",
        },
    },

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
