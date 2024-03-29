import { Input, Spinner, Tooltip } from "@chakra-ui/react";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Cancel from "@mui/icons-material/Cancel";
import React, { useEffect, useState } from "react";
import { dailyCategories } from "../../data/dailyCategories";
import styles from "../../styles/Game/Board.module.css";
import {
  getBGColor,
  getColor,
  getTextColor,
} from "../../utils/customizationsFunctions";
import { pressTab } from "../../utils/pressTab";
import NextPlanIcon from "@mui/icons-material/NextPlan";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useMediaQuery } from "react-responsive";
import Lottie from "react-lottie";
import correctAnimationData from "../../public/correct.json";
import incorrectAnimationData from "../../public/incorrect.json";

interface IProps {
  title: string;
  show: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
  onFocus: () => void;
  loading: boolean;
  correct: boolean;
  incorrect: boolean;
  onSkip: () => void;
  showSkip: boolean;
  onMarkCorrect: () => void;
  skipsObj: any;
}

export const GameInput = ({
  show,
  title,
  onChange,
  value,
  disabled,
  onFocus,
  loading,
  correct,
  incorrect,
  onSkip,
  showSkip,
  onMarkCorrect,
  skipsObj,
}: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);
  const isTablet = useMediaQuery({ maxWidth: 1353 });
  const [hovered, setHovered] = useState<boolean>(false);

  const isMac = useMediaQuery({ maxWidth: 1500 });
  const isPhone = useMediaQuery({ maxWidth: 642 });

  let currIndex = dailyCategories.length;

  const incorrectAnimationOptions = {
    animationData: incorrectAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const correctAnimationOptions = {
    animationData: correctAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "3px solid #fafafa",
      }}
      className={show && !disabled ? styles.blur : ""}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="divider" style={{ color: getTextColor() }}>
          {title}:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            bottom: 19,
            left: 3,
            width: "100%",
          }}
        >
          <Input
            border={"none"}
            width={"90%"}
            placeholder={`${title}...`}
            height={10}
            value={value}
            onChange={(e) => onChange(e)}
            fontSize={30}
            style={{
              boxShadow: "none",
              color: getTextColor(),
              paddingRight: 50,
            }}
            onFocus={onFocus}
            disabled={disabled}
          />

          <div
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "row",
              display: "flex",
              position: "relative",
              right: 10,
              top: -5,
            }}
          >
            <Spinner
              style={{
                color: getColor(),
                position: "relative",
                display: loading && value.length > 0 ? "block" : "none",
                marginLeft: isTablet ? 80 : 40,
                top: -3,
              }}
              thickness={"4px"}
            />

            <div>
              <div className="fade has-tooltip">
                <Lottie
                  isStopped={!correct}
                  options={{
                    ...correctAnimationOptions,
                    loop: false,
                  }}
                  style={{
                    position: "absolute",
                    zoom: 1.3,
                    display: correct && !loading ? "flex" : "none",
                    marginLeft: isTablet ? 52 : 30,
                    cursor: "pointer",
                    bottom: -5,
                    left: isPhone ? -60 : isMac ? -30 : -10,
                  }}
                  height={40}
                  width={40}
                />
              </div>
              <span
                className="correct tooltip green"
                style={{
                  position: "absolute",
                  backgroundColor: "lightgreen",
                  color: "#000",
                  textAlign: "center",
                  width: 200,
                  left: -20,
                  top: -7,
                }}
              >
                Accepted Answer
              </span>
            </div>
            <div>
              <Cancel
                className="fade has-tooltip"
                style={{
                  color: "#F66E72",
                  position: "relative",
                  zoom: 1.5,
                  display:
                    incorrect && !loading && value.length > 0 ? "flex" : "none",
                  alignSelf: "flex-end",
                  right: value.length > 0 && incorrect ? 10 : "",
                  marginLeft: 50,
                  cursor: "pointer",
                }}
              />

              <span
                className="tooltip red"
                style={{
                  position: "absolute",
                  left: "31%",
                  backgroundColor: "#F66E72",
                }}
              >
                Not Accepted
              </span>
            </div>
            <div>
              <NextPlanIcon
                className="fade has-tooltip"
                style={{
                  zoom: 1.5,
                  alignSelf: "flex-end",
                  cursor: "pointer",
                  color: !showSkip ? getColor() : "gray",
                  position: "relative",
                  display:
                    (incorrect && !loading) || value.length === 0
                      ? "block"
                      : "none",
                  right: 4,
                  marginLeft:
                    incorrect && !loading && value.length > 0
                      ? ""
                      : isTablet
                      ? 50
                      : 30,
                  pointerEvents: showSkip ? "none" : "all",
                }}
                onClick={onSkip}
              />
              <span
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "65%",
                  backgroundColor: getColor(),
                  width: 105,
                }}
              >
                Skip
              </span>
            </div>
            <div>
              <AddTaskIcon
                className="fade has-tooltip"
                style={{
                  color: getColor(),
                  position: "relative",
                  zoom: 1.5,
                  display:
                    incorrect && !loading && value.length > 0 ? "flex" : "none",
                  alignSelf: "flex-end",
                  cursor: "pointer",
                }}
                onClick={onMarkCorrect}
              />
              <span
                className="correct tooltip"
                style={{
                  position: "absolute",
                  left: "68%",
                  backgroundColor: getColor(),
                  textAlign: "center",
                  width: 200,
                  top: -5,
                }}
              >
                Mark as Correct
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
