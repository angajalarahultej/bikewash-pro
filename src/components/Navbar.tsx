"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? "bg-black/95 backdrop-blur-xl py-4 border-b border-white/5" : "bg-transparent py-8"}`}>
      <div className="max-w-6xl mx-auto px-12 md:px-20 lg:px-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-9 h-9 bg-brand-green rounded flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
            <span className="text-black font-bold text-lg">B</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-serif">
            BikeWash<span className="text-brand-green">Pro</span>
          </span>
        </Link>

        {/* Navigation Links with consistent, luxury spacing */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {["Features", "Process", "Pricing", "About"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-neutral-500 hover:text-white font-medium text-[10px] uppercase tracking-[0.25em] transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8 lg:gap-12">
          <Link href="/login" className="text-neutral-500 hover:text-white font-bold text-[10px] uppercase tracking-[0.3em] transition-all">
            Login
          </Link>
          <Link href="/login">
            <button className="minimal-btn-primary px-6 py-2.5 text-[10px] uppercase tracking-[0.3em] font-bold">
              Reserve
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
