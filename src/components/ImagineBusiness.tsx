import React, { useState } from "react";
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  LineChart, 
  Globe, 
  ShieldCheck, 
  Star, 
  Heart, 
  Package, 
  CreditCard,
  Info,
  Check,
  Send,
  Sparkles,
  Lock
} from "lucide-react";

interface ImagineBusinessProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function ImagineBusiness({ onScrollToSection }: ImagineBusinessProps) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const previews = [
    { id: "calendar", label: "Appointment Management", icon: <Calendar className="h-4 w-4" /> },
    { id: "dashboard", label: "Customer Database", icon: <Users className="h-4 w-4" /> },
    { id: "website", label: "Website", icon: <Globe className="h-4 w-4" /> },
    { id: "whatsapp", label: "WhatsApp Automation", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "reports", label: "Business Reports", icon: <LineChart className="h-4 w-4" /> },
    { id: "reviews", label: "Customer Reviews", icon: <Star className="h-4 w-4" /> },
    { id: "security", label: "Business Security", icon: <ShieldCheck className="h-4 w-4" /> },
    { id: "insights", label: "Analytics", icon: <Heart className="h-4 w-4" /> },
    { id: "billing", label: "Billing", icon: <CreditCard className="h-4 w-4" /> },
    { id: "inventory", label: "Inventory", icon: <Package className="h-4 w-4" /> }
  ];

  const renderActivePreview = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">ACTIVE CUSTOMER ROSTER</span>
              <span className="text-[9px] bg-blue-50 text-blue-700 font-extrabold px-2 py-0.5 rounded font-mono">14 ONLINE NOW</span>
            </div>
            <div className="space-y-2">
              {[
                { name: "Ananya Sharma", status: "Active Session", time: "11:00 AM", type: "Premium VIP" },
                { name: "Rohan Mehta", status: "In Waiting Lounge", time: "11:45 AM", type: "Standard Member" },
                { name: "Siddharth Roy", status: "Scheduled", time: "01:30 PM", type: "New Trial" },
                { name: "Pooja Patil", status: "Completed", time: "10:15 AM", type: "Premium VIP" }
              ].map((client, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white border border-slate-150 rounded-xl hover:shadow-xs transition-shadow">
                  <div className="flex items-center space-x-3">
                    <span className={`h-2 w-2 rounded-full ${
                      client.status === "Active Session" ? "bg-blue-500 animate-pulse" : 
                      client.status === "Completed" ? "bg-emerald-500" : 
                      client.status === "In Waiting Lounge" ? "bg-amber-400" : "bg-slate-300"
                    }`}></span>
                    <div>
                      <span className="text-xs font-bold text-[#0B1F3A] block">{client.name}</span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">{client.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500 font-semibold block">{client.status}</span>
                    <span className="text-[9px] text-slate-400 font-mono">{client.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "calendar":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">DAILY AGENDA</span>
              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 rounded font-mono">92% OCCUPANCY</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                { time: "09:00 AM - 10:00 AM", label: "Morning Operations Sync", booked: true, color: "border-indigo-500 bg-indigo-50/20 text-indigo-800" },
                { time: "10:30 AM - 11:30 AM", label: "Ananya Sharma • Active Consultation", booked: true, color: "border-blue-500 bg-blue-50/20 text-blue-800" },
                { time: "11:45 AM - 12:30 PM", label: "Rohan Mehta • Scheduled Checkup", booked: true, color: "border-amber-500 bg-amber-50/20 text-amber-800" },
                { time: "01:00 PM - 02:00 PM", label: "Lunch Hour • Automated Rescheduling", booked: false, color: "border-slate-200 bg-white text-slate-400" },
                { time: "02:30 PM - 03:30 PM", label: "Open Slot • Tap to self-book", booked: false, color: "border-emerald-300 bg-emerald-50/10 text-emerald-700 font-bold" }
              ].map((slot, sIdx) => (
                <div key={sIdx} className={`border-l-3 px-3.5 py-3 rounded-xl text-xs flex items-center justify-between border ${slot.color}`}>
                  <span className="font-semibold">{slot.label}</span>
                  <span className="font-mono text-[10px]">{slot.time}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "whatsapp":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">INTELLIGENT WHATSAPP CONVERSATION</span>
              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 rounded font-mono">ONLINE</span>
            </div>
            <div className="space-y-3 bg-[#f0f2f5] p-4 rounded-xl max-h-[220px] overflow-y-auto no-scrollbar border border-slate-150">
              {[
                { sender: "client", msg: "Hi, I need to book a styling slot for tomorrow at 2 PM if possible." },
                { sender: "bot", msg: "Hello! Yes, that slot is open. Would you like to confirm the booking under your name, Amit?" },
                { sender: "client", msg: "Yes, that's perfect. Please lock it in." },
                { sender: "bot", msg: "Confirmed! I have blocked 2:00 PM tomorrow. An automated calendar notification has been sent. See you soon!" }
              ].map((bubble, bIdx) => (
                <div key={bIdx} className={`flex flex-col ${bubble.sender === "client" ? "items-start" : "items-end"} space-y-0.5`}>
                  <span className="text-[9px] text-slate-400 font-bold font-mono">
                    {bubble.sender === "client" ? "Client" : "A&P Smart Bot"}
                  </span>
                  <div className={`p-2.5 rounded-xl max-w-[85%] text-xs leading-normal font-semibold ${
                    bubble.sender === "client" 
                      ? "bg-white text-slate-700 rounded-tl-none border border-slate-200" 
                      : "bg-[#25D366] text-white rounded-tr-none shadow-xs"
                  }`}>
                    {bubble.msg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "reports":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">OPERATIONAL GROWTH OVERVIEW</span>
              <span className="text-[9px] text-emerald-600 bg-emerald-50 font-extrabold px-2 py-0.5 rounded font-mono">+18% YOY</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Bookings Fulfilled", value: "312", growth: "+14.5%" },
                { label: "Staff Efficiency", value: "96.4%", growth: "+8.2%" },
                { label: "Repeat Ratio", value: "88%", growth: "+11.2%" }
              ].map((report, rIdx) => (
                <div key={rIdx} className="bg-white border border-slate-150 rounded-xl p-3.5 text-left flex flex-col justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block leading-tight">{report.label}</span>
                  <div className="pt-2">
                    <span className="text-lg font-black text-[#0B1F3A] tracking-tight">{report.value}</span>
                    <span className="text-[9px] text-emerald-600 font-bold block mt-0.5">{report.growth}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quiet SVG chart lines */}
            <div className="h-16 w-full mt-2 flex items-end">
              <svg className="w-full h-full" viewBox="0 0 160 50" preserveAspectRatio="none">
                <path 
                  d="M 0 45 Q 20 40 40 30 T 80 20 T 120 18 T 160 5" 
                  fill="none" 
                  stroke="#2563EB" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </div>
          </div>
        );

      case "website":
        return (
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">CLIENT WEBSITE PREVIEW</span>
              <span className="text-[9px] bg-blue-50 text-blue-700 font-extrabold px-2 py-0.5 rounded font-mono">FULLY RESPONSIVE</span>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-xl p-4.5 space-y-3.5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="font-extrabold text-xs text-[#0B1F3A]">The Urban Oasis Salon</span>
                <span className="text-[9px] text-slate-400 font-semibold uppercase">Menu • Stylists • Book</span>
              </div>
              <div className="space-y-1.5">
                <h5 className="text-sm font-black text-[#0B1F3A] tracking-tight">Premium Hair & Beauty Grooming.</h5>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  We look after your hair, nails and comfort. Book your personal stylist online in 3 simple taps.
                </p>
              </div>
              <div className="flex justify-start">
                <button type="button" className="bg-[#2563EB] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg">
                  Book Slot Instantly
                </button>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">SYSTEM INTEGRITY LOG</span>
              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 rounded font-mono">ENCRYPTED</span>
            </div>
            
            <div className="space-y-2.5">
              {[
                { detail: "All client phone records locked with AES-256 standards.", valid: true },
                { detail: "Dual-factor authentication enabled for staff roster logs.", valid: true },
                { detail: "Fraud monitoring rules applied to checkout receipts.", valid: true },
                { detail: "Secure backend proxy blocks direct credentials exposure.", valid: true }
              ].map((point, idx) => (
                <div key={idx} className="flex items-center text-xs text-slate-600 font-semibold">
                  <Check className="h-4 w-4 text-emerald-500 mr-2 shrink-0" />
                  <span>{point.detail}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "reviews":
        return (
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">GOOGLE BUSINESS REVIEW FEED</span>
              <span className="text-[9px] bg-yellow-50 text-yellow-700 font-extrabold px-2 py-0.5 rounded font-mono">4.9 AVERAGE</span>
            </div>

            <div className="space-y-3">
              <div className="flex space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              
              <div className="bg-slate-50 border border-slate-150 p-4 rounded-xl">
                <p className="text-xs text-slate-600 italic font-semibold leading-relaxed">
                  "The automated booking link arrived via WhatsApp right as I called. Rescheduled in seconds without repeating my requests. 5-star service!"
                </p>
                <span className="text-[10px] text-slate-400 font-bold mt-2 block font-mono">— RAVI S., ACTIVE LOCAL CLIENT</span>
              </div>
            </div>
          </div>
        );

      case "insights":
        return (
          <div className="space-y-4 text-left">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">CLIENT PREFERENCES CARDS</span>
              <span className="text-[9px] bg-indigo-50 text-indigo-700 font-extrabold px-2 py-0.5 rounded font-mono">INSIGHT ENGINE</span>
            </div>

            <div className="bg-indigo-50/20 border border-indigo-100 p-4.5 rounded-xl space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B1F3A]">Ananya Sharma</span>
                <span className="text-[9px] text-indigo-600 font-bold font-mono uppercase">VIP Client</span>
              </div>
              <p className="text-xs text-slate-600 leading-normal font-semibold font-sans">
                • Allergic to citric styling serums<br />
                • Prefers scheduling late-morning bookings only<br />
                • Favorite consultant: Stylist Maya<br />
                • Prefers light jasmine tea during visit
              </p>
            </div>
          </div>
        );

      case "inventory":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">SUPPLY & STOCK ROSTER</span>
              <span className="text-[9px] bg-red-50 text-red-700 font-extrabold px-2 py-0.5 rounded font-mono">1 ALERT IN STOCK</span>
            </div>

            <div className="space-y-2">
              {[
                { name: "Organic Argan Oil Serum", qty: "4 units left", level: "Low", alert: true },
                { name: "Bamboo Fiber Hand Towels", qty: "140 units", level: "Optimal", alert: false },
                { name: "Organic Styling Pomade", qty: "18 units", level: "Optimal", alert: false }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white border border-slate-150 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-slate-700 block">{item.name}</span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">{item.qty}</span>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                    item.alert ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
                  }`}>{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case "billing":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">DIGITAL INVOICE REGISTER</span>
              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-extrabold px-2 py-0.5 rounded font-mono">AUTOMATED WEEKLY SETTLEMENTS</span>
            </div>

            <div className="space-y-2">
              {[
                { invoiceNum: "INV-2026-084", client: "Ananya Sharma", amount: "Rs. 4,500", status: "Paid" },
                { invoiceNum: "INV-2026-085", client: "Rohan Mehta", amount: "Rs. 1,200", status: "Paid" },
                { invoiceNum: "INV-2026-086", client: "Siddharth Roy", amount: "Rs. 2,800", status: "Pending" }
              ].map((inv, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white border border-slate-150 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-[#0B1F3A] block">{inv.invoiceNum}</span>
                    <span className="text-[9px] text-slate-400 font-semibold">{inv.client}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 block">{inv.amount}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded font-mono ${
                      inv.status === "Paid" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                    }`}>{inv.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section 
      id="reimagined" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-12">
        
        {/* Disclaimers & Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-6 gap-4">
          <div className="space-y-2 text-left">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
              Step 06 • Example Demonstration
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
              Imagine Your Business Like This
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl font-semibold leading-relaxed">
              Example Demonstration • Clearly Labelled: Example Preview
            </p>
          </div>

          {/* Core required indicators */}
          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-wider font-mono">
              <Sparkles className="h-3 w-3 text-emerald-500 animate-pulse" />
              <span>Example Preview</span>
            </span>
          </div>
        </div>

        {/* Premium tabs + live screen side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Side Selector List of 10 SaaS modules */}
          <div className="lg:col-span-5 space-y-1.5">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono pl-2 mb-2">
              Select Preview Concept
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
              {previews.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-3 p-3.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                      isActive 
                        ? "bg-[#0B1F3A] border-[#0B1F3A] text-white shadow-sm" 
                        : "bg-white border-slate-150 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                    id={`preview-tab-btn-${tab.id}`}
                  >
                    <div className={`p-1.5 rounded-lg ${isActive ? "bg-white/10 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {tab.icon}
                    </div>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Visualizer Canvas (Right Column) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 min-h-[360px] flex flex-col justify-between shadow-xl shadow-slate-100 relative overflow-hidden">
            
            {/* Soft designer backdrop blobs for premium feel */}
            <div className="absolute top-12 right-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            {/* Top Device bar mock */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6 relative z-10">
              <div className="flex items-center space-x-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300"></span>
                <span className="text-[9px] font-bold text-slate-400 font-mono tracking-widest pl-2">
                  SECURE PLATFORM
                </span>
              </div>
              <span className="text-[8px] bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] font-extrabold px-2 py-0.5 rounded uppercase font-mono">
                {previews.find(t => t.id === activeTab)?.label}
              </span>
            </div>

            {/* Live Rendered Content */}
            <div className="flex-grow relative z-10">
              {renderActivePreview()}
            </div>

            {/* Disclaimer & note at bottom */}
            <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-start gap-2 text-[10px] text-slate-400 font-semibold relative z-10 leading-normal">
              <Info className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                <strong>Demonstration layout.</strong> Real systems are coded native for your custom browser requirements and strictly contain zero simulated fillers.
              </span>
            </div>

          </div>

        </div>

        <div className="pt-4 flex justify-center">
          <button
            onClick={() => onScrollToSection("journal")}
            className="bg-[#0B1F3A] hover:bg-[#1e293b] text-white font-bold text-xs px-8 py-4 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer border-0"
            id="reimagined-next-btn"
          >
            <span>View Business Insights Library</span>
          </button>
        </div>

      </div>
    </section>
  );
}
