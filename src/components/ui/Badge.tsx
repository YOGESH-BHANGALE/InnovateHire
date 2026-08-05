import { cn } from "@/lib/utils";
import type { Accent } from "@/lib/site-data";

export function Badge({ children, accent = "violet", className }: { children: React.ReactNode; accent?: Accent; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.18em]", accent === "cyan" ? "border-cyan/30 bg-cyan/10 text-cyan" : accent === "ink" ? "border-ink/15 bg-ink/5 text-ink" : "border-violet/25 bg-violet/8 text-violet", className)}>
      <span className={cn("size-1.5 rounded-full", accent === "cyan" ? "bg-cyan" : accent === "ink" ? "bg-ink" : "bg-violet")} />
      {children}
    </span>
  );
}
