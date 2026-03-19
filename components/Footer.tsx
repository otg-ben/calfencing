import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/untitled", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl text-white mb-3">
              California Fence Company
            </h3>
            <p className="text-sm leading-relaxed">
              Serving Marin County since 1979. Quality fencing, decking, and
              outdoor structures built to last.
            </p>
            <p className="text-xs mt-4 text-white/50">
              Diamond Certified Business
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-sage transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:415-472-1419"
                  className="hover:text-sage transition-colors"
                >
                  415-472-1419
                </a>
              </li>
              <li>
                <a
                  href="mailto:calfence@gmail.com"
                  className="hover:text-sage transition-colors"
                >
                  calfence@gmail.com
                </a>
              </li>
              <li className="pt-2 text-white/50">Marin County, California</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          &copy; 2025 California Fence Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
