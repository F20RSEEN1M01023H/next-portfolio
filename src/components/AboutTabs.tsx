'use client';

import { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../lib/portfolioData';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>(
    'experience',
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'experience'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <Briefcase size={14} /> Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'education'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <GraduationCap size={14} /> Education
        </button>
        <button
          onClick={() => setActiveTab('certifications')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition ${
            activeTab === 'certifications'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-900 text-slate-400 hover:text-white'
          }`}
        >
          <Award size={14} /> Certifications
        </button>
      </div>

      {activeTab === 'experience' && (
        <div className="space-y-4">
          {EXPERIENCE.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2"
            >
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
            </div>
          ))}
        </div>
      )}

      {activeTab === 'education' && (
        <div className="space-y-4">
          {EDUCATION.map((edu, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2"
            >
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h4 className="font-bold text-white">{edu.degree}</h4>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-lg">
                  {edu.period}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-400">{edu.institution}</p>
              <p className="text-sm text-slate-300 pt-1">{edu.details}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'certifications' && (
        <div className="grid sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1"
            >
              <h4 className="font-bold text-white text-sm">{cert.title}</h4>
              <p className="text-xs text-slate-400">{cert.issuer}</p>
              <span className="inline-block text-[11px] font-mono text-indigo-400 pt-1">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
