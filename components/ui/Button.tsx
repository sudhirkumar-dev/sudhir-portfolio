import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants = {
  primary:
    "border-accent bg-accent text-zinc-950 font-semibold shadow-md shadow-accent/25 hover:bg-emerald-400 hover:border-emerald-400 hover:shadow-accent/40",
  outline:
    "border-line bg-surface/90 text-ink hover:border-line-bright hover:bg-surface-hover hover:text-white",
  secondary:
    "border-zinc-700 bg-zinc-800 text-zinc-100 hover:bg-zinc-700 hover:border-zinc-600",
  inverse:
    "border-white bg-white text-zinc-950 font-semibold hover:bg-zinc-200 hover:border-zinc-200",
  inverseOutline:
    "border-zinc-700 bg-zinc-900/60 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white",
} as const;

export function Button({
  href,
  children,
  variant = "outline",
  external = false,
  download = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
  download?: boolean | string;
}) {
  const cls = `${base} ${variants[variant]}`;

  if (download) {
    const filename =
      typeof download === "string" ? download : "Sudhir_Kumar_Kalivarapu_Resume.pdf";
    return (
      <a className={cls} href={href} download={filename}>
        {children}
      </a>
    );
  }

  const isExternal =
    external ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    const isNewTab =
      href.startsWith("http://") || href.startsWith("https://") || external;
    return (
      <a
        className={cls}
        href={href}
        {...(isNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}

/** Visible, non-clickable stand-in for a config value that has not been supplied yet. */
export function Placeholder({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${base} cursor-not-allowed border-dashed opacity-50 ${
        dark ? "border-zinc-700 text-zinc-400" : "border-line text-mute"
      }`}
    >
      {children}
    </span>
  );
}
