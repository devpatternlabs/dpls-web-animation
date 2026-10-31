"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Zap,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Workflow,
  Activity,
  Terminal,
  Play,
  RotateCw,
} from "lucide-react";
import { sound } from "@/lib/sound";

export default function Hero() {
  const [activeSimulationNode, setActiveSimulationNode] = useState<number>(0);
  const [packetCount, setPacketCount] = useState(1482);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulationNodes = [
    {
      id: 0,
      title: "Next.js App Router",
      type: "Frontend Engine",
      latency: "12ms",
      status: "Edge Cached",
      details: "Server Components, React 19, Tailwind CSS, Framer Motion",
      icon: Cpu,
      color: "from-sky-400 to-cyan-500",
      textColor: "text-sky-400",
    },
    {
      id: 1,
      title: "Server Actions & API",
      type: "Middleware Layer",
      latency: "28ms",
      status: "Optimized",
      details: "Edge validation, secure RBAC sessions, webhook receiver",
      icon: Layers,
      color: "from-teal-400 to-emerald-500",
      textColor: "text-emerald-400",
    },
    {
      id: 2,
      title: "Supabase / Postgres",
      type: "Data Store",
      latency: "19ms",
      status: "Realtime Sync",
      details: "Row-Level Security, vector embeddings, instant writeback",
      icon: Database,
      color: "from-indigo-400 to-purple-500",
      textColor: "text-indigo-400",
    },
    {
      id: 3,
      title: "n8n Workflow Nodes",
      type: "Autonomous Pipeline",
      latency: "44ms",
      status: "Active 24/7",
      details: "Lead scoring, Slack/WhatsApp dispatch, AI email triage",
      icon: Workflow,
      color: "from-emerald-400 to-teal-500",
      textColor: "text-teal-400",
    },
  ];

  const triggerPacketBurst = () => {
    sound.playClick();
    setIsSimulating(true);
    setPacketCount((prev) => prev + 14);
    setTimeout(() => {
      setIsSimulating(false);
    }, 1200);
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Dynamic Atmospheric Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-brand-cyan/20 via-brand-emerald/15 to-brand-indigo/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-brand-cyan/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-emerald/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Pill */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/[0.06] backdrop-blur-md text-brand-cyan text-xs sm:text-sm font-mono tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.2)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald animate-spin-slow" />
            <span>Pattern-Driven Engineering + Autonomous Workflows</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]"
          >
            Stop Wasting Months on Disjointed Agencies.{" "}
            <span className="bg-gradient-to-r from-brand-cyan via-brand-teal to-brand-emerald bg-clip-text text-transparent underline-offset-8 decoration-brand-cyan/30">
              We Build Next.js Web Apps &amp; Autonomous Workflows in 14 Days.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <strong className="text-white font-semibold">Dev Pattern Labs</strong> replaces unpredictable agency delays with modular architecture patterns. From Next.js frontends to autonomous backend pipelines, we engineer your business engine.
          </motion.p>
        </div>

        {/* Hero CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#audit"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            data-cursor="pointer"
            data-cursor-text="AUDIT"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 font-extrabold text-base shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_45px_rgba(16,185,129,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Book 15-Min Free Audit</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#pricing"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            data-cursor="pointer"
            data-cursor-text="PLANS"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-surface/90 border border-white/10 text-slate-200 font-semibold text-base hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 backdrop-blur-lg"
          >
            <Zap className="w-4 h-4 text-brand-cyan" />
            <span>Explore Sprint &amp; Retainer Plans</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300 font-medium"
        >
          <div className="flex items-center justify-center gap-2 py-1">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
            <span>14-Day Delivery Sprints</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
            <span>100% Code &amp; Workflow Ownership</span>
          </div>
          <div className="flex items-center justify-center gap-2 py-1">
            <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
            <span>Direct Senior Engineer Access</span>
          </div>
        </motion.div>

        {/* Awwwards Showcase: Interactive Pattern Engine & Sprint Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto rounded-3xl bg-surface/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative"
        >
          {/* Header Terminal Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                <span>dpls-runtime-v2.6 // sprint-orchestrator</span>
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="hidden sm:flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
                <span className="text-slate-300">{packetCount} packets routed</span>
              </div>
              <button
                onClick={triggerPacketBurst}
                onMouseEnter={() => sound.playHover()}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/20 text-[11px] font-semibold transition"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>SIMULATE DISPATCH</span>
              </button>
            </div>
          </div>

          {/* Interactive Node Map */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {simulationNodes.map((node) => {
                const Icon = node.icon;
                const isActive = activeSimulationNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => {
                      setActiveSimulationNode(node.id);
                      sound.playClick();
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                      isActive
                        ? "bg-white/[0.08] border-brand-cyan shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    {/* Top Status */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <span className="text-slate-400">{node.type}</span>
                      <span className={`${node.textColor} font-semibold flex items-center gap-1`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping"></span>
                        {node.latency}
                      </span>
                    </div>

                    {/* Node Title & Icon */}
                    <div className="flex items-center gap-2.5 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br ${node.color} text-slate-950 font-bold`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-white text-sm tracking-tight">{node.title}</h3>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                      {node.details}
                    </p>

                    {/* Active highlight glow */}
                    {isActive && (
                      <motion.div
                        layoutId="active-node-glow"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-emerald"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Connecting Animated Data Pipeline Visualizer */}
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-white/10 font-mono text-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                <span className="text-slate-400">ACTIVE PATTERN:</span>
                <span className="text-white font-bold">
                  {simulationNodes[activeSimulationNode].title}
                </span>
                <span className="text-brand-cyan">({simulationNodes[activeSimulationNode].status})</span>
              </div>

              {/* Animated data packet simulation indicator */}
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[11px] text-slate-500">PIPELINE FLOW:</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                  <span className="text-emerald-400">INPUT</span>
                  <span className={`text-slate-500 transition-transform ${isSimulating ? "translate-x-1 text-brand-cyan" : ""}`}>
                    ━━━━▶
                  </span>
                  <span className="text-brand-cyan">TRANSFORM</span>
                  <span className={`text-slate-500 transition-transform ${isSimulating ? "translate-x-1 text-brand-emerald" : ""}`}>
                    ━━━━▶
                  </span>
                  <span className="text-purple-400">DISPATCH</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
