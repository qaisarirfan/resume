import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Head from "next/head";
import persistStore from "redux-persist/lib/persistStore";
import PropTypes from "prop-types";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import configureI18n, { languageIsRTL } from "../src/config/i18n";
import configureStore from "../src/redux/configureStore";
import theme from "../src/themes";

let themeSetting = createTheme({
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  themeSetting = React.useMemo(() => {
    const theme = {
      palette: {
        // mode: prefersDarkMode ? "dark" : "light",
      },
    };
    return createTheme(theme);
  }, [prefersDarkMode]);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <Head>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={themeSetting}>
        <CssBaseline />
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
