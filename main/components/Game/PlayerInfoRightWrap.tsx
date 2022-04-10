import React from "react";
import styles from "../../styles/Game/Board.module.css";
import { getColor, getTextColor } from "../../utils/customizationsFunctions";
import { Avatar } from "../Profile/Avatar";
import PushPin from "@mui/icons-material/PushPin";

interface IProps {
  profileImage: string;
  gamesPlayed: number;
  avgStars: number;
  avgTime: string;
  bestTime: string;
}

export const PlayerInfoRightWrap = ({
  profileImage,
  avgStars,
  avgTime,
  gamesPlayed,
  bestTime,
}: IProps) => {
  return (
    <>
      <div className={styles.rightWrap}>
        <PushPin
          style={{
            top: 30,
            position: "absolute",
            right: 30,
            color: getColor(),
            cursor: "pointer",
          }}
        />
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
                  <span style={{ color: getColor() }}>{gamesPlayed}</span>
                  <small style={{ color: getTextColor() }}>Played</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span style={{ color: getColor() }}>{avgStars}</span>
                  <small style={{ color: getTextColor() }}>Avg. Stars</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span style={{ color: getColor() }}>{avgTime}</span>
                  <small style={{ color: getTextColor() }}>Avg. Time</small>
                </a>
              </h2>
              <h2>
                <a href="#">
                  <span style={{ color: getColor() }}>{bestTime}</span>
                  <small style={{ color: getTextColor() }}>Best Time</small>
                </a>
              </h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 30,
              }}
            >
              <div className="follow-btn">
                <button style={{ backgroundColor: getColor() }}>
                  Edit Profile
                </button>
              </div>
              <div
                className="follow-btn"
                style={{
                  marginTop: 30,
                }}
              >
                <button style={{ backgroundColor: getColor() }}>
                  Share All-Time Stats
                </button>
              </div>
              <div
                className="follow-btn"
                style={{
                  marginTop: 30,
                }}
              >
                <button style={{ backgroundColor: getColor() }}>
                  Share Game Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
