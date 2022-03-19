import React from "react";
import Head from "next/head";
import { useTranslation } from "react-i18next";

import Header from "../src/components/Header";
import HomeSection from "../src/sections/Home";
import Panel from "../src/sections/Panel";
import SkillsSection from "../src/sections/Skills";
import Experience from "../src/sections/Experience/Experience";

console.log(process.env.NEXT_PUBLIC_VERCEL_URL);
console.log(process.env.NEXT_PUBLIC_VERCEL_ENV);

function Home() {
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
        <SkillsSection />
        <Experience />
      </Panel>
    </div>
  );
}

export default Home;
