// NextJS Imports
import React from "react";
import Head from "next/head";

// Component Imports
import { AnimatedTitle } from "../components/Landing/AnimatedTitle";
import { Button } from "../components/Base/Button";
import { Credits } from "../components/Landing/Credits";
import { Avatar } from "../components/Profile/Avatar";
import { HowToPlayModal } from "../components/Modals/HowToPlayModal";
import { SettingsModal } from "../components/Modals/SettingsModal";

// External Imports
import { Divider, MenuItem, useDisclosure, useToast } from "@chakra-ui/react";
import Settings from "@mui/icons-material/Settings";
import { useRouter } from "next/router";

// Customization Imports
import {
  getBGColor,
  getColor,
  getPrimaryColor,
  getTextColor,
} from "../utils/customizationsFunctions";

// CSS Imports
import styles from "../styles/Landing/Home.module.css";
import Link from "next/link";
import { List } from "../components/Profile/List";
import { EditUsernameModal } from "../components/Modals/EditUsernameModal";
import Help from "@mui/icons-material/Help";
import { useMediaQuery } from "react-responsive";
import Menu from "@mui/icons-material/Menu";

// Props That The Home Component Takes
interface IProps {
  profileImage: string;
  setProfileImg: (profileImg: string) => void;
}

const Home = ({ profileImage, setProfileImg }: IProps) => {
  // Hooks
  const {
    isOpen: settingsModalIsOpen,
    onOpen: settingsModalOnOpen,
    onClose: settingsModalOnClose,
  } = useDisclosure();
  const {
    isOpen: editProfileModalIsOpen,
    onOpen: editProfileModalOnOpen,
    onClose: editProfileModalOnClose,
  } = useDisclosure();
  const {
    isOpen: howToPlayModalIsOpen,
    onOpen: howToPlayModalOnOpen,
    onClose: howToPlayModalOnClose,
  } = useDisclosure();
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();
  const toast = useToast();
  const isPhone = useMediaQuery({ maxWidth: 642 });
  const isTablet = useMediaQuery({ maxWidth: 1353 });
  const isMac = useMediaQuery({ maxWidth: 1500 });

  // Return JSX Markup
  return (
    <>
      <div
        className={styles.container}
        style={{
          background: getBGColor(),
          height: "100vh",
        }}
      >
        <div className={styles.headerContainer}>
          <div className={styles.headerItems}>
            {isPhone || isTablet ? (
              <>
                <Menu
                  style={{
                    color: getColor(),
                    cursor: "pointer",
                    fontSize: 50,
                    position: "absolute",
                    top: 0,
                    right: -50,
                  }}
                  onClick={settingsModalOnOpen}
                />
              </>
            ) : (
              <>
                <HowToPlayModal
                  isOpen={howToPlayModalIsOpen}
                  onClose={howToPlayModalOnClose}
                  onOpen={howToPlayModalOnOpen}
                />
                <SettingsModal
                  isOpen={settingsModalIsOpen}
                  onClose={settingsModalOnClose}
                  onOpen={settingsModalOnOpen}
                />
                <EditUsernameModal
                  isOpen={editProfileModalIsOpen}
                  onClose={editProfileModalOnClose}
                  onOpen={editProfileModalOnOpen}
                />
                <Settings
                  style={{ color: getColor(), cursor: "pointer", fontSize: 30 }}
                  onClick={settingsModalOnOpen}
                />
                <Help
                  style={{ color: getColor(), cursor: "pointer", fontSize: 30 }}
                  onClick={howToPlayModalOnOpen}
                />

                <Avatar
                  profileImg={profileImage}
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                />

                {showMenu && (
                  <List
                    setOpen={editProfileModalOnOpen}
                    setProfileImg={setProfileImg}
                    profileImage={profileImage}
                  />
                )}
              </>
            )}
          </div>
        </div>

        <main
          className={styles.main}
          onClick={() => setShowMenu(false)}
          style={{ overflowY: "scroll" }}
        >
          <h1 className={styles.title} style={{ marginTop: 60 }}>
            <AnimatedTitle />
          </h1>

          <p
            className={styles.description}
            style={{
              color: getPrimaryColor(),
              fontSize: isPhone ? 20 : isTablet ? 30 : "",
            }}
          >
            An Absolute Entertainment.
          </p>

          <div
            className="actions"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Link href={"/daily"}>
              <a href="">
                <div
                  className="follow-btn"
                  style={{
                    width: "100%",
                    minWidth: 450,
                    zoom: isPhone ? 0.8 : isMac ? 0.9 : 1.2,
                  }}
                >
                  <button style={{ backgroundColor: getColor(), fontSize: 23 }}>
                    Daily Category
                  </button>
                </div>
              </a>
            </Link>
            <div
              className="follow-btn"
              style={{
                width: "100%",
                minWidth: 450,
                zoom: isPhone ? 0.8 : isMac ? 0.9 : 1.2,
                marginTop: 30,
              }}
            >
              <button
                onClick={() => {
                  toast({
                    title: "Game Mode Coming Soon!",
                    status: "info",
                    duration: 3000,
                    position: "bottom-right",
                  });
                }}
                style={{ backgroundColor: getColor(), fontSize: 23 }}
              >
                Multiplayer
              </button>
            </div>
            <div
              className="follow-btn"
              style={{
                width: "100%",
                minWidth: 450,
                zoom: isPhone ? 0.8 : isMac ? 0.9 : 1.2,
                marginTop: 30,
              }}
            >
              <button style={{ backgroundColor: getColor(), fontSize: 23 }}>
                About
              </button>
            </div>
          </div>
        </main>

        {!isPhone && (
          <footer style={{ marginTop: isMac ? -35 : -10 }}>
            <Credits />
          </footer>
        )}
      </div>
    </>
  );
};

export default Home;
