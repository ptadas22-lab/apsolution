import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const retailProfile: IndustryProfile = {
  id: "retail",
  name: "Retail & E-commerce",
  expectedData: {
    businessName: { label: "Store Name", source: "Public Records" },
    category: { label: "Category", source: "Public Directories" },
    location: { label: "Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "Facebook", source: "Facebook" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Store Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Online Store", source: "Public Directories" },
  },
  challenges: [
    "Inventory management",
    "Customer history",
    "Repeat purchases"
  ],
  workflowComparisons: [
    { currentWorkflow: "Stock checked manually on shelves", exampleWorkflow: "Inventory tracked digitally in real-time" },
    { currentWorkflow: "Customer preferences forgotten after purchase", exampleWorkflow: "Purchase history stored automatically" },
    { currentWorkflow: "No way to reach past customers", exampleWorkflow: "Targeted updates sent to previous buyers" },
    { currentWorkflow: "Sales recorded on paper at end of day", exampleWorkflow: "Sales dashboard updates instantly" }
  ],
  dashboardWidgets: [
    {
      id: "w-retail-1",
      type: "Metric",
      title: "Inventory Alert",
      icon: "ShieldCheck",
      colSpan: 2,
      data: {
        badgeText: "2 Low",
        badgeColor: "amber",
        items: [
          { time: "SKU-482", title: "Summer Collection T-Shirt", subtitle: "3 remaining", status: "amber" },
          { time: "SKU-911", title: "Denim Jacket", subtitle: "Out of stock", status: "rose" }
        ]
      }
    },
    {
      id: "w-retail-2",
      type: "Metric",
      title: "Today's Orders",
      icon: "FileText",
      colSpan: 2,
      data: {
        metrics: [
          { value: "42", label: "Completed", color: "emerald" },
          { value: "8", label: "Pending", color: "blue" }
        ]
      }
    },
    {
      id: "w-retail-3",
      type: "Metric",
      title: "Sales",
      icon: "LineChart",
      data: {
        label: "Today",
        value: "$2,450"
      }
    },
    {
      id: "w-retail-4",
      type: "Metric",
      title: "Customers",
      icon: "Users",
      data: {
        value: "68%",
        subtitle: "Return",
        footer: "Shoppers"
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];

    chain.push({
      observation: "Online storefront or inventory catalog may not be fully synced.",
      confidence: "High", source: "Public Directories",
      reasoning: "Retail businesses can often expand their reach by syncing their physical inventory with a digital storefront.",
      possibleImprovement: "Digital Inventory Integration",
      exampleSolution: "Unified Stock Dashboard",
      consultationQuestion: "How do you currently track your inventory levels?"
    });
    chain.push({
      observation: "Past customer purchase histories may not be actively tracked.",
      confidence: "Medium", source: "General Search",
      reasoning: "Building a database of past customers can enable targeted re-engagement for future sales.",
      possibleImprovement: "Customer Loyalty Tracking",
      exampleSolution: "Purchase History Database",
      consultationQuestion: "Do you have a way to contact customers who have bought from you before?"
    });
    chain.push({
      observation: "Active social media presence detected with potential product inquiries.",
      confidence: "Medium", source: "Instagram",
      reasoning: "Social media followers can often be converted into repeat buyers if product inquiries are managed efficiently.",
      possibleImprovement: "Social Commerce",
      exampleSolution: "Automated Inquiry Responses",
      consultationQuestion: "Do you receive product questions via social media?"
    });
    chain.push({
      observation: "Sales reporting and stock alerts may be generated manually.",
      confidence: "Low", source: "General Search",
      reasoning: "Automated stock alerts can help prevent popular items from selling out unexpectedly.",
      possibleImprovement: "Operations Management",
      exampleSolution: "Real-time Sales Analytics",
      consultationQuestion: "How do you know when to reorder stock?"
    });

    return chain;
  }
};
