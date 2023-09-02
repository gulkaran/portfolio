"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three-stdlib";
import styled from "styled-components";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";

const TestScene: React.FC = () => {

  const Model = () => {
    const gltf = useLoader(GLTFLoader, "/models/shiba/scene.gltf");

    return (
      <>
        <primitive dispose={null} object={gltf.scene} scale={2} />
      </>
    );
  };

  return (
    <main>
      <ThreeDContainer>
        <Canvas shadows dpr={[1, 2]} camera={{ position: [8, 8, 4], fov: 100 }}>
          <ambientLight intensity={0.5} />
          <spotLight intensity={0.1} angle={0.6} penumbra={8} position={[10, 15, 10]}  />

          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls autoRotate />
        </Canvas>
      </ThreeDContainer>
    </main>
  );
}

const ThreeDContainer = styled.div`
  canvas {
    height: 660px !important;
    width: 400px !important;
  }
`;

export default TestScene;