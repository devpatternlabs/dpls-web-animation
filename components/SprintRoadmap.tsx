"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, CheckCircle2, Clock, Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import { sound } from "@/lib/sound";

export default function SprintRoadmap() {
  const [activePhase, setActivePhase] = useState<number>(1);

  const phases = [
    {
      id: 0,
      days: "Days 1–3",
      title: "Architecture Alignment & Database Schema",
      tagline: "Foundation, Entity Models & API Contracts",
      icon: Code2,
      deliverables: [
        "1-on-1 alignment session to freeze functional requirements",
        "Supabase / PostgreSQL relational schema design with RLS policies",
        "Next.js App Router project scaffolding with custom design system",
        "Git repository setup with 100% direct client ownership",
      ],
      output: "Approved Database Schema & Deployed Staging Environment",
    },
    {
      id: 1,
      days: "Days 4–7",
      title: "Core Frontend & Interactive Prototype",
      tagline: "Sub-Second Pages & Micro-Interactions",
      icon: Zap,
      deliverables: [
        "Full-fidelity Next.js pages with Tailwind CSS & responsive layouts",
        "Interactive prototype deployed to staging URL for instant feedback",
        "Authentication flow (Email, Magic Links, Google OAuth) completed",
        "Stripe customer portal & checkout sessions wired up",
      ],
      output: "Clickable, Working Staging Prototype Ready for Client Review",
    },
    {
      id: 2,
      days: "Days 8–12",
      title: "Autonomous Workflows & Pipeline Integration",
      tagline: "n8n Ops, Webhooks & AI Automation",
      icon: Rocket,
      deliverables: [
        "n8n / Make workflow configuration with self-healing retries",
        "Real-time lead qualification, CRM sync (HubSpot/Slack/WhatsApp)",
        "Automated PDF invoice generation and Stripe payment reconciliations",
        "AI document triage and structured data extraction logic",
      ],
      output: "Live Automated Data Pipelines Operating in Staging",
    },
    {
      id: 3,
      days: "Days 13–14",
      title: "Hardening, Deployment & Complete Handover",
      tagline: "Zero-Downtime Launch & Documentation",
      icon: ShieldCheck,
      deliverables: [
        "Lighthouse performance audit (target: 95+ score on all metrics)",
        "End-to-end webhook validation and error alerting channels",
        "Production domain configuration on Vercel / AWS",
        "Comprehensive Loom video walkthroughs and documentation handover",
      ],
      output: "Production Live Release + 100% Repository & Cloud IP Handover",
    },
  ];

  return (
    <section id="sprint" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>14-Day Delivery Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The 14-Day Sprint Roadmap
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            How we take you from raw idea to a production-ready Next.js application with autonomous automation in two weeks flat.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {phases.map((p) => {
            const isActive = activePhase === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActivePhase(p.id);
                  sound.playClick();
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 relative ${
                  isActive
                    ? "bg-white/[0.08] border-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.25)]"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="font-mono text-xs text-brand-emerald font-bold block mb-1">
                  {p.days}
                </span>
                <span className="text-sm font-bold text-white block line-clamp-1">
                  {p.title.split("&")[0]}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-sprint-glow"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-emerald"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Phase Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="max-w-5xl mx-auto rounded-3xl bg-surface/90 border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                    {phases[activePhase].days}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {phases[activePhase].tagline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                  {phases[activePhase].title}
                </h3>
              </div>

              <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300">
                <span className="text-slate-500 block">SPRINT MILESTONE</span>
                <span className="text-emerald-400 font-bold">50% MILESTONE VERIFIED</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Deliverables List */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Actionable Deliverables:
                </span>
                <div className="space-y-3">
                  {phases[activePhase].deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tangible Output Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4">
                <span className="text-xs font-mono text-brand-cyan font-bold uppercase tracking-wider block">
                  Phase Output Handover:
                </span>
                <p className="text-white text-base font-semibold leading-relaxed">
                  {phases[activePhase].output}
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>CLIENT APPROVAL:</span>
                  <span className="text-brand-emerald">MANDATORY CHECKPOINT</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
