"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import BookingStepper from "@/components/BookingStepper";
import { 
  HiOutlineCalendarDays, 
  HiOutlineClock, 
  HiOutlineCheckCircle, 
  HiOutlineInformationCircle,
  HiOutlineChevronRight,
  HiOutlineChevronLeft,
  HiOutlineMapPin,
  HiOutlineTruck
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    vehicle: "",
    date: "2024-05-10",
    slot: "",
    tower: "",
    basement: "",
    slotNumber: ""
  });

  const steps = [
    { id: 1, label: "Vehicle" },
    { id: 2, label: "Time Slot" },
    { id: 3, label: "Parking" },
    { id: 4, label: "Confirm" }
  ];

  const vehicles = [
    { id: "v1", brand: "Royal Enfield", model: "Himalayan", reg: "KA-01-HE-1234", color: "Pine Green" },
    { id: "v2", brand: "KTM", model: "Duke 390", reg: "KA-03-MK-5678", color: "Orange" }
  ];

  const slots = [
    { id: "s1", time: "07:00 AM – 09:00 AM", label: "Early Bird" },
    { id: "s2", time: "09:00 AM – 11:00 AM", label: "Morning Slot" },
    { id: "s3", time: "11:00 AM – 06:00 PM", label: "Office Hours Slot", popular: true }
  ];

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 style={{ paddingTop: "16px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
              <HiOutlineTruck style={{ color: "var(--accent)", flexShrink: 0 }} />
              Select Your Vehicle
            </h3>
            <div className="grid gap-4">
              {vehicles.map(v => (
                <button
                  key={v.id}
                  onClick={() => setBookingData({ ...bookingData, vehicle: v.reg })}
                  className={`premium-card p-6 flex items-center justify-between transition-all ${
                    bookingData.vehicle === v.reg ? "border-accent bg-accent/5 ring-1 ring-accent/20" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-muted rounded-xl flex items-center justify-center text-primary font-bold">
                      {v.brand[0]}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-primary">{v.brand} {v.model}</div>
                      <div className="text-xs text-muted font-medium uppercase tracking-wider">{v.reg} • {v.color}</div>
                    </div>
                  </div>
                  {bookingData.vehicle === v.reg && <HiOutlineCheckCircle className="text-2xl text-accent" />}
                </button>
              ))}
              <Link href="/add-vehicle" className="p-4 border-2 border-dashed border-border rounded-2xl flex items-center justify-center gap-2 text-muted/80 hover:text-primary hover:border-primary/20 transition-all">
                <HiOutlinePlusCircle className="text-xl" />
                <span className="text-sm font-bold">Add New Vehicle</span>
              </Link>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 style={{ paddingTop: "16px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
              <HiOutlineClock style={{ color: "var(--accent)", flexShrink: 0 }} />
              Choose Time Slot
            </h3>
            <div className="grid gap-4">
              {slots.map(s => (
                <button
                  key={s.id}
                  onClick={() => setBookingData({ ...bookingData, slot: s.time })}
                  className={`premium-card p-6 flex items-center justify-between transition-all ${
                    bookingData.slot === s.time ? "border-accent bg-accent/5 ring-1 ring-accent/20" : "bg-white"
                  }`}
                >
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-bold text-primary">{s.time}</div>
                      {s.popular && <span className="px-2 py-0.5 bg-accent text-white text-[8px] font-black uppercase rounded">Recommended</span>}
                    </div>
                    <div className="text-xs text-muted font-medium uppercase tracking-wider">{s.label}</div>
                  </div>
                  {bookingData.slot === s.time && <HiOutlineCheckCircle className="text-2xl text-accent" />}
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
            <h3 style={{ paddingTop: "16px", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
              <HiOutlineMapPin style={{ color: "var(--accent)", flexShrink: 0 }} />
              Parking Details
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-muted/80 uppercase tracking-widest" style={{ marginBottom: "16px", display: "block", paddingTop: "8px" }}>Building / Tower</label>
                <input 
                  type="text" 
                  placeholder="e.g. Tower A" 
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent transition-all font-bold text-sm"
                  value={bookingData.tower}
                  onChange={e => setBookingData({...bookingData, tower: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Parking Floor</label>
                <input 
                  type="text" 
                  placeholder="e.g. B2" 
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent transition-all font-bold text-sm"
                  value={bookingData.basement}
                  onChange={e => setBookingData({...bookingData, basement: e.target.value})}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Parking Slot Number</label>
                <input 
                  type="text" 
                  placeholder="e.g. #142" 
                  className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:outline-none focus:border-accent transition-all font-bold text-sm"
                  value={bookingData.slotNumber}
                  onChange={e => setBookingData({...bookingData, slotNumber: e.target.value})}
                />
              </div>
            </div>
            <div className="p-4 bg-surface-muted rounded-xl border border-border flex gap-3">
              <HiOutlineInformationCircle className="text-xl text-muted/80 shrink-0 mt-0.5" />
              <p className="text-xs text-muted leading-relaxed font-medium">
                Accurate parking details help our workers find your vehicle faster. You can also upload a photo of your parked bike on the next screen.
              </p>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
            <h3 className="text-xl font-bold text-primary">Review & Confirm</h3>
            <div className="premium-card bg-surface-muted p-6 space-y-6">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs font-bold text-muted/80 uppercase">Vehicle</span>
                <span className="text-sm font-bold text-primary">{bookingData.vehicle}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs font-bold text-muted/80 uppercase">Time Slot</span>
                <span className="text-sm font-bold text-primary">{bookingData.slot}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-xs font-bold text-muted/80 uppercase">Location</span>
                <span className="text-sm font-bold text-primary">{bookingData.tower}, {bookingData.basement}, {bookingData.slotNumber}</span>
              </div>
              <div className="flex justify-between items-center py-2 pt-4">
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Subscription Credit</span>
                <span className="text-lg font-black text-accent">1 Credit</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-success/10 rounded-2xl border border-success/20">
              <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center text-white">
                <HiOutlineCheckCircle className="text-2xl" />
              </div>
              <div>
                <div className="text-sm font-bold text-success">You&apos;re all set!</div>
                <div className="text-[10px] text-success font-bold uppercase tracking-widest opacity-80">Premium membership benefit applied</div>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  const isStepValid = () => {
    if (step === 1) return !!bookingData.vehicle;
    if (step === 2) return !!bookingData.slot;
    if (step === 3) return !!bookingData.tower && !!bookingData.basement && !!bookingData.slotNumber;
    return true;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen relative flex flex-col pt-20 lg:pt-0">
        <div className="max-w-4xl mx-auto p-6 md:p-10 w-full flex-1 flex flex-col">
          
          <header style={{ marginBottom: "32px", paddingBottom: "16px" }}>
            <h1 style={{ textAlign: "left", fontSize: "32px" }}>Schedule a Wash</h1>
            <p className="text-muted text-sm" style={{ marginTop: "8px" }}>Follow the steps below to book your workplace vehicle care.</p>
          </header>

          <BookingStepper steps={steps} currentStep={step} />

          <div className="flex-1 mt-8">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
          </div>

          <div className="mt-12 pt-8 border-t border-border flex justify-between items-center">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                step === 1 ? "opacity-0 pointer-events-none" : "text-muted/80 hover:text-primary hover:bg-surface-muted"
              }`}
            >
              <HiOutlineChevronLeft className="text-xl" />
              Back
            </button>
            
            {step < 4 ? (
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`btn-premium btn-premium-primary px-10 py-4 shadow-xl shadow-primary/20 ${
                  !isStepValid() ? "opacity-50 grayscale cursor-not-allowed" : ""
                }`}
              >
                Continue
                <HiOutlineChevronRight className="text-xl" />
              </button>
            ) : (
              <Link href="/tracking" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto btn-premium btn-premium-secondary px-12 py-4 shadow-xl shadow-secondary/30">
                  Confirm Booking
                  <HiOutlineCheckCircle className="text-xl" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingPage;

const HiOutlinePlusCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
