import React from "react";
import { Sparkles } from "lucide-react";

interface ChooseBusinessProps {
  onSelectBusiness: (businessType: string, businessLabel: string) => void;
  selectedType: string;
}

export default function ChooseBusiness({ onSelectBusiness, selectedType }: ChooseBusinessProps) {
  const industries = [
    { id: "salon", label: "Salon", icon: "💇" },
    { id: "restaurant", label: "Restaurant", icon: "🍽️" },
    { id: "clinic", label: "Clinic", icon: "🏥" },
    { id: "retail", label: "Retail Shop", icon: "🛍️" },
    { id: "gym", label: "Gym", icon: "🏋️" },
    { id: "education", label: "Education", icon: "🏫" },
    { id: "manufacturing", label: "Manufacturing", icon: "🏭" },
    { id: "more", label: "More", icon: "➕" }
  ];

  return (
    <section 
      id="industries" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-12 text-center max-w-4xl mx-auto">
        
        {/* Simple Header */}
        <div className="space-y-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
            Section 03 • Choose Your Business
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Choose Your Business
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            We already understand the challenges of your industry. Select below to see customized insights immediately.
          </p>
        </div>

        {/* Beautiful large industry cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {industries.map((item) => {
            const isSelected = selectedType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectBusiness(item.id, item.label)}
                className={`group p-6 rounded-2xl border text-center transition-all duration-300 flex flex-col justify-center items-center gap-3.5 cursor-pointer relative overflow-hidden ${
                  isSelected 
                    ? "bg-[#0B1F3A] border-[#0B1F3A] shadow-lg shadow-[#0B1F3A]/10 scale-[1.03] text-white" 
                    : "bg-white border-slate-200 hover:border-slate-350 hover:shadow-md text-slate-700"
                }`}
                id={`business-card-${item.id}`}
              >
                {/* Background glow when selected */}
                {isSelected && (
                  <span className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none"></span>
                )}

                {/* Card Icon */}
                <span className="text-3.5xl transition-transform duration-300 group-hover:scale-110 block select-none">
                  {item.icon}
                </span>

                {/* Card Name */}
                <span className={`text-xs sm:text-sm font-bold tracking-tight block ${
                  isSelected ? "text-white" : "text-[#0B1F3A]"
                }`}>
                  {item.label}
                </span>

                {/* Active mark indicator */}
                {isSelected && (
                  <span className="absolute bottom-2 h-1 w-6 bg-[#2563EB] rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
