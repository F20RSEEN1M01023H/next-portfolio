'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function HeroGlowOrbs() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 35, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-16 -left-16 w-80 h-80 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 30, -15, 0],
          scale: [1, 0.92, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-0 w-72 h-72 bg-cyan-500/15 blur-3xl rounded-full pointer-events-none"
      />
    </>
  );
}

export function HeroActions() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-8">
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-colors"
      >
        View Projects <ArrowRight size={16} />
      </motion.a>
      <motion.a
        href="/resume.pdf"
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-bold flex items-center gap-2 transition-colors"
      >
        <Download size={16} /> Download Resume
      </motion.a>
    </div>
  );
}

export function SkillBadge({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, borderColor: 'rgba(129, 140, 248, 0.6)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 cursor-default select-none"
    >
      {label}
    </motion.span>
  );
}
