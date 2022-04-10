import React from "react";
import styles from "../../styles/Game/Board.module.css";
import { getColor, getTextColor } from "../../utils/customizationsFunctions";
import { Avatar } from "../Profile/Avatar";
import PushPin from "@mui/icons-material/PushPin";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { EditUsernameModal } from "../Modals/EditUsernameModal";

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
  const toast = useToast();
  const {
    isOpen: editUsernameModalIsOpen,
    onClose: editUsernameModalOnClose,
    onOpen: editUsernameModalOnOpen,
  } = useDisclosure();
  return (
    <>
      <EditUsernameModal
        isOpen={editUsernameModalIsOpen}
        onClose={editUsernameModalOnClose}
        onOpen={editUsernameModalOnOpen}
      />
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
                <button
                  onClick={() => {
                    editUsernameModalOnOpen();
                  }}
                  style={{ backgroundColor: getColor() }}
                >
                  Edit Profile
                </button>
              </div>
              <div
                className="follow-btn"
                style={{
                  marginTop: 30,
                }}
              >
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`
                    @Nikhil Rao's All Time Stats:
                    Total Games Played: 20,
                    Average Time Take: 1:06,
                    Average Number Of Stars: 3.74,
                    Fastest Time: 0:26,
                              `);
                    toast({
                      title: "Link Copied To Clipboard 🚀 🚀 🚀 ",
                      status: "info",
                      duration: 3000,
                      position: "bottom-right",
                    });
                  }}
                  style={{ backgroundColor: getColor() }}
                >
                  Share All-Time Stats
                </button>
              </div>
              <div
                className="follow-btn"
                style={{
                  marginTop: 30,
                }}
              >
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`
                   Check Out Categories! Can you beat my stats? 
                   ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
                   https://nikhilrao.github.io/categories/
                           `);
                    toast({
                      title: "Link Copied To Clipboard 🚀 🚀 🚀 ",
                      status: "info",
                      duration: 3000,
                      position: "bottom-right",
                    });
                  }}
                  style={{ backgroundColor: getColor() }}
                >
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
