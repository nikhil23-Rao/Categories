import React, { useEffect, useState } from "react";
import Settings from "@mui/icons-material/Settings";
import BarChart from "@mui/icons-material/BarChart";
import Home from "@mui/icons-material/Home";
import Help from "@mui/icons-material/Help";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { getColor, getTextColor } from "../../utils/customizationsFunctions";
import { useRouter } from "next/router";
import { StatsModal } from "../Modals/StatsModal";
import { useMediaQuery } from "react-responsive";
import Menu from "@mui/icons-material/Menu";
import { EditUsernameModal } from "../Modals/EditUsernameModal";
import { SettingsModal } from "../Modals/SettingsModal";
import { useDisclosure } from "@chakra-ui/react";
import { MobileModal } from "../Modals/MobileModal";
import { HowToPlayModal } from "../Modals/HowToPlayModal";

interface IProps {
  onClick: () => void;
  timer: [boolean, string];
  submitted: boolean;
}

export const NavItems = ({ onClick, timer, submitted }: IProps) => {
  const router = useRouter();
  const isPhone = useMediaQuery({ maxWidth: 642 });
  const isTablet = useMediaQuery({ maxWidth: 1353 });
  const {
    isOpen: editUsernameModalIsOpen,
    onClose: editUsernameModalOnClose,
    onOpen: editUsernameModalOnOpen,
  } = useDisclosure();
  const {
    isOpen: settingsModalIsOpen,
    onClose: settingsModalOnClose,
    onOpen: settingsModalOnOpen,
  } = useDisclosure();
  const {
    isOpen: mobileModalIsOpen,
    onClose: mobileModalOnClose,
    onOpen: mobileModalOnOpen,
  } = useDisclosure();
  const {
    isOpen: howToPlayModalIsOpen,
    onClose: howToPlayModalOnClose,
    onOpen: howToPlayModalOnOpen,
  } = useDisclosure();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [firstTime, setFirstTime] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("firstTime") === "true") {
      setFirstTime(true);
      localStorage.setItem("firstTime", "false");
    }
  }, []);

  useEffect(() => {
    if (firstTime) {
      howToPlayModalOnOpen();
    }
  }, [firstTime]);
  if (isPhone) {
    return (
      <>
        <MobileModal
          isOpen={mobileModalIsOpen}
          onClose={mobileModalOnClose}
          onOpen={mobileModalOnOpen}
          onClick={onClick}
          timer={timer}
          submitted={submitted}
        />
        <div
          style={{
            position: "absolute",
            top: 29,
            left: 45,
            cursor: "pointer",
            zIndex: 200,
          }}
          onClick={mobileModalOnOpen}
        >
          <Menu
            onClick={mobileModalOnOpen}
            style={{ fontSize: 30, color: getColor() }}
          />
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: "relative",
            bottom: 4,
          }}
        >
          <h1 style={{ color: getTextColor() }}>Categories</h1>
        </div>{" "}
      </>
    );
  }
  return (
    <>
      <EditUsernameModal
        isOpen={editUsernameModalIsOpen}
        onClose={editUsernameModalOnClose}
        onOpen={editUsernameModalOnOpen}
      />
      <SettingsModal
        isOpen={settingsModalIsOpen}
        onClose={settingsModalOnClose}
        onOpen={settingsModalOnOpen}
      />
      <MobileModal
        isOpen={mobileModalIsOpen}
        onClose={mobileModalOnClose}
        onOpen={mobileModalOnOpen}
        onClick={onClick}
        timer={timer}
        submitted={submitted}
      />
      <HowToPlayModal
        isOpen={howToPlayModalIsOpen}
        onClose={howToPlayModalOnClose}
        onOpen={howToPlayModalOnOpen}
      />
      {isTablet && (
        <div
          style={{
            position: "absolute",
            top: 29,
            left: 145,
            cursor: "pointer",
            zIndex: 200,
          }}
          onClick={mobileModalOnOpen}
        >
          <Menu
            onClick={mobileModalOnOpen}
            style={{ fontSize: 30, color: getColor() }}
          />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 45,
          cursor: "pointer",
          zIndex: 200,
        }}
        onClick={() => router.push("/")}
      >
        <Home style={{ fontSize: 30, color: getColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 95,
          zIndex: 200,
          cursor: "pointer",
        }}
        onClick={editUsernameModalOnOpen}
      >
        <AccountCircle style={{ fontSize: 30, color: getColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 200,
          cursor: "pointer",
          top: 29,
          right: 45,
        }}
        onClick={settingsModalOnOpen}
      >
        <Settings style={{ fontSize: 30, color: getColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 200,
          cursor: "pointer",
          top: 29,
          right: 85,
        }}
      >
        <BarChart
          style={{ fontSize: 30, color: getColor() }}
          onClick={() => onOpen()}
        />
        <StatsModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      </div>
      <div
        style={{
          position: "absolute",
          zIndex: 200,
          cursor: "pointer",
          top: 29,
          right: 125,
        }}
        onClick={howToPlayModalOnOpen}
      >
        <Help style={{ fontSize: 30, color: getColor() }} />
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
        <h1 style={{ color: getTextColor() }}>Categories</h1>
      </div>
    </>
  );
};
