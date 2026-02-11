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
                src="https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/NNmPiDzXNWbiECjL4br1ji_1770804347160_na1fn_bWlyYWktbG9nby1uZXc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L05ObVBpRHpYTldiaUVDakw0YnIxamlfMTc3MDgwNDM0NzE2MF9uYTFmbl9iV2x5WVdrdGJHOW5ieTF1WlhjLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=VJ2lUAmVD4SfvjF22W~gECkhNGQ-aL-tQ-Ox2ySWnZVSUy14k~F9eRu-GTqfU-RM9g8w3YdEMsTzgTl-g1MXcfbTGHuj6G9RXVQr-dt2OkljLJBRcuV9t-w8F39xcAo4RmLx0Ab79p0~uRF6bJGkXvTrvyqMfiHlufOJcwzJm~9ZChN6YovvyPrsPD-gO9QapA9nAHxQdzoEjsHoKS-OL5dB76L~drp9uhh7Jb02zr2XsQcf25aFDubdv6nUgjpMSnJZeMcvVw4g0Dco8gQhT3exK3qCRZbp9kk4lmHcEvbEGzt7aRO5z41iWuPow3H1sIb9C3AIJg9tscJr3SDT1Q__"
                alt="Mirai Asian Trading"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-[Montserrat] text-[13px] leading-[1.8] text-[#8A8279] max-w-xs mb-6">
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
            <h4 className="font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
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
                <a key={link.href} href={link.href} className="block font-[Montserrat] text-[13px] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              {t("footer.services")}
            </h4>
            <nav className="space-y-3">
              {[
                t("footer.svc1"),
                t("footer.svc2"),
                t("footer.svc3"),
                t("footer.svc4"),
              ].map((item) => (
                <span key={item} className="block font-[Montserrat] text-[13px] text-[#8A8279]">{item}</span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              {t("footer.contactInfo")}
            </h4>
            <div className="space-y-3 font-[Montserrat] text-[13px] text-[#8A8279]">
              <p>26 Ethiopia Street Section IV<br />Doña Soledad Avenue<br />Parañaque City, Philippines</p>
              <p>0917 123 4567</p>
              <p>miraiastiantrading@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[Montserrat] text-[11px] text-[#8A8279]/60 tracking-wide">
            &copy; {currentYear} Mirai Asian Trading Co., Ltd. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-[Montserrat] text-[11px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>
              {t("footer.privacy")}
            </a>
            <a href="#" className="font-[Montserrat] text-[11px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300" onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}>
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
