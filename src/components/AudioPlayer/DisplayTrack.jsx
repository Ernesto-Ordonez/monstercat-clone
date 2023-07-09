import PropTypes from "prop-types";
import styles from "./audioplayer.module.css";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  updateDuration,
  progressBarRef,
}) => {
  const handleOnLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    updateDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div>
      <audio ref={audioRef} onLoadedMetadata={handleOnLoadedMetadata}>
        <source src={currentTrack.oggUrl} type="audio/ogg" />
        <source src={currentTrack.mp3Url} type="audio/mpeg" />
      </audio>
      <div className={styles.audioInfo}>
        <div className={styles.text}>
          <p className={styles.title}>{currentTrack.name}</p>
          <p>{currentTrack.artist}</p>
        </div>
      </div>
    </div>
  );
};

DisplayTrack.propTypes = {
  currentTrack: PropTypes.object,
  audioRef: PropTypes.object || null,
  progressBarRef: PropTypes.object || null,
  updateDuration: PropTypes.func,
};

export default DisplayTrack;
