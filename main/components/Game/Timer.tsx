import React from "react";

interface IProps {
  currentSecond: number;
  currentMin: number;
}

export const Timer = ({ currentMin, currentSecond }: IProps) => {
  return (
    <div id="container">
      <div className="circle" id="box">
        <div id="btn-play">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="btn-reset">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="btn-pause">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className="circle"
          id="glass"
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div id="digital">{`${currentMin}:${
            currentSecond < 10 ? `0${currentSecond}` : currentSecond
          }`}</div>
        </div>
      </div>
      <div id="shadow"></div>
    </div>
  );
};
