import React from "react";
import { 
  Building2, MapPin, Tag, Star, Users, Globe, Instagram, Facebook, Calendar, MessageCircle, Clock, Check, Info, ShieldAlert, ArrowRight, Phone, Navigation2, Brain
} from "lucide-react";
import { RecommendationChain, StatusIndicator } from "../lib/types/engine";
import DepthCard from "./ui3d/DepthCard";
import FloatingContainer from "./ui3d/FloatingContainer";
import ConnectorLine from "./ui3d/ConnectorLine";

interface SnapshotResultsProps {
  snapshot: any;
  recommendations: RecommendationChain[];
}

export default function SnapshotResults({ snapshot, recommendations }: SnapshotResultsProps) {
  
  const isNotFound = (val: string) => !val || val === "Not Found" || val === "No";

  const getConfidenceColor = (conf: string) => {
    switch (conf) {
      case "High": return "bg-emerald-100 text-emerald-700";
      case "Medium": return "bg-blue-100 text-blue-700";
      case "Low": return "bg-slate-100 text-slate-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  const cardGroups = [
    {
      title: "Business Information",
      items: [
        { label: "Business Name", value: snapshot.businessName, source: "Public Records", icon: <Building2 className="h-5 w-5" /> },
        { label: "Industry", value: snapshot.category, source: "Public Directories", icon: <Tag className="h-5 w-5" /> },
        { label: "Location", value: snapshot.location, source: "Google Maps", icon: <MapPin className="h-5 w-5" /> }
      ]
    },
    {
      title: "Online Presence",
      items: [
        { label: "Website", value: snapshot.websiteFound, source: "Official Website", icon: <Globe className="h-5 w-5" /> },
        { label: "Google Rating", value: snapshot.googleRating, source: "Google Business Profile", icon: <Star className="h-5 w-5" /> },
        { label: "Google Reviews", value: snapshot.reviewCount, source: "Google Business Profile", icon: <Users className="h-5 w-5" /> },
        { label: "Social Media", value: snapshot.instagramFound !== "Not Found" ? snapshot.instagramFound : snapshot.facebookFound, source: "Instagram / Facebook", icon: <Instagram className="h-5 w-5" /> }
      ]
    },
    {
      title: "Customer Access",
      items: [
        { label: "Phone", value: snapshot.phone || "Not Found", source: "Google Business Profile", icon: <Phone className="h-5 w-5" /> },
        { label: "WhatsApp", value: snapshot.whatsApp, source: "WhatsApp Business", icon: <MessageCircle className="h-5 w-5" /> },
        { label: "Online Booking", value: snapshot.onlineBooking, source: "Public Directories", icon: <Calendar className="h-5 w-5" /> },
        { label: "Directions", value: snapshot.directions || "Not Found", source: "Google Maps", icon: <Navigation2 className="h-5 w-5" /> }
      ]
    }
  ];

  const renderCard = (item: any, idx: number) => {
    const notFound = isNotFound(item.value);
    
    // Status indicator
    let statusText = "Available";
    let statusColor = "text-blue-600 bg-blue-50 border border-blue-100";
    if (notFound) {
      statusText = "Not Found";
      statusColor = "text-slate-500 bg-slate-100 border border-slate-200";
    } else if (item.value === "Needs Review" || item.value === "No" || (item.label === "Social Media" && item.value === "Needs Review")) {
      statusText = "Needs Review";
      statusColor = "text-amber-600 bg-amber-50 border border-amber-100";
    }

    return (
      <DepthCard key={idx} depth={10} className="p-6 transition-all flex flex-col gap-5 relative overflow-hidden group">
        
        {/* Status Indicator */}
        <div className="absolute top-6 right-6">
          <span className={`text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${statusColor}`}>
            {statusText}
          </span>
        </div>

        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-2xl ${notFound ? 'bg-slate-50 text-slate-400' : 'bg-blue-50 text-[#2563EB]'}`}>
              {item.icon}
            </div>
          </div>
        </div>
        
        <div className="space-y-1 mt-2">
          <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">
            {item.label}
          </span>
          <div className={`text-lg font-black leading-tight ${notFound ? 'text-slate-300' : 'text-[#0B1F3A]'}`}>
            {notFound ? 'Not Found' : item.value}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 mt-auto">
          {item.source.includes("Google") && <Globe className="h-3.5 w-3.5 text-slate-400" />}
          {item.source.includes("Website") && <Globe className="h-3.5 w-3.5 text-slate-400" />}
          {item.source.includes("Public") && <Users className="h-3.5 w-3.5 text-slate-400" />}
          {item.source.includes("Instagram") && <Instagram className="h-3.5 w-3.5 text-slate-400" />}
          {item.source.includes("WhatsApp") && <MessageCircle className="h-3.5 w-3.5 text-slate-400" />}
          <span className="text-[10px] font-bold text-slate-500 font-mono uppercase tracking-widest">
            Source: {item.source}
          </span>
        </div>
      </DepthCard>
    );
  };

  return (
    <div id="snapshot-results" className="scroll-mt-0 min-h-screen bg-slate-50/50 py-24 px-4 font-sans antialiased border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* PHASE 4: BUSINESS SNAPSHOT */}
        <section className="space-y-12 animate-in slide-in-from-bottom-4 fade-in duration-700">
          <div className="text-center space-y-4">
            <span className="inline-block bg-[#2563EB]/10 text-[#2563EB] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-mono">
              Step 2 of 5
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] tracking-tight">
              Business Snapshot
            </h2>
            
            {/* New Banner */}
            <div className="max-w-2xl mx-auto mt-6 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Check className="h-5 w-5 text-emerald-500 stroke-[3]" />
                <span className="text-[#0B1F3A] font-black uppercase tracking-widest text-sm">Business Snapshot Ready</span>
              </div>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                We searched publicly available information about this business. If some information could not be found, demonstration data is used only to explain how the Business Snapshot works.
              </p>
            </div>
          </div>

          {/* New Introduction */}
          <div className="max-w-3xl mx-auto text-center space-y-4 pt-8">
            <h3 className="text-2xl font-black text-[#0B1F3A]">What We Found</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              We researched publicly available information from sources such as Google Business Profile, Maps, Websites and Social Media. This snapshot helps us understand how your business appears online before making any recommendations.
            </p>
          </div>

          {/* Organized Groups */}
          <div className="space-y-16 pt-8">
            {cardGroups.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-6">
                <h4 className="text-xl font-black text-[#0B1F3A] border-b border-slate-200 pb-4">
                  {group.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {group.items.map((item, idx) => renderCard(item, idx))}
                </div>
              </div>
            ))}
          </div>
          
        </section>

        {/* PHASE 5: BUSINESS SNAPSHOT SUMMARY */}
        <section className="animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both max-w-4xl mx-auto">
          <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-10 shadow-2xl shadow-[#0B1F3A]/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <h3 className="text-2xl font-black tracking-tight text-[#0B1F3A]">Business Snapshot Summary</h3>
            <p className="text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              We found your Google Business Profile and business location. Your customer rating is publicly available. Some online systems such as booking or social media could not be confirmed.
              <br/><br/>
              This snapshot is the starting point for the AI Business Analysis.
            </p>
          </div>
        </section>

        {/* PHASE 6: AI BUSINESS ANALYSIS */}
        <section className="space-y-10 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-300 fill-mode-both max-w-5xl mx-auto">
          
          <div className="text-center space-y-4">
            <h3 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
              AI Business Analysis
            </h3>
            <p className="text-slate-500 font-semibold text-sm">
              Based on publicly available information.
            </p>
          </div>

          {/* AI Brain Illustration */}
          <div className="flex flex-col items-center justify-center mt-8 mb-4">
            <FloatingContainer delay={0} yOffset={8} duration={8}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#2563EB]/20 rounded-full blur-xl animate-pulse"></div>
                <div className="p-5 bg-white border border-slate-100 rounded-full shadow-[0_15px_30px_rgba(11,31,58,0.1)] relative z-10">
                  <Brain className="h-10 w-10 text-[#2563EB]" />
                </div>
              </div>
            </FloatingContainer>
            <ConnectorLine vertical length="40px" className="mt-2 bg-slate-200" glowing={false} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {recommendations.map((rec, idx) => (
              <DepthCard key={idx} depth={10} className="p-8 transition-all flex flex-col gap-6 z-10 relative bg-white/90 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#2563EB]/10 border-slate-200">
                
                {/* Observation Header */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Observation</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Confidence</span>
                      <span className={`text-[10px] font-bold uppercase tracking-widest font-mono px-2 py-0.5 rounded-md ${getConfidenceColor(rec.confidence)}`}>
                        {rec.confidence}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-black text-[#0B1F3A] leading-snug">
                    {rec.observation}
                  </h4>
                  <div className="flex items-center gap-1.5 opacity-80">
                    <span className="text-[10px] font-bold text-slate-400 font-mono uppercase tracking-widest">
                      Source: {rec.source}
                    </span>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-100 relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-full bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                </div>

                {/* Reasoning */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono">Reasoning</span>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {rec.reasoning}
                  </p>
                </div>
                
              </DepthCard>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}
