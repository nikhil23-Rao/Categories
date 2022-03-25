import React from "react";
import styles from "../../styles/Game/Board.module.css";

interface IProps {
  title: string;
  numberOfTiles: number;
}

export const GameInput = ({ numberOfTiles, title }: IProps) => {
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
            .map(() => {
              return <div className={styles.tile}></div>;
            })}
        </div>
      </div>
    </div>
  );
};
