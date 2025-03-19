"use client";
import Image from "next/image";
import tilapia from "@/images/fisheries/tilapia.png";
import whitePomfret from "@/images/fisheries/white-pomfret.png";
import blackPomfret from "@/images/fisheries/Black-Pomfret.jpg";
import silverWhitePomfret from "@/images/fisheries/White-Silver-Pomfret.webp";
import brownPrown from "@/images/fisheries/brown-prown.jpg";
import flowerPrown from "@/images/fisheries/flower-prown.jpg";
import pinkShrimp from "@/images/fisheries/pink-shrimp.jpg";
import tigerShrimp from "@/images/fisheries/tiger-shrimp.jpg";
import whiteShrimp from "@/images/fisheries/white-shrimp.webp";
import brownTrout from "@/images/fisheries/brown-trout.jpg";
import lakeTrout from "@/images/fisheries/lake-trout.jpg";
import rainbowTrout from "@/images/fisheries/rainbow-trout.webp";
import coralCrab from "@/images/fisheries/coral-crab.jpg";
import Crab from "@/images/fisheries/coral.png";
import mudCrab from "@/images/fisheries/mud-crab.jpg";
import tuna from "@/images/fisheries/fresh-tuna.jpg";
import yellowfinTuna from "@/images/fisheries/yellowfin-tuna.jpg";
import mackeral from "@/images/fisheries/indian-mackerel.jpg";
import mudSpinyLobster from "@/images/fisheries/mud-spiny-lobster.jpg";
import ornateSpinyLobster from "@/images/fisheries/OrnateSpiny-Lobster.jpg";
import rockLobster from "@/images/fisheries/rock-lobster-min.jpg";
import spinyLobster from "@/images/fisheries/Spiny-Lobster.png";
import squid from "@/images/fisheries/squid.webp";
import octopus from "@/images/fisheries/Octopus.jpg";
import threeSpotCrab from "@/images/fisheries/Three-spot-crab.jpg";

// Dummy Product Data (Replace with real data)
const products = [
  { id: 1, name: "Tilapia", image: tilapia },
  { id: 2, name: "White Pomfret", image: whitePomfret },
  { id: 3, name: "Black Pomfret", image: blackPomfret },
  { id: 4, name: "White and Silver Pomfret", image: silverWhitePomfret },
  { id: 5, name: "Brown Prown", image: brownPrown },
  { id: 6, name: "Flower Prown", image: flowerPrown },
  { id: 7, name: "Pink Shrimp", image: pinkShrimp },
  { id: 8, name: "Tiger Shrimp", image: tigerShrimp },
  { id: 9, name: "White Shrimp", image: whiteShrimp },
  { id: 10, name: "Brown Trout", image: brownTrout },
  { id: 11, name: "Lake Trout", image: lakeTrout },
  { id: 12, name: "Rainbow Trout", image: rainbowTrout },
  { id: 13, name: "Coral Crab", image: coralCrab },
  { id: 24, name: "Three Spot Crab", image: threeSpotCrab },
  { id: 14, name: "Crab", image: Crab },
  { id: 15, name: "Mud Crab", image: mudCrab },
  { id: 16, name: "Tuna", image: tuna },
  { id: 17, name: "Yellowfin Tuna", image: yellowfinTuna },
  { id: 18, name: "Indian Mackerel", image: mackeral },
  { id: 19, name: "Mud Spiny Lobster", image: mudSpinyLobster },
  { id: 20, name: "Ornate Spiny Lobster", image: ornateSpinyLobster },
  { id: 21, name: "Rock Lobster", image: rockLobster },
  { id: 22, name: "Spiny Lobster", image: spinyLobster },
  { id: 23, name: "Squid", image: squid },
  { id: 25, name: "Octopus", image: octopus },
];

const FisheryProductsPage = () => {
  return (
    <section className="mt-24">
      <div className="container">
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full min-w-[200px] mx-auto max-w-[400px] flex-col justify-center items-center shadow-lg rounded-xl border border-slate-200 overflow-hidden"
            >
              <div className="overflow-hidden rounded-t-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full min-w-[200px] max-w-[400px] h-[250px] rounded-t-xl transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
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

export default FisheryProductsPage;

