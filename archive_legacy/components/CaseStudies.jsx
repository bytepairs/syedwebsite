import React, { useState } from 'react';
import { 
  Building2, 
  ArrowUpRight, 
  CheckCircle, 
  TrendingUp, 
  Cpu, 
  ShieldCheck, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function CaseStudies({ onOpenConsultation }) {
  const caseStudies = [
    {
      id: 'fintech-migration',
      client: 'Global FinTech Payment Gateway',
      industry: 'Finance & Banking',
      headline: 'Zero-Downtime Multi-Region AWS Migration with 44% Cost Reduction',
      challenge:
        'A legacy monolithic payment processor was experiencing latency spikes during trading hours and unsustainable monthly cloud infrastructure invoices.',
      solution:
        'Re-architected into modular microservices running on Amazon EKS with Terraform IaC, Amazon Aurora Global Database, and automated blue-green pipelines.',
      metrics: [
        { label: 'Cloud Cost Cut', value: '-44%' },
        { label: 'Throughput', value: '15,000 TPS' },
        { label: 'Cutover Downtime', value: '0 Seconds' },
        { label: 'P99 Latency', value: '18ms (from 240ms)' }
      ],
      tags: ['AWS EKS', 'Terraform', 'PostgreSQL Aurora', 'FinOps', 'Zero-Downtime']
    },
    {
      id: 'healthtech-telemed',
      client: 'MedCloud Health Diagnostics',
      industry: 'Healthcare',
      headline: 'HIPAA-Hardened Kubernetes Deployment: From 3 Weeks to 18 Minutes Release Cycles',
      challenge:
        'Stringent health data sovereignty and manual compliance verification resulted in high release friction, requiring 3 weeks to deploy software updates.',
      solution:
        'Designed an automated GitOps delivery pipeline with integrated static vulnerability scanning, zero-trust secrets management via HashiCorp Vault, and encrypted multi-tenant clusters.',
      metrics: [
        { label: 'Deploy Cycle', value: '18 Mins (from 3 wks)' },
        { label: 'Compliance Audit', value: '100% HIPAA Pass' },
        { label: 'Telehealth Uptime', value: '99.999%' },
        { label: 'Vulnerabilities', value: '0 Critical' }
      ],
      tags: ['Kubernetes', 'HashiCorp Vault', 'HIPAA', 'GitOps', 'Fast-Delivery']
    },
    {
      id: 'retail-scaling',
      client: 'OmniChannel Retail Brand',
      industry: 'Retail & E-commerce',
      headline: 'Sustained 12x Peak Flash-Sale Concurrency with Zero Latency Degradation',
      challenge:
        'Severe cart abandonment and checkout timeout crashes during holiday flash sales and national media campaigns.',
      solution:
        'Engineered a headless storefront on Next.js with edge caching, Redis distributed lock management, and reactive horizontal pod autoscaling (HPA).',
      metrics: [
        { label: 'Traffic Surge', value: '12x Sustained' },
        { label: 'Cart Abandonment', value: '-28% Drop' },
        { label: 'Page Load Speed', value: '0.8s LCP' },
        { label: 'Dropped Orders', value: '0 Errors' }
      ],
      tags: ['Next.js', 'Redis', 'HPA Autoscaling', 'Headless Commerce', 'Stripe']
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const activeCase = caseStudies[activeTab];

  return (
    <section id="case-studies" className="py-24 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
              <span>Proven Enterprise Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Client Case Studies
            </h2>
          </div>
          <p className="text-base text-slate-400 max-w-lg">
            See how our architecture designs, cloud migrations, and proactive infrastructure support deliver quantifiable ROI and operational resilience.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10 overflow-x-auto pb-2">
          {caseStudies.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 text-left p-4 rounded-xl border transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-slate-900 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
              }`}
            >
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                {study.industry}
              </div>
              <div className="text-sm font-bold text-white line-clamp-1">
                {study.client}
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight Card */}
        <div className="rounded-3xl glass-panel p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                <Building2 className="w-3.5 h-3.5" />
                <span>{activeCase.client} • {activeCase.industry}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                {activeCase.headline}
              </h3>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    The Business Challenge
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                    The Meeqat Technologies Solution
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-cyan-950/30 text-cyan-300 border border-cyan-800/40"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Quantifiable ROI Metrics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                    Quantifiable Outcomes
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Verified ROI
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {activeCase.metrics.map((m, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-center"
                    >
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mb-1">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <button
                  onClick={() => onOpenConsultation(activeCase.client)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all"
                >
                  <span>Build A Similar Solution</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
