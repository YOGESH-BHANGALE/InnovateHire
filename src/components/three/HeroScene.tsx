"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroOrb } from "./HeroOrb";
import { ParticleField } from "./ParticleField";
import { OrbitalFallback, WebGLSafe } from "./WebGLFallback";

export function HeroScene() {
  const fallback = <OrbitalFallback />;

  return <WebGLSafe fallback={fallback}><div aria-label="Interactive orbital signal visualization" className="absolute inset-0" role="img"><Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}><Suspense fallback={fallback}><ambientLight intensity={0.3} /><pointLight color="#6c47ff" intensity={6} distance={5} position={[2, 2, 3]} /><pointLight color="#00d4ff" intensity={3} distance={5} position={[-2, -1, 2]} /><ParticleField /><HeroOrb /></Suspense></Canvas></div></WebGLSafe>;
}
