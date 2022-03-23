import React from "react";
import styles from "../../styles/Game/Board.module.css";
import { Avatar } from "../Profile/Avatar";

interface IProps {
  profileImage: string;
  gamesPlayed: number;
  avgStars: number;
  currentStreak: number;
  maxStreak: number;
}

export const PlayerInfoRightWrap = ({
  profileImage,
  avgStars,
  currentStreak,
  gamesPlayed,
  maxStreak,
}: IProps) => {
  return (
    <>
      <div className={styles.rightWrap}>
        <div className={styles.info}>
          <Avatar
            profileImg={profileImage}
            imgStyle={{ width: 130, height: 130 }}
            onClick={() => {}}
          />
          <p className="divider" style={{ fontSize: 20, textAlign: "center" }}>
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
                  <span>{gamesPlayed}</span>
                  <small>Played</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{avgStars}</span>
                  <small>Average</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{currentStreak}</span>
                  <small>Current Streak</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{maxStreak}</span>
                  <small>Max Streak</small>
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
    </>
  );
};
