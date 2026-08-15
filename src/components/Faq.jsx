import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "What minimum ad budget do I need to work with BlackAds?",
      a: "We work best with brands spending at least $3,000 to $50,000+ per month on paid advertising. This ensures enough data volume to optimize audiences, test creative variations, and scale predictably.",
    },
    {
      q: "How fast can we launch our campaigns after onboarding?",
      a: "Our standard onboarding and campaign setup timeframe is 7 to 10 business days. During this time, we complete account audits, tracking setup, audience research, copy drafting, and initial creative production.",
    },
    {
      q: "Do you lock clients into long-term contracts?",
      a: "No! We believe in earning your business every single month. We offer flexible month-to-month service agreements with zero long-term lock-ins.",
    },
    {
      q: "Who owns the ad accounts and creative assets?",
      a: "You retain 100% ownership of your ad accounts (Meta, Google, TikTok), pixel data, domain tracking, and all video/graphic assets produced by our agency.",
    },
    {
      q: "How does BlackAds differ from traditional ad agencies?",
      a: "Unlike traditional agencies that assign junior account managers and charge inflated retainer fees, we operate with senior media buyers, in-house video creators, server-side CAPI tracking experts, and direct Slack communication.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-slate-950/60 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-4 py-1 text-xs font-semibold text-blue-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything you need to know about partnering with BlackAds.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left font-semibold text-white hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-400 transition-transform duration-300 shrink-0 ml-4 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
