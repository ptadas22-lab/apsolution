import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Globe, 
  Instagram, 
  Facebook, 
  Check, 
  ArrowRight, 
  ArrowLeft,
  Building2,
  MapPin,
  Tag,
  Star,
  Users,
  Calendar,
  MessageCircle,
  Clock
} from "lucide-react";

interface InteractiveSnapshotProps {
  onSnapshotGenerated: (generated: boolean) => void;
  onScrollToSection: (sectionId: string) => void;
}

interface SnapshotData {
  snapshot: {
    businessName: string;
    category: string;
    location: string;
    googleRating: string;
    reviewCount: string;
    websiteFound: string;
    instagramFound: string;
    facebookFound: string;
    onlineBooking: string;
    whatsApp: string;
    businessHours: string;
  };
  observations: string[];
}

export default function InteractiveSnapshot({ onSnapshotGenerated, onScrollToSection }: InteractiveSnapshotProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedIndustryLabel, setSelectedIndustryLabel] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [activeResearchIndex, setActiveResearchIndex] = useState<number>(0);
  const [snapshotData, setSnapshotData] = useState<SnapshotData | null>(null);
  const [error, setError] = useState<string>("");

  const industries = [
    { id: "salon", label: "Salon", icon: "💇" },
    { id: "restaurant", label: "Restaurant", icon: "🍽️" },
    { id: "clinic", label: "Clinic", icon: "🏥" },
    { id: "retail", label: "Retail", icon: "🛍️" },
    { id: "gym", label: "Gym", icon: "🏋️" },
    { id: "manufacturing", label: "Manufacturing", icon: "🏭" },
    { id: "other", label: "Other", icon: "➕" }
  ];

  const researchTasks = [
    "Researching Google Business Profile...",
    "Checking Website...",
    "Finding Instagram...",
    "Reading Reviews...",
    "Checking Facebook...",
    "Preparing Business Snapshot..."
  ];

  // Manage AI Research Animation Sequence
  useEffect(() => {
    if (step === 4) {
      setActiveResearchIndex(0);
      let currentIdx = 0;
      const interval = setInterval(() => {
        currentIdx++;
        if (currentIdx < researchTasks.length) {
          setActiveResearchIndex(currentIdx);
        } else {
          clearInterval(interval);
        }
      }, 1200); // 1.2s per task * 6 tasks = ~7.2 seconds total

      return () => clearInterval(interval);
    }
  }, [step]);

  const handleSelectIndustry = (id: string, label: string) => {
    setSelectedIndustry(id);
    setSelectedIndustryLabel(label);
  };

  const handleFormSubmit = async () => {
    if (!businessName.trim() || !location.trim() || !selectedIndustryLabel) return;

    setStep(4);
    setError("");

    try {
      const response = await fetch("/api/snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          location: location,
          category: selectedIndustryLabel
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch business snapshot");
      }

      const data: SnapshotData = await response.json();
      setSnapshotData(data);
      onSnapshotGenerated(true);
      
      // Wait for the animation to finish (approx 7.5 seconds)
      setTimeout(() => {
        setStep(5);
        setTimeout(() => {
          document.getElementById("snapshot-results")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }, 7500);

    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStep(3);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedIndustry("");
    setSelectedIndustryLabel("");
    setBusinessName("");
    setLocation("");
    setSnapshotData(null);
    onSnapshotGenerated(false);
    setActiveResearchIndex(0);
  };

  const getDynamicEstimates = () => {
    if (!snapshotData) return { revenue: "Rs. 25 Lakhs - 45 Lakhs", busyDays: "Sat, Sun", demographics: "Local Residents" };
    const locLower = snapshotData.snapshot.location.toLowerCase();
    const isIndia = locLower.includes("india") || locLower.includes("mumbai") || locLower.includes("delhi") || locLower.includes("bangalore") || locLower.includes("pune");

    let revenue = "";
    let busyDays = "Weekends (Sat & Sun)";
    let demographics = "Neighbourhood Residents";

    switch (selectedIndustry) {
      case "salon":
        revenue = isIndia ? "Rs. 18L - 35L" : "$120k - $240k";
        busyDays = "Fri, Sat, Sun";
        break;
      case "restaurant":
        revenue = isIndia ? "Rs. 35L - 75L" : "$250k - $550k";
        busyDays = "Sat, Sun (Peak Dinner)";
        break;
      case "clinic":
        revenue = isIndia ? "Rs. 40L - 90L" : "$300k - $650k";
        busyDays = "Mon, Tue, Wed";
        break;
      case "retail":
        revenue = isIndia ? "Rs. 20L - 50L" : "$140k - $320k";
        busyDays = "Sat, Sun (Peak Afternoon)";
        break;
      case "gym":
        revenue = isIndia ? "Rs. 15L - 30L" : "$90k - $180k";
        busyDays = "Mon, Tue, Wed (Morning/Evening)";
        break;
      case "manufacturing":
        revenue = isIndia ? "Rs. 60L - 1.5Cr" : "$450k - $950k";
        busyDays = "Mon to Fri (Standard Shifts)";
        break;
      default:
        revenue = isIndia ? "Rs. 25L - 50L" : "$150k - $300k";
        busyDays = "Fri, Sat";
    }

    return { revenue, busyDays, demographics };
  };

  const estimates = getDynamicEstimates();

  const getImprovements = () => {
    switch (selectedIndustry) {
      case "salon":
        return [
          { title: "Appointment Management", desc: "Enable an automatic booking link in your social bios." },
          { title: "Customer Database Tracking", desc: "Establish a quiet cloud folder tracking clients and formulas." },
          { title: "WhatsApp Schedulers", desc: "Dispatch gentle automated reminders 21 days after visits." }
        ];
      case "restaurant":
        return [
          { title: "Table Reservation System", desc: "Allow guests to request table blocks displaying live status." },
          { title: "Digital Food Ticket Linking", desc: "Centralize dietary limits and allergen warnings." },
          { title: "Google Review Accelerator", desc: "Send automated review invite prompts 2 hours post-dinner." }
        ];
      default:
        return [
          { title: "Interactive Client Portal", desc: "Let clients schedule sessions and track order histories." },
          { title: "Centralized Client Registry", desc: "Save communication records securely." },
          { title: "Quiet Follow-up Routines", desc: "Trigger automatic check-ins after project delivery." }
        ];
    }
  };

  const improvements = getImprovements();

  // Shared Progress Indicator Component
  const ProgressIndicator = () => (
    <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-4 w-full max-w-xs px-4">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#2563EB] rounded-full transition-all duration-700 ease-out" 
          style={{ width: `${(step / 5) * 100}%` }}
        ></div>
      </div>
      <span className="text-[11px] font-bold text-slate-400 font-mono uppercase tracking-widest shrink-0">
        Step {step} of 5
      </span>
    </div>
  );

  return (
    <div className="w-full bg-white relative">
      
      {/* ChatGPT-Style Full Screen Inputs (Steps 1, 2, 3) */}
      {step >= 1 && step <= 3 && (
        <section id="industries" className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 scroll-mt-0">
          <ProgressIndicator />

          {/* Step 1: Category */}
          {step === 1 && (
            <div className="max-w-4xl w-full text-center space-y-12 animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
                What type of business do you own?
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {industries.map((item) => {
                  const isSelected = selectedIndustry === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectIndustry(item.id, item.label)}
                      className={`p-6 rounded-2xl border-2 text-center transition-all duration-200 flex flex-col items-center gap-3 cursor-pointer ${
                        isSelected 
                          ? "border-[#2563EB] bg-blue-50/50 scale-105 shadow-lg shadow-blue-900/5" 
                          : "border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                      } ${item.id === 'other' ? 'col-span-2 sm:col-span-1' : ''}`}
                    >
                      <span className="text-4xl block select-none">{item.icon}</span>
                      <span className={`text-sm font-bold tracking-tight block ${isSelected ? "text-[#2563EB]" : "text-[#0B1F3A]"}`}>
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-8">
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedIndustry}
                  className="bg-[#0B1F3A] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#2563EB] text-white font-bold text-lg px-16 py-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto border-none shadow-xl shadow-blue-900/5"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Name */}
          {step === 2 && (
            <div className="max-w-3xl w-full text-center space-y-12 animate-in slide-in-from-right-8 fade-in duration-500">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
                What is your business name?
              </h2>

              <div className="max-w-xl mx-auto space-y-12">
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. Sameera's Family Salon"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && businessName.trim()) setStep(3) }}
                  className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#2563EB] text-center px-4 py-4 text-3xl sm:text-4xl font-bold focus:outline-none transition-colors placeholder:text-slate-200 text-[#0B1F3A]"
                />

                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => setStep(3)}
                    disabled={!businessName.trim()}
                    className="bg-[#0B1F3A] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#2563EB] text-white font-bold text-lg px-16 py-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto border-none shadow-xl shadow-blue-900/5"
                  >
                    <span>Continue</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  <button onClick={() => setStep(1)} className="text-xs font-bold text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Back
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {step === 3 && (
            <div className="max-w-3xl w-full text-center space-y-12 animate-in slide-in-from-right-8 fade-in duration-500">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] tracking-tight">
                Where is it located?
              </h2>

              <div className="max-w-xl mx-auto space-y-12">
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. Bandra, Mumbai"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && location.trim()) handleFormSubmit() }}
                  className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#2563EB] text-center px-4 py-4 text-3xl sm:text-4xl font-bold focus:outline-none transition-colors placeholder:text-slate-200 text-[#0B1F3A]"
                />

                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={handleFormSubmit}
                    disabled={!location.trim()}
                    className="bg-[#0B1F3A] disabled:bg-slate-200 disabled:text-slate-400 hover:bg-[#2563EB] text-white font-bold text-lg px-16 py-5 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto border-none shadow-xl shadow-blue-900/5"
                  >
                    <span>Analyze Business</span>
                    <Sparkles className="h-5 w-5" />
                  </button>
                  <button onClick={() => setStep(2)} className="text-xs font-bold text-slate-400 hover:text-slate-600 bg-transparent border-none cursor-pointer flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Back
                  </button>
                  {error && <p className="text-red-500 text-xs font-bold mt-2">{error}</p>}
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {/* STEP 4: AI Research Animation Screen */}
      {step === 4 && (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-4">
          <ProgressIndicator />
          <div className="max-w-lg w-full mx-auto space-y-12 animate-in fade-in duration-700">
            
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center p-4 bg-blue-50 rounded-full mb-2">
                <Sparkles className="h-8 w-8 text-[#2563EB] animate-pulse" />
              </div>
              <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
                AI Research Engine
              </h3>
              <p className="text-slate-500 font-semibold">
                Scanning public records for {businessName}...
              </p>
            </div>

            <div className="space-y-3">
              {researchTasks.map((task, idx) => {
                const isCompleted = idx < activeResearchIndex;
                const isActive = idx === activeResearchIndex;
                const isPending = idx > activeResearchIndex;

                return (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                      isActive ? "bg-blue-50 border border-blue-100 scale-[1.02] shadow-sm" :
                      isCompleted ? "bg-white opacity-60" : "bg-transparent opacity-30"
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
        </section>
      )}

      {/* STEP 5: Results Dashboard */}
      {step === 5 && snapshotData && (
        <div id="snapshot-results" className="scroll-mt-0 min-h-screen bg-slate-50/50 py-24 px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            
            <div className="text-center space-y-4 animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-mono mb-4">
                Analysis Complete
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight">
                Business Snapshot
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both">
              
              {[
                { label: "Business Name", value: snapshotData.snapshot.businessName, icon: <Building2 className="h-5 w-5" /> },
                { label: "Category", value: snapshotData.snapshot.category, icon: <Tag className="h-5 w-5" /> },
                { label: "Location", value: snapshotData.snapshot.location, icon: <MapPin className="h-5 w-5" /> },
                { label: "Google Rating", value: snapshotData.snapshot.googleRating, icon: <Star className="h-5 w-5" /> },
                { label: "Review Count", value: snapshotData.snapshot.reviewCount, icon: <Users className="h-5 w-5" /> },
                { label: "Website", value: snapshotData.snapshot.websiteFound, icon: <Globe className="h-5 w-5" /> },
                { label: "Instagram", value: snapshotData.snapshot.instagramFound, icon: <Instagram className="h-5 w-5" /> },
                { label: "Facebook", value: snapshotData.snapshot.facebookFound, icon: <Facebook className="h-5 w-5" /> },
                { label: "Online Booking", value: snapshotData.snapshot.onlineBooking, icon: <Calendar className="h-5 w-5" /> },
                { label: "WhatsApp", value: snapshotData.snapshot.whatsApp, icon: <MessageCircle className="h-5 w-5" /> },
                { label: "Business Hours", value: snapshotData.snapshot.businessHours, icon: <Clock className="h-5 w-5" /> }
              ].map((item, idx) => {
                const isNotFound = !item.value || item.value === "Not Found";
                
                return (
                  <div key={idx} className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 shadow-xl shadow-blue-900/5 hover:border-[#2563EB]/30 transition-colors flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isNotFound ? 'bg-slate-50 text-slate-400' : 'bg-blue-50 text-[#2563EB]'}`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                        {item.label}
                      </span>
                    </div>
                    <div className={`text-lg sm:text-xl font-black leading-tight ${isNotFound ? 'text-slate-300' : 'text-[#0B1F3A]'}`}>
                      {isNotFound ? 'Not Found' : item.value}
                    </div>
                  </div>
                );
              })}

            </div>

            <div className="pt-16 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-10">
                <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">What We Observed</h3>
                <p className="text-slate-500 font-semibold text-sm">
                  These observations are based on publicly available information.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  snapshotData.snapshot.googleRating !== "Not Found" && parseFloat(snapshotData.snapshot.googleRating) >= 4.0 ? "Strong local reputation" : null,
                  snapshotData.snapshot.websiteFound !== "Not Found" ? "Website found" : null,
                  snapshotData.snapshot.instagramFound !== "Not Found" ? "Instagram active" : null,
                  (snapshotData.snapshot.onlineBooking === "Not Found" || snapshotData.snapshot.onlineBooking === "No") ? "Online booking not detected" : "Online booking enabled",
                  "Customer communication appears to rely on WhatsApp"
                ].filter(Boolean).map((obs, idx) => (
                  <div key={idx} className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 flex items-start gap-4 hover:bg-emerald-50 transition-colors">
                    <div className="bg-emerald-100 text-emerald-600 rounded-full p-1.5 shrink-0 mt-0.5">
                      <Check className="h-4 w-4 stroke-[3]" />
                    </div>
                    <p className="text-sm font-bold text-emerald-900 leading-snug">
                      {obs}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-16 pb-8 text-center space-y-12 animate-in fade-in duration-1000 delay-500 fill-mode-both">
              <p className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
                This snapshot is based on publicly available information.
              </p>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#0B1F3A] text-sm font-bold bg-transparent border-none cursor-pointer transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Start New Search</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
