"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  A11y,
} from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import mangoes from "@/images/agriculture/fruits/mango-chaunsa.png";
import redOnions from "@/images/agriculture/vegetables/red-onion.png";
import almonds from "@/images/agriculture/dry-fruits/almonds.avif";
import redLentils from "@/images/agriculture/pulses/red-lentils.jpg";
import potatos from "@/images/agriculture/vegetables/potatos.jpg";
import greenChilis from "@/images/agriculture/vegetables/green-chilis.jpeg";
import brownRice from "@/images/agriculture/grains/brown-rice.jpg";
import turmericPowder from "@/images/agriculture/spices/turmeric.jpg";
import whiteChickpeas from "@/images/agriculture/pulses/white-chickpeas.webp";
import sunflowerSeeds from "@/images/agriculture/oil-seeds/sunflower-seeds.jpg";
import organicDryApricots from "@/images/agriculture/dehydrated-products/organic-dry-apricots.jpg";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { id: 1, image: mangoes, name: "Mangoes" },
  { id: 2, image: redOnions, name: "Red Onions" },
  { id: 3, image: almonds, name: "Almonds" },
  { id: 4, image: potatos, name: "Potatos" },
  { id: 5, image: redLentils, name: "Red Lentils" },
  { id: 6, image: greenChilis, name: "Green Chilis" },
  { id: 7, image: brownRice, name: "Brown Rice" },
  { id: 8, image: turmericPowder, name: "Turmeric" },
  { id: 9, image: whiteChickpeas, name: "White Chickpeas" },
  { id: 10, image: sunflowerSeeds, name: "Sunflower Seeds" },
  { id: 11, image: organicDryApricots, name: "Dry Apricots" },
];

const ProductsSlider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <section className="py-16 bg-green-50 mt-24">
      <SectionHeading title="Featured Products" />

      <div className="container flex items-center gap-4 mt-10">
        {/* Left Arrow (Always Visible) */}
        <button
          onClick={handlePrev}
          className="z-10 text-green-600 cursor-pointer transition-opacity duration-300 hover:opacity-80"
        >
          <ArrowLeftCircle size={32} />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, A11y]}
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            480: { slidesPerView: 3 },
            740: { slidesPerView: 4 },
            1275: { slidesPerView: 5 },
          }}
          onSwiper={setSwiperInstance}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="bg-white flex justify-center items-center max-w-[200px] max-h-[250px] rounded-xl"
            >
              <div className="flex-col justify-center items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[180px] rounded-xl"
                />
                <p className="text-lg text-center bg-slate-200 p-2 w-full rounded-b-xl">
                  {product.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Arrow (Always Visible) */}
        <button
          onClick={handleNext}
          className="text-green-600 cursor-pointer transition-opacity duration-300 hover:opacity-80"
        >
          <ArrowRightCircle size={32} />
        </button>
      </div>
    </section>
  );
};

export default ProductsSlider;
