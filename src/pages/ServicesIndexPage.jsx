import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Globe, Smartphone, Cloud, Cpu, ShieldCheck, Headphones, TrendingUp, ShoppingBag } from 'lucide-react';
import { services } from '../data/services';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import { fadeUp, defaultViewport, staggerContainer, staggerItem } from '../lib/motion';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';
import ServicesIndexHeroVisual from '../components/visuals/ServicesIndexHeroVisual';

export default function ServicesIndexPage({ onOpenLeadModal }) {
  useEffect(() => {
    applySEO({
      title: 'Enterprise IT Services Directory',
      description:
        'Explore Meeqat Technologies eight core technology services: Website Development, Mobile Apps, Cloud Migrations, Infrastructure Maintenance, Cybersecurity, and Managed IT Services.',
      canonicalUrl: 'https://www.meeqattechnologies.in/services',
      structuredData: getBreadcrumbSchema([
        { name: 'Services', path: '/services' }
      ])
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

  const categories = [
    { id: 'BUILD', name: 'Build & Architecture', desc: 'Custom digital software, cross-platform apps, and ecommerce platforms.' },
    { id: 'MODERNIZE', name: 'Cloud & Infrastructure', desc: 'Workload cloud migrations and proactive server maintenance.' },
    { id: 'SECURE', name: 'Security & Operations', desc: 'Vulnerability audits, compliance roadmaps, and managed support retainers.' },
    { id: 'GROW', name: 'Commerce & Growth', desc: 'Technical SEO, search advertising, and analytics-driven optimization.' }
  ];

  return (
    <div className="bg-[#F5EFE1] pb-20">
      {/* 100% Full-Width Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-[#F5EFE1] border-b border-[#DFD3BD] w-full mb-12">
        {/* Bespoke Services Hero Background Banner (100% Size) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src="/assets/visuals/backgrounds/services-hero-bg-banner.webp"
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
          <Breadcrumbs items={[{ name: 'Services', path: '/services' }]} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-6">
            <motion.div 
              variants={fadeUp}
              initial="initial"
              animate="animate"
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-medium mb-4">
                <span>Capabilities Directory</span>
                <span>•</span>
                <span>Meeqat Technologies</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
                Engineering &amp; Technology Services
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Meeqat Technologies delivers full-lifecycle IT engineering across software development, cloud migrations, infrastructure management, cybersecurity, and commerce.
              </p>
            </motion.div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5">
              <ServicesIndexHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Grouped Services Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {categories.map((cat) => {
            const groupServices = services.filter((s) => s.category === cat.id);
            return (
              <div key={cat.id} className="pt-8 border-t border-[#DFD3BD]">
                <div className="mb-8">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                    Category: {cat.id}
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
                    {cat.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">{cat.desc}</p>
                </div>

                <motion.div 
                  variants={staggerContainer(0.06, 0.05)}
                  initial="initial"
                  whileInView="animate"
                  viewport={defaultViewport}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {groupServices.map((service) => {
                    const Icon = serviceIconMap[service.slug] || Globe;
                    return (
                      <motion.div
                        key={service.slug}
                        variants={staggerItem}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#DFD3BD] shadow-card hover:border-[#C8B89C] transition-all group"
                      >
                        <div>
                          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 font-display mb-2 group-hover:text-blue-600 transition-colors">
                            <Link to={`/services/${service.slug}`}>{service.name}</Link>
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed mb-5">
                            {service.shortDescription}
                          </p>

                          <div className="space-y-1.5 mb-6">
                            {service.capabilities.slice(0, 4).map((cap, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                                <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[#DFD3BD]/60">
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center justify-between w-full text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors"
                          >
                            <span>Read Architecture Details</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-20">
        <CTASection
          title="Looking for a combined multi-service technology roadmap?"
          subtitle="We frequently combine custom software development, cloud infrastructure setup, and managed support retainers for unified operational efficiency."
          onOpenLeadModal={onOpenLeadModal}
        />
      </div>
    </div>
  );
}
