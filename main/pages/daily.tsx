// NextJS Imports
import React from "react";
import Head from "next/head";

import styles from "../styles/Game/Board.module.css";
import { Divider } from "@chakra-ui/react";

// Props That The Home Component Takes
interface IProps {
  profileImage: string;
}

const Daily = ({ profileImage }: IProps) => {
  // Return JSX Markup
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.game}>
          <div className={styles.leftWrap}>
            <div className={styles.letterWrap}>
              <div className={styles.label + " divider"}>Letter Of The Day</div>
              <div className={styles.letter}>A</div>
            </div>
            <div className={styles.gameInfoWrap}>
              <div className={styles.timeWrap}>hello</div>
              <div className={styles.playWrap}>hello</div>
            </div>
          </div>
          <div className={styles.center}></div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
