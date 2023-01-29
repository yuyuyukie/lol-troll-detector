import React from "react";

import { AppProps } from "next/app";

import "semantic-ui-css/semantic.min.css";
import { GlobalStyle } from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyle}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
