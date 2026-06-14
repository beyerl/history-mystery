import { InfoSummary } from '../models/info-summary.js';
import { translationService } from './translation-service.js';

// Built-in info provider that fetches a short summary from Wikipedia.
// Selected via quiz config `infoProvider: { type: 'wikipedia' }`.
//
// Questions reference articles by their English title (`wiki_title`). When a
// non-English language is selected in the menu, the matching article in that
// language is resolved via Wikipedia's langlinks and its summary is shown,
// falling back to the English article when no translation exists.
export class WikipediaInfoProvider {
    // Can render any question that references a Wikipedia article.
    appliesTo(event) {
        return !!event?.wiki_title;
    }

    async getSummary(event) {
        const articleTitle = event.wiki_title;
        const language = translationService.getLanguage();
        if (language && language !== 'en') {
            const localizedTitle = await this.resolveLocalizedTitle(articleTitle, language);
            if (localizedTitle) {
                try {
                    return await this.fetchSummary(language, localizedTitle);
                } catch (error) {
                    console.warn(`No ${language} Wikipedia summary for "${localizedTitle}", falling back to English.`, error);
                }
            }
        }
        return this.fetchSummary('en', articleTitle);
    }

    // Resolves the title of the article in the target language via Wikipedia
    // langlinks. Returns null when the article has no version in that language.
    async resolveLocalizedTitle(articleTitle, language) {
        const params = new URLSearchParams({
            action: 'query',
            prop: 'langlinks',
            titles: articleTitle.replace(/_/g, ' '),
            lllang: language,
            redirects: '1',
            format: 'json',
            origin: '*',
        });
        const url = `https://en.wikipedia.org/w/api.php?${params}`;
        try {
            const response = await fetch(url);
            if (!response.ok) return null;
            const data = await response.json();
            const pages = data?.query?.pages;
            if (!pages) return null;
            const page = Object.values(pages)[0];
            return page?.langlinks?.[0]?.['*'] ?? null;
        } catch (error) {
            console.warn('Failed to resolve localized Wikipedia title.', error);
            return null;
        }
    }

    async fetchSummary(language, articleTitle) {
        const apiUrl = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`;
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: new Headers({ 'Accept': 'application/json' }),
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch summary for "${articleTitle}" (${language}). Status: ${response.status}`);
        }
        const data = await response.json();
        return new InfoSummary(
            data.title,
            data.thumbnail,
            data.extract_html,
            data.content_urls?.desktop?.page
        );
    }
}
