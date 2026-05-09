"use client";

import Sidebar from "@/components/Sidebar";
import MetricCard from "@/components/MetricCard";
import StatusBadge from "@/components/StatusBadge";
import { 
  HiOutlineUsers, 
  HiOutlineCurrencyRupee, 
  HiOutlineShoppingBag,
  HiOutlineChevronDown,
  HiOutlineCalendarDays,
  HiOutlineBell,
  HiOutlineMagnifyingGlass,
  HiOutlineArrowTrendingUp,
  HiOutlineUserGroup,
  HiOutlineMapPin,
  HiOutlineBriefcase
} from "react-icons/hi2";
import { motion } from "framer-motion";
import Link from "next/link";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar isAdmin={true} />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-7xl mx-auto p-6 md:p-10 flex flex-col gap-10">
          
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">Admin Command Center</h1>
              <p className="text-muted text-sm">Managing <span className="font-bold text-primary">12 active corporate locations</span> today.</p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-border shadow-sm cursor-pointer hover:border-primary/20 transition-all">
                <HiOutlineCalendarDays className="text-lg text-accent" />
                <span className="text-xs font-bold text-muted">Today, May 10</span>
                <HiOutlineChevronDown className="text-muted/80" />
              </div>
              <button className="relative w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary transition-all shadow-sm">
                <HiOutlineBell className="text-xl" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
              </button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <MetricCard 
              label="Live Bookings" 
              value="142" 
              icon={HiOutlineShoppingBag} 
              trend={{ value: "18%", isUp: true }}
              description="Active for today"
            />
            <MetricCard 
              label="Daily Revenue" 
              value="₹24,500" 
              icon={HiOutlineCurrencyRupee} 
              color="secondary"
              trend={{ value: "5%", isUp: true }}
              description="Subscription + One-time"
            />
            <MetricCard 
              label="Active Workers" 
              value="38 / 45" 
              icon={HiOutlineUserGroup} 
              color="accent"
              description="Currently on-field"
            />
            <MetricCard 
              label="Avg. Rating" 
              value="4.85" 
              icon={HiOutlineArrowTrendingUp} 
              description="Platform wide avg."
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* Live Bookings Table */}
            <div className="xl:col-span-2 space-y-4">
              <div className="flex justify-between items-center px-1">
                <h2 className="text-lg font-bold text-primary">Live Booking Feed</h2>
                <div className="relative">
                  <HiOutlineMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted/80" />
                  <input 
                    type="text" 
                    placeholder="Search by ID or Location..." 
                    className="bg-white border border-border rounded-xl py-2 pl-10 pr-4 text-xs font-medium focus:outline-none focus:border-primary/20 w-64 shadow-sm"
                  />
                </div>
              </div>
              
              <div className="premium-card overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border bg-surface-muted/50">
                        <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Booking ID</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Location</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Vehicle</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-4 text-[10px] font-bold text-muted/80 uppercase tracking-wider text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-muted">
                      {[
                        { id: "BW-9021", loc: "Tech Park, B2", bike: "KA-01-HE-1234", status: "pending", time: "09:30 AM" },
                        { id: "BW-9022", loc: "Global Hub, B1", bike: "KA-03-MK-5678", status: "assigned", time: "10:00 AM" },
                        { id: "BW-9023", loc: "Embassy Golf", bike: "KA-05-JL-9900", status: "in-progress", time: "10:15 AM" },
                        { id: "BW-9024", loc: "Tech Park, B2", bike: "KA-01-PX-1122", status: "pending", time: "11:00 AM" },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-surface-muted/50 transition-all">
                          <td className="px-6 py-5">
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-primary">{row.id}</span>
                              <span className="text-[10px] text-muted/80 font-bold uppercase">{row.time}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                              <HiOutlineMapPin className="text-muted/80" />
                              <span className="text-sm font-medium text-muted">{row.loc}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-sm font-bold text-muted">{row.bike}</td>
                          <td className="px-6 py-5">
                            <StatusBadge status={row.status as any} />
                          </td>
                          <td className="px-6 py-5 text-right">
                            {row.status === "pending" ? (
                              <button className="px-4 py-2 bg-primary text-white rounded-lg text-[10px] font-bold uppercase tracking-widest hover:bg-[#333] transition-all shadow-md shadow-primary/10">
                                Assign
                              </button>
                            ) : (
                              <button className="text-muted/80 hover:text-primary transition-colors">
                                <HiOutlineBriefcase className="text-xl mx-auto" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Worker Status Column */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-primary px-1">Worker Status</h2>
              <div className="premium-card p-6 bg-white space-y-6">
                {[
                  { name: "Suresh Kumar", status: "active", jobs: 12, rating: 4.9 },
                  { name: "Amit Singh", status: "active", jobs: 8, rating: 4.7 },
                  { name: "Rajesh M.", status: "inactive", jobs: 0, rating: 4.8 },
                  { name: "Vikram R.", status: "active", jobs: 10, rating: 4.9 },
                ].map((worker, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-muted rounded-xl flex items-center justify-center font-bold text-muted/80 text-xs uppercase">
                        {worker.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary">{worker.name}</div>
                        <div className="flex items-center gap-2">
                          <StatusBadge status={worker.status as any} />
                          <span className="text-[10px] font-bold text-muted/80 uppercase">{worker.jobs} Jobs</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-primary">{worker.rating}★</div>
                    </div>
                  </div>
                ))}
                <button className="w-full py-3 bg-surface-muted border border-border rounded-xl text-xs font-bold text-muted hover:text-primary hover:bg-border transition-all uppercase tracking-widest">
                  View All Workers
                </button>
              </div>

              {/* Revenue Snapshot */}
              <div className="premium-card p-6 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-muted/80 mb-6">Revenue Growth</h4>
                <div className="flex items-end gap-2 mb-6">
                  <div className="text-3xl font-bold">₹1.2M</div>
                  <div className="text-accent text-xs font-bold mb-1">↑ 24% this month</div>
                </div>
                <div className="h-20 flex items-end gap-1">
                   {[40, 60, 45, 70, 55, 80, 95].map((h, i) => (
                     <div key={i} className="flex-1 bg-white/10 rounded-t-md relative group">
                        <motion.div 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          className="absolute bottom-0 left-0 right-0 bg-accent rounded-t-md"
                        ></motion.div>
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

export default AdminDashboard;
