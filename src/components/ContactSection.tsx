import React from "react";
import { MessageCircle, Mail, HelpCircle, Notebook, FileText, Calendar as CalendarIcon, Phone } from "lucide-react";
import { RecommendationChain } from "../lib/types/engine";
import FloatingContainer from "./ui3d/FloatingContainer";
import GlassCard3D from "./ui3d/GlassCard3D";
import DepthCard from "./ui3d/DepthCard";

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
    <section id="contact" className="py-24 md:py-32 scroll-mt-20 px-4 bg-slate-50/50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-32">
        
        {/* Questions Worth Discussing */}
        <div className="space-y-12 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <div className="text-center space-y-4">
            <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-widest font-mono bg-[#2563EB]/10 px-4 py-1.5 rounded-full">
              Preparation
            </span>
            <h3 className="text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight">
              Questions Worth Discussing
            </h3>
            <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Based on our AI observations, here are a few things we would explore together to see if an automated solution fits your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative perspective-[1200px]">
            {displayQuestions.slice(0, 3).map((q, idx) => (
              <FloatingContainer key={idx} delay={idx * 0.3} yOffset={8} duration={8 + idx} className="h-full">
                <DepthCard depth={10} className="bg-white rounded-3xl p-8 border-slate-100/50 flex flex-col gap-6 h-full hover:shadow-[0_20px_40px_rgba(11,31,58,0.08)]">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50/80 text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100/50">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <p className="text-base font-bold text-slate-700 leading-relaxed">
                    "{q}"
                  </p>
                </DepthCard>
              </FloatingContainer>
            ))}
          </div>
        </div>

        {/* Final CTA with Floating Desk Illustration */}
        <div className="relative">
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-blue-200/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="bg-white rounded-[3rem] p-8 sm:p-16 border border-slate-100 shadow-[0_30px_60px_rgba(11,31,58,0.05)] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            <div className="space-y-8 relative z-10 w-full lg:w-1/2 text-center lg:text-left">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight leading-tight">
                  Schedule a Consultation
                </h2>
                <div className="space-y-2">
                  <p className="text-slate-500 sm:text-lg font-medium">
                    Your Business Snapshot is only the beginning.
                  </p>
                  <p className="text-slate-500 sm:text-lg font-medium leading-relaxed">
                    If you would like to explore ideas that suit your business, we'd be happy to discuss them.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 lg:justify-start justify-center">
                <button 
                  className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base px-10 py-5 rounded-2xl transition-all shadow-[0_15px_30px_rgba(11,31,58,0.15)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.2)] hover:-translate-y-1 inline-flex items-center justify-center gap-2 cursor-pointer border-none"
                >
                  <CalendarIcon className="h-5 w-5" />
                  <span>Book Meeting</span>
                </button>
                
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700 font-bold text-sm sm:text-base py-5 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3D Floating Desk Illustration */}
            <div className="w-full lg:w-1/2 h-80 sm:h-96 relative flex items-center justify-center perspective-[1500px]">
               
               {/* Center Report */}
               <FloatingContainer delay={0} duration={10} yOffset={15} className="absolute z-20">
                 <GlassCard3D angleX={15} angleY={-10} depth={40} className="w-48 h-64 sm:w-56 sm:h-72 bg-white/90 backdrop-blur-md p-6 flex flex-col gap-4 border-slate-200">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2563EB] mb-2 border border-blue-100/50">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="space-y-2.5">
                      <div className="w-3/4 h-2 bg-slate-200 rounded-full"></div>
                      <div className="w-full h-2 bg-slate-100 rounded-full"></div>
                      <div className="w-5/6 h-2 bg-slate-100 rounded-full"></div>
                    </div>
                    <div className="mt-auto space-y-2.5">
                      <div className="w-full h-16 bg-blue-50/50 rounded-lg border border-blue-100/30"></div>
                    </div>
                 </GlassCard3D>
               </FloatingContainer>

               {/* Left Notebook */}
               <FloatingContainer delay={1.5} duration={12} yOffset={20} className="absolute left-0 sm:left-4 top-10 z-10">
                 <GlassCard3D angleX={20} angleY={25} depth={20} className="w-32 h-44 sm:w-40 sm:h-56 bg-slate-50 p-5 flex flex-col gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.05)] border-slate-200/60">
                    <div className="w-10 h-10 bg-slate-200/50 rounded-xl flex items-center justify-center text-slate-500 mb-2">
                      <Notebook className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full"></div>
                      <div className="w-3/4 h-1.5 bg-slate-200 rounded-full"></div>
                    </div>
                 </GlassCard3D>
               </FloatingContainer>

               {/* Right Calendar */}
               <FloatingContainer delay={0.8} duration={11} yOffset={18} className="absolute right-0 sm:right-4 bottom-10 z-30">
                 <GlassCard3D angleX={10} angleY={-25} depth={35} className="w-36 h-36 sm:w-44 sm:h-44 bg-white p-5 flex flex-col items-center justify-center gap-3 border-slate-100 shadow-[0_25px_50px_rgba(11,31,58,0.08)]">
                    <div className="w-full bg-rose-500 rounded-t-xl h-8 absolute top-0 left-0 flex items-center justify-center">
                       <span className="text-[8px] font-bold text-white uppercase tracking-widest font-mono">Meeting</span>
                    </div>
                    <CalendarIcon className="h-10 w-10 text-rose-500 mt-4" strokeWidth={1.5} />
                    <div className="flex gap-1 mt-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">12</div>
                      <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-[8px] font-bold text-rose-600 border border-rose-200">13</div>
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-bold text-slate-400">14</div>
                    </div>
                 </GlassCard3D>
               </FloatingContainer>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
