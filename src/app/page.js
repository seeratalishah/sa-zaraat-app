import HeroSlider from "./home/sections/HeroSlider";
import ParagraphSection from "./home/sections/ParaSection";
import ProductsSlider from "./home/sections/ProductsSlider";
import ProductsRange from "./home/sections/ProductsRange";
import TextImageSection from "./home/sections/TextImageSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <ParagraphSection />
      <ProductsSlider />
      <ProductsRange />
      <TextImageSection />
    </div>
  );
}
