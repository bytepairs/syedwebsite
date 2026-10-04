import React from 'react';
import { motion } from 'framer-motion';
import { imageReveal } from '../../lib/motion';
import GlassSurface from '../common/GlassSurface';

/**
 * Reusable PageHeroVisual component.
 * Displays page-specific graphic banner inside an architectural light-theme frame.
 */
export default function PageHeroVisual({
  src,
  alt,
  badge = 'Technical Architecture',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  priority = false
}) {
  return (
    <div className={`relative w-full max-w-xl mx-auto lg:max-w-none ${className}`}>
      {/* Outer Glass Framing Container */}
      <GlassSurface elevation="elevated" rounded="rounded-3xl" className="p-3 sm:p-4 overflow-hidden">
        <div className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden bg-[#FAF6ED] border border-[#DFD3BD]`}>
          <motion.img
            variants={imageReveal}
            initial="initial"
            animate="animate"
            src={src}
            alt={alt}
            width={800}
            height={500}
            loading={priority ? 'eager' : 'lazy'}
            className="w-full h-full object-cover select-none"
          />
        </div>
      </GlassSurface>
    </div>
  );
}
