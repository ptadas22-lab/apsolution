import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Check, Brain, Globe, MapPin, Star, Instagram, Facebook, Calendar } from "lucide-react";
import FloatingClipboard from "./ui3d/FloatingClipboard";
import FloatingContainer from "./ui3d/FloatingContainer";
import FloatingBadge from "./ui3d/FloatingBadge";
import ConnectorLine from "./ui3d/ConnectorLine";

interface InteractiveSnapshotProps {
  onComplete: (data: any) => void;
}

const industries = [
  { id: "salon", label: "Salon & Spa" },
  { id: "restaurant", label: "Restaurant & Cafe" },
  { id: "clinic", label: "Medical Clinic" },
  { id: "gym", label: "Gym & Fitness" },
  { id: "retail", label: "Retail & E-commerce" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "professional", label: "Professional Services" },
  { id: "other", label: "Other" }
];

export default function InteractiveSnapshot({ onComplete }: InteractiveSnapshotProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [activeResearchIndex, setActiveResearchIndex] = useState(0);
  const [error, setError] = useState("");
  
  const [formData, setFormData] = useState({
    category: "",
    businessName: "",
    location: ""
  });

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
      
      setTimeout(() => {
        onComplete(data);
      }, 8500);

    } catch (err: any) {
      console.error("[AI Research] Failed to retrieve public data:", err);
      
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

      setTimeout(() => {
        onComplete(fallbackData);
      }, 8500);
    }
  };

  const isFormValid = formData.category && formData.businessName.trim() && formData.location.trim();

  return (
    <section id="discovery" className="min-h-[75vh] flex flex-col items-center justify-center relative px-4 scroll-mt-20">
      
      {!isSearching ? (
        <div className="max-w-2xl w-full flex flex-col gap-12 animate-in fade-in zoom-in-95 duration-500 py-12">
          
          {/* SECTION 3: BUSINESS DISCOVERY */}
          <div className="text-center space-y-3 mb-4">
             <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
               Business Discovery
             </h3>
             <p className="text-slate-500 font-medium">
               Tell us which business we should analyze.
             </p>
          </div>

          <FloatingClipboard className="w-full">
            <form onSubmit={handleSubmit} className="p-2 space-y-6">
              
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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="w-full bg-[#0B1F3A] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#2563EB] text-white font-bold text-base px-8 py-5 rounded-xl transition-all shadow-[0_10px_20px_rgba(11,31,58,0.2)] disabled:shadow-none flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  <span>Start Business Snapshot</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </form>
          </FloatingClipboard>

        </div>
      ) : (
        <div className="max-w-4xl w-full animate-in fade-in duration-700 flex flex-col items-center gap-12 py-12">
          
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
              AI Research
            </h3>
            <p className="text-slate-500 font-medium max-w-md mx-auto leading-relaxed">
              Scanning public records for <span className="font-bold text-[#0B1F3A]">{formData.businessName}</span>...
            </p>
          </div>

          {/* 3D AI Research Visual */}
          <div className="relative w-full h-80 sm:h-96 flex items-center justify-center perspective-[1000px]">
            
            {/* Central AI Core */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <div className="p-6 bg-[#2563EB]/10 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.4)] border border-[#2563EB]/30 animate-pulse relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                <Brain className="h-12 w-12 text-[#2563EB] relative z-10" />
              </div>
            </div>

            {/* Orbiting Sources */}
            <FloatingContainer delay={0} yOffset={10} duration={8} className="absolute top-10 left-10 sm:left-1/4 z-10">
               <FloatingBadge depth={20} className="text-slate-700">
                 <Globe className="w-4 h-4 mr-2 text-[#2563EB]" /> Google
               </FloatingBadge>
            </FloatingContainer>

            <FloatingContainer delay={1} yOffset={15} duration={10} className="absolute bottom-20 left-4 sm:left-1/5 z-10">
               <FloatingBadge depth={30} className="text-slate-700">
                 <MapPin className="w-4 h-4 mr-2 text-rose-500" /> Maps
               </FloatingBadge>
            </FloatingContainer>

            <FloatingContainer delay={2} yOffset={12} duration={9} className="absolute top-1/4 right-8 sm:right-1/4 z-10">
               <FloatingBadge depth={40} className="text-slate-700">
                 <Instagram className="w-4 h-4 mr-2 text-pink-600" /> Instagram
               </FloatingBadge>
            </FloatingContainer>

            <FloatingContainer delay={0.5} yOffset={18} duration={11} className="absolute bottom-1/4 right-10 sm:right-1/5 z-10">
               <FloatingBadge depth={15} className="text-slate-700">
                 <Star className="w-4 h-4 mr-2 text-amber-500" /> Reviews
               </FloatingBadge>
            </FloatingContainer>

            <FloatingContainer delay={1.5} yOffset={14} duration={12} className="absolute top-8 right-1/2 translate-x-32 z-10">
               <FloatingBadge depth={25} className="text-slate-700">
                 <Calendar className="w-4 h-4 mr-2 text-emerald-500" /> Booking
               </FloatingBadge>
            </FloatingContainer>

          </div>

          <div className="space-y-3 max-w-sm w-full mx-auto text-left">
            {researchTasks.map((task, idx) => {
              const isCompleted = idx < activeResearchIndex;
              const isActive = idx === activeResearchIndex;

              return (
                <div 
                  key={idx} 
                  className={`flex items-center gap-4 p-3 rounded-2xl transition-all duration-500 ${
                    isActive ? "bg-blue-50/80 border border-blue-100 scale-[1.02] shadow-sm" :
                    isCompleted ? "bg-transparent opacity-60" : "bg-transparent opacity-30"
                  }`}
                >
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 ${
                    isCompleted ? "bg-emerald-500 text-white" : 
                    isActive ? "bg-transparent border-[1.5px] border-t-[#2563EB] border-r-[#2563EB] border-b-[#2563EB] border-l-transparent animate-spin" :
                    "bg-slate-200"
                  }`}>
                    {isCompleted && <Check className="h-3 w-3 stroke-[3]" />}
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
