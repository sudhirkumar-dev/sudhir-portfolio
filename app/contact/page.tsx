import type { Metadata } from "next";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Linkedin, Download, ExternalLink, MapPin, Clock, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sudhir Kumar Kalivarapu: kalivarapuskumar@gmail.com or +91 8106039548 for full stack .NET and React opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="mb-12 max-w-2xl">
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wider text-accent">
          Let&apos;s Connect
        </span>
        <h1 className="font-display text-5xl tracking-tight text-white md:text-6xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-mute">
          Whether you have a specific role, a contract opportunity, or a product in need of solid backend and frontend engineering, I&apos;d love to talk.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact details panel */}
        <div className="space-y-4 lg:col-span-1">
          {/* Email card */}
          <div className="rounded-2xl border border-line bg-surface/90 p-6 shadow-sm backdrop-blur transition-all hover:border-accent/40 hover:bg-surface-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Mail size={20} />
            </div>
            <h2 className="mt-4 font-display text-lg text-white">Email</h2>
            <p className="mt-1 text-xs text-mute">Direct correspondence</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block font-semibold text-accent hover:underline"
            >
              {site.email}
            </a>
          </div>

          {/* Phone card */}
          <div className="rounded-2xl border border-line bg-surface/90 p-6 shadow-sm backdrop-blur transition-all hover:border-accent/40 hover:bg-surface-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
              <Phone size={20} />
            </div>
            <h2 className="mt-4 font-display text-lg text-white">Phone &amp; WhatsApp</h2>
            <p className="mt-1 text-xs text-mute">Available for calls and messages</p>
            <a
              href={`tel:${site.phone}`}
              className="mt-3 block font-semibold text-accent hover:underline"
            >
              {site.phoneFormatted ?? site.phone}
            </a>
          </div>

          {/* LinkedIn card */}
          <div className="rounded-2xl border border-line bg-surface/90 p-6 shadow-sm backdrop-blur transition-all hover:border-accent/40 hover:bg-surface-hover">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <Linkedin size={20} />
            </div>
            <h2 className="mt-4 font-display text-lg text-white">LinkedIn</h2>
            <p className="mt-1 text-xs text-mute">Professional network &amp; recommendations</p>
            <a
              href={site.linkedin ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-semibold text-accent hover:underline"
            >
              Connect on LinkedIn →
            </a>
          </div>

          {/* Resume Card */}
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-sm backdrop-blur transition-all hover:border-emerald-500/60 hover:bg-emerald-500/15">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <Download size={20} />
              </div>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:underline"
              >
                <span>Drive</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <h2 className="mt-4 font-display text-lg text-white">Curriculum Vitae</h2>
            <p className="mt-1 text-xs text-emerald-400/80">Download local PDF or view Google Drive link</p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button href={site.resumeDownload} download variant="primary">
                <Download size={14} /> Download PDF
              </Button>
              <Button href={site.resumeUrl} external variant="outline">
                <ExternalLink size={14} /> View on Drive
              </Button>
            </div>
          </div>
        </div>

        {/* Reach out details & form card */}
        <div className="rounded-3xl border border-line bg-surface/80 p-8 backdrop-blur lg:col-span-2">
          <h2 className="font-display text-2xl text-white">Send a message</h2>
          <p className="mt-1 text-sm text-mute">
            Fill in your details below and it will open directly in your mail client addressed to {site.email}.
          </p>

          <form
            action={`mailto:${site.email}`}
            method="GET"
            encType="text/plain"
            className="mt-8 space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full rounded-xl border border-line bg-surface-hover px-4 py-3 text-sm text-white placeholder-mute/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
                  Company / Organization
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="e.g. Tech Corp"
                  className="w-full rounded-xl border border-line bg-surface-hover px-4 py-3 text-sm text-white placeholder-mute/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Full Stack Opportunity / Project Discussion"
                className="w-full rounded-xl border border-line bg-surface-hover px-4 py-3 text-sm text-white placeholder-mute/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="body" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-mute">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                rows={5}
                required
                placeholder="Tell me about the product, role, or challenge you're solving..."
                className="w-full rounded-xl border border-line bg-surface-hover px-4 py-3 text-sm text-white placeholder-mute/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-4 text-xs text-mute">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent" /> {site.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-accent" /> Available immediately
                </span>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-zinc-950 shadow-md shadow-accent/20 transition-all hover:bg-emerald-400 hover:shadow-accent/40"
              >
                <Send size={15} /> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
