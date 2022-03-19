// All Themes
import {
  DARK_THEME,
  LIGHT_THEME,
  MAGIC_THEME,
  NIGHT_THEME,
  SPACE_THEME,
  SUNSET_THEME,
} from "../constants/themes";

// All Theme Options
export const themeOptions = [
  {
    color: "#000",
    border: "0.1px solid gray",
    background: "#fff",
    name: "Light",
    correspondingThemeObject: LIGHT_THEME,
  },
  {
    background: "#010001",
    color: "#fff",
    border: "0.1px solid #fff",
    name: "Dark",
    correspondingThemeObject: DARK_THEME,
  },
  {
    background: "#14212A",
    color: "#fff",
    border: "0.1px solid #1D9AF1",
    name: "Night",

    correspondingThemeObject: NIGHT_THEME,
  },
  {
    background: "linear-gradient(to right, #c33764, #1d2671)",
    color: "#fff",
    border: "0.1px solid #fff",
    name: "Space",

    correspondingThemeObject: SPACE_THEME,
  },
  {
    background: "linear-gradient(315deg, #fce043 0%, #fb7ba2 74%)",
    color: "#fff",
    border: "0.1px solid #fff",
    name: "Sunset",

    correspondingThemeObject: SUNSET_THEME,
  },
  {
    background: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
    color: "#fff",
    border: "0.1px solid #fff",
    name: "Magic",

    correspondingThemeObject: MAGIC_THEME,
  },
];
