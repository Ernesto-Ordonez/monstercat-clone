import styles from "./tracklist.module.css";
import Icon from "../Icon/Icon";
import PropTypes from "prop-types";
import moment from "moment/moment";

const TrackList = ({
  tracks,
  isReady,
  isPlaying,
  currentSong,
  currentSongIndex,
  handleSongSelect,
}) => {
  return (
    <table className={styles.wrapper}>
      <tbody>
        {tracks.map((track, index) => {
          return (
            <tr key={index} className={styles.track}>
              <td>{track.trackNum}</td>
              <td>
                <button
                  className={styles.iconButton}
                  disabled={currentSong && !isReady}
                  onClick={() => handleSongSelect(index)}
                >
                  {!isReady && currentSongIndex === index ? (
                    <Icon
                      id="loading"
                      color="white"
                      strokeWidth={4}
                      size={24}
                      rotate={true}
                    />
                  ) : isPlaying && currentSongIndex === index ? (
                    <Icon id="pause" color="white" strokeWidth={4} size={24} />
                  ) : (
                    <Icon id="play" color="white" strokeWidth={4} size={24} />
                  )}
                </button>
              </td>
              <td className={styles.trackData}>
                {track.name}
                <br />
                <span className={styles.artist}>{track.artist}</span>
              </td>
              <td>{moment(track.duration, "HH:mm:ss").format("mm:ss")}</td>
              <td>
                <button className={styles.iconButton}>
                  <Icon id="share" color="white" strokeWidth={4} size={24} />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TrackList.propTypes = {
  tracks: PropTypes.array,
  isPlaying: PropTypes.bool,
  isReady: PropTypes.bool,
  currentSong: PropTypes.object,
  currentSongIndex: PropTypes.number,
  handleSongSelect: PropTypes.func,
};

export default TrackList;
