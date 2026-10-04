import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Reusable ArticleCover component for Insights.
 * Displays crisp, light-themed visual cover with 16:9 ratio, instant fallback resilience, and smooth reveal.
 */
export default function ArticleCover({ src, alt, className = '', priority = true }) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-subtle ${className}`}>
      {!hasError ? (
        <motion.img
          src={src}
          alt={alt || "Meeqat Technologies Technical Insight"}
          width={1200}
          height={675}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0.8, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-slate-100 text-slate-500 p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="font-mono text-xs font-semibold text-slate-700 mb-1">Meeqat Technical Advisory</span>
          <span className="text-xs text-slate-500 max-w-sm">{alt}</span>
        </div>
      )}
    </div>
  );
}
