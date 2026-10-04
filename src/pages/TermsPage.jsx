import React, { useEffect } from 'react';
import { applySEO, getBreadcrumbSchema } from '../lib/seo';
import Breadcrumbs from '../components/common/Breadcrumbs';

export default function TermsPage() {
  useEffect(() => {
    applySEO({
      title: 'Terms of Service | Meeqat Technologies',
      description: 'Terms of Service and commercial engagement standards governing Meeqat Technologies engineering services.',
      canonicalUrl: 'https://www.meeqattechnologies.in/terms',
      structuredData: getBreadcrumbSchema([
        { name: 'Terms of Service', path: '/terms' }
      ])
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5EFE1] pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms' }]} />

        <div className="mt-6 p-8 sm:p-12 rounded-3xl bg-white border border-[#DFD3BD] shadow-card">
          <div className="pb-8 border-b border-[#DFD3BD]">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-2 font-medium">
              Legal &amp; Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-3">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-slate-500">
              Last Updated: February 28, 2025
            </p>
          </div>

          <div className="py-10 space-y-8 text-sm text-slate-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">1. Engagement Scope</h2>
              <p>
                These Terms of Service govern your use of the Meeqat Technologies website and outline the foundational terms of our technical consulting engagements. Detailed scopes of work, milestones, response SLAs, and financial investments are formalized in individual Statements of Work (SOW) or Support Service Agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">2. Intellectual Property &amp; Code Ownership</h2>
              <p>
                Unless otherwise specified in a custom agreement, clients receive full, unencumbered ownership of all custom software source code, database schemas, and digital assets created under paid milestones upon settlement of final invoices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">3. Client Responsibilities</h2>
              <p>
                Clients agree to provide timely technical inputs, access credentials to relevant cloud or domain consoles where necessary for implementation, and prompt review of deliverables within agreed milestone windows.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 font-display">4. Limitation of Liability</h2>
              <p>
                Meeqat Technologies provides professional engineering services aligned with industry best practices. We are not liable for business interruptions caused by upstream third-party cloud outages (e.g. AWS, Azure, GCP global outages), ISP interruptions, or unauthorized modifications made by unassigned third-party developers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
