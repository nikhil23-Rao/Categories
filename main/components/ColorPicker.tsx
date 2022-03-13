import React, { useEffect, useState } from "react";
import { Theme } from "../@types/ThemeInt";
import {
  DARK_THEME,
  DIMMED_THEME,
  LIGHT_THEME,
  COMFY_THEME,
  NIGHT_THEME,
  SPACE_THEME,
} from "../constants/themes";

export const ColorPicker = () => {
  const [theme, setTheme] = useState<string>("");
  const [allThemes] = useState<Theme[]>([
    LIGHT_THEME,
    DARK_THEME,
    NIGHT_THEME,
    SPACE_THEME,
    DIMMED_THEME,
    COMFY_THEME,
  ]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(JSON.parse(theme!).name);
  }, []);

  return (
    <>
      <div className="grid">
        {allThemes.map((t, idx) => {
          return (
            <div
              onClick={() => {
                setTheme(t.name);
                localStorage.setItem("theme", JSON.stringify(t));
              }}
              style={{
                border: t.name === theme ? "4px solid #047EFE" : "",
                width: 100,
                height: 100,
                borderRadius: 100,
                backgroundColor: "#047EFE",
                marginRight: 30,
                marginTop: idx > 2 ? 60 : 40,
                backgroundAttachment: "fixed",
                background: t.background,
                cursor: "pointer",
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);",
              }}
            >
              <i
                className="fa fa-check-circle"
                style={{
                  color: "lightgreen",
                  top: 70,
                  right: -69,
                  position: "relative",
                  opacity: t.name === theme ? 1 : 0,
                }}
              ></i>
              <p
                style={{
                  textAlign: "center",
                  position: "relative",
                  fontSize: 20,
                  top: 80,
                }}
              >
                {t.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
