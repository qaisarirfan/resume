import Head from "next/head";

import Panel from "../src/sections/Panel";
import HomeSection from "../src/sections/Home";
import SkillsSection from "../src/sections/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Qaisar Irfan</title>
        <meta name="description" content="Qaisar Irfan" />
        <link rel="icon" href="/assets/icons/16px.png" />
      </Head>
      <Panel>
        <HomeSection />
        <SkillsSection></SkillsSection>
      </Panel>
    </div>
  );
}
