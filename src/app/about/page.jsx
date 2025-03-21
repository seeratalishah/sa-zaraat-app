import PromoSection from "./sections/PromoSection";
import FeaturesSection from "./sections/FeaturesSection";
import HeroSection from "./sections/HeroSection";
import WhoWeAre from "./sections/WhoWeAre";
import CoreValues from "./sections/CoreValues";

const AboutPage = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <FeaturesSection />
      <PromoSection />
      <CoreValues />
    </div>
  );
};

export default AboutPage;
