import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useToast,
} from "@chakra-ui/react";
import {
  getAltTextColor,
  getTextColor,
  getBGColor,
  getColor,
} from "../../utils/customizationsFunctions";
import { dailyCategories } from "../../data/dailyCategories";
import { getNumberOfStars } from "../../utils/getNumberOfStars";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const StatsModal = ({ isOpen, onClose, onOpen }: IProps) => {
  const submitted = JSON.parse(localStorage.getItem("submitted")!);
  const toast = useToast();
  const name = localStorage.getItem("name")!;
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
                      {todaysStats[0].letter !== daily?.letter
                        ? "0:00"
                        : `${todaysStats[0].time.currMin}:${
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
                      {todaysStats[0].letter !== daily?.letter
                        ? 0
                        : todaysStats[0].stars}
                    </span>
                    <small style={{ color: getTextColor() }}>Stars</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {todaysStats[0].letter !== daily?.letter
                        ? daily?.letter
                        : todaysStats[0].letter}
                    </span>
                    <small style={{ color: getTextColor() }}>Letter</small>
                  </a>
                </h2>
              </div>
              <div
                style={{
                  borderBottom: `2px solid ${getAltTextColor()}`,
                  width: 400,
                }}
              />
            </div>
            <ModalHeader
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                fontSize: 22,
                color: getTextColor(),
              }}
            >
              All Time Statistics
            </ModalHeader>
            <div className="actions">
              <div className="follow-info">
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {statsObj.gamesPlayed}
                    </span>
                    <small style={{ color: getTextColor() }}>Played</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {statsObj.averageStars}
                    </span>
                    <small style={{ color: getTextColor() }}>Avg. Stars</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {statsObj.averageTime}
                    </span>
                    <small style={{ color: getTextColor() }}>Avg. Time</small>
                  </a>
                </h2>
                <h2>
                  <a href="#">
                    <span style={{ color: getColor() }}>
                      {statsObj.bestTime}
                    </span>
                    <small style={{ color: getTextColor() }}>Best Time</small>
                  </a>
                </h2>
              </div>
              {submitted ? (
                <div className="follow-btn">
                  <Button
                    style={{
                      backgroundColor: getColor(),
                      width: 300,
                      marginTop: 10,
                      padding: 25,
                    }}
                    onClick={() => {
                      navigator.clipboard.writeText(`@${name}'s Stats for Today:
Time Taken: ${todaysStats[0].time.currMin}:${
                        todaysStats[0].time.currSec < 10
                          ? `0${todaysStats[0].time.currSec}`
                          : todaysStats[0].time.currSec
                      }
Stars: ${getNumberOfStars(todaysStats[0].stars)}
Letter: ${todaysStats[0].letter}
https://thecategoriesgame.vercel.app`);
                      toast({
                        title: "Link Copied To Clipboard!",
                        status: "info",
                        duration: 3000,
                        position: "bottom-right",
                      });
                    }}
                  >
                    Share Today's Stats!
                  </Button>
                </div>
              ) : (
                ""
              )}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
