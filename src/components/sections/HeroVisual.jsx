import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  ShoppingBag, 
  Layers, 
  Check, 
  TrendingUp, 
  Headphones 
} from 'lucide-react';
import { fadeUp, defaultViewport } from '../../lib/motion';

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'web',
      label: 'Website Systems',
      sub: 'Fast, Accessible Web Frontends',
      icon: Globe,
      status: 'Clean Code',
      badgeColor: 'text-blue-700 bg-blue-50 border-blue-200'
    },
    {
      id: 'mobile',
      label: 'Mobile Apps',
      sub: 'Cross-Platform iOS & Android',
      icon: Smartphone,
      status: 'Offline Ready',
      badgeColor: 'text-indigo-700 bg-indigo-50 border-indigo-200'
    },
    {
      id: 'cloud',
      label: 'Cloud Infrastructure',
      sub: 'AWS, Azure & Google Cloud',
      icon: Cloud,
      status: 'Scalable VPC',
      badgeColor: 'text-sky-700 bg-sky-50 border-sky-200'
    },
    {
      id: 'infra',
      label: 'Infrastructure Care',
      sub: 'Monitoring & Patch Schedules',
      icon: Cpu,
      status: 'Managed Uptime',
      badgeColor: 'text-slate-700 bg-slate-100 border-slate-200'
    },
    {
      id: 'security',
      label: 'Cybersecurity',
      sub: 'Audits & Vulnerability Scans',
      icon: ShieldCheck,
      status: 'Least Privilege',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-200'
    },
    {
      id: 'support',
      label: 'Managed Support',
      sub: 'SLA-Governed Response',
      icon: Headphones,
      status: 'Engineered SLA',
      badgeColor: 'text-teal-700 bg-teal-50 border-teal-200'
    },
    {
      id: 'marketing',
      label: 'Digital Acquisition',
      sub: 'Technical SEO & GEO Search',
      icon: TrendingUp,
      status: 'Growth Aligned',
      badgeColor: 'text-rose-700 bg-rose-50 border-rose-200'
    },
    {
      id: 'commerce',
      label: 'E-commerce',
      sub: 'Payments & Inventory Sync',
      icon: ShoppingBag,
      status: 'Unified Checkout',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200'
    }
  ];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 14 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div 
      variants={fadeUp}
      initial="initial"
      animate="animate"
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
    >
      {/* Outer framing card */}
      <div className="relative rounded-3xl bg-slate-50/80 border border-slate-200/90 p-5 sm:p-7 shadow-elevated backdrop-blur-sm">
        
        {/* Header bar of the architecture window */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 inline-block" />
            <span className="ml-2 font-mono text-xs text-slate-500 font-medium tracking-tight">
              meeqat.architecture.ecosystem
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Connected Flow
          </span>
        </div>

        {/* Central Architecture Core */}
        <div className="relative mb-5 p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-subtle overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-indigo-50/30 opacity-50" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 text-blue-600 mb-2 border border-blue-100 shadow-xs">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900 font-display">
              Integrated Business Technology Foundation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Synchronized engineering across customer touchpoints, cloud infrastructure, and operations.
            </p>
          </div>
        </div>

        {/* 6 Connected Nodes Grid with Framer Motion Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative"
        >
          {nodes.map((node) => {
            const Icon = node.icon;
            const isHovered = activeNode === node.id;

            return (
              <motion.div
                key={node.id}
                variants={itemVariants}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-default ${
                  isHovered
                    ? 'bg-white border-blue-500 shadow-md translate-y-[-2px]'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-card'
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isHovered ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-700'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded border ${node.badgeColor}`}>
                    {node.status}
                  </span>
                </div>

                <div className="text-xs font-bold text-slate-900 font-display">
                  {node.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {node.sub}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer info strip */}
        <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Check className="w-3.5 h-3.5 text-blue-600" />
            100% Client Ownership
          </span>
          <span className="text-slate-500">No Proprietary Lock-In</span>
        </div>
      </div>
    </motion.div>
  );
}
