import React from "react";
import FloatingContainer from "./ui3d/FloatingContainer";
import GlassCard3D from "./ui3d/GlassCard3D";
import ConnectorLine from "./ui3d/ConnectorLine";
import { Building2, Brain, Activity, LayoutDashboard } from "lucide-react";

interface HeroProps {
  onScrollToSection?: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-[90vh] bg-white text-center px-4 overflow-hidden"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* Text Content */}
      <div className="max-w-4xl w-full space-y-6 flex flex-col items-center z-10 pt-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0B1F3A] tracking-tight leading-tight">
          A&P Solutions
        </h1>
        <h2 className="text-xl md:text-2xl text-slate-500 font-medium tracking-tight max-w-2xl leading-relaxed">
          The AI Business Consultant that researches, understands, and explains your business.
        </h2>
      </div>

      {/* 3D Floating AI Workspace */}
      <div className="w-full max-w-5xl mt-24 relative h-72 sm:h-96 flex items-center justify-center pointer-events-none perspective-[1500px]">
        <div className="relative w-full flex items-center justify-between px-2 sm:px-12 md:px-20">
          
          {/* Node 1: Business Card */}
          <FloatingContainer delay={0} yOffset={15} className="z-10 flex-shrink-0">
            <GlassCard3D angleX={10} angleY={20} depth={20} className="w-24 h-32 sm:w-36 sm:h-48 flex flex-col items-center justify-center gap-4">
              <div className="p-3 bg-blue-50 rounded-2xl">
                <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-[#2563EB]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#0B1F3A] text-center px-2 uppercase tracking-widest font-mono">Business<br/>Card</span>
            </GlassCard3D>
          </FloatingContainer>

          <ConnectorLine className="flex-1 -mx-8 sm:-mx-12 z-0 hidden md:block" />

          {/* Node 2: AI Analysis */}
          <FloatingContainer delay={1} yOffset={25} className="z-20 flex-shrink-0">
            <GlassCard3D angleX={5} angleY={10} depth={40} glow className="w-28 h-36 sm:w-44 sm:h-56 bg-[#0B1F3A]/5 border-[#2563EB]/20 flex flex-col items-center justify-center gap-5">
              <div className="p-4 bg-[#2563EB]/10 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                <Brain className="h-8 w-8 sm:h-12 sm:w-12 text-[#2563EB]" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#2563EB] text-center uppercase tracking-widest font-mono">AI Analysis</span>
            </GlassCard3D>
          </FloatingContainer>

          <ConnectorLine className="flex-1 -mx-8 sm:-mx-12 z-0 hidden md:block" />

          {/* Node 3: Business Snapshot */}
          <FloatingContainer delay={2} yOffset={15} className="z-10 flex-shrink-0">
            <GlassCard3D angleX={15} angleY={-10} depth={30} className="w-24 h-32 sm:w-36 sm:h-48 flex flex-col items-center justify-center gap-4">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Activity className="h-6 w-6 sm:h-8 sm:w-8 text-[#0B1F3A]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-[#0B1F3A] text-center px-2 uppercase tracking-widest font-mono">Business<br/>Snapshot</span>
            </GlassCard3D>
          </FloatingContainer>

          <ConnectorLine className="flex-1 -mx-8 sm:-mx-12 z-0 hidden md:block" />

          {/* Node 4: Example Dashboard */}
          <FloatingContainer delay={0.5} yOffset={20} className="z-0 flex-shrink-0 hidden sm:block">
            <GlassCard3D angleX={20} angleY={-20} depth={10} className="w-24 h-32 sm:w-36 sm:h-48 flex flex-col items-center justify-center gap-4 bg-white/40">
              <div className="p-3 bg-slate-100 rounded-2xl">
                <LayoutDashboard className="h-6 w-6 sm:h-8 sm:w-8 text-slate-400" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-400 text-center px-2 uppercase tracking-widest font-mono">Example<br/>Dashboard</span>
            </GlassCard3D>
          </FloatingContainer>
          
        </div>
      </div>
    </section>
  );
}
