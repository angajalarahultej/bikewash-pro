"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MetricCard from "@/components/MetricCard";
import { 
  HiOutlineBuildingOffice2, 
  HiOutlineUserGroup, 
  HiOutlinePresentationChartLine, 
  HiOutlineShieldCheck,
  HiOutlineInformationCircle,
  HiOutlineArrowRight,
  HiOutlineArrowUpRight,
  HiOutlineSparkles
} from "react-icons/hi2";
import { motion } from "framer-motion";

const CorporateDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="bw-container">
          
          <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2 text-accent font-black text-[10px] uppercase tracking-[0.2em]">
                <HiOutlineBuildingOffice2 className="text-lg" />
                Partner Organization Portal
              </div>
              <h1 className="text-4xl font-black text-primary tracking-tighter">
                Global Tech Solutions <span className="text-muted/60">— HQ</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white border border-border rounded-xl text-primary font-bold text-xs uppercase tracking-widest hover:bg-surface-muted transition-all shadow-sm">
                Download ESG Report
              </button>
              <button className="px-6 py-3 bg-primary text-white font-bold text-xs rounded-xl hover:bg-[#333] transition-all uppercase tracking-widest shadow-lg shadow-primary/10">
                Manage Billing
              </button>
            </div>
          </header>

          {/* ESG & Engagement Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard 
              label="Water Saved" 
              value="12,480L" 
              trend={{ value: "12%", isUp: true }}
              icon={HiOutlineSparkles} 
            />
            <MetricCard 
              label="Active Employees" 
              value="842" 
              trend={{ value: "5", isUp: true }}
              icon={HiOutlineUserGroup} 
            />
            <MetricCard 
              label="Avg. Satisfaction" 
              value="4.92" 
              trend={{ value: "98%", isUp: true }}
              icon={HiOutlineShieldCheck} 
            />
            <MetricCard 
              label="Carbon Offset" 
              value="1.2T" 
              trend={{ value: "52 trees", isUp: true }}
              icon={HiOutlinePresentationChartLine} 
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Sustainability Impact Chart Placeholder */}
            <div className="lg:col-span-2 premium-card bg-white p-8 border-border flex flex-col">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">Impact Analytics</h3>
                  <p className="text-muted/80 text-xs">Quarterly sustainability & water saving trends</p>
                </div>
                <select className="bg-surface-muted border border-border rounded-lg px-4 py-2 text-[10px] font-black text-primary uppercase tracking-widest outline-none">
                  <option>Year 2024</option>
                  <option>Year 2023</option>
                </select>
              </div>
              
              <div className="flex-1 flex items-end gap-3 min-h-[300px]">
                {[65, 40, 85, 30, 95, 55, 70, 45, 90, 60, 80, 50].map((height, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-surface-muted rounded-t-lg relative group"
                  >
                    <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-lg"></div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-6 pt-6 border-t border-border text-[10px] font-black text-muted/80 uppercase tracking-widest">
                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
              </div>
            </div>

            {/* Upcoming Campus Visits */}
            <div className="premium-card bg-primary p-8 text-white flex flex-col">
              <h3 className="text-xl font-bold mb-6">Service Schedule</h3>
              <div className="space-y-6 flex-1">
                {[
                  { date: "May 12", site: "Tower A (B2)", slots: "42 Booked" },
                  { date: "May 14", site: "Main Annex", slots: "28 Booked" },
                  { date: "May 15", site: "Tower B (B1)", slots: "15 Available" },
                  { date: "May 19", site: "Tower A (B2)", slots: "Pending" }
                ].map((visit, i) => (
                  <div key={i} className="flex gap-4 items-start pb-6 border-b border-white/5 last:border-0 last:pb-0">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex flex-col items-center justify-center border border-white/10">
                      <span className="text-[10px] font-black uppercase leading-none mb-1">{visit.date.split(' ')[0]}</span>
                      <span className="text-lg font-black leading-none">{visit.date.split(' ')[1]}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{visit.site}</h4>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">{visit.slots}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Request Extra Site Visit
                <HiOutlineArrowRight />
              </button>
            </div>

          </div>

          {/* Employee Feedback & Insights */}
          <div className="mt-12 grid lg:grid-cols-3 gap-8">
            <div className="premium-card bg-white p-8 border-border lg:col-span-1">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                Employee Sentiment
                <HiOutlineInformationCircle className="text-muted/60" />
              </h3>
              <div className="space-y-6">
                {[
                  { label: "Convenience", score: 98 },
                  { label: "Cleanliness", score: 94 },
                  { label: "Pricing Value", score: 91 },
                  { label: "Scheduling Ease", score: 96 }
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-muted">{item.label}</span>
                      <span className="text-primary">{item.score}%</span>
                    </div>
                    <div className="h-1.5 bg-surface-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        className="h-full bg-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary border border-border rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-bold mb-4">Launch CSR Program</h3>
                <p className="text-white/60 text-sm mb-8 leading-relaxed max-w-md">
                  Looking to fully sponsor washes for your leadership team or entire department? Launch a custom CSR program in minutes.
                </p>
                <button className="px-8 py-4 bg-white text-primary font-black text-[10px] uppercase tracking-widest rounded-xl shadow-2xl shadow-white/10 hover:scale-105 transition-all">
                  Setup Sponsorship Program
                </button>
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-black mb-1">20%</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Avg. Productivity Boost</div>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-black mb-1">94%</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Employee Retention</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CorporateDashboard;
