import React, { useState } from "react";
import { ExternalLink, Award, ArrowUpRight, Filter } from "lucide-react";

export default function Portfolio({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "E-Commerce", "SaaS", "B2B Lead Gen"];

  const caseStudies = [
    {
      id: 1,
      title: "Luxe Fashion Apparel",
      category: "E-Commerce",
      result: "6.8x ROAS",
      growth: "+420% Revenue",
      description: "Scaled DTC fashion brand from $25k/mo ad spend to $180k/mo with high-converting UGC video ads and Meta CAPI.",
      metrics: [
        { label: "Ad Spend Scaled", val: "$180k/mo" },
        { label: "Cost Per Acquisition", val: "-38%" },
      ],
      tag: "Meta Ads & UGC",
    },
    {
      id: 2,
      title: "CloudFlow AI Software",
      category: "SaaS",
      result: "4.9x ROAS",
      growth: "1,200+ Demo Signups",
      description: "Implemented high-intent Google Search and LinkedIn ad funnels targeting enterprise CTOs and founders.",
      metrics: [
        { label: "Demo Cost (CAC)", val: "$42" },
        { label: "Pipeline Value", val: "$3.4M" },
      ],
      tag: "Google Search & LinkedIn",
    },
    {
      id: 3,
      title: "Apex Fitness Supplements",
      category: "E-Commerce",
      result: "5.4x ROAS",
      growth: "$1.4M Revenue in 90 Days",
      description: "Restructured full-funnel TikTok & Meta ads paired with custom React landing pages and email flows.",
      metrics: [
        { label: "Conversion Rate", val: "4.8%" },
        { label: "AOV Increase", val: "+24%" },
      ],
      tag: "TikTok & Landing Pages",
    },
    {
      id: 4,
      title: "Horizon Real Estate Capital",
      category: "B2B Lead Gen",
      result: "320 High-Intent Leads",
      growth: "$12M Deals Closed",
      description: "Targeted accredited investors with YouTube video ads and interactive quiz lead magnets.",
      metrics: [
        { label: "Lead Qualification", val: "84%" },
        { label: "Cost Per Lead", val: "$28" },
      ],
      tag: "YouTube & Quiz Funnels",
    },
  ];

  const filteredStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="relative py-24 bg-slate-950/40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-4 py-1 text-xs font-semibold text-emerald-400 mb-4">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                Client Success
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "bg-slate-900 border border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Result Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/60 border border-blue-500/30 text-blue-400">
                    {item.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                    {item.result}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                
                <div className="text-sm font-semibold text-emerald-400 mt-1 mb-4">
                  {item.growth}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics Breakdown */}
                <div className="mt-6 grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-950/60 border border-white/5">
                  {item.metrics.map((m, idx) => (
                    <div key={idx}>
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="text-base font-bold text-white mt-0.5">{m.val}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <button
                type="button"
                onClick={onOpenContact}
                className="mt-8 flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
