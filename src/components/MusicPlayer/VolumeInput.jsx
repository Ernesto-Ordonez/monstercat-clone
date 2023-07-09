import PropTypes from "prop-types";
import styles from "./musicplayer.module.css";

const VolumeInput = ({ volume, onVolumeChange }) => {
  return (
    <div className={`${styles.volumeProgressBar}`}>
      <input
        aria-label="volume"
        name="volume"
        type="range"
        min={0}
        step={0.05}
        max={1}
        value={volume}
        style={{ "--value": volume * 100 + "%" }}
        onChange={(e) => {
          onVolumeChange(e.currentTarget.valueAsNumber);
        }}
      />
    </div>
  );
};

VolumeInput.propTypes = {
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
};

export default VolumeInput;
