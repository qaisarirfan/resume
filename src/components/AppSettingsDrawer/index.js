import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Appearance from "../../features/Appearance";
import LanguageSwitcher from "../../features//LanguageSwitcher";

export default function AppSettingsDrawer({ onClose, open }) {
  const { t } = useTranslation();

  return (
    <Drawer
      PaperProps={{
        elevation: 0,
        sx: { width: { xs: 310, sm: 360 } },
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
      <Appearance />
      <LanguageSwitcher />
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
