"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import { sound } from "@/lib/sound";

export default function Hero() {
  const capabilities = [
    { label: "Web Development", icon: "🖥️", href: "#services" },
    { label: "WordPress", icon: "☁️", href: "#services" },
    { label: "Next.js", icon: "⚛️", href: "#services" },
    { label: "Mobile Apps", icon: "📲", href: "#services" },
    { label: "UI/UX Design", icon: "🎨", href: "#services" },
    { label: "SEO Foundations", icon: "📈", href: "#services" },
    { label: "AI & Automation", icon: "🤖", href: "#services" },
    { label: "PostSprint Studio", icon: "📣", href: "#postsprint" },
    { label: "Site Maintenance", icon: "🛡️", href: "#services" },
  ];

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-brand-primary/25 via-brand-bright/20 to-brand-cyan/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-bright/30 bg-brand-primary/10 backdrop-blur-md text-brand-light text-xs font-mono tracking-wide shadow-[0_0_20px_rgba(37,99,235,0.25)]"
          >
            <span className="w-2 h-2 rounded-full bg-brand-bright animate-ping" />
            <span className="font-semibold text-white">Web Development Agency</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Tamil Nadu, India • Global Clients</span>
          </motion.div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-sans"
          >
            Build Better Websites &amp;{" "}
            <span className="bg-gradient-to-r from-brand-bright via-brand-light to-brand-cyan bg-clip-text text-transparent">
              Digital Products
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
          >
            <strong className="text-white font-semibold">Dev Pattern Labs</strong> helps businesses turn ideas, outdated websites, and digital challenges into modern web solutions. We build and improve WordPress websites, e-commerce platforms, user interfaces, SEO foundations, AI-powered workflows, and ongoing maintenance.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            data-cursor="pointer"
            data-cursor-text="START"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-primary via-brand-bright to-brand-cyan text-white font-extrabold text-base shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            data-cursor="pointer"
            data-cursor-text="SERVICES"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0c1226]/90 border border-white/10 text-slate-200 font-semibold text-base hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 backdrop-blur-lg"
          >
            <span>Explore Services</span>
          </a>

          <a
            href="#work"
            onMouseEnter={() => sound.playHover()}
            onClick={() => sound.playClick()}
            data-cursor="pointer"
            data-cursor-text="WORK"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-slate-400 hover:text-brand-bright text-sm font-semibold transition"
          >
            <span>View Recent Work</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Capability Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-2.5 max-w-4xl mx-auto"
        >
          {capabilities.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              onMouseEnter={() => sound.playHover()}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-brand-primary/10 hover:border-brand-bright/30 transition backdrop-blur-sm"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </motion.div>

        {/* Featured Visual Showstopper: Official Web Development Hero Asset */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto rounded-3xl bg-[#0c1226]/90 border border-white/15 p-3 sm:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative group overflow-hidden"
        >
          {/* Animated top shimmer border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-bright to-transparent opacity-75" />

          <div className="relative rounded-2xl overflow-hidden bg-black/40 border border-white/5">
            <Image
              src="/images/dev-pattern-labs-web-development-agency.webp"
              alt="Dev Pattern Labs Web Development Agency"
              width={1200}
              height={675}
              priority
              className="w-full h-auto object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
            />
            {/* Subtle gradient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b1a]/70 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Quick Pillars Under Hero Asset */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 px-2 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
              <span>Usability, Speed &amp; Conversion</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
              <span>Custom WordPress &amp; Next.js</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-brand-bright shrink-0" />
              <span>Autonomous AI &amp; Ops Workflows</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
