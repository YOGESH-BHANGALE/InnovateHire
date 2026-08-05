"use client";

import { MotionConfig } from "framer-motion";
import { ScrollEffects } from "./ScrollEffects";

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user"><ScrollEffects />{children}</MotionConfig>;
}
