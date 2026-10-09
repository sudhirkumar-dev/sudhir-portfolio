"use client";
import React from "react";
import { TechIcon } from "./TechIcon";

const coreStack = [
  { name: ".NET / C#", label: ".NET & C#" },
  { name: "React", label: "React" },
  { name: "Next.js", label: "Next.js" },
  { name: "Express", label: "Express.js" },
  { name: "TypeScript", label: "TypeScript" },
  { name: "PostgreSQL", label: "PostgreSQL" },
  { name: "Docker", label: "Docker" },
  { name: "REST API design", label: "REST APIs" },
  { name: "MongoDB", label: "MongoDB" },
  { name: "Tailwind CSS", label: "Tailwind CSS" },
  { name: "Dapper", label: "Dapper ORM" },
  { name: "Git", label: "Git & GitHub" },
  { name: "Redux Toolkit", label: "Redux Toolkit" },
  { name: "Framer Motion", label: "Framer Motion" },
  { name: "CI/CD workflows", label: "CI/CD Pipelines" },
];

export function TechMarquee() {
  return (
    <div className="relative my-8 w-full overflow-hidden border-y border-line/60 bg-surface/40 py-4 backdrop-blur-sm">
      {/* Left and right fade gradients */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

      <div className="flex w-max animate-marquee space-x-4 hover:[animation-play-state:paused]">
        {/* Repeat list twice for seamless infinite scroll */}
        {[...coreStack, ...coreStack].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 rounded-full border border-line bg-surface/90 px-4 py-2 text-sm font-medium text-ink shadow-sm transition-all hover:border-accent hover:bg-surface-hover hover:scale-105"
          >
            <TechIcon name={item.name} size={18} className="h-4 w-4" />
            <span className="whitespace-nowrap">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
