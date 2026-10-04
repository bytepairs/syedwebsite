import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cloud, ShieldCheck, Code2, Sparkles, ArrowRight } from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassCard from '../common/GlassCard';

/**
 * InsightsHeroVisual (Directive #26)
 * Editorial technology visual / digital knowledge ecosystem.
 * Shows floating article cards, architectural playbooks, and GEO search concepts.
 */
export default function InsightsHeroVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF6ED]/95 border border-[#DFD3BD] shadow-elevated">
        
        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DFD3BD]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
              meeqat.knowledge.base
            </span>
          </div>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
            Engineering Advisory
          </span>
        </div>

        {/* Floating Editorial Cards */}
        <div className="space-y-3">
          <GlassCard elevation="subtle" className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  Cloud Migration Playbook
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Lift-and-Shift vs Right-Sizing Architecture
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
              AWS/Azure
            </span>
          </GlassCard>

          <GlassCard elevation="elevated" className="p-3.5 border-blue-200 bg-white/95">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  Modern Web Performance
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Core Web Vitals &amp; Component Cleanliness
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded ml-auto">
              React/Vite
            </span>
          </GlassCard>

          <GlassCard elevation="subtle" className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  SME Cybersecurity Checklist
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  OWASP Top 10 &amp; IAM Hardening
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              Security
            </span>
          </GlassCard>

          <GlassCard elevation="subtle" className="p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  Generative Engine Optimization (GEO)
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Structuring B2B Entities for AI Answer Engines
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
              AI Search
            </span>
          </GlassCard>
        </div>

        {/* Footer info strip */}
        <div className="mt-4 pt-3 border-t border-[#DFD3BD] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Authored by Senior Engineers</span>
          <span>Updated Monthly</span>
        </div>
      </div>
    </motion.div>
  );
}
