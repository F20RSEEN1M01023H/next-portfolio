import FadeIn from '../src/components/FadeIn';
import AboutTabs from '../src/components/AboutTabs';
import ProjectGrid from '../src/components/ProjectGrid';
import ContactForm from '../src/components/ContactForm';
import SpotlightCard from '../src/components/SpotlightCard';
import Magnetic from '../src/components/Magnetic';
import { StaggeredHeading, AnimatedStat } from '../src/components/HeroAnimations';
import { HeroGlowOrbs, HeroActions, SkillBadge } from '../src/components/HeroMotion';
import { PROFILE, TECH_STACK, SERVICES, TESTIMONIALS } from '../src/lib/portfolioData';
import { Mail, MapPin, Sparkles, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../src/components/SocialIcons';
import TechMarquee from '../src/components/TechMarquee';
import { Quote } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <HeroGlowOrbs />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {PROFILE.availability}
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
          <StaggeredHeading text={`Hi, I'm ${PROFILE.name}.`} />
          <br />
          <StaggeredHeading
            text={PROFILE.role}
            delay={0.22}
            className="text-slate-300 text-3xl sm:text-5xl md:text-6xl"
          />
        </h1>

        <FadeIn delay={0.35}>
          <p className="text-slate-400 text-base sm:text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            {PROFILE.tagline}
          </p>

          <HeroActions />

          <div className="flex flex-wrap items-center justify-between gap-6 mt-12 pt-8 border-t border-slate-800/80">
            <div className="flex items-center gap-4">
              <Magnetic>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white/30 transition"
                  aria-label="GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white/30 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="block p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white/30 transition"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </Magnetic>
            </div>

            <div className="flex gap-8">
              {PROFILE.stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
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
          <FadeIn delay={0.1} className="lg:col-span-5">
            <SpotlightCard className="p-6 space-y-4">
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
            </SpotlightCard>
          </FadeIn>

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

        <TechMarquee />

        <div className="grid md:grid-cols-3 gap-6">
          {TECH_STACK.map((group, idx) => (
            <FadeIn key={group.category} delay={idx * 0.1}>
              <SpotlightCard className="p-6 h-full space-y-4">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                  <Layers size={16} />
                  <span>{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </SpotlightCard>
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
              <SpotlightCard className="p-6 h-full space-y-3">
                <Sparkles className="text-indigo-400" size={20} />
                <h3 className="font-bold text-white text-lg">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </SpotlightCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 5.5 TESTIMONIALS SECTION */}
      <section id="testimonials" className="scroll-mt-24 space-y-8">
        <FadeIn>
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400">
            Endorsements
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">What People Say</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <FadeIn key={item.author} delay={idx * 0.1}>
              <SpotlightCard className="p-6 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <Quote size={20} className="text-indigo-400/70" />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-800/80">
                  <p className="text-sm font-bold text-white">{item.author}</p>
                  <p className="text-xs text-slate-400">{item.title}</p>
                </div>
              </SpotlightCard>
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
