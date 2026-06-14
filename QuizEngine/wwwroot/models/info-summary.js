// Normalised "info summary" returned by an info provider (e.g. Wikipedia, genre).
// `heading` and `linkLabel` are optional; the info modal falls back to its
// Wikipedia-style labels when a provider does not set them.
export class InfoSummary {
    constructor(title, thumbnail, extract_html, page, heading = null, linkLabel = null) {
        this.title = title;
        if (!thumbnail) {
            this.thumbnail = null;
        } else if (typeof thumbnail === 'object'
            && 'source' in thumbnail
            && 'width' in thumbnail && 'height' in thumbnail) {
            this.thumbnail = thumbnail;
        } else {
            console.warn("Invalid thumbnail data. Expected an object with 'source', 'width', and 'height' properties.");
            this.thumbnail = null;
        }
        this.extract_html = extract_html;
        this.page = page;
        this.heading = heading;
        this.linkLabel = linkLabel;
    }
}
