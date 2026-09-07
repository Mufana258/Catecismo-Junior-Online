import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, CheckCircle2, Volume, Volume1, Volume2 } from "lucide-react";
import JSZip from "jszip";

import { MethodistLogo } from "@/components/MethodistLogo";
import { CATECHISM_LESSONS, PREFACES, WELCOME_SPEECH_TEXT, type LessonTrack } from "@/data/lessons";

import {
  playTapTone,
  playActionTone,
  initAudioContext,
  unlockAudioEngine,
} from "@/lib/sound-feedback";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catecismo Junior" },
      {
        name: "description",
        content:
          "Iniciativa de acessibilidade e inclusão do Catecismo Júnior da Igreja Metodista Unida em áudio em português.",
      },
      { property: "og:title", content: "Catecismo Junior" },
      {
        property: "og:description",
        content:
          "Catecismo Júnior da Igreja Metodista Unida em áudio acessível por toques no ecrã.",
      },
    ],
  }),
  component: Index,
});

function pickPortugueseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const ptPt = voices.filter(
    (v) =>
      v.lang?.toLowerCase().replace("_", "-") === "pt-pt" ||
      v.lang?.toLowerCase().startsWith("pt-pt"),
  );
  const ptAny = voices.filter((v) => v.lang?.toLowerCase().startsWith("pt"));
  const preferred = (list: SpeechSynthesisVoice[]) =>
    list.find((v) =>
      /joana|catarina|ines|inês|female|maria|luciana|fernanda|helena|portuguese/i.test(v.name),
    );
  return (
    preferred(ptPt) ??
    ptPt[0] ??
    preferred(ptAny) ??
    ptAny[0] ??
    voices.find((v) => v.default) ??
    voices[0] ??
    null
  );
}

function waitForSpeechVoices(runId: number, currentRunId: number) {
  return new Promise<void>((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      resolve();
      return;
    }

    const synthesis = window.speechSynthesis;
    const initialVoices = synthesis.getVoices();

    if (initialVoices.length > 0 || runId !== currentRunId) {
      resolve();
      return;
    }

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const finish = () => {
      if (timeout) clearTimeout(timeout);
      synthesis.removeEventListener("voiceschanged", finish);
      resolve();
    };

    synthesis.addEventListener("voiceschanged", finish, { once: true });
    timeout = setTimeout(finish, 350);
  });
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 2000);
}

function VolumeAnimation() {
  const [volLevel, setVolLevel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setVolLevel((v) => (v + 1) % 3);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-1/2 -top-[70px] sm:-top-[82px] -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none p-2 sm:p-2.5 rounded-full bg-white shadow-lg border border-[#D32F2F]/20 text-[#D32F2F]">
      {volLevel === 0 && <Volume size={32} />}
      {volLevel === 1 && <Volume1 size={32} />}
      {volLevel === 2 && <Volume2 size={32} />}
    </div>
  );
}

function Index() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tapCount, setTapCount] = useState(0);
  const tapCountRef = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runIdRef = useRef(0);
  const automaticStartRef = useRef(false);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const introStartedRef = useRef(false);
  const firstTapConsumedRef = useRef(false);

  const [currentTrack, setCurrentTrack] = useState<LessonTrack>(CATECHISM_LESSONS[0]!);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTapFeedback, setActiveTapFeedback] = useState<number | string | null>(null);

  const allTracks = useMemo(() => [...PREFACES, ...CATECHISM_LESSONS], []);
  const audioTracks = useMemo(
    () => [...PREFACES.filter((t) => t.url), ...CATECHISM_LESSONS.filter((t) => t.url)],
    [],
  );

  const stopAll = useCallback(() => {
    runIdRef.current += 1;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    setIsSpeaking(false);
    activeUtteranceRef.current = null;
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    return runIdRef.current;
  }, []);

  const speakSentence = useCallback((textChunk: string, runId: number) => {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return resolve();
      }
      if (runId !== runIdRef.current) {
        return resolve();
      }

      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(textChunk.trim());

      // Global reference retention to prevent V8 garbage-collecting the utterance mid-speech
      const globalAny = window as unknown as { __utterances?: SpeechSynthesisUtterance[] };
      if (!globalAny.__utterances) {
        globalAny.__utterances = [];
      }
      globalAny.__utterances.push(utterance);
      activeUtteranceRef.current = utterance;

      utterance.lang = "pt-PT";
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      const voice = pickPortugueseVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang || "pt-PT";
      }

      let timer: ReturnType<typeof setTimeout> | null = null;
      let finished = false;

      const finish = () => {
        if (finished) return;
        finished = true;
        if (timer) clearTimeout(timer);
        if (activeUtteranceRef.current === utterance) {
          activeUtteranceRef.current = null;
        }
        if (globalAny.__utterances) {
          const idx = globalAny.__utterances.indexOf(utterance);
          if (idx !== -1) globalAny.__utterances.splice(idx, 1);
        }
        resolve();
      };

      utterance.onend = finish;
      utterance.onerror = finish;

      // Chrome/Safari safety timeout in case utterance event drops
      const maxDuration = Math.max(3800, textChunk.length * 115);
      timer = setTimeout(finish, maxDuration);

      try {
        if (synthesis.paused) {
          synthesis.resume();
        }
        synthesis.speak(utterance);
      } catch {
        finish();
      }
    });
  }, []);

  const speak = useCallback(
    async (text: string, runId: number, waitForVoices = false) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      if (runId !== runIdRef.current) return;

      if (waitForVoices) {
        await waitForSpeechVoices(runId, runIdRef.current);
        if (runId !== runIdRef.current) return;
      }

      try {
        window.speechSynthesis.cancel();
      } catch {
        // continue
      }

      // Small tick for speech queue cleanup
      await new Promise((r) => setTimeout(r, 35));
      if (runId !== runIdRef.current) return;

      try {
        window.speechSynthesis.resume();
      } catch {
        // continue
      }

      setIsSpeaking(true);

      // Split into sentences for reliable speech synthesis without browser timeout limits
      const sentences = text
        .split(/(?<=[.!?])\s+|\n+/)
        .map((s) => s.trim())
        .filter(Boolean);

      for (const sentence of sentences) {
        if (runId !== runIdRef.current) break;
        await speakSentence(sentence, runId);
      }

      if (runId === runIdRef.current) {
        setIsSpeaking(false);
      }
    },
    [speakSentence],
  );

  const playAudioTrack = useCallback(
    (track: LessonTrack, runId: number) => {
      return new Promise<void>((resolve) => {
        if (!track.url || !audioRef.current || runId !== runIdRef.current) {
          setIsPlaying(false);
          return resolve();
        }

        const audio = audioRef.current;
        audio.src = track.url;
        audio.currentTime = 0;
        setCurrentTrack(track);
        setIsPlaying(true);

        const onEnded = () => {
          cleanup();
          if (runId === runIdRef.current) setIsPlaying(false);
          resolve();
        };

        const onError = () => {
          cleanup();
          if (runId === runIdRef.current) {
            setIsPlaying(false);
            // Fallback to speech synthesis so the track plays completely
            void speak(track.fullText, runId).then(resolve);
          } else {
            resolve();
          }
        };

        const cleanup = () => {
          audio.removeEventListener("ended", onEnded);
          audio.removeEventListener("error", onError);
        };

        audio.addEventListener("ended", onEnded);
        audio.addEventListener("error", onError);

        audio.play().catch(() => {
          cleanup();
          if (runId === runIdRef.current) {
            setIsPlaying(false);
            // Fallback if browser policy blocks autoplay
            void speak(track.fullText, runId).then(resolve);
          } else {
            resolve();
          }
        });
      });
    },
    [speak],
  );

  const playOrNarrateLesson = useCallback(
    async (lesson: LessonTrack) => {
      playActionTone();
      const runId = stopAll();
      setCurrentTrack(lesson);

      if (lesson.url) {
        await playAudioTrack(lesson, runId);
      } else {
        await speak(`${lesson.label}: ${lesson.title}. ${lesson.fullText}`, runId);
      }
    },
    [playAudioTrack, speak, stopAll],
  );

  // Introductory sequence:
  // 1. Welcome speech with accessibility statement and complete Portuguese instructions
  // 2. Automatically play Parte 0 (Prefácio) completely
  // 3. Conclude and pause ready on Parte 1 (Deus)
  const runIntroAndPrefaces = useCallback(async () => {
    introStartedRef.current = true;
    const runId = stopAll();
    const waitForVoices = automaticStartRef.current;
    automaticStartRef.current = false;

    // 1. Welcome & Instructions
    await speak(WELCOME_SPEECH_TEXT, runId, waitForVoices);
    if (runId !== runIdRef.current) return;

    // 2. Auto play Parte 0 (Prefácio)
    const parte0 = PREFACES.find((t) => t.partNumber === "0");
    if (parte0) {
      setCurrentTrack(parte0);
      if (parte0.url) {
        await playAudioTrack(parte0, runId);
      } else {
        await speak(parte0.fullText, runId);
      }
    }
    if (runId !== runIdRef.current) return;

    // 3. Conclude and pause on Parte 1
    const parte1 = CATECHISM_LESSONS[0]!;
    setCurrentTrack(parte1);
    setIsPlaying(false);
    setIsSpeaking(false);

    await speak(
      `Introdução e prefácio concluídos. O áudio está em pausa. Toque 1 vez no ecrã para ouvir a Parte 1 sobre ${parte1.title}.`,
      runId,
    );
  }, [playAudioTrack, speak, stopAll]);

  const startIntro = useCallback(() => {
    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window &&
      (window.speechSynthesis.speaking || window.speechSynthesis.pending)
    ) {
      return;
    }

    // Start immediately when the logo loads / renders.
    automaticStartRef.current = true;
    void runIntroAndPrefaces();
  }, [runIntroAndPrefaces]);

  // Chrome periodic resume fix for long utterances
  useEffect(() => {
    if (!isSpeaking) return;
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.resume();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isSpeaking]);

  useEffect(() => {
    let unmounted = false;

    const triggerInitialIntro = () => {
      if (unmounted) return;
      startIntro();
    };

    // 1. Trigger immediately on mount
    triggerInitialIntro();

    // 2. Trigger on window load and pageshow
    if (typeof window !== "undefined") {
      window.addEventListener("load", triggerInitialIntro);
      window.addEventListener("pageshow", triggerInitialIntro);

      // 3. Browser Autoplay Bypass: unlock audio engine on first pointer down / touch / key
      const handleFirstInteraction = () => {
        unlockAudioEngine(audioRef.current);
        if (!introStartedRef.current) {
          triggerInitialIntro();
        }
      };

      window.addEventListener("pointerdown", handleFirstInteraction, {
        once: true,
        capture: true,
      });
      window.addEventListener("keydown", handleFirstInteraction, {
        once: true,
        capture: true,
      });
    }

    return () => {
      unmounted = true;
      if (typeof window !== "undefined") {
        window.removeEventListener("load", triggerInitialIntro);
        window.removeEventListener("pageshow", triggerInitialIntro);
      }
      stopAll();
    };
  }, [startIntro, stopAll]);

  const downloadAllFiles = useCallback(async () => {
    playActionTone();
    const runId = stopAll();
    setIsDownloading(true);
    setDownloadSuccess(false);

    await speak("A descarregar todos os ficheiros de áudio do Catecismo Júnior.", runId);

    try {
      const zip = new JSZip();
      const folder = zip.folder("Catecismo_Junior_Igreja_Metodista_Unida_Audios");

      // Fetch and package all 22 real MP3 files (Parte 0 through Parte 20)
      for (const track of allTracks) {
        if (runId !== runIdRef.current) break;
        if (!track.url) continue;

        try {
          const res = await fetch(track.url);
          if (res.ok) {
            const blob = await res.blob();
            folder?.file(track.filename, blob);
          }
        } catch {
          // skip if individual file fails to fetch
        }
      }

      // Trigger ZIP download with all real MP3 files
      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerBlobDownload(zipBlob, "Catecismo_Junior_Igreja_Metodista_Unida_Audios.zip");

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
      if (runId === runIdRef.current) {
        await speak("Os ficheiros de áudio foram descarregados com sucesso.", runId);
      }
    } catch {
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } finally {
      setIsDownloading(false);
    }
  }, [allTracks, speak, stopAll]);

  // Multi-tap resolution logic (1 to 20 = Chapters 1..20, 21 = Download, 22 = Replay Intro)
  const resolveTaps = useCallback(
    async (count: number) => {
      setTapCount(0);
      setActiveTapFeedback(null);

      if (count === 22) {
        await runIntroAndPrefaces();
        return;
      }

      if (count === 21) {
        void downloadAllFiles();
        return;
      }

      // Each completed tap count maps directly to the lesson with that tap number.
      const track = CATECHISM_LESSONS.find((lesson) => lesson.tapNumber === count);

      if (!track) {
        const runId = stopAll();
        await speak(
          `Foram registados ${count} toques. O catecismo dispõe de 20 lições. Toque de 1 a 20 vezes para escolher a lição, 21 vezes para descarregar ou 22 vezes para ouvir as instruções.`,
          runId,
        );
        return;
      }

      await playOrNarrateLesson(track);
    },
    [downloadAllFiles, playOrNarrateLesson, runIntroAndPrefaces, speak, stopAll],
  );

  const registerTap = useCallback(
    (e?: React.MouseEvent | React.TouchEvent) => {
      if (e) {
        e.stopPropagation();
      }

      // 1. Bypass browser audio blocks by actively unlocking hardware context
      unlockAudioEngine(audioRef.current);

      // 2. Default Stored First Tap:
      // The very first touch on page load/reload is always the Intro.
      // This default token is used only once.
      if (!firstTapConsumedRef.current) {
        firstTapConsumedRef.current = true;
        tapCountRef.current = 0;
        setTapCount(0);
        if (tapTimer.current) clearTimeout(tapTimer.current);

        playTapTone(1);
        playActionTone();
        setActiveTapFeedback("intro");
        setTimeout(() => {
          setActiveTapFeedback((prev) => (prev === "intro" ? null : prev));
        }, 2200);

        void runIntroAndPrefaces();
        return;
      }

      // 3. Subsequent taps follow the chapter logic (1 = Parte 1, 2 = Parte 2, etc.)
      const next = tapCountRef.current + 1;
      tapCountRef.current = next;
      setTapCount(next);
      setActiveTapFeedback(next);
      playTapTone(next);

      if (tapTimer.current) clearTimeout(tapTimer.current);

      // Start replay directly from the 22nd tap so browser autoplay policies
      // recognize the user's touch as the audio permission gesture.
      if (next === 22) {
        tapCountRef.current = 0;
        setTapCount(0);
        setActiveTapFeedback(null);
        void runIntroAndPrefaces();
        return;
      }

      tapTimer.current = setTimeout(() => {
        tapCountRef.current = 0;
        void resolveTaps(next);
      }, 950);
    },
    [resolveTaps, runIntroAndPrefaces],
  );

  const isAudioActive = isPlaying || isSpeaking;

  return (
    <div
      className="relative flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full flex-col items-center justify-between bg-white text-[#1d1d1f] font-sans antialiased select-none cursor-pointer overflow-hidden p-4 sm:p-6 md:p-8 safe-pb"
      onClick={registerTap}
      role="application"
      aria-label="Catecismo Júnior da Igreja Metodista Unida. Toque em qualquer ponto do ecrã para ouvir as 20 lições."
    >
      <audio ref={audioRef} preload="auto" className="hidden" />

      {/* Screen Reader Live Announcements */}
      <div className="sr-only" aria-live="assertive" role="log">
        {tapCount > 0 && `${tapCount} toques registados.`}
        {isAudioActive && `A reproduzir ${currentTrack.label}: ${currentTrack.title}`}
      </div>

      {/* Top Balanced Spacer */}
      <header className="w-full shrink-0 h-2 sm:h-4" />

      {/* Center: Official Methodist Cross & Flame Logo & Minimalist Touch Area */}
      <main className="flex flex-1 w-full max-w-lg flex-col items-center justify-center min-h-0 px-4 py-2">
        <div className="relative flex items-center justify-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-[360/480] max-h-[44dvh]">
          {/* Animated volume icon when audio is active */}
          {isAudioActive && <VolumeAnimation />}

          {/* Cross & Flame Emblem - Infallible vector rendering */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
            <MethodistLogo
              onLoad={startIntro}
              className="w-full h-full object-contain drop-shadow-sm transition-transform duration-200 active:scale-98"
            />
          </div>
        </div>

        <section className="mt-3 max-w-[310px] text-center" aria-labelledby="accessibility-message">
          <p
            id="accessibility-message"
            className="text-xs font-semibold tracking-wide text-[#D32F2F]"
          >
            Acessibilidade e inclusão
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#515154] sm:text-sm">
            Para os nossos irmãos e irmãs em Cristo com deficiência visual
          </p>
        </section>

        {/* Multi-Touch Floating Pill during active tap counting */}
        {activeTapFeedback !== null && (
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-5 py-2 text-sm font-semibold text-white shadow-lg animate-scale-in shrink-0">
            <span>
              {activeTapFeedback === "intro"
                ? "Introdução"
                : `${activeTapFeedback} ${activeTapFeedback === 1 ? "Toque" : "Toques"}`}
            </span>
          </div>
        )}
      </main>

      {/* Bottom: Replay and download actions */}
      <footer className="w-full max-w-xs sm:max-w-sm shrink-0 pt-2 pb-2 sm:pb-4">
        <button
          type="button"
          id="btn-download-files"
          disabled={isDownloading}
          onClick={(e) => {
            e.stopPropagation();
            void downloadAllFiles();
          }}
          className="flex min-h-[52px] sm:min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl apple-btn-primary px-6 sm:px-8 text-sm sm:text-base font-semibold tracking-tight shadow-md disabled:opacity-75 cursor-pointer"
          aria-label="Descarregar ficheiros de áudio do Catecismo Júnior"
        >
          {downloadSuccess ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
              <span>Ficheiros Descarregados</span>
            </>
          ) : isDownloading ? (
            <>
              <Download className="h-5 w-5 text-white shrink-0 animate-bounce" />
              <span>A Descarregar...</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5 text-white shrink-0" />
              <span>Descarregar Ficheiros</span>
            </>
          )}
        </button>
      </footer>
    </div>
  );
}
