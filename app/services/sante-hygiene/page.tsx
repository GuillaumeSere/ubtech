import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowLeft, Thermometer, Zap, Activity } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';

const SanteHygiene = () => {
    const pointsForts = [
        {
            title: "Élimination Pathogène",
            desc: "Destruction à 99.9% des virus et bactéries via rayonnement UV-C certifié.",
            icon: <Zap className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Navigation Autonome",
            desc: "Cartographie complète des zones hospitalières pour un nettoyage sans angle mort.",
            icon: <Activity className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Sécurité Opérationnelle",
            desc: "Détection automatique de présence humaine pour interrompre les cycles UV dangereux.",
            icon: <ShieldCheck className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#020617] text-white p-8">
                {/* Bouton Retour */}
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors mb-12 group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Retour aux services
                </Link>

                <div className="max-w-4xl mx-auto">
                    {/* Header de la page */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                            <ShieldCheck className="w-8 h-8 text-blue-500" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight">Santé & Hygiène</h1>
                            <p className="text-blue-500 font-mono text-sm mt-1">Logistique de désinfection UV-C</p>
                        </div>
                    </div>

                    {/* Section Explications */}
                    <section className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold">Désinfection autonome des milieux hospitaliers</h2>
                            <p className="text-gray-400 leading-relaxed">
                                Nos solutions robotiques utilisent la technologie <strong>ADIBOT</strong> pour garantir une stérilisation constante. En automatisant la désinfection, nous réduisons drastiquement les infections nosocomiales tout en protégeant le personnel soignant.
                            </p>
                            <ul className="space-y-4">
                                {["Cycle de désinfection rapide (10-15 min)", "Traçabilité complète des zones traitées", "Réduction des coûts de nettoyage"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Vidéo YouTube ADIBOT (Désinfection UV-C) */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-slate-900 border border-white/10 rounded-2xl h-64 overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/a1GXKY5htI0?autoplay=1&mute=1&loop=1&playlist=a1GXKY5htI0"
                                    title="UBTECH ADIBOT UV-C Disinfection"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </section>

                    {/* Grille de fonctionnalités */}
                    <div className="grid md:grid-cols-3 gap-6 mt-16">
                        {pointsForts.map((point, i) => (
                            <div key={i} className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl">
                                <div className="mb-4">{point.icon}</div>
                                <h3 className="font-bold mb-2">{point.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{point.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default SanteHygiene;