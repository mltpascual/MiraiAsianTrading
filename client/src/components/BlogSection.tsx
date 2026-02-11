/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Blog/News section with article cards
 * Gold accents, editorial style
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { toast } from "sonner";

const articles = [
  {
    title: "Gold Prices Surge to New Highs Amid Global Uncertainty",
    excerpt:
      "Gold continues its upward trajectory as investors seek safe-haven assets amid geopolitical tensions and economic uncertainty. Analysts predict further gains in the coming months.",
    date: "February 8, 2026",
    readTime: "4 min read",
    category: "Market Analysis",
    image: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop",
  },
  {
    title: "Understanding Gold Purity: 18K, 22K, and 24K Explained",
    excerpt:
      "A comprehensive guide to gold purity levels, karats, and what they mean for investors and jewelry buyers. Learn how to make informed decisions when purchasing gold.",
    date: "February 3, 2026",
    readTime: "6 min read",
    category: "Education",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&h=400&fit=crop",
  },
  {
    title: "Why Asian Markets Are Leading the Gold Trading Revolution",
    excerpt:
      "Asia's growing appetite for gold is reshaping global trading patterns. From China's central bank purchases to India's wedding season demand, the region is driving unprecedented growth.",
    date: "January 28, 2026",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
  },
];

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();

  return (
    <section id="news" className="relative py-28 lg:py-36 bg-[#080808]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              {t("blog.tag")}
            </span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className={`font-[Cormorant_Garamond] text-4xl sm:text-5xl font-bold text-[#E8D5B7] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("blog.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <article
              key={i}
              className={`group border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 bg-[#0A0A0A] transition-all duration-500 cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 120}ms` }}
              onClick={() => toast.info("Full article coming soon!")}
            >
              <div className="relative overflow-hidden aspect-[3/2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="font-[Montserrat] text-[10px] uppercase tracking-wider bg-[#C9A84C] text-[#0A0A0A] px-3 py-1 font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 font-[Montserrat] text-[11px] text-[#8A8279]">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5 font-[Montserrat] text-[11px] text-[#8A8279]">
                    <Clock size={12} />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                <p className="font-[Montserrat] text-[13px] text-[#8A8279] leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[12px] uppercase tracking-wider text-[#C9A84C] font-medium group-hover:gap-3 transition-all duration-300">
                  {t("blog.readMore")}
                  <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
