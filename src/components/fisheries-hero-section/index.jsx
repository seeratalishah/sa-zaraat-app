import React from "react";
import Image from "next/image";
import heroImage from "@/images/fisheries/slide1.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Slide Image"
        layout="fill"
        objectFit="cover"
        quality={90}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content Over Image */}
      <div className="absolute bottom-0 top-1/1 left-0 right-0">
        <div className="flex flex-col items-center justify-center gap-4 bg-green-900 bg-opacity-80 py-10">
          <h1 className="text-xl md:text-4xl lg:text-6xl text-center text-white uppercase leading-normal">
            Bringing the Freshest Seafood <br /> to the World
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
