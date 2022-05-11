import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { colours } from "../styles/theme";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>{" "}
      <ThemeProvider theme={{ colours }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
