"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((element, index) => {
        gsap.fromTo(element, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.72, delay: (index % 5) * 0.04, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
      });
    });
    return () => context.revert();
  }, []);

  return null;
}
