"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import almonds from "@/images/products/almond.jpg";
import bellPepper from "@/images/products/bell-peper.png";
import coffee from "@/images/mixed-products/white-rice.webp";
import cumin from "@/images/products/cumin.png";
import onion from "@/images/products/onion.png";
import pepper from "@/images/products/pepper.png";
import potatos from "@/images/products/potatos.webp";
import wallnut from "@/images/products/wallnut.png";
import SectionHeading from "../section-heading";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const products = [
  { id: 1, image: almonds, name: "Almonds" },
  { id: 2, image: bellPepper, name: "Bell Pepper" },
  { id: 3, image: coffee, name: "Rice" },
  { id: 4, image: cumin, name: "Cumin" },
  { id: 5, image: onion, name: "Onion" },
  { id: 6, image: pepper, name: "Chili" },
  { id: 7, image: wallnut, name: "Wallnuts" },
  { id: 8, image: potatos, name: "Potatos" },
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
