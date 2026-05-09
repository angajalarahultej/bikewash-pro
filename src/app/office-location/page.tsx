"use client";

import Sidebar from "@/components/Sidebar";
import { 
  HiOutlineBuildingOffice2, 
  HiOutlineMapPin, 
  HiOutlinePlus,
  HiOutlineCheckCircle
} from "react-icons/hi2";

const OfficeLocationPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row overflow-x-hidden">
      <Sidebar />
      
      <main className="flex-1 w-full min-h-screen">
        <div className="max-w-4xl mx-auto p-6 md:p-10 lg:p-12 flex flex-col gap-10">
          
          <header className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-primary mb-1">Office Locations</h1>
              <p className="text-muted text-sm">Manage your workplace parking spots for seamless service.</p>
            </div>
            <button className="px-6 py-3 bg-primary text-white font-bold text-xs rounded-xl hover:bg-[#333] transition-all uppercase tracking-widest shadow-lg shadow-primary/10 flex items-center gap-2">
              <HiOutlinePlus className="text-lg" /> Add Location
            </button>
          </header>

          <div className="space-y-6">
            <div className="premium-card p-6 bg-white border-primary/20 shadow-xl shadow-primary/5 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <HiOutlineCheckCircle /> Default
                </div>
              </div>
              
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary border border-primary/10 shrink-0">
                <HiOutlineBuildingOffice2 className="text-3xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Global Tech Park — HQ</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted font-medium">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineMapPin className="text-muted/80" /> Tower A, Level B2
                  </span>
                  <span className="hidden sm:inline text-muted/80">•</span>
                  <span>Spot #442</span>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                <button className="flex-1 md:flex-none px-6 py-3 bg-surface-muted border border-border rounded-xl text-muted font-bold text-xs uppercase tracking-widest hover:bg-border transition-all">
                  Edit
                </button>
              </div>
            </div>

            <div className="premium-card p-6 bg-white border-border flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 bg-surface-muted rounded-2xl flex items-center justify-center text-muted/80 border border-border shrink-0">
                <HiOutlineBuildingOffice2 className="text-3xl" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-primary mb-2">Satellite Office</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted font-medium">
                  <span className="flex items-center gap-1.5">
                    <HiOutlineMapPin className="text-muted/80" /> Whitefield Campus
                  </span>
                  <span className="hidden sm:inline text-muted/80">•</span>
                  <span>Visitor Parking</span>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto mt-4 md:mt-0">
                <button className="flex-1 md:flex-none px-6 py-3 bg-surface-muted border border-border rounded-xl text-muted font-bold text-xs uppercase tracking-widest hover:bg-border transition-all">
                  Edit
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OfficeLocationPage;
