import React from "react";
import { 
  Globe, 
  MessageSquare, 
  Users, 
  Calendar, 
  LineChart, 
  ShieldCheck, 
  Star,
  Package
} from "lucide-react";

export default function Recommendations() {
  const cards = [
    {
      title: "Website",
      icon: <Globe className="h-5 w-5" />,
      desc: "Establish a clear online presence for basic discoverability."
    },
    {
      title: "WhatsApp Automation",
      icon: <MessageSquare className="h-5 w-5" />,
      desc: "Streamline routine communication with automated replies."
    },
    {
      title: "Customer Management",
      icon: <Users className="h-5 w-5" />,
      desc: "Maintain organized records of client preferences and history."
    },
    {
      title: "Appointment Booking",
      icon: <Calendar className="h-5 w-5" />,
      desc: "Allow clients to schedule visits without requiring a phone call."
    },
    {
      title: "Business Reports",
      icon: <LineChart className="h-5 w-5" />,
      desc: "Track daily metrics to understand operational patterns."
    },
    {
      title: "Security",
      icon: <ShieldCheck className="h-5 w-5" />,
      desc: "Ensure business data is stored securely and reliably."
    },
    {
      title: "Review Management",
      icon: <Star className="h-5 w-5" />,
      desc: "Provide a simple way for satisfied customers to leave feedback."
    },
    {
      title: "Inventory",
      icon: <Package className="h-5 w-5" />,
      desc: "Monitor stock levels to avoid running out of essential supplies."
    }
  ];

  return (
    <section className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 space-y-16">
        
        <div className="text-center space-y-4">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
            Example Recommendations
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            Businesses Like Yours Often Improve By
          </h2>
          <p className="text-slate-500 font-medium text-sm">
            Recommendations are examples only.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-100 hover:border-blue-200 transition-colors shadow-sm group">
              <div className="h-12 w-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-sm font-black text-[#0B1F3A] mb-3 uppercase tracking-wide">{card.title}</h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
