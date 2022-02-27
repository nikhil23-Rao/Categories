import React from "react";
import styles from "../styles/AnimatedTitle.module.css";

export const AnimatedTitle = () => {
  return (
    <div className={styles.bouncingText}>
      <div className={styles.c}>C</div>
      <div className={styles.a}>A</div>
      <div className={styles.t}>T</div>
      <div className={styles.e}>E</div>
      <div className={styles.g}>G</div>
      <div className={styles.o}>O</div>
      <div className={styles.r}>R</div>
      <div className={styles.i}>I</div>
      <div className={styles.e2}>E</div>
      <div className={styles.s}>S</div>
      <div className="shadow"></div>
      <div className="shadow-two"></div>
    </div>
  );
};
