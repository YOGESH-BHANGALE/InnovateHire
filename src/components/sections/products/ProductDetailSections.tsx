"use client";

import Image from "next/image";
import { useId, useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ClipboardList,
  FileCheck2,
  Landmark,
  LoaderCircle,
  Mail,
  Pill,
  RefreshCw,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { submitContact } from "@/lib/contact";
import type {
  Accent,
  CareGraphDetail,
  ControlLedgerDetail,
  ProductCapability,
  ProductDetail,
  ProductDetailIcon,
  ProductSignal,
} from "@/lib/site-data";
import { cn } from "@/lib/utils";

const iconMap: Record<ProductDetailIcon, typeof CalendarDays> = {
  calendar: CalendarDays,
  records: FileCheck2,
  pharmacy: Pill,
  ledger: Landmark,
  reconcile: RefreshCw,
  report: BarChart3,
  structure: ClipboardList,
  "role-fit": ScanSearch,
  export: ArrowDownToLine,
};

const accentText: Record<Accent, string> = {
  violet: "text-violet",
  cyan: "text-cyan",
  ink: "text-ink",
};

const accentSurface: Record<Accent, string> = {
  violet: "bg-violet/10 text-violet",
  cyan: "bg-cyan/10 text-cyan",
  ink: "bg-ink/8 text-ink",
};

const accentDot: Record<Accent, string> = {
  violet: "bg-violet",
  cyan: "bg-cyan",
  ink: "bg-ink",
};

function ProductImage({ src, alt, className = "" }: { src?: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-panel border border-ink/8 bg-surface p-3", className)}>
      {src ? <Image alt={alt} className="rounded-[1.5rem] object-cover" fill priority sizes="(max-width: 1024px) 100vw, 50vw" src={src} /> : <div aria-hidden="true" className="h-full min-h-64 rounded-[1.5rem] bg-[radial-gradient(circle_at_35%_25%,rgba(255,255,255,.95),rgba(108,71,255,.28)_34%,rgba(13,13,26,.95)_80%)]" />}
      <span className="absolute bottom-6 left-6 rounded-full bg-white/85 px-3 py-2 text-[0.56rem] font-mono uppercase tracking-[0.16em] text-ink backdrop-blur">{alt}</span>
    </div>
  );
}

export function ProductDetailHero({ detail }: { detail: ProductDetail }) {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-32 md:px-12 lg:px-20 lg:pb-32" id="overview">
      <div aria-hidden="true" className="page-grid absolute inset-0 opacity-75" />
      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <Badge accent={detail.accent === "cyan" ? "cyan" : "violet"}>{detail.hero.eyebrow}</Badge>
          <h1 className="mt-8 max-w-3xl font-display text-[clamp(3.4rem,7.6vw,7rem)] font-bold leading-[0.86] tracking-[-0.08em]">
            {detail.hero.headline}
            <br />
            <span className={detail.accent === "cyan" ? "text-gradient" : "text-violet italic font-medium"}>{detail.hero.emphasis}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted">{detail.hero.description}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#cta" variant={detail.accent === "cyan" ? "ink" : "violet"}>{detail.hero.primaryCta}</Button>
            <a className="group inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em]" href={`#${detail.variant === "care-graph" ? "care-graph" : detail.variant === "control-ledger" ? "trace" : "process"}`}>
              {detail.hero.secondaryCta}
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-[0.58rem] font-mono uppercase tracking-[0.18em] text-muted">
            <span>Interaction / scroll reveal</span>
            <span>Visibility / hover inspect</span>
          </div>
        </Reveal>
        <Reveal className="relative lg:col-span-6" delay={0.12} y={0}>
          <div aria-hidden="true" className="absolute -inset-12 rounded-full bg-gradient-to-tr from-violet/10 to-cyan/10 blur-3xl" />
          <ProductImage alt={detail.hero.imageAlt} className="relative aspect-[4/3] shadow-orbital" src={detail.image} />
          <div aria-hidden="true" className="absolute -right-5 -top-5 size-20 rounded-full border border-violet/20 bg-white/50" />
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 size-16 rounded-full border border-cyan/20 bg-white/50" />
        </Reveal>
      </div>
    </section>
  );
}

export function ProductSignalStrip({ signals }: { signals: ProductSignal[] }) {
  return (
    <section className="border-y border-ink/8 bg-surface" id="signals">
      <div className="section-shell grid gap-5 px-6 py-7 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:gap-8 lg:px-20">
        {signals.map((signal) => (
          <div className="flex items-start gap-3" key={signal.label}>
            <span className={cn("mt-1.5 size-2 shrink-0 rounded-full", accentDot[signal.accent])} />
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em]">{signal.label}</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted">{signal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CareGraphVisualization({ detail }: { detail: CareGraphDetail }) {
  const [activeNode, setActiveNode] = useState<string>("provider");
  const nodePosition: Record<string, string> = {
    provider: "left-1/2 top-[14%] -translate-x-1/2",
    patient: "bottom-[14%] left-[12%]",
    pharmacy: "bottom-[14%] right-[12%]",
  };

  return (
    <div className="relative min-h-[25rem] overflow-hidden rounded-panel border border-white/10 bg-white/[0.03] p-6 md:min-h-[31rem]">
      <div aria-hidden="true" className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[min(80vw,28rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 size-[min(56vw,19rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 500 500">
        <path d="M250 95 L385 355 L115 355 Z" fill="none" stroke="rgba(108,71,255,.45)" strokeDasharray="10 10" strokeWidth="1.5" />
      </svg>
      {detail.graph.nodes.map((node) => {
        const Icon = iconMap[node.icon];
        const active = activeNode === node.id;
        return (
          <button aria-label={`Inspect ${node.label} node`} className={cn("absolute z-10 flex flex-col items-center gap-3 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-white/50 transition", nodePosition[node.id], active && "text-white")} key={node.id} onFocus={() => setActiveNode(node.id)} onMouseEnter={() => setActiveNode(node.id)} onMouseLeave={() => setActiveNode("provider")} type="button">
            <span className={cn("grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/10 transition md:size-20", active && node.accent === "violet" && "bg-violet shadow-[0_0_35px_rgba(108,71,255,.45)]", active && node.accent === "cyan" && "bg-cyan text-ink shadow-[0_0_35px_rgba(0,212,255,.45)]", active && node.accent === "ink" && "bg-white/20 shadow-[0_0_35px_rgba(255,255,255,.2)]")}>
              <Icon aria-hidden="true" className="size-7 md:size-8" />
            </span>
            {node.label}
          </button>
        );
      })}
      <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[0.56rem] font-mono uppercase tracking-[0.16em] text-white/55">
        <span className="size-1.5 rounded-full bg-emerald-400" /> Network stable: 99.8%
      </div>
    </div>
  );
}

export function CareGraphSection({ detail }: { detail: CareGraphDetail }) {
  return (
    <section className="overflow-hidden bg-ink px-6 py-28 text-white md:px-12 lg:px-20 lg:py-36" id="care-graph">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-cyan">Care graph / live system</p>
          <h2 className="mt-7 max-w-xl font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.08em]">Every handoff gets a <span className="text-cyan italic">clearer signal.</span></h2>
          <p className="mt-8 max-w-lg text-base leading-8 text-white/55">The MediHive Care Graph maps the entire medical journey, ensuring that every transition of care is documented, verified, and synchronized instantly.</p>
          <div className="relative mt-12 space-y-9">
            <div aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-px bg-white/10" />
            {detail.graph.steps.map((step) => (
              <div className="relative flex gap-6" key={step.index}>
                <span className={cn("relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/5 font-display text-lg font-bold", accentText[step.accent])}>{step.index}</span>
                <div><h3 className="font-display text-xl font-bold">{step.title}</h3><p className="mt-2 max-w-md text-sm leading-7 text-white/45">{step.description}</p></div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12} y={0}><CareGraphVisualization detail={detail} /></Reveal>
      </div>
    </section>
  );
}

export function LedgerTraceSection({ detail }: { detail: ControlLedgerDetail }) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-white md:px-12 lg:px-20 lg:py-36" id="trace">
      <div aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="section-shell grid items-start gap-16 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-cyan">Control layer / immutable</p>
          <h2 className="mt-7 max-w-md font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.86] tracking-[-0.08em]">Every number <span className="text-cyan">leaves a trace.</span></h2>
          <p className="mt-8 max-w-md text-base leading-8 text-white/55">A radical departure from static accounting. VyaparHive maps every financial movement to an immutable, cryptographically verifiable sequence.</p>
          <div className="mt-10 flex gap-12 border-t border-white/10 pt-7">{detail.trace.stats.map((stat) => <div key={stat.label}><p className="font-display text-3xl font-bold">{stat.value}</p><p className="mt-2 text-[0.56rem] uppercase tracking-[0.2em] text-white/45">{stat.label}</p></div>)}</div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {detail.trace.features.map((feature, index) => (
            <Reveal className={feature.span === "full" ? "md:col-span-2" : ""} delay={index * 0.08} key={feature.title}>
              <article className={cn("h-full rounded-panel border border-white/10 bg-white/[0.05] p-7 transition hover:-translate-y-1 hover:border-cyan/40", feature.span === "full" && "md:p-10")}>
                <div className={cn("grid size-12 place-items-center rounded-2xl", feature.accent === "cyan" ? "bg-cyan/10 text-cyan" : feature.accent === "violet" ? "bg-violet/10 text-violet" : "bg-white/10 text-white")}>
                  {feature.title === "Reconciliation" ? <RefreshCw aria-hidden="true" className="size-5" /> : feature.title === "Reporting" ? <BarChart3 aria-hidden="true" className="size-5" /> : <ShieldCheck aria-hidden="true" className="size-5" />}
                </div>
                <h3 className="mt-12 font-display text-2xl font-bold">{feature.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-white/55">{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResumeProcessSection({ detail }: { detail: Extract<ProductDetail, { variant: "career-signal" }> }) {
  return (
    <section className="overflow-hidden bg-ink px-6 py-28 text-white md:px-12 lg:px-20 lg:py-36" id="process">
      <div className="section-shell grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal>
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-cyan">System logic</p>
          <h2 className="mt-7 max-w-md font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.86] tracking-[-0.08em]">Good work deserves a clearer route.</h2>
          <p className="mt-8 max-w-md text-base leading-8 text-white/45">Bridging the visibility gap between exceptional talent and complex hiring infrastructure.</p>
        </Reveal>
        <div className="relative space-y-16 border-l border-white/10 pl-8 md:space-y-24 md:pl-14">
          {detail.process.map((step, index) => (
            <Reveal delay={index * 0.08} key={step.title}>
              <div className="relative">
                <span className={cn("absolute -left-[3.15rem] top-0 grid size-10 place-items-center rounded-full border border-white/15 bg-ink text-[0.56rem] font-bold", accentText[step.accent])}>0{index + 1}</span>
                <h3 className="font-display text-3xl font-bold md:text-4xl">{step.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-8 text-white/40">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability }: { capability: ProductCapability }) {
  const Icon = iconMap[capability.icon];
  const dark = capability.accent === "ink";
  return (
    <article className={cn("relative h-full rounded-panel border p-7 transition hover:-translate-y-1 md:p-10", dark ? "border-white/10 bg-ink text-white" : capability.accent === "cyan" ? "border-cyan/10 bg-white" : "border-violet/10 bg-surface")}>
      <div className={cn("grid size-12 place-items-center rounded-2xl", dark ? "bg-white/10 text-white" : accentSurface[capability.accent])}><Icon aria-hidden="true" className="size-5" /></div>
      <h3 className="mt-12 max-w-xl font-display text-2xl font-bold leading-[0.95] tracking-[-0.05em] md:text-3xl">{capability.title}</h3>
      <p className={cn("mt-5 max-w-xl leading-7", dark ? "text-white/50" : "text-muted")}>{capability.description}</p>
      {capability.metric ? <div className="mt-12 flex gap-10 border-t border-ink/8 pt-6">{capability.metric.map((item) => <div key={item.label}><p className={cn("font-display text-2xl font-bold", accentText[capability.accent])}>{item.value}</p><p className="mt-1 text-[0.56rem] uppercase tracking-[0.18em] text-muted">{item.label}</p></div>)}</div> : null}
    </article>
  );
}

export function ProductCapabilityBento({ capabilities }: { capabilities: ProductCapability[] }) {
  const large = capabilities.filter((capability) => capability.layout === "large");
  const stacked = capabilities.filter((capability) => capability.layout === "stacked");
  const wide = capabilities.filter((capability) => capability.layout === "wide");

  return (
    <section className="bg-white px-6 py-28 md:px-12 lg:px-20 lg:py-36" id="features">
      <div className="section-shell">
        <Reveal><Badge>Capabilities</Badge><h2 className="mt-6 max-w-2xl font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.08em]">Precision where it matters.</h2></Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {large.map((capability, index) => <Reveal className="md:col-span-7" delay={index * 0.07} key={capability.title} y={24}><CapabilityCard capability={capability} /></Reveal>)}
          {stacked.length ? <div className="flex flex-col gap-5 md:col-span-5">{stacked.map((capability, index) => <Reveal className="flex-1" delay={(index + large.length) * 0.07} key={capability.title} y={24}><CapabilityCard capability={capability} /></Reveal>)}</div> : null}
          {wide.map((capability, index) => <Reveal className="md:col-span-12" delay={(index + large.length + stacked.length) * 0.07} key={capability.title} y={24}><CapabilityCard capability={capability} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function ProductTrustRow({ items }: { items: string[] }) {
  return (
    <section className="bg-white px-6 pb-28 md:px-12 lg:px-20 lg:pb-36">
      <div className="section-shell flex flex-wrap items-center justify-center gap-x-12 gap-y-5 rounded-full bg-ink px-7 py-6 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white/55 md:gap-x-16">
        {items.map((item, index) => <span className="inline-flex items-center gap-3" key={item}><span className={cn("size-2 rounded-full", index % 2 === 0 ? "bg-violet" : "bg-cyan")} />{item}</span>)}
      </div>
    </section>
  );
}

export function ProductLeadCapture({ detail }: { detail: ProductDetail }) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      await submitContact({ name: detail.name, email, phone: "", projectType: detail.name, message: detail.cta.description });
      setStatus("success");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "We could not send your signal.");
    }
  }

  return (
    <form aria-label={`${detail.name} product inquiry`} className="w-full max-w-xl" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={inputId}>{detail.cta.inputLabel}</label>
      <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-3 sm:flex-row">
        <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
          <Mail aria-hidden="true" className="size-4 shrink-0 text-white/35" />
          <input aria-describedby={`${inputId}-help`} className="min-w-0 flex-1 bg-transparent py-3 text-base text-white outline-hidden placeholder:text-white/30" disabled={status === "submitting"} id={inputId} onChange={(event) => setEmail(event.target.value)} placeholder={detail.cta.placeholder} required type="email" value={email} />
        </div>
        <button className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-cyan disabled:cursor-wait disabled:opacity-70" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : status === "success" ? <Check aria-hidden="true" className="size-4" /> : null}
          {status === "success" ? "Signal received" : detail.cta.submitLabel}
        </button>
      </div>
      <p className="mt-4 text-[0.62rem] leading-5 text-white/35" id={`${inputId}-help`}>{detail.cta.note}</p>
      {status === "error" ? <p aria-live="polite" className="mt-3 text-sm text-red-300">{error}</p> : null}
      {status === "success" ? <p aria-live="polite" className="mt-3 text-sm text-cyan">We’ll be in touch from innovatehive.tech@gmail.com.</p> : null}
    </form>
  );
}

export function ProductDetailCta({ detail }: { detail: ProductDetail }) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-white md:px-12 lg:px-20 lg:py-40" id="cta">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(108,71,255,.24),transparent_34%),radial-gradient(circle_at_26%_76%,rgba(0,212,255,.11),transparent_30%)]" />
      <div className="section-shell relative z-10 text-center">
        <Reveal><p className="text-[0.62rem] font-bold uppercase tracking-[0.35em] text-cyan">{detail.cta.eyebrow}</p><h2 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-bold leading-[0.86] tracking-[-0.08em]">{detail.cta.title}</h2><p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50">{detail.cta.description}</p><div className="mt-10 flex justify-center"><ProductLeadCapture detail={detail} /></div></Reveal>
      </div>
    </section>
  );
}

export function ProductDetailPage({ detail }: { detail: ProductDetail }) {
  return (
    <main>
      <ProductDetailHero detail={detail} />
      <ProductSignalStrip signals={detail.signals} />
      {detail.variant === "care-graph" ? <CareGraphSection detail={detail} /> : null}
      {detail.variant === "control-ledger" ? <LedgerTraceSection detail={detail} /> : null}
      {detail.variant === "career-signal" ? <ResumeProcessSection detail={detail} /> : null}
      <ProductCapabilityBento capabilities={detail.capabilities} />
      <ProductTrustRow items={detail.trustItems} />
      <ProductDetailCta detail={detail} />
    </main>
  );
}
