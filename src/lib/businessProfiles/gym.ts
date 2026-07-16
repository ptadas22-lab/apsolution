import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const gymProfile: IndustryProfile = {
  id: "gym",
  name: "Gym & Fitness",
  expectedData: {
    businessName: { label: "Gym Name", source: "Public Records" },
    category: { label: "Category", source: "Public Directories" },
    location: { label: "Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "Facebook", source: "Facebook" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Opening Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Class Booking", source: "Public Directories" },
  },
  challenges: [
    "Membership renewals",
    "Attendance tracking",
    "Trainer scheduling"
  ],
  workflowComparisons: [
    { currentWorkflow: "Memberships managed in spreadsheets", exampleWorkflow: "Memberships managed via a central dashboard" },
    { currentWorkflow: "Manual follow-ups for expired plans", exampleWorkflow: "Automated renewal reminders sent to members" },
    { currentWorkflow: "Class bookings taken over phone", exampleWorkflow: "Members book classes via their mobile devices" },
    { currentWorkflow: "Trainer schedules organised on paper", exampleWorkflow: "Trainer availability synced digitally" }
  ],
  dashboardWidgets: [
    {
      id: "w-gym-1",
      type: "Metric",
      title: "Active Members",
      icon: "Users",
      colSpan: 2,
      data: {
        badgeText: "Stable",
        badgeColor: "emerald",
        items: [
          { time: "New", title: "John Doe", subtitle: "Annual Plan", status: "emerald" },
          { time: "Expiring", title: "Emma Smith", subtitle: "Monthly Plan", status: "amber" }
        ]
      }
    },
    {
      id: "w-gym-2",
      type: "Metric",
      title: "Class Bookings",
      icon: "Calendar",
      colSpan: 2,
      data: {
        metrics: [
          { value: "24", label: "Yoga (6 PM)", color: "blue" },
          { value: "12", label: "HIIT (7 PM)", color: "amber" }
        ]
      }
    },
    {
      id: "w-gym-3",
      type: "Metric",
      title: "Attendance",
      icon: "LineChart",
      data: {
        label: "Today",
        value: "142 Check-ins"
      }
    },
    {
      id: "w-gym-4",
      type: "Metric",
      title: "Renewals",
      icon: "FileText",
      data: {
        value: "84%",
        subtitle: "Rate",
        footer: "This Month"
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "Class or session bookings appear to be managed manually.",
      confidence: "High", source: "Public Directories",
      reasoning: "Fitness centers can often eliminate reception bottlenecks by allowing members to self-schedule.",
      possibleImprovement: "Member Self-Service",
      exampleSolution: "Digital Class Booking App",
      consultationQuestion: "How do members currently book personal training or classes?"
    });
    chain.push({
      observation: "Membership renewals and expirations may be tracked manually.",
      confidence: "Medium", source: "General Search",
      reasoning: "Managing member records manually can occasionally lead to missed renewal opportunities.",
      possibleImprovement: "Automated Renewals",
      exampleSolution: "Membership Tracking Dashboard",
      consultationQuestion: "How do you track when a member's plan is expiring?"
    });
    chain.push({
      observation: "Active social media presence detected with potential inquiries.",
      confidence: "Medium", source: "Instagram",
      reasoning: "Fitness businesses often receive membership inquiries via social media that require timely follow-up.",
      possibleImprovement: "Lead Management",
      exampleSolution: "Social Media Inquiry Funnel",
      consultationQuestion: "Do you track inquiries that come through social media?"
    });
    chain.push({
      observation: "Member attendance and progress tracking may be fragmented.",
      confidence: "Low", source: "General Search",
      reasoning: "Centralizing attendance data can help identify members who may be losing motivation.",
      possibleImprovement: "Member Engagement",
      exampleSolution: "Automated Check-in System",
      consultationQuestion: "Do you track member attendance rates?"
    });

    return chain;
  }
};
