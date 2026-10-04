import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { insights } from '../data/insights';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import ArticleCover from '../components/visuals/ArticleCover';
import InsightsHeroVisual from '../components/visuals/InsightsHeroVisual';

export default function InsightsIndexPage({ onOpenLeadModal }) {
  useEffect(() => {
    applySEO({
      title: 'Technical Insights & Engineering Advisory',
      description:
        'Practical perspectives on cloud migrations, website architecture, cybersecurity assessments, and Generative Engine Optimization (GEO) by Meeqat Technologies.',
      canonicalUrl: 'https://www.meeqattechnologies.in/insights',
      structuredData: getBreadcrumbSchema([
        { name: 'Insights', path: '/insights' }
      ])
    });
  }, []);

  return (
    <div className="bg-[#F5EFE1] pb-24">
      {/* 100% Full-Width Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F5EFE1] border-b border-[#DFD3BD] w-full mb-12">
        {/* Bespoke Insights Hero Background Banner (100% Size) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/insights-hero-bg-banner.webp"
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
          <div className="absolute inset-0 bg-grid-light opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ name: 'Insights', path: '/insights' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE1CD] border border-[#DFD3BD] text-slate-800 text-xs font-mono font-medium mb-4">
                <span>Knowledge Base &amp; Advisory</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
                Technical Insights
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                In-depth architectural guides and strategic technical analysis written by our engineering team to help founders, CTOs, and IT managers make informed technology decisions.
              </p>
            </motion.div>

            {/* Right Hero Visual (Directive #26) */}
            <div className="lg:col-span-5">
              <InsightsHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid with Staggered Framer Motion & Unique Covers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer(0.08, 0.05)}
          initial="initial"
          whileInView="animate"
          viewport={defaultViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {insights.map((post) => (
            <motion.article
              key={post.slug}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-slate-400 transition-all group"
            >
              <div>
                {/* Visual Cover (Directive #30) */}
                <div className="mb-5">
                  <ArticleCover 
                    src={post.coverImage || '/assets/insights/web/modern-web-architecture-cover.svg'} 
                    alt={post.title} 
                  />
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3">
                  <span className="text-blue-600 font-semibold uppercase">{post.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readingTime}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 font-display mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFD3BD]/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.publishedDate}</span>
                </span>
                <Link
                  to={`/insights/${post.slug}`}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <div className="mt-20">
        <CTASection
          title="Have a question about implementing these principles?"
          subtitle="Our engineering team can evaluate your current architecture and outline a tailored roadmap."
          onOpenLeadModal={onOpenLeadModal}
        />
      </div>
    </div>
  );
}
