"use client";

import Link from "next/link";
import { HiOutlineEnvelope, HiOutlineLockClosed, HiOutlineArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-background flex overflow-hidden">
      {/* Left Side: Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 relative z-10 bg-white">
        <div style={{ width: "100%", maxWidth: "520px", padding: "40px", margin: "0 auto" }}>
          <Link href="/" className="inline-flex items-center gap-2.5 mb-12 group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-xl shadow-primary/20 group-hover:scale-105 transition-all">
              <span className="text-white font-black text-xl leading-none">B</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">
              BikeWash<span className="text-accent">Pro</span>
            </span>
          </Link>

          <div className="mb-8">
            <h1 style={{ textAlign: "left", fontSize: "32px", marginBottom: "8px" }}>Welcome back</h1>
            <p className="text-muted text-sm">Enter your workplace credentials to manage your vehicle care.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-muted/80 uppercase tracking-widest ml-1">Work Email</label>
                <div className="global-input-wrapper">
                  <HiOutlineEnvelope className="input-icon" />
                  <input 
                    type="email" 
                    placeholder="name@company.com"
                    className="shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-black text-muted/80 uppercase tracking-widest ml-1">Password</label>
                  <Link href="#" className="text-xs font-bold text-muted/80 hover:text-primary transition-colors uppercase tracking-widest">Forgot?</Link>
                </div>
                <div className="global-input-wrapper">
                  <HiOutlineLockClosed className="input-icon" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="shadow-sm"
                  />
                </div>
              </div>
            </div>

            <Link href="/dashboard" className="block pt-2">
              <button 
                type="button"
                className="w-full btn-premium btn-premium-primary py-4 text-sm font-bold shadow-xl shadow-primary/20"
              >
                Sign In to Portal
                <HiOutlineArrowRight className="text-lg" />
              </button>
            </Link>

            <div className="pt-6 text-center border-t border-border">
              <p className="text-muted text-xs font-medium">
                New to BikeWash Pro?{" "}
                <Link href="/register" className="text-accent font-bold hover:underline">Create an account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side: Visual */}
      <div className="hidden lg:block lg:flex-1 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 mix-blend-multiply z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1200&h=1600&fit=crop" 
          alt="Premium Motorcycle" 
          className="absolute inset-0 w-full h-full grayscale opacity-40"
          style={{ objectFit: "contain", backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
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
              The Gold Standard <br />
              <span className="text-accent">of Workplace</span> <br />
              Vehicle Care.
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed">
              Join 5000+ corporate employees who trust us with their machines every day.
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full z-20"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 border border-white/5 rounded-full z-20"></div>
      </div>
    </main>
  );
};

export default LoginPage;
