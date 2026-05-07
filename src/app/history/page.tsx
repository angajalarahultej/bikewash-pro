"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineSearch, 
  HiOutlineFilter, 
  HiOutlineDownload, 
  HiOutlineDotsVertical, 
  HiOutlineCalendar,
  HiOutlineChevronRight,
  HiOutlineChevronLeft
} from "react-icons/hi";
import { motion } from "framer-motion";

const HistoryPage = () => {
  const historyData = [
    { id: "BW-9021", date: "May 04, 2024", time: "10:00 AM", service: "Pro Detail", amount: "₹499", status: "Completed", payment: "Paid" },
    { id: "BW-8910", date: "Apr 28, 2024", time: "02:00 PM", service: "Quick Wash", amount: "₹199", status: "Completed", payment: "Paid" },
    { id: "BW-8845", date: "Apr 15, 2024", time: "11:00 AM", service: "Chain Lubing", amount: "₹99", status: "Completed", payment: "Paid" },
    { id: "BW-8732", date: "Apr 02, 2024", time: "04:00 PM", service: "Ultimate Shine", amount: "₹899", status: "Cancelled", payment: "Refunded" },
    { id: "BW-8654", date: "Mar 20, 2024", time: "09:00 AM", service: "Pro Detail", amount: "₹499", status: "Completed", payment: "Paid" },
    { id: "BW-8521", date: "Mar 05, 2024", time: "01:00 PM", service: "Quick Wash", amount: "₹199", status: "Completed", payment: "Paid" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-x-hidden font-serif">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen relative flex flex-col bg-[#000000]">
        
        <div className="p-6 md:p-10 lg:p-12 w-full mx-auto relative z-10 flex-1">
          
          <header className="mb-10 mt-20 lg:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight uppercase">
              Wash <span className="text-brand-green">History</span>
            </h1>
            <p className="text-gray-400 text-base">Review your past bookings and service details.</p>
          </header>

          {/* Filters & Search Row */}
          <div className="flex flex-col xl:flex-row gap-6 mb-8">
            <div className="relative flex-1 group">
              <HiOutlineSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-2xl group-focus-within:text-brand-green transition-colors" />
              <input 
                type="text" 
                placeholder="Search by Booking ID, Date or Service..."
                className="w-full bg-[#0f1115] border border-white/5 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:border-brand-green/30 transition-all font-serif text-sm tracking-widest"
              />
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-5 bg-[#0f1115] border border-white/5 rounded-2xl text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#1a1c23] transition-all whitespace-nowrap">
                <HiOutlineFilter className="text-xl text-gray-500" />
                Advanced Filters
              </button>
              <button className="px-8 py-5 bg-brand-green text-black font-bold text-xs rounded-2xl flex items-center gap-3 hover:scale-105 transition-transform uppercase tracking-widest shadow-xl shadow-brand-green/10">
                <HiOutlineDownload className="text-xl" />
                Export CSV
              </button>
            </div>
          </div>

          {/* History List */}
          <div className="bg-[#0f1115] border border-white/5 rounded-[32px] overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead className="sticky top-0 z-20">
                  <tr className="border-b border-white/5 bg-[#14161c]">
                    <th className="px-10 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Booking Info</th>
                    <th className="px-10 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Service Type</th>
                    <th className="px-10 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">Amount</th>
                    <th className="px-10 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] text-center">Status</th>
                    <th className="px-10 py-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em] text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {historyData.map((item, i) => (
                    <tr key={i} className="hover:bg-white/[0.01] transition-all group">
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-all">
                            <HiOutlineCalendar className="text-2xl text-gray-500 group-hover:text-brand-green" />
                          </div>
                          <div>
                            <div className="text-white font-bold text-base mb-1 tracking-tight">#{item.id}</div>
                            <div className="text-gray-500 text-xs flex items-center gap-2">
                              {item.date} <span className="text-gray-800">•</span> {item.time}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="text-white font-bold text-base uppercase tracking-tight">{item.service}</div>
                        <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mt-1">Premium Wash</div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="text-white font-bold text-lg tracking-tight">{item.amount}</div>
                        <div className="text-brand-green text-[10px] font-bold uppercase tracking-widest">{item.payment}</div>
                      </td>
                      <td className="px-10 py-8 text-center">
                        <span className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] border ${
                          item.status === "Completed" 
                            ? "bg-[#162a1e] text-brand-green border-brand-green/20" 
                            : "bg-red-500/10 text-red-500 border-red-500/20"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <div className="flex items-center justify-end gap-4">
                          <button className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-white hover:bg-brand-green hover:text-black transition-all shadow-xl" title="Download Invoice">
                            <HiOutlineDownload className="text-xl" />
                          </button>
                          <button className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-xl">
                            <HiOutlineDotsVertical className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination / Footer */}
            <div className="px-10 py-6 border-t border-white/5 bg-white/[0.01] flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-500 text-xs font-serif italic">
                Showing 1-6 of 24 results
              </div>
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white opacity-50 cursor-not-allowed">
                  <HiOutlineChevronLeft className="text-xl" />
                </button>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map(num => (
                    <button key={num} className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${num === 1 ? "bg-brand-green text-black" : "bg-white/5 text-gray-500 hover:bg-white/10 hover:text-white"}`}>
                      {num}
                    </button>
                  ))}
                </div>
                <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-white/10">
                  <HiOutlineChevronRight className="text-xl" />
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
