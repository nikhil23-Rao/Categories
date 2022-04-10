import { createAvatar } from "@dicebear/avatars";
import React from "react";
import { getBGColor, getTextColor } from "../../utils/customizationsFunctions";
import styles from "../../styles/Landing/Home.module.css";
import * as style from "@dicebear/avatars-identicon-sprites";
import { Avatar } from "./Avatar";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import AddCircle from "@mui/icons-material/AddCircle";
import AddPhotoAlternate from "@mui/icons-material/AddPhotoAlternate";
import BarChart from "@mui/icons-material/BarChart";
import Share from "@mui/icons-material/Share";
import IosShareIcon from "@mui/icons-material/IosShare";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { StatsModal } from "../Modals/StatsModal";

interface IProps {
  profileImage: string;
  setProfileImg: (profileImg: string) => void;
  setOpen: (open: boolean) => void;
}

export const List = ({ profileImage, setProfileImg, setOpen }: IProps) => {
  const toast = useToast();
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <div className={styles.dropdown} style={{ zIndex: 2000 }}>
      <Avatar
        profileImg={profileImage}
        onClick={() => {}}
        imgStyle={{ marginTop: 40, zoom: 1.4 }}
      />
      <p
        className="divider"
        style={{
          position: "relative",
          bottom: 15,
          zoom: 1.1,
        }}
      >
        {localStorage.getItem("name")!}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #eaeaea",
            borderBottom: "1px solid #eaeaea",
            width: "100%",
          }}
          onClick={() => setOpen(true)}
        >
          <EmojiEmotions
            style={{
              fontSize: 26,
              top: 15.2,
              position: "relative",
              left: 10,
            }}
          />{" "}
          <p style={{ marginLeft: 20 }}>Edit Profile</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #eaeaea",
            borderBottom: "1px solid #eaeaea",
            width: 280,
          }}
          onClick={() => {
            localStorage.setItem(
              "pfpid",
              Math.floor(Math.random() * 200).toString()
            );
            let svg = createAvatar(style, {
              seed: localStorage.getItem("pfpid")!!,
              dataUri: true,
            });
            setProfileImg(svg);
          }}
        >
          <AddCircle
            style={{
              fontSize: 26,
              top: 15.2,
              position: "relative",
              left: 10,
            }}
          />{" "}
          <p style={{ marginLeft: 20 }}>Generate New Pattern</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #eaeaea",
            borderBottom: "1px solid #eaeaea",
            width: 280,
          }}
          onClick={() => onOpen()}
        >
          <BarChart
            style={{
              fontSize: 26,
              top: 15.2,
              position: "relative",
              left: 10,
            }}
          />{" "}
          <p style={{ marginLeft: 20 }}>View Stats</p>
          <StatsModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #eaeaea",
            borderBottom: "1px solid #eaeaea",
            width: 280,
          }}
          onClick={() => {
            const statsObj = JSON.parse(localStorage.getItem("stats")!);
            navigator.clipboard.writeText(`@${localStorage.getItem(
              "name"
            )!}'s All Time Stats:
Total Games Played: ${statsObj.gamesPlayed}
Average Time Take: ${statsObj.averageTime}
Average Number Of Stars: ${statsObj.averageStars}
Fastest Time: ${statsObj.bestTime}
https://thecategoriesgame.vercel.app/`);
            toast({
              title: "Link Copied To Clipboard!",
              status: "info",
              duration: 3000,
              position: "bottom-right",
            });
          }}
        >
          <IosShareIcon
            style={{
              fontSize: 26,
              top: 15.2,
              position: "relative",
              left: 10,
            }}
          />{" "}
          <p style={{ marginLeft: 20 }}>Share All Time Stats</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #eaeaea",
            borderBottom: "1px solid #eaeaea",
            width: 280,
          }}
          onClick={() => {
            navigator.clipboard.writeText(
              `Check Out Categories! Can you beat my stats? 
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
https://nikhilrao.github.io/categories/`
            );
            toast({
              title: "Link Copied To Clipboard 🚀 🚀 🚀 ",
              status: "info",
              duration: 3000,
              position: "bottom-right",
            });
          }}
        >
          <Share
            style={{
              fontSize: 26,
              top: 15.2,
              position: "relative",
              left: 10,
            }}
          />{" "}
          <p style={{ marginLeft: 20 }}>Share Game Link</p>
        </div>
      </div>
    </div>
  );
};
