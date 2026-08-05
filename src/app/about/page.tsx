import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { AboutMission, CompanyTimeline, TeamGrid, ValuesGrid } from "@/components/sections/about/AboutSections";

export const metadata: Metadata = { title: "About", description: "The mission, people, and principles behind InnovateHive." };

export default function AboutPage() {
  return <main><PageIntro eyebrow="The mission" title={<>We turn ambitious ideas into systems <span className="text-gradient">people can feel.</span></>} description="Technology should not only work. It should make the next decision clearer, the next interaction warmer, and the next release easier to trust." dark /><AboutMission /><CompanyTimeline /><TeamGrid /><ValuesGrid /></main>;
}
