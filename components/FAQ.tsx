"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { sound } from "@/lib/sound";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What does Dev Pattern Labs do?",
      a: "We design, build, and maintain websites and web applications — including custom WordPress development, Next.js web applications, UI/UX design, SEO foundations, and AI-powered workflow automation.",
    },
    {
      q: "Do you build WordPress websites?",
      a: "Yes. We build custom WordPress websites using modern theme architectures, block-based development, Advanced Custom Fields, and WooCommerce where needed. We focus on clean, maintainable code so you can publish easily without plugin bloat.",
    },
    {
      q: "Do you build Next.js websites?",
      a: "Yes. We build performance-driven Next.js applications for businesses that need ultra-fast page loads, dynamic search visibility, React interactivity, and scalable architecture.",
    },
    {
      q: "Can you redesign or improve an existing website?",
      a: "Yes. We frequently help businesses modernize older websites, fix mobile responsiveness, improve usability and visual hierarchy, migrate architectures, and resolve technical SEO issues.",
    },
    {
      q: "Do you handle SEO and website performance?",
      a: "Yes. Technical SEO, structured data schema (JSON-LD), speed optimization, and clean semantic architecture are built into our development process from day one, not added as an afterthought.",
    },
    {
      q: "Where is Dev Pattern Labs based and how do you work with remote clients?",
      a: "Dev Pattern Labs is an independent technology studio based in Tamil Nadu, India. We work with clients locally and globally across the US, UK, and Europe using structured asynchronous collaboration, regular sprint updates, and scheduled sync calls.",
    },
  ];

  return (
    <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
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
                  ? "bg-[#0c1226]/90 border-brand-bright/50 shadow-[0_0_25px_rgba(59,130,246,0.2)]"
                  : "bg-[#0c1226]/50 border-white/10 hover:border-white/20"
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
                    isOpen ? "rotate-180 text-brand-bright" : ""
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
        <MessageSquare className="w-3.5 h-3.5 text-brand-bright" />
        <span>Have a question not listed here? Ask during your consultation or email devpatternlabs@gmail.com</span>
      </div>
    </section>
  );
}
