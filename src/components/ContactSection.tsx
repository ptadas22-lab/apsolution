import React, { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Calendar,
  Check,
  Globe,
  Clock,
  ShieldCheck,
  User,
  X,
  Bookmark
} from "lucide-react";

export default function ContactSection() {
  const [selectedDay, setSelectedDay] = useState<number>(14); // default tomorrow July 14, 2026
  const [selectedTime, setSelectedTime] = useState<string>("11:00 AM");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Static days for July 2026 calendar representation
  const calendarDays = [
    { day: null, active: false }, { day: null, active: false }, { day: null, active: false }, 
    { day: 1, active: true }, { day: 2, active: true }, { day: 3, active: true }, { day: 4, active: true },
    { day: 5, active: true }, { day: 6, active: true }, { day: 7, active: true }, { day: 8, active: true },
    { day: 9, active: true }, { day: 10, active: true }, { day: 11, active: true }, { day: 12, active: true },
    { day: 13, active: true }, { day: 14, active: true }, { day: 15, active: true }, { day: 16, active: true },
    { day: 17, active: true }, { day: 18, active: true }, { day: 19, active: true }, { day: 20, active: true },
    { day: 21, active: true }, { day: 22, active: true }, { day: 23, active: true }, { day: 24, active: true },
    { day: 25, active: true }, { day: 26, active: true }, { day: 27, active: true }, { day: 28, active: true },
    { day: 29, active: true }, { day: 30, active: true }, { day: 31, active: true }
  ];

  const times = [
    "09:00 AM",
    "11:00 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM"
  ];

  const handleBookAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setBookingSuccess(true);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("AP-MEET-7845");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section 
      id="contact" 
      className="py-16 md:py-24 scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto text-left">
        
        {/* Left Column: CTA description & secondary buttons */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] px-3 py-1 rounded-full text-xs font-semibold tracking-wide w-fit">
              <Sparkles className="h-3.5 w-3.5 text-blue-600 animate-bounce" />
              <span>Section 07 • Ready to Improve Your Business?</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black text-[#0B1F3A] tracking-tight leading-[1.1]">
              Ready to Improve <br />
              Your Business?
            </h2>
            
            <div className="space-y-2 text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-xl">
              <p>Every business is unique.</p>
              <p>Let's understand yours.</p>
            </div>
          </div>

          {/* Simple guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { label: "Free Advisory Call", desc: "No charge, pure advice" },
              { label: "No Lock-in Contracts", desc: "Pay only for what we build" },
              { label: "100% Custom Work", desc: "No rigid third-party templates" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl flex flex-col justify-between">
                <span className="text-xs font-bold text-[#0B1F3A] block">{item.label}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase font-mono mt-1">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* Direct channels */}
          <div className="border-t border-slate-200/80 pt-6 space-y-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-mono">Direct Communication Channels</span>
            <div className="flex flex-col sm:flex-row gap-3">
              
              {/* Phone call */}
              <a 
                href="tel:+919876543210"
                className="flex-1 bg-white hover:bg-slate-50 border border-slate-250 text-[#0B1F3A] font-bold text-xs py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <Phone className="h-4 w-4 text-[#2563EB]" />
                <span>Call Us Direct</span>
              </a>

              {/* Direct WhatsApp chat */}
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/25 text-[#1e7e34] font-bold text-xs py-3.5 px-5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer text-center"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                <span>Message on WhatsApp</span>
              </a>

            </div>
          </div>
        </div>

        {/* Right Column: Inline Scheduler Widget */}
        <div className="lg:col-span-6 w-full">
          {!bookingSuccess ? (
            <div
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100 space-y-6"
              id="inline-booking-card"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#0B1F3A]">Schedule Your Advisory Call</h3>
                <p className="text-xs text-slate-400 font-semibold mt-0.5">Pick a convenient day & slot from our live calendar.</p>
              </div>

              {/* Month Header */}
              <div className="flex justify-between items-center bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-xl text-xs font-bold text-[#0B1F3A] font-mono">
                <span>July 2026</span>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider">SELECT DAY</span>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold text-slate-400 uppercase font-mono">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
              </div>

              {/* Grid representation */}
              <div className="grid grid-cols-7 gap-1.5 text-center text-xs">
                {calendarDays.map((cell, idx) => {
                  if (cell.day === null) {
                    return <div key={idx} className="h-8 w-8"></div>;
                  }
                  const isSelected = selectedDay === cell.day;
                  const isPast = cell.day < 14; // July 14, 2026 is today
                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isPast}
                      onClick={() => setSelectedDay(cell.day as number)}
                      className={`h-8 w-8 rounded-full font-bold flex items-center justify-center transition-all cursor-pointer ${
                        isSelected 
                          ? "bg-[#2563EB] text-white shadow-md shadow-blue-500/20 scale-105"
                          : isPast
                          ? "text-slate-200 cursor-not-allowed line-through"
                          : "text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200"
                      }`}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>

              {/* Time Selector */}
              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Select Slot Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedTime(t)}
                      className={`p-2.5 rounded-lg border text-center text-[10.5px] font-bold transition-all cursor-pointer ${
                        selectedTime === t
                          ? "bg-[#0B1F3A] border-[#0B1F3A] text-white"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Form entries */}
              <form onSubmit={handleBookAppointment} className="space-y-4 pt-4 border-t border-slate-100">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Patil"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. amit@business.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-blue-700 active:scale-95 text-white font-bold text-xs py-4 rounded-xl transition-all shadow-lg shadow-blue-500/10 flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <span>Book Free Advisory Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          ) : (
            <div
              className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-100 text-center space-y-6"
              id="inline-booking-success-card"
            >
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-full w-fit mx-auto border border-emerald-100">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#0B1F3A] tracking-tight">
                  Advisory Session Booked!
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-semibold">
                  We have secured your appointment. A Google Meet calendar invitation was dispatched to <strong>{email}</strong>.
                </p>
              </div>

              {/* Summary Block */}
              <div className="bg-[#FAFAFA] border border-slate-200 rounded-2xl p-4 text-left space-y-3 max-w-md mx-auto">
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 font-bold uppercase">
                  <span>CONFIRMATION SUMMARY</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold font-sans">Confirmed</span>
                </div>

                <div className="space-y-1.5 text-xs font-semibold">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Session Date</span>
                    <span className="text-[#0B1F3A]">July {selectedDay}, 2026</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Slot Time</span>
                    <span className="text-[#0B1F3A]">{selectedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 font-medium">Platform</span>
                    <span className="text-[#0B1F3A]">Google Meet Roster</span>
                  </div>
                </div>

                {/* Meeting Code */}
                <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between bg-white px-3 py-2.5 rounded-xl border border-slate-150">
                  <span className="font-mono text-xs text-[#0B1F3A] font-bold">AP-MEET-7845</span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="text-xs text-[#2563EB] font-bold hover:text-blue-700 flex items-center gap-1 cursor-pointer bg-transparent border-none p-0"
                  >
                    <span>{copiedCode ? "Link Copied!" : "Copy Link"}</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-center pt-2">
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setSelectedDay(14);
                    setName("");
                    setEmail("");
                    setPhone("");
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-6 py-3 rounded-xl transition-all cursor-pointer border-none"
                >
                  Schedule Another Session
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
