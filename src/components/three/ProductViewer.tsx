"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function ProductShape() {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.28;
    group.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.12;
  });
  return <Float speed={1.6} rotationIntensity={0.24} floatIntensity={0.2}><group ref={group}><mesh><icosahedronGeometry args={[1.25, 1]} /><meshStandardMaterial color="#6c47ff" emissive="#27176c" emissiveIntensity={1.5} metalness={0.35} roughness={0.2} wireframe /></mesh><mesh scale={0.7}><octahedronGeometry args={[1.25, 1]} /><meshStandardMaterial color="#00d4ff" emissive="#003d50" emissiveIntensity={1.3} metalness={0.45} roughness={0.22} wireframe /></mesh><mesh scale={0.55}><sphereGeometry args={[1, 32, 32]} /><meshStandardMaterial color="#ffffff" emissive="#6c47ff" emissiveIntensity={0.35} transparent opacity={0.72} /></mesh></group></Float>;
}

export function ProductViewer() {
  return <div aria-label="Interactive abstract product system viewer" className="h-full min-h-[26rem] w-full" role="img"><Canvas camera={{ position: [0, 0, 4.5], fov: 42 }} dpr={[1, 1.5]}><Suspense fallback={null}><ambientLight intensity={0.55} /><pointLight color="#6c47ff" intensity={8} position={[2, 2, 3]} /><pointLight color="#00d4ff" intensity={5} position={[-2, -1, 2]} /><ProductShape /><OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.45} /></Suspense></Canvas></div>;
}
