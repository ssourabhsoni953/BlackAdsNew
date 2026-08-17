import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import Footer from "../components/Footer";
import {
  Sparkles,
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  Tag,
  MapPin,
  Flame,
  CheckCircle2,
} from "lucide-react";

export default function BlogsPage({ onOpenContact }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Local SEO & Google Search",
    "Social Media & AI Marketing",
    "Brand Strategy & Local Marketing",
    "AI Search & Modern SEO",
    "Web Design & Conversion UX",
  ];

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.secondaryKeywords.some((k) =>
        k.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData[0];

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black pt-28">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Location & Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900/90 px-4 py-1.5 text-xs sm:text-sm font-semibold text-amber-400 mb-6 shadow-lg backdrop-blur-md">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Sagar, MP &bull; Local Growth & Marketing Journal</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
          Practical Guides For{" "}
          <span className="text-amber-500">Businesses in Sagar</span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Actionable blueprints on Google E-E-A-T, AI-driven search, high-converting web design, and local social media reach — written specifically for the Sagar and MP market.
        </p>

        {/* Search Bar & Quick Stats */}
        <div className="mt-10 max-w-xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search by topic, keyword (e.g. SEO Sagar, E-E-A-T, AI Search)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-zinc-800 bg-[#0d0d12] text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black shadow-md font-bold scale-105"
                  : "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Article Section (shown when no search filter is active) */}
      {!searchQuery && selectedCategory === "All" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#0d0d12] via-zinc-950 to-[#121218] p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-black">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Featured Guide</span>
                  </span>
                  <span className="text-xs font-semibold text-zinc-400">
                    {featuredBlog.category}
                  </span>
                  <span className="text-xs text-zinc-600">&bull;</span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredBlog.readTime}
                  </span>
                </div>

                <Link to={`/blogs/${featuredBlog.slug}`}>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-amber-400 transition-colors leading-tight">
                    {featuredBlog.title}
                  </h2>
                </Link>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {featuredBlog.excerpt}
                </p>

                {/* Primary Keywords Badge */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-zinc-500 font-medium flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5 text-amber-500" /> Focus Keyword:
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-semibold text-amber-300">
                    {featuredBlog.primaryKeyword}
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  to={`/blogs/${featuredBlog.slug}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full lg:w-auto rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all shadow-md group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  <span>Read Complete Guide</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="flex items-center justify-between mb-10 border-b border-zinc-900 pb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span>All Articles ({filteredBlogs.length})</span>
          </h2>
          <span className="text-xs text-zinc-500">
            Targeted for Sagar & MP Local Businesses
          </span>
        </div>

        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-[#0d0d10] rounded-2xl border border-zinc-800 p-8">
            <p className="text-base text-zinc-400">
              No articles found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-white text-xs font-bold text-black hover:bg-zinc-200 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="group relative rounded-2xl border border-zinc-800 bg-[#0d0d10] p-7 hover:bg-white hover:border-white shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta info */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all duration-300">
                      {blog.category.split("&")[0].trim()}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-600 font-medium transition-colors">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link to={`/blogs/${blog.slug}`}>
                    <h3 className="text-xl font-bold text-white group-hover:text-black transition-colors duration-300 leading-snug mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-zinc-400 group-hover:font-medium group-hover:text-zinc-800 leading-relaxed transition-colors duration-300 line-clamp-3 mb-6">
                    {blog.excerpt}
                  </p>

                  {/* Keywords Tagging */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-800/80 group-hover:border-zinc-200 transition-colors">
                    <div className="text-[11px] font-semibold text-zinc-500 group-hover:text-zinc-700">
                      Primary Keyword:
                    </div>
                    <div className="inline-block text-xs font-semibold text-amber-400 group-hover:text-amber-700 transition-colors">
                      {blog.primaryKeyword}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-4 border-t border-zinc-800/80 group-hover:border-zinc-200 flex items-center justify-between transition-colors">
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-600 font-medium">
                    {blog.date}
                  </span>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:text-black hover:underline transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA Audit Box */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-blue-950/40 to-zinc-950 p-8 sm:p-14 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-zinc-900 px-3 py-1 text-xs font-semibold text-amber-400">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sagar Business Growth Support</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Want BlackAds to implement this SEO & Ad Strategy for your Sagar brand?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Book a complimentary 30-minute growth audit with our Sagar media buyers and SEO strategists. Zero pressure, 100% actionable value.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-black hover:bg-zinc-200 active:scale-95 transition-all cursor-pointer shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] shrink-0"
            >
              <span>Book Growth Audit</span>
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
