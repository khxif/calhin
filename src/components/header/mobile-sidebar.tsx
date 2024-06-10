import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/utils/links";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu className="size-8" />
      </SheetTrigger>
      <SheetContent
        side={"top"}
        className="text-white bg-black px-4 w-full h-fit py-12"
      >
        <div className="flex flex-col items-center justify-center space-y-5">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="link after:bg-red-600 p-1 font-semibold"
            >
              <SheetClose className="flex items-center space-x-1 pb-2">
                <link.icon className="size-5" />
                <p>{link.label}</p>
              </SheetClose>
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
