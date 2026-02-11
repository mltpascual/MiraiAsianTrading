/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Floating navbar with language switcher
 * Gold accent on active/hover states
 */

import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage, type Lang } from "@/contexts/LanguageContext";

const langLabels: Record<Lang, string> = { en: "EN", fil: "FIL", ja: "日本語" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.calculator"), href: "#calculator" },
    { label: t("nav.gallery"), href: "#gallery" },
    { label: t("nav.news"), href: "#news" },
    { label: t("nav.faq"), href: "#faq" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return;
    const close = () => setLangOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [langOpen]);

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
          <a href="#" className="flex items-center group">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/NNmPiDzXNWbiECjL4br1ji_1770804347160_na1fn_bWlyYWktbG9nby1uZXc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L05ObVBpRHpYTldiaUVDakw0YnIxamlfMTc3MDgwNDM0NzE2MF9uYTFmbl9iV2x5WVdrdGJHOW5ieTF1WlhjLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VJ2lUAmVD4SfvjF22W~gECkhNGQ-aL-tQ-Ox2ySWnZVSUy14k~F9eRu-GTqfU-RM9g8w3YdEMsTzgTl-g1MXcfbTGHuj6G9RXVQr-dt2OkljLJBRcuV9t-w8F39xcAo4RmLx0Ab79p0~uRF6bJGkXvTrvyqMfiHlufOJcwzJm~9ZChN6YovvyPrsPD-gO9QapA9nAHxQdzoEjsHoKS-OL5dB76L~drp9uhh7Jb02zr2XsQcf25aFDubdv6nUgjpMSnJZeMcvVw4g0Dco8gQhT3exK3qCRZbp9kk4lmHcEvbEGzt7aRO5z41iWuPow3H1sIb9C3AIJg9tscJr3SDT1Q__"
              alt="Mirai Asian Trading"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[Montserrat] text-[12px] uppercase tracking-[0.12em] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setLangOpen(!langOpen); }}
                className="flex items-center gap-1.5 font-[Montserrat] text-[11px] uppercase tracking-wider text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300 px-2 py-1"
              >
                <Globe size={14} />
                {langLabels[lang]}
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-[#111111] border border-[#C9A84C]/20 shadow-xl min-w-[100px]">
                  {(["en", "fil", "ja"] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={(e) => { e.stopPropagation(); setLang(l); setLangOpen(false); }}
                      className={`block w-full text-left px-4 py-2.5 font-[Montserrat] text-[12px] transition-colors duration-200 ${
                        lang === l
                          ? "text-[#C9A84C] bg-[#C9A84C]/5"
                          : "text-[#8A8279] hover:text-[#E8D5B7] hover:bg-[#C9A84C]/5"
                      }`}
                    >
                      {langLabels[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-6 py-2.5 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300"
            >
              {t("nav.getStarted")}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-[#C9A84C] p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
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

          {/* Mobile Language Switcher */}
          <div className="flex items-center gap-3 pt-2 border-t border-[#C9A84C]/10">
            <Globe size={14} className="text-[#C9A84C]" />
            {(["en", "fil", "ja"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); }}
                className={`font-[Montserrat] text-[12px] px-3 py-1 transition-colors duration-200 ${
                  lang === l
                    ? "text-[#0A0A0A] bg-[#C9A84C]"
                    : "text-[#8A8279] border border-[#C9A84C]/20 hover:text-[#C9A84C]"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-block font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-6 py-2.5 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300 mt-2"
          >
            {t("nav.getStarted")}
          </a>
        </div>
      </div>
    </nav>
  );
}
