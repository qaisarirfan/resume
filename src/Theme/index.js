import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { selectAppLanguage } from "@src/redux/reducers/languages";

import constants from "@src/utils/constants";

export default function Theme({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const appLanguage = useSelector(selectAppLanguage);
  const language = constants.languages[appLanguage];

  const themeSetting = React.useMemo(() => {
    const themeObj = {
      direction: language?.direction,
      // Mode: prefersDarkMode ? "dark" : "light",
      palette: {
        primary: {
          contrastText: "#fff",
          dark: "#012751",
          light: "#34608f",
          main: "#023974",
        },
        secondary: {
          contrastText: "#34608f",
          dark: "#b2b2b2",
          light: "#ffffff",
          main: "#ffffff",
        },
      },
      shadows: Array(25).fill("none"),
    };
    return createTheme(themeObj);
  }, [prefersDarkMode, appLanguage]);

  return <ThemeProvider theme={themeSetting}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
