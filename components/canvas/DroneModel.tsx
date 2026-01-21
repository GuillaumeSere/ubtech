'use client';

import { useGLTF, Float, Trail } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function DroneModel() {
    const { scene } = useGLTF('/models/drone.glb');
    const groupRef = useRef<THREE.Group>(null);
    const propellers = useRef<THREE.Object3D[]>([]);

    useEffect(() => {
        const foundPropellers: THREE.Object3D[] = [];
        scene.traverse((child) => {
            if (
                child.name.includes('motor_top') ||
                child.name.includes('nurbsCircle') ||
                child.name.includes('extrudedSurface') ||
                child.name.includes('polySurface')
            ) {
                foundPropellers.push(child);
            }
        });
        propellers.current = foundPropellers;
    }, [scene]);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime();

        // 1. Rotation rapide des hélices
        propellers.current.forEach((prop) => {
            prop.rotation.y += delta * 50;
        });

        // 2. Animation de vol complexe
        if (groupRef.current) {
            // Aller-retour en profondeur (Axe Z)
            // Le drone part à -15 unités de distance et revient
            const zPos = Math.cos(t * 0.5) * 10 - 5; 
            groupRef.current.position.z = zPos;

            // Mouvement latéral et vertical léger (Sinueux)
            groupRef.current.position.x = Math.sin(t * 0.4) * 5;
            groupRef.current.position.y = Math.sin(t * 0.8) * 2 + 2;

            // Inclinaison réaliste : 
            // On calcule la vitesse de déplacement sur Z pour incliner le drone
            // Quand il avance vers le loin, il se penche en avant.
            const speedZ = Math.sin(t * 0.5); 
            groupRef.current.rotation.x = speedZ * 0.4; // Tangage (Pitch)
            
            // On ajoute un peu de roulis (Roll) lors des virages sur X
            groupRef.current.rotation.z = Math.cos(t * 0.4) * 0.2;
            
            // Orientation vers la direction du vol
            groupRef.current.rotation.y = Math.PI + (Math.cos(t * 0.4) * 0.2);
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                {/* On augmente la longueur du Trail pour accentuer l'effet de vitesse */}
                <Trail 
                    width={0.6} 
                    length={8} 
                    color="#3b82f6" 
                    attenuation={(t) => t * t}
                >
                    <primitive object={scene} scale={1.2} />
                </Trail>
            </Float>
        </group>
    );
}