import React from "react";
import { ArrowRight, Search, BarChart2, Lightbulb } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center pt-24 pb-16 bg-white"
    >
      <div className="max-w-3xl w-full text-center space-y-5 flex flex-col items-center px-4">
        
        <h1 className="text-4xl md:text-5xl font-semibold text-[#111111] tracking-tight">
          Welcome to A&P Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-[#666666] font-normal">
          Understand your business before making changes.
        </p>
        
        <div className="pt-4">
          <button
            id="hero-primary-btn"
            onClick={() => onScrollToSection("industries")}
            className="bg-[#111111] hover:bg-[#333333] text-white font-medium text-base px-8 py-4 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>Start Business Snapshot</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="w-full max-w-3xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div className="flex flex-col items-center text-center gap-3">
           <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-[#F0F0F0]">
             <Search className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <span className="text-sm font-medium text-[#111111]">We Research</span>
        </div>
        
        <div className="flex flex-col items-center text-center gap-3">
           <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-[#F0F0F0]">
             <BarChart2 className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <span className="text-sm font-medium text-[#111111]">We Prepare Your Business Snapshot</span>
        </div>

        <div className="flex flex-col items-center text-center gap-3">
           <div className="bg-[#F9F9F9] p-4 rounded-2xl border border-[#F0F0F0]">
             <Lightbulb className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <span className="text-sm font-medium text-[#111111]">We Recommend Practical Ideas</span>
        </div>
      </div>
    </section>
  );
}

