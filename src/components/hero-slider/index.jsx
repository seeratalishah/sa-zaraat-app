"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

import slide1 from "@/images/hero-slides/slide1.jpeg"
import slide2 from "@/images/hero-slides/slide2.jpg"
import slide3 from "@/images/hero-slides/slide3.avif"

import { useEffect } from "react";

const slides = [
  {
    id: 1,
    image: slide1,
    title: "Exporter of Quality Food and Fisheries from Pakistan",
    description: " Supplying premium seafood, fresh produce, spices, and more worldwide",
  },
  {
    id: 2,
    image: slide2,
    title: "Exporter of Quality Food and Fisheries from Pakistan",
    description: " Supplying premium seafood, fresh produce, spices, and more worldwide",
  },
  {
    id: 3,
    image: slide3,
    title: "Exporter of Quality Food and Fisheries from Pakistan",
    description: " Supplying premium seafood, fresh produce, spices, and more worldwide",
  },
];

export default function HeroSlider() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-next, .swiper-button-prev {
        color: white !important;
      }
      .swiper-pagination-bullet {
        background-color: white !important;
      }
    `;
    document.head.appendChild(style);
  }, []);
  return (
    <section className="relative w-full h-[400px] md:h-[635px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        effect="fade"
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                quality={90}
              />
              <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center p-6">
                <h1 className="text-[#fff] w-[300px] md:w-[700px] text-4xl leading-[110%] font-normal" >
                  {slide.title}
                </h1>
                <h3 className="text-[#fff] text-xl leading-[100%] font-normal mt-4">{slide.description}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
