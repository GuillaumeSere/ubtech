'use client';

import { Html, useGLTF, Float, ContactShadows, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface RobotModelProps {
  demo?: boolean;
}

export default function RobotModel({ demo = false }: RobotModelProps) {
    const group = useRef<THREE.Group>(null);

    // Utilisons un modèle de robot d'exemple (Drone/Robot volant)
    const { scene } = useGLTF('/models/robot.glb');


  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    if (demo) {
      // Animation "vivante" sur la page unité
      group.current.rotation.y = Math.sin(t * 0.4) * 0.6;
      group.current.rotation.x = Math.sin(t * 0.25) * 0.1;
      group.current.position.y = Math.sin(t * 2) * 0.05;
    } else {
      // Mode idle / souris
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.5, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * -0.2, 0.1);
      group.current.position.y = Math.sin(t) * 0.08;
    }
  });

    return (
        <group ref={group}>
            {/* Effet de particules "données" autour du robot */}
    <Sparkles count={50} scale={3} size={2} speed={0.4} color="#3b82f6" />
            <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
                <primitive
                    object={scene}
                    scale={2}
                    position={[0, -1, 0]}
                />
            </Float>

            {/* Ombre dynamique qui suit le mouvement */}
            <ContactShadows
                position={[0, -1.8, 0]}
                opacity={0.6}
                scale={8}
                blur={2.5}
                far={4}
            />


            <primitive object={scene} scale={2} position={[0, -1, 0]}>
                <Html distanceFactor={10} position={[0, 1.5, 0]}>
                    <div className="flex flex-col items-center group pointer-events-auto">
                        {/* Petit point clignotant */}
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping" />

                        {/* Étiquette au survol */}
                        <div className="bg-black/80 backdrop-blur-md text-white text-[10px] p-2 rounded border border-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Capteur LiDAR 3.0
                        </div>
                    </div>
                </Html>
            </primitive>

        </group>
    );
}