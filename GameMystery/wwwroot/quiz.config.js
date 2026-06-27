// quiz.config.js — Game Mystery content for the QuizEngine (picture variant).
// Modelled on Art Mystery: the unplaced card shows a video game's box art or a
// gameplay screenshot with a button to view it full screen and no caption;
// placed cards reveal year/developer/title and keep a thumbnail for reference.
// "More" links to the game's Wikipedia article. Localized in English and German.

import { API_BASE_ADDRESS } from './config.js';
import { questions } from './content/questions.js';

export const quizConfig = {
    title: 'Game Mystery',
    apiBaseAddress: API_BASE_ADDRESS,
    maxScore: 10,
    valueSuffix: '',

    // Question contract + picture extras: { title, year, description, artist, image, wiki_title }.
    // For games, `artist` carries the developer.
    questions,

    // Picture variant: image cards with a full-screen button instead of a caption.
    picture: { enabled: true },

    // "More" opens the Wikipedia article for the game.
    infoProvider: { type: 'wikipedia' },

    // Override the engine's generic (history-flavoured) tutorial copy so it
    // describes this quiz: placing video games on a timeline by their release
    // year. English and German are provided; other languages fall back to the
    // engine defaults.
    translations: {
        en: {
            'tutorial.welcome': "Welcome to {title}! Look at each video game and place it on the timeline by the year it was released.",
            'tutorial.topCard': "The card at the top shows a game. The timeline below already holds games sorted by release year.",
            'tutorial.dragCorrect': "Drag the game onto the timeline where it belongs, guessing its release year and comparing it with the games already placed.",
            'tutorial.dragRetry': "Not quite — a new game is now shown at the top. Compare it with the timeline and try again.",
            'tutorial.dragWrong': "Mistakes are part of the game, though. This time, drop the game somewhere it does NOT belong.",
            'tutorial.feedback': "A wrongly placed game shakes, turns red and reveals its correct year — and scores no point. Correct placements turn green and score a point. The first player to reach 10 points wins!",
            'tutorial.wikipedia': "Want to learn more about a game? Tap the 'more' button on any card in the timeline to open its Wikipedia article.",
            'tutorial.finished': "That's it — you're ready to play. Press start and have fun!",
        },
        de: {
            'tutorial.welcome': "Willkommen bei {title}! Sieh dir jedes Videospiel an und ordne es nach seinem Erscheinungsjahr auf der Zeitleiste ein.",
            'tutorial.topCard': "Die Karte oben zeigt ein Spiel. Die Zeitleiste darunter enthält bereits nach Erscheinungsjahr sortierte Spiele.",
            'tutorial.dragCorrect': "Ziehe das Spiel an die richtige Stelle auf der Zeitleiste, schätze sein Erscheinungsjahr und vergleiche es mit den bereits platzierten Spielen.",
            'tutorial.dragRetry': "Nicht ganz — oben wird jetzt ein neues Spiel gezeigt. Vergleiche es mit der Zeitleiste und versuche es erneut.",
            'tutorial.dragWrong': "Fehler gehören aber zum Spiel. Lege das Spiel diesmal an eine Stelle, an die es NICHT gehört.",
            'tutorial.feedback': "Ein falsch platziertes Spiel wackelt, wird rot und zeigt sein richtiges Jahr — und bringt keinen Punkt. Richtige Platzierungen werden grün und bringen einen Punkt. Wer zuerst 10 Punkte erreicht, gewinnt!",
            'tutorial.wikipedia': "Möchtest du mehr über ein Spiel erfahren? Tippe auf einer Karte in der Zeitleiste auf 'mehr', um den Wikipedia-Artikel zu öffnen.",
            'tutorial.finished': "Das war's — du bist bereit zu spielen. Drücke auf Start und viel Spaß!",
        },
    },

    theme: {
        // Neon arcade / CRT palette: deep midnight blue with cyan + magenta glow.
        colors: {
            'color-black': '#0b0f1a',                  // page background (midnight blue)
            'color-card-bg': 'rgba(16, 22, 40, 0.88)', // cards / footer (dark blue)
            'color-yellow': '#1f8fff',                 // button background (electric blue)
            'color-gold': '#34d6ff',                   // hover background (cyan)
            'color-brown': '#eaf6ff',                  // button + card text / borders (light)
            'color-beige': '#141a2e',                  // pill background (dark blue)
            'color-mint': '#ff3df0',                   // accents / borders / hover rows (magenta)
            'color-green': '#39d353',                  // correct-answer flash
            'color-popover-bg': '#1f8fff',             // "correct year" popover
            'color-popover-text': '#04101f',
        },
        bodyFont: "system-ui, 'Segoe UI', sans-serif",
        titleFont: "'Press Start 2P', 'Consolas', 'Courier New', monospace",
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
            { label: 'Menu Music', value: '' },
            { label: 'Content, Programming', value: 'Claude Code' },
        ],
    },
};
