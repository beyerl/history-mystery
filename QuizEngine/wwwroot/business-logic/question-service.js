// business-logic/question-service.js
// Serves quiz questions one at a time, optionally shuffled. Content-agnostic:
// a question is { title, year, description, wiki_title? } where `year` is the
// numeric value the items are sorted by.

const MIN_QUESTIONS = 5;

export class QuestionService {
    constructor(questions, shuffle = true) {
        this.questions = questions;
        this.shuffle = shuffle;
        this.orderedQuestions = [];
        this.currentIndex = 0;
        this.initialize();
    }

    initialize() {
        if (!Array.isArray(this.questions) || this.questions.length < MIN_QUESTIONS) {
            console.error(`Invalid or insufficient questions provided (need at least ${MIN_QUESTIONS}):`, this.questions);
            return;
        }
        this.orderedQuestions = this.shuffle ? this.shuffleArray([...this.questions]) : [...this.questions];
        this.currentIndex = 0;
    }

    get() {
        if (this.orderedQuestions.length === 0) {
            console.warn("QuestionService is not initialized. Call initialize() first.");
            return null;
        }

        const question = this.orderedQuestions[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.orderedQuestions.length;
        return question;
    }

    // Fisher–Yates shuffle to create unbiased permutation https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    shuffleArray(array) {
        return QuestionService.shuffleArray(array);
    }

    static shuffleArray(array) {
        for (let i = array.length - 1; i >= 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Produces a shuffled order (array of indexes 0..length-1). The creating
    // client persists this to the backend so every player shares the same
    // question sequence; joining clients reorder their questions by it instead
    // of shuffling locally.
    static createShuffledOrder(length) {
        return QuestionService.shuffleArray([...Array(length).keys()]);
    }
}
