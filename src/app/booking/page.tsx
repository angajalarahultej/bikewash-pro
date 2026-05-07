"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineCalendar, 
  HiOutlineClock, 
  HiOutlineCheckCircle, 
  HiOutlineInformationCircle,
  HiOutlineChevronRight,
  HiOutlineChevronLeft
} from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState("2024-05-10");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const slots = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "12:00 PM", available: true },
    { time: "01:00 PM", available: true },
    { time: "02:00 PM", available: false },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:00 PM", available: true },
    { time: "06:00 PM", available: true },
  ];

  const dates = [
    { label: "Fri", day: "10", date: "2024-05-10" },
    { label: "Sat", day: "11", date: "2024-05-11" },
    { label: "Sun", day: "12", date: "2024-05-12" },
    { label: "Mon", day: "13", date: "2024-05-13" },
    { label: "Tue", day: "14", date: "2024-05-14" },
    { label: "Wed", day: "15", date: "2024-05-15" },
    { label: "Thu", day: "16", date: "2024-05-16" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-x-hidden font-serif">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen relative flex flex-col bg-[#000000]">
        <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 w-full relative z-10 flex-1 flex flex-col">
          
          <header className="mb-12 mt-20 lg:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight uppercase">
              Book a <span className="text-brand-green">Wash</span>
            </h1>
            <p className="text-gray-400 text-base">Select your preferred date and time slot for the service.</p>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 flex-1">
            
            {/* Booking Form Area */}
            <div className="xl:col-span-2 space-y-10">
              
              {/* Date Selection */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
                    <HiOutlineCalendar className="text-brand-green text-2xl" />
                    Select Date
                  </h3>
                  <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">May 2024</div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {dates.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(d.date)}
                      className={`flex flex-col items-center justify-center min-w-[80px] h-24 rounded-2xl border transition-all duration-300 ${
                        selectedDate === d.date 
                          ? "bg-brand-green border-brand-green text-black shadow-xl shadow-brand-green/20 scale-105" 
                          : "bg-[#0f1115] border-white/5 text-gray-500 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-widest mb-1">{d.label}</span>
                      <span className="text-2xl font-bold">{d.day}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Slot Selection */}
              <div>
                <h3 className="text-xl font-bold text-white mb-8 tracking-tight flex items-center gap-3">
                  <HiOutlineClock className="text-brand-green text-2xl" />
                  Available Slots
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {slots.map((slot, i) => (
                    <button
                      key={i}
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`py-5 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center gap-2 ${
                        !slot.available 
                          ? "bg-white/[0.02] border-white/5 text-gray-700 cursor-not-allowed" 
                          : selectedSlot === slot.time
                            ? "bg-[#162a1e] border-brand-green text-brand-green shadow-xl"
                            : "bg-[#0f1115] border-white/5 text-gray-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <span className="text-base font-bold">{slot.time}</span>
                      <span className={`text-[9px] font-bold uppercase tracking-widest ${slot.available ? "text-brand-green/60" : "text-gray-700"}`}>
                        {slot.available ? "Available" : "Booked"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Service Info Note */}
              <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex gap-4">
                <HiOutlineInformationCircle className="text-2xl text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-1">Service Note</h4>
                  <p className="text-gray-500 text-sm italic leading-relaxed">
                    Standard washes take approximately 25-40 minutes. Please arrive at least 10 minutes before your scheduled slot.
                  </p>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="xl:col-span-1">
              <div className="sticky top-12 bg-[#0f1115] border border-white/5 rounded-[32px] p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-tight">Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between items-start">
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Service Type</div>
                    <div className="text-right">
                      <div className="text-white font-bold">Pro Detail</div>
                      <div className="text-brand-green text-[10px] font-bold uppercase tracking-widest mt-1">₹499</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Date</div>
                    <div className="text-white font-bold">May 10, 2024</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 text-xs uppercase tracking-widest font-bold">Time Slot</div>
                    <div className="text-white font-bold">{selectedSlot || "Not Selected"}</div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-sm font-bold">Subtotal</div>
                    <div className="text-white font-bold">₹499</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-sm font-bold">Taxes (GST)</div>
                    <div className="text-white font-bold">₹0</div>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="text-white font-bold text-lg uppercase tracking-tight">Total</div>
                    <div className="text-brand-green font-bold text-2xl tracking-tighter">₹499</div>
                  </div>
                </div>

                <button 
                  disabled={!selectedSlot}
                  className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 ${
                    selectedSlot 
                      ? "bg-brand-green text-black shadow-xl shadow-brand-green/20 hover:scale-[1.02]" 
                      : "bg-white/5 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  Confirm & Pay
                  <HiOutlineChevronRight className="text-xl" />
                </button>
                
                <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest mt-6">
                  Secure Payment • SSL Encrypted
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;
