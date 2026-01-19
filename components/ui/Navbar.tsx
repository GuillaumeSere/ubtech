'use client'; // Indique à Next.js que ce composant est interactif

import { useState } from 'react';
import Link from 'next/link';
import { Cpu } from 'lucide-react';

export default function Navbar() {
    // État pour gérer l'ouverture du menu mobile
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Robots Humanoïdes', href: '/robots' },
        { name: 'IA & Éducation', href: '/ia-education' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Support', href: '/support' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-100 px-6 py-4 border-b border-white/10 backdrop-blur-md bg-black/40">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <Link className="text-xl font-black tracking-tighter text-white" href="/">
                        <span className="text-xl font-black tracking-tighter text-white">UBTECH</span>
                    </Link>
                </div>

                {/* LIENS DESKTOP */}
                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* BOUTON MOBILE / ACTIONS */}
                <div className="flex items-center gap-4">
                    <Link href="/support">
                        <button className="hidden md:block px-5 py-2 text-sm font-semibold cursor-pointer text-black bg-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-white/5">
                            Contactez-nous
                        </button>
                    </Link>

                    {/* Bouton Hamburger : On change l'état au clic */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            // Icône Fermer (X)
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Icône Menu (Barres)
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* MENU MOBILE (S'affiche uniquement si isOpen est vrai) */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)} // Ferme le menu quand on clique sur un lien
                            className="text-lg font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/support" onClick={() => setIsOpen(false)} className="w-full">
                        <button className="w-full py-4 text-sm font-semibold cursor-pointer text-black bg-white rounded-lg uppercase tracking-widest">
                            Contactez-nous
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
}