import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Calendar, ChevronDown, MessageSquare } from 'lucide-react';
import { getInsightBySlug } from '../data/insights';
import { getServiceBySlug } from '../data/services';
import { getWhatsAppLink } from '../data/company';
import { applySEO, getArticleSchema, getBreadcrumbSchema, getFAQPageSchema } from '../lib/seo';
import { fadeUp, defaultViewport } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import ArticleCover from '../components/visuals/ArticleCover';

export default function InsightDetailPage({ onOpenLeadModal }) {
  const { slug } = useParams();
  const insight = getInsightBySlug(slug);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    if (insight) {
      const articleSchema = getArticleSchema(insight);
      const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Insights', path: '/insights' },
        { name: insight.title, path: `/insights/${insight.slug}` }
      ]);
      const faqSchema = insight.faqs ? getFAQPageSchema(insight.faqs) : null;

      applySEO({
        title: insight.title,
        description: insight.summary,
        canonicalUrl: `https://www.meeqattechnologies.in/insights/${insight.slug}`,
        ogType: 'article',
        structuredData: {
          '@context': 'https://schema.org',
          '@graph': [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]
        }
      });
      window.scrollTo(0, 0);
    }
  }, [insight]);

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const relatedServicesData = (insight.relatedServices || [])
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  return (
    <div className="bg-[#F5EFE1] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Insights', path: '/insights' },
            { name: insight.title, path: `/insights/${insight.slug}` }
          ]}
        />

        {/* Article Header */}
        <motion.header 
          variants={fadeUp}
          initial="initial"
          animate="animate"
          className="py-8 border-b border-[#DFD3BD]"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 mb-4">
            <span className="text-slate-800 bg-[#EBE1CD] border border-[#DFD3BD] px-2.5 py-0.5 rounded font-semibold uppercase">
              {insight.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Published: {insight.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{insight.readingTime}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-6 leading-tight">
            {insight.title}
          </h1>

          {/* Article Visual Banner (Directive #30) */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-subtle border border-[#DFD3BD]">
            <ArticleCover
              src={insight.coverImage || '/assets/visuals/insights/web/modern-web-architecture-cover.webp'}
              alt={insight.title}
              priority={true}
            />
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#DFD3BD] shadow-subtle text-sm text-slate-700 leading-relaxed font-medium">
            <strong className="text-slate-900 font-semibold block mb-1">Executive Summary:</strong>
            {insight.summary}
          </div>

          <div className="mt-4 text-xs font-mono text-slate-500">
            Authored by: <strong className="text-slate-800">{insight.author}</strong>
          </div>
        </motion.header>

        {/* Article Body Content */}
        <motion.div 
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={defaultViewport}
          className="py-12 space-y-10 border-b border-[#DFD3BD] text-slate-700 text-base leading-relaxed"
        >
          {insight.sections.map((section, idx) => (
            <React.Fragment key={idx}>
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 font-display">
                  {section.heading}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {section.body}
                </p>
              </section>

              {/* In-Article Architectural Diagram Visual */}
              {insight.diagramImage && idx === 1 && (
                <figure className="my-8 rounded-2xl overflow-hidden border border-[#DFD3BD] bg-white shadow-sm">
                  <img
                    src={insight.diagramImage}
                    alt={insight.diagramCaption || "Architecture Topology"}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover"
                  />
                  {insight.diagramCaption && (
                    <figcaption className="p-3.5 text-xs font-mono text-slate-600 bg-[#FAF6ED] border-t border-[#DFD3BD] flex flex-wrap items-center justify-between gap-2">
                      <span>{insight.diagramCaption}</span>
                      <span className="text-[11px] text-slate-800 bg-[#EBE1CD] px-2.5 py-0.5 rounded border border-[#DFD3BD] font-semibold">
                        Meeqat Reference Topology
                      </span>
                    </figcaption>
                  )}
                </figure>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* AEO FAQ Section with Smooth Height Accordion */}
        {insight.faqs && insight.faqs.length > 0 && (
          <section className="py-12 border-b border-[#DFD3BD]">
            <h2 className="text-2xl font-bold text-slate-900 font-display mb-6">
              Frequently Asked Questions on This Topic
            </h2>

            <div className="space-y-3">
              {insight.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      isOpen ? 'bg-[#FAF6ED] border-[#DFD3BD] shadow-sm' : 'bg-white border-[#DFD3BD] hover:border-slate-400'
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
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center border border-[#DFD3BD] shrink-0 bg-white">
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
                          <div className="px-5 pb-5 pt-0 border-t border-[#DFD3BD] mt-2 pt-3">
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

        {/* Related Engineering Services */}
        {relatedServicesData.length > 0 && (
          <section className="py-12">
            <h3 className="text-xl font-bold text-slate-900 font-display mb-6">
              Related Engineering Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedServicesData.map((svc) => (
                <div
                  key={svc.slug}
                  className="p-5 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-slate-400 transition-all flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {svc.category}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 font-display">
                      <Link to={`/services/${svc.slug}`}>{svc.name}</Link>
                    </h4>
                  </div>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="p-2 rounded-lg text-blue-600 hover:bg-[#FAF6ED]"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      <CTASection
        title="Need technical guidance tailored to your systems?"
        subtitle="Contact our lead engineers to evaluate your software architecture or plan your cloud migration."
        onOpenLeadModal={onOpenLeadModal}
      />
    </div>
  );
}
