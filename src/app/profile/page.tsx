"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineUser, 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker, 
  HiOutlineLightningBolt,
  HiOutlineGift,
  HiOutlinePencil
} from "react-icons/hi";
import { 
  HiOutlineWallet, 
  HiOutlineQuestionMarkCircle,
  HiOutlineCheckBadge
} from "react-icons/hi2";

const ProfilePage = () => {
  const userData = {
    name: "Naveen Kumar",
    email: "naveen.kumar@example.com",
    phone: "+91 98765 43210",
    bike: "Royal Enfield Himalayan 450",
    membership: "Pro Member",
    address: "123, Luxury Heights, Indiranagar, Bangalore, 560038",
    walletBalance: "2,500",
    rewardPoints: "450"
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 w-full min-h-screen bg-[#000000]">
        <div className="max-w-7xl mx-auto p-8 md:p-12 lg:p-16 flex flex-col gap-10">
          
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-16 lg:mt-0">
            <div>
              <h1 className="text-3xl font-bold text-white mb-1 tracking-tight">
                Profile
              </h1>
              <p className="text-neutral-500 text-sm">Manage your account and preferences.</p>
            </div>
            <button className="minimal-btn-secondary py-2 text-xs">
              <HiOutlinePencil className="text-sm" />
              Edit Profile
            </button>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Main Info */}
            <div className="xl:col-span-2 space-y-6">
              <div className="minimal-card overflow-hidden">
                <div className="h-24 bg-neutral-900 border-b border-neutral-800 relative"></div>
                <div className="px-8 pb-8 -mt-10 relative z-10">
                  <div className="flex items-end gap-5 mb-8">
                    <div className="w-24 h-24 rounded-xl bg-neutral-900 border-4 border-black flex items-center justify-center text-3xl font-bold text-brand-green shadow-xl">
                      NK
                    </div>
                    <div className="pb-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h2 className="text-xl font-bold text-white">{userData.name}</h2>
                        <HiOutlineCheckBadge className="text-blue-500 text-lg" />
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-green font-bold text-[10px] uppercase tracking-widest">
                        <HiOutlineLightningBolt className="text-sm" />
                        {userData.membership}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {[
                      { icon: HiOutlineMail, label: "Email", value: userData.email },
                      { icon: HiOutlinePhone, label: "Phone", value: userData.phone },
                      { icon: HiOutlineUser, label: "Primary Bike", value: userData.bike },
                      { icon: HiOutlineLocationMarker, label: "Saved Address", value: userData.address },
                    ].map((info, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{info.label}</div>
                        <div className="text-sm font-medium text-neutral-300 leading-relaxed">
                          {info.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Membership Perks", desc: "View your exclusive platinum benefits.", icon: HiOutlineCheckBadge },
                  { title: "Service Centers", desc: "Find detailing stations in your city.", icon: HiOutlineLocationMarker },
                ].map((item, i) => (
                  <div key={i} className="minimal-card p-6 flex flex-col gap-4 cursor-pointer group">
                    <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/5 flex items-center justify-center text-xl text-neutral-500 group-hover:text-brand-green transition-colors">
                      <item.icon />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Cards */}
            <div className="space-y-6">
              <div className="minimal-card p-8 bg-neutral-900 border-none relative overflow-hidden group">
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-brand-green border border-white/5">
                      <HiOutlineWallet className="text-xl" />
                    </div>
                    <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">Active</span>
                  </div>
                  <div>
                    <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider mb-1">Balance</div>
                    <div className="text-4xl font-bold text-white mb-8 tracking-tight">₹{userData.walletBalance}</div>
                    <button className="minimal-btn-primary w-full py-2.5 text-xs">
                      Add Funds
                    </button>
                  </div>
                </div>
              </div>

              <div className="minimal-card p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-brand-yellow border border-white/5">
                    <HiOutlineGift className="text-xl" />
                  </div>
                  <div className="text-right">
                    <div className="text-neutral-500 text-[10px] uppercase font-bold tracking-wider">Points</div>
                    <div className="text-xl font-bold text-white">{userData.rewardPoints}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-xs text-neutral-500">50 points remaining for your next reward.</p>
                  <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-yellow w-[90%] rounded-full"></div>
                  </div>
                  <button className="text-brand-green text-[10px] font-bold uppercase tracking-widest hover:underline">History →</button>
                </div>
              </div>

              <div className="minimal-card p-6 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
                    <HiOutlineQuestionMarkCircle className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Support</h4>
                    <p className="text-neutral-600 text-[9px] uppercase tracking-widest">Available 24/7</p>
                  </div>
                </div>
                <button className="minimal-btn-secondary w-full py-2 text-xs">
                  Get Help
                </button>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
