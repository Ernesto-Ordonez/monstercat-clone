import React from "react";
import PropTypes from "prop-types";
import styles from "./audioplayer.module.css";
import Icon from "../Icon";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  currentTrackIndex,
  maxTracks,
  setTimeProgress,
  setCurrentTrack,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const playAnimationRef = React.useRef(null);

  const iconSettings = {
    outline: true,
    size: 24,
    strokeWidth: 4,
    color: "black",
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const skipForward = () => {};

  const skipBackward = () => {};

  const handlePrevious = () => {
    if (currentTrackIndex === 0) {
      const newIndex = maxTracks - 1;
      setCurrentTrack(newIndex);
    } else {
      setCurrentTrack((prev) => prev - 1);
    }
    // Para que el src del reproductor se actualice
    audioRef.current.load();
  };

  const handleNext = () => {
    if (currentTrackIndex >= maxTracks - 1) {
      setCurrentTrack(0);
    } else {
      setCurrentTrack((prev) => prev + 1);
    }
    // Para que el src del reproductor se actualice
    audioRef.current.load();
  };

  //
  const repeat = React.useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime;
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(progressBarRef.current.value / duration) * 100}%`
      );

      playAnimationRef.current = requestAnimationFrame(repeat);
    }
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className={styles.controlsWrapper}>
      <div className={styles.controls}>
        <button onClick={handlePrevious}>
          <Icon id="back" {...iconSettings} />
        </button>
        <button onClick={skipBackward}>
          <Icon id="skipBack" {...iconSettings} />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <Icon id="pause" {...iconSettings} />
          ) : (
            <Icon id="play" {...iconSettings} />
          )}
        </button>
        <button onClick={skipForward}>
          <Icon id="skipForward" {...iconSettings} />
        </button>
        <button onClick={handleNext}>
          <Icon id="forward" {...iconSettings} />
        </button>
      </div>
    </div>
  );
};

Controls.propTypes = {
  audioRef: PropTypes.object || null,
  progressBarRef: PropTypes.object || null,
  duration: PropTypes.number,
  setTimeProgress: PropTypes.func,
  setCurrentTrack: PropTypes.func,
  maxTracks: PropTypes.number,
  currentTrackIndex: PropTypes.number,
};

export default Controls;
