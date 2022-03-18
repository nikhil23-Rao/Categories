// NextJS Imports
import React from "react";

// Customization Imports
import { getColor } from "../../utils/customizationsFunctions";

// Props That Avatar Takes
interface IProps {
  profileImg: string;
}

export const Avatar = ({ profileImg }: IProps) => {
  // Render PFP
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
