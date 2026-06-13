// business-logic/translation-service.js
// Provides translated UI strings from data/translations.js. App code only
// uses keys; the current language is detected from the browser, can be
// changed via setLanguage and is persisted per device.

import { translations, languages } from '../data/translations.js';

const RTL_LANGUAGES = ['ar', 'he', 'fa', 'ku'];

let instance = null;

export class TranslationService {
    constructor() {
        if (instance) {
            return instance;
        }
        this.language = this.detectLanguage();
        this.applyDocumentLanguage();
        instance = this;
    }

    detectLanguage() {
        const stored = localStorage.getItem('language');
        if (stored && translations[stored]) {
            return stored;
        }
        const browserLanguage = (navigator.language || 'en').split('-')[0].toLowerCase();
        return translations[browserLanguage] ? browserLanguage : 'en';
    }

    /**
     * Returns the translated string for a key in the current language,
     * falling back to English, then to the key itself.
     * Placeholders like {name} are replaced from params.
     * @param {string} key
     * @param {Object} [params]
     * @returns {string}
     */
    t(key, params = {}) {
        const text = translations[this.language]?.[key] ?? translations.en[key] ?? key;
        return text.replace(/\{(\w+)\}/g, (match, name) => params[name] ?? match);
    }

    getLanguage() {
        return this.language;
    }

    setLanguage(code) {
        if (!translations[code]) {
            return;
        }
        this.language = code;
        this.eventTranslationsPromise = null;
        localStorage.setItem('language', code);
        this.applyDocumentLanguage();
        window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: code } }));
    }

    /**
     * Returns the events with title and description translated into the
     * current language. Event translations are bulky, so they live in one
     * lazily imported module per language (data/event-translations/<code>.js,
     * keyed by English title). Untranslated events are returned unchanged.
     * @param {Array<Object>} events
     * @returns {Promise<Array<Object>>}
     */
    async localizeEvents(events) {
        if (this.language === 'en') {
            return events;
        }
        if (!this.eventTranslationsPromise) {
            this.eventTranslationsPromise = import(`../data/event-translations/${this.language}.js`)
                .then(module => module.events)
                .catch(error => {
                    console.error('Failed to load event translations:', error);
                    return {};
                });
        }
        const eventTranslations = await this.eventTranslationsPromise;
        return events.map(event => {
            const translated = eventTranslations[event.title];
            return translated ? { ...event, title: translated.title, description: translated.description } : event;
        });
    }

    /**
     * Returns all available languages as {code, name} with native names.
     */
    getAvailableLanguages() {
        return languages;
    }

    applyDocumentLanguage() {
        document.documentElement.lang = this.language;
        document.documentElement.dir = RTL_LANGUAGES.includes(this.language) ? 'rtl' : 'ltr';
    }
}

export const translationService = new TranslationService();
