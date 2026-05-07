"use client";

import Link from "next/link";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhone, HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[540px] z-10"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center shadow-lg shadow-brand-green/20 group-hover:scale-110 transition-transform">
              <span className="text-black font-black text-2xl">B</span>
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white">
              BikeWash<span className="text-brand-green">Pro</span>
            </span>
          </Link>
          <h1 className="text-4xl font-black text-white mb-3 tracking-tighter">Create Account</h1>
          <p className="text-gray-400 font-medium text-base">Join the premium riding community today.</p>
        </div>

        <div className="bg-[#080808] border border-white/5 rounded-[40px] p-8 md:p-10 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                <div className="relative group">
                  <HiOutlineUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-brand-green transition-colors" />
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-brand-green/50 transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                <div className="relative group">
                  <HiOutlineMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-brand-green transition-colors" />
                  <input 
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-brand-green/50 transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Phone Number</label>
              <div className="relative group">
                <HiOutlinePhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-brand-green transition-colors" />
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210"
                  className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-brand-green/50 transition-all font-medium"
                />
                <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all">
                  Verify
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Password</label>
                <div className="relative group">
                  <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-brand-green transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-brand-green/50 transition-all font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">Confirm Password</label>
                <div className="relative group">
                  <HiOutlineLockClosed className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl group-focus-within:text-brand-green transition-colors" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full bg-black border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white focus:outline-none focus:border-brand-green/50 transition-all font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/dashboard" className="block">
                <button 
                  type="button"
                  className="w-full bg-brand-green text-black font-black py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-green-400 transition-all shadow-lg shadow-brand-green/20 uppercase tracking-widest text-sm"
                >
                  Create My Account
                  <HiOutlineArrowRight className="text-xl" />
                </button>
              </Link>
            </div>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-500 font-medium">
              Already have an account?{" "}
              <Link href="/login" className="text-brand-green font-black hover:underline uppercase tracking-widest text-xs ml-1">Log In Instead</Link>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            Elite Standards • Exceptional Care
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default RegisterPage;
