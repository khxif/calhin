import { BookText, Home, SquareUser } from "lucide-react";

export const links = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    id: 2,
    href: "/about",
    label: "About",
    icon: BookText,
  },
  {
    id: 3,
    href: "/contact",
    label: "Contact",
    icon: SquareUser,
  },
] as const;
