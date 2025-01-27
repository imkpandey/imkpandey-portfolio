"use client";

import { Canvas, addEffect } from "@react-three/fiber";
import { Preload, View } from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";

// Use lenis smooth scroll
const lenis = new Lenis({ syncTouch: true, touchMultiplier: 0 });
addEffect((t) => lenis.raf(t));
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

export default function Scene({ style, ...props }) {
  return (
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 50] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        ...style,
      }}
      eventSource={document.body}
      eventPrefix="client"
      {...props}
    >
      <View.Port />
      <Preload all />
    </Canvas>
  );
}
