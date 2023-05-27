import React from "react";
import { useTranslation } from "react-i18next";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function InfoHeader() {
  const { t } = useTranslation();
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>{t("personal_info")}</Typography>
        <Box>
          <Typography>{t("mobile_heading")}</Typography>
          <Typography>{t("mobile_number")}</Typography>
        </Box>
        <Box>
          <Typography>{t("email_heading")}</Typography>
          <a href="mailto:qaisar.irfan.2888@gmail.com">qaisar.irfan.2888@gmail.com</a>
        </Box>
        <Box>
          <Typography>{t("linkedin_profile")}</Typography>
          <a href="https://www.linkedin.com/in/qaisarirfan" rel="noreferrer" target="_blank">
            https://www.linkedin.com/in/qaisarirfan
          </a>
        </Box>
      </CardContent>
    </Card>
  );
}
