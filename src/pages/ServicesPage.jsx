import React from "react";
import Services from "../components/Services";
import Process from "../components/Process";
import Footer from "../components/Footer";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Award, CheckCircle2 } from "lucide-react";

export default function ServicesPage({ onOpenContact }) {
  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black pt-28">
      {/* Hero Header for Services Page */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto overflow-hidden">
        {/* Background Radial Glow */}

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96  rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-400 mb-6 shadow-lg backdrop-blur-md">

          <span>Full-Funnel Performance Solutions</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          High-Growth Services Engineered For{" "}
          <span className="bg-amber-500 bg-clip-text text-transparent">
            Maximum
          </span>
          <span className="bg-orange-600 bg-clip-text text-transparent">
            {" "}ROAS
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          From thumb-stopping video ad creatives to sub-second custom landing pages and scientific paid social scaling — we build data-backed revenue engines.
        </p>

        {/* Feature Highlights */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-300">
          <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 px-4 py-2 rounded-xl">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Fast Execution</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 px-4 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>No Lock-In Contracts</span>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900/60 border border-zinc-800 px-4 py-2 rounded-xl">
            <Award className="w-4 h-4 text-blue-400 shrink-0" />
            <span>100% Data Ownership</span>
          </div>
        </div>
      </section>



      {/* Main Services Breakdown Component */}
      <Services onOpenContact={onOpenContact} />

      {/* Process Section */}
      <Process />

      {/* CTA Conversion Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-blue-950/40 to-zinc-950 p-8 sm:p-14 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to find out which service will scale your revenue fastest?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Book a complimentary 30-minute growth audit with our senior strategists. We’ll analyze your current ad spend, creatives, and conversion funnel with zero obligations.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] shrink-0"
            >
              <span>Book Growth Audit Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onOpenContact={onOpenContact} />

    </main>
  );
}
