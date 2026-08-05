"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function ParticleField({ count = 850 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 7;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 4.5;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    const nextGeometry = new THREE.BufferGeometry();
    nextGeometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return nextGeometry;
  }, [count]);

  useFrame(({ clock }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.012;
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.08) * 0.03;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial color="#6c47ff" size={0.012} sizeAttenuation transparent opacity={0.38} depthWrite={false} />
    </points>
  );
}
