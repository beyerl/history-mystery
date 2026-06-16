// main.js — QuizEngine entry point.
// A consuming app bootstraps the engine with its quiz config:
//
//   import { startQuizApp } from '/_content/QuizEngine/main.js';
//   import { quizConfig } from './quiz.config.js';
//   startQuizApp(quizConfig);
//
// The engine itself contains no quiz content; everything topic-specific
// (title, theme, assets, questions, translations, credits) comes from the config.

import { configService } from './business-logic/config-service.js';
import { translationService } from './business-logic/translation-service.js';

// Importing the pages/components registers their custom elements.
import './pages/start-page.js';
import './pages/game-page.js';
import './pages/game-setup-page.js';
import './pages/join-game-page.js';
import './pages/game-scores-page.js';
import './pages/credits-page.js';
import './pages/tutorial-page.js';
import './components/mute-button.js';

import { startRouter } from './router.js';

/**
 * Starts the quiz application with the supplied configuration.
 * @param {Object} config - see QuizEngine/README.md for the schema.
 */
export function startQuizApp(config) {
    configService.set(config);
    applyTheme(config);
    translationService.applyDocumentLanguage();
    setupBackendErrorToast();
    startRouter();
}

// Shows a toast whenever a backend request fails (dispatched by the game state
// service). One document-level toast is reused so any page benefits without
// having to mount its own.
function setupBackendErrorToast() {
    let toast = null;
    window.addEventListener('backend-error', async () => {
        await import('./components/toast-component.js');
        if (!toast || !toast.isConnected) {
            toast = document.createElement('toast-component');
            document.body.appendChild(toast);
        }
        toast.show(translationService.t('errors.backendUnavailable'));
    });
}

function applyTheme(config) {
    const theme = config.theme || {};
    const root = document.documentElement;

    if (theme.colors) {
        for (const [name, value] of Object.entries(theme.colors)) {
            // Accept both "color-gold" and "--color-gold" forms.
            root.style.setProperty(name.startsWith('--') ? name : `--${name}`, value);
        }
    }

    if (Array.isArray(theme.fonts) && theme.fonts.length) {
        const faces = theme.fonts.map(font =>
            `@font-face{font-family:'${font.family}';src:url('${font.url}') format('truetype');` +
            `font-weight:${font.weight ?? 400};font-style:${font.style ?? 'normal'};}`
        ).join('\n');
        injectStyle('quiz-fonts', faces);
    }
    if (theme.bodyFont) root.style.setProperty('--font-body', theme.bodyFont);
    if (theme.titleFont) root.style.setProperty('--font-title', theme.titleFont);

    if (theme.favicon) setFavicon(theme.favicon);
    if (theme.background) {
        injectStyle('quiz-background',
            `html,body{background-image:url('${theme.background}');background-size:cover;background-position:center;}`);
    }

    document.title = config.title || 'Quiz';
}

function injectStyle(id, css) {
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('style');
        el.id = id;
        document.head.appendChild(el);
    }
    el.textContent = css;
}

function setFavicon(href) {
    let link = document.querySelector("link[rel='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = href;
}
