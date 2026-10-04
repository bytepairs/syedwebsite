import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Layers } from 'lucide-react';
import { applySEO } from '../lib/seo';

export default function NotFoundPage() {
  useEffect(() => {
    applySEO({
      title: 'Page Not Found',
      description: 'The requested page could not be located on Meeqat Technologies.',
      canonicalUrl: 'https://www.meeqattechnologies.in/404'
    });
  }, []);

  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center pt-28 pb-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full mb-4 inline-block">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4">
          Looks like this page took a different route.
        </h1>

        <p className="text-sm text-slate-600 leading-relaxed mb-8">
          The resource or URL you requested could not be located on our servers. You may return to the homepage or explore our core engineering capabilities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
