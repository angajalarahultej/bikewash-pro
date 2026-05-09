"use client";

import Sidebar from "@/components/Sidebar";
import TimelineTracker from "@/components/TimelineTracker";
import StatusBadge from "@/components/StatusBadge";
import { 
  HiOutlineMapPin, 
  HiOutlineUser, 
  HiOutlineShieldCheck,
  HiOutlinePhone,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCamera,
  HiOutlineArrowLeft
} from "react-icons/hi2";
import Link from "next/link";
import { motion } from "framer-motion";

const TrackingPage = () => {
  const trackingSteps = [
    { id: "1", label: "Booking Confirmed", time: "08:30 AM", isCompleted: true, isCurrent: false, icon: HiOutlineShieldCheck },
    { id: "2", label: "Worker Assigned", time: "09:00 AM", isCompleted: true, isCurrent: false, icon: HiOutlineUser },
    { id: "3", label: "Arrived at Location", time: "09:15 AM", isCompleted: true, isCurrent: false, icon: HiOutlineMapPin },
    { id: "4", label: "Wash in Progress", time: "Active Now", isCompleted: false, isCurrent: true, icon: HiOutlineShieldCheck },
    { id: "5", label: "Final Inspection", isCompleted: false, isCurrent: false, icon: HiOutlineShieldCheck },
    { id: "6", label: "Completed", isCompleted: false, isCurrent: false, icon: HiOutlineShieldCheck },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col gap-8">
          
          <header className="flex items-center gap-4">
            <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary transition-all shadow-sm">
              <HiOutlineArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">Live Tracking</h1>
              <p className="text-muted text-xs font-bold uppercase tracking-widest mt-1">Service ID: #BW-82910</p>
            </div>
            <div className="ml-auto">
              <StatusBadge status="in-progress" label="Washing Now" />
            </div>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Timeline Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="premium-card p-8 bg-white">
                <TimelineTracker steps={trackingSteps} />
              </div>

              {/* Worker Info Card */}
              <div className="premium-card p-6 bg-white flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-surface-muted rounded-2xl overflow-hidden shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop" 
                    alt="Worker" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-lg font-bold text-primary">Suresh Kumar</h4>
                  <p className="text-sm text-muted font-medium mb-4">Lead Detailing Specialist • 4.9★</p>
                  <div className="flex justify-center md:justify-start gap-3">
                    <button className="px-4 py-2 bg-primary text-white rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-[#333] transition-all shadow-lg shadow-primary/10">
                      <HiOutlinePhone className="text-lg" />
                      Call
                    </button>
                    <button className="px-4 py-2 bg-white border border-border text-primary rounded-xl text-xs font-bold flex items-center gap-2 hover:bg-surface-muted transition-all shadow-sm">
                      <HiOutlineChatBubbleLeftEllipsis className="text-lg" />
                      Message
                    </button>
                  </div>
                </div>
                <div className="px-6 py-3 bg-accent/10 rounded-2xl border border-accent/20 hidden md:block">
                  <div className="text-accent font-bold text-lg leading-none mb-1">2,450</div>
                  <div className="text-[9px] font-bold text-accent uppercase tracking-widest leading-none">Total Washes</div>
                </div>
              </div>
            </div>

            {/* Service Info Column */}
            <div className="space-y-8">
              <div className="premium-card p-6 bg-white">
                <h4 className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">Service Details</h4>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted/80 uppercase tracking-widest mb-1">Vehicle</span>
                    <span className="text-sm font-bold text-primary">Royal Enfield Himalayan</span>
                    <span className="text-xs text-muted">KA-01-HE-1234</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted/80 uppercase tracking-widest mb-1">Service Type</span>
                    <span className="text-sm font-bold text-primary">Premium Detailing</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-muted/80 uppercase tracking-widest mb-1">Parking Slot</span>
                    <span className="text-sm font-bold text-primary">B2, Slot #142</span>
                    <span className="text-xs text-muted">Tower A, Corporate Park</span>
                  </div>
                </div>
              </div>

              {/* Photo Evidence Card */}
              <div className="premium-card p-6 bg-white">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Live Photos</h4>
                  <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded uppercase">New</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-square bg-surface-muted rounded-xl overflow-hidden relative group cursor-pointer border border-border">
                    <img 
                      src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&h=400&fit=crop" 
                      alt="Before" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <HiOutlineCamera className="text-white text-2xl" />
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[8px] font-bold text-white uppercase tracking-widest">Before</div>
                  </div>
                  <div className="aspect-square bg-surface-muted rounded-xl flex flex-col items-center justify-center text-muted/80 border-2 border-dashed border-border">
                    <HiOutlineCamera className="text-2xl mb-2" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">After photo</span>
                    <span className="text-[8px] font-bold uppercase tracking-widest mt-1">(Pending)</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary text-white rounded-[2rem] shadow-xl shadow-primary/20">
                <p className="text-xs text-white/60 leading-relaxed font-medium italic">
                  &quot;Rest assured, your bike is being handled by our top-rated professional. You&apos;ll receive a notification once the final inspection is complete.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrackingPage;
