import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProcessTimeline, ServiceExplorer, TechStackGrid } from "@/components/sections/services/ServiceSections";

export const metadata: Metadata = { title: "Services", description: "Digital systems, AI workflows, and growth foundations built around the next useful decision." };

export default function ServicesPage() {
  return <main><PageIntro eyebrow="Capabilities" title={<>Systems that <span className="text-gradient">compound.</span></>} description="A focused service architecture for turning a useful idea into a resilient digital advantage." /><ServiceExplorer /><ProcessTimeline /><TechStackGrid /></main>;
}
