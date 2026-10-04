import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppLink, companyInfo } from '../../data/company';

export default function WhatsAppFloating() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hidden lg:block fixed bottom-6 right-6 z-30">
      <div className="relative flex items-center">
        {/* Tooltip on desktop */}
        {isHovered && (
          <div className="hidden sm:block absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-lg animate-fade-in">
            <span>Chat with Meeqat Technologies</span>
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
          </div>
        )}

        <a
          href={getWhatsAppLink('Hello Meeqat Technologies, I would like to inquire about your services.')}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:scale-105 active:scale-95 transition-all p-3"
          aria-label={`Chat with Meeqat Technologies on WhatsApp at ${companyInfo.phoneDisplay}`}
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </div>
  );
}
