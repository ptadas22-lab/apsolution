import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const genericProfile: IndustryProfile = {
  id: "generic",
  name: "Business",
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
    onlineBooking: { label: "Online Gateway", source: "Public Directories" },
  },
  challenges: [
    "Workflow organization",
    "Data centralization",
    "Customer tracking"
  ],
  workflowComparisons: [
    { currentWorkflow: "Information stored across multiple apps", exampleWorkflow: "All business data centralized in one dashboard" },
    { currentWorkflow: "Customer inquiries tracked manually", exampleWorkflow: "Inquiries organized automatically by priority" },
    { currentWorkflow: "Manual reporting at month end", exampleWorkflow: "Real-time analytics available constantly" },
    { currentWorkflow: "Repetitive administrative tasks", exampleWorkflow: "Automated routine operations" }
  ],
  dashboardWidgets: [
    {
      id: "w-gen-1",
      type: "Metric",
      title: "Recent Activity",
      icon: "Calendar",
      colSpan: 2,
      data: {
        badgeText: "Real-time",
        badgeColor: "emerald",
        items: [
          { time: "10:30 AM", title: "New Inquiry", subtitle: "Website form", status: "emerald" },
          { time: "11:15 AM", title: "Action Required", subtitle: "Follow-up", status: "amber" }
        ]
      }
    },
    {
      id: "w-gen-2",
      type: "Metric",
      title: "Key Metrics",
      icon: "BarChart3",
      colSpan: 2,
      data: {
        metrics: [
          { value: "48", label: "Active Items", color: "blue" },
          { value: "92%", label: "Completion", color: "emerald" }
        ]
      }
    },
    {
      id: "w-gen-3",
      type: "Metric",
      title: "Performance",
      icon: "LineChart",
      data: {
        label: "This Month",
        value: "On Track"
      }
    },
    {
      id: "w-gen-4",
      type: "Chat",
      title: "Customer Comms",
      icon: "MessageSquare",
      colSpan: 2,
      data: {
        messages: [
          { text: "Can you provide more information?", isUser: true },
          { text: "Certainly! I've sent the details to your email.", isUser: false }
        ]
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "An official centralized business portal may not be fully established.",
      confidence: "High", source: "Public Directories",
      reasoning: "A digital hub can help establish credibility and capture leads automatically.",
      possibleImprovement: "Digital Presence",
      exampleSolution: "Centralized Business Hub",
      consultationQuestion: "Where do you direct customers who want to learn more about your services?"
    });
    chain.push({
      observation: "Customer inquiries may be tracked manually across multiple platforms.",
      confidence: "Medium", source: "General Search",
      reasoning: "High volumes of direct messaging can be organized more easily using a centralized inbox system.",
      possibleImprovement: "Communication Management",
      exampleSolution: "Unified Inbox",
      consultationQuestion: "Is managing direct messages taking up a significant portion of your day?"
    });
    chain.push({
      observation: "Routine administrative tasks appear to be handled manually.",
      confidence: "Medium", source: "General Search",
      reasoning: "Businesses of any type can often improve efficiency by connecting scattered processes into one dashboard.",
      possibleImprovement: "Operational Efficiency",
      exampleSolution: "Central Dashboard",
      consultationQuestion: "Are you using multiple different software tools to run your business?"
    });
    chain.push({
      observation: "Customer history and feedback may not be consolidated.",
      confidence: "Low", source: "General Search",
      reasoning: "Centralizing customer information can help businesses identify trends and improve service delivery.",
      possibleImprovement: "Data Centralization",
      exampleSolution: "Unified Customer Database",
      consultationQuestion: "How do you keep track of your most loyal customers?"
    });

    return chain;
  }
};
