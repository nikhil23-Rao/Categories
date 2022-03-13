import type { NextPage } from "next";
import { ColorPicker } from "../components/ColorPicker";
import { SettingsSidebar } from "../components/SettingsSidebar";

const Settings: NextPage = () => {
  return (
    <div>
      <div className="settingsContainer">
        <h1>Appearence</h1>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ColorPicker />
        </div>
        <p
          style={{
            color: "gray",
            position: "relative",
            opacity: 0.7,
            fontSize: 16,
            top: 400,
          }}
        >
          More Themes Coming Soon!
        </p>
      </div>
      <SettingsSidebar />
    </div>
  );
};

export default Settings;
