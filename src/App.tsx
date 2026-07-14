import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import InteractiveSnapshot from "./components/InteractiveSnapshot";
import SnapshotResults from "./components/SnapshotResults";
import WorkflowComparison from "./components/WorkflowComparison";
import ImagineBusiness from "./components/ImagineBusiness";
import Recommendations from "./components/Recommendations";
import ContactSection from "./components/ContactSection";
import LatestInsights from "./components/LatestInsights";
import Footer from "./components/Footer";

import { RecommendationEngine } from "./lib/engine/recommendationEngine";
import { RecommendationChain, WorkflowScenario } from "./lib/types/engine";
import { getIndustryProfile } from "./lib/data/industryProfiles";

export default function App() {
  const [currentView, setCurrentView] = useState<"home" | "insights">("home");
  
  // Application State
  const [snapshot, setSnapshot] = useState<any>(null);
  const [recommendations, setRecommendations] = useState<RecommendationChain[]>([]);
  const [workflows, setWorkflows] = useState<WorkflowScenario[]>([]);

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

    // 1. Ensure we have valid data. If null/undefined, create fallback.
    let validData = apiData;
    if (!validData || !validData.snapshot) {
      console.log("[App] API data null or invalid, generating default fallback snapshot");
      validData = {
        snapshot: {
          businessName: "Your Business",
          category: "generic",
          location: "Location",
          googleRating: "Not Found",
          reviewCount: "Not Found",
          websiteFound: "Not Found",
          instagramFound: "Not Found",
          facebookFound: "Not Found",
          onlineBooking: "Not Found",
          whatsApp: "Not Found",
          businessHours: "Not Found",
          isFallback: true
        },
        observations: []
      };
    }

    try {
      // 2. Process Business Logic
      const engine = new RecommendationEngine();
      let chain = await engine.analyze(validData);
      
      // 3. Fetch Example Data from Profile
      const profile = getIndustryProfile(validData.snapshot.category || "generic");
      
      // Safety net: ensure chain is never empty
      if (!chain || chain.length === 0) {
        chain = profile.generateChain(validData.snapshot, []);
      }
      
      // 4. Set State
      console.log("[App] Snapshot created");
      setSnapshot(validData.snapshot);
      setRecommendations(chain);
      setWorkflows(profile.workflowComparisons);

      // 5. Scroll to results
      setTimeout(() => {
        console.log("[App] Snapshot rendered");
        document.getElementById("snapshot-results")?.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }, 100);
    } catch (error) {
      console.error("[App] Failed to process snapshot logic:", error);
      // Even if logic fails, force render with empty values so user journey doesn't stop
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
            {!snapshot ? (
              <>
                <Hero onScrollToSection={handleScrollToSection} />
                {/* Phase 2 & 3: Discovery & AI Research */}
                <InteractiveSnapshot onComplete={handleSnapshotComplete} />
              </>
            ) : (
              <>
                {/* If analysis is complete, render the consultative journey */}
                {/* Phase 4, 5, 6 */}
                <SnapshotResults 
                  snapshot={snapshot} 
                  recommendations={recommendations} 
                  onContinue={() => handleScrollToSection("workflow-comparison")}
                />

                {/* Phase 7 */}
                <WorkflowComparison workflows={workflows} />

                {/* Phase 8 */}
                <ImagineBusiness onScrollToSection={handleScrollToSection} />

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
              </>
            )}
          </>
        )}
      </main>

      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
