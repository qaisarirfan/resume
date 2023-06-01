import React from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import useMediaQuery from "@mui/material/useMediaQuery";

import Experience from "../src/sections/Experience";
import HomeSection from "../src/sections/Home";
import Panel from "../src/sections/Panel";

export default function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { t } = useTranslation();

  const imageMode = prefersDarkMode ? "light" : "dark";

  return (
    <>
      <Head>
        <title>{t("name")}</title>
        <meta content={t("name")} name="description" />
        <link href={`./assets/icons/${imageMode}.png`} rel="shortcut icon" />
      </Head>
      <Panel>
        <HomeSection />
        <Experience />
      </Panel>
    </>
  );
}
