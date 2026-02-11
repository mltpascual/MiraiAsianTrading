/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Full-width CTA banner with gold texture background
 * Strong call to action before the contact section
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const GOLD_TEXTURE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-5_1770802597000_na1fn_Z29sZC1hYnN0cmFjdC10ZXh0dXJl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTVfMTc3MDgwMjU5NzAwMF9uYTFmbl9aMjlzWkMxaFluTjBjbUZqZEMxMFpYaDBkWEpsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kAqQkRAmmkjUqglhfZ13dYtt-vtYMCyjZQ-a49k3ASy5Wbiy6zb-T8lTAYg937e9XZthCXnZGWWh~WtmpUbVhRCRKQq6wtFh3rJALZTl1I0p9VF1Mj0zVlnUJWtZ-aeUFhOAo~VREpOYczO8YslZqD7MR5zAUearMmRErCix1aBV4dPEZm43sAHXjAqUofImo2QnJK6bKBrEjhy3KdrUjc8k7QNNWBtzF2wRQsgCzmPWB3RhgpFCVn9LCEdtA8Gr-wHzvJcqMV2DZXhDhtn7DjF1gOVHjK1FOtL26LdPBE78CpJhXGtCCgv7AKaYeLnTRIayzVkbEZRuEv-gHECioA__";

export default function CtaBanner() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={GOLD_TEXTURE}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8D5B7] leading-[1.1] mb-6">
          Ready to Invest in{" "}
          <span className="text-gold-gradient">Your Future?</span>
        </h2>
        <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] max-w-2xl mx-auto mb-10">
          Join thousands of satisfied clients who trust Mirai Asian Trading for
          their gold investments. Experience the difference of working with a
          company built on integrity and excellence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-10 py-4 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300"
          >
            Contact Us Today
          </a>
          <a
            href="#services"
            className="inline-flex items-center font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#C9A84C] border border-[#C9A84C]/40 px-10 py-4 rounded-full hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
