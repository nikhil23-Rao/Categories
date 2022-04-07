import React from "react";
import { getColor, getTextColor } from "../../utils/customizationsFunctions";

interface IProps {
  currentSecond: number;
  currentMin: number;
}

export const Timer = ({ currentMin, currentSecond }: IProps) => {
  return (
    <div
      id="digital"
      style={{ color: getTextColor(), fontSize: 50 }}
    >{`${currentMin}:${
      currentSecond < 10 ? `0${currentSecond}` : currentSecond
    }`}</div>
  );
};
