"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { formatCounter } from "@/lib/utils";

export function AnimatedCounter({ value, suffix = "", pad = 2 }: { value: number; suffix?: string; pad?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.65 });
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!visible) return;
    if (reduceMotion) {
      setCurrent(value);
      return;
    }
    const startedAt = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / 2000, 1);
      setCurrent(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, value, visible]);

  return <span ref={ref}>{formatCounter(current, pad)}{suffix}</span>;
}
