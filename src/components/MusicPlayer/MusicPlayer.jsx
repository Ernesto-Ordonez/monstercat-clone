import PropTypes from "prop-types";
import React from "react";
import styles from "./musicplayer.module.css";
import VolumeInput from "./VolumeInput";
import ProgressBar from "./ProgressBar";
import Icon from "../Icon/Icon";

const MusicPlayer = ({
  currentSong,
  songCount,
  songIndex,
  onNext,
  onPrev,
  isPlaying,
  setIsPlaying,
  isReady,
  setIsReady,
  audioRef,
  togglePlayPause,
}) => {
  // States
  const [duration, setDuration] = React.useState(0);

  // Volume
  const [volume, setVolume] = React.useState(0.2);
  const [lastVolume, setLastVolume] = React.useState(0);

  // Progress bar
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);

  function formatDurationDisplay(duration) {
    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration - min * 60);

    const formatted = [min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":");
    // format - mm:ss

    return formatted;
  }

  const elapsedDisplay = formatDurationDisplay(currrentProgress);
  const remainingDisplay = formatDurationDisplay(
    Math.floor(duration) - Math.floor(currrentProgress)
  );

  const handleVolumeChange = (volumeValue) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.volume !== 0) {
      setLastVolume(volume);
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = lastVolume;
    }
  };

  const handleBufferProgress = (e) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  React.useEffect(() => {
    audioRef.current?.pause();
    audioRef.current?.load();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [songIndex, setIsReady, audioRef]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.trackInfo}>
        <p className={styles.title}>{currentSong?.name ?? "Select a song"}</p>
        <p className={styles.artist}>{currentSong && currentSong.artist}</p>
      </div>

      {currentSong && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onCanPlay={(e) => {
            setIsReady(true);
            e.currentTarget.volume = volume;
          }}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
          onTimeUpdate={(e) => {
            setCurrrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onEnded={onNext}
          onLoadStart={() => setIsReady(false)}
          onEmptied={() => setBuffered(0)}
        >
          <source type="audio/ogg" src={currentSong.oggUrl} />
          <source type="audio/mp3" src={currentSong.mp3Url} />
        </audio>
      )}

      <div className={styles.controlGroup}>
        <button
          className={styles.iconButton}
          onClick={handlePrev}
          disabled={songIndex === 0}
          aria-label="go to previous"
          style={{ "--btn-size": 48 + "px" }}
        >
          <Icon id="back" size={16} strokeWidth={4} color="white" />
        </button>
        <button
          className={styles.iconButton}
          disabled={!isReady}
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
          style={{ "--btn-size": 64 + "px" }}
        >
          {!isReady && currentSong ? (
            <Icon
              id="loading"
              size={22}
              strokeWidth={4}
              color="white"
              rotate={true}
            />
          ) : isPlaying ? (
            <Icon id="pause" size={22} strokeWidth={4} color="white" />
          ) : (
            <Icon id="play" size={22} strokeWidth={4} color="white" />
          )}
        </button>
        <button
          className={styles.iconButton}
          onClick={handleNext}
          disabled={songIndex === songCount - 1}
          aria-label="go to next"
          style={{ "--btn-size": 48 + "px" }}
        >
          <Icon id="forward" size={16} strokeWidth={4} color="white" />
        </button>
      </div>
      <div className={styles.songProgress}>
        <span>{elapsedDisplay}</span>
        <ProgressBar
          duration={duration}
          currentProgress={currrentProgress}
          buffered={buffered}
          onChange={(e) => {
            if (!audioRef.current) return;

            audioRef.current.currentTime = e.currentTarget.valueAsNumber;

            setCurrrentProgress(e.currentTarget.valueAsNumber);
          }}
        />
        <span>-{remainingDisplay}</span>
      </div>

      <div className={styles.volumeControlGroup}>
        <button
          className={styles.iconButton}
          onClick={handleMuteUnmute}
          aria-label={volume === 0 ? "Unmute" : "Mute"}
          style={{ "--btn-size": 48 + "px" }}
        >
          {volume === 0 ? (
            <Icon id="unmute" size={16} strokeWidth={4} color="white" />
          ) : (
            <Icon id="mute" size={16} strokeWidth={4} color="white" />
          )}
        </button>
        <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
      </div>
    </div>
  );
};

MusicPlayer.propTypes = {
  currentSong: PropTypes.object,
  songCount: PropTypes.number,
  songIndex: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  isPlaying: PropTypes.bool,
  setIsPlaying: PropTypes.func,
  isReady: PropTypes.bool,
  setIsReady: PropTypes.func,
  togglePlayPause: PropTypes.func,
  audioRef: PropTypes.object || null,
};

export default MusicPlayer;
