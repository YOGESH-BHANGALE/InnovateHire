import { Badge } from "./Badge";
import { Reveal } from "./Reveal";

export function PageIntro({ eyebrow, title, description, dark = false, children }: { eyebrow: string; title: React.ReactNode; description: string; dark?: boolean; children?: React.ReactNode }) {
  return <section className={dark ? "relative overflow-hidden bg-ink px-6 pb-24 pt-40 text-white md:px-12 lg:px-20 lg:pb-32" : "relative overflow-hidden bg-surface px-6 pb-24 pt-40 md:px-12 lg:px-20 lg:pb-32"} data-gsap-reveal><div aria-hidden="true" className={dark ? "page-grid absolute inset-0 opacity-10" : "page-grid absolute inset-0"} /><div className="section-shell relative z-10"><Reveal><Badge accent={dark ? "cyan" : "violet"}>{eyebrow}</Badge><h1 className="mt-8 max-w-5xl font-display text-[clamp(3.6rem,8vw,7rem)] font-bold leading-[0.86] tracking-[-0.08em]">{title}</h1><p className={dark ? "mt-8 max-w-2xl text-lg leading-8 text-white/60" : "mt-8 max-w-2xl text-lg leading-8 text-muted"}>{description}</p>{children}</Reveal></div></section>;
}
