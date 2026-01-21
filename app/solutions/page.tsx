'use client';

import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import Link from 'next/link';
import DroneModel from '@/components/canvas/DroneModel';
import PageTransition from '@/components/ui/PageTransition';
import { Suspense } from 'react';
import { ChevronRight, BarChart3, ShieldCheck, Zap, Users } from 'lucide-react';

export default function SolutionsPage() {
    const sectors = [
        {
            name: "Retail & Accueil",
            task: "Optimisation de l'expérience client via Cruzr.",
            metric: "98% de satisfaction",
            icon: <Users className="w-4 h-4" />,
            path: "/services/retail-accueil"
        },
        {
            name: "Santé & Hygiène",
            task: "Désinfection autonome des milieux hospitaliers.",
            metric: "Logistique UV-C",
            icon: <ShieldCheck className="w-4 h-4" />,
            path: "/services/sante-hygiene"
        },
        {
            name: "Logistique",
            task: "Inventaire automatisé et transport de charges.",
            metric: "+40% d'efficacité",
            icon: <Zap className="w-4 h-4" />,
            path: "/services/logistique"
        }
    ];

    return (
        <PageTransition>
            <main className="relative min-h-screen bg-[#050505] overflow-hidden">
                
                {/* 1. FOND 3D PLEINE PAGE */}
                <div className="absolute inset-0 z-0">
                    <Canvas>
                        <Suspense fallback={null}>
                            {/* Position de caméra éloignée pour voir le drone naviguer dans l'espace */}
                            <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
                            
                            <ambientLight intensity={0.4} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                            
                            <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={0.5} />
                            
                            {/* On utilise votre DroneModel avec ses animations de vol */}
                            <DroneModel />

                            <Environment preset="night" />
                        </Suspense>
                    </Canvas>
                    {/* Overlay pour assurer la lisibilité du texte à gauche */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                {/* 2. CONTENU TEXTUEL AU-DESSUS DU DRONE */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 min-h-screen flex items-center">
                    <div className="max-w-2xl">
                        <header className="mb-12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Systèmes Autonomes Live</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                                SOLUTIONS <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                                    INTELLIGENTES
                                </span>
                            </h1>
                        </header>

                        <div className="space-y-4">
                            {sectors.map((sector, i) => (
                                <Link
                                    key={i}
                                    href={sector.path}
                                    className="block group relative p-6 border border-white/5 bg-white/[0.01] backdrop-blur-sm rounded-2xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-3">
                                            <div className="text-blue-500 group-hover:scale-110 transition-transform duration-300">
                                                {sector.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                {sector.name}
                                            </h3>
                                        </div>
                                        <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                                            {sector.metric}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                        {sector.task}
                                    </p>
                                    <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                                        Détails techniques <ChevronRight className="w-3 h-3" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <button className="mt-10 group flex items-center gap-4 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
                            <span className="text-xs uppercase tracking-widest">Étude de cas gratuite</span>
                            <BarChart3 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* 3. ÉLÉMENTS HUD (DÉCORATION DE COINS) */}
                <div className="absolute bottom-10 right-10 z-10 text-right hidden lg:block border-r-2 border-blue-500 pr-6">
                    <p className="font-mono text-[10px] text-blue-400 uppercase tracking-widest mb-1">Status du système</p>
                    <p className="text-2xl font-black text-white">OPÉRATIONNEL</p>
                    <p className="font-mono text-[9px] text-gray-500 mt-2">LINK: ENCRYPTED // DEPTH: ACTIVE</p>
                </div>
            </main>
        </PageTransition>
    );
}