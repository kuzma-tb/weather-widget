import React from "react";
import { AppProps } from "next/app";
import WeatherProvider from "../context/WeatherProvider";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <WeatherProvider>
      <Component {...pageProps} />
    </WeatherProvider>
  );
};

export default MyApp;
