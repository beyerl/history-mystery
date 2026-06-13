// business-logic/translation-service.js
// Provides translated engine UI strings from i18n/translations.js. App code only
// uses keys; the current language is detected from the browser, can be
// changed via setLanguage and is persisted per device. Question (content)
// translations are supplied by the consuming app via the quiz config.

import { translations, languages } from '../i18n/translations.js';
import { configService } from './config-service.js';

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
     * Returns the questions with title and description translated into the
     * current language. The consuming app supplies these (bulky) translations
     * via config.loadQuestionTranslations(lang) -> { [englishTitle]: {title, description} }.
     * Untranslated questions are returned unchanged.
     * @param {Array<Object>} questions
     * @returns {Promise<Array<Object>>}
     */
    async localizeEvents(questions) {
        if (this.language === 'en') {
            return questions;
        }
        if (!this.eventTranslationsPromise) {
            this.eventTranslationsPromise = configService.loadQuestionTranslations(this.language);
        }
        const questionTranslations = await this.eventTranslationsPromise;
        return questions.map(question => {
            const translated = questionTranslations[question.title];
            return translated ? { ...question, title: translated.title, description: translated.description } : question;
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
