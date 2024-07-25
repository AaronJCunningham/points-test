import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface PointsProps {
  data: number[];
  animate: boolean;
}

const PointsComponent: React.FC<PointsProps> = ({ data, animate }) => {
  const pointsRef = useRef<THREE.Points>();

  const points = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(data, 3)
    );
    const colors = new Float32Array(data.length);
    for (let i = 0; i < data.length; i += 3) {
      colors[i] = Math.random();
      colors[i + 1] = Math.random();
      colors[i + 2] = Math.random();
    }
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.1,
    });
    return new THREE.Points(geometry, material);
  }, [data]);

  useFrame(() => {
    if (pointsRef.current && animate) {
      const time = Date.now() * 0.001;
      const positions = pointsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 2] += Math.sin(time + i) * 0.01;
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return <primitive ref={pointsRef} object={points} />;
};

export default PointsComponent;
