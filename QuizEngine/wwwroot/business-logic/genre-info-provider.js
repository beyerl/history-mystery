import { InfoSummary } from '../models/info-summary.js';
import { translationService } from './translation-service.js';

// Info provider that shows inline genre information carried on the question
// itself (no network fetch). Used by the audio (Metal Mystery) quiz: questions
// embed `genre: { title, description }` sourced from the open-source Map of
// Metal data, and a source link is shown for attribution.
// Selected via quiz config `infoProvider: { type: 'genre', sourceUrl, sourceName }`.
export class GenreInfoProvider {
    constructor(descriptor = {}) {
        this.sourceUrl = descriptor.sourceUrl ?? null;
        this.sourceName = descriptor.sourceName ?? null;
    }

    appliesTo(event) {
        return !!event?.genre?.title;
    }

    async getSummary(event) {
        const genre = event.genre;
        const linkLabel = this.sourceName
            ? `${translationService.t('modal.source')}: ${this.sourceName}`
            : null;
        // Genre descriptions are plain text already (sanitized in the dataset);
        // wrap in a paragraph so the modal renders them like other summaries.
        const html = genre.description ? `<p>${genre.description}</p>` : '';
        return new InfoSummary(
            genre.title,
            null,
            html,
            this.sourceUrl,
            translationService.t('modal.genreSummary'),
            linkLabel,
        );
    }
}
