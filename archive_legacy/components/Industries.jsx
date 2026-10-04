import React from 'react';
import { 
  Store, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  Factory, 
  Hotel, 
  Rocket, 
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function Industries({ onSelectIndustry }) {
  const industries = [
    {
      id: 'retail-ecommerce',
      name: 'Retail & E-commerce',
      icon: Store,
      badge: 'High Concurrency',
      color: 'text-cyan-400',
      description:
        'Point-of-Sale (POS) systems, modern online storefronts, omnichannel catalog sync, and high-impact customer engagement platforms.',
      solutions: [
        'POS & Cloud Billing Integration',
        'Omnichannel Storefront Architecture',
        'Real-time Inventory & Warehouse Sync',
        'Automated Customer Loyalty Funnels'
      ]
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: HeartPulse,
      badge: 'HIPAA & HITRUST',
      color: 'text-rose-400',
      description:
        'Secure patient portals, telemedicine mobile apps, and HIPAA-compliant cloud architectures built for encrypted health records.',
      solutions: [
        'HIPAA-Hardened Multi-AZ Cloud',
        'Telemedicine & Video Consultation Apps',
        'EHR/EMR Interoperability & FHIR APIs',
        'Encrypted Health Record Storage'
      ]
    },
    {
      id: 'education',
      name: 'Education & EdTech',
      icon: GraduationCap,
      badge: 'Interactive & Scalable',
      color: 'text-amber-400',
      description:
        'Learning Management Systems (LMS), mobile applications for students and educators, and interactive digital classroom environments.',
      solutions: [
        'Custom LMS & Course Delivery Platforms',
        'Student & Faculty Cross-Platform Apps',
        'Real-Time Live Streaming & Quiz Engines',
        'Automated Attendance & Grading Portals'
      ]
    },
    {
      id: 'finance-banking',
      name: 'Finance & Banking',
      icon: Landmark,
      badge: 'SOC2 & PCI-DSS',
      color: 'text-emerald-400',
      description:
        'Ultra-secure transaction systems, compliance-ready cloud infrastructure, tokenized payment gateways, and mobile banking applications.',
      solutions: [
        'Zero-Trust Financial Cloud Infrastructure',
        'Secure Mobile Banking & Wallet Apps',
        'PCI-DSS Compliant Payment Pipelines',
        'Automated Fraud & Audit Logging'
      ]
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing & Supply Chain',
      icon: Factory,
      badge: 'IoT & Telemetry',
      color: 'text-indigo-400',
      description:
        'ERP integration, IoT-enabled factory floor telemetry monitoring, automated quality assurance workflows, and supply chain tracking.',
      solutions: [
        'Enterprise ERP & WMS Integrations',
        'IoT Telemetry & Edge Sensor Pipelines',
        'Predictive Maintenance Dashboards',
        'Real-time Supply Chain Visibility'
      ]
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Tourism',
      icon: Hotel,
      badge: 'Direct Booking',
      color: 'text-purple-400',
      description:
        'Direct booking engines, custom guest CRM solutions, automated reservation workflows, and digital contactless engagement tools.',
      solutions: [
        'High-Conversion Booking Engines',
        'Hotel & Resort Custom CRM Modules',
        'Contactless Check-In Mobile Flow',
        'Multi-Property Management Systems'
      ]
    },
    {
      id: 'startups-smes',
      name: 'Startups & SMEs',
      icon: Rocket,
      badge: 'Rapid Scale & MVP',
      color: 'text-teal-400',
      description:
        'End-to-end IT consulting, technical branding, MVP software development, and cost-efficient scalable cloud foundations.',
      solutions: [
        'Rapid MVP Architecture & Launch',
        'Cloud Cost Optimization (FinOps)',
        'Technical Due-Diligence & Roadmapping',
        'Managed IT Support & Growth Marketing'
      ]
    }
  ];

  return (
    <section id="industries" className="py-24 relative bg-slate-950/70 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-4">
            <span>Domain Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tailored IT Solutions Across Key Industries
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            Every sector has unique regulatory mandates, compliance rules, and traffic patterns. We engineer purpose-built technology stacks for your exact domain.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="relative flex flex-col justify-between rounded-2xl p-7 glass-panel glass-panel-hover border border-slate-800 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${ind.color}`} />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2.5 py-0.5 rounded-full">
                      {ind.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                      Key Deliverables
                    </span>
                    {ind.solutions.map((sol, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectIndustry(ind.name)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors py-1"
                  >
                    <span>Consult for {ind.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
