import React from "react";
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  LineChart, 
  ShieldCheck, 
  Star,
  Sparkles,
  FileText,
  BarChart3,
  ArrowUpRight
} from "lucide-react";

interface ImagineBusinessProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ImagineBusiness({ onScrollToSection }: ImagineBusinessProps) {
  return (
    <section 
      id="reimagined" 
      className="py-16 md:py-32 border-b border-slate-100 scroll-mt-20 bg-slate-50/50"
    >
      <div className="space-y-16 max-w-5xl mx-auto px-4">
        
        {/* Top Bar */}
        <div className="flex flex-col border-b border-slate-200 pb-8 gap-6 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
              Example Solution Preview
            </h2>
            <div className="max-w-2xl mx-auto space-y-2">
              <span className="bg-amber-100 text-amber-800 border border-amber-200 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                For Demonstration Only
              </span>
              <p className="text-sm font-bold text-slate-500 leading-relaxed pt-2">
                This is demonstration data. This dashboard does not represent your actual business. It is only an example showing how businesses can organise information.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Frame Container */}
        <div className="flex justify-center w-full">
          {/* Mobile phone outer frame */}
          <div className="w-full max-w-[380px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-800">
            
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-20"></div>

            {/* Screen inner area (Dashboard) */}
            <div className="bg-slate-100/50 rounded-[2.5rem] w-full h-[700px] overflow-y-auto no-scrollbar relative flex flex-col">
              
              {/* Dashboard Header */}
              <div className="bg-white px-6 pt-14 pb-4 border-b border-slate-200/60 sticky top-0 z-10 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="font-black text-[#0B1F3A] text-xl tracking-tight leading-none mb-1">Example Co.</h3>
                  <span className="text-[9px] text-slate-400 font-bold uppercase font-mono tracking-widest">Dummy Data Preview</span>
                </div>
                <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-black text-[10px] shadow-sm">
                  EX
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 grid grid-cols-2 gap-3 pb-12">
                
                {/* 1. Today's Appointments (col-span-2) */}
                <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60">
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-indigo-600" />
                      <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Today's Appointments</span>
                    </div>
                    <span className="bg-indigo-50 text-indigo-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase">2 Left</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-white border border-slate-200 shadow-sm text-[#0B1F3A] font-black text-[11px] p-1.5 rounded-lg text-center leading-none min-w-[36px]">
                          <span className="block mb-0.5">10</span>
                          <span className="block text-[8px] text-slate-400 uppercase">AM</span>
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0B1F3A]">Sarah Jenkins</span>
                          <span className="block text-[9px] font-semibold text-slate-500">Premium Service</span>
                        </div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="bg-white border border-slate-200 shadow-sm text-[#0B1F3A] font-black text-[11px] p-1.5 rounded-lg text-center leading-none min-w-[36px]">
                          <span className="block mb-0.5">02</span>
                          <span className="block text-[8px] text-slate-400 uppercase">PM</span>
                        </div>
                        <div>
                          <span className="block text-xs font-bold text-[#0B1F3A]">Michael Chang</span>
                          <span className="block text-[9px] font-semibold text-slate-500">Standard Review</span>
                        </div>
                      </div>
                      <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
                    </div>
                  </div>
                </div>

                {/* 2. Customer History */}
                <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Customer History</span>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="flex-1 bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                      <span className="block text-lg font-black text-[#0B1F3A] leading-none mb-1">1,248</span>
                      <span className="block text-[9px] text-blue-600 font-bold uppercase tracking-wider">Total Clients</span>
                    </div>
                    <div className="flex-1 bg-emerald-50/50 p-3 rounded-xl border border-emerald-100/50">
                      <span className="block text-lg font-black text-[#0B1F3A] leading-none mb-1">86%</span>
                      <span className="block text-[9px] text-emerald-600 font-bold uppercase tracking-wider">Return Rate</span>
                    </div>
                  </div>
                </div>

                {/* 3. Monthly Reports */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-2">
                    <LineChart className="h-4 w-4 text-purple-600" />
                    <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Reports</span>
                  </div>
                  <div className="mt-2">
                    <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Est. Revenue</span>
                    <div className="flex items-end gap-1.5">
                      <span className="text-xl font-black text-[#0B1F3A] leading-none">$14.2k</span>
                    </div>
                  </div>
                </div>

                {/* 4. Invoice Summary */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="h-4 w-4 text-sky-600" />
                    <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Invoices</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-bold">Paid</span>
                      <span className="font-black text-[#0B1F3A]">24</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-500 font-bold">Pending</span>
                      <span className="font-black text-amber-600">3</span>
                    </div>
                  </div>
                </div>

                {/* 5. WhatsApp Messages (col-span-2) */}
                <div className="col-span-2 bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#25D366]" />
                      <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">WhatsApp Demo</span>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  </div>
                  <div className="bg-[#f0f2f5] p-3 rounded-xl border border-slate-100">
                    <div className="bg-white p-2.5 rounded-xl rounded-tl-none text-[10px] max-w-[85%] font-semibold text-slate-700 shadow-sm mb-2 leading-relaxed">
                      Hi! Can I reschedule my appointment for tomorrow?
                    </div>
                    <div className="bg-[#dcf8c6] p-2.5 rounded-xl rounded-tr-none text-[10px] max-w-[85%] ml-auto font-semibold text-slate-800 shadow-sm leading-relaxed">
                      Absolutely. We have a 2:00 PM slot available.
                    </div>
                  </div>
                </div>

                {/* 6. Reviews */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Reviews</span>
                  </div>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xl font-black text-[#0B1F3A]">4.9</span>
                    <span className="text-[9px] font-bold text-slate-400">/ 5.0</span>
                  </div>
                  <span className="text-[9px] font-bold text-slate-500 mt-1 block tracking-wide">128 Total</span>
                </div>

                {/* 7. Simple Analytics */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="h-4 w-4 text-rose-500" />
                    <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">Analytics</span>
                  </div>
                  <div className="mt-2 space-y-2">
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div className="bg-rose-500 h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                    <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-widest text-right">Profile Views</span>
                  </div>
                </div>

                {/* 8. Business Security (col-span-2) */}
                <div className="col-span-2 bg-slate-800 rounded-2xl p-4 border border-slate-700 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                    <span className="text-[11px] font-black text-white uppercase tracking-wide">Business Security</span>
                  </div>
                  <span className="bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 text-[9px] font-black px-2.5 py-1 rounded-md uppercase tracking-widest">
                    Encrypted
                  </span>
                </div>

              </div>
              
              {/* Bottom indicator line */}
              <div className="mt-auto pb-2 pt-2 flex justify-center sticky bottom-0 bg-slate-100/80 backdrop-blur-md border-t border-slate-200/50">
                <div className="w-1/3 h-1.5 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex justify-center">
          <button
            onClick={() => onScrollToSection("improvements")}
            className="bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base px-10 py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/10 inline-flex items-center gap-2 cursor-pointer border-0"
            id="reimagined-next-btn"
          >
            <span>Continue to Possible Improvements</span>
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
