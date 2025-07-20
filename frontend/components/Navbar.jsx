import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white rounded-b-xl shadow px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo as button */}
        <Link
          to="/"
          className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition focus:outline-none"
        >
          <div className="bg-black w-7 h-7 rounded flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="7" width="16" height="10" rx="2" fill="white" />
              <rect x="4" y="7" width="16" height="10" rx="2" fill="#111827" fillOpacity="0.7" />
            </svg>
          </div>
          <span className="font-bold text-xl text-gray-900 ml-2">FirstLayerLabs</span>
        </Link>
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-7 items-center">
          <Link to="/about-us" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">About Us</Link>
          <Link to="/how-it-works" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">How It Works</Link>
          <Link to="/pricing" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Pricing</Link>
          <Link to="/materials" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Materials</Link>
          <Link to="/faq" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">FAQ's</Link>
          <Link to="/contact-us" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Contact Us</Link>
        </div>
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/upload"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors hover:bg-blue-700 hover:text-white text-center"
          >
            Upload Model
          </Link>
          <Link
            to="/login"
            className="text-gray-900 font-bold px-4 py-2 rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
          >
            Login
          </Link>
        </div>
        {/* Hamburger */}
        <button
          className="lg:hidden flex items-center p-2 rounded hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="max-w-7xl mx-auto lg:hidden mt-2 flex flex-col gap-2">
          <Link to="/about-us" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">About Us</Link>
          <Link to="/how-it-works" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">How It Works</Link>
          <Link to="/pricing" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Pricing</Link>
          <Link to="/materials" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Materials</Link>
          <Link to="/faq" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">FAQ's</Link>
          <Link to="/contact-us" className="text-gray-900 font-semibold px-4 py-2 rounded-full transition hover:bg-black hover:text-white">Contact Us</Link>
          <Link
            to="/upload"
            className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition-colors hover:bg-blue-700 hover:text-white text-center"
          >
            Upload Model
          </Link>
          <Link
            to="/login"
            className="text-gray-900 font-bold px-4 py-2 rounded-full bg-gray-100 transition hover:bg-black hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;