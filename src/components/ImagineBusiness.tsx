import React from "react";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { DashboardWidget } from "../lib/types/engine";
import FloatingMonitor from "./ui3d/FloatingMonitor";
import DepthCard from "./ui3d/DepthCard";
import FloatingContainer from "./ui3d/FloatingContainer";

interface ImagineBusinessProps {
  onScrollToSection: (sectionId: string) => void;
  dashboardWidgets: DashboardWidget[];
}

const RenderIcon = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name] || LucideIcons.LayoutDashboard;
  return <Icon className={className} />;
};

export default function ImagineBusiness({ onScrollToSection, dashboardWidgets }: ImagineBusinessProps) {
  
  // Safe fallback if widgets are missing
  const widgets = dashboardWidgets && dashboardWidgets.length > 0 ? dashboardWidgets : [];

  return (
    <section 
      id="reimagined" 
      className="py-24 md:py-32 border-b border-slate-100 scroll-mt-20 bg-white"
    >
      <div className="space-y-16 max-w-5xl mx-auto px-4">
        
        {/* Top Bar */}
        <div className="flex flex-col pb-8 gap-6 text-center animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
              Example Solution Preview
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-block bg-amber-50 text-amber-600 border border-amber-200/50 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider font-mono">
                For Demonstration Only
              </span>
              <p className="text-sm font-bold text-slate-500 leading-relaxed pt-2">
                This is demonstration data. This dashboard does not represent your actual business. It is only an example showing how businesses can organise information.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Monitor Container */}
        <div className="flex justify-center w-full perspective-[1500px]">
          <FloatingContainer duration={12} yOffset={15} className="w-full max-w-[400px]">
            <FloatingMonitor depth={0}>
              
              {/* Screen inner area (Dashboard) */}
              <div className="bg-slate-50/80 rounded-2xl w-full h-[650px] overflow-y-auto no-scrollbar relative flex flex-col">
                
                {/* Dashboard Header */}
                <div className="bg-white/90 backdrop-blur-md px-6 pt-12 pb-4 border-b border-slate-200/60 sticky top-0 z-20 shadow-[0_5px_15px_rgba(0,0,0,0.02)] flex items-center justify-between" style={{ transform: "translateZ(10px)" }}>
                  <div>
                    <h3 className="font-black text-[#0B1F3A] text-xl tracking-tight leading-none mb-1">Example Co.</h3>
                    <span className="text-[9px] text-slate-400 font-bold uppercase font-mono tracking-widest">Dummy Data Preview</span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-[#0B1F3A] flex items-center justify-center text-white font-black text-[10px] shadow-[0_5px_10px_rgba(11,31,58,0.2)]">
                    EX
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 grid grid-cols-2 gap-4 pb-12 relative" style={{ transformStyle: "preserve-3d" }}>
                  
                  {widgets.map((widget, idx) => (
                    <DepthCard 
                      key={idx} 
                      depth={idx % 2 === 0 ? 15 : 25} 
                      className={`${widget.colSpan === 2 ? 'col-span-2' : 'col-span-1'} p-4 flex flex-col hover:shadow-[0_15px_30px_rgba(11,31,58,0.1)] transition-all`}
                    >
                      
                      {/* Widget Header */}
                      <div className="flex items-center justify-between mb-4 border-b border-slate-100/50 pb-2">
                        <div className="flex items-center gap-2">
                          <RenderIcon name={widget.icon} className="h-4 w-4 text-[#2563EB]" />
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">{widget.title}</span>
                        </div>
                        
                        {widget.data.badgeText && (
                          <span className={`bg-${widget.data.badgeColor || 'blue'}-50 text-${widget.data.badgeColor || 'blue'}-600 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider`}>
                            {widget.data.badgeText}
                          </span>
                        )}
                      </div>
                      
                      {/* Widget Body based on Type */}
                      {widget.type === 'Metric' && widget.data.items && (
                        <div className="space-y-3 mt-auto">
                          {widget.data.items.map((item: any, i: number) => (
                            <div key={i} className="flex justify-between items-center bg-slate-50/50 p-3 rounded-xl border border-slate-100 shadow-[inset_0_1px_2px_rgba(255,255,255,1)]">
                              <div className="flex items-center gap-3">
                                <div className="bg-white border border-slate-200 shadow-[0_2px_5px_rgba(0,0,0,0.05)] text-[#0B1F3A] font-black text-[11px] p-2 rounded-lg text-center leading-none min-w-[40px]">
                                  {item.time.includes(" ") ? (
                                    <>
                                      <span className="block mb-0.5">{item.time.split(" ")[0]}</span>
                                      <span className="block text-[8px] text-slate-400 uppercase">{item.time.split(" ")[1]}</span>
                                    </>
                                  ) : (
                                    <span className="block">{item.time}</span>
                                  )}
                                </div>
                                <div>
                                  <span className="block text-xs font-bold text-[#0B1F3A]">{item.title}</span>
                                  <span className="block text-[9px] font-semibold text-slate-500">{item.subtitle}</span>
                                </div>
                              </div>
                              <span className={`h-2.5 w-2.5 rounded-full bg-${item.status || 'emerald'}-500 shadow-[0_0_8px_rgba(0,0,0,0.15)]`}></span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {widget.type === 'Metric' && widget.data.metrics && (
                        <div className="flex gap-3 mt-auto">
                          {widget.data.metrics.map((m: any, i: number) => (
                            <div key={i} className={`flex-1 bg-${m.color || 'blue'}-50/30 p-4 rounded-2xl border border-${m.color || 'blue'}-100/50 shadow-[0_5px_15px_rgba(0,0,0,0.02)]`}>
                              <span className={`block text-[9px] text-${m.color || 'blue'}-600 font-bold uppercase tracking-wider mb-2`}>{m.label}</span>
                              <span className="block text-xl font-black text-[#0B1F3A] leading-none">{m.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {widget.type === 'Metric' && widget.data.value && !widget.data.items && !widget.data.metrics && (
                        <div className="mt-auto py-2">
                          {widget.data.label && <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">{widget.data.label}</span>}
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl font-black text-[#2563EB] tracking-tighter leading-none">{widget.data.value}</span>
                            {widget.data.subtitle && <span className="text-[10px] font-bold text-slate-400 uppercase">{widget.data.subtitle}</span>}
                          </div>
                          {widget.data.footer && <span className="text-[10px] font-bold text-slate-500 mt-2 block tracking-wide">{widget.data.footer}</span>}
                        </div>
                      )}
                      
                      {widget.type === 'Chat' && widget.data.messages && (
                        <div className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 mt-auto space-y-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                          {widget.data.messages.map((msg: any, i: number) => (
                            <div key={i} className={`p-3 rounded-2xl text-xs max-w-[85%] font-medium shadow-sm leading-relaxed ${msg.isUser ? 'bg-white rounded-tl-sm text-slate-700 border border-slate-100' : 'bg-blue-50/80 rounded-tr-sm ml-auto text-blue-900 border border-blue-100/50'}`}>
                              {msg.text}
                            </div>
                          ))}
                        </div>
                      )}

                    </DepthCard>
                  ))}
                  
                </div>
                
                {/* Bottom indicator line */}
                <div className="mt-auto pb-3 pt-3 flex justify-center sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-slate-200/50 z-20">
                  <div className="w-1/3 h-1.5 bg-slate-300 rounded-full"></div>
                </div>
              </div>
            </FloatingMonitor>
          </FloatingContainer>
        </div>

        <div className="pt-12 flex justify-center relative z-10">
          <button
            onClick={() => onScrollToSection("improvements")}
            className="bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base px-10 py-5 rounded-2xl transition-all shadow-[0_15px_30px_rgba(11,31,58,0.15)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:-translate-y-1 inline-flex items-center gap-2 cursor-pointer border-0"
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
