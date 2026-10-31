"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Volume2, VolumeX, Menu, X, ArrowUpRight, Zap, Sparkles } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setIsMuted(sound.getMuted());

    const updateClock = () => {
      const now = new Date();
      // Format in IST (Tamil Nadu HQ)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now) + " IST");
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: "Patterns", href: "#patterns" },
    { name: "Why Us", href: "#comparison" },
    { name: "14-Day Sprint", href: "#sprint" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-surface/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            {/* Scroll Progress Bar at the top of Navbar */}
            <div
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand-cyan via-brand-emerald to-brand-indigo transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />

            {/* Brand Logo & Telemetry */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-3 group"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
              >
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-emerald p-[1px] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-shadow">
                  <div className="w-full h-full bg-[#05070d] rounded-[11px] flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-tight text-white font-sans group-hover:text-brand-cyan transition-colors">
                      Dev Pattern Labs
                    </span>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                    <span>Q4 SPRINT ACTIVE</span>
                    <span className="text-slate-600">•</span>
                    <span className="hidden sm:inline text-emerald-400/90">{currentTime}</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-2 py-1 rounded-full border border-white/5">
              {navLinks.map((link) => (
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
                    <Volume2 className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-0.5 h-2 bg-brand-cyan animate-[bounce_0.6s_ease-in-out_infinite]"></span>
                      <span className="w-0.5 h-3 bg-brand-emerald animate-[bounce_0.8s_ease-in-out_infinite_0.1s]"></span>
                      <span className="w-0.5 h-1.5 bg-brand-indigo animate-[bounce_0.7s_ease-in-out_infinite_0.2s]"></span>
                    </div>
                  </>
                )}
              </button>

              {/* Primary CTA */}
              <a
                href="#audit"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-emerald text-slate-950 font-bold text-xs shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book 15-Min Audit</span>
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
            className="fixed inset-x-0 top-20 z-40 p-4 lg:hidden"
          >
            <div className="p-6 rounded-3xl bg-surface/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <span>NAVIGATION</span>
                <span className="text-emerald-400">{currentTime}</span>
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
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
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-brand-cyan" />}
                  <span>UI SOUNDS: {isMuted ? "MUTED" : "ENABLED"}</span>
                </button>
                <a
                  href="#audit"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-lg bg-brand-cyan text-slate-950 font-bold text-xs"
                >
                  Book Free Audit
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
