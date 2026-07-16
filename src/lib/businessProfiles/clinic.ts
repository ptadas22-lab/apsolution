import { IndustryProfile, RecommendationChain, StatusIndicator } from "../types/engine";

const determineStatus = (value: string | undefined): StatusIndicator => {
  if (!value || value === "Not Found" || value === "No") return "Not Found";
  if (value.toLowerCase().includes("active") || value.toLowerCase().includes("yes")) return "Good";
  return "Available";
};

export const clinicProfile: IndustryProfile = {
  id: "clinic",
  name: "Medical Clinic",
  expectedData: {
    businessName: { label: "Clinic Name", source: "Public Records" },
    category: { label: "Category", source: "Public Directories" },
    location: { label: "Location", source: "Google Maps" },
    googleRating: { label: "Google Rating", source: "Google Business Profile" },
    reviewCount: { label: "Review Count", source: "Google Business Profile" },
    websiteFound: { label: "Website", source: "Official Website" },
    instagramFound: { label: "Instagram", source: "Instagram" },
    facebookFound: { label: "Facebook", source: "Facebook" },
    whatsApp: { label: "WhatsApp", source: "WhatsApp Business" },
    businessHours: { label: "Clinic Hours", source: "Google Business Profile" },
    onlineBooking: { label: "Online Appointments", source: "Public Directories" },
  },
  challenges: [
    "Appointment scheduling",
    "Patient follow-up",
    "Medical records"
  ],
  workflowComparisons: [
    { currentWorkflow: "Patient appointments booked over phone", exampleWorkflow: "Patients book appointments securely online" },
    { currentWorkflow: "Manual follow-up calls for checkups", exampleWorkflow: "Automated checkup reminders sent to patients" },
    { currentWorkflow: "Paper-based patient intake forms", exampleWorkflow: "Digital intake forms completed before arrival" },
    { currentWorkflow: "Scattered patient communication", exampleWorkflow: "All patient messages managed in one secure dashboard" }
  ],
  dashboardWidgets: [
    {
      id: "w-clinic-1",
      type: "Metric",
      title: "Today's Consultations",
      icon: "Calendar",
      colSpan: 2,
      data: {
        badgeText: "4 Pending",
        badgeColor: "indigo",
        items: [
          { time: "09 AM", title: "James Wilson", subtitle: "General Checkup", status: "emerald" },
          { time: "11 AM", title: "Maria Garcia", subtitle: "Follow-up", status: "amber" }
        ]
      }
    },
    {
      id: "w-clinic-2",
      type: "Metric",
      title: "Patient Records",
      icon: "FileText",
      colSpan: 2,
      data: {
        metrics: [
          { value: "3,142", label: "Active Patients", color: "blue" },
          { value: "98%", label: "Completion Rate", color: "emerald" }
        ]
      }
    },
    {
      id: "w-clinic-3",
      type: "Metric",
      title: "New Registrations",
      icon: "Users",
      data: {
        label: "This Week",
        value: "+24"
      }
    },
    {
      id: "w-clinic-4",
      type: "Chat",
      title: "Patient Messages",
      icon: "MessageSquare",
      colSpan: 2,
      data: {
        messages: [
          { text: "Are my test results available yet?", isUser: true },
          { text: "Yes, they have been uploaded to your secure portal.", isUser: false }
        ]
      }
    }
  ],
  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];
    
    if (determineStatus(snapshot.onlineBooking) === "Not Found") {
      chain.push({
        observation: "Appointment requests appear to be managed manually.",
        confidence: "High",
        source: "Public Directories",
        reasoning: "Medical practices often struggle with phone congestion when patients call to book or reschedule.",
        possibleImprovement: "Patient Scheduling",
        exampleSolution: "Secure Online Booking Portal",
        consultationQuestion: "Does your reception spend significant time managing phone appointments?"
      });
    }

    if (determineStatus(snapshot.googleRating) === "Available" || determineStatus(snapshot.googleRating) === "Good") {
      chain.push({
        observation: `Patient reviews are visible (Rating: ${snapshot.googleRating}).`,
        confidence: "Medium",
        source: "Google Business Profile",
        reasoning: "Consistent, positive reviews build trust for medical practices, but collecting them manually is difficult.",
        possibleImprovement: "Reputation Management",
        exampleSolution: "Automated Post-Visit Feedback",
        consultationQuestion: "Do you have a system for collecting patient feedback?"
      });
    }

    if (chain.length === 0) {
      chain.push({
        observation: "Basic online presence detected.",
        confidence: "Low",
        source: "General Search",
        reasoning: "Consolidating patient communications can significantly reduce administrative burden.",
        possibleImprovement: "Practice Management",
        exampleSolution: "Unified Clinic Dashboard",
        consultationQuestion: "How do you manage patient follow-ups?"
      });
    }

    return chain;
  }
};
