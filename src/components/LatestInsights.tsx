import React, { useState } from "react";
import { BookOpen, ArrowRight, X, Bookmark, Lock, HelpCircle } from "lucide-react";

export default function LatestInsights() {
  const [selectedInsight, setSelectedInsight] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      num: "Business Insight #01",
      title: "Optimizing High-Volume Local Salons",
      scope: "16 Salons Studied",
      location: "Dadar, Mumbai",
      status: "Active",
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
      num: "Business Insight #02",
      title: "Restaurant Research",
      scope: "Researching in Bandra, Mumbai",
      location: "Coming Soon",
      status: "Coming Soon",
      challenges: [],
      opportunities: [],
      recommendations: []
    },
    {
      id: 3,
      num: "Business Insight #03",
      title: "Retail Research",
      scope: "Researching in Colaba, Mumbai",
      location: "Coming Soon",
      status: "Coming Soon",
      challenges: [],
      opportunities: [],
      recommendations: []
    },
    {
      id: 4,
      num: "Business Insight #04",
      title: "Clinic Research",
      scope: "Researching in Juhu, Mumbai",
      location: "Coming Soon",
      status: "Coming Soon",
      challenges: [],
      opportunities: [],
      recommendations: []
    }
  ];

  return (
    <section 
      id="journal" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
            Step 10 • Business Insights Library
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Knowledge Library
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            We actively study local workflows. Here are our published observations and upcoming neighborhood audits.
          </p>
        </div>

        {/* Premium Journal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {articles.map((article) => {
            const isComingSoon = article.status === "Coming Soon";
            return (
              <div 
                key={article.id}
                className={`bg-white border rounded-2xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  isComingSoon ? "border-slate-100 bg-slate-50/50" : "border-slate-200"
                }`}
                id={`journal-card-${article.id}`}
              >
                <div className="space-y-5">
                  
                  {/* Journal top tags */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <span className="text-[10px] font-bold text-[#2563EB] font-mono uppercase block leading-tight">
                        {article.num}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold block mt-0.5">
                        {article.scope}
                      </span>
                    </div>
                    <Bookmark className={`h-4 w-4 shrink-0 ${isComingSoon ? "text-slate-200" : "text-slate-300"}`} />
                  </div>

                  {/* Journal Title */}
                  <h3 className="text-xs sm:text-sm font-black text-[#0B1F3A] tracking-tight leading-snug">
                    {article.title}
                  </h3>

                  {!isComingSoon ? (
                    <div className="space-y-3 pt-1">
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider font-bold text-slate-400 block mb-1">
                          Business Observations
                        </span>
                        <ul className="space-y-1 text-[10px] text-slate-500 font-semibold leading-relaxed">
                          {article.challenges.slice(0, 1).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-slate-300 select-none">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 flex flex-col items-center justify-center text-center space-y-1 text-slate-400">
                      <Lock className="h-4 w-4 text-slate-300" />
                      <span className="text-[9px] font-mono uppercase font-bold tracking-widest text-slate-400">Under Research</span>
                    </div>
                  )}

                </div>

                {/* Action trigger */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between">
                  {!isComingSoon ? (
                    <button
                      onClick={() => setSelectedInsight(article.id)}
                      className="text-xs text-[#0B1F3A] font-bold hover:text-[#2563EB] flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                      id={`journal-btn-${article.id}`}
                    >
                      <span>Read More</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  ) : (
                    <span className="text-[9px] font-mono font-bold text-slate-350">COMING SOON</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Journal Detail Dialog Overlay */}
        {selectedInsight !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-[#2563EB] font-mono uppercase block">
                    {articles.find(a => a.id === selectedInsight)?.num}
                  </span>
                  <h4 className="text-base font-black text-[#0B1F3A] tracking-tight">
                    {articles.find(a => a.id === selectedInsight)?.title}
                  </h4>
                </div>
                <button 
                  onClick={() => setSelectedInsight(null)}
                  className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 cursor-pointer border-none"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4 text-xs font-semibold text-slate-600 leading-relaxed text-left">
                <p>
                  <strong>Study Scope:</strong> {articles.find(a => a.id === selectedInsight)?.scope} in <strong>{articles.find(a => a.id === selectedInsight)?.location}</strong>.
                </p>
                
                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-1 uppercase text-[9px] font-mono tracking-wider">Identified Friction</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    {articles.find(a => a.id === selectedInsight)?.challenges.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-1 uppercase text-[9px] font-mono tracking-wider">Growth Opportunities</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    {articles.find(a => a.id === selectedInsight)?.opportunities.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>

                <div>
                  <h5 className="font-bold text-[#0B1F3A] mb-1 uppercase text-[9px] font-mono tracking-wider">System Architect Recommendations</h5>
                  <ul className="list-disc pl-4 space-y-1">
                    {articles.find(a => a.id === selectedInsight)?.recommendations.map((c, i) => <li key={i}>{c}</li>)}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedInsight(null)}
                  className="bg-[#0B1F3A] hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer border-none"
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
