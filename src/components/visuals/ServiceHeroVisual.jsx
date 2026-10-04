import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Cpu, 
  ShieldCheck, 
  Headphones, 
  TrendingUp, 
  ShoppingBag, 
  Server, 
  Database, 
  Check, 
  ArrowRight, 
  Lock, 
  Activity, 
  Users, 
  Layers, 
  Search, 
  CreditCard, 
  PackageCheck,
  RefreshCw
} from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';

export default function ServiceHeroVisual({ slug }) {
  switch (slug) {
    case 'website-development':
      return <WebsiteDevVisual />;
    case 'mobile-application-development':
      return <MobileAppVisual />;
    case 'cloud-migrations':
      return <CloudMigrationVisual />;
    case 'infrastructure-maintenance':
      return <InfrastructureVisual />;
    case 'cybersecurity-consulting':
      return <CybersecurityVisual />;
    case 'support-services':
      return <SupportVisual />;
    case 'digital-marketing':
      return <DigitalMarketingVisual />;
    case 'ecommerce-development':
      return <EcommerceVisual />;
    default:
      return <DefaultServiceVisual />;
  }
}

/**
 * 01. Website Development: Responsive Desktop, Tablet, and Mobile Multi-Viewport Composition
 */
function WebsiteDevVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Multi-Device Viewport System</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
          Core Web Vitals Optimized
        </span>
      </div>

      <div className="relative space-y-3">
        {/* Desktop Browser Frame */}
        <div className="rounded-xl bg-white border border-slate-200 shadow-sm p-3.5">
          <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-100">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="ml-2 text-[10px] font-mono text-slate-400">https://client-portal.com</span>
          </div>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-8 space-y-1.5">
              <div className="h-3 w-3/4 bg-slate-200 rounded" />
              <div className="h-2 w-full bg-slate-100 rounded" />
              <div className="h-2 w-5/6 bg-slate-100 rounded" />
            </div>
            <div className="col-span-4 h-12 bg-blue-50 rounded-lg border border-blue-100 flex items-center justify-center text-blue-600">
              <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Layered Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono text-slate-400 block">Tablet Breakpoint</span>
            <div className="h-2 w-full bg-slate-100 rounded" />
            <div className="h-2 w-2/3 bg-slate-100 rounded" />
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-block">
              Fluid Grid
            </span>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
            <span className="text-[10px] font-mono text-slate-400 block">Mobile Touchscreen</span>
            <div className="h-2 w-full bg-slate-100 rounded" />
            <div className="h-2 w-3/4 bg-slate-100 rounded" />
            <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded inline-block">
              Touch-Optimized
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 02. Mobile Application Development: Modern iOS & Android Workflow Screen
 */
function MobileAppVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Cross-Platform Mobile Core</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
          Flutter / React Native
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Device Screen 1 */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-6 h-1 bg-slate-300 rounded-full mx-auto" />
          </div>
          <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-center">
            <Smartphone className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
            <span className="text-[10px] font-mono font-semibold text-indigo-900 block">Biometric Login</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full bg-slate-100 rounded" />
            <div className="h-2 w-4/5 bg-slate-100 rounded" />
          </div>
        </div>

        {/* Device Screen 2 */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Offline Cache
            </span>
          </div>
          <div className="space-y-2">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700">
              Local SQLite Sync
            </div>
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-700">
              Background Push
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>Single Codebase</span>
        <span>App Store & Google Play Ready</span>
      </div>
    </motion.div>
  );
}

/**
 * 03. Cloud Migration: On-Premises -> Cloud Architecture Migration Topology
 */
function CloudMigrationVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Workload Migration Flow</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
          Zero Data Loss
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
        {/* Source: On-Premises */}
        <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <Server className="w-5 h-5 text-slate-500 mx-auto mb-1.5" />
          <span className="text-xs font-bold text-slate-800 font-display block">Legacy Hosting</span>
          <span className="text-[10px] font-mono text-slate-400">Physical / VPS Nodes</span>
        </div>

        {/* Conduit */}
        <div className="sm:col-span-1 flex flex-col items-center justify-center py-2">
          <RefreshCw className="w-5 h-5 text-sky-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-[9px] font-mono text-sky-600 mt-1">Delta Sync</span>
        </div>

        {/* Target: Cloud Landing Zone */}
        <div className="sm:col-span-2 p-3.5 rounded-xl bg-white border border-sky-300 shadow-sm text-center">
          <Cloud className="w-5 h-5 text-sky-600 mx-auto mb-1.5" />
          <span className="text-xs font-bold text-slate-900 font-display block">Cloud Landing Zone</span>
          <span className="text-[10px] font-mono text-sky-700">AWS / Azure / GCP</span>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 space-y-1.5 text-xs">
        <div className="flex justify-between text-[11px] font-mono">
          <span className="text-slate-500">Network Topology:</span>
          <span className="text-slate-800 font-semibold">Isolated VPC + Private Subnets</span>
        </div>
        <div className="flex justify-between text-[11px] font-mono">
          <span className="text-slate-500">Cutover Protocol:</span>
          <span className="text-emerald-700 font-semibold">Scheduled Off-Peak Maintenance</span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 04. Infrastructure Maintenance: Servers, Uptime Monitoring, and Automated Snapshots
 */
function InfrastructureVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Infrastructure Health Topology</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
          Proactive Telemetry
        </span>
      </div>

      <div className="space-y-3">
        {/* Node Status Row */}
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Compute Clusters</span>
          </div>
          <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
            Kernel Patching Verified
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Synthetic Heartbeat</span>
          </div>
          <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            Continuous Ping
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-sky-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Offsite Backup Routine</span>
          </div>
          <span className="text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
            Daily Encrypted Snapshots
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 05. Cybersecurity Consulting: 5-Tier Defense Architecture
 */
function CybersecurityVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Security Architecture Matrix</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
          Least Privilege
        </span>
      </div>

      <div className="space-y-2">
        {[
          { label: 'Identity & Access', desc: 'MFA + Role-Based IAM Policies', icon: Lock },
          { label: 'Network Perimeter', desc: 'WAF + Port Hardening', icon: ShieldCheck },
          { label: 'Application Layer', desc: 'OWASP Top 10 Vulnerability Testing', icon: Layers },
          { label: 'Data Protection', desc: 'TLS 1.3 Encryption & Vault Storage', icon: Database }
        ].map((tier, idx) => {
          const Icon = tier.icon;
          return (
            <div key={idx} className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 font-display">{tier.label}</div>
                  <div className="text-[10px] text-slate-500 font-mono">{tier.desc}</div>
                </div>
              </div>
              <Check className="w-4 h-4 text-emerald-600" />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/**
 * 06. Support Services: Human & Engineering Escalation Workflow
 */
function SupportVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Incident Escalation Pipeline</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
          SLA-Governed
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-bold text-slate-800 font-display">1. Client Request</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Portal / Email / WhatsApp</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Headphones className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">2. Triage & Ticket Log</span>
          </div>
          <span className="text-[10px] font-mono text-blue-700">Severity Scored</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-900 font-display">3. Engineer Hotfix</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 font-semibold">Priority SLA</span>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 07. Digital Marketing: Clean Growth Loop (SEO, Paid, Analytics)
 */
function DigitalMarketingVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Digital Acquisition Loop</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
          Conversion-First
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Search className="w-4 h-4 text-blue-600 mb-1" />
          <div className="text-xs font-bold text-slate-800 font-display">Technical SEO</div>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">Schema + Core Web Vitals</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <TrendingUp className="w-4 h-4 text-rose-600 mb-1" />
          <div className="text-xs font-bold text-slate-800 font-display">Targeted SEM</div>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">High-Intent Keywords</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Globe className="w-4 h-4 text-emerald-600 mb-1" />
          <div className="text-xs font-bold text-slate-800 font-display">Landing Page CRO</div>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">Frictionless Inquiries</p>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Activity className="w-4 h-4 text-indigo-600 mb-1" />
          <div className="text-xs font-bold text-slate-800 font-display">GA4 Tracking</div>
          <p className="text-[10px] text-slate-500 font-mono mt-0.5">Verified Lead Events</p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * 08. E-commerce Development: Polished Commerce Pipeline
 */
function EcommerceVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="relative w-full max-w-lg mx-auto p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated"
    >
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Commerce Architecture Pipeline</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700 border border-purple-200">
          Unified Sync
        </span>
      </div>

      <div className="space-y-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Storefront UX</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Shopify / Woo / Headless</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Payment Gateways</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
            UPI, Cards & Netbanking
          </span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PackageCheck className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Inventory & Fulfillment</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Real-Time Webhooks</span>
        </div>
      </div>
    </motion.div>
  );
}

function DefaultServiceVisual() {
  return (
    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
      <Layers className="w-8 h-8 text-blue-600 mx-auto mb-2" />
      <span className="text-xs font-bold text-slate-800 font-display">Enterprise Delivery Blueprint</span>
    </div>
  );
}
