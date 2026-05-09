"use client";

import Link from "next/link";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-muted pt-20 pb-10 border-t border-border">
      <div className="bw-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-primary border border-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">
                BikeWash<span className="text-accent">Pro</span>
              </span>
            </Link>
            <p className="text-muted mb-8 leading-relaxed">
              Workplace vehicle care subscription platform. Premium detailing while you focus on your corporate goals.
            </p>
            <div className="flex items-center gap-4">
              {[FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center text-muted hover:text-accent hover:bg-border transition-all">
                  <Icon className="text-lg" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ textAlign: "center", color: "var(--primary)", paddingBottom: "8px", borderBottom: "1px solid var(--border)" }}>Platform</h4>
            <ul className="space-y-2">
              {[
                { name: "How It Works", href: "#" },
                { name: "Subscription Plans", href: "/plans" },
                { name: "Corporate Solutions", href: "/corporate" },
                { name: "Service Areas", href: "#" },
                { name: "Worker Portal", href: "/worker/login" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ textAlign: "center", color: "var(--primary)", paddingBottom: "8px", borderBottom: "1px solid var(--border)" }}>Company</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Refund Policy", href: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-accent transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6" style={{ textAlign: "center", color: "var(--primary)", paddingBottom: "8px", borderBottom: "1px solid var(--border)" }}>Support</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-muted group">
                <HiOutlineMapPin className="text-xl text-accent shrink-0 mt-1" />
                <span className="text-sm leading-relaxed group-hover:text-primary transition-colors">
                  Corporate Hub 1, Tech Park Area,<br />
                  Bangalore, KA 560103
                </span>
              </li>
              <li className="flex items-center gap-2 text-muted group">
                <HiOutlinePhone className="text-xl text-accent shrink-0" />
                <span className="text-sm group-hover:text-primary transition-colors">+91 800-BIKE-PRO</span>
              </li>
              <li className="flex items-center gap-2 text-muted group">
                <HiOutlineEnvelope className="text-xl text-accent shrink-0" />
                <span className="text-sm group-hover:text-primary transition-colors">hello@bikewash.pro</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted text-xs">
            © 2024 BIKEWASH PRO. WORKPLACE VEHICLE CARE SUBSCRIPTION.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-muted text-xs">Premium SaaS Platform</span>
            <div className="h-1 w-20 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-accent w-2/3 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
