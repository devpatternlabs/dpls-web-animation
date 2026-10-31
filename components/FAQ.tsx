"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { sound } from "@/lib/sound";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why combine Web Development with Workflow Automation?",
      a: "Most development agencies simply build a frontend website and hand it over, leaving your team with manual data entry, disconnected spreadsheets, and missed leads. We build both the customer-facing web application and the underlying automated plumbing (n8n, webhooks, CRM sync, notifications) so your product functions as an autonomous business engine from day one.",
    },
    {
      q: "How does the 14-Day Sprint (Option 2) work?",
      a: "Days 1–3 are dedicated to architectural alignment and database schema design. Days 4–12 are high-intensity development using our battle-tested Next.js and automation patterns. Days 13–14 are end-to-end testing, webhook validation, and deployment. You receive a fully functioning, production-ready system with complete documentation in two weeks.",
    },
    {
      q: "How does the Dedicated Tech Partner Retainer (Option 1) work?",
      a: "You get a dedicated senior engineering partner on speed-dial. You submit feature requests, UI updates, or automation pipelines to your private backlog. We work on them continuously, shipping updates every 24–48 hours. There are no contracts or long-term commitments—you can pause or cancel anytime.",
    },
    {
      q: "Who owns the code and automation workflows?",
      a: "You own 100% of all intellectual property, source code, repositories, database schemas, and automation blueprints. Everything is transferred to your GitHub organization and cloud accounts immediately upon milestone completion.",
    },
    {
      q: "How do you handle global time zones from Tamil Nadu, India?",
      a: "We work on a modern asynchronous-first model. We use Loom video walkthroughs, Slack/Discord for direct chat, and GitHub/Linear for transparent task tracking. We overlap with US, UK, European, and Australian business hours every single day for live meetings and syncs.",
    },
  ];

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
          Everything you need to know about working with Dev Pattern Labs.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-surface/90 border-brand-cyan/50 shadow-[0_0_25px_rgba(6,182,212,0.15)]"
                  : "bg-surface/50 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => {
                  setOpenIndex(isOpen ? null : idx);
                  sound.playClick();
                }}
                onMouseEnter={() => sound.playHover()}
                className="w-full flex items-center justify-between p-6 text-left text-white font-semibold text-base sm:text-lg transition"
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-brand-cyan" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-4 font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
        <MessageSquare className="w-3.5 h-3.5 text-brand-cyan" />
        <span>Have an unusual technical stack question? Ask during your free audit.</span>
      </div>
    </section>
  );
}
