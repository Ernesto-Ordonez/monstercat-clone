import cover from "./assets/album_cover.jpg";

function getTrackUrl(name, format) {
  return new URL(`./assets/audio/${name}.${format}`, import.meta.url).href;
}

class Track {
  constructor(trackNum, name, artist, duration) {
    this.trackNum = trackNum;
    this.name = name;
    this.artist = artist;
    this.mp3Url = getTrackUrl(this.name, "mp3");
    this.oggUrl = getTrackUrl(this.name, "ogg");
    this.duration = duration;
  }
}

const tychoAlbum = {
  title: "Awake",
  releaseDate: "18/03/2014",
  label: "Ghostly International",
  artist: "Tycho",
  cover,
  tracks: [
    new Track(1, "Awake", "Tycho", "00:04:43"),
    new Track(2, "Montana", "Tycho", "00:05:26"),
    new Track(3, "L", "Tycho", "00:04:37"),
    new Track(4, "Dye", "Tycho", "00:05:17"),
    new Track(5, "See", "Tycho", "00:05:18"),
    new Track(6, "Apogee", "Tycho", "00:04:20"),
    new Track(7, "Spectre", "Tycho", "00:03:46"),
    new Track(8, "Plains", "Tycho", "00:03:17"),
  ],
};

export default tychoAlbum;
