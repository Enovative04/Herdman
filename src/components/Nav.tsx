import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BRAND } from "../content/brand";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";
import { cn } from "../utils/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/" ? location.pathname === "/" : location.pathname + location.hash === link.href || location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "text-[13.5px] font-medium tracking-[-0.01em] text-ink/80 transition-colors hover:text-ink",
                  isActive && "text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={BRAND.cta.getStarted} variant="primary" className="px-5 py-2.5">
            Get Started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper lg:hidden">
          <nav className="flex flex-col gap-1 px-6 py-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="py-2.5 text-[16px] font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button href={BRAND.cta.getStarted} variant="primary" className="mt-3 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
