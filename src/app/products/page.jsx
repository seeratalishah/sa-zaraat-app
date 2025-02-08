"use client";
import Image from "next/image";
import SectionHeading from "@/components/section-heading";

import spicesMix from "@/images/mixed-products/mixed.jpg";
import onions from "@/images/mixed-products/onions.webp";
import carrots from "@/images/mixed-products/carrots.jpg";
import cheries from "@/images/mixed-products/cheries.jpg";
import greenbeans from "@/images/mixed-products/greenbeans.jpeg";
import ladyfinger from "@/images/mixed-products/ladyfinger.webp";
import mangoes from "@/images/mixed-products/mangoes.jpg";
import pears from "@/images/mixed-products/pears.jpg";
import potatos from "@/images/mixed-products/potatoss.webp";
import redChili from "@/images/mixed-products/red-chili.webp";
import redRome from "@/images/mixed-products/red-rome.jpg";
import tomatos from "@/images/mixed-products/tomatos.png";
import turmeric from "@/images/mixed-products/turmeric.jpg";
import yellowApple from "@/images/mixed-products/yellow-apple.png";
import tuna from "@/images/mixed-products/tuna.jpg";
import trout from "@/images/mixed-products/troutfish.webp";
import prowns from "@/images/mixed-products/prowns.jpg";
import salmon from "@/images/mixed-products/salmon.jpg";
import wheat from "@/images/mixed-products/wheat.jpg";
import whiteDaal from "@/images/mixed-products/white-mash.webp";
import whiteRice from "@/images/mixed-products/white-rice.webp";
import blackDaal from "@/images/mixed-products/black-daal.webp";
import brownRice from "@/images/mixed-products/brown-rice.jpg";
import chanaDaal from "@/images/mixed-products/chana.webp";
import corn from "@/images/mixed-products/makai.webp";
import redDaal from "@/images/mixed-products/masoor.webp";

// Dummy Product Data (Replace with real data)
const products = [
  { id: 1, name: "Wheat", image: wheat },
  { id: 1, name: "Mixed Spices", image: spicesMix },
  { id: 2, name: "Onions", image: onions },
  { id: 3, name: "Carrots", image: carrots },
  { id: 3, name: "White Lentils", image: whiteDaal },
  { id: 4, name: "Cherries", image: cheries },
  { id: 4, name: "Tuna Fish", image: tuna },
  { id: 5, name: "Green Beans", image: greenbeans },
  { id: 6, name: "Ladyfingers", image: ladyfinger },
  { id: 6, name: "White Rice", image: whiteRice },
  { id: 7, name: "Mangoes", image: mangoes },
  { id: 8, name: "Pears", image: pears },
  { id: 8, name: "Black Lentils", image: blackDaal },
  { id: 8, name: "Trout Fish", image: trout },
  { id: 9, name: "Brown Rice", image: brownRice },
  { id: 9, name: "Potatos", image: potatos },
  { id: 10, name: "Red Chili", image: redChili },
  { id: 10, name: "prowns", image: prowns },
  { id: 10, name: "Split Chickpeas", image: chanaDaal },
  { id: 11, name: "Red Rome", image: redRome },
  { id: 12, name: "Tomatos", image: tomatos },
  { id: 12, name: "Corns", image: corn },
  { id: 13, name: "Turmeric", image: turmeric },
  { id: 13, name: "Salmon Fish", image: salmon },
  { id: 13, name: "Red Lentils", image: redDaal },
  { id: 14, name: "Yellow Apple", image: yellowApple },
];

const ProductsPage = () => {
  return (
    <section className="mt-24">
      <div className="container">
        {/* Heading */}
        <SectionHeading title="Our Products" />
        <p className="text-[18px] text-center font-normal leading-[24px] text-[#343a40] my-10">
          Browse our selection of premium, organic spices and ingredients.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {products.map((product) => (
            <div className="w-full min-w-[200px] mx-auto max-w-[200px] flex-col justify-center items-center shadow-lg rounded-xl border bg-slate-200 border-slate-200" >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full min-w-[200px] max-w-[200px] h-[180px] rounded-t-xl"
              />
              <p className="text-lg text-center bg-slate-200 p-2 w-full rounded-b-xl">
                {product.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
