import React, { useState, useEffect } from "react";
import {
  X,
  PhoneCall,
  WhatsappLogo,
  Copy,
  Check,
  EnvelopeSimple,
  Clock,
  MapPin,
  Sparkle,
} from "@phosphor-icons/react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_RAW,
  WHATSAPP_LINK,
  EMAIL_ADDRESS,
} from "../utils/callHandler";

export default function ContactModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyNumber = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PHONE_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity duration-200 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-8 shadow-2xl text-white my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-amber-500/20 via-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-xl bg-zinc-900/80 border border-zinc-800 transition-colors cursor-pointer hover:border-zinc-700 active:scale-95"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Badge & Title */}
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-zinc-900/90 px-3.5 py-1 text-xs font-semibold text-amber-400 mb-3 shadow-sm">
            <Sparkle size={14} className="text-amber-400" />
            <span>BlackAds Direct Line</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Connect With Our Strategists
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Speak directly with our senior media buyers and growth directors.
          </p>
        </div>

        {/* Prominent Phone Box Card */}
        <div className="mt-6 rounded-2xl border border-zinc-800/90 bg-gradient-to-b from-zinc-900/90 to-[#121217] p-5 sm:p-6 text-center space-y-4 shadow-inner">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white mx-auto shadow-[0_0_20px_rgba(239,68,68,0.35)]">
            <PhoneCall size={26} weight="fill" />
          </div>

          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-zinc-400">
              Official Contact Number
            </span>
            <div className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-1 select-all">
              {PHONE_NUMBER}
            </div>
          </div>

          {/* Action Buttons: Call Now & Copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-4 py-3 text-sm font-bold text-white shadow-lg hover:from-red-500 hover:to-red-600 active:scale-95 transition-all cursor-pointer"
            >
              <PhoneCall size={18} weight="bold" />
              <span>Call Direct</span>
            </a>

            <button
              type="button"
              onClick={handleCopyNumber}
              className={`flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition-all cursor-pointer active:scale-95 ${
                copied
                  ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  : "bg-zinc-800/80 border-zinc-700 text-white hover:bg-zinc-700/80 hover:border-zinc-600"
              }`}
            >
              {copied ? (
                <>
                  <Check size={18} weight="bold" className="text-emerald-400" />
                  <span>Number Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={18} weight="bold" />
                  <span>Copy Number</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Secondary Direct Channels (WhatsApp & Email) */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* WhatsApp Direct */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/50 hover:bg-[#25D366]/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
              <WhatsappLogo size={22} weight="fill" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white group-hover:text-[#25D366] transition-colors">
                Chat on WhatsApp
              </div>
              <div className="text-[11px] text-zinc-400">Instant consultation</div>
            </div>
          </a>

          {/* Email Direct */}
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center gap-3 p-3.5 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <EnvelopeSimple size={22} weight="bold" />
            </div>
            <div className="text-left truncate">
              <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                Email Our Team
              </div>
              <div className="text-[11px] text-zinc-400 truncate">
                contact@blackads.agency
              </div>
            </div>
          </a>
        </div>

        {/* Footer Meta Note */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 gap-2">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-amber-400" />
            <span>Mon - Sat &bull; 9:00 AM - 8:00 PM IST</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <MapPin size={14} className="text-amber-500" />
            <span>Civil Lines, Sagar (M.P.)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
