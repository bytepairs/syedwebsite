import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  TrendingUp, 
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  Filter,
  MapPin
} from 'lucide-react';

export default function Services({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cloud & Infra', 'Software & Mobile', 'Security & Support', 'Commerce & Growth'];

  const servicesData = [
    {
      id: 'website-development',
      title: 'Website Development',
      category: 'Software & Mobile',
      icon: Globe,
      color: 'text-cyan-400',
      glow: 'group-hover:border-cyan-500/50',
      description:
        'Custom static and dynamic websites, responsive design, SEO-friendly architecture, and CMS integration engineered for speed and conversion.',
      capabilities: [
        'Single Page Apps & Server-Side Rendering',
        'Headless CMS & Content Workflows',
        'Enterprise Design Systems & Tailwind CSS',
        'Core Web Vitals & Technical SEO Optimization'
      ],
      techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL']
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile Application Development',
      category: 'Software & Mobile',
      icon: Smartphone,
      color: 'text-indigo-400',
      glow: 'group-hover:border-indigo-500/50',
      description:
        'Native Android/iOS apps, hybrid cross-platform solutions, and enterprise mobility platforms tailored to high-load business workflows.',
      capabilities: [
        'Native iOS (Swift) & Android (Kotlin)',
        'Cross-platform Flutter & React Native',
        'Offline-First Data Sync & Push Notifications',
        'Enterprise Mobile Device Management (MDM)'
      ],
      techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL']
    },
    {
      id: 'cloud-migrations',
      title: 'Cloud Migrations',
      category: 'Cloud & Infra',
      icon: Cloud,
      color: 'text-sky-400',
      glow: 'group-hover:border-sky-500/50',
      description:
        'Seamless migration to AWS, Azure, or Google Cloud, with scalability, cost optimization, and compliance assurance with zero operational downtime.',
      capabilities: [
        'Re-host, Re-platform, and Refactor Strategies',
        'Database & Data Warehouse Migration',
        'Landing Zones & Account Factory Automation',
        'FinOps Cost Governance & Baseline Rightsizing'
      ],
      techStack: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'Kubernetes']
    },
    {
      id: 'infrastructure-maintenance',
      title: 'Infrastructure Maintenance',
      category: 'Cloud & Infra',
      icon: Cpu,
      color: 'text-teal-400',
      glow: 'group-hover:border-teal-500/50',
      description:
        'Proactive monitoring, server patching, backup management, and disaster recovery planning to sustain continuous enterprise availability.',
      capabilities: [
        'Proactive Synthetic Monitoring & APM',
        'Automated OS Patching & Vulnerability Fixes',
        'Disaster Recovery (RTO/RPO) Runbooks',
        'High-Availability Cluster Maintenance'
      ],
      techStack: ['Prometheus', 'Grafana', 'Datadog', 'Ansible', 'Linux', 'Docker']
    },
    {
      id: 'cybersecurity-consulting',
      title: 'Cybersecurity Consulting',
      category: 'Security & Support',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      glow: 'group-hover:border-emerald-500/50',
      description:
        'Comprehensive risk assessments, penetration testing, compliance audits (ISO, GDPR, HIPAA), and endpoint security solutions.',
      capabilities: [
        'Zero-Trust Network Architecture & IAM Audit',
        'Vulnerability Assessment & Pen-Testing (VAPT)',
        'Regulatory Compliance (ISO 27001, GDPR, SOC2)',
        'Endpoint Detection, SIEM & Incident Response'
      ],
      techStack: ['Vault', 'Trivy', 'SonarQube', 'OpenVAS', 'CloudTrail', 'WAF']
    },
    {
      id: 'support-services',
      title: 'Support Services',
      category: 'Security & Support',
      icon: Headphones,
      color: 'text-amber-400',
      glow: 'group-hover:border-amber-500/50',
      description:
        '24/7 helpdesk, IT troubleshooting, SLA-driven support, and managed services tailored for growing SMEs and established enterprises.',
      capabilities: [
        '24/7/365 Dedicated Multi-Tier Helpdesk',
        'Strict Guaranteed SLA Response Times',
        'Ticket Resolution & Escalation Matrix',
        'Infrastructure Health Reporting & Reviews'
      ],
      techStack: ['Jira Service Desk', 'PagerDuty', 'Zendesk', 'Slack Connect', 'Teams']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      category: 'Commerce & Growth',
      icon: TrendingUp,
      color: 'text-rose-400',
      glow: 'group-hover:border-rose-500/50',
      description:
        'SEO, SEM, targeted social media campaigns, content marketing, and analytics-driven growth strategies to capture and convert leads.',
      capabilities: [
        'Technical & Content-Driven SEO Audits',
        'Performance Marketing & Paid Ad Optimization',
        'Conversion Rate Optimization (CRO) Funnels',
        'Attribution Analytics & Custom Dashboards'
      ],
      techStack: ['Google Ads', 'Meta Business', 'GA4', 'HubSpot', 'SEMrush']
    },
    {
      id: 'ecommerce-development',
      title: 'E-commerce Development',
      category: 'Commerce & Growth',
      icon: ShoppingBag,
      color: 'text-purple-400',
      glow: 'group-hover:border-purple-500/50',
      description:
        'Scalable online stores, payment gateway integration, real-time inventory management, and omnichannel retail solutions.',
      capabilities: [
        'Headless Commerce & Custom Checkout Flows',
        'Multi-Currency Payment Gateway Gateways',
        'ERP & Real-Time Inventory Synchronisation',
        'Flash-Sale Concurrency & Edge Caching'
      ],
      techStack: ['Shopify Plus', 'WooCommerce', 'Stripe', 'Razorpay', 'Redis', 'Next.js']
    }
  ];

  const filteredServices =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-slate-950">
      {/* Background Ambient Spot */}
      <div className="bg-mesh-glow w-[500px] h-[500px] bg-cyan-600/10 top-1/3 left-0" />
      <div className="bg-mesh-glow w-[500px] h-[500px] bg-indigo-600/10 bottom-10 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Global & Pan-India Enterprise Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-4 shadow-sm shadow-cyan-500/10">
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Delivery • Pan-India & Worldwide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            Enterprise IT Consulting Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              India & Worldwide
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Engineering high-availability cloud systems, modern web & mobile architectures, and around-the-clock infrastructure SRE operations. Operating dedicated engineering hubs in <strong className="text-slate-200">Tindivanam</strong> & <strong className="text-slate-200">Krishnagiri</strong> (Tamil Nadu) — powering enterprises across <strong className="text-cyan-400">Pan-India</strong>, the <strong className="text-indigo-400">Middle East (GCC)</strong>, and <strong className="text-sky-300">Worldwide</strong>.
          </p>

          {/* Professional Multi-Tier Geographic Coverage Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Regional Tech Hubs</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">Tindivanam • Krishnagiri • Pondicherry</p>
              <span className="text-[10.5px] text-slate-500 font-mono">Tamil Nadu Operations & Support</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-sky-400 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1">
                <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Pan-India Coverage</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">Metro & Tier 1/2 Tech Corridors</p>
              <span className="text-[10.5px] text-slate-500 font-mono">Enterprise Remote & On-Premises</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors">
              <div className="flex items-center gap-1.5 text-indigo-400 font-mono text-[11px] font-semibold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Worldwide & Middle East</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">UAE • Saudi Arabia • Qatar • Global</p>
              <span className="text-[10.5px] text-slate-500 font-mono">24/7 Follow-the-Sun SRE SLA</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 glass-panel glass-panel-hover border border-slate-800/80 group ${service.glow}`}
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2 py-1 rounded border border-slate-800">
                      {service.category}
                    </span>
                </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="space-y-2 mb-6">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-cyan-500/10 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-16 p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-indigo-950/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              Looking for a custom enterprise engagement model?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              We offer dedicated engineering pods, fixed-price sprint delivery, and SLA-backed retainer contracts with guaranteed response times.
            </p>
          </div>
          <button
            onClick={() => onSelectService('Enterprise Architecture')}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all"
          >
            <span>Discuss Custom Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}