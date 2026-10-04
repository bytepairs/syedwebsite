import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, GitBranch, Terminal, Users, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassCard from '../common/GlassCard';

/**
 * AboutHeroVisual (Directive #24)
 * Concept: Technology + Business Partnership.
 * Factual, collaborative architecture visual:
 * Client Business Objectives <-> Direct Senior Engineering <-> Production Code & Managed Cloud.
 */
export default function AboutHeroVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated">
        
        {/* Architecture header bar */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
              meeqat.engagement.model
            </span>
          </div>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
            Direct Engineering
          </span>
        </div>

        {/* Central Collaborative Structure */}
        <div className="space-y-3">
          {/* Client Objectives */}
          <GlassCard elevation="subtle" className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  Client Business Leadership
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Clear Commercial Goals &amp; Operational Needs
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              Input
            </span>
          </GlassCard>

          {/* Central Conduit Indicator */}
          <div className="flex items-center justify-center py-1">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono text-slate-500 shadow-xs">
              <GitBranch className="w-3 h-3 text-blue-600" />
              <span>Transparent Agile Milestones</span>
            </div>
          </div>

          {/* Direct Senior Engineering Desk */}
          <GlassCard elevation="elevated" className="p-4 border-blue-300 bg-white/95">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 font-display">
                  Meeqat Technical Practitioners
                </span>
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Senior Leads
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed mb-3">
              Direct access to software architects and cloud engineers who write production code and manage systems.
            </p>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-600">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Zero Account Hand-offs</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>Version-Controlled Git</span>
              </div>
            </div>
          </GlassCard>

          {/* Output / Asset Ownership */}
          <GlassCard elevation="subtle" className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  100% Client Asset Ownership
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Git Repos • Cloud Consoles • Domain Control
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
              Verified
            </span>
          </GlassCard>
        </div>

        {/* Footer info strip */}
        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Registered in Tamil Nadu</span>
          <span>Serving Pan-India &amp; Global</span>
        </div>
      </div>
    </motion.div>
  );
}
