import FadeIn from '../src/components/FadeIn';
import { Code2, Database, Layout } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <FadeIn>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Engr Hammad Ashraf!
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            A full-stack developer crafting high-performance, animated, and scalable web experiences
            using Next.js and Tailwind CSS.
          </p>
        </div>
      </FadeIn>

      {/* Skills Section */}
      <div className="space-y-6">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl font-bold text-white">Core Technologies</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FadeIn delay={0.3}>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-3">
              <Layout className="text-indigo-400" size={24} />
              <h3 className="font-semibold text-white">Frontend</h3>
              <p className="text-sm text-slate-400">
                React, Next.js, Framer Motion, and Tailwind CSS.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-3">
              <Database className="text-cyan-400" size={24} />
              <h3 className="font-semibold text-white">Backend</h3>
              <p className="text-sm text-slate-400">Node.js, Express, Postgres, and Supabase.</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col gap-3">
              <Code2 className="text-violet-400" size={24} />
              <h3 className="font-semibold text-white">Architecture</h3>
              <p className="text-sm text-slate-400">
                TypeScript, App Router, Server Actions, and REST APIs.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
