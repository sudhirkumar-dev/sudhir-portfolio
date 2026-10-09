/**
 * Central site configuration for Sudhir Kumar Kalivarapu.
 */
export const site = {
  name: "Sudhir Kumar Kalivarapu",
  shortName: "Sudhir Kalivarapu",
  title: ".NET Full Stack Developer",
  location: "India | IST",
  /** Production domain used for canonical URLs, sitemap and Open Graph. Set NEXT_PUBLIC_SITE_URL or edit here. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://sudhirkalivarapu.dev",
  description:
    "Full stack developer building .NET APIs, PostgreSQL-backed products and React interfaces. Experienced with Communitify Info Technologies, Kootami, and LMVIT.",
  email: "kalivarapuskumar@gmail.com",
  phone: "8106039548",
  phoneFormatted: "+91 81060 39548",
  linkedin: "https://www.linkedin.com/in/sudhir-kalivarapu-b63155236/",
  github: null as string | null,
  /** Google Drive link for direct redirection */
  resumeUrl:
    "https://drive.google.com/file/d/18bZyotOCpwhg6PsdgQC0HFHsTPLvGDh0/view?usp=sharing",
  /** Local uploaded resume file in resume folder for direct download */
  resumeDownload: "/Sudhir_Kumar_Kalivarapu_Resume.pdf",
  /** Primary resume redirection URL */
  resume:
    "https://drive.google.com/file/d/18bZyotOCpwhg6PsdgQC0HFHsTPLvGDh0/view?usp=sharing",
  /** Shows the "Open to opportunities" pill only when true. */
  openToWork: true,
  positioning:
    "I build practical web products, reliable APIs, and clean user experiences that turn business requirements into working software.",
} as const;
