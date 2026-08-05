"use client";

import { Float, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function HeroOrb() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ pointer, clock }) => {
    if (!group.current) return;
    group.current.rotation.y += 0.0018;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.16, 0.025);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointer.x * 0.12, 0.025);
    group.current.position.y = Math.sin(clock.elapsedTime * 0.7) * 0.06;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.18} floatIntensity={0.2}>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.1, 2]} />
          <meshBasicMaterial color="#8e78ff" transparent opacity={0.9} wireframe />
        </mesh>
        <mesh scale={0.8}>
          <icosahedronGeometry args={[1.1, 2]} />
          <meshBasicMaterial color="#0d0d1a" transparent opacity={0.38} wireframe />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.72, 32, 32]} />
          <meshStandardMaterial color="#6c47ff" emissive="#2c1a86" emissiveIntensity={1.2} roughness={0.24} metalness={0.25} transparent opacity={0.62} />
        </mesh>
        <Line points={[[0, -1.55, 0], [0, 1.55, 0]]} color="#00d4ff" transparent opacity={0.4} lineWidth={0.6} />
        <Line points={[[-1.55, 0, 0], [1.55, 0, 0]]} color="#6c47ff" transparent opacity={0.35} lineWidth={0.6} />
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.55, 0.008, 8, 96]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.5} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0.38, 0.22]}>
          <torusGeometry args={[1.3, 0.008, 8, 96]} />
          <meshBasicMaterial color="#6c47ff" transparent opacity={0.55} />
        </mesh>
      </group>
    </Float>
  );
}
