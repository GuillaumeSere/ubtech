import React from 'react';
import { Zap, CheckCircle2, ArrowLeft, Box, TrendingUp, Drill } from 'lucide-react';
import Link from 'next/link';

const Logistique = () => {
    const pointsForts = [
        {
            title: "Gestion d'Entrepôt",
            desc: "Cartographie LiDAR pour une navigation fluide parmi les obstacles et le personnel.",
            icon: <Box className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Gain de Productivité",
            desc: "Optimisation des trajets de préparation de commandes pour atteindre +40% d'efficacité.",
            icon: <TrendingUp className="w-5 h-5 text-blue-500" />
        },
        {
            title: "Transport de Charges",
            desc: "Capacité de remorquage et de transport de palettes de manière totalement autonome.",
            icon: <Drill className="w-5 h-5 text-blue-500" />
        }
    ];

    return (
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
                        <Zap className="w-8 h-8 text-blue-500" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight">Logistique</h1>
                        <p className="text-blue-500 font-mono text-sm mt-1">+40% d'efficacité opérationnelle</p>
                    </div>
                </div>

                {/* Section Explications */}
                <section className="grid md:grid-cols-2 gap-12 mt-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Inventaire automatisé et transport de charges</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Nos robots logistiques intelligents transforment la supply chain en automatisant le transport interne de marchandises. Grâce à une intégration directe avec vos systèmes de gestion de stocks (WMS), ils assurent une traçabilité totale et une exécution rapide des tâches pénibles.
                        </p>
                        <ul className="space-y-4">
                            {["Réduction des erreurs d'inventaire", "Sécurité totale en milieu partagé", "Déploiement rapide sans modification d'infrastructure"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Vidéo YouTube Logistique (AMR/Walker) */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-slate-900 border border-white/10 rounded-2xl h-64 overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/Zz1houBSJjY?autoplay=1&mute=1&loop=1&playlist=Zz1houBSJjY"
                                title="UBTECH Logistics & AMR Solutions"
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
    );
};

export default Logistique;