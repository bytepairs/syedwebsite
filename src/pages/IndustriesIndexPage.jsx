import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { industries } from '../data/industries';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import IndustriesIndexHeroVisual from '../components/visuals/IndustriesIndexHeroVisual';

export default function IndustriesIndexPage({ onOpenLeadModal }) {
  useEffect(() => {
    applySEO({
      title: 'Industries Served & Domain Solutions',
      description:
        'Explore Meeqat Technologies specialized digital solutions across Retail, Healthcare, Education, Finance, Manufacturing, Hospitality, and Startups & SMEs.',
      canonicalUrl: 'https://www.meeqattechnologies.in/industries',
      structuredData: getBreadcrumbSchema([
        { name: 'Industries', path: '/industries' }
      ])
    });
  }, []);

  return (
    <div className="bg-[#F5EFE1] pb-20">
      {/* 100% Full-Width Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F5EFE1] border-b border-[#DFD3BD] w-full mb-12">
        {/* Bespoke Industries Hero Background Banner (100% Size) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/industries-hero-bg-banner.webp"
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center lg:object-right-top opacity-60 sm:opacity-75 transition-opacity duration-700"
          />
          {/* Left Vignette for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE1] via-[#F5EFE1]/85 to-[#F5EFE1]/20 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE1]/40 via-transparent to-[#F5EFE1]" />
          <div className="absolute inset-0 bg-grid-light opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Industries', path: '/industries' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <span>Domain Specialization</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
                Industries We Serve
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Every sector faces specific operational requirements, security standards, and customer expectations. We engineer purpose-built technology architectures designed around the exact realities of your business domain.
              </p>
            </motion.div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <IndustriesIndexHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid with Staggered Framer Motion */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer(0.06, 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((ind) => (
            <motion.div
              key={ind.slug}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                    {ind.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 font-display mb-2 group-hover:text-blue-600 transition-colors">
                  <Link to={`/industries/${ind.slug}`}>{ind.name}</Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {ind.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                    Key Technical Deliverables
                  </span>
                  {ind.solutions.slice(0, 3).map((sol, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DFD3BD]/60">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore {ind.name} Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-20">
        <CTASection
          title="Do you operate in a specialized or regulated sector?"
          subtitle="We collaborate closely with technical and operational leads to implement compliance-ready, privacy-conscious digital systems."
          onOpenLeadModal={onOpenLeadModal}
        />
      </div>
    </div>
  );
}
