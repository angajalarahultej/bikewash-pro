"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import StatusBadge from "@/components/StatusBadge";
import { 
  HiOutlineCalendar, 
  HiOutlineClock, 
  HiOutlineCreditCard, 
  HiOutlineTicket,
  HiOutlineBell,
  HiOutlineChevronRight,
  HiOutlinePlusCircle,
  HiOutlineGift,
  HiOutlineCamera
} from "react-icons/hi2";
import { motion } from "framer-motion";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-8">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">Customer Dashboard</h1>
              <p className="text-muted text-sm">Welcome back, <span className="font-bold text-primary">Rahul Vijay</span>! Ready for a fresh wash?</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="relative w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 transition-all shadow-sm">
                <HiOutlineBell className="text-xl" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-xl bg-white border border-border shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent font-bold text-xs">RV</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-muted/80 uppercase tracking-wider leading-none mb-1">Corporate ID</span>
                  <span className="text-xs font-bold text-primary leading-none">EMP-8291</span>
                </div>
              </div>
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Stats & Actions */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Subscription Status Card */}
              <div className="premium-card bg-gradient-premium p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg shadow-accent/20">
                        Gold Plan Active
                      </div>
                      <span className="text-white/60 text-xs font-medium">Renews in 12 days</span>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">3 <span className="text-white/60 text-xl font-medium">/ 8 washes left</span></h2>
                    <p className="text-white/60 text-sm max-w-xs">You have saved ₹360 this month compared to single washes. Keep it up!</p>
                  </div>
                  <Link href="/booking" className="w-full md:w-auto">
                    <button className="w-full md:w-auto btn-premium btn-premium-primary px-8 py-4 text-sm font-bold shadow-2xl shadow-primary/30 group-hover:scale-105 transition-transform">
                      <HiOutlinePlusCircle className="text-xl" />
                      Schedule New Wash
                    </button>
                  </Link>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <MetricCard 
                  label="Total Washes" 
                  value="24" 
                  icon={HiOutlineTicket} 
                  trend={{ value: "12%", isUp: true }}
                  description="Lifetime services completed"
                />
                <MetricCard 
                  label="Saved Water" 
                  value="120L" 
                  icon={HiOutlineTicket} 
                  color="secondary"
                  description="Environment impact tracking"
                />
              </div>

              {/* Recent Activity */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-1">
                  <h3 className="text-lg font-bold text-primary">Recent Services</h3>
                  <Link href="/history" className="text-muted/80 text-xs font-bold hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider">
                    View History <HiOutlineChevronRight />
                  </Link>
                </div>
                
                <div className="premium-card overflow-hidden bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-border bg-surface-muted/50">
                          <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Vehicle</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Photos</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-muted">
                        {[
                          { date: "May 04, 2024", vehicle: "KA-01-HE-1234", status: "completed", type: "Pro Detail" },
                          { date: "Apr 28, 2024", vehicle: "KA-01-HE-1234", status: "completed", type: "Quick Wash" },
                          { date: "Apr 15, 2024", vehicle: "KA-01-HE-1234", status: "completed", type: "Chain Lube" },
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-surface-muted/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-primary">{row.date}</span>
                                <span className="text-[10px] text-muted/80 font-medium uppercase">{row.type}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-muted">{row.vehicle}</td>
                            <td className="px-6 py-4">
                              <StatusBadge status={row.status as any} />
                            </td>
                            <td className="px-6 py-4">
                              <button className="p-2 bg-surface-muted rounded-lg text-muted/80 hover:text-primary transition-colors">
                                <HiOutlineCamera className="text-lg" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Secondary Info */}
            <div className="space-y-8">
              
              {/* Upcoming Wash Card */}
              <div className="global-stat-card border-l-4 border-l-accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <HiOutlineCalendar className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary">Upcoming Wash</h4>
                    <p className="text-xs text-muted/80 uppercase font-bold">Confirmed Slot</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">Date</span>
                    <span className="text-xs font-bold text-primary">Tomorrow, May 10</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">Time</span>
                    <span className="text-xs font-bold text-primary">09:00 AM - 11:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">Location</span>
                    <span className="text-xs font-bold text-primary">B2, Slot #142</span>
                  </div>
                </div>
                <Link href="/tracking">
                  <button className="w-full py-3 bg-primary text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#333] transition-all flex items-center justify-center gap-2">
                    <HiOutlineClock className="text-lg" />
                    Track Progress
                  </button>
                </Link>
              </div>

              {/* Refer & Earn */}
              <div className="global-stat-card bg-primary text-white relative overflow-hidden border border-border">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
                <HiOutlineGift className="text-3xl text-accent mb-3" />
                <h4 className="text-lg font-bold leading-tight" style={{ color: "white" }}>Refer a Friend, <br />Get Free Washes</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: "1.6" }}>Give your colleague ₹100 off their first month and get 1 free wash credit added to your account.</p>
                <Link href="/referrals">
                  <button className="w-full py-3 rounded-xl text-xs font-bold transition-all border" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.1)" }}>
                    Invite Coworkers
                  </button>
                </Link>
              </div>

              {/* Ratings Summary */}
              <div className="global-stat-card bg-white">
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider" style={{ marginBottom: "16px" }}>Your Experience</h4>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-bold text-primary">4.9</div>
                  <div className="flex flex-col">
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                    </div>
                    <span className="text-xs text-muted/80 font-bold uppercase">Average Rating</span>
                  </div>
                </div>
                <p className="text-[11px] text-muted leading-relaxed italic border-l-2 border-border pl-3">
                  &quot;Always perfect service. The workers are very careful with the paint.&quot;
                </p>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
