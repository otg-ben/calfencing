"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/untitled", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled && !menuOpen
      ? "bg-transparent"
      : "bg-cream/95 backdrop-blur-sm shadow-sm";

  const textColor =
    isHome && !scrolled && !menuOpen ? "text-white" : "text-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display text-xl md:text-2xl tracking-wide ${textColor} transition-colors`}
        >
          California Fence Company
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-sage ${
                pathname === link.href
                  ? "text-sage font-medium"
                  : textColor
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/untitled"
            className="bg-sage text-white px-5 py-2 rounded-sm text-sm tracking-wide hover:bg-sage/90 transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${textColor} transition-colors`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-charcoal/10 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm tracking-wide ${
                pathname === link.href
                  ? "text-sage font-medium"
                  : "text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/untitled"
            onClick={() => setMenuOpen(false)}
            className="block bg-sage text-white px-5 py-2 rounded-sm text-sm tracking-wide text-center hover:bg-sage/90 transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
