import React from "react";
import about from "@/images/general/about-img.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full">
      <Image
        src={about}
        alt="About Us"
        className="w-full h-[80vh] rounded-lg shadow-lg object-cover"
      />
    </section>
  );
};

export default HeroSection;
