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
          strength.current = 8;
          scale.current = 0.25;
        }}
        onPointerLeave={() => {
          strength.current = 4;
          scale.current = 0.15;
        }}
        ref={ref}
        args={[width / 10, 128, 128]}
        position={[0, 0, 0]}
      >
        <LayerMaterial
          color={"#d0d0d0"}
          lighting={"physical"} //
          transmission={1}
          roughness={0}
          thickness={1}
        >
          <Depth
            near={0.4854}
            far={0.661999999999932}
            origin={[-0.6920000000000004, 0.4250000000000003, 0]}
            colorA={"#000000"}
            colorB={"#d0d0d0"}
          />
          <Displace ref={displaceRef} strength={4} scale={0.15} />
          <Fresnel
            color={"#000000"}
            bias={-0.3430000000000002}
            intensity={3.8999999999999946}
            power={3.3699999999999903}
            factor={1.119999999999999}
            mode={"screen"}
          />
        </LayerMaterial>
      </Sphere>
    </mesh>
  );
}
