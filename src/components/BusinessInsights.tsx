import React from "react";
import { MessageSquare, Users, Globe, Clock, Sparkles, Check, ChevronRight } from "lucide-react";

interface BusinessInsightsProps {
  businessType: string;
  businessLabel: string;
  onContinue: () => void;
}

export default function BusinessInsights({ 
  businessType, 
  businessLabel, 
  onContinue
}: BusinessInsightsProps) {
  
  const bLabelLower = businessLabel.toLowerCase();
  
  // Custom non-alarmist, thoughtful insights for each industry type
  const getCustomInsightContent = () => {
    switch (businessType) {
      case "salon":
        return [
          { title: "Manage appointments through WhatsApp", desc: "Stylists schedule slots in direct, manual chat messages, which can occasionally clash or require constant checking." },
          { title: "Keep customer records manually", desc: "Preferred hair color formulas and hair style logs are usually saved in paper registers or scattered spreadsheets." },
          { title: "Depend on repeat customers", desc: "Growth rests mainly on loyal clients returning, which is best supported by gentle, friendly automatic appointment suggestions." },
          { title: "Spend too much time on follow-ups", desc: "Confirming styling appointments manually consumes several hours of styling staff work time every single week." },
          { title: "Information is scattered", desc: "Because guest records, booking dates, and receipts live in separate apps, details occasionally get misplaced." }
        ];
      case "restaurant":
        return [
          { title: "Table reservations on direct chat", desc: "Managing incoming guest seating limits, reservation dates, and direct order details manually on WhatsApp." },
          { title: "Keep diner profiles on separate notes", desc: "Valued customer preferences, dietary limits, allergy logs, and VIP placements are not centralized." },
          { title: "Depend on repeat diners", desc: "Healthy growth is driven by recurring guests, which could be supported by gentle, personalized table invitations." },
          { title: "Manual booking follow-ups", desc: "Staff spend critical dinner prep hours confirming table slots and timing updates with guests manually." },
          { title: "Menu and booking data are split", desc: "Your PDF menus, live table status, and billing registers are kept on separate tools instead of a single page." }
        ];
      case "clinic":
        return [
          { title: "Reschedule patient slots manually", desc: "Staff manage Clinical session updates, timing adjustments, and doctor slots through direct text chats." },
          { title: "Keep patient intake logs on paper", desc: "Intake details, allergy records, pre-care files, and family charts are kept in physical file cabinets." },
          { title: "Depend on regular checkups", desc: "Consistent treatment outcomes require regular checkups, best supported by friendly, automated wellness prompts." },
          { title: "Spend hours calling lists", desc: "Confirming tomorrow's clinical sessions manually eats up valuable patient reception desk hours." },
          { title: "Health instructions are scattered", desc: "Post-care guidelines and treatment sheets are printed out individually or sent in scattered text threads." }
        ];
      case "retail":
        return [
          { title: "Check inventory levels manually", desc: "Checking fabric sizes, catalog stock levels, or holding items manually in chaotic customer chats." },
          { title: "Keep VIP buyer profiles manually", desc: "Buyer preferences, sizing profiles, and customized order cards are kept in disjointed note apps." },
          { title: "Depend on recurring seasonal shoppers", desc: "Consistent sales depend on recurring shoppers, which can be accelerated with personalized stock announcements." },
          { title: "Manual item hold follow-ups", desc: "Reminding buyers of ready pickups, customized fits, or dispatch statuses requires manual texting." },
          { title: "Invoicing and catalog are disjointed", desc: "Your collections showcase, payment sheets, and client balances live in separate, disconnected files." }
        ];
      case "gym":
        return [
          { title: "Manage trainer schedules manually", desc: "Coaches schedule personal sessions, group yoga timings, and client hours directly on personal chat threads." },
          { title: "Keep training progress on paper charts", desc: "Training sheets, body assessment logs, and member profiles are written down on physical cards." },
          { title: "Depend on membership renewals", desc: "Stable revenue rests on active members, which is best supported by gentle, friendly automated renewal alerts." },
          { title: "Uncomfortable manual billing calls", desc: "Staff make manual phone calls or write individual reminders for delayed pass renewals or expired terms." },
          { title: "Class rosters and member sheets are split", desc: "Daily yoga or strength class reservations, trainer logs, and fee entries are kept in scattered channels." }
        ];
      case "education":
        return [
          { title: "Reschedule classes via chat threads", desc: "Tutoring schedules, parent conferences, and extra classes are manually coordinated in endless chat groups." },
          { title: "Keep student records on sheets", desc: "Grades, attendance cards, special learning goals, and parent details are kept in separate spreadsheet notebooks." },
          { title: "Depend on regular course signups", desc: "Enrolments rely on friendly parent relationships, which is easily supported by clear periodic student newsletters." },
          { title: "Confirming daily sessions by hand", desc: "Reminding students of online meetings or tomorrow's special materials requires hours of manual messaging." },
          { title: "Lessons and billing are kept apart", desc: "Class rosters, homework uploads, and term fee invoices are maintained on completely separate portals." }
        ];
      case "manufacturing":
        return [
          { title: "Receive order sheets via WhatsApp", desc: "Industrial order numbers, size specs, and shipping dates are received in messy mobile chats." },
          { title: "Keep supplier records manually", desc: "Raw material prices, supplier contract logs, and purchase details are typed in scattered notebooks." },
          { title: "Depend on repeat industrial buyers", desc: "Long-term revenue relies on recurring contracts, which can be protected by automatic stock replenishment updates." },
          { title: "Manual supply chain updates", desc: "Informing buyers of factory updates, raw stock dispatches, or delay notes is handled manually by email." },
          { title: "Factory logs and delivery sheets are split", desc: "Stock levels, factory production cards, and courier details are saved on disjointed systems." }
        ];
      default:
        return [
          { title: "Manage client bookings over WhatsApp", desc: "Consultations and business meetings are scheduled in manual chats, which can sometimes lead to clashes." },
          { title: "Keep customer files manually", desc: "Project notes, customized contracts, and client specifications are typed in separate, scattered note files." },
          { title: "Depend on repeat custom agreements", desc: "Growth relies on long-term client relations, best supported by streamlined check-in workflows." },
          { title: "Manual schedule reminders", desc: "Confirming meeting dates, timing updates, or files required is handled by sending individual messages." },
          { title: "Project specs and invoices are separate", desc: "Project progress tracking, payment dates, and contract drafts live on completely separate apps." }
        ];
    }
  };

  const insightsList = getCustomInsightContent();

  return (
    <section 
      id="insights" 
      className="py-16 md:py-24 border-b border-slate-100 scroll-mt-20"
    >
      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
            Section 04 • Business Insights
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-black text-[#0B1F3A] tracking-tight">
            What We Learned
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-semibold">
            Based on our research and business observations.
          </p>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto font-medium leading-relaxed">
            Many {bLabelLower === "more businesses" ? "local businesses" : `${bLabelLower}s`} are doing exceptionally well, but they still lose valuable hours because of manual routines. Here is what we regularly notice:
          </p>
        </div>

        {/* Beautiful Cards (No warning icons, no negative tone, elegant and custom-designed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {insightsList.map((insight, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              id={`insight-card-${idx}`}
            >
              <div className="space-y-4">
                {/* Modern light blue indicator circle with Lucide Check icon */}
                <div className="h-9 w-9 rounded-xl bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 flex items-center justify-center text-[#2563EB]">
                  <Check className="h-4 w-4" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] tracking-tight">
                    {insight.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed">
                    {insight.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Special friendly assurance block */}
          <div className="bg-[#0B1F3A] text-white rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
            <span className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></span>
            
            <div className="space-y-3">
              <span className="text-[9px] uppercase font-mono tracking-widest text-blue-300 font-bold block">Advisory Note</span>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">A Smarter Workspace</h4>
              <p className="text-[11px] text-slate-300 leading-normal font-semibold">
                By organizing these scattered steps into a single quiet dashboard, you can save up to 10 hours every week.
              </p>
            </div>
            
            <div className="pt-4 border-t border-slate-700 text-[10px] font-bold text-slate-300">
              Technology should work for you.
            </div>
          </div>
        </div>

        {/* Does this sound familiar section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 max-w-md mx-auto space-y-5 text-center shadow-inner">
          <h3 className="text-sm sm:text-base font-bold text-[#0B1F3A] tracking-tight">
            Does this sound familiar?
          </h3>
          <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-sm mx-auto">
            You don't need complex software. You just need a simple, custom-tailored process. Let's look at how we approach solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={onContinue}
              className="bg-[#2563EB] hover:bg-blue-700 active:scale-95 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center gap-1.5 cursor-pointer"
              id="insights-continue-btn"
            >
              <span>Continue</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
