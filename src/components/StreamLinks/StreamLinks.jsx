import styles from "./stream-links.module.css";
import PropTypes from "prop-types";
import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Icon from "../Icon";
import getIconData from "./iconData";

const linkArr = [
  {
    id: "mc-player",
    text: "Player",
    popUpText: "Stream on monstercat player",
    url: "/",
    highlightColor: "#fff",
  },
  {
    id: "bandcamp",
    text: null,
    popUpText: "Stream on bandcamp",
    url: "/",
    highlightColor: "#1DA0C3",
  },
  {
    id: "soundcloud",
    text: null,
    popUpText: "Stream on soundcloud",
    url: "/",
    highlightColor: "#FF5500",
  },
  {
    id: "apple",
    text: null,
    popUpText: "Stream on apple music",
    url: "/",
    highlightColor: "#FB526A",
  },
  {
    id: "youtube",
    text: null,
    popUpText: "Stream on youtube",
    url: "/",
    highlightColor: "#FF0000",
  },
  {
    id: "spotify",
    text: null,
    popUpText: "Stream on spotify",
    url: "/",
    highlightColor: "#1ED760",
  },
];

const IconButton = React.forwardRef(
  ({ iconSrc, text = null, highlightColor, ...delegated }, forwardRef) => {
    return (
      <a
        {...delegated}
        style={{ "--highlight-color": highlightColor }}
        ref={forwardRef}
      >
        <Icon size={26} color="white" outline={false}>
          {iconSrc}
        </Icon>
        {text && " "}
        {text && <span>{text}</span>}
      </a>
    );
  }
);

IconButton.displayName = "Icon Button";

IconButton.propTypes = {
  iconSrc: PropTypes.node,
  text: PropTypes.string || null,
  highlightColor: PropTypes.string,
};

const StreamLinks = () => {
  return (
    <div className={styles.wrapper}>
      {linkArr.map((link) => {
        return (
          <Tooltip.Provider key={link.id} delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <IconButton
                  className={styles.buttonWrapper}
                  iconSrc={getIconData(link.id)}
                  href={link.url}
                  text={link.text}
                  highlightColor={link.highlightColor}
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className={styles.tooltip} sideOffset={5}>
                  {link.popUpText}
                  <Tooltip.Arrow
                    width={20}
                    height={10}
                    className={styles.arrow}
                  />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        );
      })}
    </div>
  );
};

StreamLinks.propTypes = {};

export default StreamLinks;
