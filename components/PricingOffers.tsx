"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Star, ShieldCheck, Sparkles, Calculator } from "lucide-react";
import { sound } from "@/lib/sound";

export default function PricingOffers() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [opsHours, setOpsHours] = useState<number>(15);

  // ROI estimation logic
  const estimatedSavings = currency === "USD" ? opsHours * 45 * 4 : opsHours * 1200 * 4;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-surface/40 border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-cyan/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Pick Your Working Model
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            No unpredictable hourly rates. Choose between a fast 14-day project sprint or a dedicated monthly engineering partner.
          </p>

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-surface/90 border border-white/10 shadow-lg backdrop-blur-xl">
            <button
              onClick={() => {
                setCurrency("USD");
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                currency === "USD"
                  ? "bg-brand-cyan text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              USD ($) Global
            </button>
            <button
              onClick={() => {
                setCurrency("INR");
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 ${
                currency === "INR"
                  ? "bg-brand-emerald text-slate-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              INR (₹) India
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Card 1: 14-Day Sprint (POPULAR / SPOTLIGHT) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 rounded-3xl bg-surface/90 border-2 border-brand-cyan/60 p-8 flex flex-col justify-between relative shadow-[0_0_40px_rgba(6,182,212,0.2)] backdrop-blur-2xl group hover:border-brand-cyan transition-all duration-300 order-1 lg:order-2"
          >
            {/* Spotlight Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 font-mono text-[11px] font-extrabold shadow-lg flex items-center gap-1.5 uppercase">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Most Popular Model</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                  Option 2 • Fixed Sprint
                </span>
                <span className="text-xs font-mono text-slate-400">14 Working Days</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                14-Day Web &amp; Ops Sprint
              </h3>

              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Ideal for new MVP builds, product redesigns, or high-conversion landing systems with automated pipelines.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {currency === "USD" ? "$1,800" : "₹85,000"}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">one-time fixed</span>
                </div>
                <p className="text-[11px] text-brand-emerald mt-1 font-mono">
                  Split 50% deposit / 50% upon milestone completion
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Full-Stack Next.js (App Router) web application</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>2 Native workflow automations (n8n / Make / Webhooks)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Supabase / Postgres DB setup &amp; authentication</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>Stripe / Razorpay payment gateway integration</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                  <span>100% Code ownership &amp; Loom walkthrough docs</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#audit"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                data-cursor="pointer"
                data-cursor-text="SPRINT"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition"
              >
                <span>Reserve Next 14-Day Slot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Dedicated Retainer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 rounded-3xl bg-surface/70 border border-white/10 p-8 flex flex-col justify-between relative backdrop-blur-xl hover:border-white/20 transition-all duration-300 order-2 lg:order-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/30">
                  Option 1 • Retainer
                </span>
                <span className="text-xs font-mono text-slate-400">Monthly Rolling</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Dedicated Tech Partner
              </h3>

              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                For growth teams needing ongoing feature sprints, continuous automation tuning, and zero agency meeting bloat.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {currency === "USD" ? "$1,500" : "₹70,000"}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">/month</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">
                  Pause or cancel anytime • Zero long-term contracts
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>One active request at a time (shipped every 48h)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>Next.js UI features, API routes &amp; bug fixes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>Ongoing n8n workflow maintenance &amp; expansion</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>Direct Slack / Discord async communication channel</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                  <span>Unlimited revision cycles until you approve</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#audit"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                data-cursor="pointer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition"
              >
                <span>Subscribe to Retainer</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Architecture Blueprint ($55 / ₹4,500) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 rounded-3xl bg-surface/70 border border-white/10 p-8 flex flex-col justify-between relative backdrop-blur-xl hover:border-white/20 transition-all duration-300 order-3"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/30">
                  Starter • Blueprint
                </span>
                <span className="text-xs font-mono text-slate-400">48h Delivery</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Architecture Blueprint
              </h3>

              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Test working with us with low commitment. Receive a complete technical specification and database schema roadmap.
              </p>

              <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white">
                    {currency === "USD" ? "$55" : "₹4,500"}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">one-time</span>
                </div>
                <p className="text-[11px] text-brand-cyan mt-1 font-mono">
                  100% Credited toward sprint if you proceed
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>45-minute live technical feasibility review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>Full DB entity-relationship diagram (ERD)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>n8n automation node diagram &amp; tool audit</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>Detailed 14-day sprint scope document</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-brand-indigo shrink-0 mt-0.5" />
                  <span>No obligation to build with us</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#audit"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                data-cursor="pointer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/20 transition"
              >
                <span>Get Blueprint Session</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Interactive Sprint ROI Estimator Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl bg-surface/90 border border-white/15 p-8 backdrop-blur-2xl shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Calculator className="w-5 h-5 text-brand-cyan" />
            <h4 className="text-lg font-bold text-white tracking-tight">
              Interactive Workflow Automation ROI Estimator
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono text-slate-300">
                <span>Manual Ops / Data-Entry Time:</span>
                <span className="text-brand-cyan font-bold text-sm">{opsHours} hrs/week</span>
              </div>

              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={opsHours}
                onChange={(e) => setOpsHours(Number(e.target.value))}
                className="w-full accent-brand-cyan h-2 bg-slate-800 rounded-lg cursor-pointer"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-500">
                <span>5 hrs (Small Team)</span>
                <span>25 hrs</span>
                <span>50 hrs (Heavy Ops)</span>
              </div>
            </div>

            <div className="md:col-span-5 p-5 rounded-2xl bg-black/50 border border-white/10 text-center space-y-1">
              <span className="text-xs font-mono text-slate-400 block uppercase">
                Estimated Monthly Savings:
              </span>
              <div className="text-3xl font-black text-brand-emerald">
                {currency === "USD"
                  ? `$${estimatedSavings.toLocaleString()}`
                  : `₹${estimatedSavings.toLocaleString()}`}
                <span className="text-xs text-slate-400 font-mono block font-normal mt-0.5">
                  / month recovered
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
