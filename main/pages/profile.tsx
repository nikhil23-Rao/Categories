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
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="profile-card">
        <div className="card-header">
          <div className="pic">
            <img
              src="https://lh3.googleusercontent.com/ogw/ADea4I70PeEcDK4HGIqjH7bes64KQIL7TIq5lpPdBlIJJQ=s192-c-mo"
              alt=""
            />
          </div>
          <div className="name">Sophie Hickey</div>
          <div className="desc">Frontend Developer </div>
          <div className="location">
            <i className="fas fa-map-marker-alt"></i> Dublin
          </div>
          <div className="icons">
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-github"></a>
          </div>
          <a href="#" className="contact-btn">
            Contact Me
          </a>
        </div>
        <div className="card-footer">
          <div className="numbers">
            <div className="item">
              <span>80</span>
              Posts
            </div>
            <div className="border"></div>
            <div className="item">
              <span>208</span>
              Following
            </div>
            <div className="border"></div>
            <div className="item">
              <span>198</span>
              Followers
            </div>
          </div>
          <div className="instagram-account">@irishgirldeveloper</div>
        </div>
      </div>
    </div>
  );
};

export default profile;
