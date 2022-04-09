import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { dailyCategories } from "../../data/dailyCategories";
import styles from "../../styles/Game/Board.module.css";
import { getBGColor, getTextColor } from "../../utils/customizationsFunctions";
import { pressTab } from "../../utils/pressTab";

interface IProps {
  title: string;
  show: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}

export const GameInput = ({
  show,
  title,
  onChange,
  value,
  disabled,
}: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);
  let currIndex = dailyCategories.length;

  useEffect(() => {
    console.log(letters);
  }, [letters]);

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
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};
