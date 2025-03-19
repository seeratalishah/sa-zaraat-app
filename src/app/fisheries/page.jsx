import FisheryProductsPage from "@/components/fisheries";
import HeroSection from "@/components/fisheries-hero-section";
import FisheriesMainSection from "@/components/fisheries-main-section";
import FisheriesParagraphSection from "@/components/fisheries-para-section";
import FisheriesSlider from "@/components/fisheries-slider";
import React from "react";

const Fisheries = () => {
  return (
    <div>
      <HeroSection />
      <FisheriesMainSection />
      <FisheriesParagraphSection />
      <FisheryProductsPage />
    </div>
  );
};

export default Fisheries;
