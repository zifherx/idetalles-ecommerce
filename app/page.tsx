import { BannerDiscount } from "@/components/BannerDiscount";
import { BannerProducts } from "@/components/BannerProducts";
import { CarouselTextBanner } from "@/components/Carousel-Text-Banner";
import { ChooseCategory } from "@/components/Choose-Category";
import { FeaturesProducts } from "@/components/Features-Products";

export default function Home() {
  return (
    <>
      <main>
        <CarouselTextBanner />
        <FeaturesProducts />
        <BannerDiscount />
        <ChooseCategory />
        <BannerProducts />
      </main>
    </>
  );
}
