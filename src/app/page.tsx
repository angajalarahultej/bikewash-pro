"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlanCard from "@/components/PlanCard";
import Footer from "@/components/Footer";
import { HiCheckCircle, HiBuildingOffice2, HiUserGroup, HiPresentationChartLine, HiShieldCheck } from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col overflow-x-hidden">
      <Navbar />
      
      <HeroSection />

      {/* How It Works Section */}
      <section id="how-it-works" style={{ paddingTop: "40px", paddingBottom: "40px", background: "var(--background)" }}>
        <div className="bw-container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "40px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Seamless Workplace Vehicle Care</h2>
            <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>We&apos;ve reimagined vehicle maintenance for the modern professional. Four simple steps to a showroom-clean bike.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "24px" }}>
            {[
              { step: "01", title: "Subscribe", desc: "Choose a monthly plan that fits your riding frequency." },
              { step: "02", title: "Schedule", desc: "Select a convenient time slot while you&apos;re at work." },
              { step: "03", title: "Park", desc: "Park in your usual office spot. No need to wait or move." },
              { step: "04", title: "Relax", desc: "Return to a professionally cleaned bike after your shift." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: "#ffffff", border: "1px solid var(--border)", borderRadius: "1.5rem", padding: "32px", margin: 0 }}
              >
                <span style={{ fontSize: "48px", fontWeight: 900, color: "rgba(107,114,128,0.1)", display: "block", marginBottom: "16px", lineHeight: 1 }}>{item.step}</span>
                <h3 style={{ marginBottom: "12px" }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="plans" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="bw-container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", marginBottom: "40px" }}>
            <span className="text-accent font-bold text-xs uppercase tracking-widest" style={{ display: "block", marginBottom: "12px" }}>Simple Subscription</span>
            <h2 style={{ textAlign: "center", marginBottom: "16px" }}>Choose Your Care Tier</h2>
            <p className="text-muted" style={{ fontSize: "18px", lineHeight: "1.6" }}>Fixed monthly pricing. No hidden costs. Cancel or upgrade anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PlanCard 
              title="Basic Plan" 
              price={299} 
              washes={4}
              savingsPerWash={25}
              features={["4 Professional Washes", "Foam Cleaning", "Tire Conditioning", "Chain Lubrication", "Photo Verification"]}
            />
            <PlanCard 
              title="Premium Plan" 
              price={499} 
              washes={8}
              isPopular={true}
              savingsPerWash={45}
              features={["8 Professional Washes", "Deep Foam Detailing", "Ceramic Wax Polish", "Engine Degreasing", "Full Body Buffing", "Priority Scheduling"]}
            />
          </div>
        </div>
      </section>

      {/* Corporate Solutions Section */}
      <section id="corporate" style={{ paddingTop: "40px", paddingBottom: "40px", background: "#ffffff", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="bw-container" style={{ position: "relative", zIndex: 10 }}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-4 block">For Organizations</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Empower Your Employees with <span className="text-accent">Corporate Care.</span>
              </h2>
              <p className="text-muted text-lg mb-10 leading-relaxed">
                Boost employee satisfaction and workplace convenience. Partner with BikeWash Pro to provide on-site vehicle care as a premium perk.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <HiBuildingOffice2 />, title: "Campus Integrated", desc: "On-site servicing in office parking." },
                  { icon: <HiUserGroup />, title: "Employee Benefit", desc: "Fully sponsored or subsidized plans." },
                  { icon: <HiPresentationChartLine />, title: "ESG Reporting", desc: "Track water savings and sustainability." },
                  { icon: <HiShieldCheck />, title: "Vetted Professionals", desc: "Background-checked workers." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-2">
                    <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center text-accent text-xl shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-primary font-bold text-sm mb-1">{feature.title}</h4>
                      <p className="text-muted text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/corporate">
                <button className="btn-premium btn-premium-secondary px-8 py-4">
                  Partner With Us
                </button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="glass p-8 rounded-3xl border-border bg-surface-muted/50">
                <div className="space-y-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-primary font-bold mb-1">Impact Dashboard</h4>
                      <p className="text-muted text-xs">Sustainability Metrics — Q2 2024</p>
                    </div>
                    <div className="text-accent font-bold text-2xl">12,400L</div>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-accent"
                    ></motion.div>
                  </div>
                  <p className="text-muted text-[10px] uppercase tracking-[0.2em] font-bold">Water Saved Through Waterless Tech</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl border border-border">
                      <div className="text-primary font-bold text-xl mb-1">850+</div>
                      <div className="text-muted text-[9px] uppercase font-bold">Active Employees</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-border">
                      <div className="text-primary font-bold text-xl mb-1">4.9/5</div>
                      <div className="text-muted text-[9px] uppercase font-bold">Avg. Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px", background: "var(--surface-muted, #f9fafb)" }}>
        <div className="bw-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Trusted by 10,000+ Professionals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", role: "Sr. Engineer, Google", content: "Saves me 2 hours every weekend. The quality is better than any local wash I've been to." },
              { name: "Priya M.", role: "Product Manager, Amazon", content: "Getting a clean bike when I leave the office is the best feeling. Highly recommend the Premium plan." },
              { name: "Arjun K.", role: "Marketing Lead, Flipkart", content: "The photo verification gives me peace of mind. Excellent service and very professional workers." }
            ].map((t, i) => (
              <div key={i} className="premium-card p-8 bg-white border-border">
                <div className="flex gap-1 text-warning mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-muted mb-6 italic">&quot;{t.content}&quot;</p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-muted/80">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px", background: "var(--background)" }}>
        <div className="bw-container">
          <div className="bg-gradient-premium rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-accent/5 blur-[120px] rounded-full translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">Ready to Return to a <span className="text-accent italic text-gradient-premium">Clean Bike?</span></h2>
              <p className="text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Join the workplace vehicle care revolution. Subscribe today and experience the future of maintenance.
              </p>
              <Link href="/plans">
                <button className="btn-premium btn-premium-primary px-12 py-5 text-lg font-bold shadow-2xl shadow-primary/10">
                  Join BikeWash Pro
                  <HiCheckCircle className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
