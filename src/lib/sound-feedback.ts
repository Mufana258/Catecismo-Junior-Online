/**
 * Web Audio synthesized feedback sounds for touch navigation
 * Provides instant acoustic confirmation for visually and motor impaired users.
 */

let audioCtx: AudioContext | null = null;

export function initAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    if (!audioCtx) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      void audioCtx.resume();
    }
  } catch {
    // audio context creation failure fallback
  }
  return audioCtx;
}

export function unlockAudioEngine(audioElement?: HTMLAudioElement | null) {
  if (typeof window === "undefined") return;
  try {
    const ctx = initAudioContext();
    if (ctx) {
      if (ctx.state === "suspended") {
        void ctx.resume();
      }
      // Play a short silent 1ms buffer to fully unlock the audio hardware output (iOS Safari / Chrome)
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    }
  } catch {
    // ignore
  }

  try {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.resume();
    }
  } catch {
    // ignore
  }

  if (audioElement) {
    try {
      audioElement.muted = true;
      const playPromise = audioElement.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(() => {
            audioElement.pause();
            audioElement.muted = false;
          })
          .catch(() => {});
      }
    } catch {
      // ignore
    }
  }
}

function playToneSound(render: (ctx: AudioContext) => void) {
  const ctx = initAudioContext();
  if (!ctx) return;

  if (ctx.state === "suspended") {
    ctx
      .resume()
      .then(() => {
        try {
          render(ctx);
        } catch {
          // ignore
        }
      })
      .catch(() => {});
  } else {
    try {
      render(ctx);
    } catch {
      // ignore
    }
  }
}

export function playTapTone(tapCount: number) {
  try {
    // Haptic feedback if supported
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        navigator.vibrate(25);
      } catch {
        // continue
      }
    }

    playToneSound((ctx) => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const baseFreq = 480 + Math.min(tapCount, 21) * 22;
      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    });
  } catch {
    // Ignore audio errors gracefully
  }
}

export function playActionTone() {
  try {
    if (typeof navigator !== "undefined" && typeof navigator.vibrate === "function") {
      try {
        navigator.vibrate([35, 40, 35]);
      } catch {
        // continue
      }
    }

    playToneSound((ctx) => {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880, now + 0.08); // A5

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.23);
    });
  } catch {
    // Ignore audio errors gracefully
  }
}
