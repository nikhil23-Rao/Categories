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
import { generateCategories } from "../utils/generateCategories";
import axios from "axios";
import _, { shuffle } from "lodash";
import { possibleAnswers } from "../data/possibleAnswers";
import Check from "@mui/icons-material/Check";
import pluralize from "pluralize";
import { EditUsernameModal } from "../components/Modals/EditUsernameModal";
import { SettingsModal } from "../components/Modals/SettingsModal";
import { HowToPlayModal } from "../components/Modals/HowToPlayModal";
import { getUniqueValuesWithCase } from "../utils/removeDuplicates";

// Props That The Home Component Takes
interface IProps {
  profileImage: string;
}

const Daily = ({ profileImage }: IProps) => {
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
    isOpen: howToPlayModalIsOpen,
    onClose: howToPlayModalOnClose,
    onOpen: howToPlayModalOnOpen,
  } = useDisclosure();
  const [skips, setSkips] = useState<{ idx: number; skips: number }>(
    localStorage.getItem("savedGameData") &&
      JSON.parse(localStorage.getItem("savedGameData")!).skips
      ? JSON.parse(localStorage.getItem("savedGameData")!).skips
      : {
          idx: -1,
          skips: 1,
        }
  );
  const [validAnswers, setValidAnswers] = useState<any[]>([]);
  const [runCount, setRunCount] = useState(null);
  const [disabled, setDisabled] = useState(false);
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
  const [loading, setLoading] = useState<number[]>([]);
  const [correct, setCorrect] = useState<number[]>(
    localStorage.getItem("savedGameData") &&
      JSON.parse(localStorage.getItem("savedGameData")!).correct
      ? JSON.parse(localStorage.getItem("savedGameData")!).correct
      : []
  );
  const [inCorrect, setInCorrect] = useState<number[]>(
    localStorage.getItem("savedGameData") &&
      JSON.parse(localStorage.getItem("savedGameData")!).inCorrect
      ? JSON.parse(localStorage.getItem("savedGameData")!).inCorrect
      : []
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
      focus: boolean;
    }[]
  >(
    localStorage.getItem("savedGameData")
      ? JSON.parse(localStorage.getItem("savedGameData")!).inputs
      : []
  );
  const { onOpen, onClose, isOpen } = useDisclosure();

  useEffect(() => {
    if (localStorage.getItem("savedGameData") && daily) {
      const savedGameData = JSON.parse(localStorage.getItem("savedGameData")!);
      if (!savedGameData.correct) {
        const inputs = daily.inputs.map((item, idx) => {
          return {
            name: item,
            value: "",
            id: idx,
            focus: false,
          };
        });
        setInputs(inputs);
        setCurrMin(0);
        setCurrSec(0);
        setAllTimeSeconds(0);
        localStorage.removeItem("submitted");
        setSubmitted(false);
        setHidden(true);
        setInCorrect([]);
        setCorrect([]);
        setSkips({ idx: -1, skips: 1 });
        onClose();
        localStorage.setItem(
          "savedGameData",
          JSON.stringify({
            inputs,
            currMin,
            currSec,
            date: daily?.dailyDate,
            allTimeSeconds,
            inCorrect: [],
            isCorrect: [],
            skips: { idx: -1, skips: 1 },
          })
        );
      }
    }
  }, [daily]);

  useEffect(() => {
    if (timerIsActive) {
      const intervalId = setInterval(function () {
        setAllTimeSeconds(allTimeSeconds + 1);
        if (currSec >= 59) {
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
          focus: false,
        };
      });
      setInputs(inputs);
    }
  }, [daily?.inputs]);

  useEffect(() => {
    if (submitted) {
      onOpen();
      setHidden(false);
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
          inCorrect: [],
          correct: [],
          skips: { idx: -1, skips: 1 },
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
            focus: false,
          };
        });
        setInputs(inputs);
        setCurrMin(0);
        setCurrSec(0);
        setAllTimeSeconds(0);
        localStorage.removeItem("submitted");
        setSubmitted(false);
        setHidden(true);
        setInCorrect([]);
        setCorrect([]);
        setSkips({ idx: -1, skips: 1 });
        onClose();
        localStorage.setItem(
          "savedGameData",
          JSON.stringify({
            inputs,
            currMin,
            currSec,
            date: daily?.dailyDate,
            allTimeSeconds,
            inCorrect: [],
            isCorrect: [],
            skips: { idx: -1, skips: 1 },
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
            inCorrect,
            correct,
            skips,
          })
        );
      }
    }
  }, [daily, currMin, currSec, inputs, correct, inCorrect, skips]);

  useEffect(() => {
    if (inCorrect.length === 0 && correct.length >= 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputs, inCorrect, correct]);

  useEffect(() => {
    const dom = new DOMParser();
    let data: any[] = [];
    if (daily && daily.inputs.length === 6) {
      for (const possibleAnswer of possibleAnswers) {
        if (daily?.inputs.includes(possibleAnswer.categoryName)) {
          const doc = dom.parseFromString(possibleAnswer.html, "text/html");
          const lis = doc.querySelectorAll("li");
          let arr: any[] = [];
          lis.forEach((li) => {
            arr.push(li.textContent);
          });

          data.push({
            categoryName: possibleAnswer.categoryName,
            answers: arr,
            idx: daily?.inputs.indexOf(possibleAnswer.categoryName),
          });
        }
      }
      let res = _.sortBy(data, "idx");
      setValidAnswers(res);
    }

    // generateCategories();
  }, [daily]);

  if (!daily || typeof window === "undefined" || inputs.length !== 6)
    return <></>;

  // Return JSX Markup
  return (
    <div className={styles.container} style={{ background: getBGColor() }}>
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
      <HowToPlayModal
        isOpen={howToPlayModalIsOpen}
        onClose={howToPlayModalOnClose}
        onOpen={howToPlayModalOnOpen}
      />
      <StatsModal onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
      <div>
        <div className={styles.game} style={{ background: getBGColor() }}>
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
                editUsernameModalOnOpen={editUsernameModalOnOpen}
                settingsModalOnOpen={settingsModalOnOpen}
                howToPlayModalOnOpen={howToPlayModalOnOpen}
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
                    <>
                      <GameInput
                        key={idx}
                        show={!timerIsActive}
                        title={item}
                        value={inputs[idx].value as string}
                        disabled={submitted}
                        onFocus={() => {
                          const newInputs = [...inputs];
                          newInputs[idx].focus = true;
                          setInputs(newInputs);
                        }}
                        onSkip={() => {
                          setSkips({ idx, skips: 0 });
                          const newInputs = [...inputs];
                          const arr = validAnswers
                            .filter((a) => a.idx === idx)[0]
                            .answers.filter((a: string) =>
                              a.trim().startsWith(daily?.letter)
                            );
                          const newArr = shuffle(arr);
                          newInputs[idx].value = newArr[0];
                          setInputs(newInputs);
                          setLoading(loading.filter((i) => i !== idx));
                          setCorrect([...correct, idx]);
                          setInCorrect(inCorrect.filter((i) => i !== idx));
                        }}
                        onMarkCorrect={() => {
                          setLoading(loading.filter((i) => i !== idx));
                          setCorrect([...correct, idx]);
                          setInCorrect(inCorrect.filter((i) => i !== idx));
                        }}
                        showSkip={skips.idx !== -1}
                        skipsObj={skips}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          const newInputs = [...inputs];
                          newInputs[idx].value = e.target.value;
                          if (
                            newInputs[idx].value.length > 0 &&
                            newInputs[idx].value.charAt(0).toLowerCase() !==
                              daily.letter.toLowerCase()
                          ) {
                            return (newInputs[idx].value = "");
                          }
                          setInputs(newInputs);

                          if (runCount) {
                            clearTimeout(runCount);
                          }

                          let id = setTimeout(async () => {
                            const lower = validAnswers[idx].answers.map(
                              (element: string) => {
                                return element.toLowerCase().trim();
                              }
                            );
                            if (
                              lower.includes(
                                newInputs[idx].value.toLowerCase().trim()
                              )
                            ) {
                              setLoading(loading.filter((i) => i !== idx));
                              setCorrect([...correct, idx]);
                              setInCorrect(inCorrect.filter((i) => i !== idx));
                            } else {
                              setLoading(loading.filter((i) => i !== idx));
                              setCorrect(correct.filter((i) => i !== idx));
                              setInCorrect([...inCorrect, idx]);
                            }
                          }, 200);

                          setRunCount(id as any);
                          setLoading([...loading, idx]);
                        }}
                        loading={loading.includes(idx)}
                        correct={correct.includes(idx)}
                        incorrect={inCorrect.includes(idx)}
                      />
                      {submitted && validAnswers.length > 0 && (
                        <div
                          style={{
                            width: "100%",
                            borderBottom: "3px solid #fafafa",
                          }}
                        >
                          <p
                            style={{
                              alignSelf: "flex-start",
                              fontSize: 15,
                              color: getTextColor(),
                              paddingBottom: 0,
                              paddingTop: 0,
                            }}
                            className="divider"
                          >
                            Most Common Answers:{" "}
                            <b
                              style={{
                                color: getColor(),
                              }}
                            >
                              {getUniqueValuesWithCase(
                                validAnswers
                                  .filter((a) => a.idx === idx)[0]
                                  .answers.filter((a: string) =>
                                    a.trim().startsWith(daily?.letter)
                                  ),
                                false
                              )
                                .slice(0, 5)
                                .join(", ")}
                            </b>
                            <br />
                            <p>
                              (See an issue?{" "}
                              <a
                                style={{
                                  color: getColor(),
                                  cursor: "pointer",
                                }}
                                onClick={() => {
                                  window.open(
                                    "mailto:nikhil23.rao@gmail.com;vinay23.rao@gmail.com",
                                    "_blank"
                                  );
                                }}
                              >
                                Report it
                              </a>
                              )
                            </p>
                          </p>
                        </div>
                      )}
                    </>
                  ))}
                {!submitted ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="actions"
                      style={{ width: "80%", marginTop: 70 }}
                    >
                      <div
                        className={`follow-btn ${
                          !timerIsActive && !submitted ? styles.blur : ""
                        }`}
                        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
                      >
                        <button
                          style={{
                            backgroundColor: disabled ? "gray" : getColor(),
                            fontSize: 22,
                            pointerEvents: disabled ? "none" : "all",
                          }}
                          onClick={() => {
                            const statsObj = JSON.parse(
                              localStorage.getItem("stats")!
                            );
                            const allStars = [
                              ...statsObj.allStars,
                              calculateStars(currMin, currSec),
                            ];
                            const allTime = [
                              ...statsObj.allTime,
                              allTimeSeconds,
                            ];
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
                            onOpen();
                          }}
                        >
                          Finish
                        </button>
                      </div>
                    </div>
                    <div
                      className="actions"
                      style={{ width: "80%", marginTop: 20 }}
                    >
                      <div
                        className={`follow-btn ${
                          !timerIsActive && !submitted ? styles.blur : ""
                        }`}
                        style={{ cursor: disabled ? "not-allowed" : "pointer" }}
                      >
                        <button
                          style={{
                            backgroundColor: "#F66E72",
                            fontSize: 22,
                          }}
                          onClick={() => {
                            const statsObj = JSON.parse(
                              localStorage.getItem("stats")!
                            );
                            const allStars = [...statsObj.allStars, 0];
                            const allTime = [...statsObj.allTime];
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
                                    : roundToHundred(0),
                                averageTime:
                                  allTime.length > 0
                                    ? calculateAverageTime(allTime)
                                    : "0:00",
                                bestTime:
                                  allTime.length > 0
                                    ? calculateBestTime(allTime)
                                    : "0:00",
                                todaysStats: [
                                  {
                                    time: { currMin, currSec },
                                    stars: roundToHundred(0),
                                    letter: daily?.letter,
                                  },
                                ],
                                allStars,
                                allTime,
                              })
                            );
                            setHidden(false);
                            onOpen();
                          }}
                        >
                          Give Up
                        </button>
                      </div>
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
                        Submitted!
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
