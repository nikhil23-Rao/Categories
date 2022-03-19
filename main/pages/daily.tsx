// NextJS Imports
import React from "react";
import Head from "next/head";

import styles from "../styles/Game/Board.module.css";
import { Divider } from "@chakra-ui/react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

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
              <div className={styles.timeWrap}>
                <div className={styles.label + " divider"}>Timer</div>
                <CountdownCircleTimer
                  isPlaying
                  duration={30}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[30, 15, 10, 0]}
                >
                  {({ remainingTime }) => (
                    <p style={{ fontSize: 40 }}>{remainingTime}</p>
                  )}
                </CountdownCircleTimer>
              </div>
              <div className={styles.playWrap}>
                <div className={styles.label + " divider"}>Start</div>
              </div>
            </div>
          </div>
          <div className={styles.center}></div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
