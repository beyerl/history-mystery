// business-logic/audio-service.js
// Service to play audio files from assets/sound based on a sound enum

import { SoundEnum } from '../models/sound-enum.js';

const soundMap = {
    [SoundEnum.FAILURE]: '/assets/sound/Failure.mp3',
    [SoundEnum.MENU]: '/assets/sound/Menu-short.mp3',
    [SoundEnum.SUCCESS]: '/assets/sound/Success.mp3',
    [SoundEnum.WIN]: '/assets/sound/Win.mp3',
};

let instance = null;

export class AudioService {
    constructor() {
        if (instance) {
            return instance;
        }
        this.activeLoopAudios = {};
        this.muted = localStorage.getItem('audioMuted') === 'true';
        instance = this;
    }

    play(sound, loop = false) {
        if (this.activeLoopAudios[sound]) { return; }
        const src = soundMap[sound];
        if (!src) return;
        const audio = new Audio(src);
        audio.loop = loop;
        audio.volume = 1;
        audio.muted = this.muted;
        audio.play();
        if (loop) {
            this.activeLoopAudios[sound] = audio;
        }
    }

    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('audioMuted', muted);
        Object.values(this.activeLoopAudios).forEach(audio => { audio.muted = muted; });
    }

    toggleMute() {
        this.setMuted(!this.muted);
        return this.muted;
    }

    stop(sound) {
        const audio = this.activeLoopAudios[sound];
        if (!audio) return;
        const fadeDuration = 2000; // ms
        const fadeSteps = 20;
        const fadeStepTime = fadeDuration / fadeSteps;
        let currentStep = 0;
        const fadeOut = () => {
            if (currentStep < fadeSteps) {
                audio.volume = Math.max(0, 1 - currentStep / fadeSteps);
                currentStep++;
                setTimeout(fadeOut, fadeStepTime);
            } else {
                audio.pause();
                audio.currentTime = 0;
                delete this.activeLoopAudios[sound];
            }
        };
        fadeOut();
    }

    /**
     * Returns a Promise that resolves with the duration (in seconds) of the specified sound.
     * @param {SoundEnum} sound
     * @returns {Promise<number>} duration in seconds
     */
    getSoundLength(sound) {
        const src = soundMap[sound];
        if (!src) return Promise.reject(new Error('Sound not found'));
        return new Promise((resolve, reject) => {
            const audio = new Audio(src);
            audio.addEventListener('loadedmetadata', () => {
                resolve(audio.duration * 1000); // Convert to milliseconds
            });
            audio.addEventListener('error', (e) => {
                reject(new Error('Failed to load audio'));
            });
        });
    }
}

export const audioService = new AudioService();
