// NextJS Imports
import React from "react";

import styles from "../styles/Game/Board.module.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { GameInput } from "../components/Game/GameInput";
import { NavItems } from "../components/Game/NavItems";
import { PlayerInfoRightWrap } from "../components/Game/PlayerInfoRightWrap";
import { Timer } from "../components/Game/Timer";

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
                <Timer currentTime={"00:00"} />
              </div>
              <div className={styles.playWrap}>
                <div className={styles.label + " divider"}>Start</div>
                <PlayCircle
                  style={{ width: 200, height: 200, cursor: "pointer" }}
                />
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
