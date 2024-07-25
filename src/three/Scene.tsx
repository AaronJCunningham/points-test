import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Points from "./Points";
import { points } from "../points";

interface SceneProps {
  animate: boolean;
}

const Scene: React.FC<SceneProps> = ({ animate }) => {
  return (
    <div>
      <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
        <OrbitControls />
        <Points data={points} animate={animate} />
      </Canvas>
    </div>
  );
};

export default Scene;
