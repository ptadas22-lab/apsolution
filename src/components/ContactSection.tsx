import React from "react";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20 px-4 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Let's Discuss Your Business
          </h2>
          <div className="space-y-2">
            <p className="text-slate-500 sm:text-lg font-medium">
              Your Business Snapshot is the first step.
            </p>
            <p className="text-slate-500 sm:text-lg font-medium">
              If you'd like to explore ideas that fit your business, we're happy to discuss them.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 pt-6">
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
    </section>
  );
}
