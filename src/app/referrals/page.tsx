"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineUserPlus, 
  HiOutlineGift, 
  HiOutlineDocumentDuplicate,
  HiOutlineShare,
  HiOutlineTrophy,
  HiOutlineCheckCircle
} from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";

const ReferralsPage = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "RAHUL-BW-2024";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-6xl mx-auto p-6 md:p-10 lg:p-12 flex flex-col gap-10">
          
          <header>
            <h1 className="text-2xl font-bold text-primary mb-1">Refer & Earn</h1>
            <p className="text-muted text-sm">Invite your colleagues and earn free premium washes.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Main Referral Card */}
            <div className="xl:col-span-2 space-y-8">
              <div className="premium-card bg-primary overflow-hidden relative shadow-xl shadow-primary/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest mb-6">
                        <HiOutlineGift className="text-sm" /> Exclusive Reward
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
                        Give a Free Wash,<br />
                        <span className="text-accent">Get a Free Wash.</span>
                      </h2>
                      <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
                        When your colleagues sign up using your unique referral code, they get their first premium wash free, and you earn one too.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1 relative group">
                          <input 
                            type="text" 
                            readOnly 
                            value={referralCode}
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-6 pr-12 text-sm font-black text-white uppercase tracking-widest outline-none"
                          />
                          <button 
                            onClick={handleCopy}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center text-muted/80 hover:text-white hover:bg-white/10 transition-all"
                          >
                            {copied ? <HiOutlineCheckCircle className="text-accent text-xl" /> : <HiOutlineDocumentDuplicate className="text-xl" />}
                          </button>
                        </div>
                        <button className="px-8 py-4 bg-accent text-white font-bold text-xs rounded-xl hover:bg-accent/90 transition-all uppercase tracking-widest shadow-lg shadow-accent/20 flex items-center justify-center gap-2 whitespace-nowrap">
                          <HiOutlineShare className="text-lg" />
                          Share Code
                        </button>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex shrink-0 w-48 h-48 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary rounded-full blur-2xl"></div>
                      <div className="relative w-full h-full bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center">
                        <HiOutlineGift className="text-6xl text-accent drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: HiOutlineShare, title: "1. Share", desc: "Share your code via Slack, Teams, or email." },
                  { icon: HiOutlineUserPlus, title: "2. Sign Up", desc: "Your colleague registers with your code." },
                  { icon: HiOutlineTrophy, title: "3. Earn", desc: "Both of you receive a free premium wash credit." }
                ].map((step, i) => (
                  <div key={i} className="premium-card p-6 bg-white border-border flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-2xl bg-surface-muted flex items-center justify-center text-2xl text-accent mb-4 border border-border">
                      <step.icon />
                    </div>
                    <h3 className="text-sm font-bold text-primary mb-2">{step.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-8">
              <div className="premium-card p-8 bg-white border-border relative overflow-hidden group">
                <div className="relative z-10 flex flex-col">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <HiOutlineTrophy className="text-xl" />
                    </div>
                    <span className="text-[10px] font-black text-muted/80 uppercase tracking-widest">Rewards</span>
                  </div>
                  <div>
                    <div className="text-muted text-[10px] uppercase font-bold tracking-wider mb-1">Earned Washes</div>
                    <div className="text-4xl font-black text-primary tracking-tight">2</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 text-8xl text-surface-muted opacity-50 group-hover:scale-110 transition-transform">
                  <HiOutlineTrophy />
                </div>
              </div>

              <div className="premium-card bg-white border-border overflow-hidden">
                <div className="p-6 border-b border-surface-muted">
                  <h3 className="text-sm font-bold text-primary">Recent Referrals</h3>
                </div>
                <div className="divide-y divide-surface-muted">
                  {[
                    { name: "Anita S.", status: "Completed", date: "2 days ago" },
                    { name: "Kiran M.", status: "Pending", date: "1 week ago" }
                  ].map((ref, i) => (
                    <div key={i} className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-muted border border-border flex items-center justify-center text-muted/80 text-xs font-bold uppercase">
                          {ref.name.substring(0, 2)}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-primary mb-0.5">{ref.name}</div>
                          <div className="text-[10px] text-muted/80 font-bold uppercase tracking-widest">{ref.date}</div>
                        </div>
                      </div>
                      <div className={`text-[10px] font-black uppercase tracking-widest ${ref.status === "Completed" ? "text-accent" : "text-amber-500"}`}>
                        {ref.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ReferralsPage;
