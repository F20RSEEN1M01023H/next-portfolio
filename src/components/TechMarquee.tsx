'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '../lib/portfolioData';

export default function TechMarquee() {
  const allSkills = TECH_STACK.flatMap((group) => group.items);
  const rowOne = [...allSkills, ...allSkills];
  const rowTwo = [...[...allSkills].reverse(), ...[...allSkills].reverse()];

  return (
    <div className="relative overflow-hidden py-4 space-y-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      {/* Row 1: Leftward */}
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-3"
      >
        {rowOne.map((skill, idx) => (
          <span
            key={`r1-${idx}`}
            className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Row 2: Rightward */}
      <motion.div
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
        className="flex w-max gap-3"
      >
        {rowTwo.map((skill, idx) => (
          <span
            key={`r2-${idx}`}
            className="px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs font-mono text-indigo-300 whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
