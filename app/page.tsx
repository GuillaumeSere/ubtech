'use client';

import Scene from '@/components/canvas/Scene';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ChevronRight, Target, Activity, Zap } from 'lucide-react';

export default function Home() {
    return (
        <main className="relative w-full h-screen bg-[#020202] overflow-hidden">
            
            {/* 1. TYPOGRAPHIE DE FOND (Derrière le robot) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <h1 className="text-[25vw] font-black text-white/[0.02] leading-none tracking-tighter">
                    UBTECH
                </h1>
            </div>

            {/* 2. OVERLAY HUD (Interface de visée) */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Scanner latéral */}
                <div className="absolute top-1/2 left-0 w-1 h-40 bg-gradient-to-b from-transparent via-blue-600 to-transparent -translate-y-1/2 animate-pulse" />
                
                {/* Coins de visée (Targeting) */}
                <div className="absolute top-20 left-20 w-10 h-10 border-t-2 border-l-2 border-white/20" />
                <div className="absolute top-20 right-20 w-10 h-10 border-t-2 border-r-2 border-white/20" />
                <div className="absolute bottom-20 left-20 w-10 h-10 border-b-2 border-l-2 border-white/20" />
                <div className="absolute bottom-20 right-20 w-10 h-10 border-b-2 border-r-2 border-white/20" />
            </div>

            {/* 3. BLOC INFOS GAUCHE (Status & Hero Text) */}
            <div className="absolute top-32 left-12 z-20 max-w-lg">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-[0.3em]">AI_Core_Connected</span>
                </motion.div>

                <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 leading-none">
                    WALKER <span className="text-blue-600 italic">X</span>
                </h2>
                
                <p className="text-gray-400 font-mono text-sm leading-relaxed mb-8 border-l border-blue-500/50 pl-6">
                    L'apogée de l'intelligence humanoïde. Conçu pour s'intégrer 
                    dans les environnements humains avec une agilité sans précédent.
                </p>

                <div className="flex gap-6">
                    <button className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                        Explorer l'unité
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center gap-4 text-white/40 font-mono text-[10px]">
                        <span className="animate-pulse">REC ●</span>
                        <span>00:42:12:04</span>
                    </div>
                </div>
            </div>

            {/* 4. TECHNICAL SPECS (Bas Gauche) */}
            <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                <div className="flex gap-12 border-t border-white/10 pt-6">
                    {[
                        { label: "Degrees of Freedom", val: "41", unit: "DOF" },
                        { label: "Processing Power", val: "2.5", unit: "TFLOPS" },
                        { label: "Vision Sensors", val: "12", unit: "CAM" }
                    ].map((spec, i) => (
                        <div key={i} className="space-y-1">
                            <p className="text-[10px] font-mono text-gray-500 uppercase">{spec.label}</p>
                            <p className="text-xl font-bold text-white">{spec.val} <span className="text-[10px] text-blue-500">{spec.unit}</span></p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. MODE SELECTOR (Bas Droite) */}
            <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl space-y-4 w-64">
                    <div className="flex items-center justify-between text-[10px] font-mono text-gray-400">
                        <span>MISSION_PROTOCOL</span>
                        <Target className="w-3 h-3" />
                    </div>
                    
                    <div className="space-y-2">
                        {['Surveillance', 'Intervention', 'Domestic'].map((mode) => (
                            <button key={mode} className="w-full text-left px-4 py-2 text-[10px] font-mono uppercase tracking-widest border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all text-gray-400 hover:text-white">
                                {mode}_Mode
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="flex items-center gap-2 font-mono text-[10px] text-blue-500">
                    <Activity className="w-4 h-4" />
                    <span>Neural_Link_Stable: 100%</span>
                </div>
            </div>

            {/* 6. SCÈNE 3D (Z-Index 0) */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={
                    <div className="flex items-center justify-center h-full text-blue-500 font-mono text-xs tracking-widest animate-pulse">
                        LOAD_SYSTEM_DATA...
                    </div>
                }>
                    <Scene />
                </Suspense>
                <Loader />
            </div>

        </main>
    );
}