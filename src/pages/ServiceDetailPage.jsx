import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  MessageSquare, 
  Layers, 
  Cpu, 
  HelpCircle, 
  ChevronDown, 
  FileCheck, 
  ShieldCheck, 
  Clock,
  Sparkles
} from 'lucide-react';
import { getServiceBySlug, services } from '../data/services';
import { getWhatsAppLink } from '../data/company';
import { applySEO, getServiceSchema, getFAQPageSchema, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import ServiceHeroVisual from '../components/visuals/ServiceHeroVisual';

export default function ServiceDetailPage({ onOpenLeadModal }) {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (service) {
      const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/services/${service.slug}` }
      ]);
      const serviceSchema = getServiceSchema(service);
      const faqSchema = service.faqs ? getFAQPageSchema(service.faqs) : null;

      applySEO({
        title: service.seoTitle || `${service.name} Services`,
        description: service.seoDescription || service.shortDescription,
        canonicalUrl: `https://www.meeqattechnologies.in/services/${service.slug}`,
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]
        }
      });
      window.scrollTo(0, 0);
    }
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServicesList = (service.relatedServices || [])
    .map((relSlug) => getServiceBySlug(relSlug))
    .filter(Boolean);

  return (
    <div className="bg-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Services', path: '/services' },
            { name: service.name, path: `/services/${service.slug}` }
          ]}
        />

        {/* 01. BESPOKE SERVICE HERO WITH TAILORED ARCHITECTURE VISUAL */}
        <section className="py-8 lg:py-12 border-b border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <span>{service.categoryLabel}</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-6 leading-[1.15]">
                {service.name}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
                {service.fullDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={() => onOpenLeadModal(service.name)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
                >
                  <span>Plan Your {service.name} Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink(`Hello Meeqat Technologies, I would like to consult about ${service.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-subtle"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Bespoke Technical Architecture Visual */}
            <div className="lg:col-span-5">
              <ServiceHeroVisual slug={service.slug} />
            </div>

          </div>

          {/* Quick Specifications Strip */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-subtle"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Typical Engagement
              </span>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {service.typicalEngagement}
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Target Beneficiaries
              </span>
              <p className="text-xs font-medium text-slate-800 leading-relaxed">
                {service.whoIsItFor}
              </p>
            </div>

            <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-6">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                Core Tech Ecosystem
              </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {service.techConsiderations.map((tech, idx) => (
                  <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* 02. PROBLEM STATEMENT & WHAT WE PROVIDE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-slate-200">
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 p-7 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                The Common Challenge
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-3">
                Why Traditional Approaches Fail
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.problemStatement}
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 p-7 rounded-2xl bg-white border border-slate-200 shadow-card"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
              The Meeqat Solution
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display mb-3">
              What We Deliver
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {service.whatWeProvide}
            </p>

            <div className="space-y-2">
              {service.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 03. 5-STEP EXECUTION PROCESS */}
        <section className="py-16 border-b border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
              Structured Methodology
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              How We Deliver {service.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A transparent, phased delivery process designed to eliminate risks, align technical requirements, and deliver production-ready assets.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6"
          >
            {service.process.map((p) => (
              <motion.div
                key={p.step}
                variants={staggerItem}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-mono text-sm font-bold flex items-center justify-center mb-3">
                    {p.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 font-display mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 04. EXPECTED DELIVERABLES */}
        <section className="py-16 border-b border-slate-200">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Tangible Assets
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Expected Project Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.expectedDeliverables.map((del, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <FileCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">{del}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 05. AEO FAQ ACCORDION (Framer Motion Height Animation) */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 border-b border-slate-200">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
                Questions & Answers
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Frequently Asked Questions about {service.name}
              </h2>
            </div>

            <div className="max-w-4xl space-y-3">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      isOpen ? 'bg-slate-50 border-blue-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left p-5 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <h3 className="text-base font-bold text-slate-900 font-display leading-snug">
                        {faq.question}
                      </h3>
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 bg-white">
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="faq-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-0 border-t border-slate-200 mt-2 pt-3">
                            <p className="text-sm font-medium text-slate-900 leading-relaxed mb-2">
                              {faq.directAnswer}
                            </p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {faq.details}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 06. RELATED SERVICES */}
        {relatedServicesList.length > 0 && (
          <section className="py-16">
            <h3 className="text-xl font-bold text-slate-900 font-display mb-6">
              Complementary Engineering Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServicesList.map((rel) => (
                <div
                  key={rel.slug}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 font-display mb-2">
                      <Link to={`/services/${rel.slug}`}>{rel.name}</Link>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <Link
                    to={`/services/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <span>View Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Final Contextual CTA */}
      <CTASection
        title={`Discuss Your ${service.name} Requirements`}
        subtitle="Contact our lead engineers to receive a zero-cost technical scope review and timeline estimate."
        onOpenLeadModal={() => onOpenLeadModal(service.name)}
      />
    </div>
  );
}
