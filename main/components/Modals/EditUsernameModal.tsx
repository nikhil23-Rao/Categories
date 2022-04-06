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
  Textarea,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import Check from "@mui/icons-material/Check";

// Customization Imports
import { colorOptions } from "../../data/colorOptions";
import { themeOptions } from "../../data/themeOptions";
import {
  getAltTextColor,
  getBGColor,
  getColor,
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
  const [bio, setBio] = useState(localStorage.getItem("bio")!);

  // useEffect(() => {
  //   localStorage.setItem("name", username);
  //   localStorage.setItem("bio", bio);
  // }, [username, bio]);

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
              color={getTextColor()}
              onChange={(e) => setUsername(e.currentTarget.value)}
              size="lg"
            />
            <Textarea
              placeholder="Enter Bio..."
              value={bio}
              fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
              style={{ marginTop: 30 }}
              color={getTextColor()}
              resize="none"
              onChange={(e) => setBio(e.currentTarget.value)}
              size="lg"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                localStorage.setItem("name", username)!;
                localStorage.setItem("bio", bio)!;
                onClose();
              }}
              disabled={!username || !bio ? true : false}
              backgroundColor={getColor()}
              boxShadow="none"
              _hover={{ backgroundColor: getColor() }}
              cursor="pointer"
              border="none"
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
