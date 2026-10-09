import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { site } from "@/config/site";
import { getProject, projects } from "@/content/projects";
import { TechChips } from "@/components/projects/TechChips";
import { ArchitectureDiagram } from "@/components/projects/ArchitectureDiagram";
import { Button } from "@/components/ui/Button";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  if (!p) return {};
  return {
    title: p.name,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: {
      title: p.name,
      description: p.summary,
      url: `/projects/${p.slug}`,
      type: "article",
    },
  };
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="border-t border-line/80 py-10">
    <h2 className="mb-4 font-display text-3xl tracking-tight text-white">{title}</h2>
    {children}
  </section>
);

export default function ProjectPage({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) notFound();

  return (
    <article className="pb-20">
      <Link
        href="/projects"
        className="mb-8 mt-10 inline-flex items-center gap-1.5 font-semibold text-accent transition-colors hover:underline"
      >
        <ArrowLeft size={16} aria-hidden /> Back to projects
      </Link>

      <span className="block text-xs font-bold uppercase tracking-wider text-accent">
        {p.category}
      </span>
      <h1 className="mb-4 mt-2 font-display text-5xl tracking-tight text-white md:text-6xl">
        {p.name}
      </h1>
      <p className="max-w-3xl text-lg text-mute leading-relaxed">{p.context}</p>

      <div className="mb-3 mt-6">
        <TechChips stack={p.stack} />
      </div>
      <p className="text-xs text-mute/80">{p.status}</p>

      <div className="mt-10">
        <Section title="The Problem">
          <p className="max-w-2xl text-mute leading-relaxed">{p.problem}</p>
          {p.productAreas && (
            <p className="mt-4 max-w-2xl text-sm text-mute">
              <strong className="text-white">Product Areas:</strong> {p.productAreas}
            </p>
          )}
        </Section>

        <Section title="My Contribution">
          <ul className="list-disc space-y-2.5 pl-5 text-mute leading-relaxed">
            {p.contribution.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Section>

        <Section title={p.architecture ? "Architecture & Approach" : "Representative Workflow"}>
          {p.architecture && (
            <div className="mb-8">
              <ArchitectureDiagram />
            </div>
          )}
          <h3 className="mb-3 font-semibold text-white">{p.workflow.title}</h3>
          <ol className="list-decimal space-y-2 pl-5 text-mute leading-relaxed">
            {p.workflow.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </Section>

        <Section title="Engineering Decisions">
          {p.decisions.length ? (
            <div className="space-y-4">
              {p.decisions.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-line bg-surface/60 p-5 backdrop-blur"
                >
                  <h4 className="font-semibold text-white">{d.title}</h4>
                  <p className="mt-2 text-sm text-mute leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl rounded-xl border border-line bg-surface/50 p-5 text-sm text-mute">
              {p.decisionsTodo}
            </div>
          )}
        </Section>

        <Section title="Outcomes &amp; Impact">
          <p className="max-w-2xl text-mute leading-relaxed">{p.outcome}</p>
        </Section>

        {(p.links?.live || p.links?.repo) && (
          <Section title="Links">
            <div className="flex gap-3">
              {p.links.live && (
                <Button href={p.links.live} external variant="primary">
                  Live Project
                </Button>
              )}
              {p.links.repo && (
                <Button href={p.links.repo} external variant="outline">
                  Repository
                </Button>
              )}
            </div>
          </Section>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/80 pt-10">
          <Button href="/projects">← Back to all projects</Button>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={site.resumeDownload} download variant="primary">
              <Download size={14} /> Download Resume
            </Button>
            <Button href={site.resumeUrl} external variant="outline">
              <ExternalLink size={14} /> Drive Link
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
