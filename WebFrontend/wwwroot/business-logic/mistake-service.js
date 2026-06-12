// business-logic/mistake-service.js
// Stores the historic events a player placed incorrectly during a game,
// so they can be reviewed on the scores page afterwards.

export class MistakeService {
    storageKey(gameId) {
        return `mistakes-${gameId}`;
    }

    clear(gameId) {
        localStorage.removeItem(this.storageKey(gameId));
    }

    add(gameId, event) {
        if (!event || !event.title || !event.year) return;
        const mistakes = this.getAll(gameId);
        const alreadyRecorded = mistakes.some(m => m.title === event.title && m.year === event.year);
        if (alreadyRecorded) return;
        mistakes.push(event);
        localStorage.setItem(this.storageKey(gameId), JSON.stringify(mistakes));
    }

    getAll(gameId) {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey(gameId))) || [];
        } catch {
            return [];
        }
    }
}

export const mistakeService = new MistakeService();
