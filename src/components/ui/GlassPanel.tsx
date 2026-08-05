import { cn } from "@/lib/utils";

export function GlassPanel({ children, className = "", dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  return <div className={cn(dark ? "glass-dark" : "glass-panel", "rounded-panel", className)}>{children}</div>;
}
