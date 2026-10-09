const box = { fill: "#15151c", stroke: "#2d2d38", strokeWidth: 1.5 } as const;
const t = { fontFamily: "Inter Variable, sans-serif", textAnchor: "middle" } as const;

export function ArchitectureDiagram() {
  const nodes = [
    { x: 10, w: 130, a: "Browser", b: "Client requests" },
    { x: 200, w: 130, a: "React UI", b: "Workflows & forms" },
    { x: 390, w: 140, a: ".NET REST API", b: "Domain logic & auth" },
    { x: 590, w: 150, a: "PostgreSQL", b: "SQL via Dapper" },
  ];
  return (
    <figure>
      <div className="overflow-x-auto rounded-2xl border border-line bg-surface/90 p-6 backdrop-blur">
        <svg viewBox="0 0 760 170" role="img" aria-label="Simplified architecture: browser to React frontend to .NET REST API to PostgreSQL" className="h-auto w-full min-w-[560px]">
          <defs>
            <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
              <path d="M0 0L8 4L0 8z" fill="#10b981" />
            </marker>
          </defs>
          {nodes.map((n) => (
            <g key={n.a}>
              <rect x={n.x} y={45} width={n.w} height={75} rx={12} {...box} />
              <text x={n.x + n.w / 2} y={80} fontSize={13.5} fontWeight="600" fill="#f4f4f7" {...t}>{n.a}</text>
              <text x={n.x + n.w / 2} y={100} fontSize={10.5} fill="#9ca3af" {...t}>{n.b}</text>
            </g>
          ))}
          <g stroke="#10b981" strokeWidth={1.8} markerEnd="url(#arrow)">
            <path d="M140 82h58" className="flow" />
            <path d="M330 82h58" className="flow" />
            <path d="M530 82h58" className="flow" />
          </g>
        </svg>
      </div>
      <figcaption className="mt-2.5 text-xs text-mute">Simplified, conceptual architectural dataflow.</figcaption>
    </figure>
  );
}
