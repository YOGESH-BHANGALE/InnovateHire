import type { Metadata } from "next";
import { FeatureWalkthrough, ProductComparison, ProductCta, ProductsHero } from "@/components/sections/products/ProductSections";

export const metadata: Metadata = { title: "Products", description: "Explore the InnovateHive product suite: MediHive, VyaparHive, and ResumeHive." };

export default function ProductsPage() { return <main><ProductsHero /><FeatureWalkthrough /><ProductComparison /><ProductCta /></main>; }
