"use client";

import { Component, useEffect, useState, type ReactNode } from "react";

interface SceneBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface SceneBoundaryState {
  hasError: boolean;
}

class SceneErrorBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { hasError: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

function canUseWebGL() {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export function WebGLSafe({ children, fallback }: SceneBoundaryProps) {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    setAvailable(canUseWebGL());
  }, []);

  if (available !== true) return <>{fallback}</>;
  return <SceneErrorBoundary fallback={fallback}>{children}</SceneErrorBoundary>;
}

export function OrbitalFallback({ compact = false }: { compact?: boolean }) {
  return <div aria-hidden="true" className="absolute inset-0 grid place-items-center"><div className={compact ? "relative size-52" : "relative size-[min(76vw,31rem)]"}><div className="absolute inset-0 rounded-full border border-violet/20" /><div className="absolute inset-[10%] rounded-full border border-cyan/20 [transform:rotate(25deg)]" /><div className="absolute inset-[20%] rounded-full border border-violet/20 [transform:rotate(-22deg)]" /><div className="absolute inset-[31%] rounded-full bg-[radial-gradient(circle_at_36%_26%,rgba(255,255,255,.98),rgba(108,71,255,.48)_30%,rgba(13,13,26,.94)_75%)] shadow-[0_28px_100px_rgba(108,71,255,.18)]" /><div className="absolute inset-[38%] rounded-full border border-white/30" /><span className="absolute right-[11%] top-[28%] size-3 rounded-full bg-cyan shadow-[0_0_26px_#00d4ff]" /><span className="absolute left-[16%] top-[22%] size-2 rounded-full bg-violet shadow-[0_0_22px_#6c47ff]" /></div></div>;
}

export function ProductFallback() {
  return <div className="grid h-full min-h-[26rem] place-items-center"><div className="relative size-64"><div className="absolute inset-0 rounded-full border border-cyan/25 [transform:rotate(28deg)]" /><div className="absolute inset-[12%] rounded-full border border-violet/30 [transform:rotate(-34deg)]" /><div className="absolute inset-[27%] rounded-full bg-gradient-to-br from-violet to-cyan shadow-[0_0_90px_rgba(108,71,255,.4)]" /><div className="absolute inset-0 grid place-items-center text-[0.56rem] font-mono uppercase tracking-[0.18em] text-white/50">static signal</div></div></div>;
}
