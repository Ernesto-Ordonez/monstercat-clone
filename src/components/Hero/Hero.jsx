import styles from "./hero.module.css";
import PropTypes from "prop-types";
import albumCoverUrl from "../../assets/album_cover.jpg";
import moment from "moment/moment";
import Button from "../Button/Button";
import Spacer from "../Spacer/Spacer";
import Icon from "../Icon/Icon";

const Hero = ({ album, togglePlayPause, isPlaying, isReady, currentSong }) => {
  return (
    <>
      <div className={styles.fullWidth}>
        <img
          src={albumCoverUrl}
          alt="album cover background image"
          className={styles.image}
        />
      </div>

      <div className={styles.albumCoverContainer}>
        <div className={styles.column}>
          <div>
            <img
              className={styles.cover}
              src={albumCoverUrl}
              alt="album cover"
            />
          </div>
          <div className={styles.metadata}>
            <span>{album.label}</span> — Released{" "}
            {moment(album.releaseDate, "DD/MM/YYYY").format("ll")}
          </div>
        </div>
        <div className={`${styles.column} ${styles.info}`}>
          <h1>{album.title}</h1>
          <h2>{album.artist}</h2>
          <Spacer size={48} />
          <div className={styles.buttons}>
            <Button
              data-button-type="togglePlay"
              disabled={!isReady && currentSong}
              onClick={togglePlayPause}
            >
              <Icon
                id={
                  !isReady && currentSong
                    ? "loading"
                    : isPlaying
                    ? "pause"
                    : "play"
                }
                strokeWidth={4}
                color="var(--color-white)"
                size={22}
                offsetY={-1}
                rotate={!isReady && currentSong ? true : false}
              />
              <Spacer axis="horizontal" size={8} />
              Listen Now
            </Button>
            <Button outline>
              <Icon
                id="share"
                strokeWidth={4}
                color="var(--color-white)"
                size={22}
                offsetY={-1}
              />
              <Spacer axis="horizontal" size={8} />
              Share
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Hero.propTypes = {
  album: PropTypes.object,
  togglePlayPause: PropTypes.func,
  isPlaying: PropTypes.bool,
  isReady: PropTypes.bool,
  currentSong: PropTypes.object,
};

export default Hero;
