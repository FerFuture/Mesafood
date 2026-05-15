import { motion, useReducedMotion } from "framer-motion";
import { Bot, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, UI } from "../../lib/constants";
import { Button } from "../ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-bg-primary/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 glow-green">
            <Bot className="h-5 w-5 text-accent" aria-hidden />
          </span>
          <span className="text-lg font-bold tracking-tight">Mesafood</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="#demo" variant="primary" className="!px-5 !py-2.5 text-sm">
            {UI.requestDemo}
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-text-muted hover:bg-bg-card md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? UI.aria.closeMenu : UI.aria.openMenu}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-bg-primary/98 px-4 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-lg text-text-muted hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button href="#demo" variant="primary" className="w-full">
                {UI.requestDemo}
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
