import "../styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={false}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
