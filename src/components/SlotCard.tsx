"use client";

import { motion } from "framer-motion";

interface SlotCardProps {
  time: string;
  booked: number;
  total: number;
  status: "available" | "full" | "waiting";
}

const SlotCard = ({ time, booked, total, status }: SlotCardProps) => {
  const isFull = status === "full";
  const isWaiting = status === "waiting";
  
  const statusColors = {
    full: "bg-red-500/10 text-red-500 border-red-500/20",
    waiting: "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20",
    available: "bg-brand-green/10 text-brand-green border-brand-green/20",
  };

  const progressColors = {
    full: "bg-red-500",
    waiting: "bg-brand-yellow",
    available: "bg-brand-green",
  };

  return (
    <motion.div
      whileHover={!isFull ? { y: -5 } : {}}
      className={`p-8 rounded-[32px] border transition-all duration-300 relative overflow-hidden flex flex-col h-full ${
        isFull 
          ? "bg-white/[0.01] border-white/5 opacity-60" 
          : "bg-[#0a0a0a] border-white/5 hover:border-brand-green/30"
      }`}
    >
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{time}</h3>
          <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">60 Min Session</div>
        </div>
        <div className={`px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusColors[status]}`}>
          {status === "full" ? "Sold Out" : status === "waiting" ? "Fast Filling" : "Available"}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-[11px] font-black mb-3 uppercase tracking-widest">
          <span className="text-gray-500">Slot Occupancy</span>
          <span className={isFull ? "text-red-500" : "text-white"}>{booked} / {total}</span>
        </div>
        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-8">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(booked / total) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${progressColors[status]}`}
          />
        </div>

        <button
          disabled={isFull}
          className={`w-full py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
            isFull
              ? "bg-white/5 text-gray-600 cursor-not-allowed border border-white/5"
              : isWaiting
                ? "bg-brand-yellow text-black hover:bg-yellow-500 hover:scale-[1.02]"
                : "bg-brand-green text-black hover:bg-green-400 hover:scale-[1.02] shadow-lg shadow-brand-green/20"
          }`}
        >
          {isFull ? "Join Waitlist" : isWaiting ? "Priority Booking" : "Confirm Slot"}
        </button>
      </div>
    </motion.div>
  );
};

export default SlotCard;
