import React from "react";
import { SidebarLink } from "./SettingsSidebarLink";
import ColorLens from "@mui/icons-material/ColorLens";
import VideoGameAsset from "@mui/icons-material/VideogameAsset";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Logout from "@mui/icons-material/Logout";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import BugReport from "@mui/icons-material/BugReport";
import Help from "@mui/icons-material/Help";
import Copyright from "@mui/icons-material/Copyright";

export const SettingsSidebar = () => {
  return (
    <div className="sidebar">
      <p className="divider">Preferences</p>
      <SidebarLink text="Appearence" Icon={<ColorLens />} />
      <SidebarLink text="Game Settings" Icon={<VideoGameAsset />} />
      <SidebarLink text="Friend Settings" Icon={<PersonAdd />} />
      <p className="divider">Account & Support</p>
      <SidebarLink text="Log Out" Icon={<Logout />} />
      <SidebarLink text="Account Settings" Icon={<ManageAccounts />} />
      <SidebarLink text="Report A Problem" Icon={<BugReport />} />
      <SidebarLink text="Help" Icon={<Help />} />
      <SidebarLink text="Legal & Policies" Icon={<Copyright />} />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          top: 80,
        }}
      >
        <p style={{ color: "gray", opacity: 0.6 }}>
          Game Created By: Nikhil Rao & Vinay Rao
        </p>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          top: 70,
        }}
      >
        <p style={{ color: "gray", opacity: 0.6 }}>
          All Rights Reserved © 2022 Categories
        </p>
      </div>
    </div>
  );
};
