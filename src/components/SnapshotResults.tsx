import React from "react";
import { 
  Building2, MapPin, Tag, Star, Users, Globe, Instagram, Facebook, Calendar, MessageCircle, Clock, Check, Info, ShieldAlert, ArrowRight
} from "lucide-react";
import { RecommendationChain, StatusIndicator } from "../lib/types/engine";

interface SnapshotResultsProps {
  snapshot: any;
  recommendations: RecommendationChain[];
}

export default function SnapshotResults({ snapshot, recommendations }: SnapshotResultsProps) {
  
  // Helpers
  const isNotFound = (val: string) => !val || val === "Not Found" || val === "No";

  const getStatusColor = (status: StatusIndicator) => {
    switch (status) {
      case "Good": return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "Available": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Not Found": return "bg-slate-50 text-slate-400 border-slate-100";
      case "Needs Review": return "bg-amber-50 text-amber-600 border-amber-100";
      default: return "bg-slate-50 text-slate-400 border-slate-100";
    }
  };

  const getConfidenceColor = (conf: string) => {
    switch (conf) {
      case "High": return "bg-emerald-100 text-emerald-700";
      case "Medium": return "bg-blue-100 text-blue-700";
      case "Low": return "bg-slate-100 text-slate-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  // Status computation for Phase 5 Summary
  const summaryStatuses = [
    { label: "Google Presence", status: !isNotFound(snapshot.googleRating) ? "Good" : "Not Found" as StatusIndicator },
    { label: "Website", status: !isNotFound(snapshot.websiteFound) ? "Available" : "Not Found" as StatusIndicator },
    { label: "Reviews", status: !isNotFound(snapshot.reviewCount) ? "Good" : "Not Found" as StatusIndicator },
    { label: "Social Presence", status: (!isNotFound(snapshot.instagramFound) || !isNotFound(snapshot.facebookFound)) ? "Available" : "Not Found" as StatusIndicator },
    { label: "Online Booking", status: !isNotFound(snapshot.onlineBooking) ? "Available" : "Not Found" as StatusIndicator },
    { label: "Customer Communication", status: !isNotFound(snapshot.whatsApp) ? "Good" : "Needs Review" as StatusIndicator },
    { label: "Business Information", status: !isNotFound(snapshot.businessHours) ? "Available" : "Not Found" as StatusIndicator }
  ];

  return (
    <div id="snapshot-results" className="scroll-mt-0 min-h-screen bg-slate-50/50 py-24 px-4 font-sans antialiased">
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
            
            {snapshot.demoMode && (
              <div className="max-w-2xl mx-auto mt-6 bg-amber-50 border-2 border-amber-100 rounded-2xl p-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <ShieldAlert className="h-5 w-5 text-amber-600" />
                  <span className="text-amber-800 font-black uppercase tracking-widest text-sm">Demo Mode</span>
                </div>
                <p className="text-amber-700 font-bold">
                  Sample Business Analysis
                  <br/>
                  <span className="text-sm font-medium opacity-80 mt-1 block">We couldn't retrieve public data, so we're displaying an example analysis.</span>
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { label: "Business Name", value: snapshot.businessName, source: "Public Records", icon: <Building2 className="h-5 w-5" /> },
              { label: "Category", value: snapshot.category, source: "Public Directories", icon: <Tag className="h-5 w-5" /> },
              { label: "Location", value: snapshot.location, source: "Google Maps", icon: <MapPin className="h-5 w-5" /> },
              { label: "Google Rating", value: snapshot.googleRating, source: "Google Business Profile", icon: <Star className="h-5 w-5" /> },
              { label: "Review Count", value: snapshot.reviewCount, source: "Google Business Profile", icon: <Users className="h-5 w-5" /> },
              { label: "Website", value: snapshot.websiteFound, source: "Official Website", icon: <Globe className="h-5 w-5" /> },
              { label: "Instagram", value: snapshot.instagramFound, source: "Instagram", icon: <Instagram className="h-5 w-5" /> },
              { label: "Facebook", value: snapshot.facebookFound, source: "Facebook", icon: <Facebook className="h-5 w-5" /> },
              { label: "Online Booking", value: snapshot.onlineBooking, source: "Public Directories", icon: <Calendar className="h-5 w-5" /> },
              { label: "WhatsApp", value: snapshot.whatsApp, source: "WhatsApp Business", icon: <MessageCircle className="h-5 w-5" /> },
              { label: "Business Hours", value: snapshot.businessHours, source: "Google Business Profile", icon: <Clock className="h-5 w-5" /> }
            ].map((item, idx) => {
              const notFound = isNotFound(item.value);
              return (
                <div key={idx} className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 shadow-xl shadow-[#0B1F3A]/5 hover:border-[#2563EB]/20 transition-colors flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${notFound ? 'bg-slate-50 text-slate-400' : 'bg-blue-50 text-[#2563EB]'}`}>
                        {item.icon}
                      </div>
                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                        {item.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`text-lg sm:text-xl font-black leading-tight ${notFound ? 'text-slate-300' : 'text-[#0B1F3A]'}`}>
                    {notFound ? 'Not Found' : item.value}
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 font-mono">Source</span>
                    <span className="text-[10px] font-semibold text-slate-500">{item.source}</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center">
            <p className="text-xs font-bold text-slate-400 font-mono uppercase tracking-widest">
              This snapshot is prepared using publicly available information.
            </p>
          </div>
        </section>

        {/* PHASE 5: BUSINESS SNAPSHOT SUMMARY */}
        <section className="space-y-10 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-150 fill-mode-both max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
              Business Snapshot Summary
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {summaryStatuses.map((item, idx) => (
              <div key={idx} className={`border px-4 py-2.5 rounded-full flex items-center gap-2 ${getStatusColor(item.status)}`}>
                {item.status === 'Good' && <Check className="h-4 w-4 stroke-[3]" />}
                {item.status === 'Available' && <Info className="h-4 w-4 stroke-[3]" />}
                {item.status === 'Needs Review' && <ShieldAlert className="h-4 w-4 stroke-[3]" />}
                {item.status === 'Not Found' && <div className="h-1.5 w-1.5 rounded-full bg-slate-300 mr-1" />}
                <span className="text-xs font-bold">{item.label}: {item.status}</span>
              </div>
            ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, idx) => (
              <div key={idx} className="bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-xl shadow-[#0B1F3A]/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all flex flex-col gap-6">
                
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
                  <p className="text-xs font-bold text-slate-400">Source: <span className="text-slate-500">{rec.source}</span></p>
                </div>

                <div className="w-full h-px bg-slate-100"></div>

                {/* Reasoning */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-widest font-mono">Reasoning</span>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {rec.reasoning}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

        </section>

      </div>
    </div>
  );
}
