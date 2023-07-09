import PropTypes from "prop-types";
import styles from "./sectionwrapper.module.css";

const SectionWrapper = ({ children }) => {
  return <section className={styles.wrapper}>{children}</section>;
};

SectionWrapper.propTypes = {
  children: PropTypes.node,
};

export default SectionWrapper;
