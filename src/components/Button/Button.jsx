import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({
  children,
  size = "big",
  type = "primary",
  outline = false,
  as = "button",
  url = "/",
  ...delegated
}) => {
  const As = as;
  const backgroundColor =
    outline || type === "transparent" ? "transparent" : `var(--color-${type})`;
  const border = outline
    ? `1px solid var(--color-white)`
    : type === "transparent"
    ? `1px solid transparent`
    : `1px solid var(--color-${type})`;

  const spacing = size === "big" ? "14px 30px" : "8px 16px";
  const fontSize = size === "big" ? "1rem" : "0.85rem";

  return (
    <As
      className={styles.container}
      style={{
        "--background-color": `${backgroundColor}`,
        "--border": border,
        "--spacing": spacing,
        "--font-size": fontSize,
      }}
      href={As === "a" ? url : undefined}
      {...delegated}
    >
      {children}
    </As>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  outline: PropTypes.bool,
  as: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.string,
};

export default Button;
