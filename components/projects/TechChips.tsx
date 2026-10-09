import { TechIcon } from "@/components/ui/TechIcon";

export function TechChips({ stack }: { stack: string[] }) {
  if (!stack.length)
    return (
      <span className="rounded-full border border-dashed border-line px-3 py-1 text-xs text-mute">
        Full stack: C#, ASP.NET Core, React, PostgreSQL
      </span>
    );
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((s) => (
        <li
          key={s}
          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/90 px-3 py-1 text-xs text-ink/90 transition-colors hover:border-accent/40"
        >
          <TechIcon name={s} size={13} className="h-3 w-3" />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}
