import FadeIn from '../../src/components/FadeIn';
import { Code2, ExternalLink } from 'lucide-react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: 'ChatShat App',
      tech: 'Next.js, Socket.io, Tailwind',
      desc: 'Real-time messaging platform with offline queues.',
    },
    {
      id: 2,
      name: 'Fintech Dashboard',
      tech: 'React, Recharts, Node',
      desc: 'Financial analytics dashboard with live data streams.',
    },
    {
      id: 3,
      name: 'E-Commerce Store',
      tech: 'Next.js, Stripe, Supabase',
      desc: 'Full-stack headless commerce solution.',
    },
  ];

  return (
    <div className="space-y-8">
      <FadeIn>
        <h1 className="text-4xl font-bold text-white">Featured Work</h1>
        <p className="text-slate-400 mt-2">A selection of my recent full-stack projects.</p>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1 * (index + 1)}>
            <div className="group p-6 border border-slate-800 rounded-2xl bg-slate-900/50 hover:bg-slate-800/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-mono text-indigo-300 mt-2 bg-indigo-500/10 inline-block px-2 py-1 rounded">
                {project.tech}
              </p>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">{project.desc}</p>
              <div className="flex gap-4 mt-6">
                <button className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
                  <Code2 size={16} /> Code
                </button>
                <button className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
