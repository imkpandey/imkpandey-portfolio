import { Text } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Typography({
  LINE_1 = "Kartikey Pandey",
  LINE_2 = "Just A Chill Creative Developer",
  SIZE = 6,
}) {
  const { width, height } = useThree((state) => state.viewport);
  const vw = (size) => (width * size) / 100;
  const vh = (size) => (height * size) / 100;
  return (
    <>
      {/* <Text
        material-transparent={false}
        fontSize={vw(SIZE)}
        position={[0, vh(35), 0]}
        color={"#101010"}
        font={"/Oswald.ttf"}
        letterSpacing={-0.05}
      >
        {LINE_1}
      </Text> */}
      <Text
        material-transparent={false}
        fontSize={vw(SIZE)}
        position={[0, vh(30), 0]}
        color={"#404040"}
        font={"/Oxygen-Regular.ttf"}
        letterSpacing={-0.01}
      >
        {LINE_1}
      </Text>
      <Text
        material-transparent={false}
        fontSize={SIZE / 2.5}
        color={"#101010"}
        font={"/Oxygen.ttf"}
        position={[0, vh(42), 0]}
        letterSpacing={-0.05}
      >
        {LINE_2}
      </Text>
    </>
  );
}
