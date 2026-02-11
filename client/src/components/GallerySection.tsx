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
    src: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/a0pRjpFR3zmVSmhlp65Dqy-img-1_1770809816000_na1fn_b2ZmaWNlLXNob3dyb29t.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2EwcFJqcEZSM3ptVlNtaGxwNjVEcXktaW1nLTFfMTc3MDgwOTgxNjAwMF9uYTFmbl9iMlptYVdObExYTm9iM2R5YjI5dC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=BoGP8L4b7v~Xy2YIRx~DpNaClhxBlhCuJrIIdxbOZgQaqMODNrbusgBxfFpAQTD8NM6lSD0CD6Z7OEn0N2gI7gsoWcpONizXWZwL~8oiOUAkvgllILbozhP0X3VJZ6fqSMlxPmsE2nNh2i1DlImFwDX02tDB-3jtE43JNmjD2H2LoBfSRBkD1gmPU1Ke2NSGJjy5iLVKimoAONL5tlWuFw1OEPk1YUfcF3oH7DbvrWU-Q3vco2ZXTKNAQKDvONyfN-fXMKxaO0vPdELLbtNs1eGO9Op1Zk~G8orCR5oh0DfbsHQYaaquEQii2xc5ZmH1vDFp1aGF2bL2hSeZRzHogQ__",
    title: "Our Showroom",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/a0pRjpFR3zmVSmhlp65Dqy-img-3_1770809812000_na1fn_Z29sZC1wcm9kdWN0cy1kaXNwbGF5.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2EwcFJqcEZSM3ptVlNtaGxwNjVEcXktaW1nLTNfMTc3MDgwOTgxMjAwMF9uYTFmbl9aMjlzWkMxd2NtOWtkV04wY3kxa2FYTndiR0Y1LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=O8bWRqKXxB-~fo7pYuPanEr1QhakMhaKyuBwYk~9GodruQt4M0IMBvYewQN5yN7mjCIim3va4EfQFrtfIIsg0Ea6Er7pTiZNU5T2cx1AyPruAevn7xIx-w~CuRopKfyYURGOCugNRQmUu9i~vzQ7cMjDPgbdzB~1HDZXnQyxINTqn~UTEKNLr4YPcp50Kok883KM0bZEElq4hSiY3zIBVRos7TTj8X3ssLdfvz3L8sxIUeregdYjMcVhNYPgA5wKQrb52UNvz0-m7UllF-WN7ArnghAs0ULvhKey46yKR~LFpjC~XbCkvEL5QpbiU69ptQIw4y5fUudSYOfIewFziw__",
    title: "Gold Products Collection",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/a0pRjpFR3zmVSmhlp65Dqy-img-2_1770809824000_na1fn_dGVhbS1wcm9mZXNzaW9uYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2EwcFJqcEZSM3ptVlNtaGxwNjVEcXktaW1nLTJfMTc3MDgwOTgyNDAwMF9uYTFmbl9kR1ZoYlMxd2NtOW1aWE56YVc5dVlXdy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=YsDEovqJVlDNoknxI7DL7AFLjfv3mCd~jRQa~5r1okaPp-JC1o4IObRveDVqdoF4EoO1GoNJBGf0JFWFu~ua2bNODH6QTasgcG1p0nFpCAHts7TrX9Yp-EgX8P4wOxzDEACD8ATmOsLAcSNbQMmK8ewFXWpBKmAAqWOKztdLXzjfx4sNT7oZqVDMa7E90XexK2rL-rRHVbXGJP~cN73iTic-wkjYaiuZmF-H2d8UQaHW9CBkCg~xcTIDh~hre7hBNNsLT5WDhVtYEGrWIG8x53xTJZbch~SrhnTsuAnkflFHSEPXd8Omhcy0VBzDx~kzaDdmFRb12pmaXWcf4WOqiA__",
    title: "Our Expert Team",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/a0pRjpFR3zmVSmhlp65Dqy-img-4_1770809809000_na1fn_Z29sZC12YXVsdC1zdG9yYWdl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2EwcFJqcEZSM3ptVlNtaGxwNjVEcXktaW1nLTRfMTc3MDgwOTgwOTAwMF9uYTFmbl9aMjlzWkMxMllYVnNkQzF6ZEc5eVlXZGwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ijyMFLl0fJ63Q1KNxwI8mq7w0Ninxkfgh3mZFpOZAVzRvmwvUu61gqbN3WOwLc70FGraUhzwGWkB-ZInZxvic1QwBZIC9U1FAIKF4RkOe957kXyaNtV64agPZ9hzYK9eQuUst5FcurwTRYH7CYyTp6G3Fe-baRo3Sli7wA1Q8X1AIanm3T7qf3x6ZN25VDMN~hpLptF8dHxhTYCnzyQlqRK6NRmdEB4ul0Lo3D-USlVhqY9321ek-PiQBYJLTLzLYTSmvVtbKCHuwJ3P-VR9J9W3lT~Imjuz0hRSWebp65TByZDFZVVOoCIxY5JGWJrNBN5~kEz2znkpnW-kXgiDgg__",
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
