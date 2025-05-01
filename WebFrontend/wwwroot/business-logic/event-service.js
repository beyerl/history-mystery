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
        this.shuffledEvents = [...this.historicEvents].sort(() => Math.random() - 0.5);
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
}
