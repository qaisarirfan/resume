import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

let theme = createTheme();

theme = createTheme(
  deepmerge(theme, {
    shadows: Array(25).fill("none"),
    palette: {
      primary: {
        main: "#023974",
        dark: "#012751",
        light: "#34608f",
        contrastText: "#fff",
      },
      secondary: {
        main: "#ffffff",
        dark: "#b2b2b2",
        light: "#ffffff",
        contrastText: "#34608f",
      },
    },
  })
);

export default theme;
