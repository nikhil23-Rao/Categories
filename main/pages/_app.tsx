// NextJS Imports
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

// Data/Contstants Imports
import { colorOptions } from "../data/colorOptions";
import { LIGHT_THEME } from "../constants/themes";

// External Imports
import { createAvatar } from "@dicebear/avatars";
import { ChakraProvider } from "@chakra-ui/react";

// CSS Imports
import * as style from "@dicebear/avatars-identicon-sprites";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Hooks
  const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("pfpid");
    if (!id) {
      localStorage.setItem("pfpid", Math.floor(Math.random() * 200).toString());
      localStorage.setItem("theme", JSON.stringify(LIGHT_THEME));
      localStorage.setItem("color", colorOptions[0].color);
    }
    let svg = createAvatar(style, {
      seed: localStorage.getItem("pfpid")!!,
      dataUri: true,
    });
    setProfileImg(svg);
  }, []);

  // Render Splash Screen If No Data
  if (typeof window === "undefined") return <h1>loading</h1>;

  // Render Root Component
  return (
    <ChakraProvider resetCSS={false}>
      <Component {...pageProps} profileImage={profileImg} />
    </ChakraProvider>
  );
}

export default MyApp;
