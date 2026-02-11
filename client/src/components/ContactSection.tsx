/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Two-column layout: contact form + company info + Google Maps
 * Gold accents on form elements, i18n support
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. We will be in touch shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.visit"),
      value: "Parañaque City, Manila, Philippines",
    },
    {
      icon: Phone,
      label: t("contact.call"),
      value: "0917 123 4567",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "miraiastiantrading@gmail.com",
    },
    {
      icon: Clock,
      label: t("contact.hours"),
      value: "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 9:00 AM – 1:00 PM",
    },
  ];

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">
                {t("contact.tag")}
              </span>
            </div>

            <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05] mb-6">
              {t("contact.title")}{" "}
              <span className="text-gold-gradient">{t("contact.titleHighlight")}</span>
            </h2>

            <p className="font-[Montserrat] text-[17px] leading-[1.8] text-[#8A8279] mb-12">
              {t("contact.desc")}
            </p>

            {/* Contact Details */}
            <div className="space-y-8 mb-10">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className={`flex items-start gap-4 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#C9A84C]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#C9A84C] mb-1">
                        {info.label}
                      </div>
                      <div className="font-[Montserrat] text-[16px] text-[#8A8279] whitespace-pre-line leading-relaxed">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Maps Embed */}
            <div
              className={`border border-[#C9A84C]/10 overflow-hidden transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.2!2d120.99!3d14.47!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzEyLjAiTiAxMjDCsDU5JzI0LjAiRQ!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                width="100%"
                height="220"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mirai Asian Trading Location"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0D0D0D] border border-[#C9A84C]/10 p-8 lg:p-10"
            >
              <h3 className="font-[Cormorant_Garamond] text-2xl font-bold text-[#E8D5B7] mb-8">
                {t("contact.formTitle")}
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[16px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder={t("contact.namePlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2">
                    {t("contact.emailLabel")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[16px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder={t("contact.emailPlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2">
                    {t("contact.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[16px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder={t("contact.phonePlaceholder")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-[Montserrat] text-[13px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[16px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40 resize-none"
                    placeholder={t("contact.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-[Montserrat] text-[14px] uppercase tracking-[0.2em] text-[#0A0A0A] bg-[#C9A84C] py-4 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300 mt-4"
                >
                  {t("contact.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
