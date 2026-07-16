import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const manufacturingProfile: IndustryProfile = {
  id: "manufacturing",
  name: "Manufacturing",
  expectedData: {
    businessName: { label: "Company Name", source: "Public Records" },
    category: { label: "Sector", source: "Public Directories" },
    location: { label: "Facility Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "Facebook", source: "Facebook" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Operating Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Supplier Portal", source: "Public Directories" },
  },
  challenges: [
    "Production planning",
    "Order tracking",
    "Inventory visibility"
  ],
  workflowComparisons: [
    { currentWorkflow: "Production orders written on whiteboards", exampleWorkflow: "Production tracked digitally in real-time" },
    { currentWorkflow: "Raw material inventory counted manually", exampleWorkflow: "Inventory levels update automatically upon use" },
    { currentWorkflow: "Dispatch status communicated via phone calls", exampleWorkflow: "Clients receive automated dispatch updates" },
    { currentWorkflow: "Quality control forms filled on paper", exampleWorkflow: "QC reports logged directly into a central database" }
  ],
  dashboardWidgets: [
    {
      id: "w-mfg-1",
      type: "Metric",
      title: "Active Production",
      icon: "Workflow",
      colSpan: 2,
      data: {
        badgeText: "On Schedule",
        badgeColor: "emerald",
        items: [
          { time: "Line A", title: "Batch #4421", subtitle: "Assembly", status: "emerald" },
          { time: "Line B", title: "Batch #4422", subtitle: "Awaiting QA", status: "amber" }
        ]
      }
    },
    {
      id: "w-mfg-2",
      type: "Metric",
      title: "Material Inventory",
      icon: "ShieldCheck",
      colSpan: 2,
      data: {
        metrics: [
          { value: "Adequate", label: "Raw Materials", color: "blue" },
          { value: "Warning", label: "Packaging", color: "amber" }
        ]
      }
    },
    {
      id: "w-mfg-3",
      type: "Metric",
      title: "Output",
      icon: "LineChart",
      data: {
        label: "Units Today",
        value: "1,240"
      }
    },
    {
      id: "w-mfg-4",
      type: "Metric",
      title: "Dispatch",
      icon: "FileText",
      data: {
        value: "12",
        subtitle: "Orders",
        footer: "Shipped"
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "Client order tracking and supplier portals may not be digitized.",
      confidence: "High", source: "Public Directories",
      reasoning: "B2B clients often expect a digital interface to check order status without calling the office.",
      possibleImprovement: "B2B Visibility",
      exampleSolution: "Client Order Tracking Portal",
      consultationQuestion: "How do your clients currently check the status of their orders?"
    });
    chain.push({
      observation: "Production tracking and inventory updates may involve manual data entry.",
      confidence: "Medium", source: "General Search",
      reasoning: "Manufacturing operations generate significant data that can be difficult to track efficiently on paper.",
      possibleImprovement: "Operational Tracking",
      exampleSolution: "Digital Production Dashboard",
      consultationQuestion: "How do you track inventory on the shop floor?"
    });
    chain.push({
      observation: "Supplier communication may rely heavily on ad-hoc messaging.",
      confidence: "Medium", source: "WhatsApp Business",
      reasoning: "Ad-hoc messaging for critical order updates can occasionally lead to miscommunication or delays.",
      possibleImprovement: "Communication Centralization",
      exampleSolution: "Automated Status Notifications",
      consultationQuestion: "How much time is spent answering calls about order status?"
    });
    chain.push({
      observation: "Quality control and dispatch logs may be scattered.",
      confidence: "Low", source: "General Search",
      reasoning: "Centralizing quality reports can help identify bottlenecks in the production line.",
      possibleImprovement: "Quality Management",
      exampleSolution: "Unified QC Database",
      consultationQuestion: "How are your quality control checks recorded?"
    });

    return chain;
  }
};
