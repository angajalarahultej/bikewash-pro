"use client";

import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import { 
  HiOutlineViewGridAdd, 
  HiOutlineClipboardList, 
  HiOutlineCreditCard, 
  HiOutlineUser,
  HiOutlineBell,
  HiOutlineChevronRight,
  HiOutlineCalendar,
  HiOutlineDownload
} from "react-icons/hi";
import { 
  HiOutlineWallet, 
  HiOutlineQuestionMarkCircle,
  HiOutlineArrowTrendingUp as HiOutlineTrendingUp
} from "react-icons/hi2";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen bg-[#000000]">
        
        <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16 lg:mt-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">
                Dashboard
              </h1>
              <p className="text-neutral-500 text-sm">Welcome back, Naveen! Here's your overview.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900 border border-white/5">
                <HiOutlineWallet className="text-lg text-brand-green" />
                <span className="text-sm font-bold">₹2,500</span>
              </div>
              <button className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-neutral-400 hover:text-white transition-colors relative">
                <HiOutlineBell className="text-xl" />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-9 h-9 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-brand-green font-bold text-sm">
                NK
              </div>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              { label: "Total Washes", value: "12", sub: "Since Jan 2024", icon: HiOutlineTrendingUp, color: "text-brand-green" },
              { label: "Loyalty Points", value: "450", sub: "Next reward at 500", icon: HiOutlineTrendingUp, color: "text-brand-yellow" },
              { label: "Active Booking", value: "01", sub: "May 10, 10:00 AM", icon: HiOutlineCalendar, color: "text-blue-400" },
              { label: "Total Spent", value: "₹1,896", sub: "Platform total", icon: HiOutlineCreditCard, color: "text-purple-400" },
            ].map((stat, i) => (
              <div key={i} className="minimal-card p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className={`p-2 rounded-md bg-neutral-900 border border-white/5 ${stat.color}`}>
                    <stat.icon className="text-lg" />
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider mb-1">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-neutral-600 text-xs mt-1">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <DashboardCard 
                title="Book a Wash" 
                desc="Schedule your next slot." 
                icon={HiOutlineViewGridAdd} 
                href="/booking" 
              />
              <DashboardCard 
                title="History" 
                desc="Review past services." 
                icon={HiOutlineClipboardList} 
                href="/history" 
                color="white"
              />
              <DashboardCard 
                title="Payments" 
                desc="Manage your billing." 
                icon={HiOutlineCreditCard} 
                href="/payments" 
                color="white"
              />
              <DashboardCard 
                title="Profile" 
                desc="Update preferences." 
                icon={HiOutlineUser} 
                href="/profile" 
                color="white"
              />
            </div>
          </div>

          {/* Activity Table */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-1">
              <h2 className="text-lg font-bold text-white">Recent Activity</h2>
              <Link href="/history" className="text-neutral-500 text-xs hover:text-white transition-colors flex items-center gap-1">
                View all <HiOutlineChevronRight />
              </Link>
            </div>
            
            <div className="minimal-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-neutral-900 bg-neutral-900/30">
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Service</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider text-center">Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold text-neutral-500 uppercase tracking-wider text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900">
                    {[
                      { date: "May 04, 2024", service: "Pro Detail", status: "Completed", amount: "₹499" },
                      { date: "Apr 28, 2024", service: "Quick Wash", status: "Completed", amount: "₹199" },
                      { date: "Apr 15, 2024", service: "Chain Lubing", status: "Completed", amount: "₹99" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-neutral-900/30 transition-colors">
                        <td className="px-6 py-4 text-sm text-neutral-400">{row.date}</td>
                        <td className="px-6 py-4 text-sm font-medium text-white">{row.service}</td>
                        <td className="px-6 py-4 text-center">
                          <span className="px-2.5 py-1 rounded-md bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-wider border border-brand-green/20">
                            {row.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-3">
                            <span className="text-sm font-bold text-white">{row.amount}</span>
                            <button className="text-neutral-600 hover:text-white">
                              <HiOutlineDownload className="text-lg" />
                            </button>
                          </div>
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

export default DashboardPage;
