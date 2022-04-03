import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "../../styles/Game/Board.module.css";
import { pressTab } from "../../utils/pressTab";

interface IProps {
  title: string;
  show: boolean;
}

export const GameInput = ({ show, title }: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);

  useEffect(() => {
    console.log(letters);
  }, [letters]);

  return (
    <div
      style={{
        width: "100%",
        borderBottom: "3px solid #fafafa",
      }}
      className={show ? styles.blur : ""}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="divider"></p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            bottom: 19,
            left: 6,
          }}
        >
          <form>
            <input
              type="text"
              name="name"
              className="question"
              id="nme"
              required
              autoComplete={"off"}
            />
            <label htmlFor="nme">
              <span>{title}</span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
