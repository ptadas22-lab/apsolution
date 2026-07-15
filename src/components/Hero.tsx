import React from "react";


interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="flex flex-col items-center justify-center min-h-[75vh] bg-white text-center px-4"
    >
      <div className="max-w-3xl w-full space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight leading-tight">
          👋 Welcome to A&P Solutions
        </h1>
        
        <h2 className="text-xl md:text-2xl text-[#2563EB] font-bold tracking-tight">
          Research. Understand. Recommend.
        </h2>
        
        <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
          Every business is different. Instead of recommending the same solution to everyone, we first understand your business using publicly available information and then prepare practical recommendations.
        </p>
        
        <div className="pt-8 flex flex-col items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-primary-btn"
            onClick={() => onScrollToSection("discovery")}
            className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-base px-10 py-5 rounded-2xl transition-all shadow-lg shadow-[#0B1F3A]/5 cursor-pointer border-none"
          >
            Start Business Snapshot
          </button>
        </div>

      </div>
    </section>
  );
}

