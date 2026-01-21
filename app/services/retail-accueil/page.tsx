import React from 'react';
import { Users, CheckCircle2, ArrowLeft, Bot, MessageSquare, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import PageTransition from '@/components/ui/PageTransition';

const RetailAccueil = () => {
    const pointsForts = [
        {
            title: "Interaction Naturelle",
            desc: "IA de reconnaissance vocale et faciale pour un accueil personnalisé.",
            icon: <MessageSquare className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Orientation Intelligente",
            desc: "Guidage autonome des clients vers les points d'intérêt spécifiques.",
            icon: <Bot className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Analyse d'Audience",
            desc: "Statistiques en temps réel sur les flux et le profil des visiteurs.",
            icon: <BarChart3 className="w-5 h-5 text-blue-500" />
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
                        <Users className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Retail & Accueil</h1>
                        <p className="text-blue-500 font-mono text-sm mt-1">98% de satisfaction client mesurée</p>
                    </div>
                </div>

                {/* Section Explications */}
                <section className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">L'expérience client réinventée par le robot Cruzr</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Le service Retail & Accueil d'UBTECH utilise la puissance du robot <strong>Cruzr</strong> pour fluidifier vos points de vente et halls d'accueil. Ce robot humanoïde ne se contente pas de saluer ; il devient un véritable assistant capable de transformer une attente passive en une interaction engageante.
                        </p>
                        <ul className="space-y-4">
                            {["Réduction du temps d'attente perçu", "Uniformité de l'accueil 24/7", "Collecte de données anonymisées"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Carte Visuelle / Image Placeholder */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-slate-900 border border-white/10 rounded-2xl h-64 overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/9kLt-ElGazQ?autoplay=1&mute=1&loop=1&playlist=9kLt-ElGazQ"
                                title="Cruzr: Intelligent Humanoid Service Robot"
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

export default RetailAccueil;