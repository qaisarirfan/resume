import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Experience from "../src/sections/Experience/Experience";
import Header from "../src/components/Header";
import HomeSection from "../src/sections/Home";
import Panel from "../src/sections/Panel";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>{t("name")}</title>
        <meta name="description" content={t("name")} />
        <link rel="icon" href="/assets/icons/16px.png" />
      </Head>
      <Panel>
        <Header />
        <HomeSection />
        <Experience />
      </Panel>
    </div>
  );
};

export default Home;
