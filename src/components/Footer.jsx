import React, { useState } from "react";
import Logo from "../assets/home-logo.png";
import {
  MapPin,
  EnvelopeSimple,
  PhoneCall,
  ArrowUp,
  PaperPlaneTilt,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  WhatsappLogo,
  FacebookLogo,
  XLogo,
  ShieldCheck,
  CheckCircle,
  Sparkle,
  ArrowRight,
} from "@phosphor-icons/react";

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050813] text-zinc-400 border-t border-zinc-900">
      {/* Top Pre-Footer Callout Banner */}
      <div className="border-b border-zinc-900/80 bg-gradient-to-b from-blue-950/40 to-[#050813] px-6 sm:px-12 lg:px-20 xl:px-24 py-16">
        <div className="max-w-7xl mx-auto rounded-3xl border border-zinc-800 bg-[#0a0f26] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-zinc-900 px-3.5 py-1 text-xs font-semibold text-amber-400">
              <Sparkle size={14} className="text-amber-400" />
              <span>Ready To Scale Your Brand?</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Turn Your Ad Spend Into <span className="text-amber-500">Predictable Revenue</span>.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Book a complimentary 30-minute growth strategy audit with our senior media buyers and creative directors. Zero pressure, 100% actionable value.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
            >
              <span>Book Strategy Audit</span>
              <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/80 px-6 py-4 text-sm font-semibold text-white hover:bg-zinc-800 hover:border-zinc-500 transition-all cursor-pointer"
            >
              <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
              <span>Chat On WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-zinc-900">
          
          {/* Col 1: Brand & Sagar MP Roots (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <a href="#home" className="inline-block">
              <img src={Logo} alt="BlackAds Logo" className="h-12 w-auto object-contain brightness-110" />
            </a>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              BlackAds is Sagar’s premier performance advertising, high-CTR video marketing, and bespoke website development agency scaling brands across India.
            </p>

            <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-center gap-2.5">
                <MapPin size={18} className="text-amber-500 shrink-0" />
                <span>Civil Lines, Sagar, Madhya Pradesh - 470001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <EnvelopeSimple size={18} className="text-amber-500 shrink-0" />
                <a href="mailto:contact@blackads.agency" className="hover:text-white transition-colors">
                  contact@blackads.agency
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall size={18} className="text-amber-500 shrink-0" />
                <button type="button" onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer text-left">
                  +91 (6260756736)
                </button>
              </div>
            </div>

            {/* Colorful Social Icons */}
            <div className="flex items-center gap-2.5 pt-2 flex-wrap">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(220,39,67,0.6)] active:scale-95 transition-all"
              >
                <InstagramLogo size={20} weight="bold" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(10,102,194,0.6)] active:scale-95 transition-all"
              >
                <LinkedinLogo size={20} weight="fill" />
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(255,0,0,0.6)] active:scale-95 transition-all"
              >
                <YoutubeLogo size={20} weight="fill" />
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] active:scale-95 transition-all"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>

              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 hover:shadow-[0_0_15px_rgba(24,119,242,0.6)] active:scale-95 transition-all"
              >
                <FacebookLogo size={20} weight="fill" />
              </a>

              {/* X (Twitter) */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl bg-black border border-zinc-700 flex items-center justify-center text-white shadow-md hover:scale-110 hover:border-zinc-400 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
              >
                <XLogo size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Col 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>Core Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Performance Meta & TikTok Ads</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Google Ads & High-Intent PPC</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Cinematic Video & UGC Creatives</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Custom High-Converting Web Dev</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">SEO & Organic Search Rankings</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Online Reputation & PR</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Influencer & Creator Scaling</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Brand Identity & Strategy</a></li>
            </ul>
          </div>

          {/* Col 3: Why BlackAds (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              <span>Why Choose Us</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span>No Lock-In Contracts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span>Dedicated Manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span>Custom Built Sites</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span>In-House Video Shoots</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={16} className="text-amber-500 shrink-0" />
                <span>100% Data Ownership</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Growth Tips (3 cols) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              <span>Ad Growth Playbook</span>
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Join 1,000+ founders receiving weekly breakdowns of winning video ad hooks, ROAS strategies, and conversion tactics.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-zinc-900 border border-emerald-500/40 text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <CheckCircle size={18} className="shrink-0" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-zinc-800 bg-[#0d122b] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-200 py-2.5 text-xs font-bold text-black transition-all cursor-pointer shadow-md active:scale-95"
                >
                  <span>Subscribe to Newsletter</span>
                  <PaperPlaneTilt size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">BlackAds Agency</strong>. All rights reserved. Crafted with precision in Sagar, MP.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-200 transition-colors">Terms of Service</a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors cursor-pointer bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg"
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}



