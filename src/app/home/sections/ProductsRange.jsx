"use client";

import Image from "next/image";
import dehydrated from "@/images/ranges/dehydrated.jpg";
import spices from "@/images/ranges/Spices.jpg";
import dryfruits from "@/images/ranges/dryfruits.webp";
import fruits from "@/images/ranges/fruits.jpg";
import grains from "@/images/ranges/grains.avif";
import herbs from "@/images/ranges/herbs.jpg";
import oilseeds from "@/images/ranges/oilseeds.jpg";
import pulses from "@/images/ranges/pulses.webp";
import vegetables from "@/images/ranges/veges.jpg";
import fisheries from "@/images/ranges/fish.jpg";
import SectionHeading from "@/components/SectionHeading";

const products = [
  { image: dehydrated, name: "Dehydrated Products" },
  { image: spices, name: "Spices" },
  { image: fisheries, name: "Fisheries" },
  { image: dryfruits, name: "Dry Fruits" },
  { image: fruits, name: "Fruits" },
  { image: grains, name: "Cereal & Grains" },
  { image: herbs, name: "Herbs" },
  { image: oilseeds, name: "Oil Seeds" },
  { image: pulses, name: "Pulses" },
  { image: vegetables, name: "Vegetables" },
];

const ProductsRange = () => {
  return (
    <div className="container mx-auto px-4 mt-24">
      <SectionHeading title="Products Range" />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="rounded-xl shadow-xl overflow-hidden bg-slate-100 w-full max-w-[210px] mx-auto"
          >
            <div className="relative w-full max-w-[210px] h-32">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
            </div>
            <p className="text-md text-center bg-slate-100 p-4">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsRange;
