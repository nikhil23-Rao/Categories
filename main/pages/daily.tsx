// NextJS Imports
import React, { useEffect, useState } from "react";

import styles from "../styles/Game/Board.module.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { GameInput } from "../components/Game/GameInput";
import { NavItems } from "../components/Game/NavItems";
import { PlayerInfoRightWrap } from "../components/Game/PlayerInfoRightWrap";
import { Timer } from "../components/Game/Timer";
import PauseCircle from "@mui/icons-material/PauseCircle";
import { getLabelData } from "../utils/getLabelData";
import faker from "@faker-js/faker";

// Props That The Home Component Takes
interface IProps {
  profileImage: string;
}

const Daily = ({ profileImage }: IProps) => {
  const [currSec, setCurrSec] = useState(0);
  const [currMin, setCurrMin] = useState(0);
  const [timerIsActive, setTimerIsActive] = useState(false);

  useEffect(() => {
    if (timerIsActive) {
      const intervalId = setInterval(function () {
        if (currSec === 59) {
          setCurrSec(0);
          setCurrMin(currMin + 1);
        } else setCurrSec(currSec + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timerIsActive, currMin, currSec]);

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
                <Timer currentMin={currMin} currentSecond={currSec} />
              </div>
              <div className={styles.playWrap}>
                <div className={styles.label + " divider"}>
                  {getLabelData(timerIsActive, currSec, currMin)}
                </div>
                {timerIsActive === false ? (
                  <PlayCircle
                    style={{ width: 200, height: 200, cursor: "pointer" }}
                    onClick={() => setTimerIsActive(true)}
                  />
                ) : (
                  <PauseCircle
                    style={{ width: 200, height: 200, cursor: "pointer" }}
                    onClick={() => setTimerIsActive(false)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.center}>
            <div
              style={{
                borderBottom: "3px solid #fafafa",
                height: 80,
                width: "100%",
              }}
            >
              <NavItems />
              <div className={styles.gameContainer}>
                <GameInput numberOfTiles={7} title="Sport" />
                <GameInput numberOfTiles={7} title="poop" />
              </div>
            </div>
          </div>
          <PlayerInfoRightWrap
            avgStars={3.74}
            currentStreak={20}
            gamesPlayed={30}
            maxStreak={20}
            profileImage={profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Daily;
