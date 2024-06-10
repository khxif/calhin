import { HeaderLinks } from "./header-links";
import { Logo } from "./logo";
import { MobileSidebar } from "./mobile-sidebar";

export function Header() {
  return (
    <header className="py-6 lg:px-10 px-5 fixed top-0 z-50 w-full bg-black">
      <nav className="flex items-center justify-between w-full">
        <Logo />
        <HeaderLinks />
        <MobileSidebar />
      </nav>
    </header>
  );
}
