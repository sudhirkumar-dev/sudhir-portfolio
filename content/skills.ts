export const skills: Record<string, string[]> = {
  "Backend development": [
    "C#", ".NET / ASP.NET Core", "Express.js", "REST API design", "Dapper", "Entity Framework Core",
    "SQL and data access", "Swagger / OpenAPI", "Modular application design", "SOLID and Clean Architecture concepts",
  ],
  "Frontend development": [
    "JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "React Hook Form + Yup",
    "Material UI", "Tailwind CSS", "Responsive UI", "Framer Motion",
  ],
  Databases: [
    "PostgreSQL", "MongoDB", "SQL query design", "Indexing fundamentals", "Connection pooling", "Relational data modeling",
  ],
  "Deployment and tools": [
    "Git", "GitHub / GitLab", "Docker", "GitHub Actions", "CI/CD workflows", "Vercel", "cPanel deployments",
    "AWS (S3, ECR, ECS, Fargate): learning and practice",
  ],
};

export const howIWork = [
  ["Across the boundaries", "Thinking through frontend, API and database together instead of in isolation."],
  ["Ambiguity to steps", "Turning loose business requirements into concrete implementation steps."],
  ["Adaptable", "Moving between SaaS, insurance, health-tech and commerce domains."],
  ["Practical", "Keeping solutions simple instead of over-engineering them."],
  ["Investigative", "Digging into deployment and integration problems until they make sense."],
  ["Always learning", "Picking up unfamiliar technologies when the product requires them."],
] as const;
