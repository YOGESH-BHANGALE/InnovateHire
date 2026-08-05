"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[60] origin-top bg-gradient-to-b from-violet via-violet-deep to-white"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          key={`curtain-${pathname}`}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="min-h-full"
          initial={{ opacity: 0, y: 18 }}
          key={`page-${pathname}`}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
