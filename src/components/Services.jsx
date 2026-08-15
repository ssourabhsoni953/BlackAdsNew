import React, { useState } from "react";
import { 
  Target, 
  Video, 
  Layout, 
  ShoppingBag, 
  Search, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight,
  Sparkles 
} from "lucide-react";

export default function Services({ onOpenContact }) {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "paid-ads",
      icon: Target,
      title: "Performance Paid Ads",
      tagline: "Meta, Google, TikTok & LinkedIn",
      description:
        "We build and scale hyper-targeted paid ad campaigns engineered for maximum return on ad spend (ROAS).",
      bullets: [
        "A/B Creative & Audience Testing",
        "Server-Side Tracking (CAPI) & Pixel Setup",
        "Retargeting & LTV Funnel Strategy",
        "Daily Budget Optimization",
      ],
      color: "from-blue-500 to-cyan-400",
    },
    {
      id: "ad-creatives",
      icon: Video,
      title: "Creative Ad Production",
      tagline: "UGC Videos & High-CTR Graphics",
      description:
        "Stop scroll inertia with thumb-stopping video ads, UGC content, and high-converting visual assets.",
      bullets: [
        "Scriptwriting & Hook Development",
        "UGC Creator Management",
        "Motion Design & Graphic Banners",
        "Rapid Iteration & Creative Scaling",
      ],
      color: "from-purple-500 to-indigo-400",
    },
    {
      id: "web-dev",
      icon: Layout,
      title: "Conversion Web & Landing Pages",
      tagline: "High-Speed React & Next.js Funnels",
      description:
        "Custom high-converting landing pages built to turn cold traffic into paying customers seamlessly.",
      bullets: [
        "Sub-Second Load Speed Optimization",
        "UI/UX Design Built for Conversion",
        "Mobile-First Responsive Layouts",
        "Seamless CRM & Payment Integrations",
      ],
      color: "from-emerald-500 to-teal-400",
    },
    {
      id: "ecommerce",
      icon: ShoppingBag,
      title: "E-Commerce Growth Engine",
      tagline: "Shopify & DTC Revenue Scaling",
      description:
        "End-to-end growth strategy for Shopify brands aiming to scale past 6 and 7 figures monthly.",
      bullets: [
        "Average Order Value (AOV) Boosters",
        "Klaviyo Email & SMS Retention Funnels",
        "Subscription & Repeat Purchase Optimization",
        "Inventory & Profit Margin Alignment",
      ],
      color: "from-amber-500 to-orange-400",
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO & Content Domination",
      tagline: "Organic Search & Lead Capture",
      description:
        "Dominate high-intent search keywords and build long-term organic customer acquisition engines.",
      bullets: [
        "Technical SEO & Speed Audits",
        "High-Intent Keyword Architecture",
        "Authority Backlink Acquisition",
        "Content Strategy & Copywriting",
      ],
      color: "from-pink-500 to-rose-400",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Analytics & Attribution",
      tagline: "Real-Time Profit Dashboards",
      description:
        "Never guess where your ad dollars are going with accurate real-time attribution and reporting.",
      bullets: [
        "Custom Live Performance Dashboards",
        "Multi-Touch Attribution Setup",
        "COGS & Profit Margin Tracking",
        "Weekly Strategy Alignment Calls",
      ],
      color: "from-blue-600 to-purple-600",
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950/60 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-950/40 px-4 py-1 text-xs font-semibold text-purple-400 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services Built For{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Aggressive Growth
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            We don't offer vanity metrics. Every service we provide is hyper-focused on driving revenue, lowering CPA, and scaling your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl hover:border-blue-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon with Gradient glow */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 shadow-lg shadow-blue-500/10 mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-400 mt-1 mb-4">
                    {service.tagline}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-6 space-y-2.5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="mt-8 flex items-center justify-between w-full pt-4 border-t border-white/10 text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span>Get Strategy Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
