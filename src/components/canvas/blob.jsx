import { useMemo, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  Environment,
  MeshTransmissionMaterial,
  Sphere,
  Text,
} from "@react-three/drei";
import { LayerMaterial, Displace, Depth, Fresnel } from "lamina";
import { MathUtils } from "three";

export default function Blob() {
  const ref = useRef(null);
  const api = useRef();
  const rand = useMemo(() => Math.random(), []);
  const strength = useRef(4);
  const scale = useRef(0.15);
  const displaceRef = useRef();
  const { width } = useThree((state) => state.viewport);
  useFrame(({ clock }, dt) => {
    // ref.current.rotation.y = Math.sin(clock.elapsedTime + rand * 100) * 0.1;
    if (displaceRef.current.strength !== strength.current) {
      displaceRef.current.strength = MathUtils.lerp(
        displaceRef.current.strength,
        strength.current,
        0.1
      );
    }
    if (strength.current > 4) {
      displaceRef.current.offset.x += 4 * dt;
    } else {
      displaceRef.current.offset.x = 0;
    }
    if (displaceRef.current.scale !== scale.current) {
      displaceRef.current.scale = MathUtils.lerp(
        displaceRef.current.scale,
        scale.current,
        0.1
      );
    }
    // if (scale.current > 0.1) {
    //   displaceRef.current.offset.y += 4 * dt;
    // }
  });
  return (
    <mesh>
      <Sphere
        castShadow
        onPointerEnter={() => {
          strength.current = 12;
          scale.current = 0.3;
        }}
        onPointerLeave={() => {
          strength.current = 4;
          scale.current = 0.15;
        }}
        ref={ref}
        args={[width / 12, 128, 128]}
      >
        <LayerMaterial
          color={"#000000"}
          lighting={"physical"}
          transmission={1}
          roughness={0}
          thickness={0}
        >
          <Depth
            near={-0.5854}
            far={0.16619999999932}
            colorA={"#ffffff"}
            colorB={"#000000"}
          />
          <Displace ref={displaceRef} strength={4} scale={0.15} />
        </LayerMaterial>
      </Sphere>
    </mesh>
  );
}
