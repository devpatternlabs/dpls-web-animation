"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { sound } from "@/lib/sound";

export default function SprintRoadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand the business, the goals, and what the website or product actually needs to do before touching any code.",
      tag: "REQUIREMENTS",
    },
    {
      num: "02",
      title: "Plan",
      desc: "Define scope, technical requirements, milestones, and the right technology approach for the project.",
      tag: "SPECIFICATION",
    },
    {
      num: "03",
      title: "Architect",
      desc: "Plan the structure — content hierarchy, database schema, API contracts, integrations, and data flows.",
      tag: "FOUNDATION",
    },
    {
      num: "04",
      title: "Design",
      desc: "Design responsive interfaces around clarity, visual hierarchy, and how people will actually use and navigate the site.",
      tag: "UI/UX",
    },
    {
      num: "05",
      title: "Develop",
      desc: "Build the frontend, backend, workflows, and integrations with clean, maintainable code you own 100%.",
      tag: "ENGINEERING",
    },
    {
      num: "06",
      title: "Test",
      desc: "Test cross-browser responsiveness, loading speed, form submissions, webhooks, and security across real devices.",
      tag: "QUALITY ASSURANCE",
    },
    {
      num: "07",
      title: "Launch",
      desc: "Smooth, zero-downtime deployment, DNS & SSL configuration, analytics setup, and production verification.",
      tag: "GO-LIVE",
    },
    {
      num: "08",
      title: "Optimize",
      desc: "Monitor performance, Core Web Vitals, Google search indexing, and real user interaction metrics post-launch.",
      tag: "PERFORMANCE",
    },
    {
      num: "09",
      title: "Maintain",
      desc: "Ongoing proactive maintenance, security patches, backups, and iterative improvements as your business expands.",
      tag: "CARE & SUPPORT",
    },
  ];

  const techStack = [
    { category: "Platforms", items: ["Next.js", "Flutter", "WordPress", "React"] },
    { category: "Languages", items: ["TypeScript", "Python", "Dart", "PHP"] },
    { category: "Data & APIs", items: ["PostgreSQL", "Supabase", "FastAPI", "MySQL"] },
    { category: "AI & Mobile", items: ["PyTorch / TFLite", "Android Studio", "LLM APIs", "n8n"] },
    { category: "Tooling", items: ["Git", "Figma", "Docker", "CI/CD Vercel"] },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0c1226]/50 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Process */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary/10 border border-brand-bright/30 text-brand-light text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Clock className="w-3.5 h-3.5 text-brand-bright" />
            <span>Methodical Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            A Clear Process From Idea to Launch
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            A good development process reduces unnecessary surprises. Our workflow generally moves through nine disciplined stages.
          </p>
        </div>

        {/* 9 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {steps.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => sound.playHover()}
              className="p-8 rounded-3xl bg-[#0c1226]/85 border border-white/10 hover:border-brand-bright/40 transition-all duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold text-brand-bright font-mono opacity-80 group-hover:opacity-100 transition-opacity">
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5">
                    {step.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-bright transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Technology Behind the Work */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The Technology Behind the Work
            </h3>
            <p className="mt-3 text-slate-400 text-sm font-light">
              We use different technologies for different problems. Our stack is chosen strictly around performance, scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {techStack.map((col, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#070b1a]/80 border border-white/10 space-y-3"
              >
                <h4 className="text-xs font-mono font-bold text-brand-bright uppercase tracking-wider">
                  {col.category}
                </h4>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-slate-200 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-bright/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
