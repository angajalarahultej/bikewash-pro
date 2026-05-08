"use client";

import Link from "next/link";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#05070a] border-t border-white/5 pt-24 pb-12 font-serif">
      <div className="bw-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 bg-[#1a1c23] border border-white/10 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                BikeWash<span className="text-brand-green">Pro</span>
              </span>
            </Link>
            <p className="bw-paragraph mb-8">
              The gold standard in motorcycle detailing. We combine precision engineering with artisanal care to revive your machine.
            </p>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaTwitter, FaFacebookF].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-green hover:border-brand-green/30 transition-all">
                  <Icon className="text-xl" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-10">Experience</h4>
            <ul className="space-y-4">
              {["Features", "Process", "Pricing", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-brand-green transition-colors text-base font-bold italic">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-10">Legal</h4>
            <ul className="space-y-4">
              {["Terms of Service", "Privacy Policy", "Refund Policy", "Membership Terms"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-brand-green transition-colors text-base font-bold italic">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.3em] mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-500 group">
                <HiOutlineLocationMarker className="text-2xl text-brand-green shrink-0 mt-1" />
                <span className="text-base italic leading-relaxed group-hover:text-white transition-colors">
                  123 Luxury Heights, Indiranagar,<br />
                  Bangalore, Karnataka 560038
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 group">
                <HiOutlinePhone className="text-2xl text-brand-green shrink-0" />
                <span className="text-base italic group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 group">
                <HiOutlineMail className="text-2xl text-brand-green shrink-0" />
                <span className="text-base italic group-hover:text-white transition-colors">care@bikewash.pro</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © 2024 BIKEWASH PRO. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-8">
            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest">Designed for Riders</span>
            <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-brand-green w-1/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
