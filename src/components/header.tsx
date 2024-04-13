import { links } from "@/utils/links";
import Link from "next/link";

export function Header() {
  return (
    <header className="py-6 lg:px-10 px-5 fixed top-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl">Calhin</h1>

        <div className="flex items-center space-x-6">
          {links.map((link) => (
            <Link key={link.id} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
