import { products } from "@/utils/products";
import { HeroParallax } from "../components/ui/hero-parallax";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-10">
      <HeroParallax products={products} />

      <section className="py-20 flex flex-col items-center justify-center space-y-6">
        <h1
          className="text-3xl font-medium text-center relative before:absolute before:rounded-full
         before:w-3/5 before:h-1 before:bg-red-600 before:bottom-0 before:left-0 py-2.5"
        >
          Connect with Us!
        </h1>

        <div className="space-y-4 flex flex-col items-center justify-center">
          <p className="max-w-4xl text-gray-400 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            dicta ipsa inventore ipsum, magnam neque earum maxime voluptatem.
            Esse ullam sint rerum eligendi quasi recusandae saepe! Ipsum, iste
            maxime? Eius. Lorem ipsum dolor sit, amet consectetur adipisicing
          </p>

          <Link href="/contact">
            <button
              className="px-20 rounded-full py-3 border relative border-red-600 bg-transparent 
          connect-btn overflow-hidden before:bg-[#8b0000]"
            >
              Connect
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
