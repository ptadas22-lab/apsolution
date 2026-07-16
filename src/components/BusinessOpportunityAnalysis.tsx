import React from "react";
import { Lightbulb, ArrowDown, Settings, Workflow } from "lucide-react";
import { RecommendationChain } from "../lib/types/engine";

interface BusinessOpportunityAnalysisProps {
  recommendations: RecommendationChain[];
}

export default function BusinessOpportunityAnalysis({ recommendations }: BusinessOpportunityAnalysisProps) {
  if (!recommendations || recommendations.length === 0) return null;

  return (
    <section id="business-opportunities" className="py-24 border-b border-slate-100 bg-white scroll-mt-0">
      <div className="max-w-6xl mx-auto px-4 space-y-16">
        
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-mono border border-blue-100">
            <Lightbulb className="h-4 w-4" />
            <span>Business Opportunity Analysis</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Potential Areas for Improvement
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">
            Based on the Business Snapshot and estimated business potential, the AI identified several areas that businesses in this industry commonly choose to improve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 rounded-[2rem] p-8 shadow-xl shadow-[#0B1F3A]/5 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 flex flex-col h-full relative group">
              
              <div className="space-y-6 flex-grow">
                {/* Current Situation */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                    Current Situation
                  </span>
                  <p className="text-lg font-bold text-slate-700 leading-snug">
                    {rec.observation}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-slate-300 ml-4">
                  <ArrowDown className="h-5 w-5" />
                </div>

                {/* Possible Impact */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest font-mono">
                    Possible Impact
                  </span>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {rec.reasoning}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-slate-300 ml-4">
                  <ArrowDown className="h-5 w-5" />
                </div>

                {/* Possible Improvement */}
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest font-mono">
                    Possible Improvement
                  </span>
                  <p className="text-lg font-black text-[#0B1F3A] leading-snug flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    {rec.possibleImprovement}
                  </p>
                </div>
              </div>

              {/* Example Solution */}
              <div className="mt-8 pt-6 border-t border-slate-200/60">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest font-mono block mb-2">
                  Example Solution
                </span>
                <p className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <Workflow className="h-4 w-4 text-emerald-500" />
                  {rec.exampleSolution}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
