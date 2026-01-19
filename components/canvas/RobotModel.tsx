'use client';

import { Html, useGLTF, Float, ContactShadows, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export default function RobotModel() {
    const group = useRef<THREE.Group>(null);

    // Utilisons un modèle de robot d'exemple (Drone/Robot volant)
    const { scene } = useGLTF('./models/robot.glb');

    useFrame((state) => {
        if (!group.current) return;

        // 1. Suivre la souris doucement
        // state.pointer.x va de -1 à +1
        const targetRotationY = state.pointer.x * 0.5;
        const targetRotationX = state.pointer.y * -0.2;

        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.1);

        // 2. Faire "respirer" le robot (légère oscillation haut/bas)
        group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
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