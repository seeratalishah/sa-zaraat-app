import Image from "next/image";
import slide1 from "@/images/fisheries/slide2.jpg";

export default function FisheriesMainSection() {
  return (
    <section className="container mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="w-full">
          <Image
            src={slide1} // Replace with your image path
            alt="fisheries"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
            Trusted Seafood Exporter
          </h2>
          <p className="text-gray-600 text-justify text-lg">
            Sazaraat & Fisheries is committed to delivering high-quality seafood
            products to customers worldwide. We source only the freshest seafood
            from trusted suppliers to ensure premium quality. With a focus on
            reliability and excellence, we aim to meet the growing demand for
            top-tier seafood while maintaining the highest standards.
          </p>
          <p className="text-gray-600 text-justify text-lg">
            Our goal is to provide seamless seafood business solutions under one
            roof, making it easier for our clients to access the best products
            with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
