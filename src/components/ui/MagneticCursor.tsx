"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function MagneticCursor() {
  const x = useMotionValue(-40);
  const y = useMotionValue(-40);
  const springX = useSpring(x, { stiffness: 460, damping: 38, mass: 0.22 });
  const springY = useSpring(y, { stiffness: 460, damping: 38, mass: 0.22 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      const target = (event.target as HTMLElement | null)?.closest("[data-magnetic]");
      setActive(Boolean(target));
    };
    const leave = () => setVisible(false);
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return <motion.span aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-50 hidden size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet mix-blend-difference md:block" animate={{ opacity: visible ? 1 : 0, scale: active ? 2.25 : 1 }} style={{ x: springX, y: springY }} />;
}
