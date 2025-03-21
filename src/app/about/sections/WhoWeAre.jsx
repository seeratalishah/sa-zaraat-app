"use client";
import Image from "next/image";
import aboutImg from "@/images/general/about-img.png";

const WhoWeAre = () => {
  return (
    <section className="mt-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={aboutImg}
              alt="about-img"
              className="w-full shadow-xl"
            />
          </div>
          {/* Text Section */}
          <div className="text-left">
            <h2 className="text-[#434343] text-[24px] font-medium tracking-[0.2px] mt-4">
              Who We Are
            </h2>

            <div className="w-[100px] h-[3px] bg-green-600 my-2"></div>
            <p className="text-[16px] font-normal leading-[24px] text-[#343a40] mt-10 text-justify">
              SAZARAAT & FISHERIES is a trusted provider of high-quality
              agricultural products and fisheries, dedicated to supporting
              farmers, fishers, and communities worldwide. We specialize in a
              wide range of agricultural goods, including fresh fruits,
              vegetables, grains, and livestock, along with responsibly sourced
              seafood. Our mission is to bridge the gap between producers and
              consumers by delivering fresh, nutritious, and sustainably
              harvested products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
