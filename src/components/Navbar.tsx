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
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "glass py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="bw-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-primary leading-none">
              BikeWash<span className="text-accent">Pro</span>
            </span>
            <span className="text-[10px] font-medium text-muted tracking-wider uppercase">Workplace Care</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {[
            { name: "How It Works", href: "#how-it-works" },
            { name: "Plans", href: "/plans" },
            { name: "Corporate", href: "/corporate" },
            { name: "Support", href: "#faq" }
          ].map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-muted hover:text-primary font-semibold text-sm transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          <Link href="/login" className="text-muted hover:text-primary font-semibold text-sm transition-all">
            Login
          </Link>
          <Link href="/plans">
            <button className="btn-premium btn-premium-primary text-sm px-6 py-2">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
