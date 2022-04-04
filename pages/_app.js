import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import persistStore from "redux-persist/lib/persistStore";

import configureI18n, { languageIsRTL } from "../src/config/i18n";
import configureStore from "../src/redux/configureStore";
import theme from "../src/themes";

const themeSetting = createTheme({
  ...theme,
  direction: languageIsRTL() ? "rtl" : "ltr",
});

let initialState = {};
if (typeof window !== "undefined") {
  const { __INITIAL_STATE__ } = window;
  initialState = __INITIAL_STATE__;
}

const store = configureStore(initialState);
const persistor = persistStore(store);
configureI18n();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}></PersistGate>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={themeSetting}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
