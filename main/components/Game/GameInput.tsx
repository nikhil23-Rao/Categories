import React, { useEffect, useState } from "react";
import styles from "../../styles/Game/Board.module.css";
import { pressTab } from "../../utils/pressTab";

interface IProps {
  title: string;
  numberOfTiles: number;
}

export const GameInput = ({ numberOfTiles, title }: IProps) => {
  const [letters, setLetters] = useState<any[]>([]);
  const [currentCategory, setCurrentCategory] = useState("Sport");

  useEffect(() => {
    window.onkeydown = (e) => {
      if (e.keyCode === 8) {
        const newLetters = [...letters];
        const letter = newLetters.pop();
        setLetters(newLetters);
      }
    };
    window.addEventListener("keypress", (e) => {
      const charCode = e.keyCode;

      if (
        (charCode > 64 && charCode < 91) ||
        (charCode > 96 && charCode < 123)
      ) {
        let newLetter = {
          val: e.key,
          idx: letters.length,
          title: currentCategory,
        };
        setLetters([...letters, newLetter]);
      }
    });
  }, [letters]);

  useEffect(() => {
    console.log(letters);
  }, [letters]);

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
            .fill(numberOfTiles)
            .map((arr, idx) => {
              return (
                <div className={styles.tile}>
                  {letters.map((letter) => {
                    if (
                      letter &&
                      letter.idx === idx &&
                      letter.title === title &&
                      currentCategory === letter.title
                    ) {
                      return <p id={idx.toString()}>{letter.val}</p>;
                    }
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
