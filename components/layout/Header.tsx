"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Download, ExternalLink, Linkedin, Mail } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-30 site-header border-b border-line/80 backdrop-blur-md"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="group flex items-center font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
          aria-label={`${site.name}, home`}
          onClick={() => setOpen(false)}
        >
          <span>{site.shortName}</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="rounded-lg border border-line bg-surface/60 p-2 text-ink md:hidden hover:border-accent hover:text-accent"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Navigation items */}
        <div
          id="nav-links"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-16 flex-col items-start gap-4 border-b border-line bg-bg/95 p-6 backdrop-blur-xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
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

          <div className="flex items-center gap-3 pt-2 md:pt-0">
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

            <Button href={site.resumeDownload} download variant="primary">
              <Download size={14} className="stroke-[2.5]" />
              <span>Resume</span>
            </Button>

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
