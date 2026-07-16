import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const restaurantProfile: IndustryProfile = {
  id: "restaurant",
  name: "Restaurant & Cafe",
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
    onlineBooking: { label: "Online Ordering", source: "Public Directories" },
  },
  challenges: [
    "Peak hour management",
    "Repeat customers",
    "Delivery coordination"
  ],
  workflowComparisons: [
    { currentWorkflow: "Orders taken manually on paper", exampleWorkflow: "Orders sent directly to a kitchen display system" },
    { currentWorkflow: "Customer history not tracked", exampleWorkflow: "Repeat customers identified automatically" },
    { currentWorkflow: "Delivery partners managed via separate apps", exampleWorkflow: "All delivery orders consolidated on one screen" },
    { currentWorkflow: "End of day cash tallied manually", exampleWorkflow: "Automatic daily revenue reports generated" }
  ],
  dashboardWidgets: [
    {
      id: "w-rest-1",
      type: "Metric",
      title: "Active Tables",
      icon: "Users",
      colSpan: 2,
      data: {
        badgeText: "8/12 Full",
        badgeColor: "indigo",
        items: [
          { time: "Table 4", title: "Party of 2", subtitle: "Mains served", status: "emerald" },
          { time: "Table 7", title: "Party of 6", subtitle: "Waiting on drinks", status: "amber" }
        ]
      }
    },
    {
      id: "w-rest-2",
      type: "Metric",
      title: "Delivery Queue",
      icon: "Calendar",
      colSpan: 2,
      data: {
        metrics: [
          { value: "14", label: "Pending", color: "amber" },
          { value: "12m", label: "Avg Prep", color: "emerald" }
        ]
      }
    },
    {
      id: "w-rest-3",
      type: "Metric",
      title: "Kitchen Load",
      icon: "LineChart",
      data: {
        label: "Tickets",
        value: "22 Active"
      }
    },
    {
      id: "w-rest-4",
      type: "Metric",
      title: "Reviews",
      icon: "Star",
      data: {
        value: "4.7",
        subtitle: "/ 5.0",
        footer: "342 Total"
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];
    
    if (determineStatus(snapshot.onlineBooking) === "Not Found") {
      chain.push({
        observation: "Direct online ordering not detected.",
        confidence: "High",
        source: "Public Directories",
        reasoning: "Restaurants paying high third-party commissions often benefit from a direct ordering system.",
        possibleImprovement: "Direct Ordering",
        exampleSolution: "Custom Ordering Website",
        consultationQuestion: "Are you paying high fees to delivery platforms?"
      });
    }

    if (determineStatus(snapshot.instagramFound) === "Good" || determineStatus(snapshot.instagramFound) === "Available") {
      chain.push({
        observation: "Active Instagram presence detected.",
        confidence: "Medium",
        source: "Instagram",
        reasoning: "A strong visual presence can be directly connected to a table reservation or ordering system.",
        possibleImprovement: "Social Commerce",
        exampleSolution: "Instagram Booking Integration",
        consultationQuestion: "Do you receive reservation requests via social media?"
      });
    }

    if (chain.length === 0) {
      chain.push({
        observation: "Basic online presence detected.",
        confidence: "Low",
        source: "General Search",
        reasoning: "Consolidating operations can streamline peak hour service.",
        possibleImprovement: "Operations Management",
        exampleSolution: "Unified POS Dashboard",
        consultationQuestion: "How do you manage peak hour orders?"
      });
    }

    return chain;
  }
};
