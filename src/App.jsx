import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import ContactModal from "./components/ContactModal";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans antialiased text-slate-100">
      <ScrollToTop />
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Routes>
        <Route path="/" element={<Home onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/services" element={<ServicesPage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/blogs" element={<BlogsPage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/blogs/:slug" element={<BlogPostPage onOpenContact={() => setIsContactOpen(true)} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
