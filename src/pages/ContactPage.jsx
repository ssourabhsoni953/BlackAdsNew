import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  MapPin,
  EnvelopeSimple,
  PhoneCall,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
  WhatsappLogo,
  FacebookLogo,
  XLogo,
  CheckCircle,
  Sparkle,
  ArrowRight,
  Clock,
  ShieldCheck,
  ChatsCircle,
  Copy,
  Check,
  CalendarCheck,
  Lightning,
} from "@phosphor-icons/react";
import {
  PHONE_NUMBER,
  PHONE_NUMBER_RAW,
  WHATSAPP_LINK,
  EMAIL_ADDRESS,
  handleCallAction,
} from "../utils/callHandler";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PHONE_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      handle: "@_black_ads",
      href: "https://www.instagram.com/_black_ads",
      icon: InstagramLogo,
      color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
      btnText: "Follow On Instagram",
    },
    {
      name: "WhatsApp",
      handle: "+91 62607 56736",
      href: WHATSAPP_LINK,
      icon: WhatsappLogo,
      color: "from-[#25D366] to-[#128C7E]",
      btnText: "Chat On WhatsApp",
    },
    {
      name: "LinkedIn",
      handle: "BlackAds Agency",
      href: "https://linkedin.com",
      icon: LinkedinLogo,
      color: "from-[#0A66C2] to-[#004182]",
      btnText: "Connect on LinkedIn",
    },
    {
      name: "YouTube",
      handle: "BlackAds Agency",
      href: "https://youtube.com",
      icon: YoutubeLogo,
      color: "from-[#FF0000] to-[#CC0000]",
      btnText: "Subscribe on YouTube",
    },
    {
      name: "Facebook",
      handle: "BlackAds Official",
      href: "https://facebook.com",
      icon: FacebookLogo,
      color: "from-[#1877F2] to-[#0d5bbd]",
      btnText: "Follow on Facebook",
    },
    {
      name: "X (Twitter)",
      handle: "@BlackAdsAgency",
      href: "https://x.com",
      icon: XLogo,
      color: "from-zinc-700 to-black",
      btnText: "Follow on X",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black pt-28">
      {/* Header Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-400 mb-6 shadow-lg backdrop-blur-md">
          <MapPin size={16} className="text-amber-400" />
          <span>Headquartered in Civil Lines, Sagar (M.P.)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Let’s Build Something <br className="hidden sm:inline" />
          <span className="text-amber-500">Extraordinary Together</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Skip lengthy forms and speak directly with our core strategy team. Whether you want to scale profitable Meta & Google ad campaigns, build a conversion-focused website, or dominate local search in Sagar — we’re just a call or message away.
        </p>
      </section>

      {/* 4 Direct Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Phone */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <PhoneCall size={24} className="text-amber-400 group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Direct Call</h3>
              <p className="text-xs text-zinc-400 mb-3">Speak with our senior media strategist.</p>
              <div className="text-sm font-bold text-white">{PHONE_NUMBER}</div>
            </div>
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Call Us Now</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 hover:border-[#25D366]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-[#25D366] transition-colors">
                <WhatsappLogo size={24} weight="fill" className="text-[#25D366] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp Chat</h3>
              <p className="text-xs text-zinc-400 mb-3">Instant consultation & campaign audits.</p>
              <div className="text-sm font-bold text-white">{PHONE_NUMBER}</div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-[#25D366] hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>Chat On WhatsApp</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <EnvelopeSimple size={24} className="text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Official Email</h3>
              <p className="text-xs text-zinc-400 mb-3">Send project briefs & proposals.</p>
              <div className="text-sm font-bold text-white break-all">{EMAIL_ADDRESS}</div>
            </div>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
            >
              <span>Send An Email</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Office Address */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                <MapPin size={24} className="text-purple-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Visit Our Office</h3>
              <p className="text-xs text-zinc-400 mb-3">In-person strategy sessions.</p>
              <div className="text-xs font-semibold text-white">Civil Lines, Sagar, MP - 470001</div>
            </div>
            <a
              href="https://maps.google.com/?q=Civil+Lines+Sagar+Madhya+Pradesh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
              <span>Get Directions</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout: Direct Strategy Consultation & Social Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Call & Strategy Connect Hub (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-zinc-900 px-3.5 py-1 text-xs font-semibold text-amber-400 mb-4">
                <Sparkle size={14} className="text-amber-400" />
                <span>Zero Forms &bull; Instant Direct Access</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Talk Directly With Our <br className="hidden sm:inline" />
                <span className="text-amber-500">Growth Strategists</span>
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                We believe in fast communication without bureaucratic hurdles. Call or message us directly to discuss your ad campaigns, website development, or revenue growth roadmap.
              </p>

              {/* Main Phone Call Highlight Box */}
              <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#121217] p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white shadow-lg shrink-0">
                      <PhoneCall size={28} weight="fill" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                        Official Direct Phone Line
                      </span>
                      <div className="text-2xl sm:text-3xl font-black text-white tracking-wide mt-0.5 select-all">
                        {PHONE_NUMBER}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCopyNumber}
                      className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                        copied
                          ? "bg-emerald-500/20 border-emerald-500/60 text-emerald-300"
                          : "bg-zinc-800/90 border-zinc-700 text-zinc-200 hover:bg-zinc-700 hover:text-white"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check size={16} weight="bold" className="text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} weight="bold" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Direct Action CTAs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <a
                    href={`tel:${PHONE_NUMBER_RAW}`}
                    className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 py-3.5 text-sm font-bold text-white shadow-lg hover:from-red-500 hover:to-red-600 active:scale-95 transition-all cursor-pointer"
                  >
                    <PhoneCall size={18} weight="bold" />
                    <span>Call Now ({PHONE_NUMBER})</span>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] py-3.5 text-sm font-bold text-black shadow-lg active:scale-95 transition-all cursor-pointer"
                  >
                    <WhatsappLogo size={20} weight="fill" />
                    <span>WhatsApp Strategy Chat</span>
                  </a>
                </div>
              </div>

              {/* What Happens On The Call */}
              <div className="mt-8 space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  What You Get When You Reach Out:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <CalendarCheck size={20} className="text-amber-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">Free 30-Min Audit</div>
                    <p className="text-[11px] text-zinc-400">We analyze your ad creatives, website, and funnel.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <Lightning size={20} className="text-amber-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">Zero Lock-In</div>
                    <p className="text-[11px] text-zinc-400">No pushy sales reps. 100% transparent advice.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                    <Clock size={20} className="text-amber-400 mb-2" />
                    <div className="text-xs font-bold text-white mb-1">Rapid Response</div>
                    <p className="text-[11px] text-zinc-400">Direct response from our Sagar strategy team.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Social Channels & Sagar Roots (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Social Links Hub Card */}
            <div className="rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <ChatsCircle size={18} className="text-amber-400" />
                <span>Connect On Social Media</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Follow & Message Us On Instagram
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Stay updated with our latest client case studies, video marketing reels, and growth tactics tailored for Sagar entrepreneurs.
              </p>

              {/* Instagram Featured Card */}
              <a
                href="https://www.instagram.com/_black_ads"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-pink-500/30 hover:border-pink-500/60 transition-all shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                    <InstagramLogo size={26} weight="bold" />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white group-hover:text-pink-300 transition-colors">
                      @_black_ads
                    </div>
                    <div className="text-xs text-zinc-300">
                      Official Instagram Page
                    </div>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white text-black text-xs font-bold shadow-md group-hover:bg-pink-100 transition-colors flex items-center gap-1">
                  <span>Visit</span>
                  <ArrowRight size={12} />
                </div>
              </a>

              {/* All Other Social Links Grid */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-zinc-400">Other Channels:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {socialLinks.slice(1).map((soc) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={soc.name}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-xs font-semibold text-zinc-300 hover:text-white cursor-pointer"
                      >
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${soc.color} flex items-center justify-center text-white shrink-0`}>
                          <Icon size={16} weight="bold" />
                        </div>
                        <span className="truncate">{soc.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Why BlackAds Trust Box */}
            <div className="rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-8 shadow-xl space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck size={20} className="text-amber-500" />
                <span>The BlackAds Commitment</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>100% Data Ownership:</strong> You own all ad accounts, pixel data, and creatives.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Zero Lock-in Contracts:</strong> Flexible month-to-month partnership based on performance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Local Sagar Team:</strong> In-person meetings, direct phone support, and rapid turnaround.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={() => handleCallAction()} />
    </main>
  );
}
