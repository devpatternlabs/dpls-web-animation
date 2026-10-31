"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export default function RecentWork() {
  const projects = [
    {
      title: "Dark Green Zone",
      category: "Landscaping / Business Site",
      desc: "High-conversion business website designed for a modern landscaping brand with custom service catalogs, photo galleries, and instant inquiry forms.",
      image: "/images/portfolio/dark-green-zone.webp",
      tech: ["Next.js", "Tailwind CSS", "SEO Schema", "Responsive UI"],
    },
    {
      title: "Kailai Matrimony",
      category: "Matrimonial Platform",
      desc: "Community matrimony platform engineered with private member authentication, searchable candidate profiles, and responsive mobile-first layouts.",
      image: "/images/portfolio/kailai-matrimony.webp",
      tech: ["WordPress", "Custom DB", "Auth System", "Speed Optimized"],
    },
    {
      title: "PostSprint",
      category: "Cloud Publishing SaaS",
      desc: "Our in-house multi-platform social management platform that simultaneously schedules and posts across Instagram, Facebook, and YouTube with automated triage.",
      image: "/images/portfolio/postsprint.webp",
      tech: ["Next.js", "Social APIs", "AI Automation", "Cloud Publisher"],
    },
    {
      title: "Wayfarer Bus Travel",
      category: "Travel & Fleet Booking",
      desc: "Tour booking and fleet rental web portal with route schedules, vehicle fleet showcases, and direct WhatsApp booking integration.",
      image: "/images/portfolio/wayfarer-bus-travel.webp",
      tech: ["Web Development", "WhatsApp API", "Performance", "Local SEO"],
    },
  ];

  return (
    <section id="work" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[350px] bg-brand-primary/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Recent Websites &amp; Digital Products
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-light max-w-2xl">
            A selection of client projects, community-focused services, and digital products built for clarity, speed, and business results.
          </p>
        </div>

        <a
          href="#contact"
          onMouseEnter={() => sound.playHover()}
          className="inline-flex items-center gap-2 text-sm font-bold text-brand-bright hover:text-brand-light transition group font-mono"
        >
          <span>Discuss Similar Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl bg-[#0c1226]/90 border border-white/10 hover:border-brand-bright/40 overflow-hidden shadow-2xl group transition-all duration-300 flex flex-col justify-between"
          >
            {/* Project Image Preview */}
            <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={437}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1226] via-transparent to-transparent opacity-80" />
            </div>

            {/* Project Details */}
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-brand-bright font-semibold uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-slate-400 group-hover:text-white transition">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-bright transition-colors">
                {item.title}
              </h3>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {item.desc}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] font-mono text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
