import React from "react";
import Settings from "@mui/icons-material/Settings";
import BarChart from "@mui/icons-material/BarChart";
import Home from "@mui/icons-material/Home";
import Help from "@mui/icons-material/Help";
import AccountCircle from "@mui/icons-material/AccountCircle";

export const NavItems = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 45,
        }}
      >
        <Home style={{ fontSize: 30 }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 95,
        }}
      >
        <AccountCircle style={{ fontSize: 30 }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 45,
        }}
      >
        <Settings style={{ fontSize: 30 }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 85,
        }}
      >
        <BarChart style={{ fontSize: 30 }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 125,
        }}
      >
        <Help style={{ fontSize: 30 }} />
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          bottom: 2,
        }}
      >
        <h1>Categories</h1>
      </div>
    </>
  );
};
