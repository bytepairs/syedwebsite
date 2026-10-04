import React from 'react';
import { 
  Code2, 
  Clock, 
  ShieldCheck, 
  Network, 
  Users, 
  Zap, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export default function WhyUs({ onOpenConsultation }) {
  const advantages = [
    {
      icon: Code2,
      title: '100% Infrastructure-as-Code',
      desc: 'Zero manual console tweaks. Every server, network route, and permission is fully codified in declarative Terraform/OpenTofu and tracked in Git.'
    },
    {
      icon: Clock,
      title: 'Guaranteed 15-Minute Response SLA',
      desc: 'Our dedicated 24/7/365 SRE team continuously monitors your workloads with direct escalation bridges to senior engineers.'
    },
    {
      icon: Network,
      title: 'Cloud-Agnostic & Zero Lock-in',
      desc: 'Whether on AWS, Microsoft Azure, Google Cloud, or Hybrid bare-metal, we architect open, containerized architectures that preserve flexibility.'
    },
    {
      icon: ShieldCheck,
      title: 'Built-in Zero-Trust Security',
      desc: 'Security is not an afterthought. We embed least-privilege IAM, encrypted secrets, and automated vulnerability scanning at every pipeline phase.'
    },
    {
      icon: Users,
      title: 'Direct Senior Architect Access',
      desc: 'No junior hand-offs or sluggish support queues. You collaborate directly with certified principal cloud architects and lead engineers.'
    },
    {
      icon: Zap,
      title: 'FinOps Cost Discipline',
      desc: 'We routinely slash our clients cloud bills by 35% to 50% via automated resource scheduling, spot orchestration, and reserved capacity planning.'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span>The Enterprise Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Enterprise Leaders Partner with Meeqat Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            We don’t just deploy software; we engineer resilient, scalable foundation systems that unlock engineering velocity and eliminate operational downtime.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-7 glass-panel glass-panel-hover border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-5 text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="rounded-2xl p-8 glass-panel border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 to-indigo-950/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Our SLA Commitment to Your Business
              </h4>
              <p className="text-xs text-slate-400">
                100% money-back SLA credit guarantee on contract response times and infrastructure availability milestones.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenConsultation()}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <span>Review SLA Agreement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
