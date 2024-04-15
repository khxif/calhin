import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";
import { products } from "@/utils/products";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-10">
      <HeroParallax products={products} />
      <HomeAbout />
      <HomeContact />
    </main>
  );
}
