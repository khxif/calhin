"use client";

import { cn } from "@/lib/utils";
import { links } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center space-x-6">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          className={cn("link flex items-center space-x- after:bg-red-600 pb-2 font-medium",{
            'text-red-600': pathname === link.href,
          })}
        >
          <link.icon className="size-5" />
          <p>{link.label}</p>
        </Link>
      ))}
    </div>
  );
}
