
import "../public/css/styles.css";
import React from "react";
import { styleRenderer, StyleProvider, ThemePicker } from "vcc-ui";
import { AppProps } from 'next/app';

const renderer = styleRenderer();

function HomePage(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <React.StrictMode>
      <StyleProvider renderer={renderer}>
        <ThemePicker variant="light">
          <Component {...pageProps} />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
