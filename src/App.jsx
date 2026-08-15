import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import ContactModal from "./components/ContactModal";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans antialiased text-slate-100">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <Home onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
