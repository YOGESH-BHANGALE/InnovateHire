"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight, BrainCircuit, ChartNoAxesCombined, Code2, Globe2, Palette, Sparkles, Smartphone } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { caseStudies, products, services, testimonials } from "@/lib/site-data";

const HeroScene = dynamic(() => import("@/components/three/HeroScene").then((module) => module.HeroScene), {
  ssr: false,
  loading: () => <div aria-hidden="true" className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_36%_26%,rgba(255,255,255,.98),rgba(108,71,255,.35)_30%,rgba(13,13,26,.9)_72%)] opacity-75 blur-sm" />,
});

const iconMap: Record<(typeof services)[number]["icon"], LucideIcon> = {
  brain: BrainCircuit,
  globe: Globe2,
  code: Code2,
  sparkles: Sparkles,
  smartphone: Smartphone,
  chart: ChartNoAxesCombined,
  palette: Palette,
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:min-h-screen lg:px-20" id="home">
      <div aria-hidden="true" className="page-grid pointer-events-none absolute inset-0" />
      <div className="section-shell relative z-10 grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,.9fr)] lg:gap-0">
        <Reveal className="max-w-2xl">
          <p className="mb-6 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-violet">Digital systems / India → beyond</p>
          <h1 className="max-w-[12ch] font-display text-[clamp(3.8rem,7.6vw,7.25rem)] font-bold leading-[0.86] tracking-[-0.08em]">
            Digital products that turn <span className="text-gradient">attention into action.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-muted md:text-lg">Websites, apps, AI services, and search foundations for teams moving from idea to adoption.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Button href="/contact">Plan the next move</Button>
            <Link className="group inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.14em]" href="#services">See the capabilities <ArrowDownRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[0.58rem] font-mono uppercase tracking-[0.18em] text-muted"><span>120+ deployments</span><span>49+ trust signals</span><span>motion: restrained</span></div>
        </Reveal>
        <Reveal className="relative flex min-h-[380px] items-center justify-center lg:-ml-20 lg:min-h-[620px] xl:-ml-32" delay={0.16} y={0}>
          <div aria-hidden="true" className="absolute h-[min(40vw,34rem)] w-[min(40vw,34rem)] rounded-full border border-violet/15" />
          <div aria-hidden="true" className="absolute h-[min(34vw,29rem)] w-[min(34vw,29rem)] rounded-full border border-cyan/20 [transform:rotate(22deg)]" />
          <div aria-hidden="true" className="absolute h-[min(26vw,23rem)] w-[min(26vw,23rem)] rounded-full border border-violet/20 [transform:rotate(-18deg)]" />
          <div className="relative size-[min(78vw,34rem)]"><HeroScene /></div>
          <div className="absolute bottom-2 right-4 rounded-lg border border-ink/10 bg-white/80 px-4 py-3 text-[0.56rem] font-mono uppercase tracking-[0.16em] text-muted backdrop-blur">cursor-responsive / live system</div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.58rem] font-bold uppercase tracking-[0.45em] text-ink/50"><span>Scroll to compound</span><span className="h-12 w-px bg-gradient-to-b from-violet to-transparent" /></div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { value: 6, label: "Core capabilities", context: "Website · app · SEO · AI · design · software" },
    { value: 3, label: "Product systems", context: "MediHive · VyaparHive · ResumeHive", offset: true },
    { value: null, label: "Operating model", context: "India / Remote · built to travel", text: "IN", offset: true },
    { value: null, label: "Current field note", context: "Designing for the next useful thing", text: "2026", suffix: "_FN" },
  ];

  return <section className="relative px-6 py-28 md:px-12 lg:px-20" id="stats"><div className="section-shell grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4">{stats.map((stat) => <Reveal className={stat.offset ? "lg:mt-16" : ""} key={stat.label}>{stat.value !== null ? <p className="font-display text-[clamp(3.2rem,6vw,5rem)] font-bold leading-none tracking-[-0.08em]"><AnimatedCounter value={stat.value} /></p> : <p className="font-display text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.08em]">{stat.text}<span className="text-ink/25">{stat.suffix}</span></p>}<p className="mt-3 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-muted">{stat.label}</p><p className="mt-2 text-[0.62rem] text-muted">{stat.context}</p></Reveal>)}</div></section>;
}

export function ServicesSection() {
  const feature = services[0];
  return <section className="relative bg-surface px-6 py-32 md:px-12 lg:px-20 lg:py-40" id="services"><div className="section-shell"><div className="mb-16 flex flex-col justify-between gap-8 md:mb-24 md:flex-row md:items-end"><SectionHeader eyebrow="Capabilities" title={<>Systems that<br /><span className="text-muted">compound.</span></>} /><p className="max-w-sm text-base leading-8 text-muted">A focused service architecture for turning a useful idea into a resilient digital advantage.</p></div><div className="grid gap-6 md:grid-cols-12"><Reveal className="md:col-span-8" y={30}><article className="relative min-h-[480px] overflow-hidden rounded-panel bg-gradient-to-br from-violet to-cyan p-8 text-white md:p-12"><div className="relative z-10 flex h-full flex-col justify-between"><div><Badge accent="ink" className="border-white/25 bg-white/15 text-white">{feature.eyebrow}</Badge><h3 className="mt-10 max-w-xl font-display text-4xl font-bold leading-[0.95] tracking-[-0.06em] md:text-6xl">AI services for<br /><span className="text-white/70">decisions ahead.</span></h3><p className="mt-7 max-w-lg text-lg leading-8 text-white/80">{feature.description}</p></div><div className="flex flex-wrap items-center gap-5"><Button href="/contact" variant="soft">Scope an AI workflow</Button><span className="text-[0.62rem] font-mono uppercase tracking-[0.18em] text-white/70">LLMs · RAG · automation</span></div></div><div aria-hidden="true" className="absolute -right-16 -top-16 size-[27rem] rounded-full border border-white/20 [transform:rotate(45deg)]" /></article></Reveal>{services.slice(1).map((service, index) => { const Icon = iconMap[service.icon]; return <Reveal className={index === 0 ? "md:col-span-4" : index === 1 ? "md:col-span-5" : "md:col-span-7"} delay={(index + 1) * 0.08} key={service.slug}><TiltCard className="group h-full rounded-panel border border-ink/8 bg-white p-8 md:p-10"><Icon aria-hidden="true" className={service.accent === "cyan" ? "mb-14 size-7 text-cyan" : "mb-14 size-7 text-violet"} /><h3 className="max-w-sm font-display text-3xl font-bold leading-[0.95] tracking-[-0.05em]">{service.title}</h3><p className="mt-4 max-w-lg leading-7 text-muted">{service.description}</p><span className="absolute bottom-7 right-8 text-[0.62rem] font-mono uppercase tracking-[0.16em] text-muted">/{String(index + 1).padStart(2, "0")}</span></TiltCard></Reveal>; })}</div></div></section>;
}

export function MissionSection() {
  return <section className="relative overflow-hidden bg-ink px-6 py-32 text-white md:px-12 lg:px-20 lg:py-40" id="about"><div className="section-shell grid items-center gap-20 lg:grid-cols-[.9fr_1.1fr]"><Reveal className="relative z-10"><p className="mb-7 text-[0.62rem] font-bold uppercase tracking-[0.35em] text-violet">The mission</p><h2 className="font-display text-[clamp(3.2rem,7vw,6rem)] font-bold leading-[0.86] tracking-[-0.08em]">We turn ambitious ideas into systems <span className="text-cyan">people can feel.</span></h2><p className="mt-9 max-w-lg text-base leading-8 text-white/55">Technology should not only work. It should make the next decision clearer, the next interaction warmer, and the next release easier to trust.</p><div className="mt-12 flex gap-12"><div><p className="font-display text-4xl font-bold">6</p><p className="mt-2 text-[0.56rem] uppercase tracking-[0.2em] text-white/45">Core capabilities</p></div><div><p className="font-display text-4xl font-bold">3</p><p className="mt-2 text-[0.56rem] uppercase tracking-[0.2em] text-white/45">Product systems</p></div></div></Reveal><Reveal className="relative flex min-h-[430px] items-center justify-center" delay={0.16} y={0}><div className="relative size-[min(78vw,32rem)] rounded-full border border-white/15"><div className="absolute inset-10 rounded-full border border-white/10" /><div className="absolute inset-20 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(0,212,255,.35),rgba(108,71,255,.18)_36%,rgba(255,255,255,.04)_70%)] shadow-[0_0_100px_rgba(108,71,255,.18)]" /><div className="absolute inset-[28%] rounded-full border border-dashed border-white/40 [transform:rotate(14deg)]" /><span className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_30px_#00d4ff]" /></div><span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.56rem] font-mono uppercase tracking-[0.22em] text-white/40">pinned orb / mission signal</span></Reveal></div></section>;
}

export function ProductEcosystemSection() {
  return <section className="relative bg-white px-6 py-32 md:px-12 lg:px-20 lg:py-40" id="ecosystem"><div className="section-shell"><SectionHeader align="center" eyebrow="Product ecosystem" title={<>The InnovateHive<br />suite.</>} description="Proprietary products built around real-world friction: care, commerce, and career momentum." /><div className="relative mt-28"><div aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-violet via-cyan to-violet md:block" /><div className="space-y-28 md:space-y-40">{products.map((product, index) => <Reveal className="relative grid items-center gap-10 md:grid-cols-[1fr_80px_1fr]" key={product.slug}><div className={index % 2 === 1 ? "order-3 text-left md:order-1" : "text-left md:text-right"}><p className={product.accent === "cyan" ? "mb-4 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-cyan" : "mb-4 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-violet"}>{product.category}</p><h3 className="font-display text-4xl font-bold tracking-[-0.06em] md:text-5xl">{product.name}</h3><p className="mt-5 text-base leading-8 text-muted">{product.description}</p><Link className="mt-6 inline-flex items-center text-[0.62rem] font-bold uppercase tracking-[0.18em]" href="/products">View product signal <ArrowUpRight aria-hidden="true" className="ml-2 size-3.5" /></Link></div><div className={product.accent === "cyan" ? "relative z-10 order-2 mx-auto grid size-11 place-items-center rounded-full border border-cyan bg-white" : "relative z-10 mx-auto grid size-11 place-items-center rounded-full border border-violet bg-white"}><span className={product.accent === "cyan" ? "size-2.5 rounded-full bg-cyan" : "size-2.5 rounded-full bg-violet"} /></div><div className={index % 2 === 1 ? "order-1 md:order-3" : ""}><GlassPanel className="relative aspect-[16/9] overflow-hidden bg-surface p-3"><Image alt={`${product.name} product interface preview`} className="rounded-[1.5rem] object-cover" fill sizes="(max-width: 768px) 100vw, 50vw" src={product.image ?? "https://picsum.photos/960/540?grayscale"} /><span className="absolute bottom-6 left-6 rounded-full bg-white/85 px-3 py-2 text-[0.56rem] font-mono uppercase tracking-[0.16em] text-ink backdrop-blur">{product.name} / live product view</span></GlassPanel></div></Reveal>)}</div></div></div></section>;
}

export function TestimonialsSection() {
  const repeated = [...testimonials, ...testimonials];
  return <section className="relative overflow-hidden bg-surface py-28 md:py-36" id="testimonials"><div className="section-shell mb-14 text-center"><p className="mb-4 text-[0.62rem] font-bold uppercase tracking-[0.35em] text-muted">Validation</p><h2 className="font-display text-4xl font-bold tracking-[-0.06em] md:text-5xl">Proof that travels.</h2></div><div className="marquee-row overflow-hidden"><div className="marquee-track flex gap-5 px-5">{repeated.map((item, index) => <GlassPanel className="w-[340px] shrink-0 p-7" key={`${item.initials}-${index}`}><p className="text-sm leading-7">“{item.quote}”</p><div className="mt-7 flex items-center justify-between gap-4"><div><p className="text-xs font-bold">{item.name}</p><p className="mt-1 text-[0.56rem] uppercase tracking-[0.16em] text-muted">{item.role}</p></div><span className={item.accent === "cyan" ? "grid size-9 place-items-center rounded-full bg-cyan text-[0.62rem] font-bold text-ink" : item.accent === "ink" ? "grid size-9 place-items-center rounded-full bg-ink text-[0.62rem] font-bold text-white" : "grid size-9 place-items-center rounded-full bg-violet text-[0.62rem] font-bold text-white"}>{item.initials}</span></div></GlassPanel>)}</div></div><div className="marquee-row mt-5 overflow-hidden"><div className="marquee-track reverse flex gap-5 px-5">{["Digital products · AI workflows · growth systems", "Made in India. Built to travel well.", "Careful systems for ambitious teams.", "Digital products · AI workflows · growth systems", "Made in India. Built to travel well.", "Careful systems for ambitious teams."].map((text, index) => <div className="glass-dark w-[340px] shrink-0 rounded-2xl bg-ink p-7 text-white" key={`${text}-${index}`}><p className="text-sm leading-7 text-white/80">{text}</p><p className={index % 2 === 1 ? "mt-7 text-[0.56rem] font-mono uppercase tracking-[0.2em] text-violet" : "mt-7 text-[0.56rem] font-mono uppercase tracking-[0.2em] text-cyan"}>signal / {String((index % 3) + 1).padStart(2, "0")}</p></div>)}</div></div></section>;
}

export function ContactCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, projectType: "General inquiry" }) }).catch(() => undefined);
  }

  return <section className="relative overflow-hidden bg-ink px-6 py-32 text-white md:px-12 lg:px-20 lg:py-40" id="cta"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(108,71,255,.22),transparent_34%),radial-gradient(circle_at_26%_76%,rgba(0,212,255,.1),transparent_30%)]" /><div className="section-shell relative z-10"><div className="grid items-end gap-16 lg:grid-cols-[1.15fr_.85fr]"><Reveal><p className="mb-7 text-[0.62rem] font-bold uppercase tracking-[0.35em] text-cyan">Initiate connection</p><h2 className="font-display text-[clamp(3.4rem,8vw,7rem)] font-bold leading-[0.86] tracking-[-0.08em]">Let’s build<br /><span className="text-cyan">what’s next.</span></h2><p className="mt-9 max-w-lg text-base leading-8 text-white/55">Bring the rough idea, the stubborn constraint, or the next product bet. We’ll help turn it into a system with signal.</p></Reveal><Reveal delay={0.12}><form aria-label="Start a project form" className="glass-dark rounded-2xl p-6" onSubmit={handleSubmit}><label className="mb-3 block text-[0.62rem] font-bold uppercase tracking-[0.2em] text-white/60" htmlFor="project-email">Your work email</label><div className="flex items-center gap-3 border-b border-white/20 pb-3 focus-within:border-cyan"><input autoComplete="email" className="min-w-0 flex-1 bg-transparent text-base text-white outline-hidden placeholder:text-white/35" id="project-email" onChange={(event) => setEmail(event.target.value)} placeholder="name@company.com" required type="email" value={email} /><button aria-label="Send project inquiry" className="grid size-12 shrink-0 place-items-center rounded-full bg-violet text-white transition hover:scale-105" type="submit"><ArrowUpRight aria-hidden="true" className="size-5" /></button></div><p className="mt-4 text-[0.62rem] leading-5 text-white/45">We’ll reply from innovatehive.tech@gmail.com. No noise, just a useful next step.</p>{submitted ? <p aria-live="polite" className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-cyan">Signal received / we’ll be in touch.</p> : null}</form></Reveal></div><div className="mt-24 flex flex-col gap-7 border-t border-white/10 pt-7 text-[0.62rem] uppercase tracking-[0.18em] text-white/45 md:flex-row md:items-center md:justify-between"><span>InnovateHive / digital systems studio</span><a className="transition hover:text-white" href="mailto:innovatehive.tech@gmail.com">innovatehive.tech@gmail.com</a><a className="transition hover:text-white" href="tel:+918767555945">+91 87675 55945</a></div></div></section>;
}

export function HomePage() {
  return <main><HeroSection /><StatsSection /><ServicesSection /><MissionSection /><ProductEcosystemSection /><TestimonialsSection /><ContactCta /></main>;
}

export { caseStudies };
