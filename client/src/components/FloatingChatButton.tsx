/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Floating chat button — opens a mini contact panel
 * Gold accent, smooth animations
 */

import { useState } from "react";
import { MessageCircle, X, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";

export default function FloatingChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <div
        className={`absolute bottom-16 right-0 w-[320px] bg-[#111111] border border-[#C9A84C]/20 shadow-2xl transition-all duration-400 origin-bottom-right ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="p-5 border-b border-[#C9A84C]/10">
          <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7]">
            Quick Contact
          </h3>
          <p className="font-[Montserrat] text-[12px] text-[#8A8279] mt-1">
            Reach us through any of these channels
          </p>
        </div>

        <div className="p-5 space-y-3">
          {/* Messenger */}
          <a
            href="https://m.me/miraiastiantrading"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#0084FF]/10 rounded-full">
              <MessageCircle size={18} className="text-[#0084FF]" />
            </div>
            <div>
              <span className="font-[Montserrat] text-[13px] font-medium text-[#E8D5B7] group-hover:text-[#C9A84C] transition-colors">
                Facebook Messenger
              </span>
              <p className="font-[Montserrat] text-[11px] text-[#8A8279]">
                Chat with us on Messenger
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+639171234567"
            className="flex items-center gap-3 p-3 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 rounded-full">
              <Phone size={18} className="text-emerald-400" />
            </div>
            <div>
              <span className="font-[Montserrat] text-[13px] font-medium text-[#E8D5B7] group-hover:text-[#C9A84C] transition-colors">
                Call Us
              </span>
              <p className="font-[Montserrat] text-[11px] text-[#8A8279]">
                0917 123 4567
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:miraiastiantrading@gmail.com"
            className="flex items-center gap-3 p-3 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-[#C9A84C]/10 rounded-full">
              <Mail size={18} className="text-[#C9A84C]" />
            </div>
            <div>
              <span className="font-[Montserrat] text-[13px] font-medium text-[#E8D5B7] group-hover:text-[#C9A84C] transition-colors">
                Email Us
              </span>
              <p className="font-[Montserrat] text-[11px] text-[#8A8279]">
                miraiastiantrading@gmail.com
              </p>
            </div>
          </a>

          {/* Quick Message */}
          <button
            onClick={() => {
              toast.success("Redirecting to contact form...");
              setOpen(false);
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full flex items-center justify-center gap-2 p-3 bg-[#C9A84C] hover:bg-[#E8D5B7] text-[#0A0A0A] font-[Montserrat] text-[12px] uppercase tracking-wider font-semibold rounded-full transition-colors duration-300"
          >
            <Send size={14} />
            Send Inquiry
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-[#C9A84C]/20 transition-all duration-300 ${
          open
            ? "bg-[#111111] border border-[#C9A84C]/30 rotate-0"
            : "bg-[#C9A84C] hover:bg-[#E8D5B7] rotate-0"
        }`}
        aria-label="Contact us"
      >
        {open ? (
          <X size={22} className="text-[#C9A84C]" />
        ) : (
          <MessageCircle size={22} className="text-[#0A0A0A]" />
        )}
      </button>
    </div>
  );
}
