import PropTypes from "prop-types";
import styles from "./musicplayer.module.css";
import { useMediaQuery } from "@react-hookz/web";
import * as Popover from "@radix-ui/react-popover";
import Icon from "../Icon";

const VolumeInput = ({ volume, onVolumeChange, handleMuteUnmute }) => {
  const isTabletSize = useMediaQuery("screen and (max-width: 68rem)");

  if (isTabletSize) {
    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className={`${styles.iconButton}`}>
            <Icon
              id="mute"
              size={16}
              strokeWidth={4}
              color="var(--color-white)"
            />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="top"
            sideOffset={85}
            align="start"
            alignOffset={-84}
            avoidCollisions={false}
            className={` ${styles.verticalSliderWrapper}`}
          >
            <div className={`${styles.volumeProgressBar} ${styles.vertical}`}>
              <input
                aria-label="volume"
                name="volume"
                type="range"
                min={0}
                step={0.05}
                max={1}
                value={volume}
                style={{ "--value": volume * 100 + "%" }}
                onChange={(e) => {
                  onVolumeChange(e.currentTarget.valueAsNumber);
                }}
              />
            </div>
            <button
              className={styles.iconButton}
              onClick={handleMuteUnmute}
              aria-label={volume === 0 ? "Unmute" : "Mute"}
              style={{ "--btn-size": 48 + "px" }}
            >
              {volume === 0 ? (
                <Icon id="unmuteAlt" size={16} strokeWidth={4} color="white" />
              ) : (
                <Icon id="muteAlt" size={16} strokeWidth={4} color="white" />
              )}
            </button>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  } else {
    return (
      <>
        <button
          className={styles.iconButton}
          style={{ "--btn-size": 48 + "px" }}
          disabled
        >
          <Icon
            id="mute"
            size={16}
            strokeWidth={4}
            color="var(--color-gray-500)"
          />
        </button>

        <div className={`${styles.volumeProgressBar}`}>
          <input
            aria-label="volume"
            name="volume"
            type="range"
            min={0}
            step={0.05}
            max={1}
            value={volume}
            style={{ "--value": volume * 100 + "%" }}
            onChange={(e) => {
              onVolumeChange(e.currentTarget.valueAsNumber);
            }}
          />
        </div>

        <button
          className={styles.iconButton}
          onClick={handleMuteUnmute}
          aria-label={volume === 0 ? "Unmute" : "Mute"}
          style={{ "--btn-size": 48 + "px" }}
        >
          {volume === 0 ? (
            <Icon id="unmuteAlt" size={16} strokeWidth={4} color="white" />
          ) : (
            <Icon id="muteAlt" size={16} strokeWidth={4} color="white" />
          )}
        </button>
      </>
    );
  }
};

VolumeInput.propTypes = {
  volume: PropTypes.number,
  onVolumeChange: PropTypes.func,
  handleMuteUnmute: PropTypes.func,
};

export default VolumeInput;
