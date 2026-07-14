import React from "react";
import { Mail, Instagram, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400 font-bold mt-16 text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Details */}
        <div className="flex items-center space-x-3 self-start md:self-center">
          <div className="h-8 w-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center font-black text-white text-[10px]">
            A&P
          </div>
          <div>
            <span className="text-[#0B1F3A] font-extrabold text-sm block">A&P Solutions</span>
            <div className="text-[10px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-wider leading-relaxed">
              <div>Research.</div>
              <div>Understand.</div>
              <div>Recommend.</div>
            </div>
          </div>
        </div>

        {/* Channels / Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-slate-500">
          <a 
            href="https://instagram.com/aandpsolutions" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
          >
            <Instagram className="h-4 w-4 shrink-0" />
            <span>Instagram</span>
          </a>
          <a 
            href="https://linkedin.com/company/aandpsolutions" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
          >
            <Linkedin className="h-4 w-4 shrink-0" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:hello@aandpsolutions.com" 
            className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span>hello@aandpsolutions.com</span>
          </a>
        </div>

        {/* Top/Copyright details */}
        <div className="flex flex-col items-start md:items-end gap-2 text-[11px] font-semibold">
          <button 
            onClick={() => onScrollToSection("hero")}
            className="text-slate-500 hover:text-[#2563EB] flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
            id="back-to-top-footer-btn"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
          <span className="text-slate-400">
            &copy; {new Date().getFullYear()} A&P Solutions. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
}
