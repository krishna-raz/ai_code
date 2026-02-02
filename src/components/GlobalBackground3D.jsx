import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Particles(props) {
  const ref = useRef();
  // Generate particles in a larger sphere to cover the screen
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2.5 }));

  useFrame((state, delta) => {
    // Slower rotation for a subtle background effect
    ref.current.rotation.x -= delta / 20;
    ref.current.rotation.y -= delta / 25;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#2563eb" // Blue-600 to match theme
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function GlobalBackground3D() {
  return (
    <div className="fixed inset-0 -z-50 w-full h-full pointer-events-none bg-slate-50">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
