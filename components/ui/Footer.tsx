'use client';

import Link from 'next/link';
import { Cpu, ShieldCheck, Globe, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION PRINCIPALE : FLUX DE DONNÉES */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* LOGO & STATUS */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">UBTECH</span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed font-mono uppercase tracking-tighter">
              Leader mondial en robotique humanoïde et solutions d'intelligence artificielle pour l'industrie et l'éducation.
            </p>
            <div className="flex items-center gap-3">
               <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">Global_Server: Active</span>
            </div>
          </div>

          {/* NAVIGATION PRODUITS */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Écosystème</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-mono">
              <li><Link href="/robots" className="hover:text-blue-500 transition-colors">/_Robots_Humanoïdes</Link></li>
              <li><Link href="/solutions" className="hover:text-blue-500 transition-colors">/_Solutions_Pro</Link></li>
              <li><Link href="/ia-education" className="hover:text-blue-500 transition-colors">/_IA_Éducation</Link></li>
              <li><Link href="/support" className="hover:text-blue-500 transition-colors">/_Centre_Support</Link></li>
            </ul>
          </div>

          {/* LÉGAL & COMPLIANCE */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Protocole</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-mono">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Privacy_Policy</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Terms_of_Service</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Ethics_of_AI</Link></li>
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Cookie_Logs</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER / DATA STREAM */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Flux_Infos</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="votre@email.ai" 
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-xs font-mono text-white outline-none focus:border-blue-500/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 text-[10px] font-bold uppercase tracking-tighter hover:text-white">
                Sub_
              </button>
            </div>
            <div className="flex gap-4">
              <Linkedin className="w-4 h-4 text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-gray-600 hover:text-blue-400 cursor-pointer transition-colors" />
              <Github className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

        </div>

        {/* BARRE INFÉRIEURE : FAISCEAU DE DONNÉES */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3 h-3 text-gray-600" />
              <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest italic tracking-tighter">Secured by UB-Kernel</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-3 h-3 text-gray-600" />
              <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest italic tracking-tighter">Nodes: Paris / Shenzhen / NY</span>
            </div>
          </div>
          
          <div className="text-[10px] font-mono text-gray-700">
            © {currentYear} UBTECH_SYSTEMS_INTL. ALL_RIGHTS_RESERVED.
          </div>
        </div>

      </div>

      {/* DÉCORATION : Lignes laser en arrière-plan */}
      <div className="absolute bottom-0 left-0 w-full h-1px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
    </footer>
  );
}