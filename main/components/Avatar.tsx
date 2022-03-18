import React from "react";
import { getColor } from "../utils/customizationsFunctions";

interface IProps {
  profileImg: string;
}

export const Avatar = ({ profileImg }: IProps) => {
  return (
    <img
      src={profileImg}
      style={{
        width: 70,
        height: 70,
        borderRadius: 100,
        border: `4px solid ${getColor()}`,
      }}
      alt=""
    />
  );
};
