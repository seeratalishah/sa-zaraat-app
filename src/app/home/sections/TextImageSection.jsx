"use client";
import Image from "next/image";
import spices from "@/images/general/spice-banner.jpg";
import Link from "next/link";

const TextImageSection = () => {
  return (
    <section className="py-16 bg-green-100 mt-24">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <Image
              src={spices}
              alt="Spices"
              className="w-full rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              Discover the Essence of Pure Spices
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Elevate your culinary experience with our handpicked organic
              spices. Rich in flavor, ethically sourced, and crafted to
              perfection.
            </p>
            <Link href="/products">
              <button className="mt-6 px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextImageSection;
