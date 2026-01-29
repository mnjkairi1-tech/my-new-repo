'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Skeleton } from './ui/skeleton';

function Model() {
  const { scene } = useGLTF('/robot-3d.glb');
  return <primitive object={scene} scale={0.5} />;
}

useGLTF.preload('/robot-3d.glb');

export default function RobotModel() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={<Skeleton className="w-64 h-64 rounded-full" />}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
