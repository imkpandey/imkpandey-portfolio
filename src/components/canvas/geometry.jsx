import { MeshTransmissionMaterial, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

export default function Geometry(props) {
  const meshRef = useRef();
  const { viewport } = useThree();
  //   useFrame((state) => {
  //     // meshRef.current.rotation.x =
  //     //   Math.sin(state.clock.elapsedTime * 0.5) * Math.PI;
  //     meshRef.current.rotation.y =
  //       Math.sin(state.clock.elapsedTime * 0.5) * Math.PI;
  //   });
  return (
    <group {...props} scale={viewport.width / 12} dispose={null}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          thickness={0.55}
          roughness={0.1}
          transmission={1.025}
          ior={2.2}
          chromaticAberration={1.2}
          backside={true}
        />
      </mesh>
      {/* <Text
        color="#fff"
        fontSize={0.9}
        fontWeight={600}
        position={[0, 0, -0.5]}
      >
        Creative
      </Text> */}
    </group>
  );
}
