import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import BlogsPage from "./pages/BlogsPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import ContactModal from "./components/ContactModal";
import { handleCallAction } from "./utils/callHandler";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleCallClick = () => {
    handleCallAction(() => setIsContactOpen(true));
  };

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans antialiased text-slate-100">
      <ScrollToTop />
      <Navbar onOpenContact={handleCallClick} />
      <Routes>
        <Route path="/" element={<Home onOpenContact={handleCallClick} />} />
        <Route path="/services" element={<ServicesPage onOpenContact={handleCallClick} />} />
        <Route path="/blogs" element={<BlogsPage onOpenContact={handleCallClick} />} />
        <Route path="/blogs/:slug" element={<BlogPostPage onOpenContact={handleCallClick} />} />
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
