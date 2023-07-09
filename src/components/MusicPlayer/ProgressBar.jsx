import PropTypes from "prop-types";
import styles from "./musicplayer.module.css";

const ProgressBar = ({ duration, currentProgress, buffered, ...rest }) => {
  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
  };

  return (
    <div className={styles.progressBar} style={progressStyles}>
      <span></span>
      <input
        type="range"
        name="progress"
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  );
};

ProgressBar.propTypes = {
  duration: PropTypes.number,
  currentProgress: PropTypes.number,
  buffered: PropTypes.number,
};

export default ProgressBar;
