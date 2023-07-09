import styles from "./audioplayer.module.css";
import PropTypes from "prop-types";
import React from "react";
import albumData from "../../albumData";

import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const tracks = albumData.tracks;

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = React.useState(0);
  const [timeProgress, setTimeProgress] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const currentTrackItem = tracks[currentTrack];

  // Referencia a la tag <audio> y al input de la barra
  // de progreso <input type="range">
  const audioRef = React.useRef(null);
  const progressBarRef = React.useRef(null);

  const updateDuration = (metadataDuration) => {
    setDuration(metadataDuration);
  };

  return (
    <div className={styles.audioPlayer}>
      <div className={styles.inner}>
        <DisplayTrack
          currentTrack={currentTrackItem}
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          updateDuration={updateDuration}
        />
        <Controls
          audioRef={audioRef}
          progressBarRef={progressBarRef}
          duration={duration}
          currentTrackIndex={currentTrack}
          maxTracks={tracks.length}
          setCurrentTrack={setCurrentTrack}
          setTimeProgress={setTimeProgress}
        />
        <ProgressBar
          progressBarRef={progressBarRef}
          audioRef={audioRef}
          duration={duration}
          timeProgress={timeProgress}
        />
      </div>
    </div>
  );
};

AudioPlayer.propTypes = {
  tracks: PropTypes.array,
};

export default AudioPlayer;
