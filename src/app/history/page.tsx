"use client";

import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { 
  HiOutlineMagnifyingGlass, 
  HiOutlineFunnel, 
  HiOutlineArrowDownTray, 
  HiOutlineEllipsisVertical, 
  HiOutlineCalendarDays,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
  HiOutlineCamera
} from "react-icons/hi2";
import { motion } from "framer-motion";

const HistoryPage = () => {
  const historyData = [
    { id: "BW-9021", date: "May 04, 2024", time: "10:00 AM", vehicle: "KA-01-HE-1234", service: "Pro Detail", amount: "1 Credit", status: "completed" },
    { id: "BW-8910", date: "Apr 28, 2024", time: "02:00 PM", vehicle: "KA-01-HE-1234", service: "Quick Wash", amount: "1 Credit", status: "completed" },
    { id: "BW-8845", date: "Apr 15, 2024", time: "11:00 AM", vehicle: "KA-03-MK-5678", service: "Chain Lube", amount: "1 Credit", status: "completed" },
    { id: "BW-8732", date: "Apr 02, 2024", time: "04:00 PM", vehicle: "KA-01-HE-1234", service: "Pro Detail", amount: "1 Credit", status: "cancelled" },
    { id: "BW-8654", date: "Mar 20, 2024", time: "09:00 AM", vehicle: "KA-01-HE-1234", service: "Quick Wash", amount: "1 Credit", status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="p-6 md:p-10 lg:p-12 w-full mx-auto flex flex-col gap-8">
          
          <header>
            <h1 className="text-2xl font-bold text-primary mb-1">Service History</h1>
            <p className="text-muted text-sm">Review your past washes and download reports.</p>
          </header>

          {/* Filters & Search Row */}
          <div className="flex flex-col xl:flex-row gap-4">
            <div className="global-input-wrapper flex-1">
              <HiOutlineMagnifyingGlass className="input-icon" />
              <input 
                type="text" 
                placeholder="Search by ID, Vehicle or Date..."
                className="shadow-sm"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-4 bg-white border border-border rounded-xl text-muted font-bold text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-surface-muted transition-all shadow-sm">
                <HiOutlineFunnel className="text-lg" />
                Filters
              </button>
              <button className="px-6 py-4 bg-primary text-white font-bold text-xs rounded-xl flex items-center gap-3 hover:bg-[#333] transition-all uppercase tracking-widest shadow-lg shadow-primary/10">
                <HiOutlineArrowDownTray className="text-lg" />
                Export
              </button>
            </div>
          </div>

          {/* History List */}
          <div className="premium-card bg-white overflow-hidden shadow-xl shadow-primary/5">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-surface-muted/50">
                    <th className="px-6 py-5 text-xs font-bold text-muted/80 uppercase tracking-widest">Service Date</th>
                    <th className="px-6 py-5 text-xs font-bold text-muted/80 uppercase tracking-widest">Vehicle Details</th>
                    <th className="px-6 py-5 text-xs font-bold text-muted/80 uppercase tracking-widest">Service Type</th>
                    <th className="px-6 py-5 text-xs font-bold text-muted/80 uppercase tracking-widest text-center">Status</th>
                    <th className="px-6 py-5 text-xs font-bold text-muted/80 uppercase tracking-widest text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-muted">
                  {historyData.map((item, i) => (
                    <tr key={i} className="hover:bg-surface-muted/50 transition-all group">
                      <td className="px-6 py-5" style={{ lineHeight: "1.6" }}>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-surface-muted flex items-center justify-center text-muted/80 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                            <HiOutlineCalendarDays className="text-xl" />
                          </div>
                          <div>
                            <div className="text-primary font-bold text-sm tracking-tight">{item.date}</div>
                            <div className="text-xs text-muted/80 font-bold uppercase">{item.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5" style={{ lineHeight: "1.6" }}>
                        <div className="text-primary font-bold text-sm">{item.vehicle}</div>
                        <div className="text-muted/80 text-xs font-bold uppercase mt-0.5">#{item.id}</div>
                      </td>
                      <td className="px-6 py-5" style={{ lineHeight: "1.6" }}>
                        <div className="text-primary font-bold text-sm uppercase tracking-tight">{item.service}</div>
                        <div className="text-accent text-xs font-black uppercase tracking-widest mt-0.5">{item.amount}</div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <StatusBadge status={item.status as any} />
                      </td>
                      <td className="px-6 py-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-muted/80 hover:text-primary hover:border-primary/20 transition-all shadow-sm">
                            <HiOutlineCamera className="text-lg" />
                          </button>
                          <button className="w-10 h-10 rounded-xl bg-surface-muted border border-border flex items-center justify-center text-muted/80 hover:text-primary hover:border-primary/20 transition-all shadow-sm">
                            <HiOutlineEllipsisVertical className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="px-8 py-6 border-t border-border bg-surface-muted/30 flex justify-between items-center">
              <span className="text-[10px] text-muted/80 font-bold uppercase tracking-widest">Page 1 of 4</span>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted/80 opacity-50 cursor-not-allowed">
                  <HiOutlineChevronLeft />
                </button>
                <button className="w-9 h-9 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary hover:border-primary/20 transition-all shadow-sm">
                  <HiOutlineChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;
