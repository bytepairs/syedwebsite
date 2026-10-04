import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassCard from '../common/GlassCard';

/**
 * ContactHeroVisual (Directive #25)
 * Concept: Business Conversation / Digital Connection.
 * Visualizes direct communication routing:
 * Scope Submission -> Lead Engineer Review -> 24h Response Protocol.
 */
export default function ContactHeroVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF6ED]/95 border border-[#DFD3BD] shadow-elevated">
        
        {/* Architecture header bar */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DFD3BD]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
              meeqat.inquiry.router
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Active Channel
          </span>
        </div>

        {/* Process nodes */}
        <div className="space-y-3">
          {/* Step 1 */}
          <GlassCard elevation="subtle" className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  1. Scope &amp; Requirements Shared
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Online form, RFP email, or WhatsApp brief
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              Direct
            </span>
          </GlassCard>

          {/* Step 2 */}
          <GlassCard elevation="elevated" className="p-4 border-blue-200 bg-white/95">
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-900 font-display">
                  2. Technical Triage &amp; Review
                </span>
              </div>
              <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                Within 1 Business Day
              </span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Our lead engineers evaluate your technical stack, dependencies, timeline, and deliverables before proposing next steps.
            </p>
          </GlassCard>

          {/* Step 3 */}
          <GlassCard elevation="subtle" className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-display block">
                  3. Structured Discovery Call
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  Zero sales pitch • Objective technical roadmap
                </span>
              </div>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          </GlassCard>
        </div>

        {/* Physical facilities indicator */}
        <div className="mt-4 pt-3 border-t border-[#DFD3BD] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>Tindivanam &amp; Krishnagiri Offices</span>
          </span>
          <span className="text-emerald-700 font-semibold">Encrypted Transmission</span>
        </div>
      </div>
    </motion.div>
  );
}
