import Image from "next/image";
import React from "react";
import quality from "@/images/general/quality.png";
import sustainability from "@/images/general/sustainability.png";
import innovation from "@/images/general/innovation.png";
import SectionHeading from "@/layout/SectionHeading";

const CoreValues = () => {
  return (
    <section className="mt-24 bg-green-100 py-16">
      <SectionHeading title="Our Core Values" />
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Image
              src={quality}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Quality
            </h3>
            <p className="text-gray-600">
              We ensure the finest quality in all our products.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Image
              src={sustainability}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Sustainability
            </h3>
            <p className="text-gray-600">
              Our products are sourced with environmental care.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg text-center">
            <Image
              src={innovation}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Innovation
            </h3>
            <p className="text-gray-600">
              We constantly evolve to meet customer needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
