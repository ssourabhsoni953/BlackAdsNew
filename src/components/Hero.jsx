import React from "react";
import homeAsset from "../assets/home.svg";
import {
  ShieldCheck,
  Medal,
  Target,
  MagnifyingGlass,
  Globe,
  Desktop,
  ShareNetwork,
  Star,
  Users,
  Palette,
  MapPin,
  VideoCamera,
  Code,
  TrendUp,
  ArrowRight,
  Sparkle,
  CheckCircle,
  Quotes,
  SealCheck,
} from "@phosphor-icons/react";

export default function Hero({ onOpenContact }) {
  const services = [
    {
      title: "Performance Marketing",
      subtitle: "Paid Social & Scaling",
      desc: "Scale ad spend profitably on Meta, TikTok & YouTube with scientific creative testing and full-funnel tracking.",
      tag: "ROI Focused",
      icon: Target,
    },
    {
      title: "Google Ads Marketing",
      subtitle: "High-Intent PPC & Search",
      desc: "Capture ready-to-buy customers with targeted Search, Google Shopping, and Performance Max campaigns.",
      tag: "Intent Leads",
      icon: MagnifyingGlass,
    },
    {
      title: "SEO (Search Optimization)",
      subtitle: "Organic Traffic Growth",
      desc: "Dominate search engine rankings with deep technical audits, high-value keywords, and authority link-building.",
      tag: "Organic Reach",
      icon: Globe,
    },
    {
      title: "Website Design & Dev",
      subtitle: "High-Converting Custom Sites",
      desc: "Ultra-fast, responsive web applications engineered specifically for conversion rate optimization and brand trust.",
      tag: "Fast & Modern",
      icon: Desktop,
    },
    {
      title: "Social Media Marketing",
      subtitle: "Organic & Paid Growth",
      desc: "Build active community engagement and viral brand awareness across Instagram, LinkedIn, and TikTok.",
      tag: "Viral Reach",
      icon: ShareNetwork,
    },
    {
      title: "Online Reputation",
      subtitle: "Authority & Review Mgmt",
      desc: "Monitor reviews, manage customer sentiment, and establish 5-star digital trust for enterprise brand authority.",
      tag: "Brand Trust",
      icon: Star,
    },
    {
      title: "Influencer Marketing",
      subtitle: "Creator & UGC Partnerships",
      desc: "Connect with vetted influencers and creator networks to drive authentic recommendations and customer acquisition.",
      tag: "UGC Scaling",
      icon: Users,
    },
    {
      title: "Branding",
      subtitle: "Identity & Visual Strategy",
      desc: "Craft memorable brand identity guidelines, premium typography, logos, and positioning that sets you apart.",
      tag: "Distinct Identity",
      icon: Palette,
    },
  ];

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

  const reviews = [
    {
      name: "Aman Sharma",
      role: "Founder & Director",
      company: "Sagar Jewels & Craft",
      location: "Sagar, MP",
      stat: "+340% Store Inquiries",
      rating: 5,
      quote:
        "BlackAds completely changed the game for our business. Their targeted video ads and local search strategy brought us a steady stream of genuine walk-ins and high-ticket wedding orders. Hands down the best agency in MP!",
      initials: "AS",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      name: "Priya Singhania",
      role: "D2C Brand Head",
      company: "Veda Organics",
      location: "Mumbai",
      stat: "5.2x Meta Ads ROAS",
      rating: 5,
      quote:
        "Their UGC video marketing and high-speed custom landing page doubled our conversion rate within 45 days. The transparency and regular strategy updates make working with them seamless.",
      initials: "PS",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Dr. Rajesh Verma",
      role: "Chief Medical Director",
      company: "Apex Care Clinics",
      location: "Bhopal, MP",
      stat: "180+ Monthly Bookings",
      rating: 5,
      quote:
        "We needed high-intent Google Search campaigns and a clean, trustworthy patient booking website. BlackAds delivered exceptional quality and our appointment bookings surged 3x.",
      initials: "RV",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Vikramaditya Rao",
      role: "Co-Founder & COO",
      company: "EduNex Learning",
      location: "Bangalore",
      stat: "-42% Lower CAC",
      rating: 5,
      quote:
        "From scriptwriting high-converting ad hooks to managing our paid acquisition at scale, BlackAds operates like a world-class growth team. Outstanding ROI across all channels.",
      initials: "VR",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Neha Patel",
      role: "Creative Director",
      company: "UrbanThread Studio",
      location: "Indore, MP",
      stat: "₹18.5L Monthly Scale",
      rating: 5,
      quote:
        "Starting out with small ad budgets, they guided us step-by-step. Their creative video shoots and retargeting funnels took our boutique apparel brand national in just a few months!",
      initials: "NP",
      gradient: "from-rose-500 to-red-600",
    },
    {
      name: "Rohit Agarwal",
      role: "Managing Director",
      company: "Horizon Commercials",
      location: "Delhi NCR",
      stat: "₹1.2 Cr B2B Pipeline",
      rating: 5,
      quote:
        "Their custom website development and B2B LinkedIn/Google ads delivered qualified enterprise leads straight to our sales team. Highly professional and dependable team.",
      initials: "RA",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="home" className="pt-24  md:pt-32  bg-black text-white w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Upper Layer: 90% Width Logo Image (home.png) */}
        <div className="w-full flex justify-center">
          <img
            src={homeAsset}
            alt="BlackAds Agency"
            className="w-11/12 max-w-7xl h-auto object-contain brightness-105"
          />
        </div>

        {/* Content Section Starts Directly After Image Height Ends */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-[#121215] px-4 py-1.5 text-xs sm:text-sm font-semibold text-zinc-300 mb-6 shadow-sm">
            <span>Performance Advertising & Growth Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-amber-500 leading-tight">
            We Turn Ad Spend Into{" "}
            <span className="text-orange-600 border-b-2 border-white/60 pb-0.5">
              Predictable Revenue
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Data-driven Meta & Google ad campaigns, high-converting video creatives, and full-funnel optimization designed to scale your business profitably.
          </p>

          {/* Trust Points */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="text-amber-500" size={20} />
              <span className="text-amber-200">No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Medal className="text-amber-500" size={20} />
              <span className="text-amber-200"> Dedicated Campaign Manager</span>
            </div>
          </div>
        </div>

        {/* Services Grid with Expanded Informative Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-7xl mx-auto">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 text-left hover:bg-white hover:border-white transition-all duration-300 flex flex-col justify-between group cursor-default shadow-sm min-h-57.5"
              >
                <div>
                  {/* Top Bar: Icon + Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <Icon className="text-white transition-colors duration-300" size={24} />
                    </div>
                    <span className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium mb-3 group-hover:text-zinc-600 transition-colors duration-300">
                    {item.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-zinc-400/90 leading-relaxed group-hover:text-zinc-800 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      <div className="w-full h-60 bg-linear-to-b from-black via-blue-950/70 to-blue-950 border-0"></div>

      {/* Whole-Width Section: Who We Are & Where We Work */}
      <div className="w-full pt-20 pb-8 bg-blue-950 px-6 sm:px-12 lg:px-20 xl:px-24">
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
                  className="rounded-2xl border border-zinc-800 bg-[#0a1034] p-6 text-left hover:border-zinc-500 hover:bg-[#18181f] transition-all group"
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
      </div>

      {/* Customer Reviews & Testimonials Section */}
      <div className="w-full pt-20 pb-24 bg-blue-950  px-6 sm:px-12 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900 px-4 py-1.5 text-xs font-semibold text-amber-400 mb-4">
            <Sparkle size={14} className="text-amber-400" />
            <span>Real Results & Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Ambitious Brands & <br className="hidden sm:inline" />
            <span className="text-amber-500">Business Leaders</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            See how our video marketing, custom web development, and data-driven ad strategies generate predictable revenue for our partners.
          </p>

          {/* Social Proof Metric Highlights */}
          <div className="mt-8 grid grid-cols-3 sm:grid-cols-3 gap-4 p-4 rounded-2xl border border-zinc-800 bg-[#0d0d10] text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-amber-500">4.9 / 5.0</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Average Client Rating</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">20+</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
              <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Dedicated Support</div>
            </div>
          </div>
        </div>

        {/* 6 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 sm:p-7 text-left hover:border-zinc-500 hover:bg-[#131317] transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Top Row: Stars + Result Tag */}
                <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} weight="fill" className="text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-300 group-hover:border-zinc-700">
                    {rev.stat}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <Quotes size={28} weight="fill" className="text-zinc-700 group-hover:text-amber-500/60 transition-colors mb-3" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${rev.gradient} flex items-center justify-center text-xs font-bold text-white shadow-sm`}>
                    {rev.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <SealCheck size={14} weight="fill" className="text-blue-400" />
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      {rev.role} &bull; {rev.company}
                    </div>
                  </div>
                </div>
                <div className="text-[10px] text-zinc-400 font-medium bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                  {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            <span>Start Your Growth Journey With Us</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

