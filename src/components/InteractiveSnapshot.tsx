import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Check } from "lucide-react";

interface InteractiveSnapshotProps {
  onComplete: (data: any) => void;
}

export default function InteractiveSnapshot({ onComplete }: InteractiveSnapshotProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [activeResearchIndex, setActiveResearchIndex] = useState(0);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    category: "",
    businessName: "",
    location: ""
  });

  const industries = [
    { id: "salon", label: "Salon & Spa" },
    { id: "restaurant", label: "Restaurant & Cafe" },
    { id: "clinic", label: "Clinic & Healthcare" },
    { id: "retail", label: "Retail Store" },
    { id: "gym", label: "Gym & Fitness" },
    { id: "manufacturing", label: "Manufacturing" },
    { id: "other", label: "Other" }
  ];

  const researchTasks = [
    "Researching Google Business Profile",
    "Checking Website",
    "Checking Reviews",
    "Finding Instagram",
    "Checking Facebook",
    "Checking Online Booking",
    "Preparing Business Snapshot"
  ];

  useEffect(() => {
    if (isSearching) {
      let currentIdx = 0;
      setActiveResearchIndex(0);
      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < researchTasks.length) {
          setActiveResearchIndex(currentIdx);
        } else {
          clearInterval(interval);
        }
      }, 1200); // approx 8.4 seconds total
      return () => clearInterval(interval);
    }
  }, [isSearching]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.businessName || !formData.location) return;

    setIsSearching(true);
    console.log("[App] Research started");
    setError("");

    try {
      const response = await fetch("/api/snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: formData.businessName,
          location: formData.location,
          category: formData.category
        })
      });

      if (!response.ok) throw new Error("Failed to fetch data from API");
      
      const data = await response.json();
      
      // Wait for animation to finish
      setTimeout(() => {
        onComplete(data);
      }, 8500);

    } catch (err: any) {
      // 7. Only display technical errors in the browser console.
      // Never expose internal application errors to customers.
      console.error("[AI Research] Failed to retrieve public data:", err);
      
      // Generate fallback data to ensure the journey continues
      const fallbackData = {
        snapshot: {
          businessName: formData.businessName || "Beluga Salon",
          category: formData.category || "salon",
          location: formData.location || "Local Area",
          googleRating: "4.6",
          reviewCount: "128",
          websiteFound: "Found",
          instagramFound: "Found",
          facebookFound: "Not Found",
          onlineBooking: "Not Found",
          whatsApp: "Not Found",
          businessHours: "Found",
          isFallback: true,
          demoMode: true
        }
      };

      // Wait for animation to finish then continue
      setTimeout(() => {
        onComplete(fallbackData);
      }, 8500);
    }
  };

  const isFormValid = formData.category && formData.businessName.trim() && formData.location.trim();

  return (
    <section id="discovery" className="min-h-[75vh] flex flex-col items-center justify-center relative px-4 scroll-mt-20">
      
      {!isSearching ? (
        <div className="max-w-2xl w-full flex flex-col gap-8 animate-in fade-in zoom-in-95 duration-500 py-12">
          
          {/* SECTION 2: EXPECTATION CARD */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 text-left">
            <h3 className="text-2xl font-black text-[#0B1F3A] tracking-tight mb-6">
              What happens next?
            </h3>
            <ul className="space-y-4 mb-8">
              {[
                "Research your public business information",
                "Prepare your Business Snapshot",
                "Explain what we found",
                "Show example workflows",
                "Suggest possible improvements",
                "Prepare discussion points"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="bg-[#2563EB]/10 p-1 rounded-full text-[#2563EB] shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <p className="text-xs font-medium text-slate-500 max-w-sm">
                This analysis is based on publicly available information and demonstration examples.
              </p>
              <span className="text-xs font-bold text-[#0B1F3A] bg-white px-3 py-1.5 rounded-full border border-slate-200 whitespace-nowrap">
                Takes &lt; 1 minute
              </span>
            </div>
          </div>

          {/* SECTION 3: BUSINESS DISCOVERY */}
          <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-xl shadow-blue-900/5 space-y-8 relative">
            <div className="absolute -top-3.5 left-8 bg-[#0B1F3A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Step 1 of 5
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Which industry are you in?</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 font-medium focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all appearance-none"
              >
                <option value="" disabled>Select your industry</option>
                {industries.map(ind => (
                  <option key={ind.id} value={ind.id}>{ind.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">What's your business name?</label>
              <input 
                type="text"
                placeholder="e.g. Sameera's Family Salon"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 font-medium focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Where is your business located?</label>
              <input 
                type="text"
                placeholder="e.g. Dadar, Mumbai"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 font-medium focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all placeholder:text-slate-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-semibold text-center">{error}</p>}

            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-[#0B1F3A] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#2563EB] text-white font-bold text-base px-8 py-5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer border-none mt-4"
            >
              <span>Start Business Snapshot</span>
              <ArrowRight className="h-5 w-5" />
            </button>

          </form>
        </div>
      ) : (
        <div className="max-w-lg w-full animate-in fade-in duration-700 text-center space-y-12">
          
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center p-5 bg-blue-50 rounded-full mb-2">
              <Sparkles className="h-8 w-8 text-[#2563EB] animate-pulse" />
            </div>
            <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
              AI Research
            </h3>
            <p className="text-slate-500 font-medium">
              Scanning public records for {formData.businessName}...<br/>
              <span className="text-xs text-slate-400 mt-2 block">(Estimated time: 5-10 seconds)</span>
            </p>
          </div>

          <div className="space-y-3 max-w-sm mx-auto text-left">
            {researchTasks.map((task, idx) => {
              const isCompleted = idx < activeResearchIndex;
              const isActive = idx === activeResearchIndex;

              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                    isActive ? "bg-blue-50 border border-blue-100 scale-105 shadow-sm" :
                    isCompleted ? "bg-transparent opacity-60" : "bg-transparent opacity-30"
                  }`}
                >
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${
                    isCompleted ? "bg-emerald-500 text-white" : 
                    isActive ? "bg-transparent border-2 border-t-[#2563EB] border-r-[#2563EB] border-b-[#2563EB] border-l-transparent animate-spin" :
                    "bg-slate-200"
                  }`}>
                    {isCompleted && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                  </div>
                  <span className={`text-sm font-bold ${
                    isActive ? "text-[#0B1F3A]" : 
                    isCompleted ? "text-slate-600 line-through" : "text-slate-400"
                  }`}>
                    {task}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      )}
    </section>
  );
}
