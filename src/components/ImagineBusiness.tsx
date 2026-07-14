import React from "react";
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  LineChart, 
  ShieldCheck, 
  Star,
  Sparkles
} from "lucide-react";

interface ImagineBusinessProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ImagineBusiness({ onScrollToSection }: ImagineBusinessProps) {
  return (
    <section 
      id="reimagined" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-12 max-w-5xl mx-auto px-4">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
              Step 06 • Example Demonstration
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
              Imagine Your Business Like This
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-wider font-mono">
              <Sparkles className="h-3 w-3 text-emerald-500 animate-pulse" />
              <span>Example Preview</span>
            </span>
          </div>
        </div>

        {/* Mobile Frame Container */}
        <div className="flex justify-center w-full">
          {/* Mobile phone outer frame */}
          <div className="w-full max-w-[360px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-800">
            
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-b-2xl z-20"></div>

            {/* Screen inner area (Dashboard) */}
            <div className="bg-slate-50 rounded-[2.5rem] w-full h-[650px] overflow-y-auto no-scrollbar relative flex flex-col">
              
              {/* Dashboard Header */}
              <div className="bg-white px-5 pt-12 pb-4 border-b border-slate-100 sticky top-0 z-10 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-black text-[#0B1F3A] text-lg tracking-tight">Workspace</h3>
                  <span className="text-[8px] text-slate-400 font-bold uppercase font-mono tracking-wider">For Demonstration Only</span>
                </div>
                <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                  A&P
                </div>
              </div>

              {/* Dashboard Content - 2 column layout to simulate desktop dashboard */}
              <div className="p-3 grid grid-cols-2 gap-3 pb-8">
                
                {/* Customer Management (col-span-2) */}
                <div className="col-span-2 bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-3.5 w-3.5 text-blue-600" />
                    <span className="text-[10px] font-bold text-[#0B1F3A] uppercase">Customer Management</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-slate-50 p-1.5 rounded-lg flex justify-between items-center">
                      <span className="text-[9px] font-semibold text-slate-700">Ananya S.</span>
                      <span className="text-[8px] bg-emerald-100 text-emerald-700 px-1.5 rounded-full font-bold">VIP</span>
                    </div>
                    <div className="flex-1 bg-slate-50 p-1.5 rounded-lg flex justify-between items-center">
                      <span className="text-[9px] font-semibold text-slate-700">Rohan M.</span>
                      <span className="text-[8px] bg-blue-100 text-blue-700 px-1.5 rounded-full font-bold">Active</span>
                    </div>
                  </div>
                </div>

                {/* Appointments */}
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Calendar className="h-3 w-3 text-indigo-600" />
                    <span className="text-[9px] font-bold text-[#0B1F3A] uppercase">Appointments</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="border-l-2 border-indigo-500 pl-1.5">
                      <span className="block text-[9px] font-semibold text-slate-700">10:30 AM</span>
                      <span className="block text-[8px] text-slate-500">Consultation</span>
                    </div>
                    <div className="border-l-2 border-amber-500 pl-1.5">
                      <span className="block text-[9px] font-semibold text-slate-700">11:45 AM</span>
                      <span className="block text-[8px] text-slate-500">Follow-up</span>
                    </div>
                  </div>
                </div>

                {/* Reports */}
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 mb-2">
                    <LineChart className="h-3 w-3 text-purple-600" />
                    <span className="text-[9px] font-bold text-[#0B1F3A] uppercase">Reports</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="block text-[8px] text-slate-400 font-bold uppercase">Bookings</span>
                      <span className="text-sm font-black text-[#0B1F3A]">312</span>
                    </div>
                    <span className="text-[9px] font-black text-emerald-600">+14%</span>
                  </div>
                </div>

                {/* WhatsApp (col-span-2) */}
                <div className="col-span-2 bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-3.5 w-3.5 text-green-600" />
                    <span className="text-[10px] font-bold text-[#0B1F3A] uppercase">WhatsApp</span>
                  </div>
                  <div className="bg-[#f0f2f5] p-2 rounded-lg">
                    <div className="bg-[#25D366] text-white p-2 rounded-lg rounded-tr-none text-[9px] max-w-[80%] ml-auto font-medium shadow-sm">
                      Booking confirmed for 2:00 PM tomorrow!
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <ShieldCheck className="h-3 w-3 text-slate-600" />
                    <span className="text-[9px] font-bold text-[#0B1F3A] uppercase">Security</span>
                  </div>
                  <span className="text-[8px] font-medium text-slate-600 flex items-center gap-1 bg-slate-50 p-1.5 rounded border border-slate-100">
                    <ShieldCheck className="h-2.5 w-2.5 text-emerald-500" />
                    AES-256 Encrypted
                  </span>
                </div>

                {/* Review Management */}
                <div className="bg-white rounded-xl p-3 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Star className="h-3 w-3 text-yellow-600" />
                    <span className="text-[9px] font-bold text-[#0B1F3A] uppercase leading-tight">Reviews</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-yellow-500 mb-1">
                    <Star className="h-2 w-2 fill-current" /><Star className="h-2 w-2 fill-current" /><Star className="h-2 w-2 fill-current" /><Star className="h-2 w-2 fill-current" /><Star className="h-2 w-2 fill-current" />
                  </div>
                  <span className="text-[8px] font-medium text-slate-500 italic block">
                    "Perfect service!"
                  </span>
                </div>

              </div>
              
              {/* Bottom indicator line */}
              <div className="mt-auto pb-2 pt-2 flex justify-center sticky bottom-0 bg-slate-50/80 backdrop-blur-sm">
                <div className="w-1/3 h-1 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <button
            onClick={() => onScrollToSection("journal")}
            className="bg-[#0B1F3A] hover:bg-[#1e293b] text-white font-bold text-xs px-8 py-4 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer border-0"
            id="reimagined-next-btn"
          >
            <span>View Business Insights Library</span>
          </button>
        </div>

      </div>
    </section>
  );
}
