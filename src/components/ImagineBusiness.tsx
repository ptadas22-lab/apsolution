import React from "react";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { DashboardWidget } from "../lib/types/engine";

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
                
                {widgets.map((widget, idx) => (
                  <div key={idx} className={`${widget.colSpan === 2 ? 'col-span-2' : 'col-span-1'} bg-white rounded-2xl p-4 shadow-sm border border-slate-200/60 flex flex-col`}>
                    
                    {/* Widget Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <RenderIcon name={widget.icon} className="h-4 w-4 text-indigo-600" />
                        <span className="text-[11px] font-black text-[#0B1F3A] uppercase tracking-wide">{widget.title}</span>
                      </div>
                      
                      {widget.data.badgeText && (
                        <span className={`bg-${widget.data.badgeColor || 'indigo'}-50 text-${widget.data.badgeColor || 'indigo'}-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase`}>
                          {widget.data.badgeText}
                        </span>
                      )}
                    </div>
                    
                    {/* Widget Body based on Type */}
                    {widget.type === 'Metric' && widget.data.items && (
                      <div className="space-y-2 mt-auto">
                        {widget.data.items.map((item: any, i: number) => (
                          <div key={i} className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                            <div className="flex items-center gap-3">
                              <div className="bg-white border border-slate-200 shadow-sm text-[#0B1F3A] font-black text-[11px] p-1.5 rounded-lg text-center leading-none min-w-[36px]">
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
                            <span className={`h-2 w-2 rounded-full bg-${item.status || 'emerald'}-500 shadow-[0_0_8px_rgba(0,0,0,0.1)]`}></span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {widget.type === 'Metric' && widget.data.metrics && (
                      <div className="flex gap-2.5 mt-auto">
                        {widget.data.metrics.map((m: any, i: number) => (
                          <div key={i} className={`flex-1 bg-${m.color || 'blue'}-50/50 p-3 rounded-xl border border-${m.color || 'blue'}-100/50`}>
                            <span className="block text-lg font-black text-[#0B1F3A] leading-none mb-1">{m.value}</span>
                            <span className={`block text-[9px] text-${m.color || 'blue'}-600 font-bold uppercase tracking-wider`}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {widget.type === 'Metric' && widget.data.value && !widget.data.items && !widget.data.metrics && (
                      <div className="mt-auto">
                        {widget.data.label && <span className="block text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">{widget.data.label}</span>}
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-black text-[#0B1F3A] leading-none">{widget.data.value}</span>
                          {widget.data.subtitle && <span className="text-[9px] font-bold text-slate-400">{widget.data.subtitle}</span>}
                        </div>
                        {widget.data.footer && <span className="text-[9px] font-bold text-slate-500 mt-1 block tracking-wide">{widget.data.footer}</span>}
                      </div>
                    )}
                    
                    {widget.type === 'Chat' && widget.data.messages && (
                      <div className="bg-[#f0f2f5] p-3 rounded-xl border border-slate-100 mt-auto">
                        {widget.data.messages.map((msg: any, i: number) => (
                          <div key={i} className={`p-2.5 rounded-xl text-[10px] max-w-[85%] font-semibold shadow-sm leading-relaxed mb-2 ${msg.isUser ? 'bg-white rounded-tl-none text-slate-700' : 'bg-[#dcf8c6] rounded-tr-none ml-auto text-slate-800'}`}>
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    )}

                  </div>
                ))}
                
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
