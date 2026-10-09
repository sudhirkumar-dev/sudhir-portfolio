import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { ProjectArt } from "./ProjectArt";
import { TechChips } from "./TechChips";

export function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="group grid overflow-hidden rounded-2xl border border-line bg-surface/90 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover hover:shadow-xl hover:shadow-black/60 md:grid-cols-[0.9fr_1.1fr]">
      <div className="flex min-h-[240px] items-center justify-center border-b border-line bg-gradient-to-br from-[#13131a] to-[#0d0d12] p-8 md:border-b-0 md:border-r">
        <ProjectArt slug={p.slug} name={p.name} />
      </div>
      <div className="flex flex-col justify-between p-7 md:p-8">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {p.category}
            </span>
            <span className="text-xs text-mute/60">·</span>
            <span className="text-xs text-mute">{p.status.split(",")[0]}</span>
          </div>

          <h3 className="mb-3 mt-1.5 font-display text-3xl tracking-tight text-white transition-colors group-hover:text-accent">
            {p.name}
          </h3>

          <p className="mb-4 text-mute leading-relaxed">{p.summary}</p>

          <div className="mb-4 space-y-2 text-sm text-mute">
            <p>
              <strong className="font-semibold text-white">Problem:</strong> {p.problem}
            </p>
            <p>
              <strong className="font-semibold text-white">My role:</strong> {p.contribution[0]}{" "}
              {p.contribution[1]}
            </p>
          </div>

          <div className="mb-5">
            <TechChips stack={p.stack} />
          </div>
        </div>

        <div>
          <Link
            href={`/projects/${p.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-2.5 hover:underline"
          >
            <span>Read full case study &amp; architecture</span>
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
