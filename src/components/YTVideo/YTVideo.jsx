import styles from "./yt-video.module.css";

const YTVideo = () => {
  return (
    <iframe
      className={styles.iframe}
      // width="560"
      // height="315"
      src="https://www.youtube-nocookie.com/embed/5wWBLbQInqk"
      title="YouTube video player"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; modestbranding;"
      allowFullScreen
    ></iframe>
  );
};

export default YTVideo;
