import React from "react";
import { ArrowRight, BarChart2, PieChart, Activity } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center py-20 bg-white"
    >
      <div className="max-w-3xl w-full text-center space-y-6 flex flex-col items-center px-4">
        
        <h1 className="text-4xl md:text-5xl font-semibold text-[#111111] tracking-tight">
          👋 Welcome to A&P Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-[#666666] font-normal">
          Understand your business before making changes.
        </p>
        
        <div className="pt-8">
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

      {/* Subtle Business Illustration */}
      <div className="w-full max-w-4xl mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 px-4 opacity-90">
        <div className="bg-[#F9F9F9] rounded-[24px] p-8 flex flex-col items-center text-center gap-4 border border-[#F0F0F0] hover:border-[#E5E5E5] transition-colors">
           <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#F0F0F0]">
             <BarChart2 className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <div className="w-full flex flex-col items-center mt-2">
             <div className="h-3 w-24 bg-[#E5E5E5] rounded-full mb-3"></div>
             <div className="h-2 w-32 bg-[#F0F0F0] rounded-full"></div>
           </div>
        </div>
        
        <div className="bg-[#F9F9F9] rounded-[24px] p-8 flex flex-col items-center text-center gap-4 border border-[#F0F0F0] hover:border-[#E5E5E5] transition-colors">
           <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#F0F0F0]">
             <PieChart className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <div className="w-full flex flex-col items-center mt-2">
             <div className="h-3 w-20 bg-[#E5E5E5] rounded-full mb-3"></div>
             <div className="h-2 w-28 bg-[#F0F0F0] rounded-full"></div>
           </div>
        </div>

        <div className="bg-[#F9F9F9] rounded-[24px] p-8 flex flex-col items-center text-center gap-4 border border-[#F0F0F0] hover:border-[#E5E5E5] transition-colors">
           <div className="bg-white p-3 rounded-2xl shadow-sm border border-[#F0F0F0]">
             <Activity className="h-6 w-6 text-[#111111] stroke-[1.5]" />
           </div>
           <div className="w-full flex flex-col items-center mt-2">
             <div className="h-3 w-28 bg-[#E5E5E5] rounded-full mb-3"></div>
             <div className="h-2 w-24 bg-[#F0F0F0] rounded-full"></div>
           </div>
        </div>
      </div>
    </section>
  );
}

