import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/data'
import { PhoneShowcase } from './PhoneShowcase'

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-grid mask-radial absolute inset-0 -z-10" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, #7cf3a0, transparent)' }}
      />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-[1.35fr_1fr] md:items-center">
        <div className="min-w-0 animate-fade-up">
          <a
            href="#contact"
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-2xl border border-accent/30 bg-accent/5 px-3 py-1 font-mono text-[11px] text-accent transition-colors hover:bg-accent/10"
          >
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" />
            <span>{profile.availability}</span>
          </a>

          <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Building Android
            <br />
            <span className="text-muted">that runs at</span>
            <br />
            <span className="cursor text-accent">scale</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            {profile.summary}
          </p>

          <dl className="mt-8 grid max-w-xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-bg/90 px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-ink">
                  {s.value}
                  <span className="text-base text-accent">{s.unit}</span>
                </dd>
                <div className="mt-0.5 text-[11px] leading-tight text-muted">{s.label}</div>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-mono text-sm text-bg transition-colors hover:bg-accent"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Email me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-ink"
            >
              <Mail className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="animate-fade-in">
          <PhoneShowcase />
        </div>
      </div>
    </section>
  )
}
