"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Sparkles, Zap, Layers, Cpu, ShieldCheck } from "lucide-react";
import { sound } from "@/lib/sound";

export default function PostSprintSpotlight() {
  return (
    <section id="postsprint" className="py-24 relative overflow-hidden bg-[#0a0f20]/60 border-y border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-brand-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" />
              <span>In-House SaaS Product</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              PostSprint — Multi-Platform Social Studio
            </h2>

            <p className="text-slate-300 text-base leading-relaxed font-light">
              We don&apos;t just consult — we engineer production SaaS. <strong>PostSprint</strong> is our proprietary in-house cloud publishing studio designed to plan, schedule, and broadcast media simultaneously across Instagram, Facebook, and YouTube with automated comment triage and centralized messaging.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 text-brand-bright flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Simultaneous Multi-Platform Broadcast</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">
                    Push video reels, images, and carousel campaigns across Instagram, Facebook, and YouTube simultaneously from one clean command center.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-bright/20 text-brand-bright flex items-center justify-center shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">AI-Powered Lead &amp; Comment Triage</h4>
                  <p className="text-xs text-slate-400 font-light mt-0.5">
                    Automated classification of customer questions and feedback into high-priority sales leads with direct webhook triggers.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-bright text-white font-bold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition"
              >
                <span>Inquire About PostSprint</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#0c1226]/90 border border-white/15 p-3 shadow-2xl overflow-hidden group hover:border-brand-bright/40 transition-all duration-300"
            >
              <div className="relative rounded-2xl overflow-hidden bg-black/50">
                <Image
                  src="/images/portfolio/postsprint.webp"
                  alt="PostSprint Social Studio Dashboard"
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>POSTSPRINT STUDIO // CLOUD PUBLISHER</span>
                <span className="text-brand-bright font-bold">100% IN-HOUSE ENGINE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
