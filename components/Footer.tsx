"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp, Award, Mail, MapPin, Globe2 } from "lucide-react";
import { sound } from "@/lib/sound";

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050914] pt-20 pb-12 relative overflow-hidden text-sm text-slate-400">
      {/* Background subtle grid */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[linear-gradient(to_bottom,transparent,#050914),linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl relative">
                <Image
                  src="/images/dev-pattern-labs-logo-icon.webp"
                  alt="Dev Pattern Labs Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-bold text-white text-lg tracking-tight font-sans">
                Dev Pattern<span className="text-brand-bright"> Labs</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Independent web development and technology studio based in Tamil Nadu, India. We design, build, and maintain high-performing digital products for businesses that care about usability, performance, and long-term results.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-bright" />
                <a href="mailto:devpatternlabs@gmail.com" className="hover:text-white transition">
                  devpatternlabs@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-bright" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-brand-bright transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">WordPress Development</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">Next.js Development</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">SEO Optimization</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">AI &amp; Automation</a></li>
              <li><a href="#services" className="hover:text-brand-bright transition-colors">Website Maintenance</a></li>
            </ul>
          </div>

          {/* Company & Programs */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 font-mono">
              Programs &amp; Studio
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#postsprint" className="hover:text-brand-bright transition-colors font-medium text-white flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-bright animate-pulse" />
                  <span>PostSprint Studio</span>
                </a>
              </li>
              <li><a href="#work" className="hover:text-brand-bright transition-colors">Recent Work &amp; Portfolio</a></li>
              <li><a href="#why-us" className="hover:text-brand-bright transition-colors">Why Work With Us</a></li>
              <li><a href="#process" className="hover:text-brand-bright transition-colors">Development Process</a></li>
              <li><a href="#faq" className="hover:text-brand-bright transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#contact" className="hover:text-brand-bright transition-colors">Start a Project</a></li>
            </ul>
          </div>

          {/* Mascot / Avatar & Global Operations */}
          <div className="flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-[#0c1226] border border-white/10 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-brand-bright/30">
                <Image
                  src="/images/mascot/dev-avatar.webp"
                  alt="Dev Pattern Labs Mascot Avatar"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">Direct Senior Engineer</div>
                <div className="text-[11px] text-slate-400 font-light mt-0.5">
                  No junior hand-offs or meeting bloat.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 text-xs font-mono text-slate-400">
              <span className="text-brand-bright block font-bold">STATUS: ACCEPTING NEW BUILDS</span>
              <span className="text-[11px] text-slate-500 mt-1 block">
                Serving Clients Locally &amp; Globally
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-brand-bright" />
            <span>&copy; {new Date().getFullYear()} Dev Pattern Labs. Built for Awwwards Recognition.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">60 FPS • React 19 • Next.js 15</span>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white transition border border-white/10"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-brand-bright" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
