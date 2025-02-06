"use client";

import {
  PerspectiveCamera,
  OrbitControls,
  Environment,
  Lightformer,
  ContactShadows,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";
import * as THREE from "three";

function Rig() {
  const { camera, mouse } = useThree();
  const vec = new THREE.Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 3, mouse.y * 2, camera.position.z),
      0.05
    )
  );
}

export default function Common({ color, controls }) {
  return (
    <>
      {/* color && <color attach='background' args={[color]} /> */}
      <ambientLight intensity={2} />
      <directionalLight intensity={1.5} castShadow />
      <Environment preset="warehouse" />
      {/* <EffectComposer disableNormalPass>
        <Bloom mipmapBlur luminanceThreshold={0.8} intensity={0.1} />
      </EffectComposer> */}
      {/* <Environment preset="studio" backgroundIntensity={0.1} blur={0.5} /> */}
      <directionalLight position={[-5, 0, 0]} color={"#000000"} intensity={3} />
      {/* <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} /> */}
      {/* <Rig /> */}
      {controls && (
        <OrbitControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      )}
    </>
  );
}
