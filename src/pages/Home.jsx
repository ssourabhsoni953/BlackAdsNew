import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home({ onOpenContact }) {
  return (
    <main className="min-h-screen bg-black text-white font-sans antialiased selection:bg-white selection:text-black">
      <Hero onOpenContact={onOpenContact} />
      <Footer onOpenContact={onOpenContact} />
    </main>
  );
}



