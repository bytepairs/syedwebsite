import React, { useEffect } from 'react';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import Breadcrumbs from '../components/common/Breadcrumbs';
import { companyInfo } from '../data/company';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    applySEO({
      title: 'Privacy Policy | Meeqat Technologies',
      description: 'Privacy Policy and data protection standards governing Meeqat Technologies digital consulting services.',
      canonicalUrl: 'https://www.meeqattechnologies.in/privacy-policy',
      structuredData: getBreadcrumbSchema([
        { name: 'Privacy Policy', path: '/privacy-policy' }
      ])
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5EFE1] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy' }]} />

        <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-white border border-[#DFD3BD] shadow-card">
          <div className="pb-8 border-b border-[#DFD3BD]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-slate-500">
              Last Updated: February 28, 2025
            </p>
          </div>

        <div className="py-10 space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">1. Overview</h2>
            <p>
              Meeqat Technologies (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the technical and personal data you share with us through our website (https://www.meeqattechnologies.in) and client communication channels.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">2. Information We Collect</h2>
            <p>
              When you submit an inquiry through our consultation forms, email us, or contact our WhatsApp support line, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Your name and job title</li>
              <li>Business or personal email address and telephone/WhatsApp number</li>
              <li>Company or organization name</li>
              <li>Technical requirements, infrastructure specifications, and project scope details</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">3. How We Use Your Information</h2>
            <p>
              Information collected is used solely to evaluate technical scope, prepare architectural proposals, communicate project status, and deliver contracted engineering services. We do not sell, rent, or trade your contact information or project specifications to any third-party marketing entities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">4. Client Confidentiality & Non-Disclosure</h2>
            <p>
              We treat all client architectural blueprints, database credentials, server access keys, and business workflows as confidential commercial information. Access is restricted strictly to assigned engineers and protected by encrypted password vaults and least-privilege permissions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 font-display">5. Data Retention & Deletion</h2>
            <p>
              You may request the deletion or export of your inquiry records at any time by contacting us at <a href={`mailto:${companyInfo.email}`} className="text-blue-600 underline">{companyInfo.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
  );
}
