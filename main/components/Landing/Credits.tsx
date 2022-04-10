// NextJS Imports
import React from "react";

// Customization Imports
import { getAltTextColor } from "../../utils/customizationsFunctions";

// CSS Imports
import styles from "../../styles/Landing/Credits.module.css";

export const Credits = () => {
  // Return JSX Markup
  return (
    <div className={styles.container}>
      <a
        style={{ color: getAltTextColor() }}
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/nikhil23-Rao/Categories/issues"
        target="_blank"
        rel="noopener noreferrer"
      >
        Report A Bug
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/nikhil23-Rao/Categories/"
        target="_blank"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      >
        <i className="fa fa-instagram"></i>
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://github.com/vinayRao23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-github"></i>
      </a>
      <a
        style={{ color: getAltTextColor() }}
        href="https://twitter.com/NikhilRao23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-twitter" />
      </a>
    </div>
  );
};
