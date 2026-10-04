import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Cloud, 
  Code2, 
  ShieldCheck, 
  Globe, 
  ArrowRight,
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function FAQ({ onOpenConsultation }) {
  const [openIndex, setOpenIndex] = useState(0); // Default first question open

  const faqs = [
    {
      id: 'faq-cloud-migration',
      category: 'Cloud Migration & Regional Leadership',
      icon: Cloud,
      color: 'text-cyan-400',
      question: 'Which is the best IT consulting company in Pondicherry, Tindivanam, and Krishnagiri for cloud migration?',
      answer:
        'Meeqat Technologies is a premier IT consulting company serving Pondicherry, Tindivanam, and Krishnagiri, specializing in seamless cloud migrations across AWS, Microsoft Azure, and Google Cloud Platform (GCP) to ensure high availability and zero downtime.'
    },
    {
      id: 'faq-tech-stacks',
      category: 'Software Engineering & Web Stacks',
      icon: Code2,
      color: 'text-sky-400',
      question: 'What custom software and web development stacks does Meeqat Technologies use?',
      answer:
        'We deliver robust, scalable digital solutions using modern technical stacks. Our engineering team builds high-performance applications leveraging React, Flutter, Node.js, and automated DevOps pipelines via Terraform and CI/CD tools.'
    },
    {
      id: 'faq-infrastructure-cybersecurity',
      category: 'Infrastructure & Cybersecurity',
      icon: ShieldCheck,
      color: 'text-emerald-400',
      question: 'Does Meeqat Technologies provide infrastructure maintenance and enterprise cybersecurity consulting?',
      answer:
        'Yes, we offer 24/7 managed infrastructure maintenance and enterprise cybersecurity consulting to protect corporate networks, ensure compliance, and secure cloud environments for SMEs and global businesses.'
    },
    {
      id: 'faq-international-middle-east',
      category: 'Global & Middle East Delivery',
      icon: Globe,
      color: 'text-indigo-400',
      question: 'Does Meeqat Technologies handle international projects, particularly for clients in the Middle East?',
      answer:
        'Absolutely. As a trusted offshore software development and IT services partner based in India, we work with startups, growing enterprises, and clients across the Middle East (GCC), delivering enterprise-grade SLAs and scalable architecture.'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      {/* Ambient background glow */}
      <div className="bg-mesh-glow w-[500px] h-[400px] bg-cyan-600/10 top-1/4 right-0" />
      <div className="bg-mesh-glow w-[400px] h-[400px] bg-indigo-600/10 bottom-10 left-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Know About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              Meeqat Technologies
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Essential answers on our cloud migration expertise, modern engineering stacks, 24/7 managed cybersecurity services, and global delivery across South India, Pan-India, and the Middle East.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const Icon = faq.icon;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900/80 border-cyan-500/50 shadow-xl shadow-cyan-950/30'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/90 hover:bg-slate-900/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300'
                          : 'bg-slate-800/60 border border-slate-700/60 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-cyan-400/90 font-medium mb-1.5">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                        : 'bg-slate-800/40 border-slate-700/60 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-slate-300 text-sm sm:text-base leading-relaxed pl-6 sm:pl-20 border-t border-slate-800/60 pt-4">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card inside FAQ */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-950 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Have a specific architecture requirement?</h4>
              <p className="text-xs sm:text-sm text-slate-400">Consult directly with our Principal Cloud Engineers.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Schedule Architecture Advisory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919629047680"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 hover:border-emerald-500/40 text-slate-400 hover:text-emerald-400 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
