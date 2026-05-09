"use client";

import Sidebar from "@/components/Sidebar";
import { HiOutlineArrowLeft, HiOutlineCheckCircle, HiOutlinePhoto } from "react-icons/hi2";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const AddVehiclePage = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-2xl mx-auto p-6 md:p-10 flex flex-col gap-8">
          
          <header className="flex items-center gap-4">
            <Link href="/dashboard" className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-muted hover:text-primary transition-all shadow-sm">
              <HiOutlineArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-primary">Add New Vehicle</h1>
              <p className="text-muted text-sm">Register your bike for workplace servicing.</p>
            </div>
          </header>

          {!isSuccess ? (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="premium-card p-8 bg-white space-y-6 shadow-xl shadow-primary/5"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Brand</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Royal Enfield" 
                    className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Model</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. Himalayan 450" 
                    className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Registration Number</label>
                  <input 
                    required
                    type="text" 
                    placeholder="e.g. KA-01-HE-1234" 
                    className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Color</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Matte Black" 
                    className="w-full px-4 py-3 bg-surface-muted border border-border rounded-xl focus:outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Vehicle Photo (Optional)</label>
                <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-3 bg-surface-muted hover:bg-border transition-all cursor-pointer">
                  <HiOutlinePhoto className="text-4xl text-muted/80" />
                  <span className="text-xs font-bold text-muted/80">Upload vehicle photo for easier identification</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full btn-premium btn-premium-primary py-4 text-sm font-bold shadow-xl shadow-primary/20"
              >
                Register Vehicle
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="premium-card p-12 bg-white text-center space-y-6"
            >
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center text-white mx-auto shadow-xl shadow-success/20">
                <HiOutlineCheckCircle className="text-4xl" />
              </div>
              <h2 className="text-2xl font-bold text-primary">Vehicle Added Successfully!</h2>
              <p className="text-muted max-w-sm mx-auto leading-relaxed">Your Royal Enfield Himalayan has been registered. You can now schedule washes for this vehicle.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard" className="flex-1">
                  <button className="w-full btn-premium btn-premium-outline py-4">Go to Dashboard</button>
                </Link>
                <Link href="/booking" className="flex-1">
                  <button className="w-full btn-premium btn-premium-secondary py-4">Schedule a Wash</button>
                </Link>
              </div>
            </motion.div>
          )}

          <div className="p-6 bg-surface-muted/50 rounded-2xl border border-border">
            <h4 className="text-[10px] font-black text-muted/80 uppercase tracking-widest mb-2">Why register?</h4>
            <ul className="space-y-2">
              <li className="text-xs text-muted flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Faster booking for future sessions
              </li>
              <li className="text-xs text-muted flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Specific care instructions per vehicle
              </li>
              <li className="text-xs text-muted flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Digital service history for your machine
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AddVehiclePage;
