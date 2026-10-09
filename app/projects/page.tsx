import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured engineering projects including Kootami, Tera Connects, and LMVIT: built across .NET, ASP.NET Core APIs, PostgreSQL, and React.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <Reveal>
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
          Portfolio
        </span>
        <h1 className="mb-3 font-display text-5xl tracking-tight text-white md:text-6xl">
          Featured Projects
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-mute">
          Real products built across .NET APIs, relational database schemas, and modern frontend interfaces.
        </p>
      </Reveal>

      <div className="space-y-8">
        {projects.map((p, idx) => (
          <Reveal key={p.slug} delay={idx * 0.1}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
