"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-24 overflow-hidden bg-black">
      {/* Subtle Background Layer */}
      <div className="absolute inset-0">
        <img 
          src="/premium_bike_wash_station_1778178564752.png" 
          alt="Premium Bike Wash" 
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      <div className="bw-container relative z-10">
        <div className="max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-10 md:gap-12"
          >
            {/* Tagline / Label */}
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-neutral-900 border border-white/5 text-brand-green text-[9px] font-bold uppercase tracking-[0.4em] mb-6 shadow-sm">
                Elite Grooming Registry
              </span>
              
              {/* Controlled Heading Size for Luxury Feel */}
              <h1 className="bw-heading">
                The Art of <br />
                <span className="text-brand-green italic">Mechanical Care.</span>
              </h1>
            </div>

            {/* Paragraph with comfortable leading */}
            <p className="bw-paragraph">
              Experience the pinnacle of motorcycle grooming. We combine proprietary technology with artisanal care to restore your machine&apos;s showroom soul.
            </p>

            {/* CTA Actions with balanced gap */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <Link href="/login">
                <button className="minimal-btn-primary px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold shadow-lg">
                  Reserve Session
                  <HiArrowRight className="text-xl ml-2" />
                </button>
              </Link>
              
              <Link href="/process">
                <button className="minimal-btn-secondary px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold border-neutral-800">
                  Our Process
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Glow Accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
