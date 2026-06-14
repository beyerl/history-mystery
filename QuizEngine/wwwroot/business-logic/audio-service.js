// business-logic/audio-service.js
// Plays audio files based on a sound enum. The file paths are content and come
// from the quiz config (assets.sounds); a sound with no configured path is a no-op.

import { configService } from './config-service.js';

let instance = null;

export class AudioService {
    constructor() {
        if (instance) {
            return instance;
        }
        // Every sound that is currently playing is tracked here (keyed by sound)
        // so it can be muted or stopped later, whether or not it loops.
        this.activeAudios = {};
        this.muted = localStorage.getItem('audioMuted') === 'true';
        instance = this;
    }

    play(sound, loop = false) {
        // A given sound only ever has one instance playing at a time; this keeps
        // background tracks (e.g. the menu music) from stacking on page re-entry.
        if (this.activeAudios[sound]) { return; }
        const src = configService.sounds[sound];
        if (!src) return;
        const audio = new Audio(src);
        audio.loop = loop;
        audio.volume = 1;
        audio.muted = this.muted;
        // Stop tracking a non-looping sound once it finishes on its own.
        audio.addEventListener('ended', () => {
            if (this.activeAudios[sound] === audio) {
                delete this.activeAudios[sound];
            }
        });
        this.activeAudios[sound] = audio;
        audio.play();
    }

    setMuted(muted) {
        this.muted = muted;
        localStorage.setItem('audioMuted', muted);
        Object.values(this.activeAudios).forEach(audio => { audio.muted = muted; });
        // Let other players (e.g. the hidden YouTube audio player) follow suit.
        window.dispatchEvent(new CustomEvent('mute-changed', { detail: { muted } }));
    }

    toggleMute() {
        this.setMuted(!this.muted);
        return this.muted;
    }

    stop(sound) {
        const audio = this.activeAudios[sound];
        if (!audio) return;
        delete this.activeAudios[sound];
        const fadeDuration = 2000; // ms
        const fadeSteps = 20;
        const fadeStepTime = fadeDuration / fadeSteps;
        let currentStep = 0;
        const startVolume = audio.volume;
        const fadeOut = () => {
            if (currentStep < fadeSteps) {
                audio.volume = Math.max(0, startVolume * (1 - currentStep / fadeSteps));
                currentStep++;
                setTimeout(fadeOut, fadeStepTime);
            } else {
                audio.pause();
                audio.currentTime = 0;
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
        const src = configService.sounds[sound];
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
