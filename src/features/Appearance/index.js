import React from "react";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const Heading = styled(Typography)(({ theme }) => ({
  margin: "20px 0 10px",
  color: theme.palette.grey[600],
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(11),
  textTransform: "uppercase",
  letterSpacing: ".08rem",
}));

const IconToggleButton = styled(ToggleButton)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  "& > *": {
    marginRight: "8px",
  },
});

function Appearance() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const { t } = useTranslation();
  const [mode, setMode] = React.useState(null);

  const handleChangeThemeMode = (event, paletteMode) => {
    if (paletteMode === null) {
      return;
    }

    setMode(paletteMode);
  };

  console.log(mode);

  return (
    <Box sx={{ pl: 2, pr: 2 }}>
      <Heading gutterBottom id="settings-appearance">
        {t("appearance")}
      </Heading>
      <ToggleButtonGroup
        aria-labelledby="settings-appearance"
        color="primary"
        exclusive
        fullWidth
        onChange={handleChangeThemeMode}
        value={prefersDarkMode ? "dark" : "light"}
      >
        <IconToggleButton aria-label={t("light")} data-ga-event-action="light" data-ga-event-category="settings" value="light">
          <LightModeIcon fontSize="small" />
          {t("light")}
        </IconToggleButton>
        <IconToggleButton aria-label={t("system")} data-ga-event-action="system" data-ga-event-category="settings" value="system">
          <SettingsBrightnessIcon fontSize="small" />
          {t("system")}
        </IconToggleButton>
        <IconToggleButton aria-label={t("dark")} data-ga-event-action="dark" data-ga-event-category="settings" value="dark">
          <DarkModeOutlinedIcon fontSize="small" />
          {t("dark")}
        </IconToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

Appearance.propTypes = {};

Appearance.defaultProps = {};

export default Appearance;
