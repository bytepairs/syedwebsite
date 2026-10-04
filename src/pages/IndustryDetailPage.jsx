import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageSquare, AlertCircle, ShieldCheck } from 'lucide-react';
import { getIndustryBySlug } from '../data/industries';
import { getServiceBySlug } from '../data/services';
import { getWhatsAppLink } from '../data/company';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import IndustryHeroVisual from '../components/visuals/IndustryHeroVisual';

export default function IndustryDetailPage({ onOpenLeadModal }) {
  const { slug } = useParams();
  const industry = getIndustryBySlug(slug);

  useEffect(() => {
    if (industry) {
      applySEO({
        title: industry.seoTitle || `${industry.name} Technology Solutions`,
        description: industry.seoDescription || industry.description,
        canonicalUrl: `https://www.meeqattechnologies.in/industries/${industry.slug}`,
        structuredData: getBreadcrumbSchema([
          { name: 'Industries', path: '/industries' },
          { name: industry.name, path: `/industries/${industry.slug}` }
        ])
      });
      window.scrollTo(0, 0);
    }
  }, [industry]);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const relevantServicesData = (industry.relevantServices || [])
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter(Boolean);

  return (
    <div className="bg-[#F5EFE1] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: 'Industries', path: '/industries' },
            { name: industry.name, path: `/industries/${industry.slug}` }
          ]}
        />

        {/* 01. INDUSTRY HERO WITH BESPOKE VISUAL */}
        <section className="py-8 lg:py-12 border-b border-[#DFD3BD]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE1CD] border border-[#DFD3BD] text-slate-800 text-xs font-mono font-medium mb-4">
                <span>{industry.badge}</span>
                <span>•</span>
                <span>Sector Specialization</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-[1.15]">
                {industry.name}
              </h1>

              <p className="text-lg sm:text-xl text-slate-800 font-semibold leading-relaxed mb-4">
                {industry.tagline}
              </p>

              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
                {industry.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto">
                <button
                  onClick={() => onOpenLeadModal('', industry.name)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-button transition-all"
                >
                  <span>Consult on {industry.name} Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={getWhatsAppLink(`Hello Meeqat Technologies, I would like to discuss technology solutions for ${industry.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-subtle"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Right Bespoke Industry Domain Visual */}
            <div className="lg:col-span-5">
              <IndustryHeroVisual slug={industry.slug} />
            </div>

          </div>
        </section>

        {/* 02. CHALLENGES & PURPOSE-BUILT SOLUTIONS */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-[#DFD3BD]">
          {/* Challenges Column */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 p-7 rounded-2xl bg-white border border-[#DFD3BD] shadow-card flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Industry Pain Points
              </span>
              <h2 className="text-2xl font-bold text-slate-900 font-display mb-4">
                Common Challenges in {industry.name}
              </h2>
              <div className="space-y-3">
                {industry.challenges.map((ch, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions Column */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 p-7 rounded-2xl bg-white border border-[#DFD3BD] shadow-card"
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
              Engineered Solutions
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display mb-4">
              How Meeqat Solves Them
            </h2>
            <div className="space-y-3">
              {industry.solutions.map((sol, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>{sol}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 03. TYPICAL REQUIREMENTS */}
        <section className="py-16 border-b border-[#DFD3BD]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Technical Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Typical System Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industry.typicalRequirements.map((req, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-[#DFD3BD] shadow-subtle flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-800 font-medium">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 04. RELEVANT SERVICES */}
        {relevantServicesData.length > 0 && (
          <section className="py-16">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
                Core Capabilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Relevant Engineering Services for {industry.name}
              </h2>
            </div>

            <motion.div 
              variants={staggerContainer(0.08, 0.05)}
              initial="initial"
              whileInView="animate"
              viewport={defaultViewport}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {relevantServicesData.map((svc) => (
                <motion.div
                  key={svc.slug}
                  variants={staggerItem}
                  className="p-5 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-slate-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      {svc.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 font-display mb-2">
                      <Link to={`/services/${svc.slug}`}>{svc.name}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.shortDescription}
                    </p>
                  </div>

                  <Link
                    to={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

      </div>

      {/* Contextual CTA */}
      <CTASection
        title={`Ready to engineer a solution for ${industry.name}?`}
        subtitle="Schedule an initial technical review with our team to discuss your workflows, compliance prerequisites, and delivery roadmap."
        onOpenLeadModal={() => onOpenLeadModal('', industry.name)}
      />
    </div>
  );
}
