import React from 'react';
import { ShieldCheck, TrendingDown, Layers, Clock, CheckCircle } from 'lucide-react';

export default function MetricsBar() {
  const metrics = [
    {
      stat: '99.99%',
      label: 'Guaranteed Uptime SLA',
      detail: 'Multi-AZ architecture, automated failover, and active-active clustering.',
      icon: ShieldCheck,
      color: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/10',
    },
    {
      stat: '45%+',
      label: 'Cloud Cost Reduction',
      detail: 'Aggressive FinOps rightsizing, spot orchestration, and reserved capacity.',
      icon: TrendingDown,
      color: 'text-emerald-400',
      bgGlow: 'bg-emerald-500/10',
    },
    {
      stat: '250+',
      label: 'Delivered Projects',
      detail: 'Enterprise cloud migrations, bespoke software, mobile apps, and CI/CD pipelines.',
      icon: Layers,
      color: 'text-indigo-400',
      bgGlow: 'bg-indigo-500/10',
    },
    {
      stat: '<15 min',
      label: 'Critical Incident MTTR',
      detail: 'Dedicated 24/7/365 SRE squad with real-time proactive telemetry alarms.',
      icon: Clock,
      color: 'text-amber-400',
      bgGlow: 'bg-amber-500/10',
    },
  ];

  return (
    <section id="metrics" className="py-16 relative bg-slate-950/90 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Mini Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">
              Measurable Enterprise Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Engineering Reliability Built for Global Scale
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            We hold ourselves accountable to strict operational benchmarks, transparent SLAs, and measurable ROI for every client.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl p-6 glass-panel glass-panel-hover overflow-hidden group"
              >
                {/* Accent top gradient strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${item.bgGlow} border border-slate-800`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    SLA Verified
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight mb-2">
                  {item.stat}
                </div>

                <h3 className="text-sm font-semibold text-slate-200 mb-2">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
