import React from "react";
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

export const NavItems = () => {
  const router = useRouter();
  const isPhone = useMediaQuery({ maxWidth: 480 });
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
  const { onOpen, onClose, isOpen } = useDisclosure();
  if (isPhone) {
    return (
      <>
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
          <Menu style={{ fontSize: 30, color: getColor() }} />
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
