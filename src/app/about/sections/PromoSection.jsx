import Image from "next/image";
import agricultureImage from "@/images/general/agriculture.png";
import fisheriesImage from "@/images/general/fisheries.png";
import Link from "next/link";

export default function PromoSection() {
  return (
    <section className="container mt-24">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Card 1 - Agriculture */}
        <div className="relative text-white rounded-lg h-[400px] flex items-center overflow-hidden">
          <Image
            src={agricultureImage}
            alt="Agriculture Products"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 px-6">
            <h2 className="text-2xl font-bold text-opacity-100">
              We Cultivate Quality
            </h2>
            <p className="text-lg mt-2 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[350px] text-opacity-90">
              It is a well-known fact that people appreciate fresh, natural
              products when choosing agricultural goods.
            </p>
            <Link href="/agriculture">
              <button className="bg-white text-green-600 px-6 py-3 mt-10 rounded-full font-medium shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 - Fisheries */}
        <div className="relative text-white rounded-lg h-[400px] flex items-center overflow-hidden">
          <Image
            src={fisheriesImage}
            alt="Fisheries Products"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
          <div className="relative z-10 px-6">
            <h2 className="text-2xl font-bold text-opacity-100">
              We Harvest the Best of the Sea
            </h2>
            <p className="text-lg mt-2 max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[300px] xl:max-w-[350px] text-opacity-90">
              It is a well-known fact that people value fresh, high-quality
              seafood when choosing fisheries products.
            </p>
            <Link href="/fisheries">
              <button className="bg-white text-blue-600 px-6 py-3 mt-10 rounded-full font-medium shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
