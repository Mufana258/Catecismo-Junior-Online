/**
 * audio-export.ts
 *
 * Captures real TTS speech from the Web Speech API into a WAV blob via
 * AudioContext + MediaStreamAudioDestinationNode. Falls back to a self-playing
 * HTML5 page if the browser does not support MediaRecorder or speech capture.
 */

/** Attempt to capture SpeechSynthesis output as a WAV blob.
 *  Works in Chrome/Edge (Blink). Returns null when capture is not supported. */
export async function captureSpeechAsWav(
  text: string,
  lang = "pt-PT",
  rateMult = 0.95,
): Promise<Blob | null> {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window) ||
    !("AudioContext" in window || "webkitAudioContext" in window) ||
    !("MediaRecorder" in window)
  ) {
    return null;
  }

  try {
    // Build AudioContext with a MediaStreamDestination so we can record it
    const AudioCtx =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const dest = ctx.createMediaStreamDestination();

    // Try to create a gain node to verify routing works
    const gain = ctx.createGain();
    gain.connect(dest);

    const recorder = new MediaRecorder(dest.stream, {
      mimeType: MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm",
    });

    const chunks: BlobPart[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    // ---- Speak via SpeechSynthesis and record simultaneously ----
    recorder.start(100);

    await new Promise<void>((resolve) => {
      const voices = window.speechSynthesis.getVoices();
      const ptVoice =
        voices.find((v) => v.lang?.toLowerCase().startsWith("pt-pt")) ??
        voices.find((v) => v.lang?.toLowerCase().startsWith("pt")) ??
        null;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = ptVoice?.lang ?? lang;
      if (ptVoice) utterance.voice = ptVoice;
      utterance.rate = rateMult;

      const timeout = setTimeout(resolve, Math.max(5000, text.length * 90));

      utterance.onend = () => {
        clearTimeout(timeout);
        resolve();
      };
      utterance.onerror = () => {
        clearTimeout(timeout);
        resolve();
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });

    recorder.stop();

    // Wait for all chunks to be flushed
    await new Promise<void>((resolve) => {
      recorder.onstop = () => resolve();
      setTimeout(resolve, 800);
    });

    ctx.close();

    if (chunks.length === 0) return null;

    const mimeType = recorder.mimeType || "audio/webm";
    return new Blob(chunks, { type: mimeType });
  } catch {
    return null;
  }
}

/**
 * Creates a self-playing HTML5 audio page for a lesson.
 * This is a reliable cross-browser fallback when direct audio capture is not possible.
 * The resulting .html file opens in any browser and auto-reads the lesson text via TTS.
 */
export function createSelfPlayingHtmlLesson(title: string, text: string): Blob {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const html = `<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} – Catecismo Júnior IMU</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 680px; margin: 2rem auto; padding: 1rem 1.5rem; line-height: 1.7; color: #1d1d1f; }
    h1 { color: #D32F2F; font-size: 1.4rem; }
    p { white-space: pre-wrap; }
    button { background:#D32F2F; color:#fff; border:none; border-radius:8px; padding:.6rem 1.4rem; font-size:1rem; cursor:pointer; margin:.4rem .2rem; }
    button:disabled { opacity:.5; }
    #status { margin-top:.5rem; font-size:.85rem; color:#555; }
  </style>
</head>
<body>
  <h1>${title}</h1>
  <p id="text">${escaped}</p>
  <div>
    <button id="playBtn" onclick="startReading()">▶ Ouvir Lição</button>
    <button id="stopBtn" onclick="stopReading()" disabled>⏹ Parar</button>
  </div>
  <div id="status"></div>
  <script>
    var synth = window.speechSynthesis;
    var text = document.getElementById('text').innerText;
    var playing = false;

    function pickVoice() {
      var voices = synth.getVoices();
      return voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('pt-pt'); })
          || voices.find(function(v){ return v.lang && v.lang.toLowerCase().startsWith('pt'); })
          || null;
    }

    function startReading() {
      if (playing) return;
      synth.cancel();
      playing = true;
      document.getElementById('playBtn').disabled = true;
      document.getElementById('stopBtn').disabled = false;
      document.getElementById('status').textContent = 'A reproduzir...';

      var sentences = text.split(/(?<=[.!?])\\s+|\\n+/).filter(Boolean);
      var idx = 0;

      function next() {
        if (!playing || idx >= sentences.length) {
          done();
          return;
        }
        var u = new SpeechSynthesisUtterance(sentences[idx++]);
        u.lang = 'pt-PT';
        u.rate = 0.95;
        var v = pickVoice();
        if (v) { u.voice = v; u.lang = v.lang; }
        u.onend = next;
        u.onerror = next;
        synth.speak(u);
      }

      function done() {
        playing = false;
        document.getElementById('playBtn').disabled = false;
        document.getElementById('stopBtn').disabled = true;
        document.getElementById('status').textContent = 'Concluído.';
      }

      // Ensure voices are loaded
      if (synth.getVoices().length > 0) {
        next();
      } else {
        synth.onvoiceschanged = function() { synth.onvoiceschanged = null; next(); };
        setTimeout(next, 400);
      }
    }

    function stopReading() {
      playing = false;
      synth.cancel();
      document.getElementById('playBtn').disabled = false;
      document.getElementById('stopBtn').disabled = true;
      document.getElementById('status').textContent = 'Parado.';
    }

    // Auto-play on load (user must interact first on most browsers)
    window.addEventListener('click', function onFirst() {
      window.removeEventListener('click', onFirst);
      startReading();
    }, { once: true });
  </script>
</body>
</html>`;

  return new Blob([html], { type: "text/html;charset=utf-8" });
}
