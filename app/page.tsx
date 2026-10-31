import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import ServicePatterns from "@/components/ServicePatterns";
import SprintRoadmap from "@/components/SprintRoadmap";
import PricingOffers from "@/components/PricingOffers";
import AuditBooking from "@/components/AuditBooking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Comparison />
        <ServicePatterns />
        <SprintRoadmap />
        <PricingOffers />
        <AuditBooking />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
