import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./assets/home-logo.png";
import { List, X, PhoneCall } from "@phosphor-icons/react";

function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Contact-Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-5 left-10 right-10 border-2 rounded-4xl z-50 backdrop-blur-sm bg-linear-to-r from-black via-blue-900/10 to-[#2b0c10] border-zinc-800 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="BlackAds Logo"
              className="h-12 w-auto object-contain brightness-110"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-zinc-300">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.href ||
                (link.href === "/blogs" && location.pathname.startsWith("/blogs"));

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-lg font-bold p-2 transition-colors duration-200 ${
                    isActive ? "text-amber-400 border-b-2 border-amber-400" : "hover:text-red-400"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Call-Us Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={onOpenContact}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-5 py-2 text-sm font-bold text-white hover:from-red-500 hover:to-red-600 active:scale-95 transition-all cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.4)] hover:shadow-[0_0_20px_rgba(239,68,68,0.6)]"
            >
              <PhoneCall size={18} />
              <span>Call-Us</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-red-400 p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <List size={26} />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-red-500/30 flex flex-col gap-3 text-zinc-200 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-red-400 py-1 transition-colors font-bold"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
              }}
              className="flex justify-center items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 py-2.5 text-sm font-bold text-white shadow-md hover:from-red-500 hover:to-red-600 transition-all mt-2"
            >
              <PhoneCall size={18} />
              <span>Call Us</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
