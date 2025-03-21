import React from "react";
import FisheryProductsPage from "./sections/FisheryProductsPage";
import HeroSection from "./sections/HeroSection";
import FisheriesMainSection from "./sections/FisheriesMainSection";
import ParagraphSection from "./sections/ParaSection";

const Fisheries = () => {
  return (
    <div>
      <HeroSection />
      <FisheriesMainSection />
      <ParagraphSection />
      <FisheryProductsPage />
    </div>
  );
};

export default Fisheries;
