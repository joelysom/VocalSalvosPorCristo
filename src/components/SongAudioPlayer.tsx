import { useEffect, useMemo, useRef, useState } from "react";
import { FiPause, FiPlay, FiRotateCcw, FiRotateCw, FiRepeat } from "react-icons/fi";

type SongAudioPlayerProps = {
  sourceUrl: string;
  title: string;
  subtitle: string;
  isLoading?: boolean;
  emptyMessage?: string;
};

function formatPlayerTime(value: number) {
  if (!Number.isFinite(value) || value < 0) {
    return "00:00";
  }

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export function SongAudioPlayer({
  sourceUrl,
  title,
  subtitle,
  isLoading = false,
  emptyMessage = "Selecione uma faixa para começar.",
}: SongAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return undefined;
    }

    const syncCurrentTime = () => setCurrentTime(audio.currentTime || 0);
    const syncDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.loop = isLooping;
    audio.addEventListener("timeupdate", syncCurrentTime);
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("timeupdate", syncCurrentTime);
      audio.removeEventListener("loadedmetadata", syncDuration);
      audio.removeEventListener("durationchange", syncDuration);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, [isLooping, sourceUrl]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [sourceUrl]);

  const progressPercent = useMemo(() => {
    if (!duration) {
      return 0;
    }

    return Math.min(100, Math.max(0, (currentTime / duration) * 100));
  }, [currentTime, duration]);

  const togglePlayback = async () => {
    const audio = audioRef.current;

    if (!audio || !sourceUrl || isLoading) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
      }
      return;
    }

    audio.pause();
  };

  const seekTo = (value: number) => {
    const audio = audioRef.current;

    if (!audio || !duration) {
      return;
    }

    audio.currentTime = value;
    setCurrentTime(value);
  };

  const jumpBySeconds = (delta: number) => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const nextValue = Math.max(0, Math.min(duration || audio.duration || 0, (audio.currentTime || 0) + delta));
    audio.currentTime = nextValue;
    setCurrentTime(nextValue);
  };

  return (
    <section className="song-audio-player" aria-label={`Player interno da faixa ${title}`}>
      <audio
        ref={audioRef}
        src={sourceUrl || undefined}
        preload="metadata"
        playsInline
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        onContextMenu={(event) => event.preventDefault()}
      />

      <div className="song-audio-player__topline">
        <span className="song-audio-player__eyebrow">Player interno</span>
        <span className={`song-audio-player__status${isLoading ? " is-loading" : ""}`}>
          {isLoading ? "Carregando faixa..." : sourceUrl ? "Pronto para reprodução" : emptyMessage}
        </span>
      </div>

      <div className="song-audio-player__heading">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>

      <div className="song-audio-player__timeline">
        <div className="song-audio-player__progress" aria-hidden="true">
          <span style={{ width: `${progressPercent}%` }} />
        </div>
        <input
          type="range"
          min={0}
          max={duration || 0}
          step={0.1}
          value={currentTime}
          onChange={(event) => seekTo(Number(event.target.value))}
          disabled={!sourceUrl || isLoading || !duration}
          aria-label="Progresso da faixa"
        />
        <div className="song-audio-player__times">
          <span>{formatPlayerTime(currentTime)}</span>
          <span>{formatPlayerTime(duration)}</span>
        </div>
      </div>

      <div className="song-audio-player__controls">
        <button type="button" className="song-audio-player__control" onClick={() => jumpBySeconds(-10)} disabled={!sourceUrl || isLoading}>
          <FiRotateCcw size={18} />
          -10s
        </button>
        <button type="button" className="song-audio-player__control is-primary" onClick={() => void togglePlayback()} disabled={!sourceUrl || isLoading}>
          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
          {isPlaying ? "Pausar" : "Tocar"}
        </button>
        <button type="button" className="song-audio-player__control" onClick={() => jumpBySeconds(10)} disabled={!sourceUrl || isLoading}>
          <FiRotateCw size={18} />
          +10s
        </button>
        <button
          type="button"
          className={`song-audio-player__control${isLooping ? " is-active" : ""}`}
          onClick={() => setIsLooping((current) => !current)}
          disabled={!sourceUrl || isLoading}
        >
          <FiRepeat size={18} />
          Loop
        </button>
      </div>
    </section>
  );
}