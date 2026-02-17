/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Photo gallery with masonry-style grid and lightbox
 * Gold accents on hover, cinematic feel
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "/images/office-showroom.webp",
    title: "Our Showroom",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gold-products-display.webp",
    title: "Gold Products Collection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/team-professional.webp",
    title: "Our Expert Team",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gold-vault-storage.webp",
    title: "Secure Vault Storage",
    span: "col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () =>
    setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () =>
    setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="relative py-28 lg:py-36 bg-[#080808]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">
              {t("gallery.tag")}
            </span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className={`font-[Cormorant_Garamond] text-4xl sm:text-5xl font-bold text-[#E8D5B7] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("gallery.title")}
          </h2>
          <p
            className={`font-[Montserrat] text-[17px] text-[#8A8279] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("gallery.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative overflow-hidden group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-[Montserrat] text-[15px] font-medium text-[#E8D5B7]">
                  {img.title}
                </span>
              </div>
              <div className="absolute inset-0 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/30 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[#E8D5B7] hover:text-[#C9A84C] transition-colors z-10"
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 md:left-8 text-[#E8D5B7] hover:text-[#C9A84C] transition-colors z-10"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 md:right-8 text-[#E8D5B7] hover:text-[#C9A84C] transition-colors z-10"
          >
            <ChevronRight size={36} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].title}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="font-[Montserrat] text-[16px] text-[#E8D5B7]">
              {galleryImages[lightbox].title}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
