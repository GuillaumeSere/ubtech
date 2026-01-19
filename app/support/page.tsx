'use client';

import PageTransition from '@/components/ui/PageTransition';
import { Terminal, ShieldAlert, Cpu, LifeBuoy, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SupportPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#020202] pt-32 pb-20 px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* COLONNE GAUCHE : STATUT SYSTÈME (NOUVEAU) */}
        <div className="hidden lg:flex flex-col gap-6 w-64">
          <div className="p-4 border border-blue-500/20 bg-blue-500/5 rounded-xl">
            <div className="flex items-center gap-2 mb-4 text-blue-400 font-mono text-[10px] uppercase tracking-tighter">
              <Zap className="w-3 h-3" /> System_Health
            </div>
            <div className="space-y-3">
              {[
                { label: "Cloud_Link", status: "Operational", color: "text-green-500" },
                { label: "AI_Core", status: "Active", color: "text-green-500" },
                { label: "Fleet_Manager", status: "Stable", color: "text-blue-500" }
              ].map((s, i) => (
                <div key={i} className="flex justify-between font-mono text-[9px]">
                  <span className="text-gray-500">{s.label}</span>
                  <span className={s.color}>{s.status}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border border-white/5 bg-white/5 rounded-xl text-[10px] font-mono text-gray-500 leading-relaxed">
            <p>// NOTE: Les requêtes prioritaires sont traitées en moins de 120ms par nos unités Walker X.</p>
          </div>
        </div>

        {/* LE TERMINAL DE SUPPORT */}
        <div className="w-full max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-black border border-blue-900/40 rounded-xl overflow-hidden shadow-[0_0_60px_rgba(0,102,255,0.15)]"
          >
            {/* BARRE DE TITRE OS X/LINUX */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 hover:bg-red-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 hover:bg-yellow-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 hover:bg-green-500 transition-colors" />
              </div>
              <div className="flex items-center gap-2 text-gray-500 font-mono text-[9px] uppercase tracking-[0.2em]">
                <Terminal className="w-3 h-3" />
                <span>Encrypted_Session // UB-SUP-77</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <header className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-2 font-mono flex items-center gap-3">
                  <span className="text-blue-500">$</span> OPEN_TICKET
                  <span className="w-2 h-6 bg-blue-600 animate-pulse inline-block" />
                </h2>
                <p className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">
                  Initialisation du protocole d'assistance technique...
                </p>
              </header>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <label className="text-[9px] text-blue-500/70 font-mono absolute -top-5 left-0 uppercase tracking-widest">User_Identity</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-blue-500 transition-all font-mono text-sm placeholder:text-zinc-800" 
                      placeholder="Identifiant_Client" 
                    />
                  </div>

                  <div className="group relative">
                    <label className="text-[9px] text-blue-500/70 font-mono absolute -top-5 left-0 uppercase tracking-widest">Priority_Level</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 text-white outline-none focus:border-blue-500 transition-all font-mono text-sm cursor-pointer appearance-none">
                      <option className="bg-[#0a0a0a]">Niveau_01 (Standard)</option>
                      <option className="bg-[#0a0a0a]">Niveau_02 (Urgent)</option>
                      <option className="bg-[#0a0a0a]">Niveau_03 (Critical_Failure)</option>
                    </select>
                  </div>
                </div>

                <div className="group relative">
                  <label className="text-[9px] text-blue-500/70 font-mono absolute -top-5 left-0 uppercase tracking-widest">Log_Description</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-zinc-900/30 border border-white/5 p-4 text-white outline-none focus:border-blue-500/50 transition-all font-mono text-sm mt-4 rounded-lg placeholder:text-zinc-800" 
                    placeholder="Entrez les détails de l'anomalie système ici..." 
                  />
                </div>

                <div className="pt-4">
                  <button className="relative cursor-pointer w-full overflow-hidden group py-4 bg-blue-600 text-white font-bold uppercase text-[10px] tracking-[0.4em] transition-all">
                    <div className="absolute inset-0 w-full h-full bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10">Soumettre_au_Mainframe</span>
                  </button>
                  
                  <div className="mt-6 flex items-center justify-between text-[8px] font-mono text-zinc-600 uppercase">
                    <span>End_to_end_encryption: ACTIVE</span>
                    <span>Server: EU-WEST-1</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}