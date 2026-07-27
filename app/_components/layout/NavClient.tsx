"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#why-relay", label: "Why Relay" },
  { href: "/blog", label: "Blog" },
  { href: "/#docs", label: "Docs" },
];

export default function NavClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (menuOpen) setMenuOpen(false);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      window.history.pushState(null, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (menuOpen) setMenuOpen(false);

    if (typeof window !== "undefined" && href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);

      if (elem && window.location.pathname === "/") {
        e.preventDefault();
        window.history.pushState(null, "", href);
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] transition-all duration-200 ${
        scrolled
          ? "bg-[#fafaf8]/95 border-b border-[#e6e6e6] backdrop-blur-[8px]"
          : "bg-[#fafaf8] border-b border-transparent"
      }`}
    >
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Relay home"
          className="flex items-center gap-2"
        >
          <div
            aria-hidden="true"
            className="w-7 h-7 bg-[#111111] rounded-[5px] flex items-center justify-center shrink-0"
          >
            <div className="w-3 h-3 bg-[#fafaf8] rounded-[2px]" />
          </div>
          <span className="text-[1rem] font-semibold text-[#111111] tracking-[-0.02em]">
            Relay
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="btn btn-ghost text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#contact" className="text-sm text-[#6b6b6b] hover:text-[#111111] transition-colors duration-150">
            Sign in
          </Link>
          <Link href="/#contact" className="btn btn-primary text-[0.8125rem]">
            Get started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center p-1.5 rounded text-[#111111]"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: shouldReduce ? 0 : -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[var(--nav-height)] left-0 right-0 bottom-0 bg-[#fafaf8] border-t border-[#e6e6e6] p-6 flex flex-col gap-1 overflow-y-auto"
          >
            <nav aria-label="Mobile navigation links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-[0.875rem] text-[1.125rem] font-medium text-[#111111] border-b border-[#e6e6e6]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary w-full justify-center py-[0.875rem]"
              >
                Get started
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="btn btn-secondary w-full justify-center py-[0.875rem]"
              >
                Sign in
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
