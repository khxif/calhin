import { links } from "@/utils/links";
import Link from "next/link";

export function HeaderLinks() {
  return (
    <div className="hidden lg:flex items-center space-x-6">
      {links.map((link) => (
        <Link key={link.id} href={link.href} className="link after:bg-red-600 pb-1 font-medium">
          {link.label}
        </Link>
      ))}
    </div>
  );
}
