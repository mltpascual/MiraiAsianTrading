/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Elegant testimonial cards with gold quote marks
 * Horizontal scroll on mobile, grid on desktop
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Mirai Asian Trading has been our trusted partner for gold investments. Their transparency and professionalism are unmatched in the industry.",
    name: "Takeshi Yamamoto",
    title: "Private Investor, Tokyo",
  },
  {
    quote:
      "The team at Mirai goes above and beyond. Every transaction is seamless, and their pricing is consistently competitive. Highly recommended.",
    name: "Sarah Chen",
    title: "Portfolio Manager, Singapore",
  },
  {
    quote:
      "What sets Mirai apart is their commitment to authenticity. Every gold piece I've purchased has been exactly as described — pure quality.",
    name: "Ahmad Al-Rashid",
    title: "Collector, Dubai",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative py-28 lg:py-36 bg-[#070707]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              Client Testimonials
            </span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05]">
            Trusted by <span className="text-gold-gradient">Clients</span>{" "}
            Worldwide
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className={`group relative bg-[#0D0D0D] border border-[#C9A84C]/10 p-8 lg:p-10 hover:border-[#C9A84C]/25 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-[#C9A84C]/20 mb-6"
                strokeWidth={1}
              />

              {/* Quote text */}
              <p className="font-[Cormorant_Garamond] text-lg italic leading-[1.7] text-[#E8D5B7]/80 mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-[#C9A84C]/10 pt-6">
                <div className="font-[Montserrat] text-[13px] font-medium text-[#E8D5B7]">
                  {testimonial.name}
                </div>
                <div className="font-[Montserrat] text-[11px] uppercase tracking-[0.1em] text-[#8A8279] mt-1">
                  {testimonial.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
