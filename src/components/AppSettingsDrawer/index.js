import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

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

function AppSettingsDrawer({ onClose, open }) {
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
    <Drawer
      PaperProps={{
        elevation: 0,
        sx: { width: { xs: 310, sm: 360 }, borderRadius: "10px 0px 0px 10px" },
      }}
      anchor="right"
      onClose={onClose}
      open={open}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 2 }}>
        <Typography fontWeight="500" variant="body1">
          {t("settings")}
        </Typography>
        <IconButton color="inherit" edge="end" onClick={onClose}>
          <CloseIcon color="primary" fontSize="small" />
        </IconButton>
      </Box>
      <Divider />
      <Box sx={{ pl: 2, pr: 2 }}>
        <Heading gutterBottom id="settings-mode">
          {t("mode")}
        </Heading>
        <ToggleButtonGroup
          aria-labelledby="settings-mode"
          color="primary"
          exclusive
          fullWidth
          onChange={handleChangeThemeMode}
          value={mode}
        >
          <IconToggleButton aria-label={t("light")} data-ga-event-action="light" data-ga-event-category="settings" value="light">
            <LightModeIcon fontSize="small" />
            {t("light")}
          </IconToggleButton>
          <IconToggleButton
            aria-label={t("system")}
            data-ga-event-action="system"
            data-ga-event-category="settings"
            value="system"
          >
            <SettingsBrightnessIcon fontSize="small" />
            {t("system")}
          </IconToggleButton>
          <IconToggleButton aria-label={t("dark")} data-ga-event-action="dark" data-ga-event-category="settings" value="dark">
            <DarkModeOutlinedIcon fontSize="small" />
            {t("dark")}
          </IconToggleButton>
        </ToggleButtonGroup>
        <Heading gutterBottom>{t("language")}</Heading>
      </Box>
    </Drawer>
  );
}

AppSettingsDrawer.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool,
};

AppSettingsDrawer.defaultProps = {
  open: false,
};

export default AppSettingsDrawer;
