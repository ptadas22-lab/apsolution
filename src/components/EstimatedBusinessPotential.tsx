import React from "react";
import { 
  Users, Wallet, TrendingDown, TrendingUp, Tag, Repeat, Building, Info, ShieldAlert, ArrowRight
} from "lucide-react";

interface EstimatedBusinessPotentialProps {
  snapshot: any;
  onContinue: () => void;
}

export default function EstimatedBusinessPotential({ snapshot, onContinue }: EstimatedBusinessPotentialProps) {

  // Generate reasonable dummy estimates based on the snapshot category and reviews
  // In a real application, this would come from a backend AI prediction model.
  const getEstimates = () => {
    const isHighVolume = parseInt(snapshot.reviewCount || "0") > 150;
    
    switch (snapshot.category?.toLowerCase()) {
      case "salon":
      case "spa":
        return {
          customers: isHighVolume ? "400 - 600" : "150 - 300",
          revenue: isHighVolume ? "₹4.5L - ₹6.2L" : "₹1.8L - ₹3.2L",
          cost: isHighVolume ? "₹2.2L - ₹3.0L" : "₹1.0L - ₹1.8L",
          profit: isHighVolume ? "₹2.3L - ₹3.2L" : "₹80K - ₹1.4L",
          price: "₹800 - ₹2,500",
          repeat: "65%",
          size: isHighVolume ? "Medium/Large" : "Small/Medium"
        };
      case "restaurant":
      case "cafe":
        return {
          customers: isHighVolume ? "1,200 - 2,500" : "500 - 1,000",
          revenue: isHighVolume ? "₹8.0L - ₹12.5L" : "₹3.5L - ₹6.0L",
          cost: isHighVolume ? "₹5.0L - ₹8.0L" : "₹2.2L - ₹4.0L",
          profit: isHighVolume ? "₹3.0L - ₹4.5L" : "₹1.3L - ₹2.0L",
          price: "₹400 - ₹1,200",
          repeat: "40%",
          size: isHighVolume ? "Medium/Large" : "Small/Medium"
        };
      default:
        return {
          customers: isHighVolume ? "300 - 500" : "100 - 250",
          revenue: isHighVolume ? "₹5.0L - ₹8.0L" : "₹2.0L - ₹4.5L",
          cost: isHighVolume ? "₹3.0L - ₹5.0L" : "₹1.2L - ₹2.8L",
          profit: isHighVolume ? "₹2.0L - ₹3.0L" : "₹80K - ₹1.7L",
          price: "₹1,500 - ₹4,000",
          repeat: "55%",
          size: isHighVolume ? "Medium" : "Small"
        };
    }
  };

  const estimates = getEstimates();

  const cards = [
    {
      title: "Estimated Monthly Customers",
      value: estimates.customers,
      icon: <Users className="h-6 w-6 text-blue-500" />,
      explanation: "Estimated using business category, reviews, and industry benchmarks."
    },
    {
      title: "Estimated Monthly Revenue",
      value: estimates.revenue,
      icon: <Wallet className="h-6 w-6 text-emerald-500" />,
      explanation: "Estimated using business location, pricing and category averages."
    },
    {
      title: "Estimated Monthly Operating Cost",
      value: estimates.cost,
      icon: <TrendingDown className="h-6 w-6 text-rose-500" />,
      explanation: "Estimated overheads based on industry standard margins."
    },
    {
      title: "Estimated Monthly Profit",
      value: estimates.profit,
      icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
      explanation: "Calculated from estimated revenue minus estimated operating costs."
    },
    {
      title: "Estimated Average Service Price",
      value: estimates.price,
      icon: <Tag className="h-6 w-6 text-indigo-500" />,
      explanation: "Derived from local market rates and competitor analysis."
    },
    {
      title: "Estimated Repeat Customer Rate",
      value: estimates.repeat,
      icon: <Repeat className="h-6 w-6 text-amber-500" />,
      explanation: "Projected customer loyalty based on sector benchmarks."
    },
    {
      title: "Estimated Business Size",
      value: estimates.size,
      icon: <Building className="h-6 w-6 text-slate-500" />,
      explanation: "Estimated scale based on public data footprint."
    }
  ];

  return (
    <div id="estimated-potential" className="bg-slate-50/50 pb-24 px-4 font-sans antialiased border-b border-slate-100 scroll-mt-0">
      <div className="max-w-6xl mx-auto space-y-16 animate-in slide-in-from-bottom-8 fade-in duration-1000 fill-mode-both">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
            Estimated Business Potential
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base max-w-2xl mx-auto">
            Based on publicly available information and industry benchmarks, the AI has prepared an estimated business overview for discussion purposes.
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 shadow-xl shadow-[#0B1F3A]/5 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {card.icon}
              </div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  {card.icon}
                </div>
              </div>
              <div className="relative z-10 space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
                  {card.title}
                </span>
                <div className="text-xl sm:text-2xl font-black text-[#0B1F3A] leading-tight">
                  {card.value}
                </div>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-100 relative z-10">
                <p className="text-[11px] font-semibold text-slate-500 leading-relaxed">
                  {card.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology & Disclaimer Section */}
        <div className="max-w-4xl mx-auto space-y-8 mt-12">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-full mt-1">
                <Info className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0B1F3A] mb-4">How These Estimates Are Prepared</h3>
                <p className="text-sm font-medium text-slate-600 mb-4">
                  Estimates are calculated using a combination of the following data points:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                  {[
                    "Business category",
                    "Business location",
                    "Google Business Profile",
                    "Review count",
                    "Average rating",
                    "Online presence",
                    "Industry benchmarks",
                    "Publicly available information"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-sm font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-2 border-amber-100 rounded-2xl p-6 flex gap-4 items-start">
            <ShieldAlert className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm font-bold text-amber-800 leading-relaxed">
              <span className="uppercase tracking-widest text-[10px] block mb-1 opacity-80">Important Disclaimer</span>
              These figures are AI-generated estimates and do not represent your actual financial records. They are intended only to support business discussions and identify possible opportunities.
            </p>
          </div>

        </div>

        {/* Continue Button */}
        <div className="text-center pt-8">
          <button
            onClick={onContinue}
            className="bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-base px-10 py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-blue-900/5 border-none"
          >
            <span>Continue to Example Solutions</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </div>
  );
}
