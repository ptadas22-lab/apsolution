import React from "react";
import { Sparkles } from "lucide-react";

interface NavigationProps {
  hasSnapshot: boolean;
  onScrollToSection: (sectionId: string) => void;
  onStartSnapshot: () => void;
}

export default function Navigation({ hasSnapshot, onScrollToSection, onStartSnapshot }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo Brand Frame */}
        <button 
          onClick={() => onScrollToSection("hero")}
          className="flex items-center space-x-2.5 text-left group cursor-pointer border-0 bg-transparent p-0 outline-none"
          id="nav-logo-btn"
        >
          <div className="h-9 w-9 bg-[#0B1F3A] rounded-xl flex items-center justify-center font-black text-white text-xs tracking-tighter transition-transform group-hover:scale-105 shadow-md shadow-slate-100">
            A&P
          </div>
          <div>
            <span className="font-sans font-black text-sm sm:text-base text-[#0B1F3A] tracking-tight block">
              A&P Solutions
            </span>
            <span className="text-[9px] text-slate-400 font-bold tracking-wider uppercase block">
              Helping Small Businesses Grow Smarter
            </span>
          </div>
        </button>

        {/* Minimalist Navigation Links */}
        <nav className="hidden md:flex items-center space-x-5 text-xs font-bold text-[#0B1F3A]">
          {!hasSnapshot ? (
            <>
              <button 
                onClick={() => onScrollToSection("how-we-work")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Our Approach
              </button>
              <button 
                onClick={() => onScrollToSection("industries")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0 font-extrabold"
              >
                Business Insights
              </button>
              <button 
                onClick={() => onScrollToSection("contact")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Contact
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onScrollToSection("snapshot-results")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0 font-extrabold text-[#2563EB]"
              >
                Your Snapshot
              </button>
              <button 
                onClick={() => onScrollToSection("snapshot-observations")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Observations
              </button>
              <button 
                onClick={() => onScrollToSection("reimagined")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Previews
              </button>
              <button 
                onClick={() => onScrollToSection("snapshot-improvements")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Improvements
              </button>
              <button 
                onClick={() => onScrollToSection("journal")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Insights Library
              </button>
              <button 
                onClick={() => onScrollToSection("contact")}
                className="hover:text-[#2563EB] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Contact
              </button>
            </>
          )}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {!hasSnapshot ? (
            <button
              onClick={onStartSnapshot}
              className="bg-[#0B1F3A] hover:bg-[#1e293b] text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all cursor-pointer"
              id="nav-get-review-btn"
            >
              Start Snapshot
            </button>
          ) : (
            <button
              onClick={() => onScrollToSection("contact")}
              className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg transition-all cursor-pointer"
              id="nav-book-session-btn"
            >
              Book Free Session
            </button>
          )}
        </div>

      </div>
    </header>
  );
}
