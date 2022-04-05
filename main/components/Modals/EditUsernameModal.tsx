// NextJS Imports
import React, { useEffect, useState } from "react";

// External Imports
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
} from "@chakra-ui/react";
import Check from "@mui/icons-material/Check";

// Customization Imports
import { colorOptions } from "../../data/colorOptions";
import { themeOptions } from "../../data/themeOptions";
import {
  getAltTextColor,
  getBGColor,
  getTextColor,
} from "../../utils/customizationsFunctions";
import { TextField } from "@mui/material";

// Props That SettingsModal Takes
interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const EditUsernameModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const [username, setUsername] = useState(localStorage.getItem("name")!);

  useEffect(() => {
    localStorage.setItem("name", username);
  }, [username]);

  // Render JSX Markup
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"4xl"}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent padding={30} style={{ background: getBGColor() }}>
          <ModalHeader
            style={{ alignSelf: "center", fontSize: 25, color: getTextColor() }}
          >
            Edit Profile
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: getTextColor(),
            }}
          />
          <ModalBody
            alignSelf={"center"}
            style={{ overflowX: "hidden", maxWidth: "80%" }}
          >
            <p
              style={{
                textAlign: "center",
                fontSize: 17,
                color: getAltTextColor(),
                bottom: 20,
                position: "relative",
              }}
            >
              Manage your profile settings. You can edit your username. These
              settings affect all your game accounts on this browser.
            </p>
            <Input
              placeholder="Enter Username..."
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              size="lg"
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
