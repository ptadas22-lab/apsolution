import React from "react";
import { Lightbulb, ArrowRight, TrendingUp } from "lucide-react";
import { RecommendationChain } from "../lib/types/engine";
import FloatingContainer from "./ui3d/FloatingContainer";
import GlassCard3D from "./ui3d/GlassCard3D";

interface BusinessOpportunityAnalysisProps {
  recommendations: RecommendationChain[];
}

export default function BusinessOpportunityAnalysis({ recommendations }: BusinessOpportunityAnalysisProps) {
  
  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  // Use only 4 recommendations to match the grid visually
  const displayedOpportunities = recommendations.slice(0, 4);

  return (
    <section id="business-opportunities" className="scroll-mt-0 min-h-screen bg-slate-50/50 py-24 px-4 font-sans antialiased border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-24">
        
        <div className="text-center space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
            Analysis Complete
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight">
            Business Opportunity Analysis
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Based on the Business Snapshot and estimated business potential, the AI identified several areas that businesses in this industry commonly choose to improve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative perspective-[1200px]">
          {displayedOpportunities.map((opportunity, idx) => (
            <FloatingContainer key={idx} delay={idx * 0.5} yOffset={10} duration={8 + idx}>
              <GlassCard3D angleX={2} angleY={idx % 2 === 0 ? 5 : -5} depth={20} className="p-8 h-full flex flex-col justify-between">
                <div className="space-y-8">
                  {/* Current Situation */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                      Current Situation
                    </span>
                    <p className="text-lg font-black text-[#0B1F3A] leading-snug">
                      {opportunity.observation}
                    </p>
                  </div>

                  <div className="flex items-center justify-center opacity-30">
                    <ArrowRight className="h-4 w-4 text-slate-400 rotate-90 sm:rotate-0" />
                  </div>

                  {/* Possible Impact */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                      Possible Impact
                    </span>
                    <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                      {opportunity.reasoning}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100/50 space-y-6">
                  {/* Possible Improvement */}
                  <div className="space-y-3 bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
                    <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono flex items-center gap-2">
                      <Lightbulb className="h-3 w-3" />
                      Possible Improvement
                    </span>
                    <p className="text-base font-black text-[#0B1F3A]">
                      {opportunity.possibleImprovement}
                    </p>
                  </div>

                  {/* Example Solution */}
                  <div className="space-y-2 px-2">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-mono flex items-center gap-2">
                      <TrendingUp className="h-3 w-3" />
                      Example Solution
                    </span>
                    <p className="text-sm font-bold text-slate-600">
                      {opportunity.exampleSolution}
                    </p>
                  </div>
                </div>
              </GlassCard3D>
            </FloatingContainer>
          ))}
        </div>

      </div>
    </section>
  );
}
