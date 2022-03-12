import { Icon } from "@mui/material";
import React, { ReactElement } from "react";

export const SidebarLink = ({ text, Icon }: any) => {
  return (
    <div className="link">
      <p>{Icon}</p>
      <h2>{text}</h2>
    </div>
  );
};
