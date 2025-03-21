"use client";
import { useState } from "react";
import Image from "next/image";

// Fruits import
import kalaKulluApple from "@/images/agriculture/fruits/apple-kala-kullu.jpeg";
import goldenApple from "@/images/agriculture/fruits/golden-apple.jpeg";
import greenApple from "@/images/agriculture/fruits/green-apple.jpeg";
import redApple from "@/images/agriculture/fruits/red-apple.jpg";
import mangoes from "@/images/agriculture/fruits/mango-chaunsa.png";
import apricots from "@/images/agriculture/fruits/apricots.png";
import bananas from "@/images/agriculture/fruits/bananas.webp";
import freshFigs from "@/images/agriculture/fruits/fresh-figs.webp";
import freshPapaya from "@/images/agriculture/fruits/fresh-papaya.webp";
import aseelDates from "@/images/agriculture/fruits/aseel-dates.jpg";
import unpitedDates from "@/images/agriculture/fruits/UNPITTED-DATES.png";
import khodari from "@/images/agriculture/fruits/khodari-dates.jpg";
import mabroom from "@/images/agriculture/fruits/mabroom-dates.jpg";
import freshGuava from "@/images/agriculture/fruits/fresh-guava.webp";
import greenGuava from "@/images/agriculture/fruits/green-guava.jpeg";
import pinkGuava from "@/images/agriculture/fruits/pink-guava.jpg";
import greenPears from "@/images/agriculture/fruits/green-pears.jpeg";
import yellowPears from "@/images/agriculture/fruits/yellow-pears.avif";
import juicyOranges from "@/images/agriculture/fruits/juicy-oranges.webp";
import mandrinOranges from "@/images/agriculture/fruits/mandrin-oranges.jpg";
import sweetOranges from "@/images/agriculture/fruits/sweet-oranges.webp";
import kandhariPomeGranate from "@/images/agriculture/fruits/kandhari-pomegranate.webp";
import redPomeGranate from "@/images/agriculture/fruits/red-pomegarant.png";

// Vegetables import
import redOnions from "@/images/agriculture/vegetables/red-onion.png";
import brownOnions from "@/images/agriculture/vegetables/brown-onion.png";
import potatos from "@/images/agriculture/vegetables/potatos.jpg";
import redPotatos from "@/images/agriculture/vegetables/red-potatos.webp";
import sweetPotatos from "@/images/agriculture/vegetables/sweet-potatos.jpg";
import greenChilis from "@/images/agriculture/vegetables/green-chilis.jpeg";
import redChilis from "@/images/agriculture/vegetables/red-chilis.webp";
import spicyGreenChilis from "@/images/agriculture/vegetables/spicy-green-chilis.jpg";
import garlic from "@/images/agriculture/vegetables/garlic.jpg";
import snowMountainGarlic from "@/images/agriculture/vegetables/snow-mountain-garlic.jpeg";
import appleGourd from "@/images/agriculture/vegetables/apple-gourd.webp";
import bitterGourd from "@/images/agriculture/vegetables/bitter-gourd.jpeg";
import ghiaPumpkin from "@/images/agriculture/vegetables/ghia-pumpkin.jpg";
import pumpkin from "@/images/agriculture/vegetables/pumpkin.jpg";
import greenBeans from "@/images/agriculture/vegetables/green-beans.jpg";
import jujuba from "@/images/agriculture/vegetables/jujuba.jpg";
import okra from "@/images/agriculture/vegetables/okra.jpg";
import orangeCarrots from "@/images/agriculture/vegetables/orangi-carrots.jpg";
import redCarrots from "@/images/agriculture/vegetables/red-carrots.jpg";
import taroRoot from "@/images/agriculture/vegetables/taro-root.jpg";

// cereal and grains import
import basmatiRice from "@/images/agriculture/grains/basmati-rice.jpg";
import whiteRice from "@/images/agriculture/grains/white-rice.webp";
import brownRice from "@/images/agriculture/grains/brown-rice.jpg";
import IRRI6LongRice from "@/images/agriculture/grains/IRRI-6-LONG-GRAIN-RICe.jpg";
import boldGrainRice from "@/images/agriculture/grains/bold-grain-rice.jpg";
import maiz from "@/images/agriculture/grains/maiz-corns.jpg";
import whiteSorghum from "@/images/agriculture/grains/white-sorghum.jpg";
import buckWheat from "@/images/agriculture/grains/buckwheat.webp";

// Spices Import
import anardana from "@/images/agriculture/spices/anardana.jpg";
import blackCumin from "@/images/agriculture/spices/black-cumin.jpg";
import blackPepperPowder from "@/images/agriculture/spices/black-pepper-powder.webp";
import blackPepper from "@/images/agriculture/spices/black-pepper.jpg";
import cardamom from "@/images/agriculture/spices/cardamom.jpg";
import cinnamon from "@/images/agriculture/spices/cinnamon.jpg";
import cloves from "@/images/agriculture/spices/cloves.png";
import corianderPowder from "@/images/agriculture/spices/coriander-powder.webp";
import cuminPowder from "@/images/agriculture/spices/cumin-powder.jpg";
import cuminSeeds from "@/images/agriculture/spices/cumin-seeds.webp";
import driedFenugreekLeaves from "@/images/agriculture/spices/dried-fenugreek-leaves.jpg";
import mace from "@/images/agriculture/spices/mace.jpg";
import nigellaSeeds from "@/images/agriculture/spices/nigella-seeds.jpg";
import nutmeg from "@/images/agriculture/spices/nutmeg.jpg";
import redChiliPowder from "@/images/agriculture/spices/red-chili.webp";
import roundRedChili from "@/images/agriculture/spices/round-red-chili.jpg";
import turmericPowder from "@/images/agriculture/spices/turmeric.jpg";
import wildTurmeric from "@/images/agriculture/spices/wild-turmeric.jpg";

// Pulses import
import blackChickpeas from "@/images/agriculture/pulses/black-chickpeas.webp";
import blackLentils from "@/images/agriculture/pulses/black-lentils.avif";
import daalChana from "@/images/agriculture/pulses/daal-chana.webp";
import kidneyBeans from "@/images/agriculture/pulses/kedney-beans.webp";
import mashBeans from "@/images/agriculture/pulses/mash-beans.png";
import moongBeans from "@/images/agriculture/pulses/moong-beans.webp";
import pigeonPeas from "@/images/agriculture/pulses/Pigeon-Peas.jpg";
import redLentils from "@/images/agriculture/pulses/red-lentils.jpg";
import whiteChickpeas from "@/images/agriculture/pulses/white-chickpeas.webp";

// Dry fruits import
import almonds from "@/images/agriculture/dry-fruits/almonds.avif";
import cashews from "@/images/agriculture/dry-fruits/cashews.png";
import pineNuts from "@/images/agriculture/dry-fruits/pine-nuts.jpeg";
import pistachios from "@/images/agriculture/dry-fruits/pistachios.jpg";
import roastedCashews from "@/images/agriculture/dry-fruits/roastes-cashews.webp";
import walnuts from "@/images/agriculture/dry-fruits/walnuts.jpg";
import wholeAlmonds from "@/images/agriculture/dry-fruits/whole-almonds.jpeg";
import wholeWalnut from "@/images/agriculture/dry-fruits/whole-walnut.png";

// Herbs import
import alkanetRoot from "@/images/agriculture/herbs/alkanet-root.jpg";
import driedWaterLily from "@/images/agriculture/herbs/dried-water-lily.webp";
import dryRedRose from "@/images/agriculture/herbs/dry-red-rose.jpg";
import ephedra from "@/images/agriculture/herbs/ephedra.webp";
import liquoriceRoot from "@/images/agriculture/herbs/liquorice-root.jpg";
import oakGalls from "@/images/agriculture/herbs/Oak-Galls.jpg";
import safflower from "@/images/agriculture/herbs/safflower.webp";
import tukhamBalango from "@/images/agriculture/herbs/Tukham_Balango.jpg";

// Oil Seeds import
import blackSesameSeeds from "@/images/agriculture/oil-seeds/black-sesame-seeds.jpg";
import castorSeeds from "@/images/agriculture/oil-seeds/Castor-Seeds.webp";
import flaxSeeds from "@/images/agriculture/oil-seeds/flax-seeds.jpg";
import rapeseedCanola from "@/images/agriculture/oil-seeds/rapeseed-&-canola.jpg";
import sunflowerSeeds from "@/images/agriculture/oil-seeds/sunflower-seeds.jpg";
import whiteSesame from "@/images/agriculture/oil-seeds/white-sesame.png";

// Dehydrated products import
import blackPlums from "@/images/agriculture/dehydrated-products/black-plums.jpg";
import blackRaisin from "@/images/agriculture/dehydrated-products/black-raisin.png";
import dates from "@/images/agriculture/dehydrated-products/dates.jpeg";
import driedFigs from "@/images/agriculture/dehydrated-products/dried-figs.webp";
import driedMangoes from "@/images/agriculture/dehydrated-products/dried-mangoes.webp";
import driedYellowDates from "@/images/agriculture/dehydrated-products/dried-yellow-dates.png";
import dryApricots from "@/images/agriculture/dehydrated-products/dry-apricots.webp";
import greenRaisins from "@/images/agriculture/dehydrated-products/green-raisins.png";
import iraniRaisins from "@/images/agriculture/dehydrated-products/irani-raisins.png";
import organicDryApricots from "@/images/agriculture/dehydrated-products/organic-dry-apricots.jpg";


// Categorized Product Data
const categories = [
  {
    name: "Fruits",
    products: [
      { id: 1, name: "Mangoes", image: mangoes },
      { id: 2, name: "Kala Kullu Apple", image: kalaKulluApple },
      { id: 3, name: "Golden Apple", image: goldenApple },
      { id: 4, name: "Green Apple", image: greenApple },
      { id: 5, name: "Red Apple", image: redApple },
      { id: 6, name: "Apricots", image: apricots },
      { id: 7, name: "Bananas", image: bananas },
      { id: 8, name: "Fresh Figs", image: freshFigs },
      { id: 9, name: "Fresh Papaya", image: freshPapaya },
      { id: 10, name: "Aseel Dates", image: aseelDates },
      { id: 23, name: "UNPITTED Dates", image: unpitedDates },
      { id: 11, name: "Khodari Dates", image: khodari },
      { id: 12, name: "Mabroom Dates", image: mabroom },
      { id: 13, name: "Fresh Guava", image: freshGuava },
      { id: 14, name: "Green Guava", image: greenGuava },
      { id: 15, name: "Pink Guava", image: pinkGuava },
      { id: 16, name: "Green Pears", image: greenPears },
      { id: 17, name: "Yellow Pears", image: yellowPears },
      { id: 18, name: "Juicy Oranges", image: juicyOranges },
      { id: 19, name: "Mandarin Oranges", image: mandrinOranges },
      { id: 20, name: "Sweet Oranges", image: sweetOranges },
      { id: 21, name: "Kandhari Pomegranate", image: kandhariPomeGranate },
      { id: 22, name: "Red Pomegranate", image: redPomeGranate },
    ],
  },
  {
    name: "Vegetables",
    products: [
      { id: 1, name: "Red Onions", image: redOnions },
      { id: 2, name: "Brown Onions", image: brownOnions },
      { id: 3, name: "Potatoes", image: potatos },
      { id: 4, name: "Red Potatoes", image: redPotatos },
      { id: 5, name: "Sweet Potatoes", image: sweetPotatos },
      { id: 6, name: "Green Chilis", image: greenChilis },
      { id: 7, name: "Red Chilis", image: redChilis },
      { id: 8, name: "Spicy Green Chilis", image: spicyGreenChilis },
      { id: 9, name: "Garlic", image: garlic },
      { id: 10, name: "Snow Mountain Garlic", image: snowMountainGarlic },
      { id: 11, name: "Apple Gourd", image: appleGourd },
      { id: 12, name: "Bitter Gourd", image: bitterGourd },
      { id: 13, name: "Ghia Pumpkin", image: ghiaPumpkin },
      { id: 14, name: "Pumpkin", image: pumpkin },
      { id: 15, name: "Green Beans", image: greenBeans },
      { id: 16, name: "Jujuba", image: jujuba },
      { id: 17, name: "Okra", image: okra },
      { id: 18, name: "Orange Carrots", image: orangeCarrots },
      { id: 19, name: "Red Carrots", image: redCarrots },
      { id: 20, name: "Taro Root", image: taroRoot },
    ],
  },
  {
    name: "Cereal & Grains",
    products: [
      { id: 1, name: "Basmati Rice", image: basmatiRice },
      { id: 2, name: "White Rice", image: whiteRice },
      { id: 3, name: "Brown Rice", image: brownRice },
      { id: 4, name: "IRRI-6 Long Grain Rice", image: IRRI6LongRice },
      { id: 5, name: "Bold Grain Rice", image: boldGrainRice },
      { id: 6, name: "Maize (Corn)", image: maiz },
      { id: 7, name: "White Sorghum", image: whiteSorghum },
      { id: 8, name: "Buckwheat", image: buckWheat },
    ],
  },
  {
    name: "Spices",
    products: [
        { id: 2, name: "Black Cumin", image: blackCumin },
        { id: 3, name: "Black Pepper Powder", image: blackPepperPowder },
        { id: 4, name: "Black Pepper", image: blackPepper },
        { id: 5, name: "Cardamom", image: cardamom },
        { id: 6, name: "Cinnamon", image: cinnamon },
        { id: 7, name: "Cloves", image: cloves },
        { id: 8, name: "Coriander Powder", image: corianderPowder },
        { id: 9, name: "Cumin Powder", image: cuminPowder },
        { id: 10, name: "Cumin Seeds", image: cuminSeeds },
        { id: 11, name: "Dried Fenugreek Leaves", image: driedFenugreekLeaves },
        { id: 12, name: "Mace", image: mace },
        { id: 13, name: "Nigella Seeds", image: nigellaSeeds },
        { id: 14, name: "Nutmeg", image: nutmeg },
        { id: 15, name: "Red Chili", image: redChiliPowder },
        { id: 16, name: "Round Red Chili", image: roundRedChili },
        { id: 17, name: "Turmeric", image: turmericPowder },
        { id: 18, name: "Wild Turmeric", image: wildTurmeric },
      ],
  },
  {
    name: "Pulses",
    products:  [
        { id: 1, name: "Black Chickpeas", image: blackChickpeas },
        { id: 2, name: "Black Lentils", image: blackLentils },
        { id: 3, name: "Daal Chana", image: daalChana },
        { id: 4, name: "Kidney Beans", image: kidneyBeans },
        { id: 5, name: "Mash Beans", image: mashBeans },
        { id: 6, name: "Moong Beans", image: moongBeans },
        { id: 7, name: "Pigeon Peas", image: pigeonPeas },
        { id: 8, name: "Red Lentils", image: redLentils },
        { id: 9, name: "White Chickpeas", image: whiteChickpeas },
      ],
  },
  {
    name: "Dry Fruits",
    products:  [
        { id: 1, name: "Almonds", image: almonds },
        { id: 2, name: "Cashews", image: cashews },
        { id: 3, name: "Pine Nuts", image: pineNuts },
        { id: 4, name: "Pistachios", image: pistachios },
        { id: 5, name: "Roasted Cashews", image: roastedCashews },
        { id: 6, name: "Walnuts", image: walnuts },
        { id: 7, name: "Whole Almonds", image: wholeAlmonds },
        { id: 8, name: "Whole Walnut", image: wholeWalnut },
      ],
  },
  {
    name: "Herbs",
    products: [
        { id: 1, name: "Alkanet Root", image: alkanetRoot },
        { id: 2, name: "Dried Water Lily", image: driedWaterLily },
        { id: 3, name: "Dry Red Rose", image: dryRedRose },
        { id: 4, name: "Ephedra", image: ephedra },
        { id: 5, name: "Liquorice Root", image: liquoriceRoot },
        { id: 6, name: "Oak Galls", image: oakGalls },
        { id: 7, name: "Safflower", image: safflower },
        { id: 8, name: "Tukham Balango", image: tukhamBalango },
      ],
  },
  {
    name: "Oil Seeds",
    products: [
        { id: 1, name: "Black Sesame Seeds", image: blackSesameSeeds },
        { id: 2, name: "Castor Seeds", image: castorSeeds },
        { id: 3, name: "Flax Seeds", image: flaxSeeds },
        { id: 4, name: "Rapeseed & Canola", image: rapeseedCanola },
        { id: 5, name: "Sunflower Seeds", image: sunflowerSeeds },
        { id: 6, name: "White Sesame", image: whiteSesame },
      ],
  },
  {
    name: "Dehydrated Products",
    products: [
        { id: 1, name: "Black Plums", image: blackPlums },
        { id: 2, name: "Black Raisin", image: blackRaisin },
        { id: 3, name: "Dates", image: dates },
        { id: 4, name: "Dried Figs", image: driedFigs },
        { id: 5, name: "Dried Mangoes", image: driedMangoes },
        { id: 6, name: "Dried Yellow Dates", image: driedYellowDates },
        { id: 7, name: "Dry Apricots", image: dryApricots },
        { id: 8, name: "Green Raisins", image: greenRaisins },
        { id: 9, name: "Irani Raisins", image: iraniRaisins },
        { id: 10, name: "Organic Dry Apricots", image: organicDryApricots },
        { id: 11, name: "Anardana", image: anardana },
      ],
  },
];


const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  return (
    <section className="mt-24">
      <div className="container">
        {/* Tabs */}
        <div className="overflow-x-auto whitespace-nowrap flex gap-4 mb-6 border-b pb-3">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-[4px] transition-all hover:bg-green-600 hover:text-white duration-300 ${
                activeCategory === category.name
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories
            .find((category) => category.name === activeCategory)
            ?.products.map((product) => (
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

export default ProductsSection;
