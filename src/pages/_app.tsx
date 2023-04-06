/* eslint-disable import/no-extraneous-dependencies */
import "../styles/global.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ClerkProvider {...pageProps}>
    <Component {...pageProps} />
  </ClerkProvider>
);

export default MyApp;
