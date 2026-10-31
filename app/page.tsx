import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicePatterns from "@/components/ServicePatterns";
import PostSprintSpotlight from "@/components/PostSprintSpotlight";
import Comparison from "@/components/Comparison";
import RecentWork from "@/components/RecentWork";
import SprintRoadmap from "@/components/SprintRoadmap";
import AuditBooking from "@/components/AuditBooking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServicePatterns />
        <PostSprintSpotlight />
        <Comparison />
        <RecentWork />
        <SprintRoadmap />
        <AuditBooking />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
