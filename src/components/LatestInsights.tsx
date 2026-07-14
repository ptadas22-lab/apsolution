import React, { useState } from "react";
import { BookOpen, ArrowRight, X, Bookmark, Lock, HelpCircle } from "lucide-react";

export default function LatestInsights() {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      industry: "Salon & Beauty",
      location: "Dadar, Mumbai",
      businessesStudied: "16 Salons",
      status: "Published",
      title: "High-Volume Salon Operations",
      challenges: [
        "Staff spend up to 14 hours a week manually answering styling bookings over mobile chat.",
        "Customer repeat color codes and allergy warnings are scattered in paper register binders."
      ],
      opportunities: [
        "Implementing instant self-service booking page links directly within business messaging bio pages.",
        "Gentle, automated follow-up scheduling sent exactly 21 days after styling appointments."
      ],
      recommendations: [
        "Establish a direct cloud database mapping customer phone numbers to stylists and hair color formulas.",
        "Set up an automated notification bot connected directly to WhatsApp business numbers."
      ]
    },
    {
      id: 2,
      industry: "Restaurant",
      location: "Bandra, Mumbai",
      businessesStudied: "Ongoing",
      status: "Researching",
      title: "Dine-in Customer Retention",
      challenges: [],
      opportunities: [],
      recommendations: []
    },
    {
      id: 3,
      industry: "Retail Pharmacy",
      location: "Colaba, Mumbai",
      businessesStudied: "Ongoing",
      status: "Researching",
      title: "Inventory & Reorder Automation",
      challenges: [],
      opportunities: [],
      recommendations: []
    },
    {
      id: 4,
      industry: "Dental Clinic",
      location: "Juhu, Mumbai",
      businessesStudied: "Ongoing",
      status: "Researching",
      title: "Patient Follow-up Lifecycle",
      challenges: [],
      opportunities: [],
      recommendations: []
    }
  ];

  return (
    <section 
      id="journal" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20 bg-slate-50/30"
    >
      <div className="space-y-16 max-w-6xl mx-auto px-4">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
            Step 10 • Business Insights Library
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Knowledge Library
          </h2>
        </div>

        {/* Premium Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          {articles.map((article) => {
            const isPublished = article.status === "Published";
            return (
              <div 
                key={article.id}
                className={`bg-white border-2 rounded-[2.5rem] p-8 sm:p-10 hover:shadow-xl hover:shadow-[#0B1F3A]/5 transition-all duration-300 flex flex-col justify-between ${
                  isPublished ? "border-slate-200" : "border-slate-100 bg-slate-50/50"
                }`}
                id={`journal-card-${article.id}`}
              >
                <div className="space-y-8">
                  
                  {/* Header: Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full font-mono ${
                      isPublished ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100"
                    }`}>
                      {article.status}
                    </span>
                    <BookOpen className={`h-5 w-5 ${isPublished ? "text-[#2563EB]" : "text-slate-300"}`} />
                  </div>

                  {/* Title & Industry */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-black text-[#2563EB] uppercase tracking-widest block">
                      {article.industry}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight leading-tight">
                      {article.title}
                    </h3>
                  </div>

                  {/* Data Points */}
                  <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100">
                    <div className="space-y-1">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Location</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{article.location}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Studied</span>
                      <span className="text-sm font-semibold text-[#0B1F3A]">{article.businessesStudied}</span>
                    </div>
                  </div>

                </div>

                {/* Read Report Button */}
                <div className="pt-8">
                  {isPublished ? (
                    <button
                      onClick={() => setSelectedInsight(article.id)}
                      className="w-full bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-sm py-4.5 rounded-2xl transition-all cursor-pointer border-none flex items-center justify-center gap-2 shadow-sm"
                      id={`journal-btn-${article.id}`}
                    >
                      <span>Read Report</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      disabled
                      className="w-full bg-slate-100 text-slate-400 font-bold text-sm py-4.5 rounded-2xl cursor-not-allowed border-none flex items-center justify-center gap-2"
                    >
                      <Lock className="h-4 w-4" />
                      <span>Report Locked</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Journal Detail Dialog Overlay */}
        {selectedInsight !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 max-w-lg w-full shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto no-scrollbar">
              
              <div className="flex items-start justify-between border-b border-slate-100 pb-6">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#2563EB] font-mono uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">
                    {articles.find(a => a.id === selectedInsight)?.industry}
                  </span>
                  <h4 className="text-2xl font-black text-[#0B1F3A] tracking-tight leading-tight">
                    {articles.find(a => a.id === selectedInsight)?.title}
                  </h4>
                </div>
                <button 
                  onClick={() => setSelectedInsight(null)}
                  className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer border-none shrink-0"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-6 text-sm font-semibold text-slate-600 leading-relaxed text-left">
                <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex-1">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Location</span>
                    <span className="text-xs font-bold text-[#0B1F3A]">{articles.find(a => a.id === selectedInsight)?.location}</span>
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono">Studied</span>
                    <span className="text-xs font-bold text-[#0B1F3A]">{articles.find(a => a.id === selectedInsight)?.businessesStudied}</span>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-2 uppercase text-[10px] font-mono tracking-wider text-[#2563EB]">Identified Friction</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    {articles.find(a => a.id === selectedInsight)?.challenges.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-2 uppercase text-[10px] font-mono tracking-wider text-emerald-600">Growth Opportunities</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    {articles.find(a => a.id === selectedInsight)?.opportunities.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-2 uppercase text-[10px] font-mono tracking-wider text-purple-600">Architect Recommendations</h5>
                  <ul className="list-disc pl-5 space-y-2">
                    {articles.find(a => a.id === selectedInsight)?.recommendations.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-[#0B1F3A] font-bold text-sm py-4 rounded-xl transition-all cursor-pointer border-none"
                >
                  Close Document
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
