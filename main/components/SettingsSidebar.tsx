import React, { useState } from "react";
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
  const [currentId, setCurrentId] = useState(1);
  return (
    <div className="sidebar">
      <p className="divider">Preferences</p>
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(1)}
        id={1}
        text="Appearence"
        Icon={<ColorLens />}
      />
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(2)}
        id={2}
        text="Game Settings"
        Icon={<VideoGameAsset />}
      />
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(3)}
        id={3}
        text="Friend Settings"
        Icon={<PersonAdd />}
      />
      <p className="divider">Account & Support</p>
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(4)}
        id={4}
        text="Account Settings"
        Icon={<ManageAccounts />}
      />
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(5)}
        id={5}
        text="Report A Problem"
        Icon={<BugReport />}
      />
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(6)}
        id={6}
        text="Help"
        Icon={<Help />}
      />
      <SidebarLink
        currentLink={currentId}
        onClick={() => setCurrentId(7)}
        id={7}
        text="Legal & Policies"
        Icon={<Copyright />}
      />
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          position: "relative",
          top: 20,
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
          top: -10,
        }}
      >
        <p style={{ color: "gray", opacity: 0.6 }}>
          All Rights Reserved © 2022 Categories
        </p>
      </div>
    </div>
  );
};
