import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const professionalProfile: IndustryProfile = {
  id: "professional",
  name: "Professional Services",
  expectedData: {
    businessName: { label: "Firm Name", source: "Public Records" },
    category: { label: "Service Type", source: "Public Directories" },
    location: { label: "Office Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "LinkedIn", source: "LinkedIn" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Office Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Consultation Booking", source: "Public Directories" },
  },
  challenges: [
    "Client onboarding",
    "Document management",
    "Billing tracking"
  ],
  workflowComparisons: [
    { currentWorkflow: "Client details scattered across emails", exampleWorkflow: "All client history organized in a secure CRM" },
    { currentWorkflow: "Contracts sent and signed manually", exampleWorkflow: "Digital documents signed automatically" },
    { currentWorkflow: "Billable hours calculated in spreadsheets", exampleWorkflow: "Time tracked directly into automated invoices" },
    { currentWorkflow: "Consultations booked back-and-forth over email", exampleWorkflow: "Clients select available slots directly from a calendar" }
  ],
  dashboardWidgets: [
    {
      id: "w-prof-1",
      type: "Metric",
      title: "Active Projects",
      icon: "FileText",
      colSpan: 2,
      data: {
        badgeText: "3 Deadlines",
        badgeColor: "amber",
        items: [
          { time: "Due Today", title: "Acme Corp Audit", subtitle: "Review Phase", status: "amber" },
          { time: "Due Friday", title: "Smith Contract", subtitle: "Drafting", status: "emerald" }
        ]
      }
    },
    {
      id: "w-prof-2",
      type: "Metric",
      title: "Client Pipeline",
      icon: "Users",
      colSpan: 2,
      data: {
        metrics: [
          { value: "14", label: "Active Leads", color: "blue" },
          { value: "6", label: "In Onboarding", color: "emerald" }
        ]
      }
    },
    {
      id: "w-prof-3",
      type: "Metric",
      title: "Billable Time",
      icon: "Calendar",
      data: {
        label: "This Week",
        value: "32 hrs"
      }
    },
    {
      id: "w-prof-4",
      type: "Chat",
      title: "Client Messages",
      icon: "MessageSquare",
      colSpan: 2,
      data: {
        messages: [
          { text: "Have you received the signed documents?", isUser: true },
          { text: "Yes, they are safely stored in your file.", isUser: false }
        ]
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "Consultation scheduling appears to rely on back-and-forth communication.",
      confidence: "High", source: "Public Directories",
      reasoning: "Professional firms may lose billable time when scheduling requires extensive email coordination.",
      possibleImprovement: "Automated Scheduling",
      exampleSolution: "Client Booking Calendar",
      consultationQuestion: "How much time is spent scheduling client consultations?"
    });
    chain.push({
      observation: "Client onboarding and document collection may be handled manually.",
      confidence: "Medium", source: "General Search",
      reasoning: "Firms like yours often find that digital intake portals can speed up the onboarding process.",
      possibleImprovement: "Client Onboarding",
      exampleSolution: "Secure Document Portal",
      consultationQuestion: "How do you collect sensitive documents from clients?"
    });
    chain.push({
      observation: "Firm website is active but may lack integrated lead capture.",
      confidence: "Medium", source: "Official Website",
      reasoning: "A firm's website can serve as an active lead generation tool if a client intake system is integrated.",
      possibleImprovement: "Lead Capture",
      exampleSolution: "Digital Intake Forms",
      consultationQuestion: "How do you capture details from prospective clients?"
    });
    chain.push({
      observation: "Project deliverables and billable hours may be tracked in spreadsheets.",
      confidence: "Low", source: "General Search",
      reasoning: "Organizing client data and billing in one system can help ensure compliance and prevent missed invoices.",
      possibleImprovement: "Practice Management",
      exampleSolution: "Unified Client Dashboard",
      consultationQuestion: "How do you track project deliverables and billing?"
    });

    return chain;
  }
};
