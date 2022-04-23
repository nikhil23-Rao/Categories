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
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useMediaQuery } from "react-responsive";

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
  let currIndex = dailyCategories.length;

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
              <CheckCircle
                className="fade has-tooltip"
                style={{
                  color: "lightgreen",
                  position: "relative",
                  zoom: 1.5,
                  display: correct && !loading ? "flex" : "none",
                  marginLeft: isTablet ? 52 : 30,
                  cursor: "pointer",
                }}
              />
              <span
                className="correct tooltip green"
                style={{
                  position: "absolute",
                  left: "-21%",
                  backgroundColor: "lightgreen",
                  color: "#000",
                  textAlign: "center",
                  width: 200,
                  top: -5,
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
                  left: "1%",
                  backgroundColor: "#F66E72",
                }}
              >
                Not Accepted
              </span>
            </div>
            <div>
              <PlaylistAddCheckIcon
                className="fade has-tooltip"
                style={{
                  color: !showSkip ? getColor() : "gray",
                  position: "relative",
                  zoom: 1.8,
                  display:
                    (incorrect && !loading) || value.length === 0
                      ? "block"
                      : "none",
                  top: 2,
                  cursor: "pointer",
                  pointerEvents: !showSkip ? "all" : "none",
                  right: 2,
                  marginLeft:
                    incorrect && !loading && value.length > 0
                      ? ""
                      : isTablet
                      ? 50
                      : 30,
                }}
                onClick={onSkip}
              />
              <span
                className="tooltip"
                style={{
                  position: "absolute",
                  left: "65%",
                  backgroundColor: getColor(),
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
