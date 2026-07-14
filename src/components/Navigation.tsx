import React from "react";

interface NavigationProps {
  hasSnapshot: boolean;
  onScrollToSection: (sectionId: string) => void;
  onStartSnapshot: () => void;
  currentView?: "home" | "insights";
  onSwitchView?: (view: "home" | "insights") => void;
}

export default function Navigation({ hasSnapshot, onScrollToSection, onStartSnapshot, currentView = "home", onSwitchView }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Brand Frame */}
        <button 
          onClick={() => {
            if (onSwitchView) onSwitchView("home");
            onScrollToSection("hero");
          }}
          className="flex items-center space-x-2.5 text-left group cursor-pointer border-0 bg-transparent p-0 outline-none"
        >
          <div className="h-9 w-9 bg-[#0B1F3A] rounded-xl flex items-center justify-center font-black text-white text-xs tracking-tighter transition-transform group-hover:scale-105 shadow-md shadow-slate-100">
            A&P
          </div>
          <div>
            <span className="font-sans font-black text-sm sm:text-base text-[#0B1F3A] tracking-tight block">
              A&P Solutions
            </span>
            <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase block">
              AI Business Consultant
            </span>
          </div>
        </button>

        {/* Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-bold text-[#0B1F3A]">
          <button 
            onClick={() => {
              if (onSwitchView) onSwitchView("home");
              onScrollToSection("hero");
            }}
            className={`${currentView === "home" ? "text-[#2563EB]" : "text-slate-500 hover:text-[#0B1F3A]"} transition-colors cursor-pointer bg-transparent border-none p-0`}
          >
            Consultation
          </button>
          
          <button 
            onClick={() => {
              if (onSwitchView) onSwitchView("insights");
            }}
            className={`${currentView === "insights" ? "text-[#2563EB]" : "text-slate-500 hover:text-[#0B1F3A]"} transition-colors cursor-pointer bg-transparent border-none p-0`}
          >
            Business Insights
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {!hasSnapshot && currentView === "home" ? (
            <button
              onClick={onStartSnapshot}
              className="bg-[#0B1F3A] hover:bg-[#1e293b] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-[#0B1F3A]/10 cursor-pointer border-none"
            >
              Start Snapshot
            </button>
          ) : (
            <button
              onClick={() => {
                if (onSwitchView) onSwitchView("home");
                onScrollToSection("contact");
              }}
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-blue-900/10 cursor-pointer border-none"
            >
              Book Consultation
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
