import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import InteractiveSnapshot from "./components/InteractiveSnapshot";
import SnapshotResults from "./components/SnapshotResults";
import EstimatedBusinessPotential from "./components/EstimatedBusinessPotential";
import BusinessOpportunityAnalysis from "./components/BusinessOpportunityAnalysis";
import WorkflowComparison from "./components/WorkflowComparison";
import ChallengesSection from "./components/ChallengesSection";
import ImagineBusiness from "./components/ImagineBusiness";
import Recommendations from "./components/Recommendations";
import ContactSection from "./components/ContactSection";
import LatestInsights from "./components/LatestInsights";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

import { RecommendationEngine } from "./lib/engine/recommendationEngine";
import { RecommendationChain, WorkflowScenario } from "./lib/types/engine";
import { getIndustryProfile } from "./lib/data/industryProfiles";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "insights">("home");
  
  // Application State
  const [snapshot, setSnapshot] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<RecommendationChain[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowScenario[]>([]);
  const [challenges, setChallenges] = useState<string[]>([]);
  const [dashboardWidgets, setDashboardWidgets] = useState<any[]>([]);

  const handleScrollToSection = (sectionId: string) => {
    if (currentView !== "home") setCurrentView("home");
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const handleSnapshotComplete = async (apiData: any) => {
    console.log("[App] Research completed");

    let validData = apiData;
    if (!validData || !validData.snapshot) {
      console.log("[App] API data null or invalid, generating default fallback snapshot");
      validData = {
        snapshot: {
          businessName: "Example Business",
          category: "other",
          location: "Local Area",
          googleRating: "4.6",
          reviewCount: "128",
          websiteFound: "Found",
          instagramFound: "Found",
          facebookFound: "Not Found",
          onlineBooking: "Not Found",
          whatsApp: "Not Found",
          businessHours: "Found",
          isFallback: true,
          demoMode: true
        },
        observations: []
      };
    }

    try {
      const engine = new RecommendationEngine();
      let chain = await engine.analyze(validData);
      
      const profile = getIndustryProfile(validData.snapshot.category || "generic");
      
      if (!chain || chain.length === 0) {
        chain = profile.generateChain(validData.snapshot, []);
      }
      
      console.log("[App] Snapshot created");
      setSnapshot(validData.snapshot);
      setRecommendations(chain);
      setWorkflows(profile.workflowComparisons);
      setChallenges(profile.challenges || []);
      setDashboardWidgets(profile.dashboardWidgets || []);

      setTimeout(() => {
        console.log("[App] Snapshot rendered");
        document.getElementById("snapshot-results")?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } catch (error) {
      console.error("[App] Failed to process snapshot logic:", error);
      console.log("[App] Snapshot created (emergency fallback)");
      setSnapshot(validData.snapshot);
      setRecommendations([]);
      setTimeout(() => {
        console.log("[App] Snapshot rendered (emergency fallback)");
        document.getElementById("snapshot-results")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  const resetJourney = () => {
    setSnapshot(null);
    setRecommendations([]);
    setWorkflows([]);
    setChallenges([]);
    setDashboardWidgets([]);
    handleScrollToSection("discovery");
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased" id="app-root-container">
      
      <Navigation 
        hasSnapshot={!!snapshot} 
        onScrollToSection={handleScrollToSection} 
        onStartSnapshot={() => handleScrollToSection("discovery")} 
        currentView={currentView}
        onSwitchView={(view) => {
          setCurrentView(view);
          window.scrollTo(0, 0);
        }}
      />

      <main className="flex-grow w-full relative overflow-x-hidden">
        
        {currentView === "insights" ? (
          <div className="pt-24 min-h-[80vh]">
            <LatestInsights />
          </div>
        ) : (
          <>
            {!snapshot ? (
              <>
                <Hero onScrollToSection={handleScrollToSection} />
                <InteractiveSnapshot onComplete={handleSnapshotComplete} />
              </>
            ) : (
              <>
                <ErrorBoundary>
                  
                  <SnapshotResults 
                    snapshot={snapshot} 
                    recommendations={recommendations} 
                  />

                  <EstimatedBusinessPotential 
                    snapshot={snapshot}
                    onContinue={() => handleScrollToSection("business-opportunities")}
                  />

                  <BusinessOpportunityAnalysis recommendations={recommendations} />

                  <ChallengesSection challenges={challenges} />

                  <WorkflowComparison workflows={workflows} />

                  <ImagineBusiness 
                    onScrollToSection={handleScrollToSection} 
                    dashboardWidgets={dashboardWidgets} 
                  />

                  {/* Phase 9 */}
                  <Recommendations recommendations={recommendations} />

                  {/* Phase 10 */}
                  <ContactSection recommendations={recommendations} />
                  
                  <div className="bg-white py-12 flex justify-center border-t border-slate-100">
                    <button
                      onClick={resetJourney}
                      className="text-sm font-bold text-slate-400 hover:text-[#0B1F3A] underline-offset-4 hover:underline transition-all cursor-pointer bg-transparent border-none"
                    >
                      Start A New Analysis
                    </button>
                  </div>
                </ErrorBoundary>
              </>
            )}
          </>
        )}
      </main>

      {(snapshot || currentView === "insights") && (
        <Footer onScrollToSection={handleScrollToSection} />
      )}

    </div>
  );
}
