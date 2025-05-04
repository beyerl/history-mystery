import { WikipediaSummary } from '../models/wikipedia-summary.js';

export class WikipediaApiService {
    async getSummary(articleTitle) {
        const apiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`;
        try {
            const headers = new Headers({
                'Host': 'en.wikipedia.org',
                'Accept': 'application/json',
            });
            const options = {
                method: 'GET',
                headers: headers
            };
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                throw new Error(`Failed to fetch summary for "${articleTitle}". Status: ${response.status}`);
            }
            const data = await response.json();
            return new WikipediaSummary(
                data.title,
                data.thumbnail,
                data.extract_html,
                data.content_urls?.desktop?.page
            );
        } catch (error) {
            console.error('Error fetching Wikipedia summary:', error);
            throw error;
        }
    }
}
