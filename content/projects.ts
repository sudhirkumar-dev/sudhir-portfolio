export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  context: string;
  problem: string;
  contribution: string[];
  /** Only list technologies you can verify for this project. Empty array shows a placeholder. */
  stack: string[];
  productAreas?: string;
  workflow: { title: string; steps: string[] };
  decisions: { title: string; body: string }[];
  /** Shown when `decisions` is empty, as a reminder to add a real engineering challenge. */
  decisionsTodo?: string;
  outcome: string;
  architecture?: boolean;
  links?: { live?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "kootami",
    name: "Kootami",
    category: "SaaS / Association management",
    status: "Product, contributed as part of a team",
    summary:
      "An association and subscription management platform for associations and NGOs that have outgrown WhatsApp groups and spreadsheets.",
    context:
      "Kootami helps associations and NGOs run their operations in one place: memberships and subscriptions, events, fundraising, voting, blood-donation coordination and child-association management.",
    problem:
      "Associations often run memberships, subscriptions, events and communication across disconnected tools such as chat groups and spreadsheets. That makes administration repetitive, harder to keep consistent, and harder to hand over between volunteers.",
    contribution: [
      "Built backend APIs in .NET.",
      "Built React interfaces and connected UI workflows to those APIs.",
      "Wrote SQL-driven data access against PostgreSQL using Dapper.",
      "Worked in a modular codebase with organization, administration and events-related API areas.",
    ],
    stack: ["C#", "ASP.NET Core", "React", "PostgreSQL", "Dapper", "REST APIs"],
    productAreas:
      "Membership and subscriptions, events, fundraising, voting, blood-donation coordination, child associations.",
    workflow: {
      title: "A representative journey: creating or updating a record",
      steps: [
        "An administrator opens a membership or event screen in the React app and submits a form.",
        "The UI sends a request to a .NET REST endpoint in the relevant API module.",
        "The API validates the input and runs parameterized SQL through Dapper.",
        "PostgreSQL persists the data, and the API returns a response the UI renders.",
      ],
    },
    decisions: [
      {
        title: "SQL-first data access with Dapper",
        body: "Hand-written SQL keeps queries explicit and easy to tune for relational membership and event data. The trade-off is writing more mapping code than a full ORM would need.",
      },
      {
        title: "API modules organized around product areas",
        body: "Grouping endpoints by organization, administration and events keeps each module's responsibility clear and makes the contract easier for the frontend to follow.",
      },
      {
        title: "A clear frontend and backend boundary",
        body: "The React app owns presentation and form state. The API owns validation, business rules and persistence.",
      },
    ],
    outcome:
      "Delivered working membership and event-administration workflows that span UI, API and database. No usage, customer or performance metrics are claimed. The modules were built by a team, not by me alone.",
    architecture: true,
  },
  {
    slug: "tera-connects",
    name: "Tera Connects",
    category: "Health-tech / Staffing",
    status: "Product, contributed during my time with the company",
    summary:
      "A health-tech and staffing aggregation product connecting hospitals, healthcare professionals and vendors across India.",
    context:
      "Tera Connects aggregates healthcare staffing so hospitals, healthcare professionals and vendors can find and work with each other across India.",
    problem:
      "A product with several user types needs different views of related data and different workflows for each, so roles and the relationships between them have to be modeled carefully.",
    contribution: [
      "Contributed to product development from August 2024 to May 2025.",
      "Worked on application features and integrations within my responsibilities.",
    ],
    stack: [],
    workflow: {
      title: "A representative journey across user types",
      steps: [
        "A hospital, professional or vendor signs in.",
        "The interface presents the workflows relevant to that role.",
        "The backend connects each role's data to the related records of the others.",
      ],
    },
    decisions: [],
    decisionsTodo:
      "Add one real engineering challenge from this project in content/projects.ts, for example how roles or integrations were handled.",
    outcome:
      "Contributed to a multi-sided product. No metrics are claimed, and I did not own the whole platform.",
  },
  {
    slug: "lmvit",
    name: "LMVIT Platform",
    category: "Business applications / Insurance",
    status: "Platform, full-stack contributor",
    summary:
      "A platform covering health, vehicle and insurance-related workflows, where I worked across APIs, database-driven features and the UI.",
    context:
      "LMVIT is a platform involving health, vehicle and insurance-related workflows.",
    problem:
      "Insurance-style workflows are form-heavy and data-heavy. Users submit details, back-office flows process them, and the data must stay consistent from the interface down to the database.",
    contribution: [
      "Full-stack development within the platform from June 2023 to July 2024.",
      "API and application feature development.",
      "Database-driven functionality and integration between user interfaces and backend services.",
    ],
    stack: [],
    workflow: {
      title: "A representative journey: submitting and processing details",
      steps: [
        "A user enters details in a form in the interface.",
        "A backend service validates and processes the request.",
        "The data is persisted and reflected back in the interface.",
      ],
    },
    decisions: [],
    decisionsTodo:
      "Add one real workflow and a genuine engineering challenge from this project in content/projects.ts.",
    outcome:
      "Shipped database-driven features end to end. No customer, policy or transaction numbers are claimed.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
