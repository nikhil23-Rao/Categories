// NextJS Imports
import React from "react";

import styles from "../styles/Game/Board.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Avatar } from "../components/Profile/Avatar";
import PushPinIcon from "@mui/icons-material/PushPin";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import Settings from "@mui/icons-material/Settings";
import BarChart from "@mui/icons-material/BarChart";
import Home from "@mui/icons-material/Home";
import Help from "@mui/icons-material/Help";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { GameInput } from "../components/Game/GameInput";

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
                <div id="container">
                  <div className="circle" id="box">
                    <div id="btn-play">
                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div id="btn-reset">
                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div id="btn-pause">
                      <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                    <div
                      className="circle"
                      id="glass"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                      }}
                    >
                      <div id="digital">00:00</div>
                    </div>
                  </div>
                  <div id="shadow"></div>
                </div>
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
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  left: 45,
                }}
              >
                <Home style={{ fontSize: 30 }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  left: 95,
                }}
              >
                <AccountCircle style={{ fontSize: 30 }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  right: 45,
                }}
              >
                <Settings style={{ fontSize: 30 }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  right: 85,
                }}
              >
                <BarChart style={{ fontSize: 30 }} />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 29,
                  right: 125,
                }}
              >
                <Help style={{ fontSize: 30 }} />
              </div>
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  position: "relative",
                  bottom: 2,
                }}
              >
                <h1>Categories</h1>
              </div>
              <div className={styles.gameContainer}>
                <GameInput numberOfTiles={7} title="Sport" />
              </div>
            </div>
          </div>
          <div className={styles.rightWrap}>
            <div className={styles.info}>
              <Avatar
                profileImg={profileImage}
                imgStyle={{ width: 130, height: 130 }}
                onClick={() => {}}
              />
              <p
                className="divider"
                style={{ fontSize: 20, textAlign: "center" }}
              >
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
