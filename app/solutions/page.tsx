'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Stage } from '@react-three/drei';
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
      icon: <Users className="w-4 h-4" />
    },
    { 
      name: "Santé & Hygiène", 
      task: "Désinfection autonome des milieux hospitaliers.",
      metric: "Logistique UV-C",
      icon: <ShieldCheck className="w-4 h-4" />
    },
    { 
      name: "Logistique", 
      task: "Inventaire automatisé et transport de charges.",
      metric: "+40% d'efficacité",
      icon: <Zap className="w-4 h-4" />
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#050505] pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* GAUCHE : CONTENU TEXTUEL DYNAMIQUE */}
          <div className="z-10">
            <header className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">Systèmes Autonomes Live</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                SOLUTIONS <br /> 
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                  INTELLIGENTES
                </span>
              </h1>
            </header>
            
            <div className="space-y-4">
              {sectors.map((sector, i) => (
                <div 
                  key={i} 
                  className="group relative p-6 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {sector.name}
                    </h3>
                    <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                      {sector.metric}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                    {sector.task}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    DÉPLOYER LA SOLUTION <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 group cursor-pointer flex items-center gap-4 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20">
              <span className="text-xs uppercase tracking-widest">Étude de cas gratuite</span>
              <BarChart3 className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* DROITE : VISUALISEUR 3D "LAB" */}
          <div className="relative h-[600px] w-full lg:h-[700px]">
            {/* Décoration d'arrière-plan (Viseur) */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_20s_linear_infinite] opacity-20" />
            <div className="absolute inset-10 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-20" />

            <div className="absolute inset-0 bg-linear-to-b from-blue-500/10 to-transparent rounded-3xl backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl">
              {/* HUD UI Elements */}
              <div className="absolute top-8 left-8 space-y-2 z-10">
                <p className="font-mono text-[10px] text-blue-500 uppercase tracking-tighter">Model: UB-Drone v.2026</p>
                <div className="h-[1px] w-20 bg-blue-500/50" />
                <p className="font-mono text-[9px] text-gray-500">Coord: 48.8566° N, 2.3522° E</p>
              </div>

              <div className="absolute bottom-8 left-8 z-10 border-l border-blue-500 pl-4">
                <p className="font-mono text-[10px] text-white">STATUS: <span className="text-green-500">READY</span></p>
                <p className="font-mono text-[9px] text-gray-500 uppercase">Propulsion: Active</p>
              </div>

              {/* THREE.JS CANVAS */}
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <Suspense fallback={null}>
                  <Stage intensity={0.5} environment="city" adjustCamera={false}>
                    <DroneModel />
                  </Stage>
                  <ContactShadows position={[0, -1.2, 0]} opacity={0.4} scale={6} blur={2.4} far={2} />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Suspense>
              </Canvas>
            </div>
          </div>

        </div>
      </main>
    </PageTransition>
  );
}