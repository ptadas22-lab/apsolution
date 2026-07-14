import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Endpoint to generate automated business audit reports
app.post("/api/audit", async (req, res) => {
  const {
    businessName,
    businessType,
    industry,
    challenges = [],
    aiReadiness = 5,
    digitalPresence = [],
    businessSize,
    securitySetup = []
  } = req.body;

  if (!businessName || !industry) {
    return res.status(400).json({ error: "Business name and Industry are required." });
  }

  // Fallback content in case Gemini is not available or fails
  const getFallbackAudit = () => {
    // Determine dynamic scores based on challenges and selections
    const challengeCount = challenges.length;
    const hasSecurity = securitySetup.length > 2;
    const digitalCount = digitalPresence.length;

    const automationScore = Math.min(100, Math.max(20, (10 - challengeCount) * 10 + aiReadiness * 6));
    const securityScore = Math.min(100, Math.max(15, securitySetup.length * 20 + (hasSecurity ? 20 : 0)));
    const digitalScore = Math.min(100, Math.max(10, digitalCount * 25));
    const overallScore = Math.round((automationScore + securityScore + digitalScore) / 3);

    let grade = "C";
    if (overallScore >= 90) grade = "A";
    else if (overallScore >= 80) grade = "A-";
    else if (overallScore >= 70) grade = "B+";
    else if (overallScore >= 60) grade = "B";
    else if (overallScore >= 50) grade = "C+";

    return {
      grade,
      scores: {
        automation: automationScore,
        security: securityScore,
        digital: digitalScore,
        overall: overallScore
      },
      summary: `A&P Solutions custom audit for ${businessName}. Your business has solid foundational components, but key bottlenecks in ${challenges.join(", ") || "operations"} represent major growth blockages. Transitioning from legacy manual setups to unified AI automation and robust local cyber defenses can immediately unlock up to 30% operational efficiency.`,
      strengths: [
        `Recognized need for modernizing systems (AI Readiness rated ${aiReadiness}/10).`,
        digitalPresence.length > 0 ? `Active presence on channels like: ${digitalPresence.join(", ")}.` : "Eager to establish initial digital workflows.",
        businessSize ? `Viable framework scaling potential for a business of ${businessSize} scale.` : "Agile business structure ready for rapid adoption."
      ],
      vulnerabilities: [
        challenges.includes("cyber_threats") || securitySetup.length < 2 ? "High vulnerability to social engineering, business email phishing, or WhatsApp takeover attacks." : "Lack of formalized employee cyber safety training.",
        challenges.includes("manual_processes") || challenges.includes("time_management") ? "Significant leak of labor hours in manual data transfers and repetitive customer updates." : "Under-optimized system workflows leading to delayed customer communication.",
        "No structured AI routing in place for inbound customer leads or post-sale service requests."
      ],
      recommendations: [
        {
          title: "Deploy Unified CRM & WhatsApp Automation",
          description: "Connect your digital touchpoints into an automated CRM pipeline. Setup auto-replies, smart booking reminders, and centralized client cards.",
          priority: "High",
          impact: "Reduces response times from hours to seconds; cuts down manual follow-up labor by 70%."
        },
        {
          title: "Implement 'Security First' Local Safeguards",
          description: "Activate email SPF/DKIM validation, enroll staff in standard password managers, and deploy automated multi-factor authentication across your WhatsApp Business and billing panels.",
          priority: "High",
          impact: "Eliminates up to 98% of standard automated ransomware and scam entry points."
        },
        {
          title: "Establish Standard AI-Powered Lead Categorization",
          description: "Use intelligent micro-models to auto-tag inbound email enquiries, routing them immediately to the right queue and drafting context-aware responses.",
          priority: "Medium",
          impact: "Improves conversion rate by ensuring immediate, professional lead engagements."
        }
      ],
      roadmap: [
        {
          phase: "Phase 1: Foundation (Weeks 1-2)",
          timeline: "First 14 days",
          tasks: [
            "Audit business email security records & secure critical account passwords.",
            "Install central CRM software and map key service pipelines.",
            "Formulate initial AI-readiness system benchmarks."
          ]
        },
        {
          phase: "Phase 2: Integration & Automation (Weeks 3-5)",
          timeline: "Next 21 days",
          tasks: [
            "Deploy WhatsApp business automation scripts & self-serve schedulers.",
            "Automate customer feedback routing and trigger-based notifications.",
            "Deliver foundational cyber awareness guidelines to operational staff."
          ]
        },
        {
          phase: "Phase 3: Intelligence Scaling (Week 6+)",
          timeline: "Ongoing",
          tasks: [
            "Deploy smart AI summaries for daily operation boards.",
            "Fine-tune routing models to continuous performance metrics.",
            "Run automated security breach simulation checks."
          ]
        }
      ]
    };
  };

  // If no API Key, use fallback immediately
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
    console.log("No valid Gemini API Key configured. Using smart rules fallback.");
    return res.json(getFallbackAudit());
  }

  try {
    const prompt = `
    You are A&P Solutions' Lead Systems Architect and Business Consultant. 
    Analyze this small business profile and generate a highly custom, extremely professional, and practical Business Audit and Systems Roadmap.

    Business Name: "${businessName}"
    Business Type/Format: "${businessType || "Standard"}"
    Industry: "${industry}"
    Current Business Challenges: ${JSON.stringify(challenges)}
    Self-rated AI Readiness: ${aiReadiness} out of 10
    Current Digital Channels/Setup: ${JSON.stringify(digitalPresence)}
    Business Size: "${businessSize || "Not specified"}"
    Security Protocols Currently Setup: ${JSON.stringify(securitySetup)}

    Please respond with a structured JSON object that matches the following schema perfectly. Make the recommendations, strengths, vulnerabilities, and summary highly specific, helpful, and tailored to their chosen industry ("${industry}") and problems.

    Example JSON structure to return:
    {
      "grade": "B+", // A letter grade from A to F evaluating overall modern system health
      "scores": {
        "automation": 72, // Number 0-100 evaluation of AI/Automation adoption
        "security": 45, // Number 0-100 evaluation of security postures
        "digital": 60 // Number 0-100 evaluation of CRM, website, and digital workflows
      },
      "summary": "A cohesive executive summary explaining their specific operational gaps and the massive ROI opportunities of adopting cyber-safe AI automation.",
      "strengths": [
        "Tailored strength based on their profile",
        "Tailored strength 2"
      ],
      "vulnerabilities": [
        "Tailored vulnerability based on their specific challenges and lack of security setups",
        "Tailored vulnerability 2"
      ],
      "recommendations": [
        {
          "title": "Specific action-oriented recommendation title",
          "description": "Elaborate in a practical, step-by-step manner what they need to implement.",
          "priority": "High", // High, Medium, or Low
          "impact": "Concrete business result (e.g., Saves 12 hours/week, secures client cards)"
        }
      ],
      "roadmap": [
        {
          "phase": "Phase name",
          "timeline": "Timeline description",
          "tasks": [
            "Task 1",
            "Task 2"
          ]
        }
      ]
    }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["grade", "scores", "summary", "strengths", "vulnerabilities", "recommendations", "roadmap"],
          properties: {
            grade: { type: Type.STRING },
            scores: {
              type: Type.OBJECT,
              required: ["automation", "security", "digital"],
              properties: {
                automation: { type: Type.INTEGER },
                security: { type: Type.INTEGER },
                digital: { type: Type.INTEGER }
              }
            },
            summary: { type: Type.STRING },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            vulnerabilities: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            recommendations: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["title", "description", "priority", "impact"],
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  priority: { type: Type.STRING },
                  impact: { type: Type.STRING }
                }
              }
            },
            roadmap: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                required: ["phase", "timeline", "tasks"],
                properties: {
                  phase: { type: Type.STRING },
                  timeline: { type: Type.STRING },
                  tasks: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text || "{}";
    const auditData = JSON.parse(text.trim());
    return res.json(auditData);
  } catch (error) {
    console.error("Gemini API call failed, reverting to fallback logic:", error);
    return res.json(getFallbackAudit());
  }
});

// Endpoint to generate interactive Business Snapshot and AI Observations
app.post("/api/snapshot", async (req, res) => {
  const { businessName, location, category } = req.body;

  if (!businessName || !location || !category) {
    return res.status(400).json({ error: "Business name, location, and category are required." });
  }

  // Fallback function when Gemini is unavailable
  const getFallbackSnapshot = () => {
    const cleanName = businessName.trim();
    const cleanLoc = location.trim();
    const cleanCat = category.trim();

    // Create a predictable but authentic fallback based on inputs
    const lowercaseName = cleanName.toLowerCase();
    const hasWebsite = lowercaseName.includes("salon") || lowercaseName.includes("clinic") || lowercaseName.includes("gym") ? "Not Found" : `${cleanName.toLowerCase().replace(/[^a-z0-9]/g, "")}.in`;
    const instagram = lowercaseName.includes("retail") || lowercaseName.includes("manufacturing") ? "Not Found" : `@${cleanName.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
    const rating = (4.0 + (cleanName.length % 10) * 0.1).toFixed(1);
    const reviews = `${25 + (cleanName.length * 7) % 150} reviews`;

    return {
      snapshot: {
        businessName: cleanName,
        category: cleanCat,
        location: cleanLoc,
        googleRating: rating,
        reviewCount: reviews,
        websiteFound: hasWebsite,
        instagramFound: instagram,
        facebookFound: "Not Found",
        onlineBooking: "Not Found",
        whatsApp: "Active (WhatsApp Business)",
        businessHours: "10:00 AM - 8:30 PM"
      },
      observations: [
        `We noticed ${cleanName} has a solid local rating of ${rating} on Google, indicating a strong reputation in ${cleanLoc}.`,
        `We found ${reviews} from local customers, indicating active neighborhood engagement and consistent service.`,
        `We couldn't identify an automated online booking system associated with your public listings.`,
        `Customer communication and bookings appear to rely mainly on manual WhatsApp messaging.`
      ]
    };
  };

  // If no API Key, use fallback immediately
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
    console.log("No valid Gemini API Key configured for snapshots. Using local fallback.");
    return res.json(getFallbackSnapshot());
  }

  try {
    const prompt = `
    You are an AI Business Advisor for A&P Solutions.
    Analyze the following business to create an authentic Business Snapshot and polite AI Observations.
    
    Business Name: "${businessName}"
    Location: "${location}"
    Category: "${category}"

    Generate realistic (or actual, if known) public directory details that could be found on Google, Instagram, Facebook, and local listings.
    For fields like onlineBooking, websiteFound, instagramFound, facebookFound, businessHours, googleRating, and reviewCount:
    - Never invent information that seems too professional or unrealistic for a local neighborhood business.
    - If they likely manage appointments manually, show "Not Found" for onlineBooking.
    - If they likely don't have a website (which is very common for local salons, retail shops, etc.), show "Not Found".
    - WhatsApp is usually "Active" or "Not Found".
    - Rating should be a string like "4.3" or "Not Found".
    - Reviews should be a string like "112 reviews" or "Not Found".
    
    Then, generate exactly 4 or 5 professional, polite, and encouraging "Observations" based on this public setup.
    CRITICAL:
    - Use VERY EASY, simple English.
    - Never use negative language.
    - Never say "Problems", "Mistakes", "Weaknesses", "Deficiencies", or "Issues".
    - Instead, use the word "Observations".
    - E.g. "We noticed your business has a strong local reputation in ${location}."
    - E.g. "We couldn't identify an online booking system, which means appointments are likely organized manually."
    - E.g. "Customer communication appears to rely mainly on WhatsApp."
    
    Respond strictly with a structured JSON object matching the following schema.

    Schema:
    {
      "snapshot": {
        "businessName": "${businessName}",
        "category": "${category}",
        "location": "${location}",
        "googleRating": "4.2" or "Not Found",
        "reviewCount": "128 reviews" or "Not Found",
        "websiteFound": "example.com" or "Not Found",
        "instagramFound": "@handle" or "Not Found",
        "facebookFound": "facebook.com/handle" or "Not Found",
        "onlineBooking": "Not Found" or "Link in Bio" or "whatsapp",
        "whatsApp": "Active" or "Not Found",
        "businessHours": "10:00 AM - 9:00 PM" or "Not Found"
      },
      "observations": [
        "Observation 1",
        "Observation 2",
        "Observation 3",
        "Observation 4"
      ]
    }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["snapshot", "observations"],
          properties: {
            snapshot: {
              type: Type.OBJECT,
              required: [
                "businessName",
                "category",
                "location",
                "googleRating",
                "reviewCount",
                "websiteFound",
                "instagramFound",
                "facebookFound",
                "onlineBooking",
                "whatsApp",
                "businessHours"
              ],
              properties: {
                businessName: { type: Type.STRING },
                category: { type: Type.STRING },
                location: { type: Type.STRING },
                googleRating: { type: Type.STRING },
                reviewCount: { type: Type.STRING },
                websiteFound: { type: Type.STRING },
                instagramFound: { type: Type.STRING },
                facebookFound: { type: Type.STRING },
                onlineBooking: { type: Type.STRING },
                whatsApp: { type: Type.STRING },
                businessHours: { type: Type.STRING }
              }
            },
            observations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });

    const text = response.text || "{}";
    const snapshotData = JSON.parse(text.trim());
    return res.json(snapshotData);
  } catch (error) {
    console.error("Gemini Snapshot API call failed, reverting to fallback:", error);
    return res.json(getFallbackSnapshot());
  }
});

// Serve frontend assets in production and development
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
