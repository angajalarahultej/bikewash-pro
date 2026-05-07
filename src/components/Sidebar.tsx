"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  HiMenuAlt2,
  HiX,
  HiChevronDown,
  HiOutlineHome, 
  HiOutlineCalendar, 
  HiOutlineClipboardList, 
  HiOutlineCreditCard, 
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineViewGridAdd
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ isAdmin = false }) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = isAdmin ? [
    { name: "Overview", icon: HiOutlineHome, href: "/admin" },
    { name: "Manage Slots", icon: HiOutlineCalendar, href: "/admin/slots" },
    { name: "All Bookings", icon: HiOutlineClipboardList, href: "/admin/bookings" },
    { name: "Revenue", icon: HiOutlineCreditCard, href: "/admin/revenue" },
  ] : [
    { name: "Dashboard", icon: HiOutlineHome, href: "/dashboard" },
    { name: "Book a Wash", icon: HiOutlineViewGridAdd, href: "/booking" },
    { name: "Wash History", icon: HiOutlineClipboardList, href: "/history" },
    { name: "Payments", icon: HiOutlineCreditCard, href: "/payments" },
    { name: "Profile", icon: HiOutlineUser, href: "/profile" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#050505] border-r border-neutral-900 py-8 px-4">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-10 px-2 group">
        <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center group-hover:scale-105 transition-transform">
          <span className="text-black font-bold text-lg">B</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-white font-serif">
          BikeWash<span className="text-brand-green">Pro</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group text-sm ${
                isActive 
                  ? "text-white bg-neutral-900" 
                  : "text-neutral-500 hover:text-white hover:bg-neutral-900/50"
              }`}
            >
              <item.icon className={`text-xl ${isActive ? "text-brand-green" : "text-neutral-500 group-hover:text-neutral-300"}`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Info & Sign Out */}
      <div className="mt-auto pt-6 border-t border-neutral-900 space-y-4">
        <div className="px-2 flex items-center justify-between group cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center text-neutral-400 font-bold text-xs">
              NK
            </div>
            <div className="overflow-hidden">
              <div className="text-white font-medium text-xs truncate">Naveen Kumar</div>
              <div className="text-neutral-600 text-[10px] uppercase tracking-wider">Pro Member</div>
            </div>
          </div>
          <HiChevronDown className="text-neutral-600 group-hover:text-white transition-colors" />
        </div>

        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-500 hover:text-red-500 hover:bg-red-500/5 transition-all duration-200 group text-sm"
        >
          <HiOutlineLogout className="text-xl" />
          <span className="font-medium">Sign Out</span>
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-neutral-900 z-50 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-green rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">B</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-serif">BikeWashPro</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-10 h-10 flex items-center justify-center text-white text-2xl"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt2 />}
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[240px] h-screen sticky top-0 z-40 overflow-y-auto">
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
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
