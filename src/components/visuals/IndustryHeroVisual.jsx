import React from 'react';
import { motion } from 'framer-motion';
import { 
  Store, 
  HeartPulse, 
  GraduationCap, 
  Landmark, 
  Factory, 
  Hotel, 
  Rocket, 
  Check, 
  Lock, 
  Calendar, 
  ShieldCheck, 
  Smartphone, 
  Database,
  BarChart3,
  CreditCard,
  Truck
} from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';

export default function IndustryHeroVisual({ slug }) {
  switch (slug) {
    case 'retail-ecommerce':
      return <RetailIndustryVisual />;
    case 'healthcare':
      return <HealthcareIndustryVisual />;
    case 'education':
      return <EducationIndustryVisual />;
    case 'finance-banking':
      return <FinanceIndustryVisual />;
    case 'manufacturing':
      return <ManufacturingIndustryVisual />;
    case 'hospitality':
      return <HospitalityIndustryVisual />;
    case 'startups-smes':
      return <StartupIndustryVisual />;
    default:
      return <DefaultIndustryVisual />;
  }
}

function RetailIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Retail & Commerce Architecture</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Omnichannel Sync</span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Store className="w-4 h-4 text-blue-600 mx-auto mb-1" />
          <span className="text-[11px] font-bold text-slate-800 font-display block">Storefront</span>
          <span className="text-[9px] font-mono text-slate-400">Mobile First</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Database className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
          <span className="text-[11px] font-bold text-slate-800 font-display block">Inventory</span>
          <span className="text-[9px] font-mono text-slate-400">POS & Web Sync</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm">
          <Truck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
          <span className="text-[11px] font-bold text-slate-800 font-display block">Fulfillment</span>
          <span className="text-[9px] font-mono text-slate-400">Courier Webhooks</span>
        </div>
      </div>
    </motion.div>
  );
}

function HealthcareIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Privacy-First Healthcare Architecture</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-rose-50 text-rose-700">Encrypted Health Data</span>
      </div>

      <div className="space-y-2">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Patient Consultation Booking</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">SMS Alerts</span>
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Diagnostic Record Vault</span>
          </div>
          <span className="text-[10px] font-mono text-blue-700">Role-Based Access</span>
        </div>
      </div>
    </motion.div>
  );
}

function EducationIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Educational Portal Infrastructure</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800">LMS & Admissions</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <GraduationCap className="w-4 h-4 text-amber-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">Course Modules</span>
          <span className="text-[10px] font-mono text-slate-400">PDF & Video Sync</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <Smartphone className="w-4 h-4 text-blue-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">Student Portal</span>
          <span className="text-[10px] font-mono text-slate-400">Mobile Accessible</span>
        </div>
      </div>
    </motion.div>
  );
}

function FinanceIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Financial Security Architecture</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Audit-Ready</span>
      </div>

      <div className="space-y-2">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Tokenized Transactions</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">PCI Aligned</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Immutable Audit Trail</span>
          </div>
          <span className="text-[10px] font-mono text-blue-700">Encrypted Logs</span>
        </div>
      </div>
    </motion.div>
  );
}

function ManufacturingIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Plant & Supply Chain Telemetry</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">ERP & Vendor Sync</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <Factory className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">Production Floor</span>
          <span className="text-[10px] font-mono text-slate-400">Web Barcode Scanners</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <Truck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">Supplier Portal</span>
          <span className="text-[10px] font-mono text-slate-400">PO Confirmations</span>
        </div>
      </div>
    </motion.div>
  );
}

function HospitalityIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Direct Booking Architecture</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-purple-50 text-purple-700">Zero OTA Commission</span>
      </div>

      <div className="space-y-2">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hotel className="w-4 h-4 text-purple-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Real-Time Room Reservation</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-700">Instant Deposit</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800 font-display">Channel Sync (iCal)</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">No Overbooking</span>
        </div>
      </div>
    </motion.div>
  );
}

function StartupIndustryVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="initial"
      whileInView="animate"
      viewport={defaultViewport}
      className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-elevated space-y-3"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">Lean MVP Technology Foundation</span>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-sky-50 text-sky-700">Fast Time to Market</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <Rocket className="w-4 h-4 text-sky-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">MVP Codebase</span>
          <span className="text-[10px] font-mono text-slate-400">Clean Architecture</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
          <BarChart3 className="w-4 h-4 text-indigo-600 mx-auto mb-1" />
          <span className="text-xs font-bold text-slate-800 font-display block">Right-Sized Cloud</span>
          <span className="text-[10px] font-mono text-slate-400">Budget Alarmed</span>
        </div>
      </div>
    </motion.div>
  );
}

function DefaultIndustryVisual() {
  return (
    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
      <Landmark className="w-8 h-8 text-blue-600 mx-auto mb-2" />
      <span className="text-xs font-bold text-slate-800 font-display">Domain Technology System</span>
    </div>
  );
}
