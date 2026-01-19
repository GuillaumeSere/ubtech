'use client';

import { useGLTF, Float, Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';

export default function DroneModel() {
    const { scene } = useGLTF('/models/drone.glb');
    const groupRef = useRef<THREE.Group>(null);
    const propellers = useRef<THREE.Object3D[]>([]);

    useEffect(() => {
        const foundPropellers: THREE.Object3D[] = [];
        
        scene.traverse((child) => {
            // Log pour t'aider à débugger si besoin
             console.log("Nom trouvé:", child.name);

            // On utilise une RegEx pour attraper "curve" suivi d'un chiffre, 
            // ou les noms standards (rotor, propeller, etc.)
            if (
                /motor_top1/i.test(child.name) || 
                /nurbsCircle4/i.test(child.name) || 
                /motor_top3/i.test(child.name) ||
                /motor_top4/i.test(child.name)
            ) {
                foundPropellers.push(child);
            }
        });

        propellers.current = foundPropellers;
        console.log(`Hélices configurées: ${foundPropellers.length}`, foundPropellers.map(p => p.name));
    }, [scene]);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();

        // 1. Animation des hélices
        propellers.current.forEach((prop, index) => {
            // On fait tourner sur l'axe vertical (souvent Y dans Blender/ThreeJS)
            // Si elles tournent "sur la tranche", change prop.rotation.y par prop.rotation.z
            prop.rotation.y += delta * 40; 
        });

        // 2. Mouvement du drone (Lissajous)
        if (groupRef.current) {
            groupRef.current.position.x = Math.sin(t * 0.4) * 4;
            groupRef.current.position.y = Math.sin(t * 0.3) * 3;
            groupRef.current.position.z = Math.cos(t * 0.35) * 2;

            // Inclinaison réaliste
            groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.15;
            groupRef.current.rotation.z = Math.cos(t * 0.4) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Trail est optionnel, attention aux performances si le drone bouge bcp */}
                <Trail width={0.4} length={5} color="#3b82f6" attenuation={(t) => t * t}>
                    <primitive object={scene} scale={1.5} />
                </Trail>
            </Float>
        </group>
    );
}