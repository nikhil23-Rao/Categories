import React from "react";
import styles from "../../styles/Landing/Credits.module.css";
import { getAltTextColor } from "../../utils/customizationsFunctions";

export const Credits = () => {
  return (
    <div className={styles.container}>
      <a
        style={{ color: getAltTextColor() }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
      >
        Privacy Policy
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/nikhil23-Rao/Categories/issues"
        target="_blank"
      >
        Report A Bug
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/nikhil23-Rao/Categories/"
        target="_blank"
      >
        About
      </a>
      <p style={{ color: getAltTextColor() }}> • </p>
      <p style={{ color: getAltTextColor() }}>
        Game Created By: Vinay Rao & Nikhil Rao
      </p>
      <p style={{ color: getAltTextColor() }}> • </p>
      <p style={{ color: getAltTextColor() }}>Version: 1.0.0 (Beta)</p>
      <p style={{ color: getAltTextColor() }}> • </p>
      <a
        style={{ color: getAltTextColor() }}
        href="https://www.instagram.com/vinayrao1061/"
        target="_blank"
      >
        <i className="fa fa-instagram"></i>
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/vinayRao23"
        target="_blank"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://twitter.com/NikhilRao23"
        target="_blank"
      >
        <i className="fa fa-twitter" />
      </a>
    </div>
  );
};
