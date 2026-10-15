import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
  HowIWorkSection,
  ContactSection,
} from "@/components/sections/Sections";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ===== Business Value Statement ===== */}
      <section className="py-12">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
              Tell me what your business needs.{" "}
              <span className="gradient-text">I&apos;ll help turn it into software.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mute leading-relaxed">
              From landing pages and e-commerce websites to admin panels, database-backed
              applications, third-party integrations, and deployment — I can work across
              the stack to deliver practical solutions.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/#work"
                className="inline-flex items-center gap-1.5 font-semibold text-accent transition-all hover:gap-2.5 hover:underline"
              >
                View projects <ArrowRight size={14} />
              </Link>
              <Link
                href="/#experience"
                className="inline-flex items-center gap-1.5 font-medium text-mute transition-colors hover:text-ink"
              >
                Professional experience <ArrowRight size={14} />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 font-medium text-mute transition-colors hover:text-ink"
              >
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="work" className="py-16">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
                Featured Work
              </span>
              <h2 className="font-display text-4xl tracking-tight text-white md:text-5xl">
                Products I&apos;ve helped build
              </h2>
            </div>
            <p className="max-w-md text-sm text-mute">
              Real projects across SaaS, healthcare, and business platforms, described by verified engineering contributions.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {projects.map((p, idx) => (
            <Reveal key={p.slug} delay={idx * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:justify-start">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-accent transition-all hover:gap-3 hover:underline"
          >
            <span>Explore all case studies and architecture details</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <HowIWorkSection />
      <ContactSection />
    </>
  );
}
