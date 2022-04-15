import { Input, Spinner } from "@chakra-ui/react";
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
}: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);
  let currIndex = dailyCategories.length;

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "3px solid #fafafa",
      }}
      className={show && !disabled ? styles.blur : ""}
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
          }}
        >
          <Input
            border={"none"}
            width={"80%"}
            placeholder={`${title}...`}
            height={10}
            value={value}
            onChange={(e) => onChange(e)}
            fontSize={30}
            style={{ boxShadow: "none", color: getTextColor() }}
            onFocus={onFocus}
            disabled={disabled}
          />
          <Spinner
            style={{
              color: getColor(),
              position: "relative",
              left: 90,
              display: loading ? "block" : "none",
            }}
            thickness={"4px"}
          />
          <CheckCircle
            className="fade"
            style={{
              color: "lightgreen",
              position: "relative",
              left: 60,
              zoom: 1.5,
              display: correct && !loading ? "block" : "none",
            }}
          />
          <Cancel
            className="fade"
            style={{
              color: "#F66E72",
              position: "relative",
              left: 60,
              zoom: 1.5,
              display: incorrect && !loading ? "block" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};
