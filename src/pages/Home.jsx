// pages/Home.jsx
import React from "react";
import AppDescriptionSection from "../components/AppDescriptionSection";
import FeatureSection from "../components/FeatureSection";
import ChartTable from "../components/ChartTable";
import WaveBackground from "../components/WaveBackground";

import ContactSection from "../components/ContactSection";
import IntroVideoSection from "../components/IntroVideoSection";
import TelegramBotSection from "../components/TelegramBotSection";
import BackToTopButton from "../components/BackToTopButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <WaveBackground />
      <div className="-mt-44 w-full z-10 relative">
        <ChartTable />
      </div>

      <AppDescriptionSection />
      <FeatureSection />

      <IntroVideoSection />
      <TelegramBotSection />
      <ContactSection />

      <BackToTopButton />
    </div>
  );
};

export default Home;
