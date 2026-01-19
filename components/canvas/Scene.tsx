'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stars, Float, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import RobotModel from './RobotModel';

export default function Scene() {
  return (
    <div className="h-screen w-full bg-[#050505]">
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          
          {/* Lumières de studio */}
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

          {/* Le Robot */}
          <RobotModel />

          {/* Environnement : donne des reflets réalistes (métal, plastique) */}
          <Environment preset="sunset" />
          
          <OrbitControls 
            enableZoom={false} 
            minPolarAngle={Math.PI / 3} 
            maxPolarAngle={Math.PI / 1.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}