import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../../data/company';

export default function MobileStickyBar({ onOpenLeadModal }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-lg flex items-center gap-3">
      {/* WhatsApp Action */}
      <a
        href={getWhatsAppLink('Hello Meeqat Technologies, I would like to discuss a project.')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 shadow-sm"
      >
        <MessageSquare className="w-4 h-4 text-emerald-600" />
        <span>WhatsApp</span>
      </a>

      {/* Start Project Action */}
      <button
        onClick={onOpenLeadModal}
        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-slate-900 shadow-sm"
      >
        <span>Start Project</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
