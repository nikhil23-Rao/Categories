// NextJS Imports
import React from "react";

import styles from "../styles/Game/Board.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Avatar } from "../components/Profile/Avatar";
import PushPinIcon from "@mui/icons-material/PushPin";
import PlayCircle from "@mui/icons-material/PlayCircle";

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
                  isPlaying={false}
                  duration={30}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[30, 15, 10, 0]}
                >
                  {({ remainingTime }) => (
                    <p className={styles.timer}>{remainingTime}</p>
                  )}
                </CountdownCircleTimer>
              </div>
              <div className={styles.playWrap}>
                <div className={styles.label + " divider"}>Start</div>
                <PlayCircle
                  style={{ width: 200, height: 200, cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
          <div className={styles.center}></div>
          <div className={styles.rightWrap}>
            <PushPinIcon
              style={{
                position: "absolute",
                top: 25,
                right: 25,
                color: "gray",
                cursor: "pointer",
              }}
            />
            <div className={styles.info}>
              <Avatar
                profileImg={profileImage}
                imgStyle={{ width: 130, height: 130 }}
                onClick={() => {}}
              />
              <p className="divider" style={{ fontSize: 20 }}>
                Categories Player
              </p>
              <p
                style={{
                  textAlign: "center",
                  marginTop: -20,
                  marginBottom: 50,
                  color: "gray",
                }}
              >
                Your Bio Here.
              </p>
              <div className="actions">
                <div className="follow-info">
                  <h2>
                    <a href="#">
                      <span>10</span>
                      <small>Played</small>
                    </a>
                  </h2>
                  <h2>
                    <a href="#">
                      <span>5</span>
                      <small>Won</small>
                    </a>
                  </h2>
                  <h2>
                    <a href="#">
                      <span>50%</span>
                      <small>Win %</small>
                    </a>
                  </h2>
                  <h2>
                    <a href="#">
                      <span>5</span>
                      <small>Current Streak</small>
                    </a>
                  </h2>
                </div>
                <div className="follow-btn">
                  <button>View Full Profile</button>
                </div>
                <div className="follow-btn" style={{ marginTop: 30 }}>
                  <button>Edit Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daily;
