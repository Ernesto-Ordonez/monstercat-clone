// import PropTypes from "prop-types"
import React from "react";
import styles from "./app.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StreamLinks from "./components/StreamLinks";
import YTVideo from "./components/YTVideo";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import TrackList from "./components/TrackList";
import SectionWrapper from "./components/SectionWrapper";
import tychoAlbum from "./albumData";
import Spacer from "./components/Spacer/Spacer";

const App = () => {
  // Debug para los media queries
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // States
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isReady, setIsReady] = React.useState(false);
  const [currentSongIndex, setCurrentSongIndex] = React.useState(-1);
  const currentSong = tychoAlbum.tracks[currentSongIndex];

  // Refs
  const audioRef = React.useRef(null);

  const togglePlayPause = React.useCallback(async () => {
    if (currentSongIndex === -1) {
      setCurrentSongIndex(0);
    }

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current?.play();
        setIsPlaying(true);
      } catch (e) {
        console.error(e);
      }
    }
  }, [currentSongIndex, isPlaying]);

  // Pausar / Reproducir si no se esta focuseando
  // un boton de play/pause
  React.useEffect(() => {
    const handleKeyDown = (ev) => {
      if (
        ev.target.nodeName === "BUTTON" &&
        ev.target.getAttribute("data-button-type") !== "togglePlay"
      ) {
        return;
      }

      if (ev.code == "Space" || ev.keyCode == 32) {
        ev.preventDefault();
        togglePlayPause();
      }

      if (ev.altKey && ev.key == "a") {
        console.log(audioRef.current);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlayPause]);

  const onNext = () => {
    if (currentSongIndex === tychoAlbum.tracks.length - 1) {
      setCurrentSongIndex(-1);
    } else {
      setCurrentSongIndex((i) => i + 1);
    }
  };
  const onPrev = () => {
    setCurrentSongIndex((i) => i - 1);
  };

  const handleSongSelect = (index) => {
    if (currentSongIndex === index) {
      if (isPlaying) {
        setIsPlaying(false);
        audioRef?.current.pause();
      } else {
        setIsPlaying(true);
        audioRef?.current.play();
      }
    } else {
      setCurrentSongIndex(index);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grain}></div>
      <div className={styles.container}>
        <Header />
        <Hero
          album={tychoAlbum}
          togglePlayPause={togglePlayPause}
          isPlaying={isPlaying}
          isReady={isReady}
          currentSong={currentSong}
        />
        <SectionWrapper>
          <h2 className={styles.sectionHeader}>Stream it your Way</h2>
          <StreamLinks />
        </SectionWrapper>
        <SectionWrapper>
          <h2 className={styles.sectionHeader}>Track List</h2>
          <TrackList
            {...{
              tracks: tychoAlbum.tracks,
              isReady,
              isPlaying,
              currentSong,
              currentSongIndex,
              handleSongSelect,
            }}
          />
          <MusicPlayer
            currentSong={currentSong}
            songCount={tychoAlbum.tracks.length}
            songIndex={currentSongIndex}
            onNext={onNext}
            onPrev={onPrev}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            isReady={isReady}
            setIsReady={setIsReady}
            audioRef={audioRef}
            togglePlayPause={togglePlayPause}
          />
        </SectionWrapper>
        <SectionWrapper>
          <h2 className={styles.sectionHeader}>Music Video</h2>
          <YTVideo />
        </SectionWrapper>
        <Spacer axis="vertical" size={64} />
        <Footer />
      </div>
      {/* <div className={styles.queryDebug}>
        {windowWidth}px | {windowWidth / 16}rem
      </div> */}
    </div>
  );
};

export default App;
