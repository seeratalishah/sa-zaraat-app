"use client";
import Image from "next/image";
import agricultureSlide1 from "@/images/agriculture/agriculture-slide1.jpg";
import agricultureSlide2 from "@/images/agriculture/agriculture-slide2.webp";
import agricultureSlide3 from "@/images/agriculture/agriculture-slide3.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    }
  }, []);

  return (
    <section className="relative bg-gray-900 text-white w-full h-[60vh] sm:h-[80vh]">
      <div className="grid sm:grid-cols-3 grid-rows-2 h-full">
        {/* Collage Layout */}
        <div className="relative col-span-2 row-span-2 sm:block hidden">
          <Image src={agricultureSlide1} layout="fill" objectFit="cover" alt="Catcher" className="object-[50%_70%]"/>
        </div>
        <div className="relative sm:block hidden">
          <Image src={agricultureSlide2} layout="fill" objectFit="cover" alt="Pitcher" />
        </div>
        <div className="relative">
          <Image src={agricultureSlide3} layout="fill" objectFit="cover" alt="Batter" className="sm:object-[50%_50%]"/>
        </div>
      </div>

      {/* Hero Text Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-90 px-8 py-10 text-center">
        <div className="absolute left-4 top-4 text-green-600 text-2xl md:text-5xl">🌾</div>

        <h1 className="text-xl md:text-4xl lg:text-6xl text-center text-white uppercase leading-normal">
        Fresh & Quality Agriculture Products
        </h1>

        <div className="absolute right-4 bottom-4 text-green-600 text-2xl md:text-5xl">
        🌾
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
