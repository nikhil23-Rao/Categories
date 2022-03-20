// NextJS Imports
import React from "react";

// Customization Imports
import { getColor } from "../../utils/customizationsFunctions";

// Props That Avatar Takes
interface IProps {
  profileImg: string;
  onClick: () => void;
  imgStyle?: any;
}

export const Avatar = ({ profileImg, onClick, imgStyle }: IProps) => {
  // Render PFP
  return (
    <img
      src={profileImg}
      style={{
        width: 70,
        height: 70,
        borderRadius: 100,
        border: `4px solid ${getColor()}`,
        cursor: "pointer",
        ...imgStyle,
      }}
      onClick={onClick}
      alt=""
    />
  );
};
