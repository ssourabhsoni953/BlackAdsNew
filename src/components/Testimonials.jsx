import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Vance",
      title: "Founder & CEO, Luxe Apparel",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
      quote: "BlackAds completely transformed our ad performance. We went from struggling at a 1.6x ROAS to consistently hitting 6.8x within 60 days. Their video ad creatives are elite.",
      stat: "6.8x ROAS Achieved",
      company: "Luxe Apparel",
    },
    {
      name: "Sarah Jenkins",
      title: "CMO, CloudFlow Tech",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=250",
      quote: "Finding an ad agency that understands B2B SaaS CAC and LTV metrics is rare. The team at BlackAds delivered qualified lead demos at half our previous acquisition cost.",
      stat: "-48% Acquisition CAC",
      company: "CloudFlow SaaS",
    },
    {
      name: "David Ross",
      title: "Co-Founder, Apex Nutrition",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      quote: "Hands down the most professional team we've worked with. Transparent reporting, daily communication, and massive revenue growth. Highly recommend!",
      stat: "+$1.4M Revenue Scale",
      company: "Apex Nutrition",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-slate-950/40 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/40 px-4 py-1 text-xs font-semibold text-amber-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted By High-Growth{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Founders & CMOs
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Hear directly from the founders and marketing leaders who scaled their revenue with BlackAds.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 border border-amber-500/30 text-amber-400">
                    {rev.stat}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-slate-700 mb-4" />

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-4">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border border-amber-500/30"
                />
                <div>
                  <div className="text-sm font-bold text-white">{rev.name}</div>
                  <div className="text-xs text-slate-400">{rev.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
