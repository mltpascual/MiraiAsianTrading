/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Two-column layout: contact form + company info
 * Gold accents on form elements
 * Elegant, minimal form design
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Mirai Asian Trading Co., Ltd.\nBangkok, Thailand",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+66 (0) 2-XXX-XXXX",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@miraiasiantrading.com",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 9:00 AM – 1:00 PM",
  },
];

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
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

  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      {/* Gold divider at top */}
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
                Get in Touch
              </span>
            </div>

            <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05] mb-6">
              Start Your{" "}
              <span className="text-gold-gradient">Gold Journey</span>
            </h2>

            <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] mb-12">
              Whether you're looking to invest in gold bars, expand your coin
              collection, or trade fine jewelry, our team is ready to assist you
              with personalized service and expert guidance.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    className={`flex items-start gap-4 transition-all duration-700 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="w-10 h-10 border border-[#C9A84C]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        size={18}
                        className="text-[#C9A84C]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#C9A84C] mb-1">
                        {info.label}
                      </div>
                      <div className="font-[Montserrat] text-[14px] text-[#8A8279] whitespace-pre-line leading-relaxed">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0D0D0D] border border-[#C9A84C]/10 p-8 lg:p-10"
            >
              <h3 className="font-[Cormorant_Garamond] text-2xl font-bold text-[#E8D5B7] mb-8">
                Send Us a Message
              </h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[14px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[14px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[14px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40"
                    placeholder="+66 (0) XX-XXX-XXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-[Montserrat] text-[11px] uppercase tracking-[0.15em] text-[#C9A84C] mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-[#C9A84C]/20 focus:border-[#C9A84C] text-[#E8D5B7] font-[Montserrat] text-[14px] py-3 outline-none transition-colors duration-300 placeholder:text-[#8A8279]/40 resize-none"
                    placeholder="Tell us about your gold trading needs..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-[Montserrat] text-[12px] uppercase tracking-[0.2em] text-[#0A0A0A] bg-[#C9A84C] py-4 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300 mt-4"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
