import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <Image width={60} height={60} src="/images/profile-img.png" alt={t("name")} />
        </div>
        <div>
          <Typography variant="h5" noWrap>
            {t("name")}
          </Typography>
          <Typography variant="caption" noWrap>
            {t("title")}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
