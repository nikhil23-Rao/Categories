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
import Head from "next/head";

function MyApp({ Component, pageProps }: any) {
  // Hooks
  const [profileImg, setProfileImg] = useState<string>("");

  useEffect(() => {
    const id = localStorage.getItem("pfpid");
    if (!id) {
      localStorage.setItem("pfpid", Math.floor(Math.random() * 200).toString());
      localStorage.setItem("theme", JSON.stringify(LIGHT_THEME));
      localStorage.setItem("color", colorOptions[0].color);
      localStorage.setItem("name", "Categories Player");
      localStorage.setItem("bio", "Your bio here...");
      localStorage.setItem("firstTime", "true");
      localStorage.setItem(
        "stats",
        JSON.stringify({
          gamesPlayed: 0,
          averageStars: 0,
          averageTime: "0:00",
          bestTime: "0:00",
          todaysStats: [
            { time: { currMin: 0, currSec: 0 }, stars: 0, letter: "" },
          ],
          allStars: [],
          allTime: [],
        })
      );
    }
    let svg = createAvatar(style, {
      seed: localStorage.getItem("pfpid")!!,
      dataUri: true,
    });
    setProfileImg(svg);
  }, []);

  // Render Splash Screen If No Data
  if (typeof window === "undefined" || !localStorage.getItem("stats"))
    return <h1>loading</h1>;

  // Render Root Component
  return (
    <>
      <Head>
        <title>Categories - A Daily Word Game</title>
        <meta name="description" content="The Categories Game" />
        <meta property="og:title" content="Categories" />
        <meta property="og:description" content="Categories word game" />
        <meta
          property="og:url"
          content="https://thecategoriesgame.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="WVPJNUxImJ-g72LJw0ga1Wwx5Cz25CdXNvFSTw7dqPA"
        />
      </Head>
      <ChakraProvider resetCSS={false}>
        <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={4}
          showOnShallow={true}
        />
        <Component
          {...pageProps}
          profileImage={profileImg}
          setProfileImg={setProfileImg}
        />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
