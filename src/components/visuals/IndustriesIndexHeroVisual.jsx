import React from 'react';
import { motion } from 'framer-motion';
import { Store, HeartPulse, GraduationCap, Landmark, Factory, Hotel, Rocket, Check } from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassCard from '../common/GlassCard';

/**
 * IndustriesIndexHeroVisual
 * Overview visual showcasing the 7 sector domain specializations.
 */
export default function IndustriesIndexHeroVisual() {
  const sectors = [
    { name: 'Retail & Commerce', icon: Store, tag: 'Omnichannel' },
    { name: 'Healthcare', icon: HeartPulse, tag: 'HIPAA Aligned' },
    { name: 'Education & LMS', icon: GraduationCap, tag: 'Classroom' },
    { name: 'Finance & Banking', icon: Landmark, tag: 'PCI Audited' },
    { name: 'Manufacturing', icon: Factory, tag: 'IoT & ERP' },
    { name: 'Hospitality', icon: Hotel, tag: 'Direct Booking' },
    { name: 'Startups & SMEs', icon: Rocket, tag: 'MVP Sprints' }
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto"
    >
      <div className="relative p-6 sm:p-7 rounded-3xl bg-[#FAF6ED]/95 border border-[#DFD3BD] shadow-elevated">
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#DFD3BD]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#DFD3BD]" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium">
              meeqat.industry.domains
            </span>
          </div>
          <span className="text-[10px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded font-semibold">
            7 Focus Sectors
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {sectors.slice(0, 6).map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <GlassCard key={idx} elevation="subtle" className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 font-display">
                    {sec.name}
                  </span>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* 7th full-width sector */}
        <div className="mt-2.5">
          <GlassCard elevation="elevated" className="p-3 flex items-center justify-between border-[#DFD3BD] bg-white">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Rocket className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-900 font-display">
                Startups &amp; Growing SMEs
              </span>
            </div>
            <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
              Fast Time to Market
            </span>
          </GlassCard>
        </div>

        <div className="mt-4 pt-3 border-t border-[#DFD3BD] flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1 text-slate-600">
            <Check className="w-3.5 h-3.5 text-blue-600" />
            Compliance-Ready Blueprints
          </span>
          <span>Pan-India &amp; Global</span>
        </div>
      </div>
    </motion.div>
  );
}
