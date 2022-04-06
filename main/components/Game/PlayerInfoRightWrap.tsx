import React from "react";
import styles from "../../styles/Game/Board.module.css";
import { getTextColor } from "../../utils/customizationsFunctions";
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
          <p
            className="divider"
            style={{ fontSize: 20, textAlign: "center", color: getTextColor() }}
          >
            {localStorage.getItem("name")!}
          </p>
          <p
            style={{
              textAlign: "center",
              marginTop: -20,
              marginBottom: 50,
              color: getTextColor(),
            }}
          >
            {localStorage.getItem("bio")!}
          </p>
          <div className="actions">
            <div className="follow-info">
              <h2>
                <a href="#">
                  <span>{gamesPlayed}</span>
                  <small style={{ color: getTextColor() }}>Played</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{avgStars}</span>
                  <small style={{ color: getTextColor() }}>Average</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{currentStreak}</span>
                  <small style={{ color: getTextColor() }}>
                    Current Streak
                  </small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span>{maxStreak}</span>
                  <small style={{ color: getTextColor() }}>Max Streak</small>
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
