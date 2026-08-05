import { cn } from "@/lib/utils";

export function SectionHeader({ eyebrow, title, description, align = "left", className }: { eyebrow: string; title: React.ReactNode; description?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p className="mb-5 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-violet">{eyebrow}</p>
      <h2 className="font-display text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[0.9] tracking-[-0.08em]">{title}</h2>
      {description ? <p className="mt-7 text-base leading-8 text-muted">{description}</p> : null}
    </div>
  );
}
