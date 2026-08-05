"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({ children, className, intensity = 8 }: { children: React.ReactNode; className?: string; intensity?: number }) {
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const glowX = useMotionValue("50%");
  const glowY = useMotionValue("50%");

  function handleMove(event: ReactPointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - y) * intensity);
    rotateY.set((x - 0.5) * intensity);
    glowX.set(`${x * 100}%`);
    glowY.set(`${y * 100}%`);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
    glowX.set("50%");
    glowY.set("50%");
  }

  return (
    <motion.article className={cn("relative transform-gpu overflow-hidden", className)} onPointerMove={handleMove} onPointerLeave={reset} style={{ rotateX, rotateY, transformPerspective: 900, "--glow-x": glowX, "--glow-y": glowY } as React.CSSProperties}>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--glow-x) var(--glow-y), rgba(108,71,255,.16), transparent 34%)" }} />
      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
