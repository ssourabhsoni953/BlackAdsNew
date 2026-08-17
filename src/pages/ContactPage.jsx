import React, { useState } from "react";
import Footer from "../components/Footer";
import {
  MapPin,
  EnvelopeSimple,
  PhoneCall,
  PaperPlaneTilt,
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
  ChatsCircle
} from "@phosphor-icons/react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    budget: "₹25,000 - ₹1,00,000 / mo",
    services: [],
    message: "",
  });

  const availableServices = [
    "Performance Meta & TikTok Ads",
    "Google Ads & PPC Search",
    "Cinematic Video & UGC Production",
    "Custom Website Design & Dev",
    "SEO & Google E-E-A-T Ranking",
    "Brand Identity & Social Media",
  ];

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceName)
          : [...prev.services, serviceName],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
      handle: "+91 6260756736",
      href: "https://wa.me/916260756736",
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
          Whether you want to scale profitable Meta & Google ad campaigns, build a conversion-focused website, or dominate local search in Sagar — our team is here to help.
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
              <div className="text-sm font-bold text-white">+91 6260756736</div>
            </div>
            <a
              href="tel:+916260756736"
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
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
              <div className="text-sm font-bold text-white">+91 6260756736</div>
            </div>
            <a
              href="https://wa.me/916260756736"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-[#25D366] hover:text-emerald-400 transition-colors"
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
              <div className="text-sm font-bold text-white break-all">contact@blackads.agency</div>
            </div>
            <a
              href="mailto:contact@blackads.agency"
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
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
              className="mt-6 inline-flex items-center justify-between w-full pt-4 border-t border-zinc-800 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Get Directions</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout: Form + Social & Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-10 shadow-2xl relative">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-zinc-900 px-3.5 py-1 text-xs font-semibold text-amber-400 mb-4">
                <Sparkle size={14} className="text-amber-400" />
                <span>30-Minute Growth Audit & Proposal</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Tell Us About Your Goals
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Fill out the quick form below and our strategy team in Sagar will review your brand and prepare a customized plan within 24 hours.
              </p>

              {submitted ? (
                <div className="my-10 p-8 rounded-2xl bg-zinc-900 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle size={36} weight="fill" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Proposal Request Received!</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you! Our senior strategist will review your requirements and reach out to you via WhatsApp / Call within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white text-xs font-bold text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rahul Soni"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                        Business Website / Instagram Handle
                      </label>
                      <input
                        type="text"
                        placeholder="https://yourbrand.com or @handle"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Estimated Monthly Marketing Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="₹15,000 - ₹30,000 / mo">₹15,000 - ₹30,000 / mo (Starter Local Growth)</option>
                      <option value="₹30,000 - ₹75,000 / mo">₹30,000 - ₹75,000 / mo (Active Ad Scaling)</option>
                      <option value="₹75,000 - ₹2,00,000 / mo">₹75,000 - ₹2,00,000 / mo (Aggressive Growth)</option>
                      <option value="₹2,00,000+ / mo">₹2,00,000+ / mo (Enterprise / Multi-City)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-2">
                      Services You're Interested In
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const selected = formData.services.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleServiceToggle(srv)}
                            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                              selected
                                ? "bg-amber-500 border-amber-500 text-black shadow-md font-bold"
                                : "bg-[#121216] border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700"
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
                      Tell Us About Your Project & Target Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your current challenges, target monthly revenue, or what you want to achieve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-zinc-800 bg-[#121216] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl bg-white hover:bg-zinc-200 py-3.5 text-sm font-bold text-black shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all cursor-pointer active:scale-98"
                  >
                    <PaperPlaneTilt size={18} weight="bold" />
                    <span>Submit Strategy Request</span>
                  </button>
                </form>
              )}
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
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 border border-pink-500/30 hover:border-pink-500/60 transition-all shadow-md"
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
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all text-xs font-semibold text-zinc-300 hover:text-white"
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
      <Footer />
    </main>
  );
}
