import PropTypes from "prop-types";
import styles from "./icon.module.css";

const ICONS = {
  share: (
    <g>
      <circle cx="47" cy="15" r="7" />
      <circle cx="47" cy="50" r="7" />
      <circle cx="14" cy="33" r="7" />
      <line x1="40.85" y1="18.35" x2="20.15" y2="29.65" />
      <line x1="40.7" y1="46.96" x2="20.21" y2="36.24" />
    </g>
  ),
  hamburger: (
    <g>
      <line x1="5" y1="30.85" x2="59" y2="30.85" />
      <line x1="5" y1="57.26" x2="59" y2="57.26" />
      <line x1="5" y1="6.74" x2="59" y2="6.74" />
    </g>
  ),
  play: (
    <path d="m10.5,9.54v44.91c0,1.89,1.76,3.12,3.26,2.27l39.28-22.46c1.64-.94,1.64-3.59,0-4.53L13.76,7.28c-1.49-.85-3.26.37-3.26,2.27Z" />
  ),
  pause: (
    <g>
      <rect x="17.5" y="9" width="11" height="46" />
      <rect x="35.5" y="9" width="11" height="46" />
    </g>
  ),
  forward: (
    <g>
      <path d="m7.5,9.54v44.91c0,1.89,1.76,3.12,3.26,2.27l39.28-22.46c1.64-.94,1.64-3.59,0-4.53L10.76,7.28c-1.49-.85-3.26.37-3.26,2.27Z" />
      <line x1="51.27" y1="3.19" x2="51.27" y2="60.81" />
    </g>
  ),
  back: (
    <g>
      <path d="m51.27,9.54v44.91c0,1.89-1.76,3.12-3.26,2.27L8.73,34.27c-1.64-.94-1.64-3.59,0-4.53L48.01,7.28c1.49-.85,3.26.37,3.26,2.27Z" />
      <line x1="7.5" y1="3.19" x2="7.5" y2="60.81" />
    </g>
  ),
  skipForward: (
    <g>
      <path d="m6,18.52v26.97c0,1.14,1.06,1.87,1.95,1.36l23.59-13.48c.99-.56.99-2.16,0-2.72L7.95,17.15c-.9-.51-1.95.22-1.95,1.36Z" />
      <path d="m32.5,18.52v26.97c0,1.14,1.06,1.87,1.95,1.36l23.59-13.48c.99-.56.99-2.16,0-2.72l-23.59-13.48c-.9-.51-1.95.22-1.95,1.36Z" />
    </g>
  ),
  skipBack: (
    <g>
      <path d="m58.78,18.52v26.97c0,1.14-1.06,1.87-1.95,1.36l-23.59-13.48c-.99-.56-.99-2.16,0-2.72l23.59-13.48c.9-.51,1.95.22,1.95,1.36Z" />
      <path d="m32.28,18.52v26.97c0,1.14-1.06,1.87-1.95,1.36l-23.59-13.48c-.99-.56-.99-2.16,0-2.72l23.59-13.48c.9-.51,1.95.22,1.95,1.36Z" />
    </g>
  ),
  loading: (
    <g>
      <path d="m40.37,12.19c7.72,3.26,13.13,10.9,13.13,19.81,0,11.87-9.63,21.5-21.5,21.5s-21.5-9.63-21.5-21.5,9.63-21.5,21.5-21.5" />
    </g>
  ),
  mute: (
    <g>
      <polygon points="37.69 14.42 37.69 50.08 23 39.08 15.5 39.08 15.5 26.08 23 26.08 37.69 14.42" />
      <path d="m49.43,14.82c4.38,4.5,7.07,10.65,7.07,17.43,0,5.76-1.95,11.06-5.22,15.28" />
      <path d="m42.35,21.9c2.57,2.69,4.15,6.34,4.15,10.35,0,2.99-.88,5.78-2.38,8.12" />
    </g>
  ),
  unmute: (
    <g>
      <polyline points="37.69 40.37 37.69 50.08 23 39.08 15.5 39.08 15.5 26.08 21.17 26.08" />
      <polyline points="26.81 23.06 37.69 14.42 37.69 33.94" />
      <path d="m49.43,14.82c4.38,4.5,7.07,10.65,7.07,17.43,0,5.76-1.95,11.06-5.22,15.28" />
      <path d="m42.35,21.9c2.57,2.69,4.15,6.34,4.15,10.35,0,2.99-.88,5.78-2.38,8.12" />
      <polyline points="10.5 6.75 38.46 34.71 57.5 53.75" />
    </g>
  ),
  chevron: (
    <g>
      <polyline points="20 53.83 44 31.83 20 9.83" />
    </g>
  ),
  close: (
    <g>
      <line x1="6.25" y1="6" x2="58" y2="57.75" />
      <line x1="58" y1="6" x2="6.25" y2="57.75" />
    </g>
  ),
};
const Icon = ({
  children = null,
  id = null,
  size = 64,
  strokeWidth = 1,
  color = "black",
  outline = true,
  offsetY = 0,
  rotate = false,
  ...delegated
}) => {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`${styles.icon} ${rotate ? styles.rotate : undefined}`}
      style={{
        "--size": `${size}px`,
        "--stroke": outline ? color : "transparent",
        "--stroke-width": `${strokeWidth}px`,
        "--fill": outline ? "transparent" : color,
        "--offsetY": `${offsetY}px`,
      }}
      {...delegated}
    >
      {children || ICONS[id]}
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  outline: PropTypes.bool,
  offsetY: PropTypes.number,
  rotate: PropTypes.bool,
};

export default Icon;
