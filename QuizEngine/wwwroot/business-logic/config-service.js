// business-logic/config-service.js
// Holds the active quiz configuration supplied by the consuming app at bootstrap
// (see main.js startQuizApp). The engine reads all content/theme/asset/question
// information from here, so it stays content-agnostic. Engine modules must read
// from configService at use-time, never at module load.

let activeConfig = null;

export class ConfigService {
    set(config) {
        activeConfig = config;
    }

    get() {
        if (!activeConfig) {
            throw new Error('Quiz config not set. Call startQuizApp(config) before using the engine.');
        }
        return activeConfig;
    }

    // Convenience accessors with sensible fallbacks so optional content is safe.
    get title() { return activeConfig?.title ?? 'Quiz'; }
    get maxScore() { return activeConfig?.maxScore ?? 10; }
    get valueSuffix() { return activeConfig?.valueSuffix ?? ''; }
    get questions() { return activeConfig?.questions ?? []; }
    get apiBaseAddress() { return activeConfig?.apiBaseAddress ?? '/'; }
    get infoProvider() { return activeConfig?.infoProvider ?? null; }
    get credits() { return activeConfig?.credits ?? { dedication: '', rows: [] }; }
    get sounds() { return activeConfig?.assets?.sounds ?? {}; }

    // Optional audio variant. { enabled: true, videoField: 'videos' } streams a
    // hidden YouTube player for each presented question. Null/absent = no audio.
    get audioConfig() { return activeConfig?.audio ?? null; }

    /**
     * Returns the per-language question translations (keyed by English title),
     * or an empty object when the consumer provides none.
     * @param {string} lang
     * @returns {Promise<Object>}
     */
    loadQuestionTranslations(lang) {
        const loader = activeConfig?.loadQuestionTranslations;
        if (typeof loader !== 'function') {
            return Promise.resolve({});
        }
        return Promise.resolve(loader(lang)).catch(error => {
            console.error('Failed to load question translations:', error);
            return {};
        });
    }
}

export const configService = new ConfigService();
