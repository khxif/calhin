import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 md:py-20 border-t border-t-red-600">
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 px-4 md:px-0 space-y-6 
      md:space-y-0"
      >
        <div>
          <h1 className="border-b max-w-fit pb-1 text-lg border-b-gray-400">
            Quick Links
          </h1>

          <div className="mt-4 space-y-1 flex flex-col">
            <Link href="/" className="text-stone-400">
              Home
            </Link>
            <Link href="/about" className="text-stone-400">
              Know about calhin
            </Link>
            <Link href="/contact" className="text-stone-400">
              Connect with us
            </Link>
          </div>
        </div>

        <div>
          <h1 className="border-b max-w-fit pb-1 text-lg border-b-gray-400">
            Quick Links
          </h1>

          <div className="mt-4 space-y-1 flex flex-col">
            <Link href="/" className="text-stone-400">
              Home
            </Link>
            <Link href="/about" className="text-stone-400">
              Know about calhin
            </Link>
            <Link href="/contact" className="text-stone-400">
              Connect with us
            </Link>
          </div>
        </div>

        <div>
          <h1 className="border-b max-w-fit pb-1 text-lg border-b-gray-400">
            Quick Links
          </h1>

          <div className="mt-4 space-y-1 flex flex-col">
            <Link href="/" className="text-stone-400">
              Home
            </Link>
            <Link href="/about" className="text-stone-400">
              Know about calhin
            </Link>
            <Link href="/contact" className="text-stone-400">
              Connect with us
            </Link>
          </div>
        </div>

        <div>
          <h1 className="border-b max-w-fit pb-1 text-lg border-b-gray-400">
            Visit us on
          </h1>

          <div className="mt-4 space-y-1 flex flex-col">
            <Link href="#" className="text-stone-400">
              Instagram
            </Link>
            <Link href="#" className="text-stone-400">
              X
            </Link>
            <Link href="#" className="text-stone-400">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
