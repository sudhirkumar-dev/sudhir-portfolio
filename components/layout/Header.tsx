"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download, ExternalLink, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Tech Stack" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-30 site-header border-b border-line/60 backdrop-blur-md"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        {/* Logo — "sudhir." with glowing dot */}
        <Link
          href="/"
          className="group flex items-center gap-1 font-display text-xl tracking-tight text-ink transition-colors hover:text-white"
          aria-label={`${site.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span>sudhir</span>
          <span className="relative flex items-center">
            <span className="text-accent">.</span>
            <span
              className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #2A7BFF, #8B5CF6, #22D3EE)",
                boxShadow: "0 0 6px rgba(42,123,255,0.6), 0 0 12px rgba(139,92,246,0.3)",
              }}
              aria-hidden="true"
            />
          </span>
        </Link>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mute transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3">
          {/* CTA button — desktop only */}
          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent/90 to-accent-violet/90 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-accent/30 hover:-translate-y-0.5 hover:brightness-110"
          >
            Let&apos;s build something
            <span aria-hidden="true">↗</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="rounded-lg border border-line bg-surface/60 p-2 text-ink md:hidden hover:border-accent hover:text-accent transition-colors"
            aria-expanded={open}
            aria-controls="nav-links"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="nav-links"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col items-start gap-4 border-b border-line bg-bg/95 p-6 backdrop-blur-xl md:hidden`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-mute transition-colors hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 pt-2">
            {site.linkedin && (
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-all hover:border-accent hover:text-accent"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>
            )}

            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-all hover:border-accent hover:text-accent"
                aria-label="Email Sudhir"
              >
                <Mail size={16} />
              </a>
            )}

            <a
              href={site.resumeDownload}
              download="Sudhir_Kumar_Kalivarapu_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-violet px-4 py-2 text-xs font-semibold text-white shadow-sm"
            >
              <Download size={14} className="stroke-[2.5]" />
              Resume
            </a>

            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-all hover:border-accent hover:text-accent"
              aria-label="View Google Drive Resume"
              title="Open Google Drive link"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
