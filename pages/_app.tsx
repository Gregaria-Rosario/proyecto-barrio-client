import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

import "../styles/globals.css";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    ></Global>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
