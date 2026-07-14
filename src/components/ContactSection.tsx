import React from "react";
import { MessageCircle, Mail, HelpCircle } from "lucide-react";
import { RecommendationChain } from "../lib/types/engine";

interface ContactSectionProps {
  recommendations: RecommendationChain[];
}

export default function ContactSection({ recommendations }: ContactSectionProps) {
  // Extract unique consultation questions from the AI observations
  const questions = recommendations
    .map(r => r.consultationQuestion)
    .filter((q, idx, arr) => q && arr.indexOf(q) === idx);

  // Fallback questions if none generated
  const displayQuestions = questions.length > 0 
    ? questions 
    : [
        "How do you currently manage your daily operations?",
        "How do customers usually contact you?",
        "Do you keep a digital customer history?"
      ];

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20 px-4 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* Questions Worth Discussing */}
        <div className="space-y-10 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="text-center space-y-4">
            <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-widest font-mono bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
              Step 5 of 5
            </span>
            <h3 className="text-3xl font-black text-[#0B1F3A] tracking-tight">
              Questions Worth Discussing
            </h3>
            <p className="text-slate-500 font-medium text-sm max-w-lg mx-auto">
              Based on our AI observations, here are a few things we would explore together to see if an automated solution fits your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayQuestions.map((q, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-100 shadow-sm flex flex-col gap-4 hover:border-blue-200 transition-colors">
                <div className="h-8 w-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <HelpCircle className="h-4 w-4" />
                </div>
                <p className="text-sm font-bold text-slate-700 leading-snug">
                  "{q}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto text-center space-y-12 bg-white rounded-[3rem] p-8 sm:p-16 border-2 border-slate-100 shadow-xl shadow-[#0B1F3A]/5 relative overflow-hidden">
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-4xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
              Let's Discuss Your Business
            </h2>
            <div className="space-y-2">
              <p className="text-slate-500 sm:text-lg font-medium">
                Your Business Snapshot is only the beginning.
              </p>
              <p className="text-slate-500 sm:text-lg font-medium max-w-lg mx-auto">
                If you would like to explore ideas that suit your business, we'd be happy to discuss them.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 pt-4 relative z-10">
            <button 
              className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#1e293b] text-white font-bold text-sm sm:text-base px-12 py-5 rounded-2xl transition-all shadow-lg shadow-[#0B1F3A]/5 inline-flex items-center justify-center gap-2 cursor-pointer border-none"
            >
              <span>Book Consultation</span>
            </button>
            
            <div className="flex items-center gap-4 w-full justify-center">
              <div className="h-px w-12 bg-slate-100"></div>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest font-mono">Or</span>
              <div className="h-px w-12 bg-slate-100"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-600 font-bold text-sm py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              
              <a 
                href="mailto:hello@apsolutions.in"
                className="flex-1 sm:flex-none bg-slate-50 hover:bg-slate-100 border border-slate-100 text-slate-600 font-bold text-sm py-4 px-10 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
              >
                <Mail className="h-5 w-5 text-blue-500" />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
