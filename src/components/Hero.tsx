import React from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-[75vh] bg-white text-center px-4"
    >
      <div className="max-w-3xl w-full space-y-6 flex flex-col items-center">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight leading-tight">
          👋 Welcome to A&P Solutions
        </h1>
        
        <h2 className="text-xl md:text-2xl text-[#2563EB] font-bold tracking-tight">
          Understand your business before changing it.
        </h2>
        
        <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
          We study your business using publicly available information and prepare a Business Snapshot with practical improvement ideas.
        </p>
        
        <div className="pt-8 flex flex-col items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-primary-btn"
            onClick={() => onScrollToSection("industries")}
            className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-base px-10 py-4.5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#0B1F3A]/10 border-none"
          >
            <span>Start Business Snapshot</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          
          <button
            onClick={() => onScrollToSection("approach")}
            className="text-sm font-bold text-slate-400 hover:text-[#0B1F3A] underline-offset-4 hover:underline transition-all cursor-pointer bg-transparent border-none"
          >
            How it works
          </button>
        </div>

      </div>
    </section>
  );
}

