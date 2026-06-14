// components/youtube-audio-player.js
// Optional hidden YouTube player for the audio quiz variant. Modeled on the
// sleepy-tube approach: a single off-screen YouTube IFrame player, identified by
// bare video ids, driven entirely by engine lifecycle events — it never touches
// card rendering.
//
//   'question-presented' (document) -> stream the question's video ids
//   'answer-result'      (document) -> stop
//
// Quizzes opt in via config.audio = { enabled: true, videoField: 'videos' }.

import { audioService } from '../business-logic/audio-service.js';
import { configService } from '../business-logic/config-service.js';

let apiReadyPromise = null;

// Loads the YouTube IFrame API once and resolves when window.YT is ready.
function loadYouTubeApi() {
    if (apiReadyPromise) {
        return apiReadyPromise;
    }
    apiReadyPromise = new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
            resolve(window.YT);
            return;
        }
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = () => {
            if (typeof previous === 'function') previous();
            resolve(window.YT);
        };
        if (!document.getElementById('youtube-iframe-api')) {
            const tag = document.createElement('script');
            tag.id = 'youtube-iframe-api';
            tag.src = 'https://www.youtube.com/iframe_api';
            document.head.appendChild(tag);
        }
    });
    return apiReadyPromise;
}

class YoutubeAudioPlayer extends HTMLElement {
    connectedCallback() {
        this._videoField = configService.audioConfig?.videoField || 'videos';
        this._queue = [];
        this._ready = false;
        // Keep bound handlers so they can be removed on disconnect.
        this._onPresented = (e) => this.handlePresented(e);
        this._onResult = () => this.stop();
        this._onMute = () => this.applyMute();
        document.addEventListener('question-presented', this._onPresented);
        document.addEventListener('answer-result', this._onResult);
        window.addEventListener('mute-changed', this._onMute);
        this.initPlayer();
    }

    disconnectedCallback() {
        document.removeEventListener('question-presented', this._onPresented);
        document.removeEventListener('answer-result', this._onResult);
        window.removeEventListener('mute-changed', this._onMute);
        this.stop();
    }

    async initPlayer() {
        const YT = await loadYouTubeApi();
        // Off-screen: only the audio matters, and showing the video would spoil
        // the answer (artist/title/year).
        this.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;top:-9999px;overflow:hidden;';
        const target = document.createElement('div');
        this.appendChild(target);
        this._player = new YT.Player(target, {
            height: '1',
            width: '1',
            playerVars: { autoplay: 1, controls: 0, disablekb: 1, playsinline: 1 },
            events: {
                onReady: () => {
                    this._ready = true;
                    this.applyMute();
                    if (this._pending) {
                        const ids = this._pending;
                        this._pending = null;
                        this.play(ids);
                    }
                },
                // A dead/region-locked/embedding-disabled video falls through to
                // the next fallback id the dataset ships for the track.
                onError: () => this.playNextFallback(),
            },
        });
    }

    handlePresented(e) {
        const ids = e.detail?.question?.[this._videoField];
        if (Array.isArray(ids) && ids.length) {
            this.play(ids);
        } else {
            this.stop();
        }
    }

    play(videoIds) {
        this._queue = [...videoIds];
        if (!this._ready) {
            this._pending = videoIds;
            return;
        }
        this.applyMute();
        this.loadCurrent();
    }

    loadCurrent() {
        const id = this._queue.shift();
        if (id && this._player) {
            this._player.loadVideoById(id);
        }
    }

    playNextFallback() {
        if (this._queue.length) {
            this.loadCurrent();
        }
    }

    stop() {
        this._queue = [];
        if (this._player && this._ready) {
            try { this._player.stopVideo(); } catch { /* player may be torn down */ }
        }
    }

    applyMute() {
        if (!this._player || !this._ready) return;
        try {
            if (audioService.muted) {
                this._player.mute();
            } else {
                this._player.unMute();
            }
        } catch { /* player not ready */ }
    }
}

customElements.define('youtube-audio-player', YoutubeAudioPlayer);
