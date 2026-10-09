import type { Metadata } from "next";
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
  HowIWorkSection,
  ContactSection,
} from "@/components/sections/Sections";
import { TechMarquee } from "@/components/ui/TechMarquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, experience timeline, skills and working style of Sudhir Kumar Kalivarapu, a .NET full stack developer.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="pt-8">
      <AboutSection />
      <TechMarquee />
      <ExperienceSection />
      <SkillsSection />
      <HowIWorkSection />
      <ContactSection />
    </div>
  );
}
