import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  MessageSquare, 
  Check, 
  Layers, 
  Globe, 
  Smartphone, 
  Cloud, 
  ShieldCheck, 
  Cpu, 
  Headphones, 
  TrendingUp, 
  ShoppingBag,
  ChevronDown,
  Briefcase,
  Users
} from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../data/company';
import { services } from '../data/services';
import { industries } from '../data/industries';
import { selectedWork } from '../data/selectedWork';
import { insights } from '../data/insights';
import { globalFaqs } from '../data/faqs';
import { applySEO, getOrganizationSchema } from '../lib/seo';
import { 
  fadeUp, 
  staggerContainer, 
  staggerItem, 
  defaultViewport 
} from '../lib/motion';

import HeroVisual from '../components/sections/HeroVisual';
import HowWeWork from '../components/sections/HowWeWork';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import ArticleCover from '../components/visuals/ArticleCover';
import SectionBackground from '../components/visuals/SectionBackground';
import GlassSurface from '../components/common/GlassSurface';

export default function HomePage({ onOpenLeadModal }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  useEffect(() => {
    applySEO({
      title: 'Technology Solutions Built Around Your Business',
      description:
        'Meeqat Technologies helps businesses build, modernize, secure and grow their digital operations through software, cloud, infrastructure and digital solutions.',
      canonicalUrl: 'https://www.meeqattechnologies.in/',
      structuredData: getOrganizationSchema()
    });
  }, []);

  const serviceIconMap = {
    'website-development': Globe,
    'mobile-application-development': Smartphone,
    'cloud-migrations': Cloud,
    'infrastructure-maintenance': Cpu,
    'cybersecurity-consulting': ShieldCheck,
    'support-services': Headphones,
    'digital-marketing': TrendingUp,
    'ecommerce-development': ShoppingBag
  };

  // Directive #29: 6 Qualitative Strengths with icons & short explanations
  const whyMeeqatPillars = [
    {
      icon: Briefcase,
      title: 'Business-First Thinking',
      desc: 'We map technology investments directly to commercial outcomes: operational speed, customer acquisition, and system reliability, rather than adopting complex tools for their own sake.'
    },
    {
      icon: Cpu,
      title: 'Practical Technology',
      desc: 'We engineer with proven, mature frameworks (React, Node.js, AWS, Azure, Linux) that provide long-term stability and straightforward talent accessibility.'
    },
    {
      icon: Layers,
      title: 'Scalable Solutions',
      desc: 'Our architectures are engineered modularly to scale alongside your organization without demanding costly ground-up rebuilds as transaction volumes grow.'
    },
    {
      icon: ShieldCheck,
      title: 'Security-Conscious Development',
      desc: 'Security is integrated from day one: encrypted database connections, least-privilege cloud IAM rules, and rigorous input sanitation across all endpoints.'
    },
    {
      icon: Users,
      title: 'Clear Communication',
      desc: 'No vague progress reports or hidden scope creep. You receive clear milestone roadmaps, clean version-controlled Git commits, and direct access to senior practitioners.'
    },
    {
      icon: Headphones,
      title: 'Long-Term Support',
      desc: 'Our relationship does not terminate at go-live. We offer structured monthly retainers to ensure servers are patched, backups are tested, and systems stay online.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* =========================================================================
          01. HERO (Directive #10 & #62)
          - Headline: Technology solutions built around your business.
          - Supporting copy: ~50-80 words
          - Primary CTA: Start a Project | Secondary: Explore Services | WhatsApp: Chat on WhatsApp
          - Hero technology visual: Business technology ecosystem
          ========================================================================= */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F5EFE1] border-b border-[#DFD3BD]">
        {/* UI/UX Hero Architectural Background Banner (Directives #12 & #28) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/homepage-hero-bg-banner.webp"
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-center lg:object-right-top opacity-60 sm:opacity-75 transition-opacity duration-700"
          />
          {/* Left Text Vignette: ensures headline & CTAs stay 100% crisp and readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE1] via-[#F5EFE1]/85 to-[#F5EFE1]/20 lg:to-transparent" />
          {/* Top/Bottom Subtle Horizon Fades */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE1]/50 via-transparent to-[#F5EFE1]" />
          {/* Ambient Grid Overlay */}
          <div className="absolute inset-0 bg-grid-light opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Headline & Value Proposition */}
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start text-left"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Enterprise Technology &amp; Cloud Advisory</span>
              </div>

              {/* Main Headline (Directive #10) */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] font-display mb-6">
                Technology solutions built around{' '}
                <span className="text-blue-600">your business.</span>
              </h1>

              {/* Supporting Value Message (Directive #10) */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 max-w-2xl font-normal leading-relaxed">
                <strong className="text-slate-900 font-semibold">Meeqat Technologies</strong> helps businesses build, modernize, secure and grow their digital operations through software, cloud, infrastructure, cybersecurity and digital solutions.
              </p>

              {/* CTAs (Directive #10: Start a Project, Explore Services, WhatsApp) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenLeadModal}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-700 bg-white border border-[#DFD3BD] hover:bg-[#FAF6ED] hover:border-[#C8B89C] transition-all shadow-subtle w-full sm:w-auto"
                  >
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>Explore Services</span>
                  </Link>
                </motion.div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getWhatsAppLink('Hello Meeqat Technologies, I would like to schedule an introductory consultation.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all shadow-subtle"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </motion.a>
              </div>

              {/* Highlight Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DFD3BD] w-full text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>100% Code Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Cloud-Agnostic Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>SLA Support Retainers</span>
                </div>
              </div>
            </motion.div>

            {/* Right Abstract Technology Visualization (Directive #06) */}
            <div className="lg:col-span-5">
              <HeroVisual />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          02. WHAT WE DO (Directive #11 & #62)
          - One concise paragraph: ~60-100 words
          - 4 short capability groups in small glass cards: BUILD, MODERNIZE, SECURE, GROW
          ========================================================================= */}
      <section id="what-we-do" className="py-16 sm:py-20 bg-[#EDE5D4] border-b border-[#DFD3BD] relative overflow-hidden">
        <SectionBackground pattern="grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-3">
              <span>Operational Focus</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
              Technology that moves your business forward.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              We engineer dependable digital foundations for growing businesses. Whether you are launching a modern customer storefront, migrating off aging physical servers, or hardening cybersecurity defenses, our focus is practical, maintainable technology designed around real business workflows.
            </p>
          </div>

          {/* 4 Capability Groups in Small Glass Cards (Directive #11) */}
          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {/* BUILD */}
            <GlassSurface interactive elevation="subtle" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                    BUILD
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  Software &amp; Digital Products
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Custom responsive websites, iOS &amp; Android mobile applications, and unified e-commerce platforms.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD3BD] flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700">
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Websites</span>
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Mobile Apps</span>
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">E-commerce</span>
              </div>
            </GlassSurface>

            {/* MODERNIZE */}
            <GlassSurface interactive elevation="subtle" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 border border-sky-200 px-2 py-0.5 rounded">
                    MODERNIZE
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  Cloud &amp; Infrastructure
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Staged migrations to AWS/Azure/GCP and automated server patch maintenance routines.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD3BD] flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700">
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Cloud Migration</span>
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Infrastructure</span>
              </div>
            </GlassSurface>

            {/* SECURE */}
            <GlassSurface interactive elevation="subtle" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    SECURE
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  Cybersecurity &amp; Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Vulnerability audits, least-privilege IAM rules, and SLA-governed helpdesk incident resolution.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD3BD] flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700">
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Security Audits</span>
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Support SLA</span>
              </div>
            </GlassSurface>

            {/* GROW */}
            <GlassSurface interactive elevation="subtle" className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
                    GROW
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                  Digital Acquisition &amp; GEO
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Technical SEO, high-intent search marketing, and Generative Engine Optimization for AI answer engines.
                </p>
              </div>
              <div className="pt-3 border-t border-[#DFD3BD] flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-700">
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">Technical SEO</span>
                <span className="bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">GEO Search</span>
              </div>
            </GlassSurface>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          03. CORE SERVICES (Directive #12 & #62: 8 compact cards)
          - Icon, name, one-sentence description, arrow
          - No long descriptions, no bullet checklists
          ========================================================================= */}
      <section id="services" className="py-20 sm:py-24 bg-[#FAF6ED] border-b border-[#DFD3BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Capabilities"
            title="Core Technology Services"
            subtitle="Eight specialized capability areas structured to build, modernize, secure, and operate your systems with direct engineering accountability."
          />

          {/* Compact 8 Services Grid */}
          <motion.div 
            variants={staggerContainer(0.06, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => {
              const Icon = serviceIconMap[service.slug] || Globe;
              return (
                <motion.div
                  key={service.slug}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DFD3BD] hover:border-[#C8B89C] shadow-card hover:shadow-card-hover transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 bg-[#F5EFE1] border border-[#DFD3BD]/60 px-2 py-0.5 rounded">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-display mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>

                    {/* Single Crisp Sentence Description (Directive #12) */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DFD3BD]/60">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-[#FAF6ED] border border-[#DFD3BD] transition-colors shadow-xs"
            >
              <span>Explore All 8 Services with Technical Specifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04. INDUSTRIES (Directive #22, #25 & #62: 7 compact cards + subtle background)
          - One sentence per industry
          ========================================================================= */}
      <section id="industries" className="py-20 sm:py-24 bg-[#EDE5D4] border-t border-[#DFD3BD] relative overflow-hidden">
        <SectionBackground pattern="grid" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Vertical Domain Knowledge"
            title="Industry-Specific Solutions"
            subtitle="Engineered systems aligned with real operational workflows, inventory controls, and compliance requirements."
          />

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

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.name}
                  </h3>

                  {/* One sentence per industry (Directive #51) */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFD3BD]/60">
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View {ind.name} Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          05. HOW WE WORK (Directive #30 & #62: 5 steps, 1 sentence, 1 icon, 1 animation)
          ========================================================================= */}
      <HowWeWork />

      {/* =========================================================================
          06. SELECTED WORK (Directive #28 & #62: Maximum 3 featured verified items)
          ========================================================================= */}
      <section id="work" className="py-20 sm:py-24 bg-[#FAF6ED] border-t border-[#DFD3BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Selected Deployments"
            title="Real-World Technical Solutions"
            subtitle="A factual look at verified digital systems engineered and maintained by Meeqat Technologies across retail commerce, international trading, and regional distribution."
          />

          <motion.div 
            variants={staggerContainer(0.06, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {selectedWork.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {project.industry}
                    </span>
                    <span className="text-[10px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {project.clientType}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display mb-3">
                    {project.title}
                  </h3>

                  <div className="space-y-3 mb-5 text-xs">
                    <div className="p-3 rounded-xl bg-[#F5EFE1] border border-[#DFD3BD]">
                      <span className="font-semibold text-slate-800 block mb-0.5">Challenge:</span>
                      <p className="text-slate-600">{project.challenge}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-[#F5EFE1] border border-[#DFD3BD]">
                      <span className="font-semibold text-slate-800 block mb-0.5">Solution:</span>
                      <p className="text-slate-600">{project.solution}</p>
                    </div>
                  </div>

                  {/* Factual Result */}
                  <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200/60 mb-5">
                    <span className="text-[11px] font-mono font-semibold text-emerald-800 block mb-0.5">
                      Outcome:
                    </span>
                    <p className="text-xs text-emerald-900 font-medium">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#DFD3BD]/60 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EDE5D4] text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenLeadModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
            >
              <span>Discuss a Similar Architecture for Your Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. WHY MEEQAT (Directive #29 & #62: 6 strong reasons)
          ========================================================================= */}
      <section id="why-meeqat" className="py-20 sm:py-24 bg-[#F5EFE1] border-t border-[#DFD3BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Enterprise Advantage"
            title="Why Technology Leaders Work with Meeqat"
            subtitle="We do not just ship code; we build dependable foundation systems designed for clear communication, operational resilience, and long-term ownership."
          />

          <motion.div 
            variants={staggerContainer(0.06, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyMeeqatPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-display mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          08. TECHNICAL INSIGHTS PREVIEW (Directive #31 & #62: 3 articles max with ArticleCover)
          ========================================================================= */}
      <section id="insights-preview" className="py-20 sm:py-24 bg-[#EDE5D4] border-t border-[#DFD3BD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Engineering Insights"
            title="Technical &amp; Strategic Advisory"
            subtitle="Practical perspectives on cloud migrations, web architecture, cybersecurity audits, and the evolving AI search landscape."
          />

          <motion.div 
            variants={staggerContainer(0.06, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {insights.slice(0, 3).map((post) => (
              <motion.article
                key={post.slug}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all group"
              >
                <div>
                  {/* Article Cover Visual (Directive #30) */}
                  <div className="mb-4">
                    <ArticleCover 
                      src={post.coverImage || '/assets/insights/web/modern-web-architecture-cover.svg'} 
                      alt={post.title} 
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-3">
                    <span className="text-blue-600 font-medium">{post.category}</span>
                    <span>{post.readingTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                    <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFD3BD]/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">{post.publishedDate}</span>
                  <Link
                    to={`/insights/${post.slug}`}
                    className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800"
            >
              <span>Explore All Technical Insights &amp; GEO Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          09. AEO FAQ ACCORDION (Directive #32 & #62: 6 questions maximum, concise answers)
          ========================================================================= */}
      <section id="faq" className="py-20 sm:py-24 bg-[#F5EFE1] border-t border-[#DFD3BD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            subtitle="Direct, factual answers regarding our services, technology stacks, physical locations, code ownership, and support agreements."
          />

          <div className="space-y-3.5">
            {globalFaqs.slice(0, 6).map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen ? 'bg-[#FAF6ED] border-blue-400 shadow-sm' : 'bg-white border-[#DFD3BD] hover:border-[#C8B89C]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 font-medium block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center border shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-600'
                          : 'bg-[#FAF6ED] border-[#DFD3BD] text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="faq-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-[#DFD3BD] mt-2 pt-4">
                          {/* Direct AEO Answer (Directive #36) */}
                          <p className="text-sm font-medium text-slate-900 leading-relaxed mb-2">
                            {faq.directAnswer}
                          </p>
                          {/* Supporting Details */}
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
        </div>
      </section>

      {/* =========================================================================
          10. FINAL CTA (Directive #33 & #62: Large light visual background, Glass CTA panel)
          ========================================================================= */}
      <CTASection
        title="Have a technology project in mind?"
        subtitle="Tell us what you're building, improving or solving. Our lead engineers will review your scope and provide a practical plan."
        onOpenLeadModal={onOpenLeadModal}
      />

    </div>
  );
}
