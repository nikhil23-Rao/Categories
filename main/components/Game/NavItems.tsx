import React from "react";
import Settings from "@mui/icons-material/Settings";
import BarChart from "@mui/icons-material/BarChart";
import Home from "@mui/icons-material/Home";
import Help from "@mui/icons-material/Help";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { getTextColor } from "../../utils/customizationsFunctions";
import { useRouter } from "next/router";

export const NavItems = () => {
  const router = useRouter();
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 45,
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      >
        <Home style={{ fontSize: 30, color: getTextColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          left: 95,
        }}
      >
        <AccountCircle style={{ fontSize: 30, color: getTextColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 45,
        }}
      >
        <Settings style={{ fontSize: 30, color: getTextColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 85,
        }}
      >
        <BarChart style={{ fontSize: 30, color: getTextColor() }} />
      </div>
      <div
        style={{
          position: "absolute",
          top: 29,
          right: 125,
        }}
      >
        <Help style={{ fontSize: 30, color: getTextColor() }} />
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
        <h1 style={{ color: getTextColor() }}>Categories</h1>
      </div>
    </>
  );
};
