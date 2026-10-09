import Link from "next/link";
import { site } from "@/config/site";
import { Mail, Phone, Linkedin, Download, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-bg/80 py-12 text-sm text-mute">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div>
          <p className="font-display text-base font-semibold text-white">
            {site.name}
          </p>
          <p className="mt-1 text-xs text-mute">
            {site.title} · {site.location}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
          <Link href="/#work" className="transition-colors hover:text-white">
            Work
          </Link>
          <Link href="/#about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/#experience" className="transition-colors hover:text-white">
            Experience
          </Link>
          <Link href="/#skills" className="transition-colors hover:text-white">
            Skills
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
          <a
            href={site.resumeDownload}
            download="Sudhir_Kumar_Kalivarapu_Resume.pdf"
            className="inline-flex items-center gap-1 text-accent transition-colors hover:underline"
          >
            <Download size={13} />
            <span>Download CV</span>
          </a>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-mute transition-colors hover:text-white"
          >
            <ExternalLink size={13} />
            <span>Drive</span>
          </a>
        </div>

        {/* Social / Direct contacts */}
        <div className="flex items-center gap-3">
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={14} />
            </a>
          )}
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-colors hover:border-accent hover:text-accent"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
          )}
          {site.phone && (
            <a
              href={`tel:${site.phone}`}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-surface/80 text-mute transition-colors hover:border-accent hover:text-accent"
              aria-label="Call"
            >
              <Phone size={14} />
            </a>
          )}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-5xl px-6 text-center text-xs text-mute/60">
        © {new Date().getFullYear()} {site.name}. Built with Next.js, TypeScript &amp; Tailwind CSS.
      </div>
    </footer>
  );
}
