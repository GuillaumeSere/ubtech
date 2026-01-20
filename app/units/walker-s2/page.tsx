'use client';

import { Suspense, useState } from 'react';
import Scene from '@/components/canvas/Scene';
import { motion } from 'framer-motion';
import { Play, Download, Shield, Cpu, Eye, Mic, Activity } from 'lucide-react';
import { Loader } from '@react-three/drei';

type UnitMode = 'Domestic' | 'Surveillance' | 'Assistance';


export default function WalkerUnitPage() {
    const [mode, setMode] = useState<UnitMode>('Domestic');
    const [demoOpen, setDemoOpen] = useState(false);


    const modes: Record<UnitMode, string> = {
        Domestic: 'Assistance quotidienne, interaction humaine et domotique.',
        Surveillance: 'Analyse environnementale, vision avancée et sécurité.',
        Assistance: 'Support physique et cognitif aux utilisateurs.',
    };


    return (
        <main className="relative min-h-screen bg-[#020202] text-white overflow-hidden">

            {/* HERO */}
            <section className="relative h-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <Suspense fallback={<Loader />}>
                        <Scene demo={true} />
                    </Suspense>
                </div>

                <div className="relative z-10 max-w-3xl px-6 sm:px-12">
                    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-mono tracking-[0.3em] text-blue-500">UNIT_STATUS: ONLINE</motion.span>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mt-4">WALKER <span className="text-blue-600 italic">S2</span></h1>
                    <p className="mt-6 text-gray-400 font-mono text-sm max-w-xl">Humanoïde autonome conçu pour évoluer naturellement dans les environnements humains complexes.</p>

                    <div className="flex flex-col sm:flex-row gap-6 mt-10">
                        <button
                            onClick={() => setDemoOpen(true)}
                            className="w-fit flex items-center cursor-pointer gap-3 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                            <Play className="w-4 h-4" /> Lancer la démonstration
                        </button>
                        {/* Bouton téléchargement PDF */}
                        <a
                            href="/fiche.pdf" 
                            download
                            className="w-fit flex cursor-pointer items-center gap-3 px-8 py-4 border border-white/10 text-xs font-bold uppercase tracking-widest hover:border-blue-500/50 transition-all"
                        >
                            <Download className="w-4 h-4" /> Fiche technique
                        </a>
                    </div>
                </div>
            </section>

            {/* PRESENTATION */}
            <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
                {[{ icon: Cpu, title: 'Intelligence IA', text: 'Traitement temps réel et décision autonome.' },
                { icon: Eye, title: 'Vision avancée', text: 'Reconnaissance spatiale multi-capteurs.' },
                { icon: Mic, title: 'Interaction humaine', text: 'Compréhension vocale et contextuelle.' }
                ].map(({ icon: Icon, title, text }) => (
                    <div key={title} className="border border-white/10 p-8 rounded-xl bg-white/5">
                        <Icon className="w-6 h-6 text-blue-500 mb-4" />
                        <h3 className="font-bold text-lg mb-2">{title}</h3>
                        <p className="text-gray-400 text-sm">{text}</p>
                    </div>
                ))}
            </section>

            {/* MODES */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-3xl font-bold mb-8">Modes opérationnels</h2>
                <div className="flex gap-4 mb-6">
                    {(Object.keys(modes) as UnitMode[]).map(m => (
                        <button key={m} onClick={() => setMode(m)} className={`px-6 py-2 text-xs uppercase tracking-widest border ${mode === m ? 'border-blue-500 text-blue-500' : 'border-white/10 text-gray-400'} transition-all`}>
                            {m}
                        </button>
                    ))}
                </div>
                <p className="font-mono text-sm text-gray-400">{modes[mode]}</p>
            </section>

            {/* SPECS */}
            <section className="bg-black/40 py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12">Spécifications techniques</h2>
                    <div className="grid sm:grid-cols-2 gap-6 font-mono text-sm">
                        {[['Degrees of Freedom', '41 DOF'], ['Autonomie', '8h'], ['Capteurs', 'Vision / Lidar / Audio'], ['Charge utile', '10 kg'], ['Processeur IA', '2.5 TFLOPS'], ['Sécurité', 'Certifié ISO / CE']]
                            .map(([k, v]) => (
                                <div key={k} className="flex justify-between border-b border-white/10 py-3">
                                    <span className="text-gray-500">{k}</span>
                                    <span>{v}</span>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* SECURITY */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <div className="flex items-start gap-6">
                    <Shield className="w-10 h-10 text-blue-500" />
                    <div>
                        <h3 className="text-xl font-bold mb-2">Sécurité & conformité</h3>
                        <p className="text-gray-400 text-sm">Systèmes de protection humaine, arrêt d'urgence matériel, conformité réglementaire internationale.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center">
                <h2 className="text-4xl font-black mb-6">Prêt à découvrir le futur humanoïde ?</h2>
                <button className="mt-6 px-10 py-4 bg-blue-600 hover:bg-blue-500 transition-all text-xs font-bold uppercase tracking-widest">
                    Demander une démonstration
                </button>
            </section>

            <footer className="pb-12 text-center text-[10px] font-mono text-gray-500">
                UBTECH Walker S2 • Concept expérimental
            </footer>

            {demoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                        onClick={() => setDemoOpen(false)}
                    />

                    <div className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden border border-white/10">

                        {/* HEADER */}
                        <div className="flex justify-between items-center p-4 border-b border-white/10">
                            <span className="font-mono text-xs text-blue-500 tracking-widest">
                                LIVE_DEMO_FEED
                            </span>
                            <button
                                onClick={() => setDemoOpen(false)}
                                className="text-white/60 cursor-pointer hover:text-red-500 text-xs font-mono"
                            >
                                CLOSE
                            </button>
                        </div>
                        {/* VIDEO YOUTUBE */}
                        <div className="relative w-full pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-b-2xl"
                                src="https://www.youtube.com/embed/nzflxCHT4vw?autoplay=1&mute=1&loop=1&playlist=nzflxCHT4vw&controls=1"
                                title="Walker Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>


                        {/* FOOTER HUD */}
                        <div className="p-4 flex justify-between text-[10px] font-mono text-white/40">
                            <span>UNIT: WALKER_S2</span>
                            <span className="animate-pulse text-blue-500">● SYSTEM_ACTIVE</span>
                        </div>
                    </div>
                </div>
            )}


        </main>
    );
}
