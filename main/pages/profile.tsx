import { useRouter } from "next/router";
import React from "react";
import { Avatar } from "../components/Profile/Avatar";
import styles from "../styles/Profile/Profile.module.css";
interface IProps {
  profileImage: string;
}

const profile = ({ profileImage }: IProps) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.banner} />
        <div style={{ alignSelf: "center", position: "relative", top: 30 }}>
          <Avatar profileImg={profileImage} onClick={() => router.push("/")} />
        </div>
        <div className={styles.menu}>
          <div className={styles.opener}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <h2
          className={styles.name}
          style={{ position: "relative", bottom: 35 }}
        >
          Vinay Rao
        </h2>
        <div
          className={styles.title}
          style={{ position: "relative", bottom: 35 }}
        >
          Stats
        </div>
        <div className={styles.actions}>
          <div className={styles.followInfo}>
            <h2>
              <a href="#" style={{ position: "relative", bottom: 35 }}>
                <span>12</span>
                <small>Wins</small>
              </a>
            </h2>
            <h2>
              <a href="#" style={{ position: "relative", bottom: 35 }}>
                <span>1000</span>
                <small>Losses</small>
              </a>
            </h2>
          </div>
          <div
            className={styles.followBtn}
            style={{ position: "relative", bottom: 35 }}
          >
            <button>Follow</button>
          </div>
        </div>
        <div
          className={styles.desc}
          style={{ position: "relative", bottom: 35, alignSelf: "center" }}
        >
          Vinay is a trash categories player.
        </div>
      </div>
    </div>
  );
};

export default profile;
