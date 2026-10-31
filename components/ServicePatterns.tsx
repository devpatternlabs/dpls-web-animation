"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Sparkles, Cpu, Layers, ExternalLink } from "lucide-react";
import { sound } from "@/lib/sound";

export default function ServicePatterns() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const services = [
    {
      id: "web",
      category: "development",
      title: "Web Development",
      tagline: "Websites built around scale",
      desc: "We develop responsive websites and web solutions designed around your content, business requirements, and future needs.",
      icon: "🖥️",
      tech: ["HTML5 / CSS3", "Modern JavaScript", "Tailwind CSS", "REST APIs"],
    },
    {
      id: "wordpress",
      category: "development",
      title: "WordPress Development",
      tagline: "Flexible websites with WordPress",
      desc: "We build, customize, optimize, and maintain WordPress websites for businesses that need a flexible content management system without unnecessary complexity.",
      icon: "☁️",
      tech: ["Custom Themes", "WooCommerce", "Advanced Custom Fields", "Speed Optimization"],
    },
    {
      id: "nextjs",
      category: "development",
      title: "Next.js Development",
      tagline: "Fast, scalable React applications",
      desc: "Built with Next.js for high-speed page loads, search visibility, dynamic features, and enterprise-grade scalability.",
      icon: "⚛️",
      tech: ["App Router", "React 19", "Server Components", "Vercel Edge"],
    },
    {
      id: "mobile",
      category: "development",
      title: "Mobile App Development",
      tagline: "Cross-platform mobile apps",
      desc: "From Flutter and React Native to Progressive Web Apps (PWAs) that work seamlessly across iOS and Android.",
      icon: "📲",
      tech: ["Flutter", "Dart", "Android Studio", "Cross-Platform"],
    },
    {
      id: "uiux",
      category: "design",
      title: "UI/UX Design",
      tagline: "Clear, intuitive interfaces",
      desc: "We design with intent—focusing on user journeys, conversion paths, clean aesthetics, and visual hierarchy that make taking action natural.",
      icon: "🎨",
      tech: ["Figma", "User Journey Mapping", "Wireframing", "Design Systems"],
    },
    {
      id: "seo",
      category: "growth",
      title: "SEO Optimization",
      tagline: "Foundational and technical SEO",
      desc: "Structured data schema, indexability, speed optimization, and semantic architecture that search engines understand and rank.",
      icon: "📈",
      tech: ["Schema.org JSON-LD", "Core Web Vitals", "Indexing Audits", "Semantic HTML"],
    },
    {
      id: "ai",
      category: "automation",
      title: "AI & Automation",
      tagline: "Streamlined operations & pipelines",
      desc: "We integrate AI capabilities, LLMs, automated workflows (n8n, APIs), and data pipelines that eliminate repetitive manual tasks.",
      icon: "🤖",
      tech: ["n8n Workflows", "OpenAI / Claude API", "Webhooks", "Custom Automation"],
    },
    {
      id: "social",
      category: "growth",
      title: "Social Media Optimization",
      tagline: "Multi-platform publishing with PostSprint",
      desc: "Integrated social content workflows and automation to distribute content consistently across Instagram, YouTube, and Facebook.",
      icon: "📣",
      tech: ["PostSprint Studio", "Automated Scheduling", "Multi-Platform API"],
    },
    {
      id: "maintenance",
      category: "growth",
      title: "Website Maintenance",
      tagline: "Proactive monitoring & updates",
      desc: "Security patches, performance audits, backups, and technical support so your digital assets remain stable and secure 24/7.",
      icon: "🛡️",
      tech: ["Security Audits", "Daily Backups", "Uptime Monitoring", "Version Upgrades"],
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-brand-primary/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Part 1: Philosophy Banner (Technology That Solves Real Problems) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 rounded-3xl bg-[#0c1226]/80 border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-xl relative overflow-hidden"
      >
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-bright/30 text-brand-light text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-brand-bright" />
            <span>Our Philosophy</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology That Solves Real Problems
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            A website shouldn&apos;t exist simply because a business needs a website. It should help people understand your business, find what they need, take action, and give your team a reliable platform to work with. We look at the requirements first, then determine the right combination of design, development, technology, integrations, and ongoing maintenance.
          </p>
        </div>
      </motion.div>

      {/* Part 2: What We Do Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-bright/10 border border-brand-bright/30 text-brand-bright text-xs font-mono font-bold tracking-widest uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Digital Lifecycle</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          What We Do
        </h2>
        <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          From websites and applications to optimization and automation, Dev Pattern Labs provides development services around the complete digital lifecycle.
        </p>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Services" },
            { id: "development", label: "Development" },
            { id: "design", label: "Design" },
            { id: "automation", label: "AI & Automation" },
            { id: "growth", label: "SEO & Growth" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setSelectedCategory(tab.id);
                sound.playClick();
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                selectedCategory === tab.id
                  ? "bg-brand-bright text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => sound.playHover()}
              className="p-8 rounded-3xl bg-[#0c1226]/85 border border-white/10 hover:border-brand-bright/40 backdrop-blur-xl shadow-xl flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <div className="text-[11px] font-mono text-brand-bright font-semibold uppercase tracking-wider mb-1">
                  {service.tagline}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-brand-bright transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-light mb-6">
                  {service.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] text-[11px] font-mono text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
