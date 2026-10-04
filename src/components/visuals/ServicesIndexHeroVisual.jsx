import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cloud, ShieldCheck, TrendingUp, Layers, Check } from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassCard from '../common/GlassCard';

/**
 * ServicesIndexHeroVisual
 * 4-quadrant architectural framework showing Build, Modernize, Secure, and Grow.
 */
export default function ServicesIndexHeroVisual() {
  const quadrants = [
    {
      label: 'BUILD',
      title: 'Digital Systems',
      desc: 'Websites • Mobile • Commerce',
      icon: Globe,
      color: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      label: 'MODERNIZE',
      title: 'Cloud Infrastructure',
      desc: 'AWS • Azure • GCP Migrations',
      icon: Cloud,
      color: 'text-sky-700 bg-sky-50 border-sky-200'
    },
    {
      label: 'SECURE',
      title: 'Enterprise Defense',
      desc: 'Vulnerability Audits • 24/7 SLA',
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      label: 'GROW',
      title: 'Acquisition & GEO',
      desc: 'Technical SEO • AI Search Sync',
      icon: TrendingUp,
      color: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    }
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated">
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
              meeqat.services.matrix
            </span>
          </div>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
            8 Core Services
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {quadrants.map((q, idx) => {
            const Icon = q.icon;
            return (
              <GlassCard key={idx} elevation="subtle" className="p-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-7 h-7 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${q.color}`}>
                      {q.label}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 font-display">
                    {q.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">
                    {q.desc}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1 text-slate-600">
            <Check className="w-3.5 h-3.5 text-blue-600" />
            Fixed-Milestone &amp; Retainer Models
          </span>
          <span>100% IP Ownership</span>
        </div>
      </div>
    </motion.div>
  );
}
