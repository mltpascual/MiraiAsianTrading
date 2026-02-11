/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Full-viewport hero with cinematic gold bar image
 * Minimal text overlay with gold accents
 * Subtle parallax and fade-in animations
 */

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-1_1770802581000_na1fn_aGVyby1nb2xkLWJhcnM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTFfMTc3MDgwMjU4MTAwMF9uYTFmbl9hR1Z5YnkxbmIyeGtMV0poY25NLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=PH5e1pKbErvdbDi7bI4bgRfYxzxyGXbtipNIbUMTRU6wXx2x1KjKH9LbZua60egKZ5RVGQWyPIbreG-RHfYUwkWyhU8Jed9woPSVcZA9yGcOlPmxRZAAYbZ1gaI78O~2wHOxZlff0o0ZOd-E3f0CTvODH4OppmWbVPTKJV2Lm3OP2Wco0vUCC0Tk2N74cWtmznQa4Xev~dVZpwqwFIIDYc4snD0P2VNOJJYigCsucB13JpUoX0nftSVzdHLacE4PPKytfB4fnrpOkUZ7V5-tlCAQudpg0bZOEV1pz6V9UK8i7cbbS-svQqpzJAi6XNQw5aoIlARWbm5pKy7MEMtw1Q__";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Premium gold bullion bars in a luxury vault setting"
          className="w-full h-[120%] object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/50 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Overline */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#C9A84C]" />
                <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
                  Established Excellence
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className={`transition-all duration-1000 delay-500 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <span className="block font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8D5B7] leading-[0.95] mb-3">
                The Future
              </span>
              <span className="block font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95]">
                <span className="text-gold-gradient">of Gold</span>
                <span className="text-[#E8D5B7]"> Trading</span>
              </span>
            </h1>

            {/* Subtext */}
            <p
              className={`font-[Montserrat] text-[15px] leading-relaxed text-[#8A8279] mt-8 max-w-lg transition-all duration-1000 delay-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Specializing in the purchase and sale of premium gold bars, coins,
              and jewelry. Secure transactions, transparent pricing, and
              unwavering integrity.
            </p>

            {/* CTA */}
            <div
              className={`flex flex-wrap gap-4 mt-10 transition-all duration-1000 delay-900 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="#services"
                className="inline-flex items-center font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-8 py-3.5 hover:bg-[#E8D5B7] transition-colors duration-300"
              >
                Explore Our Services
              </a>
              <a
                href="#about"
                className="inline-flex items-center font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#C9A84C] border border-[#C9A84C]/40 px-8 py-3.5 hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors duration-300 group"
          aria-label="Scroll down"
        >
          <span className="font-[Montserrat] text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ArrowDown
            size={16}
            className="animate-bounce"
          />
        </a>
      </div>
    </section>
  );
}
