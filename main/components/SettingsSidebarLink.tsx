import { Icon } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

export const SidebarLink = ({ text, Icon, id, currentLink, onClick }: any) => {
  useEffect(() => {
    console.log(currentLink);
  }, [currentLink]);
  return (
    <div
      className="link"
      style={{
        backgroundColor: currentLink === id ? "#e8f5fe" : "",
        color: currentLink === id ? "#4cc9f0" : "",
      }}
      onClick={onClick}
    >
      <p>{Icon}</p>
      <h2>{text}</h2>
    </div>
  );
};
