import React from "react";
import { useTranslation } from "react-i18next";
import Head from "next/head";

import useMediaQuery from "@mui/material/useMediaQuery";

import Experience from "../src/sections/Experience";
import Header from "../src/components/Header";
import HomeSection from "../src/sections/Home";
import Panel from "../src/sections/Panel";

function Home() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("name")}</title>
        <meta content={t("name")} name="description" />
        <link href={`./assets/icons/${prefersDarkMode ? "light" : "dark"}.png`} rel="icon shortcut" />
      </Head>
      <Panel>
        <Header />
        <HomeSection />
        <Experience />
      </Panel>
    </>
  );
}

export default Home;
