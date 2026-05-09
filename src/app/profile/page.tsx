"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineUser, 
  HiOutlineEnvelope, 
  HiOutlinePhone, 
  HiOutlineMapPin, 
  HiOutlineSparkles,
  HiOutlineGift,
  HiOutlinePencilSquare,
  HiOutlineCreditCard,
  HiOutlineQuestionMarkCircle,
  HiOutlineShieldCheck,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const userData = {
    name: "Rahul Vijay",
    email: "rahul.v@corporatepark.com",
    phone: "+91 98765 43210",
    bike: "Royal Enfield Himalayan 450",
    membership: "Premium Elite",
    credits: "4",
    rewardPoints: "1,250"
  };

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-6xl mx-auto p-6 md:p-10 flex flex-col gap-10">
          
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">My Account</h1>
              <p className="text-muted text-sm">Manage your personal settings and subscription.</p>
            </div>
            <button className="px-6 py-3 bg-white border border-border rounded-xl text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-surface-muted transition-all shadow-sm">
              <HiOutlinePencilSquare className="text-lg" />
              Edit Profile
            </button>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Main Info Column */}
            <div className="xl:col-span-2 space-y-8">
              {/* Profile Card */}
              <div className="premium-card bg-white overflow-hidden shadow-xl shadow-primary/5">
                <div className="h-32 bg-primary relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20"></div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
                <div className="px-8 pb-8 -mt-12 relative z-10">
                  <div className="flex items-end gap-6 mb-10">
                    <div className="w-24 h-24 rounded-[2rem] bg-white border-4 border-white flex items-center justify-center text-3xl font-black text-primary shadow-xl overflow-hidden">
                       <img 
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-primary">{userData.name}</h2>
                        <HiOutlineShieldCheck className="text-accent text-xl" />
                      </div>
                      <div className="flex items-center gap-1.5 text-accent font-black text-[10px] uppercase tracking-[0.2em] bg-accent/10 px-2 py-0.5 rounded">
                        {userData.membership} Member
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {[
                      { icon: HiOutlineEnvelope, label: "Email Address", value: userData.email },
                      { icon: HiOutlinePhone, label: "Mobile Number", value: userData.phone },
                      { icon: HiOutlineSparkles, label: "Primary Machine", value: userData.bike },
                      { icon: HiOutlineMapPin, label: "Default Workplace", value: "Tech Park Tower A, B2" },
                    ].map((info, i) => (
                      <div key={i} className="space-y-1 group cursor-default">
                        <div className="text-[10px] font-bold text-muted/80 uppercase tracking-widest flex items-center gap-2">
                          <info.icon className="text-muted/80" />
                          {info.label}
                        </div>
                        <div className="text-sm font-bold text-primary truncate">
                          {info.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="premium-card p-6 bg-white flex flex-col gap-4 group cursor-pointer hover:border-accent/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-2xl text-accent group-hover:scale-110 transition-transform">
                    <HiOutlineSparkles />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary mb-1">Membership Perks</h3>
                    <p className="text-muted text-xs leading-relaxed">View your exclusive elite benefits and rewards.</p>
                  </div>
                  <HiOutlineArrowRight className="text-muted/80 ml-auto group-hover:text-accent transition-colors" />
                </div>
                <div className="premium-card p-6 bg-white flex flex-col gap-4 group cursor-pointer hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl text-primary group-hover:scale-110 transition-transform">
                    <HiOutlineMapPin />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary mb-1">Saved Locations</h3>
                    <p className="text-muted text-xs leading-relaxed">Manage your office and basement parking spots.</p>
                  </div>
                  <HiOutlineArrowRight className="text-muted/80 ml-auto group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Wallet Card */}
              <div className="premium-card p-8 bg-primary text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-accent border border-white/10">
                      <HiOutlineCreditCard className="text-2xl" />
                    </div>
                    <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Active Credits</span>
                  </div>
                  <div className="mb-10">
                    <div className="text-5xl font-black text-white tracking-tighter flex items-end gap-2">
                      {userData.credits}
                      <span className="text-xs text-white/50 font-bold uppercase tracking-widest mb-2">Available</span>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-accent text-white font-bold text-xs uppercase tracking-[0.2em] rounded-xl shadow-xl shadow-accent/20 hover:scale-[1.02] transition-all">
                    Top Up Credits
                  </button>
                </div>
              </div>

              {/* Rewards Card */}
              <div className="premium-card p-6 bg-white border-2 border-amber-100 shadow-xl shadow-amber-500/5">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                    <HiOutlineGift className="text-2xl" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-muted/80 uppercase tracking-widest">Points</div>
                    <div className="text-xl font-black text-primary">{userData.rewardPoints}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] text-muted font-bold uppercase tracking-wider">Progress to next free wash</p>
                  <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 w-[75%] rounded-full shadow-[0_0_10px_rgba(251,191,36,0.3)]"></div>
                  </div>
                  <button className="text-amber-600 text-[10px] font-black uppercase tracking-widest hover:underline flex items-center gap-1">
                    Redeem Rewards <HiOutlineArrowRight />
                  </button>
                </div>
              </div>

              {/* Support Card */}
              <div className="premium-card p-6 bg-primary text-white flex items-center gap-4 group cursor-pointer hover:bg-[#333] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:text-accent transition-colors">
                  <HiOutlineQuestionMarkCircle />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold">24/7 Support</h4>
                  <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Need help with a wash?</p>
                </div>
                <HiOutlineArrowRight className="text-white/20 group-hover:text-white transition-colors" />
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
