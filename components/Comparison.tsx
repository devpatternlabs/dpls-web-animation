"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, AlertTriangle, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Comparison() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const comparisons = [
    {
      old: "Vague hourly billing and unpredictable monthly invoices",
      new: "Fixed-price 14-day sprints or predictable monthly retainers",
      metricOld: "Uncapped Costs",
      metricNew: "100% Fixed Scope",
    },
    {
      old: "2 to 4 months of bloated timelines and meeting fatigue",
      new: "First working interactive prototype delivered in 5 to 7 days",
      metricOld: "90+ Days Delay",
      metricNew: "14 Days To Prod",
    },
    {
      old: "'Code and forget'—leaves your team with manual data entry",
      new: "Native automated pipelines (n8n, webhooks, CRM sync) built-in",
      metricOld: "Manual Ops Drain",
      metricNew: "Autonomous Sync",
    },
    {
      old: "Junior developers learning on your project's budget",
      new: "Senior pattern-driven engineering using battle-tested starters",
      metricOld: "Junior Guesswork",
      metricNew: "Senior Architects",
    },
    {
      old: "Disjointed tools, siloed databases, and massive tech debt",
      new: "Clean, documented, scalable architecture you own 100%",
      metricOld: "Vendor Lock-in",
      metricNew: "Full Code Ownership",
    },
  ];

  return (
    <section id="comparison" className="py-24 relative overflow-hidden bg-surface/50 border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan font-mono text-xs uppercase tracking-widest font-bold mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>The Paradigm Shift</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Why Scaling Teams Choose <span className="bg-gradient-to-r from-brand-cyan to-brand-emerald bg-clip-text text-transparent">Dev Pattern Labs</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed"
          >
            Traditional agencies are built to bill hours. Dev Pattern Labs is built to ship outcomes.
          </motion.p>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Agency Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-3xl bg-rose-950/[0.12] border border-rose-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-rose-500/40 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-rose-500/20">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                <h3 className="text-xl font-bold text-rose-300 tracking-tight">
                  The Traditional Agency Trap
                </h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-rose-500/10 text-rose-400 border border-rose-500/30">
                SLOW &amp; VAGUE
              </span>
            </div>

            <ul className="space-y-6">
              {comparisons.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    sound.playHover();
                  }}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-200 ${
                    hoveredIdx === idx ? "bg-rose-500/[0.08]" : ""
                  }`}
                >
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-slate-300 text-sm font-normal leading-relaxed">{item.old}</p>
                    <span className="inline-block mt-1 font-mono text-[11px] text-rose-400/80">
                      {item.metricOld}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dev Pattern Labs Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 sm:p-10 rounded-3xl bg-emerald-950/[0.18] border border-brand-emerald/40 backdrop-blur-xl relative overflow-hidden group hover:border-brand-emerald/70 shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-300"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/15 rounded-full blur-[80px] pointer-events-none -z-10" />

            <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-emerald/30">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-emerald animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                <h3 className="text-xl font-bold text-emerald-300 tracking-tight">
                  The Dev Pattern Labs Way
                </h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-brand-emerald/10 text-emerald-300 border border-brand-emerald/40 font-bold">
                14-DAY OUTCOME
              </span>
            </div>

            <ul className="space-y-6">
              {comparisons.map((item, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => {
                    setHoveredIdx(idx);
                    sound.playHover();
                  }}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-200 ${
                    hoveredIdx === idx ? "bg-brand-emerald/[0.12] shadow-sm" : ""
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium leading-relaxed">{item.new}</p>
                    <span className="inline-block mt-1 font-mono text-[11px] text-emerald-400 font-semibold">
                      {item.metricNew}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Comparative Metrics Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white/[0.03] border border-white/10 p-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-center md:text-left"
        >
          <div className="space-y-1">
            <span className="text-slate-400 uppercase">Average Client Savings</span>
            <div className="text-white font-extrabold text-lg font-sans">
              $13,200+ &amp; 76 Days Saved Per Build
            </div>
          </div>

          <a
            href="#audit"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-sans font-bold text-xs border border-white/20 transition"
          >
            <span>Audit Your Existing Bottlenecks</span>
            <ArrowRight className="w-4 h-4 text-brand-cyan" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
