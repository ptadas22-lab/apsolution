const fs = require('fs');
const path = require('path');

const profilesDir = path.join(__dirname, 'src', 'lib', 'businessProfiles');
const files = [
  'salon.ts', 'restaurant.ts', 'clinic.ts', 'gym.ts', 'retail.ts', 'manufacturing.ts', 'professional.ts', 'other.ts'
];

const getReplacement = (type) => {
  let opps = [];
  
  if (type === 'salon') {
    opps = `
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
`;
  } else if (type === 'restaurant') {
    opps = `
    chain.push({
      observation: "Direct online ordering systems may not be fully integrated.",
      confidence: "High", source: "Public Directories",
      reasoning: "Restaurants commonly rely on third-party apps, which can involve high commission fees.",
      possibleImprovement: "Direct Ordering Integration",
      exampleSolution: "Custom Ordering Website",
      consultationQuestion: "Are you paying high fees to delivery platforms?"
    });
    chain.push({
      observation: "Table reservations appear to be handled over the phone.",
      confidence: "Medium", source: "General Search",
      reasoning: "Managing bookings manually during peak hours may lead to missed calls or scheduling errors.",
      possibleImprovement: "Digital Reservations",
      exampleSolution: "Online Table Booking System",
      consultationQuestion: "How do you handle peak hour reservations?"
    });
    chain.push({
      observation: "Active social media presence detected without direct conversion links.",
      confidence: "Medium", source: "Instagram",
      reasoning: "A strong visual presence can often be directly connected to a table reservation or ordering system.",
      possibleImprovement: "Social Commerce",
      exampleSolution: "Instagram Booking Integration",
      consultationQuestion: "Do you receive reservation requests via social media?"
    });
    chain.push({
      observation: "Menu updates and promotions may be communicated manually.",
      confidence: "Low", source: "General Search",
      reasoning: "Consolidating customer contacts can allow for automated promotion distribution during slow periods.",
      possibleImprovement: "Customer Re-engagement",
      exampleSolution: "Automated Campaign Manager",
      consultationQuestion: "How do you inform past customers about new specials?"
    });
`;
  } else if (type === 'clinic') {
    opps = `
    chain.push({
      observation: "Patient appointments often involve phone-based scheduling.",
      confidence: "High", source: "Public Directories",
      reasoning: "Medical practices may struggle with phone congestion when patients call to book or reschedule.",
      possibleImprovement: "Patient Scheduling",
      exampleSolution: "Secure Online Booking Portal",
      consultationQuestion: "Does your reception spend significant time managing phone appointments?"
    });
    chain.push({
      observation: "Patient follow-ups and checkups may be tracked manually.",
      confidence: "Medium", source: "General Search",
      reasoning: "Automated reminders can help reduce missed appointments and improve patient care continuity.",
      possibleImprovement: "Automated Follow-ups",
      exampleSolution: "Patient Communication Dashboard",
      consultationQuestion: "How do you manage patient follow-ups?"
    });
    chain.push({
      observation: "Patient reviews are visible but may require active management.",
      confidence: "High", source: "Google Business Profile",
      reasoning: "Consistent, positive reviews can build trust, but collecting them manually is often difficult.",
      possibleImprovement: "Reputation Management",
      exampleSolution: "Automated Post-Visit Feedback",
      consultationQuestion: "Do you have a system for collecting patient feedback?"
    });
    chain.push({
      observation: "New patient intake processes may still rely on paper forms.",
      confidence: "Low", source: "General Search",
      reasoning: "Digitizing intake forms can save administrative time and improve record accuracy.",
      possibleImprovement: "Digital Onboarding",
      exampleSolution: "Secure Digital Intake Forms",
      consultationQuestion: "How do new patients currently register?"
    });
`;
  } else if (type === 'gym') {
    opps = `
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
`;
  } else if (type === 'retail') {
    opps = `
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
`;
  } else if (type === 'manufacturing') {
    opps = `
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
`;
  } else if (type === 'professional') {
    opps = `
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
`;
  } else {
    opps = `
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
`;
  }

  return `  generateChain: (snapshot, observations) => {
    const chain: RecommendationChain[] = [];
${opps}
    return chain;
  }`;
};

files.forEach(file => {
  const filePath = path.join(profilesDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the generateChain function block
  const startIdx = content.indexOf('  generateChain:');
  const endIdx = content.lastIndexOf('};');
  
  if (startIdx !== -1 && endIdx !== -1) {
    const newContent = content.substring(0, startIdx) + getReplacement(file.replace('.ts', '')) + '\n' + content.substring(endIdx);
    fs.writeFileSync(filePath, newContent);
    console.log('Updated', file);
  }
});
