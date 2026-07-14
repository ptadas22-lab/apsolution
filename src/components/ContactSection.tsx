import React from "react";
import { MessageCircle, Mail, ArrowRight, Sparkles } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20 px-4 bg-slate-50/50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-8 md:p-20 text-center shadow-2xl shadow-[#0B1F3A]/5 relative overflow-hidden">
          
          {/* Subtle background element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest font-mono mx-auto">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let's Talk</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight leading-[1.1]">
                Ready to Improve Your Business?
              </h2>
              
              <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-lg mx-auto">
                Every business is unique. Book a free consultation to see how our custom solutions can fit perfectly into your daily operations.
              </p>
            </div>

            <div className="pt-2 flex flex-col items-center gap-6">
              {/* Primary Button */}
              <button 
                className="w-full sm:w-auto bg-[#0B1F3A] hover:bg-[#2563EB] text-white font-bold text-sm sm:text-base px-12 py-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0B1F3A]/10 cursor-pointer border-none"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-slate-200"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">Or reach out via</span>
                <div className="h-px w-8 bg-slate-200"></div>
              </div>

              {/* Secondary Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1e7e34] font-bold text-xs sm:text-sm py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  <span>WhatsApp</span>
                </a>
                
                <a 
                  href="mailto:hello@apsolutions.in"
                  className="flex-1 sm:flex-none bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm py-3.5 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
                >
                  <Mail className="h-4.5 w-4.5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
