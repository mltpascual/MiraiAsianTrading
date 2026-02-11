/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Floating navbar with semi-transparent background
 * Gold accent on active/hover states
 * Minimal, elegant navigation
 */

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C9A84C]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-[#C9A84C]/40 flex items-center justify-center group-hover:border-[#C9A84C] transition-colors duration-300">
              <span className="font-[Cormorant_Garamond] text-[#C9A84C] text-xl font-bold leading-none">
                M
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="font-[Cormorant_Garamond] text-[#E8D5B7] text-lg font-semibold tracking-wide">
                Mirai
              </span>
              <span className="font-[Montserrat] text-[#8A8279] text-[10px] uppercase tracking-[0.25em] block -mt-1">
                Asian Trading
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-6 py-2.5 hover:bg-[#E8D5B7] transition-colors duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#C9A84C] p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0A0A0A]/95 backdrop-blur-md border-t border-[#C9A84C]/10 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-6 py-2.5 hover:bg-[#E8D5B7] transition-colors duration-300 mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
