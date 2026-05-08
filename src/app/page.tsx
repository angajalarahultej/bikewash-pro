"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PricingCard from "@/components/PricingCard";
import Footer from "@/components/Footer";
import { HiLightningBolt, HiShieldCheck, HiClock, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col overflow-x-hidden">
      <Navbar />
      
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="bw-section bg-black border-t border-neutral-900">
        <div className="bw-container">
          <div className="mb-16 space-y-10">
            <span className="text-brand-green font-bold text-[10px] uppercase tracking-[0.6em] block italic text-center">
              The Standards
            </span>
            <h2 className="bw-heading">
              Engineered for <br />
              <span className="text-brand-green italic">Perfection.</span>
            </h2>
            <p className="bw-paragraph">
              We combine proprietary cleaning systems with artisanal care for a showroom-ready finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {[
              {
                icon: <HiClock />,
                title: "Precision Workflow",
                desc: "A systematic 25-minute process covering 40+ inspection points.",
                color: "text-brand-green"
              },
              {
                icon: <HiShieldCheck />,
                title: "Microfiber Standards",
                desc: "Paint-safe polymers and materials for a scratch-free finish.",
                color: "text-blue-400"
              },
              {
                icon: <HiLightningBolt />,
                title: "Instant Scheduling",
                desc: "Real-time slot selection with zero waiting time.",
                color: "text-purple-400"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="minimal-card p-10 flex flex-col gap-8 transition-all hover:translate-y-[-5px]"
              >
                <div className={`text-3xl ${feature.color}`}>
                  {feature.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight uppercase font-display">{feature.title}</h3>
                  <p className="bw-paragraph-sm">
                    {feature.desc}
                  </p>
                </div>
                <div className="mt-auto pt-6">
                  <Link href="/login" className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-600 hover:text-white transition-all flex items-center gap-2 group">
                    Learn more
                    <HiArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bw-section bg-[#050505] border-t border-neutral-900">
        <div className="bw-container">
          <div className="mb-16 space-y-10">
            <span className="text-brand-green font-bold text-[10px] uppercase tracking-[0.6em] italic block text-center">
              The Registry
            </span>
            <h2 className="bw-heading">
              Simple <span className="text-brand-green italic">Pricing.</span>
            </h2>
            <p className="bw-paragraph">
              Choose the detailing tier that fits your machine&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <PricingCard 
              title="Quick Wash" 
              price="199" 
              features={["Foam Wash", "Chain Lubrication", "Air Drying", "Tire Shine"]}
            />
            <PricingCard 
              title="Pro Detail" 
              price="499" 
              isPopular={true}
              features={["Deep Foam Wash", "Ceramic Wax Polish", "Chain Cleaning", "Engine Degreasing", "Full Body Polish"]}
            />
            <PricingCard 
              title="Ultimate Shine" 
              price="899" 
              features={["All Pro Features", "Nano Coating", "Seat Protection", "Anti-Rust Treatment", "Priority Slot"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bw-section bg-black border-t border-neutral-900">
        <div className="bw-container">
          <div className="p-10 md:p-16 bg-neutral-950 border border-white/5 rounded-[32px] text-center space-y-10 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 to-transparent pointer-events-none"></div>
            <h2 className="bw-heading">
              Ready to <span className="text-brand-green">transform?</span>
            </h2>
            <p className="bw-paragraph">
              Join thousands of elite riders who trust us with their machines. Book your premium detailing session today.
            </p>
            <Link href="/login" className="inline-block relative z-10">
              <button className="minimal-btn-primary px-12 py-4 text-xs uppercase tracking-[0.4em] font-bold shadow-lg">
                Reserve Now
                <HiArrowRight className="text-2xl ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
