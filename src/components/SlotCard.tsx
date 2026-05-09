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
    full: "bg-error/10 text-error border-error/20",
    waiting: "bg-warning/10 text-warning border-warning/20",
    available: "bg-success/10 text-success border-success/20",
  };

  const progressColors = {
    full: "bg-error",
    waiting: "bg-warning",
    available: "bg-success",
  };

  return (
    <motion.div
      whileHover={!isFull ? { y: -5 } : {}}
      className={`p-6 rounded-[2rem] border transition-all duration-300 relative overflow-hidden flex flex-col h-full bg-white shadow-xl shadow-primary/5 ${
        isFull 
          ? "border-border opacity-60" 
          : "border-border hover:border-primary/20"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-bold text-primary mb-1 tracking-tight">{time}</h3>
          <div className="text-muted text-[10px] font-black uppercase tracking-widest">60 Min Session</div>
        </div>
        <div className={`px-2 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest border ${statusColors[status]}`}>
          {status === "full" ? "Sold Out" : status === "waiting" ? "Fast Filling" : "Available"}
        </div>
      </div>

      <div className="mt-auto">
        <div className="flex justify-between text-[9px] font-black mb-2 uppercase tracking-widest">
          <span className="text-muted">Slot Occupancy</span>
          <span className={isFull ? "text-error" : "text-primary"}>{booked} / {total}</span>
        </div>
        <div className="h-1.5 w-full bg-border rounded-full overflow-hidden mb-6">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(booked / total) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${progressColors[status]}`}
          />
        </div>

        <button
          disabled={isFull}
          className={`w-full py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
            isFull
              ? "bg-surface-muted text-muted/60 cursor-not-allowed border border-border"
              : isWaiting
                ? "bg-primary text-white hover:bg-black hover:scale-[1.02] shadow-lg shadow-primary/20"
                : "bg-success text-white hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-success/20"
          }`}
        >
          {isFull ? "Join Waitlist" : isWaiting ? "Priority Booking" : "Confirm Slot"}
        </button>
      </div>
    </motion.div>
  );
};

export default SlotCard;
