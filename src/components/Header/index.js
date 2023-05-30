import React from "react";
import { useTranslation } from "react-i18next";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/SettingsOutlined";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";

import AppSettingsDrawer from "@src/components/AppSettingsDrawer";

export default function PrimarySearchAppBar() {
  const [settingsOpen, setSettingsOpen] = React.useState(false);

  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Tooltip enterDelay={300} title={t("toggle_settings")}>
              <IconButton onClick={() => setSettingsOpen(true)} sx={{ px: "8px" }}>
                <SettingsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <AppSettingsDrawer onClose={() => setSettingsOpen(false)} open={settingsOpen} />
    </Box>
  );
}
