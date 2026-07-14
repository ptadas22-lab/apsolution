import React from "react";
import { ArrowDown, Workflow } from "lucide-react";
import { WorkflowScenario } from "../lib/types/engine";

interface WorkflowComparisonProps {
  workflows: WorkflowScenario[];
}

export default function WorkflowComparison({ workflows }: WorkflowComparisonProps) {
  return (
    <section id="workflow-comparison" className="py-24 md:py-32 px-4 bg-white relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest font-mono border border-slate-200">
            <Workflow className="h-4 w-4" />
            <span>Workflow Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <span>How Your Business Works Today</span>
            <ArrowDown className="h-6 w-6 text-[#2563EB] sm:-rotate-90 hidden sm:block" />
            <ArrowDown className="h-6 w-6 text-[#2563EB] sm:hidden" />
            <span className="text-slate-400">One Possible Way To Organise It</span>
          </h2>
          <p className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
            Example Only - For Demonstration Purposes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {workflows.map((scenario, idx) => (
            <div key={idx} className="flex flex-col gap-4 animate-in slide-in-from-bottom-8 fade-in duration-700">
              
              {/* Current State */}
              <div className="bg-slate-50 border-2 border-slate-100 rounded-3xl p-8 flex flex-col gap-4 relative">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Current Workflow
                </span>
                <p className="text-lg font-bold text-slate-600 leading-snug">
                  {scenario.currentWorkflow}
                </p>
              </div>

              {/* Arrow Connector */}
              <div className="flex justify-center -my-2 relative z-10">
                <div className="bg-white border-2 border-[#2563EB]/20 rounded-full p-2 text-[#2563EB] shadow-md shadow-blue-900/5">
                  <ArrowDown className="h-5 w-5" />
                </div>
              </div>

              {/* Example State */}
              <div className="bg-blue-50/50 border-2 border-blue-100/50 rounded-3xl p-8 flex flex-col gap-4 relative">
                <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono">
                  Example Workflow
                </span>
                <p className="text-lg font-black text-[#0B1F3A] leading-snug">
                  {scenario.exampleWorkflow}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
