import React, { useState } from "react";
import { X, PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$5,000 - $15,000 / mo",
    services: [],
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceName);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceName)
          : [...prev.services, serviceName],
      };
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-zinc-800 bg-[#0c0c0e] p-6 sm:p-10 shadow-2xl text-white my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-lg bg-zinc-900 border border-zinc-800 transition-colors cursor-pointer hover:border-zinc-700"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mx-auto shadow-md">
              <CheckCircle size={36} weight="fill" />
            </div>
            <h3 className="text-2xl font-bold text-white">Strategy Call Requested!</h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              Thank you for reaching out to BlackAds. Our senior strategist will contact you within 24 hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-white text-sm font-bold text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-md"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold text-zinc-300 mb-3">
              <span>Book Your Growth Strategy Audit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Let's Scale Your Revenue.
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-zinc-400">
              Fill out the details below and we'll prepare a custom ad growth proposal for your brand.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-[#141417] px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@yourbrand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-[#141417] px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Brand Website *</label>
                  <input
                    type="url"
                    required
                    placeholder="https://yourbrand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-[#141417] px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">Monthly Ad Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-lg border border-zinc-800 bg-[#141417] px-4 py-2 text-sm text-white focus:border-white focus:outline-none"
                  >
                    <option value="$2,000 - $5,000 / mo">$2,000 - $5,000 / mo</option>
                    <option value="$5,000 - $15,000 / mo">$5,000 - $15,000 / mo</option>
                    <option value="$15,000 - $50,000 / mo">$15,000 - $50,000 / mo</option>
                    <option value="$50,000+ / mo">$50,000+ / mo</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-2">Services Interested In</label>
                <div className="flex flex-wrap gap-2">
                  {["Performance Paid Ads", "Google Ads", "Website Design & Dev", "SEO & Optimization"].map((srv) => {
                    const selected = formData.services.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => handleServiceToggle(srv)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          selected
                            ? "bg-white border-white text-black"
                            : "bg-[#141417] border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">Tell Us About Your Goals</label>
                <textarea
                  rows={3}
                  placeholder="Share your current ad challenges or target revenue goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-zinc-800 bg-[#141417] px-4 py-2 text-sm text-white placeholder-zinc-500 focus:border-white focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-black shadow-md hover:bg-zinc-200 transition-all cursor-pointer mt-3"
              >
                <PaperPlaneTilt size={18} />
                <span>Submit Strategy Request</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
