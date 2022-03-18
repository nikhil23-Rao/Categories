import React from "react";
import styles from "../styles/Credits.module.css";

export const Credits = () => {
  return (
    <div className={styles.container}>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        Privacy Policy
      </a>
      <a
        href="https://github.com/nikhil23-Rao/Categories/issues"
        target="_blank"
      >
        Report A Bug
      </a>
      <a href="https://github.com/nikhil23-Rao/Categories/" target="_blank">
        About
      </a>
      <p> • </p>
      <p>Game Created By: Vinay Rao & Nikhil Rao</p>
      <p> • </p>
      <p>Version: 1.0.0 (Beta)</p>
      <p> • </p>
      <a
        href="https://www.instagram.com/vinayrao1061/"
        style={{ cursor: "pointer" }}
        target="_blank"
      >
        <i className="fa fa-instagram"></i>
      </a>
      <a
        href="https://github.com/vinayRao23"
        style={{ cursor: "pointer" }}
        target="_blank"
      >
        <i className="fa fa-github"></i>
      </a>
      <p>
        <i className="fa fa-twitter" />
      </p>
    </div>
  );
};
