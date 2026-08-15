import React from "react";
import {
  MapPin,
  VideoCamera,
  Code,
  TrendUp,
  UsersThree,
  ArrowRight,
  Sparkle,
  CheckCircle,
} from "@phosphor-icons/react";

export default function AboutSection({ onOpenContact }) {
  const pillars = [
    {
      icon: VideoCamera,
      title: "Top-Tier Video Marketing",
      desc: "High-impact video ads, cinematic hooks, and creator UGC engineered to capture attention, stop scroll inertia, and drive sales.",
    },
    {
      icon: Code,
      title: "Custom Website Development",
      desc: "Fast, modern, and conversion-optimized websites built from the ground up to match your exact business model and customers.",
    },
    {
      icon: TrendUp,
      title: "Result-Driven Business Strategy",
      desc: "Custom growth roadmaps and full-funnel paid advertising designed to turn ad spend into profitable, predictable revenue.",
    },
  ];

  const highlights = [
    "Born in Sagar, MP — Scaling Brands Across India",
    "Transitioned from solo freelancing to a full-service agency team",
    "100% Custom tailored solutions — zero cookie-cutter templates",
    "Direct communication & dedicated campaign management",
  ];

  return (
    <section id="about" className="w-full py-20 md:py-28 bg-[#09090b] text-white border-t border-b border-zinc-900 px-6 sm:px-12 lg:px-20 xl:px-24">
      {/* Top Tagline / Location Badge */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-zinc-300">
          <MapPin size={16} className="text-amber-500" />
          <span>Headquartered in Sagar, Madhya Pradesh</span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-400">
          <Sparkle size={14} className="text-amber-400" />
          <span>Who We Are & What We Stand For</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: The Story */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Solo Expertise to <br className="hidden sm:inline" />
            <span className="text-amber-500">Sagar’s Premier</span> Growth Agency.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We started our journey working one-on-one with entrepreneurs and local businesses — crafting high-converting video marketing, building custom websites from scratch, and architecting profitable advertising campaigns.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            After successfully scaling brands individually, we united our skills into <strong className="text-white">BlackAds</strong>: a full-service digital and performance agency based in Sagar, MP. Today, we bring structured systems, high-end production quality, and strategic execution to help your business dominate its market.
          </p>

          {/* Bullet Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-md"
            >
              <span>Work With BlackAds</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Column: 3 Core Pillars */}
        <div className="lg:col-span-5 space-y-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-[#121216] p-6 text-left hover:border-zinc-500 hover:bg-[#18181f] transition-all group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                    <Icon size={22} className="text-amber-400 group-hover:text-black transition-colors" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-1">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
