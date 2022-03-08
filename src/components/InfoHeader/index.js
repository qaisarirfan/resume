import React from "react";
import { useTranslation } from "react-i18next";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function InfoHeader() {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {t("hello_world")}
        </Typography>
        <Typography variant="h5">{t("name")}</Typography>
        <Typography color="text.secondary">{t("title")}</Typography>
      </CardContent>
    </Card>
  );
}
