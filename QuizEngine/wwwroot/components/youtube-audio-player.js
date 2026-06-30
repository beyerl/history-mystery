// components/youtube-audio-player.js
// Optional hidden YouTube player for the audio quiz variant. Modeled on the
// sleepy-tube approach: a single off-screen YouTube IFrame player, identified by
// bare video ids, driven entirely by engine lifecycle events — it never touches
// card rendering.
//
//   'question-presented' (document) -> stream the question's video ids
//   'answer-result'      (document) -> stop
//   'game-over'          (document) -> stop and ignore further questions
//
// It reports playback back out on the document so the (decoupled) board can react:
//   'audio-buffering' { buffering: bool } -> show/hide a loading spinner on the card
//   'audio-playing'                       -> the current track has actually started
//
// Quizzes opt in via config.audio = { enabled: true, videoField: 'videos' }.
// Optional config.audio.startFraction (0..1) starts every track that far into
// its duration (e.g. 0.3 = 30% in), so the snippet drops straight into the body
// of the song rather than its intro.

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
        // Optional: start each track this fraction (0..1) into its duration.
        const fraction = Number(configService.audioConfig?.startFraction) || 0;
        this._startFraction = fraction > 0 && fraction < 1 ? fraction : 0;
        this._offsetApplied = false;
        this._queue = [];
        this._ready = false;
        // Keep bound handlers so they can be removed on disconnect.
        this._onPresented = (e) => this.handlePresented(e);
        this._onResult = () => this.stop();
        this._onMute = () => this.applyMute();
        this._onGameOver = () => this.handleGameOver();
        document.addEventListener('question-presented', this._onPresented);
        document.addEventListener('answer-result', this._onResult);
        document.addEventListener('game-over', this._onGameOver);
        window.addEventListener('mute-changed', this._onMute);
        this.initPlayer();
    }

    disconnectedCallback() {
        document.removeEventListener('question-presented', this._onPresented);
        document.removeEventListener('answer-result', this._onResult);
        document.removeEventListener('game-over', this._onGameOver);
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
                    if (this._gameOver) return;
                    if (this._pending) {
                        const ids = this._pending;
                        this._pending = null;
                        this.play(ids);
                    }
                },
                // A dead/region-locked/embedding-disabled video falls through to
                // the next fallback id the dataset ships for the track.
                onError: () => this.playNextFallback(),
                // Once a freshly loaded track starts playing, jump it to the
                // configured start fraction (if any). Duration is only known by
                // then; we apply the seek once per loaded video.
                onStateChange: (e) => this.handleStateChange(e),
            },
        });
    }

    handlePresented(e) {
        // Once the game is over, ignore any further questions the board still
        // presents (e.g. the next card scheduled right after the winning move),
        // so no new song starts under the win overlay / on the way to scores.
        if (this._gameOver) return;
        const ids = e.detail?.question?.[this._videoField];
        if (Array.isArray(ids) && ids.length) {
            this.play(ids);
        } else {
            this.stop();
        }
    }

    handleGameOver() {
        this._gameOver = true;
        this._pending = null;
        this.stop();
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
            this._offsetApplied = false; // re-apply the start offset for the new track
            this._player.loadVideoById(id);
        }
    }

    handleStateChange(e) {
        this.emitPlaybackState(e?.data);
        this.applyStartOffset(e);
    }

    // Report buffering/playing on the document so the board can show a loading
    // spinner on the current card and time the opening preview to real playback.
    // Kept decoupled: the player never touches card rendering itself.
    emitPlaybackState(state) {
        const PlayerState = window.YT?.PlayerState || {};
        const buffering = state === PlayerState.BUFFERING;
        document.dispatchEvent(new CustomEvent('audio-buffering', { detail: { buffering } }));
        if (state === PlayerState.PLAYING) {
            document.dispatchEvent(new CustomEvent('audio-playing'));
        }
    }

    // When a newly loaded track first reaches PLAYING, seek it to the configured
    // start fraction of its (now-known) duration. Guarded so it runs once per
    // load and never on a pause/resume.
    applyStartOffset(e) {
        if (!this._startFraction || this._offsetApplied) return;
        if (e?.data !== window.YT?.PlayerState?.PLAYING) return;
        const duration = this._player?.getDuration?.() || 0;
        if (duration > 0) {
            this._offsetApplied = true;
            this._player.seekTo(duration * this._startFraction, true);
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
        // Stopping does not reliably emit a state change, so clear any spinner the
        // board may still be showing for the track we just stopped.
        document.dispatchEvent(new CustomEvent('audio-buffering', { detail: { buffering: false } }));
    }

    // Pause/resume the current track without losing its position. Used by the
    // info modal's play/pause control (e.g. replaying a missed song) where the
    // listener wants to toggle, not restart.
    pause() {
        if (this._player && this._ready) {
            try { this._player.pauseVideo(); } catch { /* player not ready */ }
        }
    }

    resume() {
        if (this._player && this._ready) {
            this.applyMute();
            try { this._player.playVideo(); } catch { /* player not ready */ }
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
