import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';

function RotatingLogo() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <Icosahedron args={[1, 0]} ref={meshRef} scale={2.2}>
      <MeshDistortMaterial
        color="#2563eb" // Blue-600
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Icosahedron>
  );
}

export default function Logo3D() {
  return (
    <div className="w-12 h-12">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <RotatingLogo />
      </Canvas>
    </div>
  );
}
