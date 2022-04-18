// NextJS Imports
import React from "react";

// Customization Imports
import {
  getPrimaryColor,
  getTextShadowColor,
} from "../../utils/customizationsFunctions";

// CSS Imports
import styles from "../../styles/Landing/AnimatedTitle.module.css";
import { useMediaQuery } from "react-responsive";

export const AnimatedTitle = () => {
  const isPhone = useMediaQuery({ maxWidth: 642 });
  const isTablet = useMediaQuery({ maxWidth: 1353 });
  // Return JSX Markup
  return (
    <div className={styles.bouncingText}>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.c}
      >
        C
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.a}
      >
        A
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.t}
      >
        T
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.e}
      >
        E
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.g}
      >
        G
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.o}
      >
        O
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.r}
      >
        R
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.i}
      >
        I
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.e2}
      >
        E
      </div>
      <div
        style={{
          fontSize: isPhone ? 40 : "",
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none" || isPhone
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.s}
      >
        S
      </div>
      <div className="shadow"></div>
      <div className="shadow-two"></div>
    </div>
  );
};
