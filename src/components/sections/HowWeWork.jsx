import React from 'react';
import { motion } from 'framer-motion';
import { Compass, FileText, Code2, Rocket, RefreshCw } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { staggerContainer, staggerItem, defaultViewport } from '../../lib/motion';

export default function HowWeWork() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      icon: Compass,
      sentence: 'We analyze your workflows, existing technical debt, and business requirements to establish clear objectives.'
    },
    {
      num: '02',
      title: 'Plan',
      icon: FileText,
      sentence: 'We document component boundaries, cloud schemas, API contracts, and an actionable milestone delivery plan.'
    },
    {
      num: '03',
      title: 'Build',
      icon: Code2,
      sentence: 'Our engineers develop your digital system in iterative sprints with clean, version-controlled code.'
    },
    {
      num: '04',
      title: 'Launch',
      icon: Rocket,
      sentence: 'We execute security validation, automated backup checks, and smooth, low-downtime production deployment.'
    },
    {
      num: '05',
      title: 'Improve',
      icon: RefreshCw,
      sentence: 'We provide structured SLA retainers for continuous monitoring, OS patching, and proactive maintenance.'
    }
  ];

  return (
    <section id="process" className="py-20 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Execution Methodology"
          title="How We Work With You"
          subtitle="A disciplined, transparent delivery framework engineered to deliver production-ready software without surprise scope creep."
        />

        {/* Process Timeline */}
        <div className="relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-0.5 bg-slate-200/90 -z-0" />

          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col p-6 rounded-2xl bg-white border border-slate-200 shadow-card hover:border-slate-300 transition-all justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {step.num}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.sentence}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
