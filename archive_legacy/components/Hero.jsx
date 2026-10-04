import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  GitBranch, 
  Server, 
  Zap, 
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const trustBadges = [
    { label: 'AWS Certified Architects', icon: '☁️' },
    { label: 'Azure Enterprise Advisory', icon: '🔷' },
    { label: 'Google Cloud Platform', icon: '🌐' },
    { label: 'Kubernetes CNCF Ready', icon: '☸️' },
    { label: 'ISO 27001 & GDPR Aligned', icon: '🛡️' },
    { label: '99.99% Guaranteed SLA', icon: '⚡' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="bg-mesh-glow w-[550px] h-[550px] bg-cyan-500/20 top-10 left-1/4 -translate-x-1/2" />
      <div className="bg-mesh-glow w-[600px] h-[600px] bg-indigo-600/20 top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span>Enterprise IT Consulting & Digital Transformation</span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline text-slate-400">24/7/365 SRE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6">
              Architecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-indigo-400">
                Resilient Cloud Systems,
              </span>{' '}
              DevOps Pipelines & Scalable Software.
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl font-normal leading-relaxed">
              <strong className="text-white font-medium">Meeqat Technologies</strong> delivers full-lifecycle IT engineering. From zero-downtime Cloud Migrations and GitOps automation to custom web, mobile, and 24/7 enterprise infrastructure maintenance for organizations across India and Worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenConsultation()}
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-slate-300 bg-slate-900/60 border border-slate-700/70 hover:border-cyan-500/40 hover:text-white transition-all duration-300 hover:bg-slate-800/80"
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Explore Core Services</span>
              </a>
            </div>

            {/* Rapid Highlights Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 w-full text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>Zero-Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>100% Infrastructure-as-Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>&lt;15m Incident SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Telemetry & Cluster Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative ambient rim */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Glassmorphic System Telemetry Window */}
              <div className="relative rounded-2xl glass-panel p-6 shadow-2xl border border-slate-700/60">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      meeqat-infra-control.prod
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Mesh
                  </span>
                </div>

                {/* Telemetry Metrics Stack */}
                <div className="space-y-4">
                  {/* Kubernetes Status */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-cyan-400" />
                        Production Multi-Region Clusters
                      </span>
                      <span className="text-xs font-mono font-medium text-cyan-400">99.999% SLA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full w-[98%]" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400">3 Regions (AZs)</span>
                    </div>
                  </div>

                  {/* CI/CD Deployment Health */}
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-slate-400 font-mono flex items-center gap-2">
                        <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
                        Automated GitOps CI/CD
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-medium">Passed (1m 48s)</span>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Commit <code className="text-cyan-300 font-mono">#d8f2a9c</code> deployed to Canary with 0 regression errors.
                    </p>
                  </div>

                  {/* Real-time stats row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span>Edge Latency</span>
                      </div>
                      <div className="text-lg font-bold font-mono text-white flex items-baseline gap-1">
                        16ms
                        <span className="text-[10px] text-emerald-400 font-normal">(-8ms CDN)</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                        <Activity className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Cloud Cost Saving</span>
                      </div>
                      <div className="text-lg font-bold font-mono text-white flex items-baseline gap-1">
                        -42.4%
                        <span className="text-[10px] text-cyan-400 font-normal">FinOps</span>
                      </div>
                    </div>
                  </div>

                  {/* Security Posture Status */}
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-cyan-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-cyan-400" />
                      <div>
                        <div className="text-xs font-medium text-white">Zero-Trust Security Posture</div>
                        <div className="text-[10px] text-slate-400">ISO 27001 • HIPAA • SOC2 Type II Certified</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold">100% Score</span>
                  </div>
                </div>

                {/* Bottom interactive action */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">Need this architecture for your team?</span>
                  <button
                    onClick={() => onOpenConsultation()}
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-4"
                  >
                    Request Audit &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Enterprise Trust Badges Grid */}
        <div className="mt-20 pt-8 border-t border-slate-800/80">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">
            Trusted Enterprise Cloud Standards & Technologies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-medium text-slate-300 hover:border-slate-700 transition-colors"
              >
                <span>{badge.icon}</span>
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
