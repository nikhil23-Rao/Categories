import React, { useState } from "react";
import styles from "../../styles/Game/Board.module.css";
import { pressTab } from "../../utils/pressTab";

interface IProps {
  title: string;
  numberOfTiles: number;
}

export const GameInput = ({ numberOfTiles, title }: IProps) => {
  const [currIdx, setCurrIdx] = useState(0);
  const [letters, setLetters] = useState([{ val: "", idx: 0 }]);
  return (
    <div
      style={{
        width: "100%",
        borderBottom: "3px solid #fafafa",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p className="divider">{title}: </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            bottom: 19,
            left: 16,
          }}
        >
          {Array(numberOfTiles)
            .fill(0)
            .map((arr, idx) => {
              return letters.map((letter) => (
                <input
                  maxLength={1}
                  id={idx.toString()}
                  onChange={(e) => {
                    setLetters([{ val: e.currentTarget.value, idx }]);
                  }}
                  style={{ textAlign: "center" }}
                  className={styles.tile}
                ></input>
              ));
            })}
        </div>
      </div>
    </div>
  );
};
