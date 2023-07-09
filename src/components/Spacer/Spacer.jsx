import PropTypes from "prop-types";
import styles from "./spacer.module.css";

const Spacer = ({ axis = "vertical", size = 16 }) => {
  function getHeight(axis, size) {
    return axis === "horizontal" ? 1 : size;
  }
  function getWidth(axis, size) {
    return axis === "vertical" ? 1 : size;
  }

  return (
    <span
      className={styles.spacer}
      style={{
        "--width": `${getWidth(axis, size)}px`,
        "--height": `${getHeight(axis, size)}px`,
      }}
    ></span>
  );
};

Spacer.propTypes = {
  axis: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Spacer;
