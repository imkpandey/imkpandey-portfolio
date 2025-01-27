"use client";

import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 3, mouse.y * 2, camera.position.z),
      0.05
    )
  );
}
