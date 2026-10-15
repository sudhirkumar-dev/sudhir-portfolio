"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { TechTree } from "./TechTree";
import { ArrowRight, TreePine } from "lucide-react";

/* ====================================================================
   HERO — Interactive Technology Tree + Headline + CTAs
   ==================================================================== */
export function Hero() {
  const [shakeCount, setShakeCount] = useState(0);

  const handleShake = useCallback(() => {
    setShakeCount((prev) => prev + 1);
  }, []);

  return (
    <section className="relative pb-10 pt-6 md:pt-10" aria-label="Hero">
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute -top-20 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/6 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 right-1/4 h-[320px] w-[320px] rounded-full bg-accent-violet/6 blur-[90px]"
        aria-hidden="true"
      />

      {/* Interactive Technology Tree */}
      <div className="hero-in relative mx-auto max-w-3xl">
        <TechTree shakeTrigger={shakeCount} />
      </div>

      {/* Hero Content below tree */}
      <div className="hero-in-2 mx-auto max-w-3xl text-center mt-3">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/8 px-4 py-2 text-xs font-semibold tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent pulse-ring" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent glow-dot" />
          </span>
          <span className="text-accent-cyan uppercase font-bold tracking-wider">
            .NET FULL STACK DEVELOPER
          </span>
          <span className="text-mute/60">·</span>
          <span className="text-accent uppercase font-bold tracking-wider">
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Intro */}
        <p className="mb-3 text-lg text-mute font-sans">
          Hi, I&apos;m <span className="text-ink font-semibold">Sudhir.</span>
        </p>

        {/* Headline — uncompressed, spacious modern display font with word-by-word reveal */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold leading-[1.15] tracking-normal text-ink">
          {["I", "turn", "business", "ideas", "into"].map((word, i) => (
            <span
              key={word + i}
              className="word-reveal inline-block mr-[0.3em]"
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
          <br className="hidden sm:inline" />
          {["working", "software."].map((word, i) => (
            <span
              key={word}
              className={`word-reveal inline-block mr-[0.3em] ${
                i === 0 || i === 1 ? "gradient-text" : ""
              }`}
              style={{ animationDelay: `${0.8 + i * 0.08}s` }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Supporting copy */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-mute leading-relaxed md:text-lg">
          I build websites, applications, APIs, and complete digital solutions using the
          technologies that fit the problem. Whether it&apos;s a customer-facing product,
          an admin dashboard, an e-commerce platform, or backend infrastructure —
          I focus on making the business idea work in the real world.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-accent-violet to-accent-cyan px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:-translate-y-0.5 hover:brightness-110"
          >
            Explore my work <ArrowRight size={15} />
          </Link>
          <button
            onClick={handleShake}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-6 py-3 text-sm font-medium text-ink backdrop-blur transition-all duration-300 hover:border-accent/50 hover:bg-surface-hover hover:-translate-y-0.5 active:scale-95"
            type="button"
          >
            <TreePine size={15} className="text-accent" />
            Shake the tree
          </button>
        </div>

        {/* Quick contact */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-mute">
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <span className="h-1 w-1 rounded-full bg-accent" />
              {site.email}
            </a>
          )}
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <span className="h-1 w-1 rounded-full bg-accent-violet" />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
