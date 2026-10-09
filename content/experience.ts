export type Experience = { org: string; when: string; note: string; tag?: string };

// Single source of truth for the timeline.
export const experience: Experience[] = [
  {
    org: "Communitify Info Technologies Pvt Ltd",
    when: "August 2024 – May 2026",
    note: "Full-stack development across .NET APIs, React interfaces, and PostgreSQL data architecture. Built core modules and backend services for Kootami and related product platforms.",
  },
  {
    org: "LMVIT",
    when: "June 2023 – July 2024",
    note: "Health, vehicle and insurance platform. Full-stack development across APIs, database-driven features and user interfaces.",
  },
  {
    org: "Imaginnovate",
    when: "November 2021 – June 2022",
    note: "Internship in software development and full-stack engineering.",
    tag: "Internship",
  },
];
