export type ConfidenceLevel = "High" | "Medium" | "Low";

export type StatusIndicator = "Good" | "Available" | "Not Found" | "Needs Review";

export interface PublicDataCard {
  label: string;
  value: string;
  source: string;
  status: StatusIndicator;
}

export interface RecommendationChain {
  observation: string;
  confidence: ConfidenceLevel;
  source: string;
  reasoning: string;
  possibleImprovement: string;
  exampleSolution: string;
  consultationQuestion: string;
}

export interface WorkflowScenario {
  currentWorkflow: string;
  exampleWorkflow: string;
}

export interface IndustryProfile {
  id: string; // e.g. "salon", "restaurant"
  name: string;
  expectedData: Record<string, { label: string; source: string }>;
  workflowComparisons: WorkflowScenario[];
  generateChain: (snapshot: any, observations: string[]) => RecommendationChain[];
  dummyDashboard: any; // specific shape can be typed later
}

// Interface for AI Providers to make future replacements easy
export interface IAnalysisEngine {
  analyze(businessData: any): Promise<RecommendationChain[]>;
}
