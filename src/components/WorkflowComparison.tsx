import React from "react";
import { ArrowRight, Workflow, Building2, Zap } from "lucide-react";
import { WorkflowScenario } from "../lib/types/engine";
import FloatingContainer from "./ui3d/FloatingContainer";
import GlassCard3D from "./ui3d/GlassCard3D";

interface WorkflowComparisonProps {
  workflows: WorkflowScenario[];
}

export default function WorkflowComparison({ workflows }: WorkflowComparisonProps) {
  if (!workflows || workflows.length === 0) return null;

  return (
    <section id="workflow-comparison" className="py-24 md:py-32 px-4 bg-slate-50/50 relative overflow-hidden border-b border-slate-100">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest font-mono border border-blue-100/50 shadow-sm">
            <Workflow className="h-4 w-4" />
            <span>Workflow Analysis</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight">
            How Businesses Like Yours Work
          </h2>
          <p className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
            Example Only - For Demonstration Purposes
          </p>
        </div>

        <div className="flex flex-col space-y-24">
          {workflows.map((scenario, idx) => (
            <div key={idx} className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 perspective-[2000px]">
              
              {/* Current Workspace (Tilted Right) */}
              <FloatingContainer delay={idx * 0.2} duration={9} yOffset={15} className="w-full lg:w-5/12 z-10">
                <GlassCard3D 
                  angleX={5} 
                  angleY={15} 
                  depth={30} 
                  className="p-8 sm:p-10 flex flex-col gap-6 bg-white/60 border-slate-200/60 shadow-[0_20px_40px_rgba(11,31,58,0.05)]"
                >
                  <div className="flex items-center gap-4 border-b border-slate-200/50 pb-6">
                    <div className="p-4 bg-slate-100 rounded-2xl shadow-inner">
                      <Building2 className="h-8 w-8 text-slate-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-1">
                        Current Business
                      </span>
                      <h4 className="text-xl font-black text-slate-700">Typical Operation</h4>
                    </div>
                  </div>
                  
                  <div className="py-4">
                    <p className="text-lg font-bold text-[#0B1F3A] leading-relaxed">
                      {scenario.currentWorkflow}
                    </p>
                  </div>
                </GlassCard3D>
              </FloatingContainer>

              {/* Connecting Arrows (Animated Flow) */}
              <div className="flex lg:flex-col items-center justify-center gap-2 lg:w-2/12 z-0 opacity-60">
                <div className="relative flex items-center justify-center w-full h-16 lg:h-full">
                  <div className="hidden lg:block absolute w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-30"></div>
                  <div className="lg:hidden absolute h-full w-[2px] bg-gradient-to-b from-transparent via-[#2563EB] to-transparent opacity-30"></div>
                  
                  {/* Floating Arrow Icon */}
                  <FloatingContainer duration={3} yOffset={0} className="relative z-10 animate-pulse">
                    <div className="bg-[#2563EB] p-3 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] rotate-90 lg:rotate-0">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </FloatingContainer>
                </div>
              </div>

              {/* Example Workspace (Tilted Left) */}
              <FloatingContainer delay={(idx * 0.2) + 1} duration={10} yOffset={20} className="w-full lg:w-5/12 z-20">
                <GlassCard3D 
                  angleX={5} 
                  angleY={-15} 
                  depth={50} 
                  glow 
                  className="p-8 sm:p-10 flex flex-col gap-6 bg-gradient-to-br from-[#0B1F3A]/5 to-[#2563EB]/10 border-[#2563EB]/20"
                >
                  <div className="flex items-center gap-4 border-b border-[#2563EB]/20 pb-6">
                    <div className="p-4 bg-white rounded-2xl shadow-[0_10px_20px_rgba(37,99,235,0.15)] relative">
                       <div className="absolute inset-0 bg-[#2563EB]/20 rounded-2xl blur-md -z-10 animate-pulse"></div>
                      <Zap className="h-8 w-8 text-[#2563EB]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono block mb-1">
                        Example Business
                      </span>
                      <h4 className="text-xl font-black text-[#0B1F3A]">Optimised Workflow</h4>
                    </div>
                  </div>
                  
                  <div className="py-4">
                    <p className="text-lg font-black text-[#2563EB] leading-relaxed">
                      {scenario.exampleWorkflow}
                    </p>
                  </div>
                </GlassCard3D>
              </FloatingContainer>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
