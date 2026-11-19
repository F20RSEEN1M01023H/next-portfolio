import FadeIn from '../src/components/FadeIn';
import AboutTabs from '../src/components/AboutTabs';
import ProjectGrid from '../src/components/ProjectGrid';
import ContactForm from '../src/components/ContactForm';
import { PROFILE, TECH_STACK, SERVICES } from '../src/lib/portfolioData';
import { ArrowRight, Download, Code2, Link, Mail, MapPin, Sparkles, Layers } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {PROFILE.availability}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
            Hi, I&apos;m{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
              {PROFILE.name}.
            </span>
            <br />
            <span className="text-slate-300 text-3xl sm:text-5xl md:text-6xl">{PROFILE.role}</span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-sm font-bold flex items-center gap-2 transition"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>

          {/* Social Links & Quick Stats */}
          <div className="flex flex-wrap items-center justify-between gap-6 mt-12 pt-8 border-t border-slate-800/80">
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Link size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Link size={18} />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <div className="flex gap-8">
              {PROFILE.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 2. DETAILED ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 space-y-10">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
            Engineering reliable software from database to UI
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Bio Card */}
          <FadeIn delay={0.1} className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg">
                  {PROFILE.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-white">{PROFILE.name}</h3>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin size={12} className="text-indigo-400" /> {PROFILE.location}
                  </p>
                </div>
              </div>

              {PROFILE.bio.map((paragraph, index) => (
                <p key={index} className="text-sm text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* Right Interactive Experience / Education / Certifications */}
          <FadeIn delay={0.2} className="lg:col-span-7">
            <AboutTabs />
          </FadeIn>
        </div>
      </section>

      {/* 3. TECH STACK SECTION */}
      <section id="skills" className="scroll-mt-24 space-y-8">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
            Tools & Technologies
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TECH_STACK.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 h-full space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <Layers size={16} />
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24 space-y-8">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Featured Projects</h2>
          <p className="text-sm text-slate-400 mt-2">
            Filter by architecture type to explore full-stack systems and frontend interfaces.
          </p>
        </FadeIn>

        <ProjectGrid />
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="scroll-mt-24 space-y-8">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">Services</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <FadeIn key={service.title} delay={idx * 0.1}>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition h-full space-y-3">
                <Sparkles className="text-indigo-400" size={20} />
                <h3 className="font-bold text-white text-lg">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24 space-y-8">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">
            Let&apos;s build something together
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Have an opportunity or project idea? Send a message directly or email{' '}
            <a href={`mailto:${PROFILE.email}`} className="text-indigo-400 hover:underline">
              {PROFILE.email}
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ContactForm />
        </FadeIn>
      </section>
    </div>
  );
}
