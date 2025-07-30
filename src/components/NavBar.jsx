import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  useEffect(() => {
    const handelScroll = () => {
      setIsScrolled(screenY > 10);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-around">
        <a
          className="text-xl font-bold text-primary flex items-center "
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ahmed Hesham </span>
            Portfolio
          </span>
        </a>
        <div className="hidden md:flex space-x-8">
          {navItems.map((navItem, key) => (
            <a
              key={key}
              href={navItem.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        {/* { mobile } */}

        <button
          className="md:hidden p-2 text-foreground z-50"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "close the menue" : "open the menue"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col z-40 items-center justify-center",
            "tracking-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((navItem, key) => (
              <a
                key={key}
                href={navItem.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
