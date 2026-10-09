const stroke = { stroke: "var(--accent)", strokeWidth: 1.6, fill: "none" } as const;
const text = { fontFamily: "Inter Variable, sans-serif", fill: "var(--ink)", textAnchor: "middle" } as const;

export function ProjectArt({ slug, name }: { slug: string; name: string }) {
  const label = `Illustration for ${name}`;
  if (slug === "kootami")
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label={`${label}: React interface calling a .NET API backed by PostgreSQL`} className="h-auto w-full max-w-[340px]">
        {[8, 110, 212].map((x) => <rect key={x} x={x} y={60} width={80} height={60} rx={8} {...stroke} fill="var(--surface)" />)}
        <path d="M88 90h22M190 90h22" className="flow" {...stroke} />
        <text x={48} y={94} fontSize={11} {...text}>React</text>
        <text x={150} y={94} fontSize={11} {...text}>.NET API</text>
        <text x={252} y={94} fontSize={11} {...text}>PostgreSQL</text>
      </svg>
    );
  if (slug === "tera-connects")
    return (
      <svg viewBox="0 0 300 180" role="img" aria-label={`${label}: three user types connected to one platform`} className="h-auto w-full max-w-[340px]">
        <path d="M68 50l54 28M68 130l54-28M230 90h-50" className="flow" {...stroke} />
        <circle cx={150} cy={90} r={30} {...stroke} fill="var(--surface)" />
        <circle cx={50} cy={40} r={20} {...stroke} fill="var(--surface)" />
        <circle cx={50} cy={140} r={20} {...stroke} fill="var(--surface)" />
        <circle cx={250} cy={90} r={20} {...stroke} fill="var(--surface)" />
        <text x={150} y={93} fontSize={9.5} {...text}>Platform</text>
        <text x={50} y={43} fontSize={8} {...text}>Hospitals</text>
        <text x={50} y={143} fontSize={8} {...text}>Pros</text>
        <text x={250} y={93} fontSize={8} {...text}>Vendors</text>
      </svg>
    );
  return (
    <svg viewBox="0 0 300 180" role="img" aria-label={`${label}: form, service and data flow`} className="h-auto w-full max-w-[340px]">
      <rect x={20} y={30} width={90} height={120} rx={8} {...stroke} fill="var(--surface)" />
      <rect x={190} y={30} width={90} height={120} rx={8} {...stroke} fill="var(--surface)" />
      <path d="M36 55h58M36 75h58M36 95h40M205 60h60M205 80h60M205 100h60" {...stroke} opacity={0.6} />
      <path d="M110 90h80" className="flow" {...stroke} />
      <text x={65} y={135} fontSize={10} {...text}>Forms</text>
      <text x={235} y={135} fontSize={10} {...text}>Data</text>
    </svg>
  );
}
