import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
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
      <TechMarquee />

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
