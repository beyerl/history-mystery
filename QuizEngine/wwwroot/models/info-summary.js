// Normalised "info summary" returned by an info provider (e.g. Wikipedia).
export class InfoSummary {
    constructor(title, thumbnail, extract_html, page) {
        this.title = title;
        if (thumbnail && typeof thumbnail === 'object'
            && 'source' in thumbnail
            && 'width' in thumbnail && 'height' in thumbnail) {
            this.thumbnail = thumbnail;
        } else {
            console.warn("Invalid thumbnail data. Expected an object with 'source', 'width', and 'height' properties.");
            this.thumbnail = null;
        }
        this.extract_html = extract_html;
        this.page = page;
    }
}
