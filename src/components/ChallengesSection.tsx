import React from "react";
import { AlertTriangle } from "lucide-react";

interface ChallengesSectionProps {
  challenges: string[];
}

export default function ChallengesSection({ challenges }: ChallengesSectionProps) {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section id="challenges" className="py-24 border-b border-slate-100 bg-slate-50/30 scroll-mt-10">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Industry Context
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Challenges Businesses Like Yours Commonly Face
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Based on data from similar operations in your industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {challenges.map((challenge, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col items-center gap-3 w-full sm:w-64 animate-in slide-in-from-bottom-8 fade-in duration-700"
            >
              <div className="bg-rose-50 text-rose-500 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-slate-700 text-center leading-snug">
                {challenge}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
