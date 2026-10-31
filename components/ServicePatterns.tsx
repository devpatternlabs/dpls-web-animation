"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Workflow,
  LayoutDashboard,
  Check,
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { sound } from "@/lib/sound";

export default function ServicePatterns() {
  const [activeTab, setActiveTab] = useState<"web" | "automation" | "dashboards">("web");
  const [selectedNode, setSelectedNode] = useState<string>("nextjs");

  const patterns = {
    web: {
      id: "web",
      title: "Full-Stack Web & SaaS Applications",
      tagline: "Ultra-fast, modular web products built for high conversion and effortless scale.",
      accent: "from-sky-400 to-cyan-500",
      accentBorder: "border-sky-500/40",
      badgeColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      stack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Supabase / PostgreSQL", "Stripe"],
      features: [
        "Sub-second page load times with Server Components & Edge Caching",
        "Pre-built authentication, multi-tenant RBAC, and team workspaces",
        "Stripe customer portal & automated webhook subscription billing",
        "Responsive, high-conversion UI with Framer Motion micro-interactions",
        "Complete CI/CD deployment on Vercel or AWS with staging previews",
      ],
      nodes: [
        { id: "frontend", name: "Next.js Frontend", role: "SSR & Edge Rendering" },
        { id: "action", name: "Server Actions", role: "Mutations & Validation" },
        { id: "db", name: "Supabase Postgres", role: "ACID Relational Storage" },
        { id: "webhook", name: "Stripe Webhooks", role: "Event-driven Subscriptions" },
      ],
    },
    automation: {
      id: "automation",
      title: "Autonomous Workflow & Ops Automation",
      tagline: "Eliminate manual data copying, missed leads, and operational bottlenecks.",
      accent: "from-emerald-400 to-teal-500",
      accentBorder: "border-emerald-500/40",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      stack: ["n8n (Self-hosted/Cloud)", "Make.com", "Custom Webhooks", "HubSpot / Slack / WhatsApp API"],
      features: [
        "Instant lead qualification and automated sales CRM routing",
        "Omnichannel notification bridges (Slack, Discord, WhatsApp, Email)",
        "AI-powered incoming email/document triage and draft generation",
        "Automated accounting & invoice reconciliation with payment gateways",
        "Self-healing error monitoring and retry mechanisms",
      ],
      nodes: [
        { id: "trigger", name: "Incoming Webhook", role: "Event Catch & Filter" },
        { id: "n8n", name: "n8n Core Engine", role: "Graph-based Logic Engine" },
        { id: "ai", name: "AI Agent Triage", role: "Structured JSON Extraction" },
        { id: "dispatch", name: "CRM / Chat Bridge", role: "Omnichannel Output" },
      ],
    },
    dashboards: {
      id: "dashboards",
      title: "Internal Tooling & Custom Portals",
      tagline: "Empower your ops team with secure command centers without touching raw SQL.",
      accent: "from-indigo-400 to-purple-500",
      accentBorder: "border-indigo-500/40",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      stack: ["Retool", "Appsmith", "Custom React Admin", "PostgreSQL", "Cloud Storage"],
      features: [
        "Secure customer & order management panels with granular role permissions",
        "Real-time analytics, revenue metrics, and custom KPI reports",
        "One-click database writeback with audit log tracking",
        "Bulk CSV data import, validation, and automated cleaning",
        "Integrates directly with your existing production database safely",
      ],
      nodes: [
        { id: "portal", name: "Internal Admin UI", role: "SSO & Role Permissions" },
        { id: "query", name: "Query Optimizer", role: "Cached Read & Safe Write" },
        { id: "audit", name: "Audit Logger", role: "Immutable Change History" },
        { id: "sync", name: "Live Production Sync", role: "Zero-Downtime Pipeline" },
      ],
    },
  };

  const current = patterns[activeTab];

  return (
    <section id="patterns" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-cyan/10 blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proprietary Starters</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          The Three Core Dev Patterns
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          We don&apos;t reinvent the wheel from scratch. We deploy battle-tested architectural patterns tailored to your exact business workflow.
        </p>
      </div>

      {/* Interactive Pattern Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-2xl bg-surface/90 border border-white/10 backdrop-blur-xl">
          <button
            onClick={() => {
              setActiveTab("web");
              sound.playClick();
            }}
            onMouseEnter={() => sound.playHover()}
            className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === "web" ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "web" && (
              <motion.div
                layoutId="active-pattern-tab"
                className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-teal-400 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Code2 className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Web Applications</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("automation");
              sound.playClick();
            }}
            onMouseEnter={() => sound.playHover()}
            className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === "automation" ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "automation" && (
              <motion.div
                layoutId="active-pattern-tab"
                className="absolute inset-0 bg-gradient-to-r from-brand-emerald to-teal-400 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Workflow className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Automation Workflows</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("dashboards");
              sound.playClick();
            }}
            onMouseEnter={() => sound.playHover()}
            className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === "dashboards" ? "text-slate-950 font-bold" : "text-slate-400 hover:text-white"
            }`}
          >
            {activeTab === "dashboards" && (
              <motion.div
                layoutId="active-pattern-tab"
                className="absolute inset-0 bg-gradient-to-r from-brand-indigo to-purple-400 rounded-xl shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <LayoutDashboard className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Internal Tooling</span>
          </button>
        </div>
      </div>

      {/* Active Pattern Card with Interactive Architecture Visualizer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl bg-surface/80 border border-white/10 backdrop-blur-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${current.badgeColor}`}>
                  PATTERN 0{activeTab === "web" ? "1" : activeTab === "automation" ? "2" : "3"}
                </span>
                <span className="text-slate-400 text-xs font-mono">14-DAY DEPLOYABLE</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed font-light">
                {current.tagline}
              </p>

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Battle-Tested Stack:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="space-y-3 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <div className="w-5 h-5 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-brand-emerald" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="pt-4">
                <a
                  href="#audit"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-cyan hover:text-brand-emerald transition group"
                >
                  <span>Build This in a 14-Day Sprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Interactive Architecture Flow Diagram */}
            <div className="lg:col-span-5 bg-black/60 rounded-2xl border border-white/10 p-6 relative overflow-hidden shadow-inner">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>ARCHITECTURE PIPELINE</span>
                </span>
                <span className="text-emerald-400">STATUS: REALTIME</span>
              </div>

              <div className="space-y-3">
                {current.nodes.map((node, idx) => (
                  <div key={node.id} className="relative">
                    <div
                      onClick={() => {
                        setSelectedNode(node.id);
                        sound.playClick();
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        selectedNode === node.id
                          ? "bg-white/[0.08] border-brand-cyan shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                          : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-brand-cyan">0{idx + 1}</span>
                        <div>
                          <h4 className="text-sm font-bold text-white">{node.name}</h4>
                          <p className="text-xs text-slate-400 font-mono">{node.role}</p>
                        </div>
                      </div>
                      <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                    </div>

                    {/* Connecting animated arrow between nodes */}
                    {idx < current.nodes.length - 1 && (
                      <div className="flex justify-center my-1 text-slate-600 font-mono text-xs">
                        ▼
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <span>LATENCY BENCHMARK:</span>
                <span className="text-brand-cyan font-bold">~18ms AVG AT EDGE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
