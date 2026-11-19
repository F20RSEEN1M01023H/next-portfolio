'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, X, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS, ProjectItem } from '../lib/portfolioData';
import TiltSpotlightCard from './TiltSpotlightCard';

export default function ProjectGrid() {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Frontend'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex gap-2">
        {(['All', 'Full-Stack', 'Frontend'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`relative px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              filter === cat ? 'text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            {filter === cat && (
              <motion.span
                layoutId="activeProjectFilter"
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                className="absolute inset-0 rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/25"
              />
            )}
            <span className="relative z-10">{cat}</span>
          </button>
        ))}
      </div>

      {/* 3D Tilt Project Cards */}
      <motion.div layout className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <TiltSpotlightCard className="p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full">
                        <Star size={11} /> Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mt-1">{project.metrics}</p>

                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      <GithubIcon size={15} /> Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition"
                    >
                      <ExternalLink size={15} /> Live
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-indigo-600 px-3 py-1.5 rounded-lg transition"
                  >
                    <Layers size={13} /> Case Study
                  </button>
                </div>
              </TiltSpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                    {selectedProject.role}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400 mt-1">
                    {selectedProject.metrics}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Architecture & Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-200">
                      <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2 transition"
                >
                  <GithubIcon size={15} /> View Repository
                </a>
                <a
                  href={selectedProject.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 transition"
                >
                  <ExternalLink size={15} /> Launch Live App
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
