"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Terminal, ArrowUpRight, Zap, Cpu, Code2, Workflow, ArrowUp, Globe2, Award } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Footer() {
  const [clocks, setClocks] = useState({
    india: "",
    usEast: "",
    usWest: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatTime = (tz: string) =>
        new Intl.DateTimeFormat("en-GB", {
          timeZone: tz,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(now);

      setClocks({
        india: formatTime("Asia/Kolkata") + " IST",
        usEast: formatTime("America/New_York") + " EST",
        usWest: formatTime("America/Los_Angeles") + " PST",
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04060b] pt-20 pb-12 relative overflow-hidden text-sm text-slate-400">
      {/* Perspective Grid Plane Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(to_bottom,transparent,#04060b),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-emerald p-[1px]">
                <div className="w-full h-full bg-[#05070d] rounded-[11px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand-cyan" />
                </div>
              </div>
              <span className="font-extrabold text-white text-base tracking-tight font-sans">
                Dev Pattern Labs
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Remote web engineering &amp; workflow automation studio based in Tamil Nadu, India. Delivering modular Next.js web apps and n8n automation pipelines in 14-day sprints.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Accepting Q4 Sprints
              </span>
            </div>
          </div>

          {/* Sprints & Offers */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Sprints &amp; Offers
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="#sprint"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <Zap className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>14-Day Web &amp; Ops Sprint ($1.8k)</span>
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Dedicated Tech Retainer ($1,500/mo)
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Architecture Blueprint &amp; Audit ($55)
                </a>
              </li>
              <li>
                <a
                  href="#audit"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors"
                >
                  Book 15-Minute Discovery Audit
                </a>
              </li>
            </ul>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href="#patterns"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Next.js &amp; Supabase MVPs</span>
                </a>
              </li>
              <li>
                <a
                  href="#patterns"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <Workflow className="w-3.5 h-3.5 text-brand-emerald" />
                  <span>n8n &amp; Make.com Workflows</span>
                </a>
              </li>
              <li>
                <a
                  href="#patterns"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-brand-indigo" />
                  <span>Custom Retool Portals &amp; DBs</span>
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  onMouseEnter={() => sound.playHover()}
                  className="hover:text-brand-cyan transition-colors"
                >
                  The Paradigm Shift (Why Us)
                </a>
              </li>
            </ul>
          </div>

          {/* Global Operations & Timezones */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Global Asynchronous Hub
            </h4>
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-[11px] text-slate-500 uppercase">Headquarters</div>
                <div className="text-white font-bold flex items-center justify-between">
                  <span>Tamil Nadu, IN</span>
                  <span className="text-brand-emerald">{clocks.india}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="text-[11px] text-slate-500 uppercase">Client Overlap Hours</div>
                <div className="text-slate-300 flex items-center justify-between text-[11px]">
                  <span>New York (EST):</span>
                  <span className="text-brand-cyan">{clocks.usEast}</span>
                </div>
                <div className="text-slate-300 flex items-center justify-between text-[11px]">
                  <span>San Francisco (PST):</span>
                  <span className="text-brand-cyan">{clocks.usWest}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Awwwards recognition badge & Back-to-top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <Award className="w-4 h-4 text-brand-cyan" />
            <span>&copy; {new Date().getFullYear()} Dev Pattern Labs. Engineered for Awwwards Recognition.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">60 FPS • Next.js 15 App Router</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
