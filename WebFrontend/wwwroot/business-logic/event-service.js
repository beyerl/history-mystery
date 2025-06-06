export class EventService {
    constructor(historicEvents) {
        this.historicEvents = historicEvents;
        this.shuffledEvents = [];
        this.currentIndex = 0;
        this.initialize();
    }

    initialize() {
        if (!Array.isArray(this.historicEvents) || this.historicEvents.length < 20) {
            console.error('Invalid or insufficient events provided:', this.historicEvents);
            return;
        }
        this.shuffledEvents = this.shuffleArray([...this.historicEvents]);
        this.currentIndex = 0;
    }

    get() {
        if (this.shuffledEvents.length === 0) {
            console.warn("EventService is not initialized. Call initialize() first.");
            return null;
        }

        const event = this.shuffledEvents[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.shuffledEvents.length;
        return event;
    }

    // Fisher–Yates shuffle to create unbiased permutation https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
