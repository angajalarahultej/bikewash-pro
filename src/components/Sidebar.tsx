"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  HiBars2,
  HiXMark,
  HiChevronDown,
  HiOutlineHome, 
  HiOutlineCalendarDays, 
  HiOutlineClipboardDocumentList, 
  HiOutlineCreditCard, 
  HiOutlineUser,
  HiOutlineArrowLeftOnRectangle,
  HiOutlinePlusCircle,
  HiOutlineGift,
  HiOutlineBuildingOffice2,
  HiOutlineChartBar
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ isAdmin = false, isCorporate = false }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getMenuItems = () => {
    if (isAdmin) {
      return [
        { name: "Admin Home", icon: HiOutlineHome, href: "/admin" },
        { name: "Live Bookings", icon: HiOutlineCalendarDays, href: "/admin/bookings" },
        { name: "Worker Performance", icon: HiOutlineChartBar, href: "/admin/workers" },
        { name: "Revenue Reports", icon: HiOutlineCreditCard, href: "/admin/revenue" },
      ];
    }
    if (isCorporate) {
      return [
        { name: "Corp Overview", icon: HiOutlineHome, href: "/corporate" },
        { name: "Employees", icon: HiOutlineUser, href: "/corporate/employees" },
        { name: "Usage Reports", icon: HiOutlineChartBar, href: "/corporate/reports" },
        { name: "Billing", icon: HiOutlineCreditCard, href: "/corporate/billing" },
      ];
    }
    return [
      { name: "Dashboard", icon: HiOutlineHome, href: "/dashboard" },
      { name: "Schedule Wash", icon: HiOutlinePlusCircle, href: "/booking" },
      { name: "My Vehicles", icon: HiOutlinePlusCircle, href: "/add-vehicle" },
      { name: "Wash History", icon: HiOutlineClipboardDocumentList, href: "/history" },
      { name: "Refer & Earn", icon: HiOutlineGift, href: "/referrals" },
      { name: "Subscription", icon: HiOutlineCreditCard, href: "/plans" },
      { name: "Profile", icon: HiOutlineUser, href: "/profile" },
    ];
  };

  const menuItems = getMenuItems();

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#DCEEFF] border-r border-border py-8 px-4 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 mb-10 px-2 group">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
          <span className="text-white font-bold text-xl">B</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold tracking-tight text-primary leading-none">
            BikeWash<span className="text-accent">Pro</span>
          </span>
          <span className="text-[9px] font-bold text-muted uppercase tracking-widest mt-1">Workplace Care</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1.5">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-bold ${
                isActive 
                  ? "text-primary bg-white shadow-sm border border-border" 
                  : "text-primary/80 hover:text-primary hover:bg-white/50"
              }`}
            >
              <item.icon className={`text-xl ${isActive ? "text-accent" : "text-primary/60 group-hover:text-primary"}`} />
              <span>{item.name}</span>
              {isActive && (
                <motion.div 
                  layoutId="sidebar-active"
                  className="ml-auto w-1.5 h-1.5 bg-accent rounded-full"
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User Info & Sign Out */}
      <div className="mt-auto pt-6 border-t border-primary/10 space-y-4">
        <div className="px-2 flex items-center justify-between group cursor-pointer bg-white p-3 rounded-2xl border border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary font-bold text-sm">
              RV
            </div>
            <div className="overflow-hidden">
              <div className="text-primary font-bold text-xs truncate">Rahul Vijay</div>
              <div className="text-muted text-[10px] uppercase font-bold tracking-wider">Gold Subscriber</div>
            </div>
          </div>
          <HiChevronDown className="text-muted group-hover:text-primary transition-colors" />
        </div>

        <Link
          href="/login"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-primary/80 hover:text-error hover:bg-error/10 transition-all duration-200 group text-sm font-bold"
        >
          <HiOutlineArrowLeftOnRectangle className="text-xl" />
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-border z-50 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-primary">BikeWash<span className="text-secondary">Pro</span></span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center text-primary text-2xl"
        >
          {isMobileMenuOpen ? <HiXMark /> : <HiBars2 />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[260px] h-screen sticky top-0 z-40 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[280px] z-[70] lg:hidden"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
