'use client';

import PageTransition from '@/components/ui/PageTransition';
import { BookOpen, Cpu, Cloud, Award, Users, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IAEducationPage() {
    const curriculumSteps = [
        { level: "Primaire", focus: "Logique & Séquençage", tool: "uCode Blocks" },
        { level: "Collège", focus: "Robotique Modulaire", tool: "Kits Jimu Pro" },
        { level: "Lycée", focus: "Python & Vision par Ordi", tool: "uKit Explore" },
        { level: "Université", focus: "ROS & Deep Learning", tool: "Walker SDK" },
    ];

    const features = [
        {
            title: "Curriculum IA",
            desc: "Aligné sur les standards mondiaux (K-12), nos programmes couvrent les 5 piliers de l'IA.",
            icon: <BookOpen className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Kits Robotiques",
            desc: "Matériel industriel réduit pour l'éducation, incluant capteurs ToF et servomoteurs haute précision.",
            icon: <Cpu className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Plateforme Cloud",
            desc: "Système de gestion de classe (LMS) avec simulation 3D intégrée pour tester le code virtuellement.",
            icon: <Cloud className="w-6 h-6 text-blue-500" />
        }
    ];

    return (
        <PageTransition>
            <main className="min-h-screen bg-[#020202] text-white pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* HERO SECTION AVEC BADGE */}
                    <section className="flex flex-col lg:flex-row items-center gap-16 mb-32">
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10">
                                <ShieldCheck className="w-4 h-4 text-blue-400" />
                                <span className="text-[10px] font-bold tracking-widest text-blue-400 uppercase">Certifié Éducation Mondiale</span>
                            </div>

                            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
                                L'avenir s'écrit en <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">code.</span>
                            </h1>

                            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed font-light">
                                Ubtech Education ne se contente pas de vendre des robots. Nous fournissons
                                un **écosystème complet** pour préparer la prochaine génération à
                                collaborer avec l'intelligence artificielle.
                            </p>

                            <div className="flex gap-4">
                                <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                                    Télécharger le Catalogue
                                </button>
                            </div>
                        </div>

                        {/* VISUEL TECH RÉEL (Simulation d'une UI de programmation) */}
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full" />
                            <div className="relative border border-white/10 bg-zinc-900/50 backdrop-blur-xl rounded-2xl p-4 shadow-2xl">
                                <div className="flex gap-1.5 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                </div>
                                <pre className="font-mono text-[11px] sm:text-sm text-blue-400 whitespace-pre overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500/30 scrollbar-track-transparent">
                                    <code>{`
                                        class RobotExpert(Ubtech):
                                            def learn(self, students):
                                                return students.empower()
                                        # Initialisation de la classe de demain
                                        ubtech_edu = RobotExpert()
                                        ubtech_edu.start_lesson("AI_Logic")
                                 `}</code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* PARCOURS PÉDAGOGIQUE (Timeline) */}
                    <section className="mb-32">
                        <h2 className="text-3xl font-bold mb-12 text-center">Un parcours d'apprentissage continu</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {curriculumSteps.map((step, i) => (
                                <div key={i} className="relative p-6 border border-white/5 bg-linear-to-b from-white/5 to-transparent rounded-xl">
                                    <span className="text-5xl font-black text-white/5 absolute top-2 right-4 italic">{i + 1}</span>
                                    <h4 className="text-blue-500 font-bold mb-1">{step.level}</h4>
                                    <h3 className="text-lg font-bold mb-4">{step.focus}</h3>
                                    <p className="text-xs text-gray-500 font-mono italic">Outil : {step.tool}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* GRILLE DE CARACTÉRISTIQUES */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                        {features.map((f, i) => (
                            <div key={i} className="p-10 border border-white/5 bg-zinc-900/30 rounded-3xl hover:border-blue-500/30 transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-200 group-hover:text-white transition-colors">
                                    {f.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{f.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </section>

                    {/* STATS IMPACT */}
                    <section className="py-20 border-y border-white/5 bg-zinc-950/50 rounded-[4rem]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                            {[
                                { val: "40+", label: "Pays Partenaires", icon: <Globe className="w-4 h-4 mx-auto mb-2 text-gray-600" /> },
                                { val: "1M+", label: "Élèves Impactés", icon: <Users className="w-4 h-4 mx-auto mb-2 text-gray-600" /> },
                                { val: "3000+", label: "Établissements", icon: <Award className="w-4 h-4 mx-auto mb-2 text-gray-600" /> },
                                { val: "24/7", label: "Support Pédagogique", icon: <ShieldCheck className="w-4 h-4 mx-auto mb-2 text-gray-600" /> }
                            ].map((stat, i) => (
                                <div key={i}>
                                    {stat.icon}
                                    <div className="text-5xl font-bold text-white mb-2">{stat.val}</div>
                                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-blue-500 font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </PageTransition>
    );
}