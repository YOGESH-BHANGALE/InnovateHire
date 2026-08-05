import type { Metadata } from "next";
import { CaseStudyGrid, PortfolioCta } from "@/components/sections/case-studies/CaseStudySections";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = { title: "Case Studies", description: "Selected product, healthcare, business ops, career, and growth systems by InnovateHive." };

export default function CaseStudiesPage() { return <main><PageIntro eyebrow="Selected signal" title={<>Work that makes <span className="text-gradient">momentum visible.</span></>} description="A few systems, interfaces, and growth foundations built for teams moving from idea to adoption." /><CaseStudyGrid /><PortfolioCta /></main>; }
