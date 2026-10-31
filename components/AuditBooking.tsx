"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import confetti from "canvas-confetti";
import { sound } from "@/lib/sound";

export default function AuditBooking() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceNeeded: "Web Development",
    details: "",
  });

  const audiences = [
    { title: "Small Businesses", desc: "Websites that communicate your services clearly and make it easier for customers to take action." },
    { title: "Startups", desc: "Flexible digital products and websites that can evolve alongside the business quickly." },
    { title: "Agencies", desc: "White-label development support for agencies that need reliable technical implementation capacity." },
    { title: "Growing Businesses", desc: "Website improvements, e-commerce, SEO, automation, and ongoing technical support." },
    { title: "Existing Websites", desc: "Performance tuning, troubleshooting, headless migrations, and long-term maintenance." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sound.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      sound.playChime();

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563eb", "#3b82f6", "#06b6d4", "#ffffff"],
        });
      } catch {
        // ignore
      }
    }, 900);
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Part 1: Built for Businesses With Digital Ambitions */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Target Partners</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built for Businesses With Digital Ambitions
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            We partner with businesses at various stages of growth who value technical competence and reliable execution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0c1226]/80 border border-white/10 hover:border-brand-bright/30 transition shadow-lg space-y-2"
            >
              <h4 className="text-base font-bold text-white">{aud.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-light">{aud.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2: Interactive Consultation Card (Let's Build Something Useful) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-[#0c1226]/90 border border-white/15 p-8 sm:p-14 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Reassurance & Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 text-brand-bright text-xs font-mono font-bold border border-brand-bright/30">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Let&apos;s Build Something Useful</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Not Sure What Technology You Need?
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              You don&apos;t need to know whether your project requires WordPress, Next.js, React, an API, or an automation platform before contacting us. Tell us what you&apos;re trying to build, what problem you&apos;re facing, and who will use it. We&apos;ll evaluate the requirements and recommend an appropriate approach.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                <span>Direct technical evaluation without sales pressure</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                <span>Clear timeline, architectural blueprint, and cost estimates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
                <span>100% Code ownership and transparent communication</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-3 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-brand-bright shrink-0" />
              <span>Dev Pattern Labs • Tamil Nadu, India • devpatternlabs@gmail.com</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-6 bg-[#070b1a]/90 p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-10 text-center space-y-5 font-mono"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/20 text-brand-bright border border-brand-bright/40 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(59,130,246,0.5)]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white font-sans">
                    Project Request Received!
                  </h3>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
                    <p className="text-brand-bright font-bold">[STATUS: ROUTED TO DEV PATTERN LABS]</p>
                    <p>Contact: {formData.name} &lt;{formData.email}&gt;</p>
                    <p>Interest: {formData.serviceNeeded}</p>
                    <p className="text-slate-400">Response SLA: Guaranteed within 12 business hours.</p>
                  </div>

                  <p className="text-slate-400 text-xs max-w-sm mx-auto font-sans">
                    We will review your project requirements and follow up with a technical assessment and call availability.
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", serviceNeeded: "Web Development", details: "" });
                      sound.playClick();
                    }}
                    className="text-xs text-brand-bright hover:underline pt-2 font-mono"
                  >
                    ← Submit another inquiry
                  </button>
                </motion.div>
              ) : (
                <form key="form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-brand-bright" />
                      <span>Start Your Project</span>
                    </h3>
                    <span className="text-[11px] font-mono text-brand-bright">FREE CONSULTATION</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      Service Interested In
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-bright transition"
                    >
                      <option value="Web Development" className="bg-[#0c1226]">Web Development</option>
                      <option value="WordPress Development" className="bg-[#0c1226]">WordPress Development</option>
                      <option value="Next.js Development" className="bg-[#0c1226]">Next.js Development</option>
                      <option value="Mobile App Development" className="bg-[#0c1226]">Mobile App Development</option>
                      <option value="UI/UX Design" className="bg-[#0c1226]">UI/UX Design</option>
                      <option value="SEO Optimization" className="bg-[#0c1226]">SEO Optimization</option>
                      <option value="AI & Automation" className="bg-[#0c1226]">AI &amp; Automation</option>
                      <option value="Website Maintenance" className="bg-[#0c1226]">Website Maintenance</option>
                    </select>
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
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-bright transition"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-bright transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                      Tell us about your project or problem:
                    </label>
                    <textarea
                      rows={3}
                      placeholder="What you're trying to build, what problem you're facing, who will use it..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-bright transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => sound.playHover()}
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-brand-primary via-brand-bright to-brand-cyan text-white font-extrabold text-sm shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>SENDING INQUIRY...</span>
                    ) : (
                      <>
                        <span>Start Your Project</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
