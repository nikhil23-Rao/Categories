import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import {
  getAltTextColor,
  getTextColor,
  getBGColor,
  getColor,
} from "../../utils/customizationsFunctions";
import { dailyCategories } from "../../data/dailyCategories";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onClick: () => void;
  timer: [boolean, string];
  submitted: boolean;
}

export const MobileModal = ({
  isOpen,
  onClose,
  onOpen,
  onClick,
  timer,
  submitted,
}: IProps) => {
  const statsObj = JSON.parse(localStorage.getItem("stats")!);
  const todaysStats = statsObj.todaysStats;
  const [daily, setDaily] = useState<{
    inputs: string[];
    letter: string;
    dailyDate: string;
  }>();
  useEffect(() => {
    const date = new Date();
    const today = dailyCategories.filter(
      (d) =>
        d.dailyDate ===
        `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    );

    setDaily(today[0]);
  }, []);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={"full"}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent padding={30} style={{ background: getBGColor() }}>
          <ModalHeader
            style={{ alignSelf: "center", fontSize: 25, color: getTextColor() }}
          >
            Categories
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
            style={{ overflowX: "hidden", width: "100%", height: "100%" }}
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
              Click the start button to play today's category. The timer will
              start automatically when you click the start button.
            </p>
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  color: getTextColor(),
                  fontSize: 20,
                  marginBottom: -10,
                }}
                className="divider"
              >
                Letter: {daily?.letter}
              </p>
              <div
                className="actions"
                style={{
                  width: "100%",
                }}
              >
                {submitted ? (
                  <div className={`follow-btn`}>
                    <button
                      style={{
                        backgroundColor: "lightgreen",
                        fontSize: 22,
                        pointerEvents: "none",
                      }}
                    >
                      Submitted!
                    </button>
                  </div>
                ) : (
                  <div className={`follow-btn`}>
                    <button
                      style={{
                        backgroundColor: getColor(),
                        fontSize: 22,
                      }}
                      onClick={() => {
                        onClick();
                        if (timer[0]) {
                          return;
                        }
                        onClose();
                      }}
                    >
                      {timer[0]
                        ? "Stop"
                        : timer[1] === "0:00"
                        ? "Start"
                        : "Continue"}
                    </button>
                  </div>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{ color: getTextColor(), fontSize: 20 }}
                  className="divider"
                >
                  Timer: {timer[1]}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 30,
                }}
              >
                <a
                  style={{ color: getColor(), fontSize: 20 }}
                  className="divider"
                >
                  Back Home
                </a>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
