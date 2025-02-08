"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import Image from "next/image";
import dehydrated from "@/images/products/dehydrated.jpg";
import spices from "@/images/products/Spices.jpg";
import dryfruits from "@/images/products/dryfruits.webp";
import fruits from "@/images/products/fruits.jpg";
import grains from "@/images/products/grains.avif";
import herbs from "@/images/products/herbs.jpg";
import oilseeds from "@/images/products/oilseeds.jpg";
import pulses from "@/images/products/pulses.webp";
import vegetables from "@/images/products/veges.jpg";
import fisheries from "@/images/products/fish.jpg";

const products = [
  {
    image: dehydrated,
    name: "Dehydrated Products",
  },
  {
    image: spices,
    name: "Spices",
  },
  {
    image: fisheries,
    name: "Fisheries",
  },
  {
    image: dryfruits,
    name: "Dry Fruits",
  },
  {
    image: fruits,
    name: "Fruits",
  },
  {
    image: grains,
    name: "Cereal & Grains",
  },
  {
    image: herbs,
    name: "Herbs",
  },
  {
    image: oilseeds,
    name: "Oil Seeds",
  },
  {
    image: pulses,
    name: "Pulses",
  },
  {
    image: vegetables,
    name: "Vegetables",
  },
];

const ProductSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const position = sliderRef.current.scrollLeft;
      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

      setScrollPosition(position);
      setIsLeftDisabled(position === 0);
      setIsRightDisabled(Math.ceil(position) >= Math.floor(maxScroll));
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => slider.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") scrollLeft();
    if (e.key === "ArrowRight") scrollRight();
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto px-4 py-8"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollLeft}
          disabled={isLeftDisabled}
          className={`p-3 rounded-full bg-white shadow-lg ${
            isLeftDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          aria-label="Previous products"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-800" />
        </motion.button>
      </div>

      <div
  ref={sliderRef}
  className="flex overflow-x-auto scroll-smooth hide-scrollbar w-full"
  style={{ scrollSnapType: "x mandatory" }}
>
  {products.map((product) => (
    <motion.div
      key={product.name} // changed from product.id (which wasn't in your array)
      className="flex-none w-1/5 min-w-[180px] scroll-snap-align-start"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-col justify-center items-center">
        <Image
          src={product.image}
          alt={product.name}
          className="w-[200px] h-[180px] rounded-t-xl"
        />
        <p className="text-lg font-semibold text-center bg-slate-200 p-2 w-[200px] rounded-b-xl">
          {product.name}
        </p>
      </div>
    </motion.div>
  ))}
</div>


      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollRight}
          disabled={isRightDisabled}
          className={`p-3 rounded-full bg-white shadow-lg ${
            isRightDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
          aria-label="Next products"
        >
          <FaChevronRight className="w-6 h-6 text-gray-800" />
        </motion.button>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
