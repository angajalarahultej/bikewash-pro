"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-muted/50 -skew-x-12 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="bw-container relative z-10" style={{ paddingTop: "0" }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold uppercase tracking-wider mb-6">
              Workplace Vehicle Care
            </span>
            
            <h1 style={{ textAlign: "left", fontSize: "45px" }}>
              Your Bike Gets Cleaned <br />
              <span className="text-primary italic">While You Work.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted mb-10 max-w-xl leading-relaxed">
              Premium vehicle care, scheduled seamlessly. We bring professional detailing to your workplace parking spot.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/plans">
                <button className="btn-premium btn-premium-primary text-base px-8 py-4 shadow-xl shadow-primary/20">
                  Start Subscription
                  <HiArrowRight className="text-lg" />
                </button>
              </Link>
              
              <Link href="/plans">
                <button className="btn-premium btn-premium-outline text-base px-8 py-4">
                  View Plans
                </button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 grayscale opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Corporate Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Eco Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Photo Verified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 premium-card p-4 overflow-hidden">
              <img 
                src="/premium_bike_wash_station_1778178564752.png" 
                alt="Premium Bike Wash" 
                className="w-full h-auto rounded-xl object-cover shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-xl z-20 max-w-[200px]"
            >
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">500+</span>
                <span className="text-xs text-muted font-medium leading-tight">Washes completed today across 10 corporate hubs</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
