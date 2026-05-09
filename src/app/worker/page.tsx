"use client";

import { useState } from "react";
import StatusBadge from "@/components/StatusBadge";
import { 
  HiOutlineMapPin, 
  HiOutlineClock, 
  HiOutlineCamera, 
  HiOutlineCheckCircle,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineQueueList,
  HiOutlineUserCircle
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WorkerPortal = () => {
  const [activeJob, setActiveJob] = useState<any>({
    id: "BW-9023",
    loc: "Tech Park, B2, Slot #142",
    bike: "RE Himalayan 450",
    reg: "KA-01-HE-1234",
    status: "in-progress",
    startTime: "10:15 AM"
  });

  const queue = [
    { id: "BW-9024", loc: "Tech Park, B2, Slot #156", bike: "KTM Duke 390", status: "assigned" },
    { id: "BW-9025", loc: "Tower A, B1, Slot #12", bike: "BMW G310 GS", status: "assigned" },
  ];

  return (
    <div className="min-h-screen bg-background text-primary flex flex-col">
      {/* Mobile-First Header */}
      <header className="p-6 flex justify-between items-center bg-surface-muted/50 border-b border-border sticky top-0 z-50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-white font-bold">
            SK
          </div>
          <div>
            <h1 className="text-sm font-bold">Suresh Kumar</h1>
            <div className="text-[10px] text-success font-bold uppercase tracking-widest">Online • Field Lead</div>
          </div>
        </div>
        <Link href="/login">
          <button className="p-2 text-muted hover:text-primary transition-colors">
            <HiOutlineArrowLeftOnRectangle className="text-2xl" />
          </button>
        </Link>
      </header>

      <main className="flex-1 p-6 space-y-8 max-w-lg mx-auto w-full">
        
        {/* Active Job Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-bold text-muted uppercase tracking-widest">Active Job</h2>
            <span className="text-[10px] font-bold text-accent animate-pulse">Live</span>
          </div>
          
          <div className="bg-white rounded-3xl p-6 border border-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{activeJob.bike}</h3>
                  <div className="px-3 py-1 bg-surface-muted rounded-lg text-accent font-mono text-sm inline-block">
                    {activeJob.reg}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-muted/80 font-bold uppercase mb-1">Started at</div>
                  <div className="text-sm font-bold text-primary">{activeJob.startTime}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 bg-surface-muted rounded-2xl border border-border">
                <HiOutlineMapPin className="text-accent text-xl" />
                <div className="text-sm font-medium text-muted">{activeJob.loc}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-surface-muted rounded-2xl border border-border hover:bg-border transition-all gap-2 text-primary">
                  <HiOutlineCamera className="text-2xl text-muted" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Take Photos</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-success rounded-2xl shadow-lg shadow-success/20 hover:scale-[1.02] transition-all gap-2">
                  <HiOutlineCheckCircle className="text-2xl text-white" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Complete</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Queue Section */}
        <section className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xs font-bold text-muted uppercase tracking-widest">Up Next</h2>
            <div className="flex items-center gap-1 text-[10px] font-bold text-muted/80">
              <HiOutlineQueueList />
              <span>{queue.length} in queue</span>
            </div>
          </div>
          
          <div className="space-y-3">
            {queue.map(job => (
              <div key={job.id} className="bg-white p-4 rounded-2xl border border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface-muted rounded-xl flex items-center justify-center text-muted">
                    <HiOutlineClock />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{job.bike}</h4>
                    <p className="text-[10px] text-muted/80 font-medium">{job.loc}</p>
                  </div>
                </div>
                <HiOutlineChevronRight className="text-muted" />
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 gap-4 pb-12">
          <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
            <div className="text-[10px] text-muted/80 font-bold uppercase tracking-widest mb-1">Today's Earnings</div>
            <div className="text-xl font-bold">₹1,450</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-border shadow-sm">
            <div className="text-[10px] text-muted/80 font-bold uppercase tracking-widest mb-1">Shift Hours</div>
            <div className="text-xl font-bold">4.5h</div>
          </div>
        </section>

      </main>

      {/* Mobile Navigation */}
      <nav className="bg-white border-t border-border p-4 flex justify-around items-center sticky bottom-0 z-50">
        <button className="flex flex-col items-center gap-1 text-accent">
          <HiOutlineQueueList className="text-2xl" />
          <span className="text-[9px] font-bold uppercase">Jobs</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-muted">
          <HiOutlineUserCircle className="text-2xl" />
          <span className="text-[9px] font-bold uppercase">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default WorkerPortal;

const HiOutlineChevronRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
