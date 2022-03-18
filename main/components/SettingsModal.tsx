import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { themeOptions } from "../data/themeOptions";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const SettingsModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const [checkedTheme, setCheckedTheme] = React.useState({});

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("theme")!);
    themeOptions.forEach((theme) => {
      if (theme.correspondingThemeObject.name === currentTheme.name) {
        setCheckedTheme(theme);
      }
    });
  }, [isOpen]);

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
        <ModalContent padding={30}>
          <ModalHeader style={{ alignSelf: "center", fontSize: 25 }}>
            Customize Your View
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          />
          <ModalBody alignSelf={"center"}>
            <p style={{ textAlign: "center", fontSize: 17, color: "gray" }}>
              Manage your font size, color, and background. These settings
              affect all your game accounts on this browser.
            </p>
            <p className="divider" style={{ alignSelf: "center" }}>
              Font Size
            </p>
            <div id="form-wrapper" style={{ alignSelf: "flex-start" }}>
              <form action="/p/quote.php" method="GET">
                <div id="debt-amount-slider">
                  <input
                    type="radio"
                    name="debt-amount"
                    id="1"
                    value="1"
                    required
                  />{" "}
                  <label htmlFor="1" data-debt-amount="XS"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="2"
                    value="2"
                    required
                  />{" "}
                  <label htmlFor="2" data-debt-amount="S"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="3"
                    value="3"
                    required
                    defaultChecked
                  />{" "}
                  <label htmlFor="3" data-debt-amount="Default"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="4"
                    value="4"
                    required
                  />{" "}
                  <label htmlFor="4" data-debt-amount="L"></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="5"
                    value="5"
                    required
                  />{" "}
                  <label htmlFor="5" data-debt-amount="XL"></label>
                  <div id="debt-amount-pos"></div>
                </div>
              </form>
            </div>
            <p className="divider">Color</p>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 33,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#1D9AF1",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#FED500",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#F91880",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#7957FF",
                  marginRight: 40,
                }}
              />
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: "#FE7A01",
                  marginRight: 40,
                }}
              />
            </div>

            <p className="divider">Background Theme</p>
            <div
              className="grid"
              style={{ paddingLeft: 20, position: "relative", top: -20 }}
            >
              {themeOptions.map((theme) => (
                <div className="inputGroup" style={{ marginTop: 30 }}>
                  <input
                    id={theme.name}
                    name={theme.name}
                    checked={checkedTheme === theme}
                    onClick={() => {
                      setCheckedTheme(theme);
                      localStorage.setItem(
                        "theme",
                        JSON.stringify(theme.correspondingThemeObject)
                      );
                    }}
                    type="checkbox"
                  />
                  <label
                    htmlFor={theme.name}
                    style={{
                      color: theme.color,
                      border: theme.border,
                      background: theme.background,
                    }}
                  >
                    {theme.name}
                  </label>
                </div>
              ))}
            </div>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
