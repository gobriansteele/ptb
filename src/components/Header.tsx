"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy border-b border-gold/20">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <span className="text-2xl font-bold uppercase tracking-widest text-gold">
            PTB
          </span>
          <span className="text-xs uppercase tracking-wider text-foreground/60 hidden sm:inline">
            Phil the Builder
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm uppercase tracking-wider text-foreground hover:text-gold transition-colors"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm uppercase tracking-wider text-foreground hover:text-gold transition-colors"
          >
            Contact
          </Link>
          <a
            href="tel:612-240-6854"
            className="px-4 py-2 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
          >
            Call: 612-240-6854
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-gold transition-all ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-gold transition-all ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-gold/20 px-4 py-4 space-y-4">
          <Link
            href="/services"
            className="block text-sm uppercase tracking-wider text-foreground hover:text-gold transition-colors"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-sm uppercase tracking-wider text-foreground hover:text-gold transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="tel:612-240-6854"
            className="block w-full text-center px-4 py-2 bg-gold text-navy font-semibold text-sm uppercase tracking-wider rounded hover:bg-gold-light transition-colors"
            onClick={closeMenu}
          >
            Call: 612-240-6854
          </a>
        </div>
      )}
    </header>
  );
}
