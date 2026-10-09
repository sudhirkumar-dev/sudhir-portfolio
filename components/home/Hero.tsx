import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { TechBadge } from "@/components/ui/TechIcon";
import {
  Download,
  ExternalLink,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
} from "lucide-react";

function HeroViz() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent/20 via-cyan-500/10 to-transparent blur-2xl opacity-60" />

      <svg
        viewBox="0 0 340 310"
        role="img"
        aria-label="Layered architecture illustration: React interface, ASP.NET Core API, PostgreSQL data, Docker and CI/CD deployment"
        className="relative h-auto w-full max-w-[400px] drop-shadow-xl"
      >
        <defs>
          <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#18181f" />
            <stop offset="100%" stopColor="#121217" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>

        {/* UI Layer */}
        <rect
          x="25"
          y="24"
          width="220"
          height="58"
          rx="12"
          fill="url(#cardGrad)"
          stroke="#272732"
          strokeWidth="1.5"
        />
        <circle cx="48" cy="53" r="6" fill="#61DAFB" />
        <text
          x="64"
          y="50"
          fontFamily="Inter Variable, sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#f4f4f7"
        >
          Interface
        </text>
        <text
          x="64"
          y="66"
          fontFamily="Inter Variable, sans-serif"
          fontSize="11"
          fill="#9ca3af"
        >
          React · TypeScript · Next.js
        </text>

        {/* Connector 1 */}
        <path
          d="M135 82v28"
          className="flow"
          stroke="url(#accentGrad)"
          strokeWidth="2"
          fill="none"
        />

        {/* API Layer */}
        <rect
          x="65"
          y="110"
          width="220"
          height="58"
          rx="12"
          fill="url(#cardGrad)"
          stroke="#272732"
          strokeWidth="1.5"
        />
        <circle cx="88" cy="139" r="6" fill="#512BD4" />
        <text
          x="104"
          y="136"
          fontFamily="Inter Variable, sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#f4f4f7"
        >
          Backend API
        </text>
        <text
          x="104"
          y="152"
          fontFamily="Inter Variable, sans-serif"
          fontSize="11"
          fill="#9ca3af"
        >
          ASP.NET Core · C# · REST
        </text>

        {/* Connector 2 */}
        <path
          d="M175 168v28"
          className="flow"
          stroke="url(#accentGrad)"
          strokeWidth="2"
          fill="none"
        />

        {/* Database Layer */}
        <rect
          x="105"
          y="196"
          width="220"
          height="58"
          rx="12"
          fill="url(#cardGrad)"
          stroke="#272732"
          strokeWidth="1.5"
        />
        <circle cx="128" cy="225" r="6" fill="#336791" />
        <text
          x="144"
          y="222"
          fontFamily="Inter Variable, sans-serif"
          fontSize="13"
          fontWeight="600"
          fill="#f4f4f7"
        >
          Data Store
        </text>
        <text
          x="144"
          y="238"
          fontFamily="Inter Variable, sans-serif"
          fontSize="11"
          fill="#9ca3af"
        >
          PostgreSQL · Dapper · SQL
        </text>

        {/* Deployment Pipeline Pill */}
        <rect
          x="25"
          y="270"
          width="300"
          height="32"
          rx="16"
          fill="rgba(16, 185, 129, 0.1)"
          stroke="#10b981"
          strokeWidth="1.2"
        />
        <circle cx="45" cy="286" r="4" fill="#10b981" />
        <text
          x="175"
          y="290"
          textAnchor="middle"
          fontFamily="Inter Variable, sans-serif"
          fontSize="11.5"
          fontWeight="500"
          fill="#34d399"
        >
          Docker · CI/CD Pipelines · Cloud Deployment
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <div className="grid items-center gap-12 pb-10 pt-14 md:grid-cols-[1.25fr_0.75fr]">
      <div className="hero-in">
        {site.openToWork && (
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 shadow-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>
        )}

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-accent">
          FULL STACK DEVELOPER · .NET · REACT
        </p>

        <h1 className="font-display text-5xl leading-[1.08] tracking-tight text-white md:text-7xl">
          I build the systems behind useful products.
        </h1>

        <p className="mb-8 mt-6 max-w-xl text-lg text-mute">
          From high-throughput .NET APIs and PostgreSQL to modern React
          interfaces and automated pipelines, I work across the stack to turn
          business requirements into reliable software.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <Button href="/projects" variant="primary">
            Explore My Work <ArrowRight size={15} />
          </Button>
          <Button href="/contact">Get in Touch</Button>
          <Button href={site.resumeDownload} download variant="outline">
            <Download size={14} className="text-accent" />
            <span>Download Resume</span>
          </Button>
          <Button href={site.resumeUrl} external variant="secondary">
            <ExternalLink size={13} />
            <span>Drive Link</span>
          </Button>
        </div>

        {/* Quick Contact Line */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-mute">
          {site.email && (
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail size={13} className="text-accent" />
              <span>{site.email}</span>
            </a>
          )}
          {site.phone && (
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone size={13} className="text-accent" />
              <span>{site.phoneFormatted ?? site.phone}</span>
            </a>
          )}
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Linkedin size={13} className="text-accent" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {/* Featured Tech Stack with Icons */}
        <div className="mt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-mute/80">
            Core Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              ".NET / C#",
              "JavaScript",
              "React",
              "Next.js",
              "Express",
              "TypeScript",
              "PostgreSQL",
              "Docker",
            ].map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-in-2 flex justify-center">
        <HeroViz />
      </div>
    </div>
  );
}
