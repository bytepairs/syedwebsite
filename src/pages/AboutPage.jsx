import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Users, 
  MapPin, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  ExternalLink 
} from 'lucide-react';
import { companyInfo, getWhatsAppLink } from '../data/company';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/common/CTASection';
import AboutHeroVisual from '../components/visuals/AboutHeroVisual';

export default function AboutPage({ onOpenLeadModal }) {
  useEffect(() => {
    applySEO({
      title: 'About Meeqat Technologies | Company & Engineering Approach',
      description:
        'Learn about Meeqat Technologies: our technical approach, core capabilities, physical engineering offices in Tamil Nadu, and engagement models for businesses.',
      canonicalUrl: 'https://www.meeqattechnologies.in/about',
      structuredData: getBreadcrumbSchema([
        { name: 'About Us', path: '/about' }
      ])
    });
  }, []);

  const corePillars = [
    {
      title: 'Practical Engineering',
      desc: 'We prioritize straightforward, reliable architectures that solve business problems without introducing fragile dependencies or bloated technology stacks.'
    },
    {
      title: 'Direct Technical Collaboration',
      desc: 'Our clients interact directly with senior software engineers and cloud practitioners who write code and configure systems, avoiding communication gaps.'
    },
    {
      title: 'Strict Code & Asset Ownership',
      desc: 'Clients retain full ownership of their intellectual property, Git repositories, domain registrations, and cloud consoles from day one.'
    },
    {
      title: 'Long-Term Reliability',
      desc: 'We build systems designed to be maintained efficiently over years, backed by clear documentation, standard frameworks, and routine patch maintenance.'
    }
  ];

  return (
    <div className="bg-[#F5EFE1] pb-20">
      {/* 100% Full-Width Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F5EFE1] border-b border-[#DFD3BD] w-full mb-12">
        {/* Bespoke About Hero Background Banner (100% Size) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/about-hero-bg-banner.webp"
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
          <Breadcrumbs items={[{ name: 'About Meeqat Technologies', path: '/about' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <span>Company Profile</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
                About Meeqat Technologies
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal mb-6">
                We are an independent technology consulting company helping businesses build, modernize, secure, and operate their digital systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenLeadModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-sm transition-all"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {/* Right Hero Visual (Directive #24) */}
            <div className="lg:col-span-5">
              <AboutHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Narrative & Philosophy Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10 border-t border-[#DFD3BD]">
          <motion.div 
            variants={fadeUp}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              Our Approach to Business Technology
            </h2>
            <p>
              Modern businesses require technology that works consistently, adapts to growth, and does not require constant emergency intervention. At Meeqat Technologies, we focus on engineering dependable software and resilient cloud infrastructure tailored to real operational workflows.
            </p>
            <p>
              Rather than pushing unnecessary complexity or speculative trends, we apply proven engineering practices: clean component separation, strict security boundaries, maintainable codebases, and comprehensive documentation.
            </p>
            <p>
              Whether partnering with a regional enterprise in South India, collaborating with growing businesses across Pan-India, or delivering offshore engineering services for international clients in the Middle East, our focus remains on clarity, accountability, and measurable results.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {corePillars.map((pillar, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                className="p-5 rounded-2xl bg-white border border-[#DFD3BD] shadow-subtle"
              >
                <h3 className="text-sm font-bold text-slate-900 font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* How Clients Engage Us */}
        <section className="py-16 border-t border-[#DFD3BD]">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 block mb-2">
              Commercial Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              How Clients Engage Meeqat
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Transparent, predictable engagement structures designed for business clarity.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                  Model 01
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-3 mb-2">
                  Fixed-Scope Milestone Projects
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Ideal for well-defined objectives such as a new custom website build, a mobile application launch, a structured cloud migration, or a focused cybersecurity vulnerability audit.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Fixed, milestone-based budget schedule</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Documented functional requirements and deliverables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Post-launch warranty and stabilization period</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenLeadModal}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 self-start"
              >
                <span>Request Milestone Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-7 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 bg-[#EDE5D4] px-2.5 py-1 rounded">
                  Model 02
                </span>
                <h3 className="text-xl font-bold text-slate-900 font-display mt-3 mb-2">
                  Managed Support Retainers
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Designed for businesses requiring ongoing technical peace of mind: proactive server monitoring, routine OS updates, offsite backup verification, and dedicated troubleshooting hours.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Defined SLA response commitments for incidents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Scheduled monthly patch and backup verification routines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Direct technical communication via Slack, Teams, or WhatsApp</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenLeadModal}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 self-start"
              >
                <span>Discuss Support Retainer</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Physical Office Locations */}
        <section className="py-16 border-t border-[#DFD3BD]">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Physical Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Registered Company Offices
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We operate two physical technical facilities in Tamil Nadu, India, serving regional and international clients.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer(0.08, 0.05)}
            initial="initial"
            whileInView="animate"
            viewport={defaultViewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {companyInfo.locations.map((loc, idx) => (
              <motion.div 
                key={idx} 
                variants={staggerItem}
                className="p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <strong className="text-base text-slate-900 font-display">{loc.name}</strong>
                  <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                    PIN: {loc.postalCode}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {loc.fullAddress}
                </p>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Location & Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </section>

      </div>

      <CTASection
        title="Ready to discuss your technology initiatives?"
        subtitle="Contact our engineering team to schedule a focused initial review of your software or cloud requirements."
        onOpenLeadModal={onOpenLeadModal}
      />
    </div>
  );
}
