import React, { useState } from "react";
import { Calculator, DollarSign, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function RoiCalculator({ onOpenContact }) {
  const [adSpend, setAdSpend] = useState(10000);
  const [currentRoas, setCurrentRoas] = useState(1.8);
  const [targetRoas, setTargetRoas] = useState(4.2);

  // Math Calculations
  const currentRevenue = adSpend * currentRoas;
  const projectedRevenue = adSpend * targetRoas;
  const monthlyLift = projectedRevenue - currentRevenue;
  const annualLift = monthlyLift * 12;

  return (
    <section id="calculator" className="relative py-24 bg-slate-950/80 border-t border-white/5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-4 py-1 text-xs font-semibold text-blue-400 mb-4">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Growth Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Calculate Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">
              Estimated ROAS & Revenue
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            See how much additional revenue your business could generate by optimizing your ad campaigns with BlackAds.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Input Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Ad Budget */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">Monthly Ad Budget</label>
                  <span className="text-lg font-bold text-blue-400">${adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="100000"
                  step="1000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$2,000</span>
                  <span>$50,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              {/* Slider 2: Current ROAS */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">Current ROAS (Return on Ad Spend)</label>
                  <span className="text-lg font-bold text-slate-300">{currentRoas}x</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="3.5"
                  step="0.1"
                  value={currentRoas}
                  onChange={(e) => setCurrentRoas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>1.0x</span>
                  <span>2.0x</span>
                  <span>3.5x</span>
                </div>
              </div>

              {/* Slider 3: Target ROAS */}
              <div>
                <div className="flex justify-between items-center mb-2 flex-wrap gap-1">
                  <label className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                    <span>BlackAds Projected ROAS</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </label>
                  <span className="text-lg font-bold text-emerald-400">{targetRoas}x</span>
                </div>
                <input
                  type="range"
                  min="2.5"
                  max="8.0"
                  step="0.1"
                  value={targetRoas}
                  onChange={(e) => setTargetRoas(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>2.5x</span>
                  <span>5.0x</span>
                  <span>8.0x</span>
                </div>
              </div>

            </div>

            {/* Live Output Card Column */}
            <div className="lg:col-span-5 rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-950/40 via-slate-900/90 to-slate-950 p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Projected Impact</div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400">Estimated Monthly Revenue</div>
                  <div className="text-3xl font-black text-white mt-1">${projectedRevenue.toLocaleString()}</div>
                </div>

                <div className="mt-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/30">
                  <div className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Estimated Monthly Revenue Increase</span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-300 mt-1">
                    +${monthlyLift.toLocaleString()} <span className="text-xs font-normal text-slate-400">/ mo</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-xs text-slate-400">Estimated Annual Revenue Boost</div>
                  <div className="text-xl font-bold text-slate-200 mt-0.5">${annualLift.toLocaleString()}</div>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenContact}
                className="mt-8 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer"
              >
                <span>Unlock Your Growth Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
