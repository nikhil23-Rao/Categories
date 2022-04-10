import React from "react";
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

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const StatsModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const statsObj = JSON.parse(localStorage.getItem("stats")!);
  const todaysStats = statsObj.todaysStats;
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
            Statistics
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
              View Your Stats for Today and All Time Stats Here.
            </p>
            <div className="actions">
              <div className="follow-info">
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {`${todaysStats[0].time.currMin}:${
                        todaysStats[0].time.currSec < 10
                          ? `0${todaysStats[0].time.currSec}`
                          : todaysStats[0].time.currSec
                      }`}
                    </span>
                    <small style={{ color: getTextColor() }}>Time Taken</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {todaysStats[0].stars}
                    </span>
                    <small style={{ color: getTextColor() }}>Stars</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {todaysStats[0].letter}
                    </span>
                    <small style={{ color: getTextColor() }}>Letter</small>
                  </a>
                </h2>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
