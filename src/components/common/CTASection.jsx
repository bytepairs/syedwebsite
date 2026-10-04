import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Mail, Phone, Sparkles } from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../../data/company';
import { fadeUp, defaultViewport } from '../../lib/motion';
import GlassSurface from './GlassSurface';
import SectionBackground from '../visuals/SectionBackground';

export default function CTASection({
  title = "Have a technology project in mind?",
  subtitle = "Tell us what you're building, improving or solving. Our lead engineers will review your scope and provide a practical plan.",
  onOpenLeadModal
}) {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F5EFE1] via-[#EFE7D6] to-[#EDE5D4] border-t border-[#DFD3BD] relative overflow-hidden">
      {/* Subtle Architectural Ambient Background */}
      <SectionBackground pattern="radial" />
      <SectionBackground pattern="grid" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={defaultViewport}
        >
          {/* Glass Panel Container */}
          <GlassSurface 
            elevation="elevated" 
            rounded="rounded-3xl"
            className="p-8 sm:p-12 lg:p-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Engineering Engagement</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 max-w-3xl mx-auto leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
              {subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenLeadModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink('Hello Meeqat Technologies, I would like to schedule an introductory consultation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </motion.a>
            </div>

            {/* Verification Strip */}
            <div className="pt-6 border-t border-[#DFD3BD] flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>{companyInfo.phoneDisplay}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>{companyInfo.email}</span>
              </span>
              <span>Tamil Nadu (Tindivanam &amp; Krishnagiri) • Serving Pan-India &amp; Global</span>
            </div>
          </GlassSurface>
        </motion.div>
      </div>
    </section>
  );
}
