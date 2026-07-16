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

// Support a unified renderer for dashboards
export type WidgetType = "Metric" | "Table" | "List" | "Chart" | "Timeline" | "Status" | "Badge" | "Chat";

export interface DashboardWidget {
  id: string;
  type: WidgetType;
  title: string;
  icon: string; // e.g. "Users", "Calendar", "LineChart", "MessageSquare"
  colSpan?: 1 | 2; // for grid layouts
  data: any; // The structure of data depends on the WidgetType
}

export interface IndustryProfile {
  id: string; // e.g. "salon", "restaurant"
  name: string;
  expectedData: Record<string, { label: string; source: string }>;
  challenges: string[]; // Industry-specific challenges
  workflowComparisons: WorkflowScenario[];
  dashboardWidgets: DashboardWidget[];
  
  // The Observation Engine logic sits here for now, but adheres to the generic interface
  generateChain: (snapshot: any, observations: string[]) => RecommendationChain[];
}

// Interface for AI Providers to make future replacements easy
export interface IAnalysisEngine {
  analyze(businessData: any): Promise<RecommendationChain[]>;
}
