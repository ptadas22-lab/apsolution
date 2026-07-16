import { IAnalysisEngine, RecommendationChain } from "../types/engine";
import { getIndustryProfile } from "../businessProfiles";

export class RecommendationEngine implements IAnalysisEngine {
  async analyze(businessData: any): Promise<RecommendationChain[]> {
    // businessData is expected to have { snapshot: {...}, observations: string[] }
    const { snapshot, observations } = businessData;
    const category = snapshot.category || "generic";
    
    // 1. Load Industry Profile
    const profile = getIndustryProfile(category);
    
    // 2. Generate the strict chain based on factual snapshot data
    const chain = profile.generateChain(snapshot, observations);
    
    return chain;
  }
}
