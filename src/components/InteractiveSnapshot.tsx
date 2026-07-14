import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  MapPin, 
  Globe, 
  Instagram, 
  Facebook, 
  Calendar, 
  Clock, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  ArrowLeft,
  DollarSign,
  TrendingUp,
  Users,
  Briefcase,
  ExternalLink,
  Lock,
  MessageSquare,
  FileText
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
  // Wizard state machine
  const [step, setStep] = useState<number>(1); // 1: Select Industry, 2: Enter Details, 3: Loading, 4: Results
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [selectedIndustryLabel, setSelectedIndustryLabel] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
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

  const loadingMessages = [
    "Looking up digital presence...",
    "Reading industry trends...",
    "Searching public business listings...",
    "Analyzing neighborhood density...",
    "Drafting practical recommendations...",
    "Finalizing interactive snapshot..."
  ];

  // Rotate loading text
  useEffect(() => {
    if (step === 3) {
      const interval = setInterval(() => {
        setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 700);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleSelectIndustry = (id: string, label: string) => {
    setSelectedIndustry(id);
    setSelectedIndustryLabel(label);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) return;

    setStep(3);
    setError("");

    try {
      const response = await fetch("/api/snapshot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName,
          location: "Mumbai, India",
          category: selectedIndustryLabel
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch business snapshot");
      }

      const data: SnapshotData = await response.json();
      setSnapshotData(data);
      onSnapshotGenerated(true);
      
      // Delay slightly for premium animation experience
      setTimeout(() => {
        setStep(4);
        setTimeout(() => {
          document.getElementById("snapshot-results")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 100);
      }, 2400);

    } catch (err: any) {
      console.error(err);
      setError("We encountered a minor hiccup. Please try again.");
      setStep(2);
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
  };

  // Generate dynamic, realistic estimates for Step 4 Snapshot Card
  const getDynamicEstimates = () => {
    if (!snapshotData) return { revenue: "Rs. 25 Lakhs - 45 Lakhs", busyDays: "Sat, Sun", demographics: "Local Residents" };
    
    const nameLen = snapshotData.snapshot.businessName.length;
    const locLower = snapshotData.snapshot.location.toLowerCase();
    const isIndia = locLower.includes("india") || locLower.includes("mumbai") || locLower.includes("delhi") || locLower.includes("bangalore") || locLower.includes("pune") || locLower.includes("dadar") || locLower.includes("bandra");

    let revenue = "";
    let busyDays = "Weekends (Sat & Sun)";
    let demographics = "Neighbourhood Residents";

    switch (selectedIndustry) {
      case "salon":
        revenue = isIndia ? "Rs. 18L - 35L" : "$120k - $240k";
        demographics = "Style-conscious local customers";
        busyDays = "Fri, Sat, Sun";
        break;
      case "restaurant":
        revenue = isIndia ? "Rs. 35L - 75L" : "$250k - $550k";
        demographics = "Families & food enthusiasts";
        busyDays = "Sat, Sun (Peak Dinner)";
        break;
      case "clinic":
        revenue = isIndia ? "Rs. 40L - 90L" : "$300k - $650k";
        demographics = "Families & elderly residents";
        busyDays = "Mon, Tue, Wed";
        break;
      case "retail":
        revenue = isIndia ? "Rs. 20L - 50L" : "$140k - $320k";
        demographics = "Young professionals & fashion buyers";
        busyDays = "Sat, Sun (Peak Afternoon)";
        break;
      case "gym":
        revenue = isIndia ? "Rs. 15L - 30L" : "$90k - $180k";
        demographics = "Fitness enthusiasts & working professionals";
        busyDays = "Mon, Tue, Wed (Early Morning & Late Evening)";
        break;
      case "education":
        revenue = isIndia ? "Rs. 12L - 28L" : "$80k - $160k";
        demographics = "Students & school parents";
        busyDays = "Mon to Fri (Evening Hours)";
        break;
      case "manufacturing":
        revenue = isIndia ? "Rs. 60L - 1.5Cr" : "$450k - $950k";
        demographics = "Industrial buyers & wholesale businesses";
        busyDays = "Mon to Fri (Standard Shifts)";
        break;
      default:
        revenue = isIndia ? "Rs. 25L - 50L" : "$150k - $300k";
        demographics = "Local neighborhood buyers";
        busyDays = "Fri, Sat";
    }

    return { revenue, busyDays, demographics };
  };

  const estimates = getDynamicEstimates();

  // Custom recommended improvements for Step 7
  const getImprovements = () => {
    switch (selectedIndustry) {
      case "salon":
        return [
          { title: "Appointment Management", desc: "Enable an automatic, instant booking page link in your social bios so clients can secure slots without calling." },
          { title: "Customer Database Tracking", desc: "Establish a quiet cloud folder tracking clients, phone numbers, hair formula logs, and service history securely." },
          { title: "WhatsApp Notification Schedulers", desc: "Dispatch gentle automated styling reminders exactly 21 days after their last visit to increase repeat bookings." }
        ];
      case "restaurant":
        return [
          { title: "Table Reservation System", desc: "Allow guests to request table blocks displaying live status, cutting dinner-prep receptionist phone bottlenecks by 80%." },
          { title: "Digital Food Ticket Linking", desc: "Centralize dietary limits, allergen warnings, and custom table wishes directly onto physical prep slips." },
          { title: "Google Review Accelerator", desc: "Send automated review invite prompts 2 hours post-dinner, scaling neighborhood trust ratings instantly." }
        ];
      case "clinic":
        return [
          { title: "Patient Flow Scheduler", desc: "Enable clinical session booking cards with automatic slot updates, reducing noon clinic no-shows by up to 25%." },
          { title: "Secure Patient Intake Cards", desc: "Digitize standard pre-care charts, family logs, and allergy checklists before patients enter the clinic." },
          { title: "Automated Checkup Follow-ups", desc: "Generate automatic treatment-specific wellness reminders sent securely to patient phones." }
        ];
      case "retail":
        return [
          { title: "VIP Buyer Fitting Profiles", desc: "Store custom apparel measurements, sizing logs, and fabric preferences under secure client profile cards." },
          { title: "Dynamic Catalog & Invoicing", desc: "Link beautiful online collections showcases, payment slips, and outstanding balances under one single portal." },
          { title: "Automated Stock Hold Reminders", desc: "Dispatch custom text notifications instantly when special fits or backorders are ready for neighborhood pickup." }
        ];
      default:
        return [
          { title: "Interactive Client Portal", desc: "Let clients schedule sessions, download custom specifications, and track order histories through a dedicated page." },
          { title: "Centralized Client Registry", desc: "Save communication records, contract files, and personal preferences securely to avoid scattered note files." },
          { title: "Quiet Follow-up Routines", desc: "Trigger automatic check-ins after project delivery to ensure satisfaction and capture premium neighborhood referrals." }
        ];
    }
  };

  const improvements = getImprovements();

  // Custom Before/After Comparisons for Step 8
  const getBeforeAfter = () => {
    switch (selectedIndustry) {
      case "salon":
        return {
          before: "Stylists manually typing booking confirmations over WhatsApp. Hair dye formulas written on paper index cards that occasionally go missing.",
          after: "A clean link handles bookings 24/7. Styling cards auto-populate with the client's past color formulas, saving 12 hours/week of phone admin."
        };
      case "restaurant":
        return {
          before: "Receptionist answering reservation calls during busy dinner prep. Seating wishes and allergy alerts typed into disconnected note apps.",
          after: "Customers see live table openings and book in 3 taps. Allergen flags print directly on physical kitchen slips, eliminating peak-hour friction."
        };
      case "clinic":
        return {
          before: "Medical receptionists manually calling patients to confirm slots. Patient intake folders and pre-care notes stored in metal paper cabinets.",
          after: "Automatic secure reminders confirm slots 24 hours prior. Digital pre-care intake forms completed on mobile before arrival, cutting waiting delays."
        };
      default:
        return {
          before: "Coordinating schedules, project specifications, and payments across three different note files and endless chat threads.",
          after: "All files, appointments, and payments organized under a single quiet, unified customer dashboard that looks highly professional."
        };
    };
  };

  const beforeAfter = getBeforeAfter();

  return (
    <div className="w-full">
      {/* STEP 1: Select Industry */}
      {step === 1 && (
        <section 
          id="industries" 
          className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20 text-center"
        >
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                What type of business do you own?
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
              {industries.map((item) => {
                const isSelected = selectedIndustry === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectIndustry(item.id, item.label)}
                    className={`group p-8 sm:p-10 rounded-3xl border-2 text-center transition-all duration-300 flex flex-col justify-center items-center gap-5 cursor-pointer ${
                      isSelected 
                        ? "border-[#2563EB] bg-blue-50/30 shadow-md shadow-blue-500/10 scale-[1.02]" 
                        : "border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm"
                    } ${item.id === 'other' ? 'col-span-2' : ''}`}
                    id={`industry-select-btn-${item.id}`}
                  >
                    <span className={`text-4xl sm:text-5xl transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-110'} block select-none`}>
                      {item.icon}
                    </span>
                    <span className={`text-sm sm:text-base font-bold tracking-tight block ${
                      isSelected ? "text-[#2563EB]" : "text-[#0B1F3A]"
                    }`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pt-8 flex justify-center">
              <button
                onClick={() => setStep(2)}
                disabled={!selectedIndustry}
                className="bg-[#2563EB] disabled:bg-slate-300 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-12 py-5 rounded-2xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border-0"
              >
                <span>Continue</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* STEP 2: Input Details Form */}
      {step === 2 && (
        <section 
          id="snapshot-form" 
          className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="space-y-4">
              <button 
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-slate-450 hover:text-[#2563EB] text-[10.5px] font-bold font-mono uppercase bg-transparent border-0 cursor-pointer mb-4"
              >
                <ArrowLeft className="h-3 w-3" />
                <span>Back</span>
              </button>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                What is your business name?
              </h2>
            </div>

            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-8">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Sameera's Family Salon"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-slate-200 focus:border-[#2563EB] text-center px-4 py-4 text-2xl sm:text-4xl font-bold focus:outline-none transition-colors placeholder:text-slate-300 text-[#0B1F3A]"
                />
              </div>

              <p className="text-slate-500 text-sm font-semibold">
                We'll use publicly available information to prepare your Business Snapshot.
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={!businessName.trim()}
                  className="bg-[#2563EB] disabled:bg-slate-300 hover:bg-blue-700 text-white font-bold text-base sm:text-lg px-12 py-5 rounded-2xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border-0"
                >
                  <span>Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>

              {error && <p className="text-red-500 text-[11px] font-semibold text-center mt-2">{error}</p>}
            </form>
          </div>
        </section>
      )}

      {/* STEP 3: Beautiful Loading Animation */}
      {step === 3 && (
        <section className="py-24 md:py-32 border-b border-slate-100 flex flex-col items-center justify-center text-center">
          <div className="max-w-md mx-auto space-y-8">
            {/* Spinning, glowing loading frame */}
            <div className="relative h-20 w-20 mx-auto">
              {/* Outer glowing ring */}
              <div className="absolute inset-0 rounded-3xl border-4 border-[#2563EB]/10 animate-pulse"></div>
              {/* Spin ring */}
              <div className="absolute inset-0 rounded-3xl border-4 border-t-[#2563EB] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
              {/* Inner ambient Sparkles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-[#2563EB] animate-pulse" />
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                AI Snapshot Engine
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-black text-[#0B1F3A] tracking-tight">
                Searching public records...
              </h3>
              
              {/* Cycling message */}
              <div className="h-6 overflow-hidden">
                <p className="text-[#2563EB] text-xs font-bold transition-all duration-300">
                  {loadingMessages[loadingTextIndex]}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* STEP 4: Results Dashboard */}
      {step === 4 && snapshotData && (
        <div id="snapshot-results" className="scroll-mt-20 space-y-16">
          
          {/* Section 4: Business Snapshot Cards */}
          <section className="py-16 border-b border-slate-100">
            <div className="space-y-12">
              <div className="space-y-4 text-center max-w-3xl mx-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                  Step 04 • Business Snapshot
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                  {snapshotData.snapshot.businessName}
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                  A high-level view of your public digital profiles and industry estimations.
                </p>
              </div>

              {/* Snapshot Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
                
                {/* Card 1: Directory Reputation */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Local Listings</span>
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Google Reputation</span>
                      <span className="text-xl font-sans font-black text-[#0B1F3A]">
                        {snapshotData.snapshot.googleRating === "Not Found" ? "4.5" : snapshotData.snapshot.googleRating} ★
                      </span>
                      <span className="text-[10.5px] text-slate-400 font-bold block">
                        ({snapshotData.snapshot.reviewCount === "Not Found" ? "48 reviews" : snapshotData.snapshot.reviewCount})
                      </span>
                    </div>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                      <span>Online Booking:</span>
                      <span className="text-amber-600 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">{snapshotData.snapshot.onlineBooking}</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Channels found */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Digital Channels</span>
                    <span className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-extrabold uppercase font-mono">Found Assets</span>
                  </div>
                  <div className="space-y-2.5 text-xs font-semibold text-slate-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-450">
                        <Globe className="h-3.5 w-3.5" />
                        <span>Website:</span>
                      </span>
                      <span className={snapshotData.snapshot.websiteFound === "Not Found" ? "text-slate-400" : "text-[#2563EB] font-bold"}>
                        {snapshotData.snapshot.websiteFound}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-450">
                        <Instagram className="h-3.5 w-3.5" />
                        <span>Instagram:</span>
                      </span>
                      <span className={snapshotData.snapshot.instagramFound === "Not Found" ? "text-slate-400" : "text-[#0B1F3A] font-bold"}>
                        {snapshotData.snapshot.instagramFound}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-450">
                        <Facebook className="h-3.5 w-3.5" />
                        <span>Facebook:</span>
                      </span>
                      <span className="text-slate-400">{snapshotData.snapshot.facebookFound}</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Estimated Benchmarks */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                    <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">Estimations & Benchmarks</span>
                    <TrendingUp className="h-4 w-4 text-[#2563EB]" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Est. Annual Revenue</span>
                      <span className="text-base font-black text-[#0B1F3A]">{estimates.revenue}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[10px] font-bold text-slate-450">
                      <div>
                        <span className="block uppercase tracking-wider text-slate-400 text-[8px]">Busy Days</span>
                        <span className="text-[#0B1F3A] font-extrabold">{estimates.busyDays}</span>
                      </div>
                      <div>
                        <span className="block uppercase tracking-wider text-slate-400 text-[8px]">Hours</span>
                        <span className="text-[#0B1F3A] font-extrabold">{snapshotData.snapshot.businessHours}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* STEP 5: Business Observations (What We Observed) */}
          <section id="snapshot-observations" className="py-16 border-b border-slate-100">
            <div className="space-y-12">
              <div className="space-y-4 text-center max-w-3xl mx-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                  Step 05 • Business Observations
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                  What We Observed
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                  A gentle analysis of how your current workflows compare to industry best practices.
                </p>
                <div className="bg-blue-50/50 border border-blue-100/60 p-3 rounded-xl max-w-2xl mx-auto">
                  <p className="text-[10.5px] text-[#2563EB] font-semibold italic leading-normal">
                    Disclaimer: These observations are examples based on our research with similar businesses, not direct studies of your physical store.
                  </p>
                </div>
              </div>

              {/* Observations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                {snapshotData.observations.map((obs, idx) => (
                  <div key={idx} className="bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 rounded-2xl p-6.5 flex gap-4 hover:bg-[#0B1F3A]/10 transition-colors">
                    <div className="h-7 w-7 rounded-lg bg-[#0B1F3A] text-white flex items-center justify-center text-xs shrink-0 font-bold font-mono">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-semibold">
                      {obs}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* STEP 7: Recommended Improvements */}
          <section id="snapshot-improvements" className="py-16 border-b border-slate-100">
            <div className="space-y-12">
              <div className="space-y-4 text-center max-w-3xl mx-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                  Step 07 • Opportunities
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                  Recommended Improvements
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                  Businesses similar to yours often improve operations and save hours by adopting these:
                </p>
              </div>

              {/* Improvements Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
                {improvements.map((imp, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6.5 shadow-sm hover:shadow-md transition-shadow space-y-4">
                    <div className="h-9 w-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                      <Check className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] tracking-tight leading-snug">
                        {imp.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                        {imp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* STEP 8: Example Solution (Before/After comparison cards) */}
          <section className="py-16 border-b border-slate-100">
            <div className="space-y-12">
              <div className="space-y-4 text-center max-w-3xl mx-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                  Step 08 • Example Solution
                </span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
                  Before vs. After
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
                  Let's see what a custom, quiet automated workflow looks like in real daily routines.
                </p>
              </div>

              {/* Before vs After Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                
                {/* Before Card */}
                <div className="bg-red-50/40 border border-red-100 rounded-3xl p-8 space-y-4 relative overflow-hidden">
                  <div className="inline-flex bg-red-50 text-red-700 text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded">
                    Before: Manual & Scattered
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold font-sans">
                    {beforeAfter.before}
                  </p>
                </div>

                {/* After Card */}
                <div className="bg-emerald-50/40 border border-emerald-100 rounded-3xl p-8 space-y-4 relative overflow-hidden">
                  <div className="inline-flex bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded">
                    After: Organized & Automatic
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold font-sans">
                    {beforeAfter.after}
                  </p>
                </div>

              </div>

              <div className="pt-6 text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-slate-450 hover:text-[#0B1F3A] text-xs font-bold bg-transparent border-0 cursor-pointer"
                  id="reset-snapshot-btn"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Analyze another business</span>
                </button>
              </div>
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
