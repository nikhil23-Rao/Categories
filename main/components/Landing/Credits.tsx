// NextJS Imports
import React from "react";

// Customization Imports
import { getAltTextColor, getColor } from "../../utils/customizationsFunctions";

// CSS Imports
import styles from "../../styles/Landing/Credits.module.css";

export const Credits = () => {
  // Return JSX Markup
  return (
    <div className={styles.container} style={{ backgroundColor: getColor() }}>
      <div>
        <p>Game Created By: Vinay Rao & Nikhil Rao</p>
        <p style={{ flexDirection: "row" }}>
          <i
            className="fa fa-envelope"
            onClick={() => {
              window.open(
                "mailto:nikhil23.rao@gmail.com;vinay23.rao@gmail.com",
                "_blank"
              );
            }}
          ></i>
          <i
            className="fa fa-instagram"
            onClick={() => {
              window.open("https://instagram.com/vinayrao1061", "_blank");
            }}
          ></i>
          <i
            className="fa fa-twitter"
            onClick={() => {
              window.open("https://twitter.com/NikhilRao23", "_blank");
            }}
          ></i>
          <i> • </i>
          <i
            className="fa fa-bug"
            onClick={() => {
              window.open(
                "mailto:nikhil23.rao@gmail.com;vinay23.rao@gmail.com",
                "_blank"
              );
            }}
          ></i>
          <i className="fa fa-copy" onClick={() => {}}></i>
          <i
            className="fa fa-question"
            onClick={() => {
              window.open(
                "mailto:nikhil23.rao@gmail.com;vinay23.rao@gmail.com",
                "_blank"
              );
            }}
          ></i>
        </p>
      </div>
    </div>
  );
};
