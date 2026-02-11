/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Minimal footer with gold accents
 * Logo, navigation, and copyright
 */

import { toast } from "sonner";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] py-16">
      {/* Gold divider at top */}
      <div className="gold-divider w-full absolute top-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663343684150/bFCNaDGoWaeHSwNT.jpeg"
                alt="Mirai Asian Trading"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="font-[Montserrat] text-[13px] leading-[1.8] text-[#8A8279] max-w-xs">
              A reliable gold trading company committed to secure, transparent
              transactions and building lasting client trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-[Montserrat] text-[13px] text-[#8A8279] hover:text-[#C9A84C] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[Montserrat] text-[11px] uppercase tracking-[0.2em] text-[#C9A84C] mb-6">
              Our Services
            </h4>
            <nav className="space-y-3">
              {[
                "Gold Bar Trading",
                "Gold Coin Trading",
                "Gold Jewelry Trading",
                "Investment Advisory",
              ].map((item) => (
                <span
                  key={item}
                  className="block font-[Montserrat] text-[13px] text-[#8A8279]"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#C9A84C]/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-[Montserrat] text-[11px] text-[#8A8279]/60 tracking-wide">
            &copy; {currentYear} Mirai Asian Trading Co., Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-[Montserrat] text-[11px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-[Montserrat] text-[11px] text-[#8A8279]/60 hover:text-[#C9A84C] transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); toast("Feature coming soon"); }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

