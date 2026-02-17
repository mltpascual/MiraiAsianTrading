/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Footer with social media links, i18n
 */

import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#050505] py-16">
      <div className="gold-divider w-full absolute top-0" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 items-start mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="/images/mirai-logo.webp"
                alt="Mirai Asian Trading"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] max-w-xs mb-6">
              {t("footer.desc")}
            </p>
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1CUnXiMKeG/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#C9A84C]/20 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-[#C9A84C]" />
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); toast.info("Instagram coming soon!"); }}
                className="w-9 h-9 border border-[#C9A84C]/20 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-[#C9A84C]" />
              </a>
              <a
                href="mailto:miraiastiantrading@gmail.com"
                className="w-9 h-9 border border-[#C9A84C]/20 flex items-center justify-center hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} className="text-[#C9A84C]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Montserrat] text-[13px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              {t("footer.quickLinks")}
            </h4>
            <nav className="space-y-3">
              {[
                { label: t("nav.about"), href: "#about" },
                { label: t("nav.services"), href: "#services" },
                { label: t("nav.gallery"), href: "#gallery" },
                { label: t("nav.news"), href: "#news" },
                { label: t("nav.faq"), href: "#faq" },
                { label: t("nav.contact"), href: "#contact" },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block font-[Montserrat] text-[15px] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Montserrat] text-[13px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              {t("footer.services")}
            </h4>
            <nav className="space-y-3">
              {[
                t("footer.svc1"),
                t("footer.svc2"),
                t("footer.svc3"),
                t("footer.svc4"),
              ].map((item) => (
                <span key={item} className="block font-[Montserrat] text-[15px] text-[#8A8279]">{item}</span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[Montserrat] text-[13px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              {t("footer.contactInfo")}
            </h4>
            <div className="space-y-3 font-[Montserrat] text-[15px] text-[#8A8279]">
              <p>Parañaque City, Manila, Philippines</p>
              <p>0917 123 4567</p>
              <p>miraiastiantrading@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[Montserrat] text-[13px] text-[#8A8279]/60 tracking-wide">
            &copy; {currentYear} Mirai Asian Trading Co., Ltd. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-[Montserrat] text-[13px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>
              {t("footer.privacy")}
            </a>
            <a href="#" className="font-[Montserrat] text-[13px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
