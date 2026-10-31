"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Terminal,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

export default function AuditBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "sprint",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sound.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playChime();

      // Fire celebratory confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#06b6d4", "#10b981", "#6366f1", "#ffffff"],
        });
      } catch {
        // Ignore if confetti blocked
      }
    }, 900);
  };

  return (
    <section id="audit" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-cyan/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-surface/90 border border-white/15 p-8 sm:p-14 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Reassurance */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-mono font-bold border border-brand-emerald/30">
              <Clock className="w-3.5 h-3.5" />
              <span>15-Minute Strategy &amp; Tech Audit</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Map Out Your Web &amp; Automation Architecture
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              No sales pitches, no pushy follow-ups. Speak directly with a senior engineer to identify bottlenecks, evaluate tech feasibility, and determine whether a 14-day sprint or a dedicated retainer is right for you.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>We review your current frontend or operational bottlenecks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>Receive an exact architecture recommendation and roadmap</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0" />
                <span>Get a firm, transparent delivery timeline with zero obligation</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-brand-cyan shrink-0" />
              <span>Remote Studio • Tamil Nadu, India • Serving Clients Worldwide</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-6 bg-black/60 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center space-y-5 font-mono"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-emerald/20 text-brand-emerald border border-brand-emerald/40 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.4)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-sans">
                    Audit Request Dispatched!
                  </h3>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
                    <p className="text-emerald-400 font-bold">[STATUS: ROUTED TO SENIOR ARCHITECT]</p>
                    <p>Inquiry: {formData.name} &lt;{formData.email}&gt;</p>
                    <p>Category: {formData.projectType.toUpperCase()} SPRINT</p>
                    <p className="text-slate-400">Response SLA: Guaranteed within 12 business hours.</p>
                  </div>

                  <p className="text-slate-400 text-xs max-w-sm mx-auto font-sans">
                    Check your inbox for a direct calendar invite link and preliminary architecture questions.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", projectType: "sprint", details: "" });
                      sound.playClick();
                    }}
                    className="text-xs text-brand-cyan hover:underline pt-2 font-mono"
                  >
                    ← Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-cyan" />
                      <span>Request 15-Min Strategy Session</span>
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400">FREE AUDIT</span>
                  </div>

                  {/* Project Type Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                      Working Model Interested In:
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      {[
                        { id: "sprint", label: "14-Day Sprint ($1.8k)" },
                        { id: "retainer", label: "Tech Retainer ($1.5k/mo)" },
                        { id: "blueprint", label: "Blueprint Audit ($55)" },
                        { id: "custom", label: "Custom Scope" },
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => {
                            setFormData({ ...formData, projectType: item.id });
                            sound.playClick();
                          }}
                          className={`p-2.5 rounded-xl border text-left transition ${
                            formData.projectType === item.id
                              ? "bg-brand-cyan/20 border-brand-cyan text-white shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                              : "bg-white/[0.02] border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      Briefly describe what you want to build or automate:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Next.js SaaS MVP with Stripe billing and automated lead notification workflows..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-cyan transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => sound.playHover()}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 font-extrabold text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>DISPATCHING AUDIT PACKET...</span>
                    ) : (
                      <>
                        <span>Submit Free Audit Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 font-mono">
                    Zero spam guarantee • 100% NDA confidentiality
                  </p>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
