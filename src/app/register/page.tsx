"use client";

import Link from "next/link";
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone, HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-background flex overflow-hidden">
      {/* Left Side: Visual */}
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=1200&h=1600&fit=crop" 
          alt="Premium Detailing" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 scale-110"
        />
        
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-md"
          >
            <div className="w-12 h-1 bg-accent mb-8 rounded-full"></div>
            <h2 className="text-5xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              The Future of <br />
              <span className="text-accent">Vehicle Care</span> <br />
              At Work.
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed">
              Experience the ease of having your ride detailed while you build the future.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 left-10 w-48 h-48 border border-white/5 rounded-full z-20"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 xl:px-32 relative z-10 bg-white overflow-y-auto py-20">
        <div className="w-full max-w-md mx-auto">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-16 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-105 transition-all">
              <span className="text-white font-black text-xl leading-none">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              BikeWash<span className="text-accent">Pro</span>
            </span>
          </Link>

          <div className="mb-10">
            <h1 className="text-3xl font-bold text-primary mb-3">Create your account</h1>
            <p className="text-muted text-sm">Join your colleagues and start your premium subscription today.</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Full Name</label>
                <div className="relative group">
                  <HiOutlineUser className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 group-focus-within:text-primary transition-colors text-xl" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-surface-muted border border-border rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-primary focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Work Email</label>
                <div className="relative group">
                  <HiOutlineEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 group-focus-within:text-primary transition-colors text-xl" />
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="w-full bg-surface-muted border border-border rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-primary focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Mobile Number</label>
              <div className="relative group">
                <HiOutlinePhone className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 group-focus-within:text-primary transition-colors text-xl" />
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full bg-surface-muted border border-border rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-primary focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Password</label>
                <div className="relative group">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 group-focus-within:text-primary transition-colors text-xl" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-surface-muted border border-border rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-primary focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-muted/80 uppercase tracking-widest ml-1">Confirm</label>
                <div className="relative group">
                  <HiOutlineLockClosed className="absolute left-4 top-1/2 -translate-y-1/2 text-muted/80 group-focus-within:text-primary transition-colors text-xl" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-surface-muted border border-border rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-primary focus:outline-none focus:border-primary/20 focus:bg-white transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            <Link href="/dashboard" className="block pt-2">
              <button 
                type="button"
                className="w-full btn-premium btn-premium-primary py-4 text-sm font-bold shadow-xl shadow-primary/20"
              >
                Create Account
                <HiOutlineArrowRight className="text-lg" />
              </button>
            </Link>

            <div className="pt-8 text-center border-t border-border">
              <p className="text-muted text-xs font-medium">
                Already have an account?{" "}
                <Link href="/login" className="text-accent font-bold hover:underline">Sign in instead</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
