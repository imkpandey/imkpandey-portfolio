import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Typography({
  LINE_1 = "CREATIVE",
  LINE_2 = "END",
  LINE_3 = "DEVELOPER",
  LINE_4 = "FRONT",
  SIZE = 15,
}) {
  const { width, height } = useThree((state) => state.viewport);
  const vw = (size) => (width * size) / 100;
  const vh = (size) => (height * size) / 100;
  return (
    <>
      <Text
        material-transparent={false}
        fontSize={vw(SIZE)}
        position={[0, vh(35), 0]}
        color={"#101010"}
        font={"/Oswald.ttf"}
        letterSpacing={-0.05}
      >
        {LINE_1}
      </Text>
      <Text
        material-transparent={false}
        fontSize={vw(SIZE / 1.5)}
        position={[vw(-30), vh(6), 0]}
        color={"#101010"}
        font={"/Shockwave.ttf"}
        letterSpacing={-0.05}
      >
        {LINE_4}
      </Text>
      <Text
        material-transparent={false}
        fontSize={vw(SIZE / 1.5)}
        position={[vw(27), vh(6), 0]}
        // fontWeight={800}
        font={"/Shockwave.ttf"}
        color={"#101010"}
        letterSpacing={-0.05}
      >
        {LINE_2}
      </Text>
      <Text
        material-transparent={false}
        fontSize={vw(SIZE)}
        color={"#101010"}
        font={"/Oswald.ttf"}
        position={[0, vh(-25), 0]}
        letterSpacing={-0.05}
      >
        {LINE_3}
      </Text>
    </>
  );
}
