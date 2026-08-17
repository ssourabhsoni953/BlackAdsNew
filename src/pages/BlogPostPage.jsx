import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import Footer from "../components/Footer";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  CheckCircle2,
  AlertCircle,
  Share2,
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  BookOpen
} from "lucide-react";

export default function BlogPostPage({ onOpenContact }) {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  // Related blogs (other articles)
  const relatedBlogs = blogsData.filter((b) => b.slug !== slug).slice(0, 2);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black pt-28">
      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <Link to="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <Link to="/blogs" className="hover:text-amber-400 transition-colors">
            Blogs
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
          <span className="text-zinc-300 font-medium truncate max-w-xs sm:max-w-md">
            {blog.title}
          </span>
        </nav>

        {/* Back Link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-amber-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all Sagar guides</span>
        </Link>

        {/* Header Section */}
        <header className="space-y-6 border-b border-zinc-900 pb-10">
          {/* Category & Location Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-black">
              {blog.category}
            </span>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>Sagar, Madhya Pradesh</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {blog.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-400 leading-relaxed font-normal">
            {blog.subtitle}
          </p>

          {/* Meta Info Bar: Author, Date, Read Time, Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center font-black text-black text-sm shadow-md">
                BA
              </div>
              <div>
                <div className="font-bold text-white">{blog.author.name}</div>
                <div className="text-[11px] text-zinc-500">
                  {blog.author.role} &bull; {blog.author.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-zinc-400">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-400">
                <Clock className="w-4 h-4 text-zinc-500" />
                <span>{blog.readTime}</span>
              </div>
              <button
                type="button"
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all cursor-pointer text-xs font-semibold"
                title="Share this article"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Target SEO Keywords Box */}
          <div className="p-4 rounded-2xl bg-[#0d0d12] border border-zinc-800/80 space-y-2">
            <div className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-amber-500" />
              <span>Target SEO Keywords & Intent:</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                Primary: {blog.primaryKeyword}
              </span>
              {blog.secondaryKeywords.map((sec, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-medium"
                >
                  {sec}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Dynamic Article Content Body */}
        <div className="py-10 space-y-8 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p key={index} className="leading-relaxed">
                    {block.text}
                  </p>
                );

              case "heading2":
                return (
                  <h2
                    key={index}
                    className="text-2xl sm:text-3xl font-extrabold text-white pt-6 border-t border-zinc-900 tracking-tight"
                  >
                    {block.text}
                  </h2>
                );

              case "bullet_list":
                return (
                  <ul key={index} className="space-y-3 my-4 pl-1">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case "examples_box":
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-[#0e0e14] border border-zinc-800 space-y-2 my-4 shadow-inner"
                  >
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                      Common Local Search Queries in Sagar:
                    </div>
                    {block.items.map((ex, i) => (
                      <div
                        key={i}
                        className="text-sm sm:text-base text-zinc-200 font-mono bg-black/60 px-3.5 py-2 rounded-lg border border-zinc-800/80"
                      >
                        {ex}
                      </div>
                    ))}
                  </div>
                );

              case "eeat_cards":
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6"
                  >
                    {block.cards.map((c, i) => (
                      <div
                        key={i}
                        className="rounded-2xl border border-zinc-800 bg-[#0d0d12] p-5 space-y-2 hover:border-amber-500/50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-amber-500 text-black font-black text-sm flex items-center justify-center">
                          {c.letter}
                        </div>
                        <h4 className="text-lg font-bold text-white">{c.title}</h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                );

              case "comparison_box":
                return (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6"
                  >
                    <div className="p-5 rounded-2xl bg-red-950/20 border border-red-500/30 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase">
                        <AlertCircle className="w-4 h-4" />
                        <span>Generic / Ineffective Approach</span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-200 leading-relaxed">
                        {block.bad}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>High-Trust Sagar Approach</span>
                      </div>
                      <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                        {block.good}
                      </p>
                    </div>
                  </div>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="p-6 rounded-2xl border-l-4 border-amber-500 bg-[#0d0d12] text-white italic text-base sm:text-lg my-6 shadow-md"
                  >
                    "{block.text}"
                  </blockquote>
                );

              case "takeaway_box":
                return (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-3xl border border-amber-500/40 bg-gradient-to-br from-[#121218] via-zinc-950 to-amber-950/20 space-y-3 my-8 shadow-xl"
                  >
                    <div className="flex items-center gap-2 text-sm font-extrabold text-amber-400 uppercase tracking-wider">
                      <Award className="w-5 h-5 text-amber-400" />
                      <span>{block.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium">
                      {block.text}
                    </p>
                  </div>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Mid-Article Agency CTA Callout */}
        <div className="my-12 rounded-3xl border border-zinc-800 bg-[#0c0c10] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sagar Business Growth Partnership</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to implement this for your business in Sagar?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg">
              BlackAds helps local brands engineer high-converting websites, run high-ROAS Meta & Google ads, and dominate local Google search.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-200 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer"
          >
            Book Strategy Call
          </button>
        </div>

        {/* Related Articles */}
        <section className="pt-12 border-t border-zinc-900 space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            <span>More Practical Guides for Sagar Businesses</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel.id}
                to={`/blogs/${rel.slug}`}
                className="group rounded-2xl border border-zinc-800 bg-[#0d0d10] p-6 hover:bg-white hover:border-white shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-500 transition-all">
                    {rel.category.split("&")[0].trim()}
                  </span>
                  <h4 className="text-lg font-bold text-white group-hover:text-black transition-colors mt-3 mb-2 leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-zinc-400 group-hover:font-medium group-hover:text-zinc-800 line-clamp-2 transition-colors">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 group-hover:border-zinc-200 flex items-center justify-between text-xs text-zinc-500 group-hover:text-black font-semibold transition-colors">
                  <span>{rel.readTime}</span>
                  <span className="flex items-center gap-1">
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>

      {/* Footer */}
      <Footer onOpenContact={onOpenContact} />
    </main>
  );
}
