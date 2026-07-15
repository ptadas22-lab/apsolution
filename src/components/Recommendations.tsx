import React from "react";
import { ArrowDown } from "lucide-react";
import { RecommendationChain } from "../lib/types/engine";

interface RecommendationsProps {
  recommendations: RecommendationChain[];
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <section id="improvements" className="py-24 border-b border-slate-100 bg-white scroll-mt-10">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Step 4 of 5
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Possible Improvements
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            These are examples only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-colors shadow-sm flex flex-col gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700">
              
              {/* 1. Observation */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Observation
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-tight">
                  {rec.observation}
                </p>
              </div>

              <div className="flex justify-center -my-2 opacity-50">
                <ArrowDown className="h-4 w-4 text-slate-400" />
              </div>

              {/* 2. Reasoning */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Reasoning
                </span>
                <p className="text-sm font-semibold text-slate-700 leading-tight">
                  {rec.reasoning}
                </p>
              </div>

              <div className="flex justify-center -my-2 opacity-50">
                <ArrowDown className="h-4 w-4 text-slate-400" />
              </div>
              
              {/* 3. Possible Improvement */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Possible Improvement
                </span>
                <h3 className="text-base font-black text-[#0B1F3A] leading-tight">
                  {rec.possibleImprovement}
                </h3>
              </div>
              
              <div className="flex justify-center -my-2">
                <div className="bg-white border-2 border-[#2563EB]/20 rounded-full p-1 text-[#2563EB] shadow-sm">
                  <ArrowDown className="h-4 w-4" />
                </div>
              </div>
              
              {/* 4. Example Solution */}
              <div className="space-y-1 bg-white p-4 rounded-2xl border border-slate-200">
                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono">
                  Example Solution
                </span>
                <p className="text-sm font-black text-slate-700 leading-tight">
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
