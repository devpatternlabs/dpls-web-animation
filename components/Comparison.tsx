"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Comparison() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const pillars = [
    {
      title: "Business-first thinking",
      desc: "We start with the problem you're trying to solve rather than immediately reaching for a framework or plugin.",
      tag: "STRATEGY",
      icon: "🎯",
    },
    {
      title: "Practical technology choices",
      desc: "WordPress, Next.js, React, Python, APIs, databases, and automation tools each have different strengths. We choose according to your real requirements.",
      tag: "ARCHITECTURE",
      icon: "⚖️",
    },
    {
      title: "SEO-conscious development",
      desc: "Technical SEO, semantic structure, schema markup, and performance are factored in from the beginning, not bolted on afterward.",
      tag: "ORGANIC GROWTH",
      icon: "📈",
    },
    {
      title: "Performance-minded implementation",
      desc: "Fast page loads, clean code, optimized assets, and efficient caching create better user experiences and improve search visibility.",
      tag: "SPEED",
      icon: "⚡",
    },
    {
      title: "Maintainable solutions",
      desc: "Code and architecture that can be understood, updated, and extended without having to rebuild from scratch.",
      tag: "CODE QUALITY",
      icon: "🛠️",
    },
    {
      title: "Long-term support",
      desc: "We don't disappear after launch. We provide ongoing maintenance, troubleshooting, and iterative improvements as your business grows.",
      tag: "RELIABILITY",
      icon: "🤝",
    },
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#070b1a]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-primary/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Core Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Work With <span className="text-brand-grad">Dev Pattern Labs?</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            Choosing a development partner isn&apos;t only about the technology. It&apos;s about how the technology is selected, implemented, tested, and maintained.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                sound.playHover();
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              className="p-8 rounded-3xl bg-[#0c1226]/85 border border-white/10 hover:border-brand-bright/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/[0.04] text-brand-bright border border-white/10 font-bold">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-brand-bright transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-bright" />
                <span>Guaranteed Standard</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
