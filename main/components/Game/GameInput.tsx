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
}: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);
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
            style={{ boxShadow: "none", color: getTextColor() }}
            onFocus={onFocus}
            disabled={disabled}
          />

          <div
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flexDirection: "row",
              display: "flex",
            }}
          >
            <Spinner
              style={{
                color: getColor(),
                position: "relative",
                display: loading ? "block" : "none",
                top: -7,
                left: 2,
              }}
              thickness={"4px"}
            />

            <CheckCircle
              className="fade"
              style={{
                color: "lightgreen",
                position: "relative",
                zoom: 1.5,
                display: correct && !loading ? "flex" : "none",
                alignSelf: "flex-end",
              }}
            />

            <Cancel
              className="fade"
              style={{
                color: "#F66E72",
                position: "relative",
                zoom: 1.5,
                display: incorrect && !loading ? "flex" : "none",
                alignSelf: "flex-end",
              }}
            />
            <PlaylistAddCheckIcon
              style={{
                color: !showSkip ? getColor() : "gray",
                position: "relative",
                zoom: 1.8,
                display: incorrect && !loading ? "block" : "none",
                marginLeft: 10,
                marginRight: 20,
                top: 2,
                cursor: "pointer",
                pointerEvents: !showSkip ? "all" : "none",
              }}
              onClick={onSkip}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
