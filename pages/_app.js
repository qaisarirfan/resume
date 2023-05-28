import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import persistStore from "redux-persist/lib/persistStore";
import PropTypes from "prop-types";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

import { selectAppLanguage } from "../src/redux/reducers/languages";
import configureStore from "../src/redux/configureStore";

import configureI18n from "../src/config/i18n";

import theme from "../src/themes";
import constants from "../src/utils/constants";

let initialState = {};
if (typeof window !== "undefined") {
  const { __INITIAL_STATE__ } = window;
  initialState = __INITIAL_STATE__;
}

const store = configureStore(initialState);
const persistor = persistStore(store);
configureI18n();

const Theme = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const appLanguage = useSelector(selectAppLanguage);
  const language = constants.languages[appLanguage];

  const themeSetting = React.useMemo(() => {
    const themeObj = {
      ...theme,
      palette: {
        // mode: prefersDarkMode ? "dark" : "light",
      },
      direction: language?.direction,
    };
    return createTheme(themeObj);
  }, [prefersDarkMode, appLanguage]);

  return <ThemeProvider theme={themeSetting}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} />
      <Theme>
        <CssBaseline />
        <Component {...pageProps}></Component>
      </Theme>
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
