import { IndustryProfile, RecommendationChain, WorkflowScenario, StatusIndicator } from "../types/engine";

// Helper to determine status based on string value from API
export const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

// Common dummy dashboard structures
const generateDummyDashboard = (type: string) => {
  return {
    title: "Example Co.",
    subtitle: "Dummy Data Preview",
    appointmentsLeft: "2 Left",
    revenue: "$14.2k",
    reviews: "4.9",
    totalReviews: "128 Total",
    whatsappDemo: [
      { text: "Hi! Can I reschedule my appointment for tomorrow?", isUser: true },
      { text: `Absolutely. We have a 2:00 PM slot available.`, isUser: false }
    ]
  };
};

const defaultWorkflows: WorkflowScenario[] = [
  { currentWorkflow: "Appointments managed manually", exampleWorkflow: "Appointments organised through an online booking dashboard" },
  { currentWorkflow: "Customer details stored in WhatsApp", exampleWorkflow: "Customer records organised inside one secure dashboard" },
  { currentWorkflow: "Manual follow-ups", exampleWorkflow: "Automatic reminders" },
  { currentWorkflow: "Business reports created manually", exampleWorkflow: "Automatic monthly reports" }
];

export const industryProfiles: Record<string, IndustryProfile> = {
  salon: {
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
    workflowComparisons: defaultWorkflows,
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
    },
    dummyDashboard: generateDummyDashboard("salon")
  }
};

// Fallback profile if industry is not specifically matched
export const getIndustryProfile = (industry: string): IndustryProfile => {
  const normalized = industry.toLowerCase();
  if (normalized.includes("salon") || normalized.includes("spa")) return industryProfiles["salon"];
  
  // Create a generic fallback dynamically based on the salon template for now
  return {
    ...industryProfiles["salon"],
    id: "generic",
    name: "General Business",
    dummyDashboard: generateDummyDashboard("generic")
  };
};
