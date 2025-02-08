"use client";
import Image from "next/image";
import about from "@/images/mixed-products/about.jpg";
import SectionHeading from "@/components/section-heading";

import quality from "@/images/quality.png";
import sustainability from "@/images/sustainability.png";
import innovation from "@/images/innovation.png";

const AboutPage = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="w-full">
        <Image
          src={about}
          alt="About Us"
          className="w-full h-[80vh] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Story Section */}
      <div className="container text-center bg-white mt-24">
        <SectionHeading title="Who We Are" />
        <p className="text-[16px] font-normal leading-[24px] text-[#343a40] mt-10">
          SA ZARAAT & FISHERIES is a trusted provider of high-quality
          agricultural products and fisheries, dedicated to supporting farmers,
          fishers, and communities worldwide. We specialize in a wide range of
          agricultural goods, including fresh fruits, vegetables, grains, and
          livestock, along with responsibly sourced seafood. Our mission is to
          bridge the gap between producers and consumers by delivering fresh,
          nutritious, and sustainably harvested products.
        </p>
      </div>

      {/* Story Section */}
      <div className="container text-center bg-white mt-24">
        <SectionHeading title="Why Choose Us" />
        <p className="text-[16px] font-normal leading-[24px] text-[#343a40] mt-10">
          With experience in the agriculture and fisheries industries,
          we prioritize quality, sustainability, and customer satisfaction. Our
          expert team ensures that every product meets strict quality standards,
          from farm to table. By embracing eco-friendly practices and innovative
          farming techniques, we contribute to a healthier planet while
          providing reliable food sources. Whether you're looking for bulk
          supply or customized solutions, we are committed to meeting your needs
          with excellence.
        </p>
      </div>

      {/* Team Section */}
      <div className="mt-24 bg-green-100 py-16">
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
      </div>
    </section>
  );
};

export default AboutPage;
