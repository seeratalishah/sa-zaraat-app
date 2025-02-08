import EmailBanner from "@/components/banner";
import Footer from "@/components/footer/Footer";
import GoogleAddressSection from "@/components/google-maps";
import HeroSlider from "@/components/hero-slider";
import ParagraphSection from "@/components/paragraph-section";
import ProductsRange from "@/components/products-range";
import ProductsSlider from "@/components/products-slider";
import TextImageSection from "@/components/text-image";
import Slider from "@/components/new-slider/index"

export default function Home() {
  return (
   <div className="flex flex-col">
    <HeroSlider />
    <ParagraphSection />
    <ProductsSlider />
    <ProductsRange />
    <TextImageSection />
   </div>
  );
}
