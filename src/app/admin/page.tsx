"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineUsers, 
  HiOutlineCurrencyRupee, 
  HiOutlineShoppingBag,
  HiOutlineChevronDown,
  HiOutlineArrowUp,
  HiOutlineArrowDown,
  HiOutlineCalendar,
  HiOutlineBell,
  HiOutlineSearch
} from "react-icons/hi";
import { HiOutlineArrowTrendingUp as HiOutlineTrendingUp } from "react-icons/hi2";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isAdmin={true} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen bg-[#000000]">
        
        <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16 lg:mt-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">
                Overview
              </h1>
              <p className="text-neutral-500 text-sm">Platform performance and business metrics.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900 border border-white/5 cursor-pointer hover:border-brand-green/30 transition-all">
                <HiOutlineCalendar className="text-lg text-brand-green" />
                <span className="text-sm font-medium">May 2024</span>
                <HiOutlineChevronDown className="text-neutral-600" />
              </div>
              <button className="minimal-btn-primary">
                Export
              </button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { label: "Total Bookings", value: "1,248", sub: "+12.5%", icon: HiOutlineShoppingBag, color: "text-brand-green", up: true },
              { label: "Revenue", value: "₹52,490", sub: "+8.2%", icon: HiOutlineCurrencyRupee, color: "text-brand-green", up: true },
              { label: "Active Users", value: "842", sub: "+15.3%", icon: HiOutlineUsers, color: "text-blue-400", up: true },
              { label: "Peak Load", value: "94%", sub: "+4.1%", icon: HiOutlineTrendingUp, color: "text-purple-400", up: true },
            ].map((stat, i) => (
              <div key={i} className="minimal-card p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className={`p-2 rounded-md bg-neutral-900 border border-white/5 ${stat.color}`}>
                    <stat.icon className="text-lg" />
                  </div>
                  <div className={`flex items-center gap-1 text-[10px] font-bold uppercase ${stat.up ? "text-brand-green" : "text-red-500"}`}>
                    {stat.up ? <HiOutlineArrowUp /> : <HiOutlineArrowDown />}
                    {stat.sub}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 minimal-card p-8 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-white">Revenue Trends</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    Growth
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-neutral-500 uppercase">
                    <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                    Baseline
                  </div>
                </div>
              </div>
              <div className="flex-1 min-h-[300px] w-full bg-neutral-900/30 rounded-xl border border-dashed border-neutral-800 flex items-center justify-center">
                <div className="text-center">
                  <HiOutlineTrendingUp className="text-3xl text-neutral-800 mx-auto mb-3" />
                  <p className="text-neutral-700 text-xs font-medium uppercase tracking-widest">Chart Data Loading</p>
                </div>
              </div>
            </div>

            <div className="minimal-card p-8 flex flex-col gap-8">
              <h3 className="text-lg font-bold text-white">Traffic</h3>
              <div className="space-y-6">
                {[
                  { label: "Morning", val: 85, color: "bg-brand-green" },
                  { label: "Afternoon", val: 32, color: "bg-brand-yellow" },
                  { label: "Evening", val: 94, color: "bg-brand-green" },
                  { label: "Night", val: 12, color: "bg-red-500" },
                ].map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                      <span className="text-neutral-500">{item.label}</span>
                      <span className="text-white">{item.val}%</span>
                    </div>
                    <div className="h-1 w-full bg-neutral-900 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.val}%` }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-lg font-bold text-white">Transactions</h2>
              <div className="flex items-center gap-6">
                <div className="relative hidden xl:block">
                  <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                  <input type="text" placeholder="Search..." className="bg-neutral-900 border border-white/5 rounded-lg py-2 pl-12 pr-4 text-xs text-white focus:outline-none focus:border-brand-green/30 w-64 transition-all" />
                </div>
                <button className="text-neutral-500 text-[10px] uppercase font-bold hover:text-white transition-all">Export CSV</button>
              </div>
            </div>
            
            <div className="minimal-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-neutral-900 bg-neutral-900/30">
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider text-center">Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900">
                    {[
                      { user: "Rahul Vijay", bike: "RE Himalayan 450", amount: "₹499", status: "Completed" },
                      { user: "Aman Gupta", bike: "KTM RC 390", amount: "₹199", status: "Completed" },
                      { user: "Siddharth", bike: "BMW G310 GS", amount: "₹899", status: "Processing" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-neutral-900/30 transition-all">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center font-bold text-brand-green text-xs">
                              {row.user.charAt(0)}
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">{row.user}</div>
                              <div className="text-neutral-600 text-[10px] uppercase tracking-wider">{row.bike}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-sm text-neutral-400">Pro Detailing</td>
                        <td className="px-6 py-5 text-center">
                          <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                            row.status === "Completed" 
                              ? "bg-brand-green/10 text-brand-green border-brand-green/20" 
                              : "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20"
                          }`}>
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right font-bold text-white text-sm">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
