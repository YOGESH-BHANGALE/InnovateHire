import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/site-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";

export function generateStaticParams() { return caseStudies.map((study) => ({ slug: study.slug })); }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = caseStudies.find((item) => item.slug === params.slug);
  return study ? { title: study.title, description: study.summary } : { title: "Case study" };
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);
  if (!study) notFound();
  return <main><section className="relative overflow-hidden bg-ink px-6 pb-28 pt-40 text-white md:px-12 lg:px-20 lg:pb-40"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(108,71,255,.25),transparent_35%),radial-gradient(circle_at_22%_80%,rgba(0,212,255,.13),transparent_32%)]" /><div className="section-shell relative z-10"><Badge accent="cyan">{study.category} / {study.year}</Badge><h1 className="mt-8 max-w-5xl font-display text-[clamp(3.6rem,8vw,7rem)] font-bold leading-[0.86] tracking-[-0.08em]">{study.title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">{study.summary}</p><div className="mt-9 flex flex-wrap gap-3">{study.tags.map((tag) => <span className="rounded-full border border-white/15 px-4 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-white/70" key={tag}>{tag}</span>)}</div></div></section><section className="bg-white px-6 py-28 md:px-12 lg:px-20 lg:py-40"><div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_.8fr]"><div className="min-h-[26rem] rounded-panel bg-surface p-8"><div className="flex h-full items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-violet/20 via-white to-cyan/20"><div className="text-center"><p className="font-display text-7xl font-bold tracking-[-0.09em] text-ink">{study.metric}</p><p className="mt-4 text-[0.62rem] uppercase tracking-[0.2em] text-muted">case study signal / 01</p></div></div></div><GlassPanel className="flex min-h-[26rem] flex-col justify-between p-8"><div><p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-violet">What changed</p><h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.07em]">A clearer system for the next useful decision.</h2><p className="mt-6 leading-8 text-muted">We shaped the product around the moments that matter most, then gave every supporting layer a clearer job.</p></div><Button href="/contact" variant="ink">Build something with signal</Button></GlassPanel></div></section><section className="bg-surface px-6 pb-32 md:px-12 lg:px-20"><div className="section-shell flex flex-wrap items-center justify-between gap-6 border-t border-ink/10 pt-7"><a className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted hover:text-violet" href="/case-studies">All case studies <ArrowUpRight aria-hidden="true" className="size-4" /></a><a className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-muted hover:text-violet" href="/contact">Start your case study <ArrowUpRight aria-hidden="true" className="size-4" /></a></div></section></main>;
}
