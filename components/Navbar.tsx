"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsMuted(sound.getMuted());

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const services = [
    { name: "Web Development", desc: "Custom-built sites & apps", icon: "🖥️", href: "#services" },
    { name: "WordPress Development", desc: "Flexible, maintainable builds", icon: "☁️", href: "#services" },
    { name: "Next.js Development", desc: "Modern, performant apps", icon: "⚛️", href: "#services" },
    { name: "Mobile App Development", desc: "Cross-platform mobile apps", icon: "📲", href: "#services" },
    { name: "UI/UX Design", desc: "Clear, conversion-focused design", icon: "🎨", href: "#services" },
    { name: "SEO Optimization", desc: "Technical & structured SEO", icon: "📈", href: "#services" },
    { name: "AI & Automation", desc: "Workflow & process automation", icon: "🤖", href: "#services" },
    { name: "Website Maintenance", desc: "Proactive care & support", icon: "🛡️", href: "#services" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between px-4 sm:px-6 py-2 rounded-2xl bg-[#0c1226]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-visible"
          >
            {/* Scroll Progress Bar at the top of Navbar */}
            <div
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-bright to-brand-cyan transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />

            {/* Official Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl p-[1px] group-hover:scale-105 transition-transform">
                <Image
                  src="/images/dev-pattern-labs-logo-icon.webp"
                  alt="Dev Pattern Labs Logo"
                  width={44}
                  height={44}
                  priority
                  className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-base sm:text-lg tracking-tight text-white font-sans">
                  Dev Pattern<span className="text-brand-bright"> Labs</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 font-mono -mt-1 hidden sm:block">
                  Web &amp; Digital Products
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-full border border-white/5">
              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:rotate-180" />
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-80 p-3 rounded-2xl bg-[#0c1226]/95 backdrop-blur-2xl border border-white/10 shadow-2xl grid grid-cols-1 gap-1 z-50 mt-1"
                    >
                      {services.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            sound.playClick();
                          }}
                          className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition group"
                        >
                          <span className="text-lg">{s.icon}</span>
                          <div>
                            <div className="text-xs font-semibold text-white group-hover:text-brand-bright transition-colors">
                              {s.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-light">{s.desc}</div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[
                { name: "PostSprint", href: "#postsprint" },
                { name: "Why Us", href: "#why-us" },
                { name: "Work", href: "#work" },
                { name: "Process", href: "#process" },
                { name: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => {
                    setHoveredNav(link.name);
                    sound.playHover();
                  }}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={() => sound.playClick()}
                  className="relative px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {hoveredNav === link.name && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full -z-10 border border-white/15"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span>{link.name}</span>
                </a>
              ))}
            </nav>

            {/* Actions: Sound Toggle + CTA */}
            <div className="flex items-center gap-3">
              {/* Audio Synthesizer Toggle */}
              <button
                onClick={toggleSound}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition"
                title={isMuted ? "Enable Interactive UI Audio" : "Mute UI Audio"}
                aria-label="Toggle UI Audio"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[10px] text-slate-400">SFX OFF</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-brand-bright animate-pulse" />
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-0.5 h-2 bg-brand-primary animate-[bounce_0.6s_ease-in-out_infinite]"></span>
                      <span className="w-0.5 h-3 bg-brand-bright animate-[bounce_0.8s_ease-in-out_infinite_0.1s]"></span>
                      <span className="w-0.5 h-1.5 bg-brand-cyan animate-[bounce_0.7s_ease-in-out_infinite_0.2s]"></span>
                    </div>
                  </>
                )}
              </button>

              {/* Primary CTA */}
              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                data-cursor="pointer"
                data-cursor-text="PROJECT"
                className="relative group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary via-brand-bright to-brand-cyan text-white font-bold text-xs shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-40 p-4 lg:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="p-6 rounded-3xl bg-[#0c1226]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <span>DEV PATTERN LABS</span>
                <span className="text-brand-bright">STUDIO NAV</span>
              </div>
              <div className="flex flex-col space-y-2">
                {[
                  { name: "Services", href: "#services" },
                  { name: "PostSprint (Studio)", href: "#postsprint" },
                  { name: "Why Us", href: "#why-us" },
                  { name: "Recent Work", href: "#work" },
                  { name: "Our Process", href: "#process" },
                  { name: "FAQ", href: "#faq" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      sound.playClick();
                    }}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={toggleSound}
                  className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-bright" />}
                  <span>SFX: {isMuted ? "OFF" : "ON"}</span>
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-brand-bright text-white font-bold text-xs"
                >
                  Start a Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
