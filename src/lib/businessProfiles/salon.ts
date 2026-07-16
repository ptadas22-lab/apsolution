import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const salonProfile: IndustryProfile = {
  id: "salon",
  name: "Salon & Spa",
  expectedData: {
    businessName: { label: "Business Name", source: "Public Records" },
    category: { label: "Category", source: "Public Directories" },
    location: { label: "Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "Facebook", source: "Facebook" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Business Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Online Booking", source: "Public Directories" },
  },
  challenges: [
    "Missed appointments",
    "Customer retention",
    "Review management"
  ],
  workflowComparisons: [
    { currentWorkflow: "Appointments managed manually", exampleWorkflow: "Appointments organised through an online booking dashboard" },
    { currentWorkflow: "Customer details stored in WhatsApp", exampleWorkflow: "Customer records organised inside one secure dashboard" },
    { currentWorkflow: "Manual follow-ups", exampleWorkflow: "Automatic reminders" },
    { currentWorkflow: "Business reports created manually", exampleWorkflow: "Automatic monthly reports" }
  ],
  dashboardWidgets: [
    {
      id: "w-salon-1",
      type: "Metric",
      title: "Today's Appointments",
      icon: "Calendar",
      colSpan: 2,
      data: {
        badgeText: "2 Left",
        badgeColor: "indigo",
        items: [
          { time: "10 AM", title: "Sarah Jenkins", subtitle: "Premium Service", status: "emerald" },
          { time: "02 PM", title: "Michael Chang", subtitle: "Standard Review", status: "amber" }
        ]
      }
    },
    {
      id: "w-salon-2",
      type: "Metric",
      title: "Customer History",
      icon: "Users",
      colSpan: 2,
      data: {
        metrics: [
          { value: "1,248", label: "Total Clients", color: "blue" },
          { value: "86%", label: "Return Rate", color: "emerald" }
        ]
      }
    },
    {
      id: "w-salon-3",
      type: "Metric",
      title: "Reports",
      icon: "LineChart",
      data: {
        label: "Est. Revenue",
        value: "$14.2k"
      }
    },
    {
      id: "w-salon-4",
      type: "Chat",
      title: "WhatsApp Demo",
      icon: "MessageSquare",
      colSpan: 2,
      data: {
        messages: [
          { text: "Hi! Can I reschedule my appointment for tomorrow?", isUser: true },
          { text: "Absolutely. We have a 2:00 PM slot available.", isUser: false }
        ]
      }
    },
    {
      id: "w-salon-5",
      type: "Metric",
      title: "Reviews",
      icon: "Star",
      data: {
        value: "4.9",
        subtitle: "/ 5.0",
        footer: "128 Total"
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "Appointments appear to be managed manually or through basic tools.",
      confidence: "High", source: "Public Directories",
      reasoning: "Manual scheduling may increase staff workload and can create booking conflicts during busy periods.",
      possibleImprovement: "Digital Appointment Management",
      exampleSolution: "Appointment Calendar with Automated Confirmation",
      consultationQuestion: "How do you currently manage appointments?"
    });
    chain.push({
      observation: "Customer communication often relies on direct messaging apps.",
      confidence: "Medium", source: "WhatsApp Business",
      reasoning: "High volumes of manual messaging commonly take time away from serving clients on the floor.",
      possibleImprovement: "Automated Messaging",
      exampleSolution: "Unified Inbox with Standard Replies",
      consultationQuestion: "How do customers usually contact you?"
    });
    chain.push({
      observation: "Public reviews are visible but may lack a consistent collection strategy.",
      confidence: "High", source: "Google Business Profile",
      reasoning: "A strong reputation can be leveraged to automatically request feedback from satisfied clients after their visit.",
      possibleImprovement: "Review Management",
      exampleSolution: "Post-Visit Feedback Pipeline",
      consultationQuestion: "Do you actively ask clients for reviews?"
    });
    chain.push({
      observation: "Client history is likely stored across different notebooks or basic spreadsheets.",
      confidence: "Low", source: "General Search",
      reasoning: "Businesses like yours often find that centralizing client preferences can enhance the personalization of services.",
      possibleImprovement: "Customer Management",
      exampleSolution: "Digital Customer Profiles",
      consultationQuestion: "Do you keep customer history?"
    });

    return chain;
  }
};
