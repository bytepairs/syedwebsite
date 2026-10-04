import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Users, FileCode2 } from 'lucide-react';
import { staggerContainer, staggerItem, defaultViewport } from '../../lib/motion';

export default function TrustSection() {
  const pillars = [
    {
      icon: Code2,
      title: 'Full Source Code Ownership',
      desc: 'You retain complete ownership of all repositories, design files, and cloud credentials with zero proprietary lock-in.'
    },
    {
      icon: ShieldCheck,
      title: 'Security-Conscious Standards',
      desc: 'Least-privilege access, encrypted environment keys, and clean code hygiene applied across every sprint.'
    },
    {
      icon: Users,
      title: 'Direct Senior Engineer Access',
      desc: 'Collaborate directly with lead software engineers and cloud practitioners rather than disconnected account reps.'
    },
    {
      icon: FileCode2,
      title: 'Maintainable Technical Debt',
      desc: 'We prioritize clean documentation, automated deployment scripts, and standard frameworks for easy handover.'
    }
  ];

  const techBadges = [
    'Amazon Web Services (AWS)',
    'Microsoft Azure',
    'Google Cloud (GCP)',
    'React & Next.js',
    'Flutter & React Native',
    'Node.js & TypeScript',
    'PostgreSQL & Redis',
    'Linux / Nginx'
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Value Pillars Grid with Staggered Motion */}
        <motion.div 
          variants={staggerContainer(0.08, 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={defaultViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:border-slate-300 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 font-display mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Technology Ecosystem Badges */}
        <div className="pt-6 border-t border-slate-200/80 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 font-medium">
            Engineering Platforms & Frameworks We Work With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {techBadges.map((badge, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-subtle hover:border-slate-300 transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
