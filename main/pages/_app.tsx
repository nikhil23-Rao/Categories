// NextJS Imports
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";

// Data/Contstants Imports
import { colorOptions } from "../data/colorOptions";
import { LIGHT_THEME } from "../constants/themes";

// External Imports
import { createAvatar } from "@dicebear/avatars";
import { ChakraProvider } from "@chakra-ui/react";
import NextNProgress from "nextjs-progressbar";

// CSS Imports
import * as style from "@dicebear/avatars-identicon-sprites";
import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import { generateCategories } from "../utils/generateCategories";

function MyApp({ Component, pageProps }: AppProps) {
  // Hooks
  const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("pfpid");
    if (!id) {
      localStorage.setItem("pfpid", Math.floor(Math.random() * 200).toString());
      localStorage.setItem("theme", JSON.stringify(LIGHT_THEME));
      localStorage.setItem("color", colorOptions[0].color);
      const arr = generateCategories();
      localStorage.setItem("categories", JSON.stringify(arr));
    }
    let svg = createAvatar(style, {
      seed: localStorage.getItem("pfpid")!!,
      dataUri: true,
    });
    setProfileImg(svg);

    const arr = generateCategories();
    const date = new Date();
    if (
      arr[arr.length - 1].dailyDate ===
      `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    ) {
      localStorage.setItem("categories", JSON.stringify(arr));
    }
  }, []);

  // Render Splash Screen If No Data
  if (typeof window === "undefined") return <h1>loading</h1>;

  // Render Root Component
  return (
    <ChakraProvider resetCSS={false}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} profileImage={profileImg} />
    </ChakraProvider>
  );
}

export default MyApp;
