import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { colorOptions } from "../data/colorOptions";
import { LIGHT_THEME } from "../constants/themes";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-identicon-sprites";

function MyApp({ Component, pageProps }: AppProps) {
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

  if (typeof window === "undefined") return <h1>loading</h1>;

  return (
    <ChakraProvider resetCSS={false}>
      <Component {...pageProps} profileImage={profileImg} />
    </ChakraProvider>
  );
}

export default MyApp;
