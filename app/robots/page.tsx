'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import PageTransition from '@/components/ui/PageTransition';
import { X, Play } from 'lucide-react';

export default function RobotsPage() {
    const [activeRobot, setActiveRobot] = useState<any | null>(null);

    // Verrouiller le scroll lors de l'ouverture
    useEffect(() => {
        document.body.style.overflow = activeRobot ? 'hidden' : 'unset';
    }, [activeRobot]);

    const robots = [
        {
            name: 'Walker S2',
            desc: 'Humanoïde domestique intelligent capable de manipuler des objets avec précision.',
            image: '/images/walker.jpg',
            youtubeId: 'mHP1WGlw5Wk', // ID exemple
            tag: 'Domotique',
            specs: { DOF: "41", Vitesse: "2.5km/h", Charge: "10kg" }
        },
        {
            name: 'Cruzr',
            desc: 'Robot de service basé sur le cloud pour l\'accueil et l\'orientation.',
            image: '/images/cruzr.jpg',
            youtubeId: 'pGgYjzR4ZfM',
            tag: 'Service',
            specs: { Autonomie: "8h", Écran: "11.6\"", Audio: "360°" }
        },
        {
            name: 'ADIBOT',
            desc: 'Système de désinfection autonome par UV-C certifié.',
            image: '/images/adibot.jpg',
            youtubeId: 'M_oc3l9KaLc',
            tag: 'Santé',
            specs: { Rayon: "360°", Capteurs: "PIR", Alerte: "Vocal" }
        },
    ];

    return (
        <PageTransition>
            <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-20">
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Nos <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">Robots</span>
                        </h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {robots.map((robot) => (
                            <div
                                key={robot.name}
                                className="group relative h-125 rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:border-blue-500/50"
                            >
                                <Image
                                    src={robot.image}
                                    alt={robot.name}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

                                <div className="absolute bottom-0 p-8 w-full">
                                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-2 block italic">{robot.tag}</span>
                                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tighter">{robot.name}</h3>

                                    <button
                                        onClick={() => setActiveRobot(robot)}
                                        className="flex items-center cursor-pointer gap-3 py-3 px-6 rounded-full bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                                    >
                                        Lancer la démo <Play className="w-3 h-3 fill-current" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* MODALE YOUTUBE */}
                {activeRobot && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setActiveRobot(null)} />

                        <div className="relative w-full max-w-6xl bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 flex flex-col lg:flex-row h-full max-h-[80vh]">

                            {/* LECTEUR YOUTUBE */}
                            <div className="flex-2 bg-black relative">
                                <iframe
                                    src={`https://www.youtube.com/embed/${activeRobot.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                    title={activeRobot.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full border-0"
                                />
                            </div>

                            {/* INFOS TECHNIQUES */}
                            <div className="flex-1 p-10 border-l border-white/5 flex flex-col">
                                <div className="flex-1">
                                    <h2 className="text-4xl font-bold text-white mb-2 tracking-tighter">{activeRobot.name}</h2>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 font-mono italic">[{activeRobot.tag}_UNIT_v4]</p>

                                    <div className="space-y-6">
                                        <p className="text-gray-300 text-sm leading-relaxed">{activeRobot.desc}</p>

                                        <div className="space-y-3">
                                            <p className="text-blue-500 font-mono text-[10px] uppercase tracking-widest">Hardware_Specs</p>
                                            {Object.entries(activeRobot.specs).map(([key, val]: any) => (
                                                <div key={key} className="flex justify-between border-b border-white/5 py-2 text-[11px] font-mono">
                                                    <span className="text-gray-500 uppercase">{key}</span>
                                                    <span className="text-white">{val}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setActiveRobot(null)}
                                    className="mt-10 cursor-pointer group flex items-center justify-center gap-2 py-4 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl border border-white/5 hover:bg-red-600 transition-all"
                                >
                                    <X className="w-4 h-4" /> Quitter le mode démo
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </PageTransition>
    );
}