"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlanCard from "@/components/PlanCard";
import { HiOutlineShieldCheck, HiOutlineSparkles, HiOutlineArrowPath } from "react-icons/hi2";
import { motion } from "framer-motion";

const PlansPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-20 bg-surface-muted border-b border-border">
          <div className="bw-container text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-4">Subscription Plans</h1>
            <p className="text-lg text-muted">Choose the perfect care plan for your ride. Fixed monthly billing, no long-term contracts.</p>
          </div>
        </section>

        {/* Plans Grid */}
        <section className="py-20">
          <div className="bw-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlanCard 
                title="Trial Plan" 
                price={99} 
                washes={1}
                features={["1 Professional Wash", "Foam Cleaning", "Tire Conditioning", "Photo Verification"]}
              />
              <PlanCard 
                title="Basic Plan" 
                price={299} 
                washes={4}
                isPopular={true}
                savingsPerWash={25}
                features={["4 Professional Washes", "Foam Cleaning", "Tire Conditioning", "Chain Lubrication", "Photo Verification", "Priority Support"]}
              />
              <PlanCard 
                title="Premium Plan" 
                price={499} 
                washes={8}
                savingsPerWash={45}
                features={["8 Professional Washes", "Deep Foam Detailing", "Ceramic Wax Polish", "Engine Degreasing", "Full Body Buffing", "Priority Scheduling", "Chain Deep Cleaning"]}
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="bw-container relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-accent text-3xl">
                  <HiOutlineShieldCheck />
                </div>
                <h3 className="text-xl font-bold">Trusted Experts</h3>
                <p className="text-white/60 text-sm">Background-verified and trained professionals handle your vehicle.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-accent text-3xl">
                  <HiOutlineSparkles />
                </div>
                <h3 className="text-xl font-bold">Waterless Tech</h3>
                <p className="text-white/60 text-sm">Eco-friendly waterless technology that saves 30L of water per wash.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-accent text-3xl">
                  <HiOutlineArrowPath />
                </div>
                <h3 className="text-xl font-bold">Flexible Billing</h3>
                <p className="text-white/60 text-sm">Pause, upgrade, or cancel your subscription anytime with one click.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlansPage;
