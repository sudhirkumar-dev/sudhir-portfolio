"use client";
import { useState } from "react";
import { site } from "@/config/site";
import { experience } from "@/content/experience";
import { skills, howIWork } from "@/content/skills";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TechBadge } from "@/components/ui/TechIcon";
import {
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Download,
  Copy,
  Check,
  Briefcase,
  Layers,
  Database,
  Cloud,
  Code2,
  Calendar,
  Sparkles,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
              About Me
            </span>
            <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">
              Business problems, working software.
            </h2>
          </div>
          <div className="space-y-5 text-mute">
            <p>
              I&apos;m a full-stack developer who enjoys turning business problems into working software. My experience spans .NET APIs, database-driven applications, React interfaces, and modern web engineering. I&apos;ve worked across SaaS, insurance, health-tech, commerce, and business platforms, adapting to different product needs rather than approaching every problem the same way.
            </p>
            <p>
              I take pride in understanding how a product works end to end: keeping implementations practical, designing clean API contracts, structuring reliable SQL data models, and learning the infrastructure needed to ship software beyond localhost.
            </p>
            <blockquote className="rounded-xl border-l-4 border-accent bg-surface/60 p-5 font-display text-lg italic text-ink/90 backdrop-blur">
              &ldquo;Understand the problem. Keep the implementation clear. Build something useful. Make it reliable enough to ship.&rdquo;
            </blockquote>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
              Career Journey
            </span>
            <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">
              Where I&apos;ve worked
            </h2>
          </div>
          <p className="max-w-md text-sm text-mute">
            Proven track record delivering full-stack features, robust APIs, and scalable architecture.
          </p>
        </div>
      </Reveal>

      <div className="relative pl-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-line before:to-line">
        {experience.map((e, idx) => (
          <Reveal key={e.org} delay={idx * 0.08} y={15}>
            <div className="relative pb-10 pl-6 group">
              {/* Node icon */}
              <span
                className={`absolute -left-[29px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                  idx === 0
                    ? "border-accent bg-bg shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    : "border-line bg-surface group-hover:border-accent/60"
                }`}
                aria-hidden
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    idx === 0 ? "bg-accent" : "bg-mute group-hover:bg-accent"
                  }`}
                />
              </span>

              <div className="rounded-2xl border border-line bg-surface/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover hover:shadow-md">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-2xl text-white group-hover:text-accent transition-colors">
                    {e.org}
                  </h3>
                  <div className="flex items-center gap-2">
                    {idx === 0 && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Latest Role
                      </span>
                    )}
                    {e.tag && (
                      <span className="rounded-full border border-line bg-surface px-2.5 py-0.5 font-sans text-xs text-mute">
                        {e.tag}
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-accent">
                  <Calendar size={14} />
                  <span>{e.when}</span>
                </p>

                <p className="mt-3 text-mute leading-relaxed">{e.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Backend development": <Code2 className="text-emerald-400" size={20} />,
  "Frontend development": <Layers className="text-cyan-400" size={20} />,
  Databases: <Database className="text-sky-400" size={20} />,
  "Deployment and tools": <Cloud className="text-teal-400" size={20} />,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <Reveal>
        <div className="mb-10">
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
            Technical Arsenal
          </span>
          <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 max-w-2xl text-mute">
            Specialized in C#, .NET, PostgreSQL, and React. Every technology listed has hands-on production or active project backing.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], gIdx) => (
          <Reveal key={group} delay={gIdx * 0.08}>
            <div className="h-full rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur transition-all duration-300 hover:border-line-bright hover:shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface-hover">
                  {categoryIcons[group] ?? <Code2 className="text-accent" size={20} />}
                </div>
                <h3 className="font-display text-xl text-white">{group}</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {items.map((s) => (
                  <TechBadge key={s} name={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function HowIWorkSection() {
  return (
    <section className="py-16">
      <Reveal>
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
          Philosophy
        </span>
        <h2 className="mb-8 font-display text-4xl tracking-tight text-white md:text-5xl">
          How I work
        </h2>
      </Reveal>

      <dl className="grid gap-6 md:grid-cols-3">
        {howIWork.map(([t, d], idx) => (
          <Reveal key={t} delay={idx * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-surface/70 p-6 transition-all duration-300 hover:border-accent/40 hover:bg-surface-hover">
              <dt className="flex items-center gap-2 font-display text-lg text-white">
                <Sparkles size={16} className="text-accent flex-shrink-0" />
                {t}
              </dt>
              <dd className="mt-3 text-sm text-mute leading-relaxed">{d}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    if (!site.email) return;
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-surface via-[#101015] to-[#091510] p-8 text-ink shadow-2xl md:p-12">
          {/* Subtle glow orb */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Get In Touch
            </span>

            <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">
              Have a product to build or a team to scale?
            </h2>

            <p className="mt-4 max-w-2xl text-base text-mute">
              I&apos;m actively interested in full-time and high-impact engineering opportunities where I can contribute across the stack, design reliable .NET APIs, and ship clean user experiences.
            </p>

            {/* Direct Contact Cards / Badges */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Email Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface/90 p-4 transition-all hover:border-accent/50 hover:bg-surface-hover">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Mail size={18} />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-xs text-mute hover:text-accent transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-mute">Email address</p>
                  <a
                    href={`mailto:${site.email}`}
                    className="truncate text-sm font-medium text-white hover:text-accent transition-colors block"
                  >
                    {site.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface/90 p-4 transition-all hover:border-accent/50 hover:bg-surface-hover">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10 text-teal-400">
                  <Phone size={18} />
                </div>
                <div className="mt-3">
                  <p className="text-xs text-mute">Direct contact</p>
                  <a
                    href={`tel:${site.phone}`}
                    className="text-sm font-medium text-white hover:text-accent transition-colors block"
                  >
                    {site.phoneFormatted ?? site.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-line bg-surface/90 p-4 transition-all hover:border-accent/50 hover:bg-surface-hover">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 text-sky-400">
                  <Linkedin size={18} />
                </div>
                <div className="mt-3">
                  <p className="text-xs text-mute">Professional network</p>
                  <a
                    href={site.linkedin ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-accent transition-colors block"
                  >
                    Sudhir Kalivarapu
                  </a>
                </div>
              </div>

              {/* Resume Card */}
              <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 transition-all hover:border-accent hover:bg-emerald-500/15">
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Download size={18} />
                  </div>
                  <a
                    href={site.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-400/90 hover:underline"
                    title="View on Google Drive"
                  >
                    <span>Drive</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-emerald-400/80">Curriculum Vitae</p>
                  <a
                    href={site.resumeDownload}
                    download="Sudhir_Kumar_Kalivarapu_Resume.pdf"
                    className="text-sm font-bold text-white hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    Download PDF <Download size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={`mailto:${site.email}`} variant="primary">
                <Mail size={16} /> Send an Email
              </Button>
              <Button href={`tel:${site.phone}`} variant="outline">
                <Phone size={16} /> Call {site.phoneFormatted ?? site.phone}
              </Button>
              {site.linkedin && (
                <Button href={site.linkedin} external variant="outline">
                  <Linkedin size={16} /> LinkedIn Profile
                </Button>
              )}
              <Button href={site.resumeDownload} download variant="primary">
                <Download size={16} /> Download Resume
              </Button>
              <Button href={site.resumeUrl} external variant="secondary">
                <ExternalLink size={15} /> View on Drive
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
