"use client";

import Link from "next/link";
import { HiOutlineMail, HiOutlineLockClosed, HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-[400px]">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-black font-bold text-xl">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-serif">
              BikeWash<span className="text-brand-green">Pro</span>
            </span>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-3">Welcome back</h1>
          <p className="text-neutral-500 text-sm">Enter your credentials to access your account.</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full minimal-input"
              />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-neutral-400 ml-1">Password</label>
                <Link href="#" className="text-[11px] text-neutral-500 hover:text-brand-green transition-colors">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full minimal-input"
              />
            </div>
          </div>

          <Link href="/dashboard" className="block">
            <button 
              type="button"
              className="w-full minimal-btn-primary"
            >
              Sign In
              <HiArrowRight className="text-lg" />
            </button>
          </Link>

          <div className="pt-6 text-center">
            <p className="text-neutral-500 text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-brand-green font-medium hover:underline">Create one</Link>
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-neutral-700 text-[10px] uppercase tracking-[0.2em] font-medium">
            Premium Care for Your Ride
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
