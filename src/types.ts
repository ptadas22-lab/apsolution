export type PageId =
  | "home"
  | "assessment"
  | "insights"
  | "solutions"
  | "industries"
  | "resources"
  | "contact";

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  timeline: string;
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  vulnerabilities: string[];
  beforeAutomation: string[];
  afterAutomation: string[];
  keyROI: string;
}

export interface SecurityModule {
  id: string;
  title: string;
  icon: string;
  description: string;
  checklist: { id: string; text: string; points: number }[];
  scams: { type: string; details: string; prevention: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Business Guide" | "Security Checklist" | "Industry Report" | "Business Insights";
  readTime: string;
  date: string;
  author: string;
}

export interface AuditInput {
  businessName: string;
  businessType: string;
  industry: string;
  challenges: string[];
  aiReadiness: number;
  digitalPresence: string[];
  businessSize: string;
  securitySetup: string[];
}

export interface AuditResult {
  grade: string;
  scores: {
    automation: number;
    security: number;
    digital: number;
    overall?: number;
  };
  summary: string;
  strengths: string[];
  vulnerabilities: string[];
  recommendations: {
    title: string;
    description: string;
    priority: "High" | "Medium" | "Low";
    impact: string;
  }[];
  roadmap: {
    phase: string;
    timeline: string;
    tasks: string[];
  }[];
}
