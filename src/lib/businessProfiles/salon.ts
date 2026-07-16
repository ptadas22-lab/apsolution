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
    
    if (determineStatus(snapshot.onlineBooking) === "Not Found") {
      chain.push({
        observation: "Online booking not detected.",
        confidence: "High",
        source: "Public Directories",
        reasoning: "Businesses that receive frequent appointments often choose organised booking systems to reduce manual scheduling.",
        possibleImprovement: "Online Booking",
        exampleSolution: "Appointment Dashboard",
        consultationQuestion: "How do you currently manage appointments?"
      });
    }

    if (determineStatus(snapshot.whatsApp) === "Good" || determineStatus(snapshot.whatsApp) === "Available") {
      chain.push({
        observation: "Customer communication appears to rely on WhatsApp.",
        confidence: "Medium",
        source: "WhatsApp Business",
        reasoning: "High volumes of manual messaging can be streamlined using standard automated replies.",
        possibleImprovement: "WhatsApp Automation",
        exampleSolution: "Automated Messaging System",
        consultationQuestion: "How do customers usually contact you?"
      });
    }

    if (determineStatus(snapshot.googleRating) === "Available" || determineStatus(snapshot.googleRating) === "Good") {
      chain.push({
        observation: `Local reputation is visible (Rating: ${snapshot.googleRating}).`,
        confidence: "High",
        source: "Google Business Profile",
        reasoning: "A strong reputation can be leveraged to automatically request feedback from satisfied clients.",
        possibleImprovement: "Review Management",
        exampleSolution: "Feedback Collection Pipeline",
        consultationQuestion: "Do you actively ask clients for reviews?"
      });
    }

    if (chain.length === 0) {
      chain.push({
        observation: "Basic online presence detected.",
        confidence: "Low",
        source: "General Search",
        reasoning: "Even established businesses can consolidate their scattered public information into one system.",
        possibleImprovement: "Customer Management",
        exampleSolution: "Customer Dashboard",
        consultationQuestion: "Do you keep customer history?"
      });
    }

    return chain;
  }
};
