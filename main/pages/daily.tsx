// NextJS Imports
import React, { useEffect, useState } from "react";

import styles from "../styles/Game/Board.module.css";
import PlayCircle from "@mui/icons-material/PlayCircle";
import { GameInput } from "../components/Game/GameInput";
import { NavItems } from "../components/Game/NavItems";
import { PlayerInfoRightWrap } from "../components/Game/PlayerInfoRightWrap";
import { Timer } from "../components/Game/Timer";
import PauseCircle from "@mui/icons-material/PauseCircle";
import { getLabelData } from "../utils/getLabelData";
import { useDisclosure } from "@chakra-ui/react";
import { dailyCategories } from "../data/dailyCategories";
import {
  getAltTextColor,
  getBGColor,
  getColor,
  getTextColor,
} from "../utils/customizationsFunctions";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import { calculateStars } from "../utils/calculateStars";
import { calculateAverageTime } from "../utils/calculateAverageTime";
import { calculateBestTime } from "../utils/calculateBestTime";
import { roundToHundred } from "../utils/roundHundredth";
import { StatsModal } from "../components/Modals/StatsModal";

// Props That The Home Component Takes
interface IProps {
  profileImage: string;
}

const Daily = ({ profileImage }: IProps) => {
  const [allTimeSeconds, setAllTimeSeconds] = useState(
    localStorage.getItem("savedGameData")
      ? JSON.parse(localStorage.getItem("savedGameData")!).allTimeSeconds
      : 0
  );
  const { width, height } = useWindowSize();
  const [hidden, setHidden] = useState(true);
  const [submitted, setSubmitted] = useState(
    localStorage.getItem("submitted") === "true"
  );
  const [currSec, setCurrSec] = useState(
    localStorage.getItem("savedGameData")
      ? JSON.parse(localStorage.getItem("savedGameData")!).currSec
      : 0
  );
  const [currMin, setCurrMin] = useState(
    localStorage.getItem("savedGameData")
      ? JSON.parse(localStorage.getItem("savedGameData")!).currMin
      : 0
  );
  const [pausesLeft, setPausesLeft] = useState(3);
  const [timerIsActive, setTimerIsActive] = useState(false);
  const [daily, setDaily] = useState<{
    inputs: string[];
    letter: string;
    dailyDate: string;
  }>();
  const [inputs, setInputs] = useState<
    {
      name: string;
      value: string;
      id: number;
    }[]
  >(
    localStorage.getItem("savedGameData")
      ? JSON.parse(localStorage.getItem("savedGameData")!).inputs
      : []
  );
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    if (timerIsActive) {
      const intervalId = setInterval(function () {
        setAllTimeSeconds(allTimeSeconds + 1);
        if (currSec === 59) {
          setCurrSec(0);
          setCurrMin(currMin + 1);
        } else setCurrSec(currSec + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timerIsActive, currMin, currSec]);

  useEffect(() => {
    const date = new Date();
    const today = dailyCategories.filter(
      (d) =>
        d.dailyDate ===
        `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    );

    setDaily(today[0]);
  }, []);

  useEffect(() => {
    if (daily && inputs.length === 0) {
      const inputs = daily.inputs.map((item, idx) => {
        return {
          name: item,
          value: "",
          id: idx,
        };
      });
      setInputs(inputs);
    }
  }, [daily?.inputs]);

  useEffect(() => {
    if (submitted) {
      onOpen();
    }
  }, [submitted]);

  useEffect(() => {
    if (!localStorage.getItem("savedGameData")) {
      localStorage.setItem(
        "savedGameData",
        JSON.stringify({
          inputs,
          currMin,
          currSec,
          date: daily?.dailyDate,
          allTimeSeconds,
        })
      );
    }
  }, [daily]);

  useEffect(() => {
    if (localStorage.getItem("savedGameData") && daily) {
      const savedGameData = JSON.parse(localStorage.getItem("savedGameData")!);
      if (savedGameData.date !== daily?.dailyDate) {
        const inputs = daily.inputs.map((item, idx) => {
          return {
            name: item,
            value: "",
            id: idx,
          };
        });
        setInputs(inputs);
        setCurrMin(0);
        setCurrSec(0);
        setAllTimeSeconds(0);
        localStorage.removeItem("submitted");
        setSubmitted(false);
        localStorage.setItem(
          "savedGameData",
          JSON.stringify({
            inputs,
            currMin,
            currSec,
            date: daily?.dailyDate,
            allTimeSeconds,
          })
        );
      }
    }
  }, [daily]);

  useEffect(() => {
    if (localStorage.getItem("savedGameData") && daily) {
      const savedGameData = JSON.parse(localStorage.getItem("savedGameData")!);
      if (savedGameData.date === daily?.dailyDate) {
        localStorage.setItem(
          "savedGameData",
          JSON.stringify({
            inputs,
            currMin,
            currSec,
            date: daily?.dailyDate,
            allTimeSeconds,
          })
        );
      }
    }
  }, [daily, currMin, currSec, inputs]);

  // Return JSX Markup
  return (
    <div className={styles.container} style={{ background: getBGColor() }}>
      <StatsModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      <div>
        <div className={styles.game}>
          {!hidden && <Confetti width={width} height={height} />}
          <div className={styles.leftWrap}>
            <div className={styles.letterWrap}>
              <div
                className={styles.label + " divider"}
                style={{ color: getTextColor() }}
              >
                Letter Of The Day
              </div>
              <div className={styles.letter} style={{ color: getTextColor() }}>
                {daily?.letter}
              </div>
            </div>
            <div className={styles.gameInfoWrap}>
              <div
                className={styles.timeWrap}
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div
                  className={styles.label + " divider"}
                  style={{ color: getTextColor() }}
                >
                  Timer
                </div>
                <Timer currentMin={currMin} currentSecond={currSec} />
              </div>

              <div className={styles.playWrap}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    className={styles.label + " divider"}
                    style={{ color: getTextColor() }}
                  >
                    {getLabelData(timerIsActive, currSec, currMin, submitted)}
                  </div>
                </div>
                {timerIsActive === false ? (
                  <div
                    style={{
                      cursor: submitted ? "not-allowed" : "pointer",
                    }}
                  >
                    <PlayCircle
                      style={{
                        zoom: 0.9,
                        width: 200,
                        height: 200,
                        color: submitted ? getAltTextColor() : getTextColor(),
                        pointerEvents: submitted ? "none" : "all",
                      }}
                      onClick={() => setTimerIsActive(true)}
                    />
                  </div>
                ) : (
                  <PauseCircle
                    style={{
                      zoom: 0.9,
                      width: 200,
                      height: 200,
                      cursor: "pointer",
                      color:
                        pausesLeft === 0 ? getAltTextColor() : getTextColor(),
                      pointerEvents: pausesLeft === 0 ? "none" : "all",
                    }}
                    onClick={() => {
                      setTimerIsActive(false);
                      setPausesLeft(pausesLeft - 1);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.center}>
            <div
              style={{
                borderBottom: "3px solid #fafafa",
                height: 80,
                width: "100%",
              }}
            >
              <NavItems
                onClick={() => {
                  setTimerIsActive(!timerIsActive);
                }}
                timer={[
                  timerIsActive,
                  `${currMin}:${currSec < 10 ? `0${currSec}` : currSec}`,
                ]}
                submitted={submitted}
              />
              <div
                className={styles.gameContainer}
                style={{
                  pointerEvents: !timerIsActive && !submitted ? "none" : "all",
                }}
              >
                {inputs.length > 0 &&
                  daily?.inputs.map((item, idx) => (
                    <GameInput
                      show={!timerIsActive}
                      title={item}
                      value={inputs[idx].value as string}
                      disabled={submitted}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const newInputs = [...inputs];
                        newInputs[idx].value = e.target.value;
                        setInputs(newInputs);
                      }}
                    />
                  ))}
                {!submitted ? (
                  <div
                    className="actions"
                    style={{ width: "80%", marginTop: 70 }}
                  >
                    <div
                      className={`follow-btn ${
                        !timerIsActive && !submitted ? styles.blur : ""
                      }`}
                    >
                      <button
                        style={{
                          backgroundColor: getColor(),
                          fontSize: 22,
                        }}
                        onClick={() => {
                          const statsObj = JSON.parse(
                            localStorage.getItem("stats")!
                          );
                          const allStars = [
                            ...statsObj.allStars,
                            calculateStars(currMin, currSec),
                          ];
                          const allTime = [...statsObj.allTime, allTimeSeconds];
                          localStorage.setItem("submitted", "true");
                          setTimerIsActive(false);
                          setSubmitted(true);
                          localStorage.setItem(
                            "stats",
                            JSON.stringify({
                              gamesPlayed:
                                JSON.parse(localStorage.getItem("stats")!)
                                  .gamesPlayed + 1,
                              averageStars:
                                allStars.length > 0
                                  ? roundToHundred(
                                      allStars.reduce(
                                        (a: number, b: number) => a + b
                                      ) / allStars.length
                                    )
                                  : roundToHundred(
                                      calculateStars(currMin, currSec)
                                    ),
                              averageTime: calculateAverageTime(allTime),
                              bestTime: calculateBestTime(allTime),
                              todaysStats: [
                                {
                                  time: { currMin, currSec },
                                  stars: roundToHundred(
                                    calculateStars(currMin, currSec)
                                  ),
                                  letter: daily?.letter,
                                },
                              ],
                              allStars,
                              allTime,
                            })
                          );
                          setHidden(false);
                        }}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="actions"
                    style={{
                      width: "80%",
                      marginTop: 70,
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      className={`follow-btn ${
                        !timerIsActive && !submitted ? styles.blur : ""
                      }`}
                    >
                      <button
                        style={{
                          backgroundColor: "lightgreen",
                          fontSize: 22,
                        }}
                        onClick={() => {
                          localStorage.setItem("submitted", "true");
                        }}
                      >
                        Submitted Today's Category!
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <PlayerInfoRightWrap
            avgStars={JSON.parse(localStorage.getItem("stats")!).averageStars}
            bestTime={JSON.parse(localStorage.getItem("stats")!).bestTime}
            gamesPlayed={JSON.parse(localStorage.getItem("stats")!).gamesPlayed}
            avgTime={JSON.parse(localStorage.getItem("stats")!).averageTime}
            profileImage={profileImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Daily;
