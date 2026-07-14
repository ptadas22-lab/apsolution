import React from "react";
import { 
  Eye, 
  Search, 
  HelpCircle, 
  CheckCircle2, 
  Cpu, 
  ArrowDown
} from "lucide-react";

interface OurApproachProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function OurApproach({ onScrollToSection }: OurApproachProps) {
  const steps = [
    {
      label: "Observe",
      desc: "We understand your business and observe how it works.",
      icon: <Eye className="h-5 w-5 text-indigo-600" />
    },
    {
      label: "Research",
      desc: "We look for publicly available information to get a clear picture.",
      icon: <Search className="h-5 w-5 text-blue-600" />
    },
    {
      label: "Understand",
      desc: "We analyze how your business compares to similar companies.",
      icon: <HelpCircle className="h-5 w-5 text-emerald-600" />
    },
    {
      label: "Recommend",
      desc: "We suggest practical solutions that can help your business today.",
      icon: <CheckCircle2 className="h-5 w-5 text-teal-600" />
    },
    {
      label: "Build",
      desc: "We construct clean, simple, and secure software tools for you.",
      icon: <Cpu className="h-5 w-5 text-purple-600" />
    }
  ];

  return (
    <section 
      id="how-we-work" 
      className="py-12 md:py-16 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-8 max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-sans font-black text-[#0B1F3A] tracking-tight">
            How We Work
          </h2>
        </div>

        {/* Horizontal flow diagram */}
        <div className="relative pt-6 px-4">
          
          {/* Background horizontal connector line on md+ */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-slate-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10 text-center">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center space-y-4 group"
              >
                {/* Step badge/icon frame */}
                <div className="relative bg-white">
                  <div className="h-14 w-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#2563EB]/40 group-hover:shadow-md z-10 relative">
                    {step.icon}
                  </div>
                  {/* Step counter badge */}
                  <span className="absolute -top-1.5 -right-1.5 bg-[#0B1F3A] text-white text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center font-mono z-20">
                    {idx + 1}
                  </span>
                </div>

                {/* Text explanation */}
                <div className="space-y-1 max-w-[140px] mx-auto text-center bg-white">
                  <h4 className="text-sm font-bold text-[#0B1F3A] tracking-tight">
                    {step.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-semibold font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile down arrow indicators */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden text-slate-300 pt-2">
                    <ArrowDown className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
