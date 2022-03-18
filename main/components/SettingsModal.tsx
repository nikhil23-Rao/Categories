import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import Check from "@mui/icons-material/Check";
import React, { useEffect } from "react";
import { colorOptions } from "../data/colorOptions";
import { themeOptions } from "../data/themeOptions";
import {
  getAltTextColor,
  getBGColor,
  getTextColor,
} from "../utils/customizationsFunctions";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const SettingsModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const [checkedTheme, setCheckedTheme] = React.useState({});
  const [checkedColor, setCheckedColor] = React.useState("");

  useEffect(() => {
    const currentTheme = JSON.parse(localStorage.getItem("theme")!);
    themeOptions.forEach((theme) => {
      if (theme.correspondingThemeObject.name === currentTheme.name) {
        setCheckedTheme(theme);
      }
    });
    setCheckedColor(localStorage.getItem("color")!);
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
        <ModalContent padding={30} style={{ background: getBGColor() }}>
          <ModalHeader
            style={{ alignSelf: "center", fontSize: 25, color: getTextColor() }}
          >
            Customize Your View
          </ModalHeader>
          <ModalCloseButton
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              color: getTextColor(),
            }}
          />
          <ModalBody alignSelf={"center"}>
            <p
              style={{
                textAlign: "center",
                fontSize: 17,
                color: getAltTextColor(),
              }}
            >
              Manage your font size, color, and background. These settings
              affect all your game accounts on this browser.
            </p>
            <p className="divider" style={{ color: getAltTextColor() }}>
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
                  <label
                    style={{ color: getTextColor() }}
                    htmlFor="1"
                    data-debt-amount="XS"
                  ></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="2"
                    value="2"
                    required
                  />{" "}
                  <label
                    style={{ color: getTextColor() }}
                    htmlFor="2"
                    data-debt-amount="S"
                  ></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="3"
                    value="3"
                    required
                    defaultChecked
                  />{" "}
                  <label
                    style={{ color: getTextColor() }}
                    htmlFor="3"
                    data-debt-amount="Default"
                  ></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="4"
                    value="4"
                    required
                  />{" "}
                  <label
                    style={{ color: getTextColor() }}
                    htmlFor="4"
                    data-debt-amount="L"
                  ></label>
                  <input
                    type="radio"
                    name="debt-amount"
                    id="5"
                    value="5"
                    required
                  />{" "}
                  <label
                    style={{ color: getTextColor() }}
                    htmlFor="5"
                    data-debt-amount="XL"
                  ></label>
                  <div id="debt-amount-pos"></div>
                </div>
              </form>
            </div>
            <p className="divider" style={{ color: getAltTextColor() }}>
              Color
            </p>
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
              {colorOptions.map((color) => (
                <>
                  <div
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 100,
                      backgroundColor: color.color,
                      marginRight: 40,
                      cursor: "pointer",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                    }}
                    onClick={() => {
                      setCheckedColor(color.color);
                      localStorage.setItem("color", color.color);
                    }}
                  >
                    {checkedColor === color.color && (
                      <Check style={{ color: "#fff" }} />
                    )}
                  </div>
                </>
              ))}
            </div>

            <p className="divider" style={{ color: getAltTextColor() }}>
              Background Theme
            </p>
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
                      localStorage.setItem(
                        "theme",
                        JSON.stringify(theme.correspondingThemeObject)
                      );
                      setCheckedTheme(theme);
                      onClose();
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
        </ModalContent>
      </Modal>
    </>
  );
};
