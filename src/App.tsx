import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import InteractiveSnapshot from "./components/InteractiveSnapshot";
import Recommendations from "./components/Recommendations";
import ImagineBusiness from "./components/ImagineBusiness";
import LatestInsights from "./components/LatestInsights";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [hasSnapshot, setHasSnapshot] = useState<boolean>(false);

  const handleScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  const handleStartSnapshot = () => {
    document.getElementById("industries")?.scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans antialiased" id="app-root-container">
      
      {/* Top sticky Navigation */}
      <Navigation 
        hasSnapshot={hasSnapshot} 
        onScrollToSection={handleScrollToSection} 
        onStartSnapshot={handleStartSnapshot} 
      />

      {/* Main Single Page Layout Container with fluid max-width */}
      <main className="flex-grow px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative">
        
        {/* Abstract design elements to create depth */}
        <div className="absolute top-1/4 right-0 w-[320px] h-[320px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-2/3 left-0 w-[260px] h-[260px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Section 1: Hero Banner */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Interactive Snapshot (Steps 1, 2, 3, 4, 5, 7, 8) */}
        <InteractiveSnapshot 
          onSnapshotGenerated={setHasSnapshot}
          onScrollToSection={handleScrollToSection}
        />

        {/* Recommendations Section */}
        <Recommendations />

        {/* Section 5: Imagine Your Business (Concept Demonstration Visualizer - Step 6) */}
        <ImagineBusiness onScrollToSection={handleScrollToSection} />

        {/* Section 6: Business Insights Library (Research Journal - Step 10) */}
        <LatestInsights />

        {/* Section 7: Ready to Improve Your Business (Contact and Booking Calendar - Step 11) */}
        <ContactSection />

      </main>

      {/* Footer */}
      <Footer onScrollToSection={handleScrollToSection} />

    </div>
  );
}
