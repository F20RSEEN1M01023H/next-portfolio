'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../lib/portfolioData';
import SpotlightCard from './SpotlightCard';

const TABS = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
] as const;

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>(
    'experience',
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {TABS.map(({ id, label, icon: Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                isActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeAboutTab"
                  transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  className="absolute inset-0 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/25"
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={14} /> {label}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22 }}
        >
          {activeTab === 'experience' && (
            <div className="space-y-4">
              {EXPERIENCE.map((item, i) => (
                <SpotlightCard key={i} className="p-5 space-y-2">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="font-bold text-white">{item.role}</h4>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-400">{item.company}</p>
                  <ul className="list-disc list-inside text-sm text-slate-300 space-y-1 pt-1">
                    {item.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </SpotlightCard>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <SpotlightCard key={i} className="p-5 space-y-2">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h4 className="font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-400">{edu.institution}</p>
                  <p className="text-sm text-slate-300 pt-1">{edu.details}</p>
                </SpotlightCard>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <SpotlightCard key={i} className="p-5 space-y-1">
                  <h4 className="font-bold text-white text-sm">{cert.title}</h4>
                  <p className="text-xs text-slate-400">{cert.issuer}</p>
                  <span className="inline-block text-[11px] font-mono text-indigo-400 pt-1">
                    {cert.year}
                  </span>
                </SpotlightCard>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
