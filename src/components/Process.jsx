import React from "react";
import { Search, Compass, Rocket, BarChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Audit & Strategy",
      timeframe: "Week 1",
      description: "We analyze your past ad account data, conversion tracking, audience avatars, and unit economics to build a high-ROI roadmap.",
    },
    {
      num: "02",
      icon: Compass,
      title: "Creative & Funnel Build",
      timeframe: "Week 2",
      description: "Our team crafts thumb-stopping video ads, compelling copy, and high-converting landing pages tailored to your brand.",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Launch & Testing",
      timeframe: "Week 3",
      description: "We deploy multi-angle ad campaigns with controlled budget splits to rapidly identify winning creatives and audiences.",
    },
    {
      num: "04",
      icon: BarChart,
      title: "Scale & Optimize",
      timeframe: "Ongoing",
      description: "Once winning ad angles are locked, we aggressively scale daily ad spend while maintaining peak ROAS and profit margins.",
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-slate-950/80 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-4 py-1 text-xs font-semibold text-indigo-400 mb-4">
            <span>Our Proven Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How We Scale Your Brand In{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A frictionless, battle-tested agency framework designed for rapid deployment and maximum ROAS.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-slate-700">{step.num}</span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-950 border border-indigo-500/30 text-indigo-400">
                      {step.timeframe}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
