import React from "react";
import styles from "../styles/AnimatedTitle.module.css";
import {
  getPrimaryColor,
  getTextShadowColor,
} from "../utils/customizationsFunctions";

export const AnimatedTitle = () => {
  return (
    <div className={styles.bouncingText}>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.c}
      >
        C
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.a}
      >
        A
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px ${getTextShadowColor()}, 0 5px ${getTextShadowColor()}, 0 7px ${getTextShadowColor()}`,
        }}
        className={styles.t}
      >
        T
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px ${getTextShadowColor}, 0 5px ${getTextShadowColor}, 0 7px #4361ee`,
        }}
        className={styles.e}
      >
        E
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.g}
      >
        G
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.o}
      >
        O
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.r}
      >
        R
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.i}
      >
        I
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
              ? "none"
              : `0 3px #4361ee, 0 5px #4361ee, 0 7px #4361ee`,
        }}
        className={styles.e2}
      >
        E
      </div>
      <div
        style={{
          color: getPrimaryColor(),
          textShadow:
            getTextShadowColor() === "none"
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
